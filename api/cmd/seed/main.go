package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/ArsCodeAmatoria/pull/api/internal/config"
	"github.com/ArsCodeAmatoria/pull/api/internal/db"
	"github.com/ArsCodeAmatoria/pull/api/internal/store"
)

func main() {
	cfg := config.Load()
	sqlDB, err := db.Open(cfg.DatabaseURL)
	if err != nil {
		log.Fatal(err)
	}
	defer sqlDB.Close()
	if n, err := db.ImportSQLite(sqlDB, findLocalSQLite(cfg.DataDir)); err != nil {
		log.Fatal("import sqlite:", err)
	} else if n > 0 {
		fmt.Printf("imported %d rows from local sqlite\n", n)
	}
	st := &store.Store{DB: sqlDB}
	if err := st.Seed(cfg.BootstrapPassword, cfg.ArchiveEmail, cfg.BranchEmail); err != nil {
		log.Fatal(err)
	}
	fmt.Println("database:", redact(cfg.DatabaseURL))
	fmt.Println("seeded instructors:")
	for _, r := range store.Roster {
		fmt.Printf("  %s (%s)\n", r.Username, r.Display)
	}
	fmt.Println("bootstrap password from INSTRUCTOR_BOOTSTRAP_PASSWORD (default changeme) — must change on first sign-in")
}

func findLocalSQLite(dataDir string) string {
	for _, p := range []string{
		filepath.Join(dataDir, "cca.db"),
		"../data/cca.db",
		"data/cca.db",
	} {
		if _, err := os.Stat(p); err == nil {
			return p
		}
	}
	return ""
}

func redact(raw string) string {
	if i := strings.Index(raw, "://"); i >= 0 {
		rest := raw[i+3:]
		if at := strings.LastIndex(rest, "@"); at >= 0 {
			return raw[:i+3] + "***@" + rest[at+1:]
		}
	}
	return raw
}
