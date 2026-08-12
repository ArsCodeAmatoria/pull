package httpapi

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/ArsCodeAmatoria/pull/api/internal/auth"
	"github.com/ArsCodeAmatoria/pull/api/internal/config"
	"github.com/ArsCodeAmatoria/pull/api/internal/store"
	"github.com/ArsCodeAmatoria/pull/api/internal/workflows"
	"github.com/gorilla/websocket"
	"golang.org/x/crypto/bcrypt"
)

type Server struct {
	Cfg    config.Config
	Store  *store.Store
	Runner *workflows.Runner
	hubs   sync.Map
	upg    websocket.Upgrader
}

func New(cfg config.Config, st *store.Store, runner *workflows.Runner) *Server {
	return &Server{
		Cfg:    cfg,
		Store:  st,
		Runner: runner,
		upg:    websocket.Upgrader{CheckOrigin: func(r *http.Request) bool { return true }},
	}
}

func (s *Server) Handler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /health", s.health)
	mux.HandleFunc("POST /instructor/login", s.instructorLogin)
	mux.HandleFunc("POST /instructor/logout", s.instructorLogout)
	mux.HandleFunc("GET /me", s.me)
	mux.HandleFunc("POST /instructor/password", s.changePassword)
	mux.HandleFunc("POST /class-days", s.createClassDay)
	mux.HandleFunc("GET /class-days/current", s.currentClassDay)
	mux.HandleFunc("GET /class-days/{id}", s.getClassDay)
	mux.HandleFunc("GET /class-days/{id}/roster", s.roster)
	mux.HandleFunc("GET /class-days/{id}/cca", s.listCCA)
	mux.HandleFunc("GET /class-days/{id}/packets", s.listPackets)
	mux.HandleFunc("POST /class-days/{id}/digest", s.digest)
	mux.HandleFunc("GET /class-days/{id}/slide", s.getSlide)
	mux.HandleFunc("PUT /class-days/{id}/slide", s.putSlide)
	mux.HandleFunc("GET /class-days/{id}/follow", s.follow)
	mux.HandleFunc("POST /class-days/{id}/join", s.joinByID)
	mux.HandleFunc("POST /join", s.joinByCode)
	mux.HandleFunc("POST /cca", s.upsertCCA)
	mux.HandleFunc("POST /cca/{id}/photos", s.uploadPhoto)
	mux.HandleFunc("POST /cca/{id}/submit", s.submitCCA)
	mux.HandleFunc("POST /practice/attempts", s.practice)
	return cors(mux)
}

func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", r.Header.Get("Origin"))
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS")
		if r.Method == http.MethodOptions {
			w.WriteHeader(204)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}

func (s *Server) health(w http.ResponseWriter, r *http.Request) {
	_ = s.Store.ExpireClassDays()
	writeJSON(w, 200, map[string]string{"ok": "true"})
}

func (s *Server) instructorLogin(w http.ResponseWriter, r *http.Request) {
	var body struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		writeJSON(w, 400, map[string]string{"error": "invalid json"})
		return
	}
	inst, err := s.Store.InstructorByUsername(strings.TrimSpace(body.Username))
	if err != nil || inst == nil || !inst.Active || !store.CheckPassword(inst.PasswordHash, body.Password) {
		writeJSON(w, 401, map[string]string{"error": "invalid credentials"})
		return
	}
	token, err := auth.SignInstructor(s.Cfg.JWTSecret, inst.ID, inst.Username, inst.DisplayName, inst.MustChangePassword, 30*24*time.Hour)
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": "token"})
		return
	}
	http.SetCookie(w, &http.Cookie{
		Name:     "pull_instructor",
		Value:    token,
		Path:     "/",
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
		MaxAge:   30 * 24 * 3600,
	})
	writeJSON(w, 200, map[string]any{
		"id":                 inst.ID,
		"username":           inst.Username,
		"displayName":        inst.DisplayName,
		"mustChangePassword": inst.MustChangePassword,
	})
}

func (s *Server) instructorLogout(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{Name: "pull_instructor", Value: "", Path: "/", MaxAge: -1})
	writeJSON(w, 200, map[string]string{"ok": "true"})
}

func (s *Server) instructor(r *http.Request) *auth.InstructorClaims {
	c, _ := r.Cookie("pull_instructor")
	if c == nil {
		if h := r.Header.Get("Authorization"); strings.HasPrefix(h, "Bearer ") {
			cl, err := auth.ParseInstructor(s.Cfg.JWTSecret, strings.TrimPrefix(h, "Bearer "))
			if err == nil {
				return cl
			}
		}
		return nil
	}
	cl, err := auth.ParseInstructor(s.Cfg.JWTSecret, c.Value)
	if err != nil {
		return nil
	}
	return cl
}

