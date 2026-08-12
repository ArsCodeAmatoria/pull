package store

import (
	"crypto/rand"
	"database/sql"
	"encoding/hex"
	"fmt"
	"strings"
	"time"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type Store struct {
	DB *sql.DB
}

type Instructor struct {
	ID                 string
	Username           string
	DisplayName        string
	Email              string
	PasswordHash       string
	MustChangePassword bool
	Active             bool
}

type ClassDay struct {
	ID            string
	OrgID         string
	InstructorID  string
	Instructor    string
	CourseSlug    string
	Locale        string
	JoinCode      string
	Status        string
	ExpiresAt     time.Time
	CreatedAt     time.Time
	CurrentSlide  int
	ArchiveEmail  string
	BranchEmail   string
}

type Attendee struct {
	ID          string
	ClassDayID  string
	DisplayName string
	EmployeeID  string
	JoinedAt    time.Time
}

type Assessment struct {
	ID          string
	ClassDayID  string
	AttendeeID  string
	Attendee    string
	Score       *float64
	Passed      *bool
	Notes       string
	Status      string
	UpdatedAt   time.Time
	PhotoCount  int
}

type Packet struct {
	ID           string
	AssessmentID string
	ClassDayID   string
	Kind         string
	WorkflowID   string
	Recipients   string
	Status       string
	Error        string
	SentAt       *time.Time
}

var Roster = []struct{ Username, Display string }{
	{"britt", "Britt"},
	{"leigh", "Leigh"},
	{"andrew", "Andrew"},
	{"chris", "Chris"},
	{"tyler", "Tyler"},
	{"hoyt", "Hoyt"},
	{"mitch", "Mitch"},
	{"jer", "Jer"},
	{"jade", "Jade"},
}

func (s *Store) Seed(bootstrapPassword, archiveEmail, branchEmail string) error {
	now := time.Now().UTC().Format(time.RFC3339)
	orgID := "org-default"
	_, err := s.DB.Exec(
		`INSERT INTO organizations (id, name, archive_email, branch_email) VALUES (?, ?, ?, ?)
		 ON CONFLICT(id) DO UPDATE SET archive_email=excluded.archive_email, branch_email=excluded.branch_email`,
		orgID, "Company", archiveEmail, branchEmail,
	)
	if err != nil {
		_, err = s.DB.Exec(
			`INSERT INTO organizations (id, name, archive_email, branch_email) VALUES ($1, $2, $3, $4)
			 ON CONFLICT (id) DO UPDATE SET archive_email=EXCLUDED.archive_email, branch_email=EXCLUDED.branch_email`,
			orgID, "Company", archiveEmail, branchEmail,
		)
		if err != nil {
			return err
		}
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(bootstrapPassword), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	for _, r := range Roster {
		id := "inst-" + r.Username
		email := r.Username + "@company.local"
		_, err := s.DB.Exec(
			`INSERT INTO instructors (id, username, display_name, email, password_hash, must_change_password, active, created_at)
			 VALUES (?, ?, ?, ?, ?, 1, 1, ?)
			 ON CONFLICT(username) DO NOTHING`,
			id, r.Username, r.Display, email, string(hash), now,
		)
		if err != nil {
			_, err = s.DB.Exec(
				`INSERT INTO instructors (id, username, display_name, email, password_hash, must_change_password, active, created_at)
				 VALUES ($1, $2, $3, $4, $5, 1, 1, $6)
				 ON CONFLICT (username) DO NOTHING`,
				id, r.Username, r.Display, email, string(hash), now,
			)
			if err != nil {
				return err
			}
		}
	}
	return nil
}

func (s *Store) InstructorByUsername(username string) (*Instructor, error) {
	row := s.DB.QueryRow(
		`SELECT id, username, display_name, email, password_hash, must_change_password, active
		 FROM instructors WHERE lower(username)=lower(?)`,
		username,
	)
	inst, err := scanInstructor(row)
	if err == sql.ErrNoRows {
		row = s.DB.QueryRow(
			`SELECT id, username, display_name, email, password_hash, must_change_password, active
			 FROM instructors WHERE lower(username)=lower($1)`,
			username,
		)
		return scanInstructor(row)
	}
	return inst, err
}

func (s *Store) InstructorByID(id string) (*Instructor, error) {
	row := s.DB.QueryRow(
		`SELECT id, username, display_name, email, password_hash, must_change_password, active
		 FROM instructors WHERE id=?`, id,
	)
	inst, err := scanInstructor(row)
	if err == sql.ErrNoRows {
		row = s.DB.QueryRow(
			`SELECT id, username, display_name, email, password_hash, must_change_password, active
			 FROM instructors WHERE id=$1`, id,
		)
		return scanInstructor(row)
	}
	return inst, err
}

func scanInstructor(row *sql.Row) (*Instructor, error) {
	var i Instructor
	var mcp, active int
	if err := row.Scan(&i.ID, &i.Username, &i.DisplayName, &i.Email, &i.PasswordHash, &mcp, &active); err != nil {
		return nil, err
	}
	i.MustChangePassword = mcp == 1
	i.Active = active == 1
	return &i, nil
}

func (s *Store) SetPassword(id, hash string) error {
	_, err := s.DB.Exec(`UPDATE instructors SET password_hash=?, must_change_password=0 WHERE id=?`, hash, id)
	if err != nil {
		_, err = s.DB.Exec(`UPDATE instructors SET password_hash=$1, must_change_password=0 WHERE id=$2`, hash, id)
	}
	return err
}

func joinCode() string {
	b := make([]byte, 4)
	_, _ = rand.Read(b)
	return strings.ToUpper(hex.EncodeToString(b))
}

func (s *Store) CreateClassDay(instructorID, course, locale string, ttl time.Duration) (*ClassDay, error) {
	id := uuid.NewString()
	code := joinCode()
	now := time.Now().UTC()
	exp := now.Add(ttl)
	orgID := "org-default"
	_, err := s.DB.Exec(
		`INSERT INTO class_days (id, org_id, instructor_id, course_slug, locale, join_code, status, expires_at, created_at, current_slide)
		 VALUES (?, ?, ?, ?, ?, ?, 'open', ?, ?, 0)`,
		id, orgID, instructorID, course, locale, code, exp.Format(time.RFC3339), now.Format(time.RFC3339),
	)
	if err != nil {
		_, err = s.DB.Exec(
			`INSERT INTO class_days (id, org_id, instructor_id, course_slug, locale, join_code, status, expires_at, created_at, current_slide)
			 VALUES ($1,$2,$3,$4,$5,$6,'open',$7,$8,0)`,
			id, orgID, instructorID, course, locale, code, exp.Format(time.RFC3339), now.Format(time.RFC3339),
		)
	}
	if err != nil {
		return nil, err
	}
	return s.ClassDayByID(id)
}

func (s *Store) ClassDayByID(id string) (*ClassDay, error) {
	q := `SELECT c.id, c.org_id, c.instructor_id, i.display_name, c.course_slug, c.locale, c.join_code, c.status, c.expires_at, c.created_at, c.current_slide, o.archive_email, o.branch_email
		FROM class_days c
		JOIN instructors i ON i.id=c.instructor_id
		JOIN organizations o ON o.id=c.org_id
		WHERE c.id=?`
	d, err := scanDay(s.DB.QueryRow(q, id))
	if err == sql.ErrNoRows {
		q = strings.ReplaceAll(q, "?", "$1")
		return scanDay(s.DB.QueryRow(q, id))
	}
	return d, err
}

func (s *Store) ClassDayByCode(code string) (*ClassDay, error) {
	q := `SELECT c.id, c.org_id, c.instructor_id, i.display_name, c.course_slug, c.locale, c.join_code, c.status, c.expires_at, c.created_at, c.current_slide, o.archive_email, o.branch_email
		FROM class_days c
		JOIN instructors i ON i.id=c.instructor_id
		JOIN organizations o ON o.id=c.org_id
		WHERE upper(c.join_code)=upper(?)`
	d, err := scanDay(s.DB.QueryRow(q, code))
	if err == sql.ErrNoRows {
		q = strings.ReplaceAll(q, "?", "$1")
		return scanDay(s.DB.QueryRow(q, code))
	}
	return d, err
}

func (s *Store) LatestOpenClassDay(instructorID string) (*ClassDay, error) {
	q := `SELECT c.id, c.org_id, c.instructor_id, i.display_name, c.course_slug, c.locale, c.join_code, c.status, c.expires_at, c.created_at, c.current_slide, o.archive_email, o.branch_email
		FROM class_days c
		JOIN instructors i ON i.id=c.instructor_id
		JOIN organizations o ON o.id=c.org_id
		WHERE c.instructor_id=? AND c.status='open'
		ORDER BY c.created_at DESC LIMIT 1`
	d, err := scanDay(s.DB.QueryRow(q, instructorID))
	if err == sql.ErrNoRows {
		q = strings.Replace(q, "?", "$1", 1)
		return scanDay(s.DB.QueryRow(q, instructorID))
	}
	return d, err
}

func scanDay(row *sql.Row) (*ClassDay, error) {
	var d ClassDay
	var exp, created string
	if err := row.Scan(&d.ID, &d.OrgID, &d.InstructorID, &d.Instructor, &d.CourseSlug, &d.Locale, &d.JoinCode, &d.Status, &exp, &created, &d.CurrentSlide, &d.ArchiveEmail, &d.BranchEmail); err != nil {
		return nil, err
	}
	d.ExpiresAt, _ = time.Parse(time.RFC3339, exp)
	d.CreatedAt, _ = time.Parse(time.RFC3339, created)
	return &d, nil
}

func (s *Store) ExpireClassDays() error {
	now := time.Now().UTC().Format(time.RFC3339)
	_, err := s.DB.Exec(`UPDATE class_days SET status='expired' WHERE status='open' AND expires_at < ?`, now)
	if err != nil {
		_, err = s.DB.Exec(`UPDATE class_days SET status='expired' WHERE status='open' AND expires_at < $1`, now)
	}
	return err
}

func (s *Store) SetSlide(classDayID string, index int) error {
	_, err := s.DB.Exec(`UPDATE class_days SET current_slide=? WHERE id=?`, index, classDayID)
	if err != nil {
		_, err = s.DB.Exec(`UPDATE class_days SET current_slide=$1 WHERE id=$2`, index, classDayID)
	}
	return err
}

func (s *Store) Join(classDayID, name, employeeID string) (*Attendee, error) {
	id := uuid.NewString()
	now := time.Now().UTC()
	_, err := s.DB.Exec(
		`INSERT INTO day_attendees (id, class_day_id, display_name, employee_id, joined_at) VALUES (?,?,?,?,?)`,
		id, classDayID, name, employeeID, now.Format(time.RFC3339),
	)
	if err != nil {
		_, err = s.DB.Exec(
			`INSERT INTO day_attendees (id, class_day_id, display_name, employee_id, joined_at) VALUES ($1,$2,$3,$4,$5)`,
			id, classDayID, name, employeeID, now.Format(time.RFC3339),
		)
	}
	if err != nil {
		return nil, err
	}
	return &Attendee{ID: id, ClassDayID: classDayID, DisplayName: name, EmployeeID: employeeID, JoinedAt: now}, nil
}

func (s *Store) Roster(classDayID string) ([]Attendee, error) {
	rows, err := s.DB.Query(
		`SELECT id, class_day_id, display_name, employee_id, joined_at FROM day_attendees WHERE class_day_id=? ORDER BY joined_at`,
		classDayID,
	)
	if err != nil {
		rows, err = s.DB.Query(
			`SELECT id, class_day_id, display_name, employee_id, joined_at FROM day_attendees WHERE class_day_id=$1 ORDER BY joined_at`,
			classDayID,
		)
	}
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var out []Attendee
	for rows.Next() {
		var a Attendee
		var joined string
		if err := rows.Scan(&a.ID, &a.ClassDayID, &a.DisplayName, &a.EmployeeID, &joined); err != nil {
			return nil, err
		}
		a.JoinedAt, _ = time.Parse(time.RFC3339, joined)
		out = append(out, a)
	}
	return out, rows.Err()
}

func (s *Store) UpsertAssessment(classDayID, attendeeID string, score *float64, passed *bool, notes string) (*Assessment, error) {
	id := uuid.NewString()
	now := time.Now().UTC().Format(time.RFC3339)
	var scoreAny any
	var passedAny any
	if score != nil {
		scoreAny = *score
	}
	if passed != nil {
		if *passed {
			passedAny = 1
		} else {
			passedAny = 0
		}
	}
	_, err := s.DB.Exec(
		`INSERT INTO cca_assessments (id, class_day_id, attendee_id, score, passed, notes, status, updated_at)
		 VALUES (?, ?, ?, ?, ?, ?, 'draft', ?)
		 ON CONFLICT(attendee_id) DO UPDATE SET score=excluded.score, passed=excluded.passed, notes=excluded.notes, updated_at=excluded.updated_at`,
		id, classDayID, attendeeID, scoreAny, passedAny, notes, now,
	)
	if err != nil {
		_, err = s.DB.Exec(
			`INSERT INTO cca_assessments (id, class_day_id, attendee_id, score, passed, notes, status, updated_at)
			 VALUES ($1,$2,$3,$4,$5,$6,'draft',$7)
			 ON CONFLICT (attendee_id) DO UPDATE SET score=EXCLUDED.score, passed=EXCLUDED.passed, notes=EXCLUDED.notes, updated_at=EXCLUDED.updated_at`,
			id, classDayID, attendeeID, scoreAny, passedAny, notes, now,
		)
	}
	if err != nil {
		return nil, err
	}
	return s.AssessmentByAttendee(attendeeID)
}

func (s *Store) AssessmentByAttendee(attendeeID string) (*Assessment, error) {
	q := `SELECT a.id, a.class_day_id, a.attendee_id, t.display_name, a.score, a.passed, a.notes, a.status, a.updated_at,
		(SELECT COUNT(*) FROM cca_artifacts x WHERE x.assessment_id=a.id)
		FROM cca_assessments a JOIN day_attendees t ON t.id=a.attendee_id WHERE a.attendee_id=?`
	as, err := scanAssessment(s.DB.QueryRow(q, attendeeID))
	if err == sql.ErrNoRows {
		q = strings.ReplaceAll(q, "?", "$1")
		return scanAssessment(s.DB.QueryRow(q, attendeeID))
	}
	return as, err
}

func (s *Store) AssessmentByID(id string) (*Assessment, error) {
	q := `SELECT a.id, a.class_day_id, a.attendee_id, t.display_name, a.score, a.passed, a.notes, a.status, a.updated_at,
		(SELECT COUNT(*) FROM cca_artifacts x WHERE x.assessment_id=a.id)
		FROM cca_assessments a JOIN day_attendees t ON t.id=a.attendee_id WHERE a.id=?`
	as, err := scanAssessment(s.DB.QueryRow(q, id))
	if err == sql.ErrNoRows {
		q = strings.ReplaceAll(q, "?", "$1")
		return scanAssessment(s.DB.QueryRow(q, id))
	}
	return as, err
}

func scanAssessment(row *sql.Row) (*Assessment, error) {
	var a Assessment
	var score sql.NullFloat64
	var passed sql.NullInt64
	var updated string
	if err := row.Scan(&a.ID, &a.ClassDayID, &a.AttendeeID, &a.Attendee, &score, &passed, &a.Notes, &a.Status, &updated, &a.PhotoCount); err != nil {
		return nil, err
	}
	if score.Valid {
		v := score.Float64
		a.Score = &v
	}
	if passed.Valid {
		v := passed.Int64 == 1
		a.Passed = &v
	}
	a.UpdatedAt, _ = time.Parse(time.RFC3339, updated)
	return &a, nil
}

func (s *Store) AddArtifact(assessmentID, path, contentType string) error {
	id := uuid.NewString()
	now := time.Now().UTC().Format(time.RFC3339)
	_, err := s.DB.Exec(
		`INSERT INTO cca_artifacts (id, assessment_id, path, content_type, captured_at) VALUES (?,?,?,?,?)`,
		id, assessmentID, path, contentType, now,
	)
	if err != nil {
		_, err = s.DB.Exec(
			`INSERT INTO cca_artifacts (id, assessment_id, path, content_type, captured_at) VALUES ($1,$2,$3,$4,$5)`,
			id, assessmentID, path, contentType, now,
		)
	}
	return err
}

func (s *Store) ArtifactPaths(assessmentID string) ([]string, error) {
	rows, err := s.DB.Query(`SELECT path FROM cca_artifacts WHERE assessment_id=?`, assessmentID)
	if err != nil {
		rows, err = s.DB.Query(`SELECT path FROM cca_artifacts WHERE assessment_id=$1`, assessmentID)
	}
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var out []string
	for rows.Next() {
		var p string
		if err := rows.Scan(&p); err != nil {
			return nil, err
		}
		out = append(out, p)
	}
	return out, rows.Err()
}

func (s *Store) SetAssessmentStatus(id, status string) error {
	now := time.Now().UTC().Format(time.RFC3339)
	_, err := s.DB.Exec(`UPDATE cca_assessments SET status=?, updated_at=? WHERE id=?`, status, now, id)
	if err != nil {
		_, err = s.DB.Exec(`UPDATE cca_assessments SET status=$1, updated_at=$2 WHERE id=$3`, status, now, id)
	}
	return err
}

func (s *Store) ListAssessments(classDayID string) ([]Assessment, error) {
	roster, err := s.Roster(classDayID)
	if err != nil {
		return nil, err
	}
	var out []Assessment
	for _, a := range roster {
		as, err := s.AssessmentByAttendee(a.ID)
		if err == sql.ErrNoRows {
			out = append(out, Assessment{AttendeeID: a.ID, Attendee: a.DisplayName, ClassDayID: classDayID, Status: "none"})
			continue
		}
		if err != nil {
			return nil, err
		}
		out = append(out, *as)
	}
	return out, nil
}

func (s *Store) InsertPacket(p Packet) error {
	_, err := s.DB.Exec(
		`INSERT INTO outbound_packets (id, assessment_id, class_day_id, kind, workflow_id, recipients, status, error, sent_at)
		 VALUES (?,?,?,?,?,?,?,?,?)`,
		p.ID, nullStr(p.AssessmentID), nullStr(p.ClassDayID), p.Kind, p.WorkflowID, p.Recipients, p.Status, p.Error, timePtr(p.SentAt),
	)
	if err != nil {
		_, err = s.DB.Exec(
			`INSERT INTO outbound_packets (id, assessment_id, class_day_id, kind, workflow_id, recipients, status, error, sent_at)
			 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
			p.ID, nullStr(p.AssessmentID), nullStr(p.ClassDayID), p.Kind, p.WorkflowID, p.Recipients, p.Status, p.Error, timePtr(p.SentAt),
		)
	}
	return err
}

func (s *Store) ListPackets(classDayID string) ([]Packet, error) {
	rows, err := s.DB.Query(
		`SELECT id, COALESCE(assessment_id,''), COALESCE(class_day_id,''), kind, workflow_id, recipients, status, error, sent_at
		 FROM outbound_packets WHERE class_day_id=? OR assessment_id IN (SELECT id FROM cca_assessments WHERE class_day_id=?)
		 ORDER BY id DESC`,
		classDayID, classDayID,
	)
	if err != nil {
		rows, err = s.DB.Query(
			`SELECT id, COALESCE(assessment_id,''), COALESCE(class_day_id,''), kind, workflow_id, recipients, status, error, sent_at
			 FROM outbound_packets WHERE class_day_id=$1 OR assessment_id IN (SELECT id FROM cca_assessments WHERE class_day_id=$1)
			 ORDER BY id DESC`,
			classDayID,
		)
	}
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var out []Packet
	for rows.Next() {
		var p Packet
		var sent sql.NullString
		if err := rows.Scan(&p.ID, &p.AssessmentID, &p.ClassDayID, &p.Kind, &p.WorkflowID, &p.Recipients, &p.Status, &p.Error, &sent); err != nil {
			return nil, err
		}
		if sent.Valid {
			t, _ := time.Parse(time.RFC3339, sent.String)
			p.SentAt = &t
		}
		out = append(out, p)
	}
	return out, rows.Err()
}

func (s *Store) IncompleteAssessments(classDayID string) (int, int, error) {
	roster, err := s.Roster(classDayID)
	if err != nil {
		return 0, 0, err
	}
	complete := 0
	for _, a := range roster {
		as, err := s.AssessmentByAttendee(a.ID)
		if err == nil && as.Status == "emailed" {
			complete++
		}
	}
	return len(roster), complete, nil
}

func nullStr(s string) any {
	if s == "" {
		return nil
	}
	return s
}

func timePtr(t *time.Time) any {
	if t == nil {
		return nil
	}
	return t.UTC().Format(time.RFC3339)
}

func CheckPassword(hash, password string) bool {
	return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) == nil
}

func HashPassword(password string) (string, error) {
	b, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(b), nil
}

func (s *Store) RecordPractice(attendeeID, classDayID string, score float64) error {
	id := uuid.NewString()
	now := time.Now().UTC().Format(time.RFC3339)
	_, err := s.DB.Exec(
		`INSERT INTO practice_attempts (id, attendee_id, class_day_id, score, created_at) VALUES (?,?,?,?,?)`,
		id, attendeeID, classDayID, score, now,
	)
	if err != nil {
		_, err = s.DB.Exec(
			`INSERT INTO practice_attempts (id, attendee_id, class_day_id, score, created_at) VALUES ($1,$2,$3,$4,$5)`,
			id, attendeeID, classDayID, score, now,
		)
	}
	return err
}

func Fmt(err error) string {
	if err == nil {
		return ""
	}
	return fmt.Sprint(err)
}
