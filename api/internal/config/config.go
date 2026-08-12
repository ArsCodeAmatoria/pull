package config

import (
	"bufio"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"
)

type Config struct {
	Addr              string
	DatabaseURL       string
	JWTSecret         string
	AppURL            string
	BootstrapPassword string
	ArchiveEmail      string
	BranchEmail       string
	SMTPHost          string
	SMTPPort          int
	SMTPUser          string
	SMTPPass          string
	SMTPFrom          string
	DataDir           string
	TemporalAddress   string
	TemporalNamespace string
	ClassDayTTL       time.Duration
}

func Load() Config {
	loadDotEnv()
	ttlHours := envInt("CLASS_DAY_TTL_HOURS", 14)
	return Config{
		Addr:              env("CCA_API_ADDR", ":8080"),
		DatabaseURL:       env("CCA_DATABASE_URL", "sqlite://./data/cca.db"),
		JWTSecret:         env("CCA_JWT_SECRET", "dev-change-me-cca-jwt"),
		AppURL:            env("NEXT_PUBLIC_APP_URL", "http://localhost:3001"),
		BootstrapPassword: env("INSTRUCTOR_BOOTSTRAP_PASSWORD", "changeme"),
		ArchiveEmail:      env("CCA_ARCHIVE_EMAIL", "credentials@localhost"),
		BranchEmail:       env("CCA_BRANCH_EMAIL", ""),
		SMTPHost:          env("SMTP_HOST", ""),
		SMTPPort:          envInt("SMTP_PORT", 587),
		SMTPUser:          env("SMTP_USER", ""),
		SMTPPass:          env("SMTP_PASS", ""),
		SMTPFrom:          env("SMTP_FROM", "pull-cca@localhost"),
		DataDir:           env("CCA_DATA_DIR", "./data"),
		TemporalAddress:   env("TEMPORAL_ADDRESS", ""),
		TemporalNamespace: env("TEMPORAL_NAMESPACE", "pull-cca"),
		ClassDayTTL:       time.Duration(ttlHours) * time.Hour,
	}
}

func loadDotEnv() {
	for _, p := range []string{".env", "../.env"} {
		f, err := os.Open(filepath.Clean(p))
		if err != nil {
			continue
		}
		sc := bufio.NewScanner(f)
		for sc.Scan() {
			line := strings.TrimSpace(sc.Text())
			if line == "" || strings.HasPrefix(line, "#") {
				continue
			}
			key, val, ok := strings.Cut(line, "=")
			if !ok {
				continue
			}
			key = strings.TrimSpace(key)
			if key == "" || os.Getenv(key) != "" {
				continue
			}
			val = strings.TrimSpace(val)
			if len(val) >= 2 {
				if q := val[0]; (q == '"' || q == '\'') && val[len(val)-1] == q {
					val = val[1 : len(val)-1]
				}
			}
			_ = os.Setenv(key, val)
		}
		_ = f.Close()
		return
	}
}

func env(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func envInt(key string, fallback int) int {
	if v := os.Getenv(key); v != "" {
		if n, err := strconv.Atoi(v); err == nil {
			return n
		}
	}
	return fallback
}