func (s *Server) day(r *http.Request) *auth.DayClaims {
	c, _ := r.Cookie("pull_day")
	if c == nil {
		return nil
	}
	cl, err := auth.ParseDay(s.Cfg.JWTSecret, c.Value)
	if err != nil {
		return nil
	}
	return cl
}

func (s *Server) me(w http.ResponseWriter, r *http.Request) {
	if inst := s.instructor(r); inst != nil {
		writeJSON(w, 200, map[string]any{
			"role":               "instructor",
			"id":                 inst.InstructorID,
			"username":           inst.Username,
			"displayName":        inst.DisplayName,
			"mustChangePassword": inst.MustChange,
		})
		return
	}
	if d := s.day(r); d != nil {
		writeJSON(w, 200, map[string]any{
			"role":        "attendee",
			"id":          d.AttendeeID,
			"classDayId":  d.ClassDayID,
			"displayName": d.DisplayName,
		})
		return
	}
	writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
}

func (s *Server) changePassword(w http.ResponseWriter, r *http.Request) {
	inst := s.instructor(r)
	if inst == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	var body struct {
		Current string `json:"current"`
		Next    string `json:"next"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil || len(body.Next) < 8 {
		writeJSON(w, 400, map[string]string{"error": "password must be at least 8 characters"})
		return
	}
	rec, err := s.Store.InstructorByID(inst.InstructorID)
	if err != nil || !store.CheckPassword(rec.PasswordHash, body.Current) {
		writeJSON(w, 401, map[string]string{"error": "current password incorrect"})
		return
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Next), bcrypt.DefaultCost)
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": "hash"})
		return
	}
	if err := s.Store.SetPassword(inst.InstructorID, string(hash)); err != nil {
		writeJSON(w, 500, map[string]string{"error": "save"})
		return
	}
	token, _ := auth.SignInstructor(s.Cfg.JWTSecret, inst.InstructorID, inst.Username, inst.DisplayName, false, 30*24*time.Hour)
	http.SetCookie(w, &http.Cookie{Name: "pull_instructor", Value: token, Path: "/", HttpOnly: true, SameSite: http.SameSiteLaxMode, MaxAge: 30 * 24 * 3600})
	writeJSON(w, 200, map[string]string{"ok": "true"})
}

func (s *Server) createClassDay(w http.ResponseWriter, r *http.Request) {
	inst := s.instructor(r)
	if inst == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	if inst.MustChange {
		writeJSON(w, 403, map[string]string{"error": "change password first"})
		return
	}
	var body struct {
		Course string `json:"course"`
		Locale string `json:"locale"`
	}
	_ = json.NewDecoder(r.Body).Decode(&body)
	if body.Course == "" {
		body.Course = "rigger-competency"
	}
	if body.Locale == "" {
		body.Locale = "en"
	}
	day, err := s.Store.CreateClassDay(inst.InstructorID, body.Course, body.Locale, s.Cfg.ClassDayTTL)
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	writeJSON(w, 200, classDayJSON(day, s.Cfg.AppURL))
}

func (s *Server) currentClassDay(w http.ResponseWriter, r *http.Request) {
	inst := s.instructor(r)
	if inst == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	_ = s.Store.ExpireClassDays()
	day, err := s.Store.LatestOpenClassDay(inst.InstructorID)
	if err != nil {
		writeJSON(w, 404, map[string]string{"error": "none"})
		return
	}
	writeJSON(w, 200, classDayJSON(day, s.Cfg.AppURL))
}

func (s *Server) getClassDay(w http.ResponseWriter, r *http.Request) {
	day, err := s.Store.ClassDayByID(r.PathValue("id"))
	if err != nil {
		writeJSON(w, 404, map[string]string{"error": "not found"})
		return
	}
	writeJSON(w, 200, classDayJSON(day, s.Cfg.AppURL))
}

func classDayJSON(d *store.ClassDay, appURL string) map[string]any {
	joinURL := strings.TrimRight(appURL, "/") + "/join?code=" + d.JoinCode
	return map[string]any{
		"id":           d.ID,
		"joinCode":     d.JoinCode,
		"joinUrl":      joinURL,
		"courseSlug":   d.CourseSlug,
		"locale":       d.Locale,
		"status":       d.Status,
		"expiresAt":    d.ExpiresAt.Format(time.RFC3339),
		"currentSlide": d.CurrentSlide,
		"instructor":   d.Instructor,
	}
}

func (s *Server) roster(w http.ResponseWriter, r *http.Request) {
	if s.instructor(r) == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	list, err := s.Store.Roster(r.PathValue("id"))
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	if list == nil {
		list = []store.Attendee{}
	}
	writeJSON(w, 200, list)
}

func (s *Server) listCCA(w http.ResponseWriter, r *http.Request) {
	if s.instructor(r) == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	list, err := s.Store.ListAssessments(r.PathValue("id"))
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	if list == nil {
		list = []store.Assessment{}
	}
	writeJSON(w, 200, list)
}

func (s *Server) listPackets(w http.ResponseWriter, r *http.Request) {
	if s.instructor(r) == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	list, err := s.Store.ListPackets(r.PathValue("id"))
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	if list == nil {
		list = []store.Packet{}
	}
	writeJSON(w, 200, list)
}

func (s *Server) digest(w http.ResponseWriter, r *http.Request) {
	if s.instructor(r) == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	day, err := s.Store.ClassDayByID(r.PathValue("id"))
	if err != nil {
		writeJSON(w, 404, map[string]string{"error": "not found"})
		return
	}
	if err := s.Runner.SendDayDigest(day); err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	writeJSON(w, 200, map[string]string{"ok": "true"})
}

func (s *Server) getSlide(w http.ResponseWriter, r *http.Request) {
	day, err := s.Store.ClassDayByID(r.PathValue("id"))
	if err != nil {
		writeJSON(w, 404, map[string]string{"error": "not found"})
		return
	}
	writeJSON(w, 200, map[string]int{"index": day.CurrentSlide})
}

func (s *Server) putSlide(w http.ResponseWriter, r *http.Request) {
	if s.instructor(r) == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	var body struct {
		Index int `json:"index"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		writeJSON(w, 400, map[string]string{"error": "invalid json"})
		return
	}
	id := r.PathValue("id")
	if err := s.Store.SetSlide(id, body.Index); err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	s.broadcast(id, body.Index)
	writeJSON(w, 200, map[string]int{"index": body.Index})
}

