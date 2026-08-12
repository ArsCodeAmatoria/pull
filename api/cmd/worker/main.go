package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/ArsCodeAmatoria/pull/api/internal/config"
	"github.com/ArsCodeAmatoria/pull/api/internal/db"
	"github.com/ArsCodeAmatoria/pull/api/internal/mail"
	"github.com/ArsCodeAmatoria/pull/api/internal/store"
	"github.com/ArsCodeAmatoria/pull/api/internal/workflows"
)

// Temporal worker process. When TEMPORAL_ADDRESS is unset, this process
// still runs ClassDayLifecycle timers locally (expire + digest).
func main() {
	cfg := config.Load()
	sqlDB, err := db.Open(cfg.DatabaseURL)
	if err != nil {
		log.Fatal(err)
	}
	defer sqlDB.Close()
	st := &store.Store{DB: sqlDB}
	runner := &workflows.Runner{
		Store: st,
		Mail: mail.Sender{
			Host: cfg.SMTPHost, Port: cfg.SMTPPort, User: cfg.SMTPUser, Pass: cfg.SMTPPass, From: cfg.SMTPFrom, DataDir: cfg.DataDir,
		},
		DataDir: cfg.DataDir,
	}

	if cfg.TemporalAddress != "" {
		log.Printf("temporal host %s namespace %s — wire SDK client here when cluster is up", cfg.TemporalAddress, cfg.TemporalNamespace)
	} else {
		log.Printf("temporal unset; running local ClassDayLifecycle + digest timers")
	}

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)
	tick := time.NewTicker(2 * time.Minute)
	defer tick.Stop()
	digested := map[string]struct{}{}
	for {
		select {
		case <-stop:
			return
		case <-tick.C:
			_ = st.ExpireClassDays()
			runDigests(st, runner, digested)
		}
	}
}

func runDigests(st *store.Store, runner *workflows.Runner, digested map[string]struct{}) {
	// Digest recently expired days once.
	rows, err := st.DB.Query(`SELECT id FROM class_days WHERE status='expired'`)
	if err != nil {
		return
	}
	defer rows.Close()
	for rows.Next() {
		var id string
		if err := rows.Scan(&id); err != nil {
			continue
		}
		if _, ok := digested[id]; ok {
			continue
		}
		day, err := st.ClassDayByID(id)
		if err != nil {
			continue
		}
		if err := runner.SendDayDigest(day); err != nil {
			log.Printf("digest %s: %v", id, err)
			continue
		}
		digested[id] = struct{}{}
	}
}
