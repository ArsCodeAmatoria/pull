package db

import (
	"database/sql"
	"fmt"
	"net/url"
	"os"
	"path/filepath"
	"strings"

	_ "github.com/jackc/pgx/v5/stdlib"
	_ "modernc.org/sqlite"
)

func Open(databaseURL string) (*sql.DB, error) {
	driver, dsn, err := parse(databaseURL)
	if err != nil {
		return nil, err
	}
	if driver == "sqlite" {
		if err := os.MkdirAll(filepath.Dir(dsn), 0o755); err != nil && filepath.Dir(dsn) != "." {
			return nil, err
		}
	}
	sqlDB, err := sql.Open(driver, dsn)
	if err != nil {
		return nil, err
	}
	if err := sqlDB.Ping(); err != nil {
		_ = sqlDB.Close()
		return nil, err
	}
	if driver == "sqlite" {
		_, _ = sqlDB.Exec("PRAGMA foreign_keys = ON")
	}
	if err := migrate(sqlDB, driver); err != nil {
		_ = sqlDB.Close()
		return nil, err
	}
	return sqlDB, nil
}

func parse(raw string) (driver, dsn string, err error) {
	if raw == "" || strings.HasPrefix(raw, "sqlite://") {
		path := strings.TrimPrefix(raw, "sqlite://")
		if path == "" {
			path = "./data/cca.db"
		}
		return "sqlite", path, nil
	}
	if strings.HasPrefix(raw, "postgres://") || strings.HasPrefix(raw, "postgresql://") {
		u, err := url.Parse(raw)
		if err != nil {
			return "", "", err
		}
		q := u.Query()
		q.Del("schema")
		q.Del("uselibpqcompat")
		q.Del("pgbouncer")
		if q.Get("sslmode") == "" {
			q.Set("sslmode", "require")
		}
		u.RawQuery = q.Encode()
		return "pgx", u.String(), nil
	}
	return "", "", fmt.Errorf("unsupported database url")
}