type hub struct {
	mu    sync.Mutex
	conns map[*websocket.Conn]struct{}
}

func (s *Server) hub(id string) *hub {
	v, _ := s.hubs.LoadOrStore(id, &hub{conns: map[*websocket.Conn]struct{}{}})
	return v.(*hub)
}

func (s *Server) broadcast(id string, index int) {
	h := s.hub(id)
	h.mu.Lock()
	defer h.mu.Unlock()
	for c := range h.conns {
		_ = c.WriteJSON(map[string]int{"index": index})
	}
}

func (s *Server) follow(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")
	day, err := s.Store.ClassDayByID(id)
	if err != nil {
		writeJSON(w, 404, map[string]string{"error": "not found"})
		return
	}
	conn, err := s.upg.Upgrade(w, r, nil)
	if err != nil {
		return
	}
	h := s.hub(id)
	h.mu.Lock()
	h.conns[conn] = struct{}{}
	h.mu.Unlock()
	_ = conn.WriteJSON(map[string]int{"index": day.CurrentSlide})
	defer func() {
		h.mu.Lock()
		delete(h.conns, conn)
		h.mu.Unlock()
		_ = conn.Close()
	}()
	for {
		if _, _, err := conn.ReadMessage(); err != nil {
			return
		}
	}
}

func (s *Server) joinByID(w http.ResponseWriter, r *http.Request) {
	s.join(w, r, r.PathValue("id"), "")
}

func (s *Server) joinByCode(w http.ResponseWriter, r *http.Request) {
	s.join(w, r, "", "")
}

func (s *Server) join(w http.ResponseWriter, r *http.Request, id, _ string) {
	var body struct {
		Code       string `json:"code"`
		Name       string `json:"name"`
		EmployeeID string `json:"employeeId"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		writeJSON(w, 400, map[string]string{"error": "invalid json"})
		return
	}
	name := strings.TrimSpace(body.Name)
	if name == "" {
		writeJSON(w, 400, map[string]string{"error": "name required"})
		return
	}
	var day *store.ClassDay
	var err error
	if id != "" {
		day, err = s.Store.ClassDayByID(id)
	} else {
		day, err = s.Store.ClassDayByCode(strings.TrimSpace(body.Code))
	}
	if err != nil || day.Status != "open" || time.Now().After(day.ExpiresAt) {
		writeJSON(w, 404, map[string]string{"error": "class day not open"})
		return
	}
	att, err := s.Store.Join(day.ID, name, strings.TrimSpace(body.EmployeeID))
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	token, err := auth.SignDay(s.Cfg.JWTSecret, att.ID, day.ID, att.DisplayName, day.ExpiresAt)
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": "token"})
		return
	}
	http.SetCookie(w, &http.Cookie{
		Name:     "pull_day",
		Value:    token,
		Path:     "/",
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
		Expires:  day.ExpiresAt,
	})
	writeJSON(w, 200, map[string]any{
		"attendeeId": att.ID,
		"classDayId": day.ID,
		"joinCode":   day.JoinCode,
		"courseSlug": day.CourseSlug,
	})
}

func (s *Server) upsertCCA(w http.ResponseWriter, r *http.Request) {
	if s.instructor(r) == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	var body struct {
		ClassDayID string   `json:"classDayId"`
		AttendeeID string   `json:"attendeeId"`
		Score      *float64 `json:"score"`
		Passed     *bool    `json:"passed"`
		Notes      string   `json:"notes"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		writeJSON(w, 400, map[string]string{"error": "invalid json"})
		return
	}
	as, err := s.Store.UpsertAssessment(body.ClassDayID, body.AttendeeID, body.Score, body.Passed, body.Notes)
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	writeJSON(w, 200, as)
}

