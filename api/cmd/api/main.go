package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/ArsCodeAmatoria/pull/api/internal/config"
	"github.com/ArsCodeAmatoria/pull/api/internal/db"
	"github.com/ArsCodeAmatoria/pull/api/internal/httpapi"
	"github.com/ArsCodeAmatoria/pull/api/internal/mail"
	"github.com/ArsCodeAmatoria/pull/api/internal/store"
	"github.com/ArsCodeAmatoria/pull/api/internal/workflows"
)

func main() {
	cfg := config.Load()
	if err := os.MkdirAll(cfg.DataDir, 0o755); err != nil {
		log.Fatal(err)
	}
	sqlDB, err := db.Open(absDB(cfg.DatabaseURL, cfg.DataDir))
	if err != nil {
		log.Fatal(err)
	}
	defer sqlDB.Close()
	st := &store.Store{DB: sqlDB}
	if err := st.Seed(cfg.BootstrapPassword, cfg.ArchiveEmail, cfg.BranchEmail); err != nil {
		log.Fatal("seed:", err)
	}
	runner := &workflows.Runner{
		Store:   st,
		Mail:    mail.Sender{Host: cfg.SMTPHost, Port: cfg.SMTPPort, User: cfg.SMTPUser, Pass: cfg.SMTPPass, From: cfg.SMTPFrom, DataDir: cfg.DataDir},
		DataDir: cfg.DataDir,
	}
	srv := httpapi.New(cfg, st, runner)
	go expireLoop(st)
	go digestLoop(st, runner)
	log.Printf("cca api on %s db=%s temporal=%q", cfg.Addr, redactDB(cfg.DatabaseURL), cfg.TemporalAddress)
	if err := http.ListenAndServe(cfg.Addr, srv.Handler()); err != nil {
		log.Fatal(err)
	}
}

func redactDB(raw string) string {
	if i := strings.Index(raw, "://"); i >= 0 {
		rest := raw[i+3:]
		if at := strings.LastIndex(rest, "@"); at >= 0 {
			return raw[:i+3] + "***@" + rest[at+1:]
		}
	}
	return raw
}

func absDB(url, dataDir string) string {
	if url == "sqlite://./data/cca.db" {
		return "sqlite://" + filepath.Join(dataDir, "cca.db")
	}
	return url
}

func expireLoop(st *store.Store) {
	t := time.NewTicker(time.Minute)
	defer t.Stop()
	for range t.C {
		_ = st.ExpireClassDays()
	}
}

func digestLoop(st *store.Store, runner *workflows.Runner) {
	t := time.NewTicker(5 * time.Minute)
	defer t.Stop()
	seen := map[string]struct{}{}
	for range t.C {
		_ = st.ExpireClassDays()
	}
	_ = seen
	_ = runner
}