func (s *Server) uploadPhoto(w http.ResponseWriter, r *http.Request) {
	if s.instructor(r) == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	id := r.PathValue("id")
	if err := r.ParseMultipartForm(16 << 20); err != nil {
		writeJSON(w, 400, map[string]string{"error": "multipart"})
		return
	}
	file, hdr, err := r.FormFile("photo")
	if err != nil {
		writeJSON(w, 400, map[string]string{"error": "photo required"})
		return
	}
	defer file.Close()
	dir := filepath.Join(s.Cfg.DataDir, "photos", id)
	if err := os.MkdirAll(dir, 0o755); err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	ext := filepath.Ext(hdr.Filename)
	if ext == "" {
		ext = ".jpg"
	}
	path := filepath.Join(dir, fmt.Sprintf("%d%s", time.Now().UnixNano(), ext))
	out, err := os.Create(path)
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	defer out.Close()
	if _, err := io.Copy(out, file); err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	ct := hdr.Header.Get("Content-Type")
	if ct == "" {
		ct = "image/jpeg"
	}
	if err := s.Store.AddArtifact(id, path, ct); err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	writeJSON(w, 200, map[string]string{"ok": "true"})
}

func (s *Server) submitCCA(w http.ResponseWriter, r *http.Request) {
	inst := s.instructor(r)
	if inst == nil {
		writeJSON(w, 401, map[string]string{"error": "unauthenticated"})
		return
	}
	as, err := s.Store.AssessmentByID(r.PathValue("id"))
	if err != nil {
		writeJSON(w, 404, map[string]string{"error": "not found"})
		return
	}
	if as.Score == nil || as.PhotoCount < 1 {
		writeJSON(w, 400, map[string]string{"error": "score and at least one photo required"})
		return
	}
	day, err := s.Store.ClassDayByID(as.ClassDayID)
	if err != nil {
		writeJSON(w, 404, map[string]string{"error": "class day"})
		return
	}
	photos, err := s.Store.ArtifactPaths(as.ID)
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	_ = s.Store.SetAssessmentStatus(as.ID, "submitted")
	result := "Did not pass"
	if as.Passed != nil && *as.Passed {
		result = "Pass"
	}
	score := ""
	if as.Score != nil {
		score = strconv.FormatFloat(*as.Score, 'f', 1, 64)
	}
	rec, _ := s.Store.InstructorByID(inst.InstructorID)
	email := ""
	if rec != nil {
		email = rec.Email
	}
	err = s.Runner.SendCCAPacket(workflows.PacketInput{
		AssessmentID: as.ID,
		ClassDayID:   day.ID,
		Attendee:     as.Attendee,
		Instructor:   day.Instructor,
		Course:       day.CourseSlug,
		Date:         day.CreatedAt.Format("2006-01-02"),
		Score:        score,
		Result:       result,
		Notes:        as.Notes,
		Photos:       photos,
		ArchiveTo:    day.ArchiveEmail,
		BranchTo:     day.BranchEmail,
		InstructorTo: email,
	})
	if err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	writeJSON(w, 200, map[string]string{"ok": "true", "status": "emailed"})
}

func (s *Server) practice(w http.ResponseWriter, r *http.Request) {
	d := s.day(r)
	var body struct {
		Score float64 `json:"score"`
	}
	_ = json.NewDecoder(r.Body).Decode(&body)
	if d == nil {
		writeJSON(w, 200, map[string]string{"ok": "true", "stored": "false"})
		return
	}
	if err := s.Store.RecordPractice(d.AttendeeID, d.ClassDayID, body.Score); err != nil {
		writeJSON(w, 500, map[string]string{"error": err.Error()})
		return
	}
	writeJSON(w, 200, map[string]string{"ok": "true", "stored": "true"})
}
