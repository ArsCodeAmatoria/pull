package db

import "database/sql"

func migrate(sqlDB *sql.DB, driver string) error {
	stmts := []string{
		`CREATE TABLE IF NOT EXISTS organizations (
			id TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			archive_email TEXT NOT NULL,
			branch_email TEXT NOT NULL DEFAULT ''
		)`,
		`CREATE TABLE IF NOT EXISTS instructors (
			id TEXT PRIMARY KEY,
			username TEXT NOT NULL UNIQUE,
			display_name TEXT NOT NULL,
			email TEXT NOT NULL DEFAULT '',
			password_hash TEXT NOT NULL,
			must_change_password INTEGER NOT NULL DEFAULT 1,
			active INTEGER NOT NULL DEFAULT 1,
			created_at TEXT NOT NULL
		)`,
		`CREATE TABLE IF NOT EXISTS class_days (
			id TEXT PRIMARY KEY,
			org_id TEXT NOT NULL,
			instructor_id TEXT NOT NULL,
			course_slug TEXT NOT NULL,
			locale TEXT NOT NULL DEFAULT 'en',
			join_code TEXT NOT NULL UNIQUE,
			status TEXT NOT NULL DEFAULT 'open',
			expires_at TEXT NOT NULL,
			created_at TEXT NOT NULL,
			current_slide INTEGER NOT NULL DEFAULT 0
		)`,
		`CREATE TABLE IF NOT EXISTS day_attendees (
			id TEXT PRIMARY KEY,
			class_day_id TEXT NOT NULL,
			display_name TEXT NOT NULL,
			employee_id TEXT NOT NULL DEFAULT '',
			joined_at TEXT NOT NULL
		)`,
		`CREATE TABLE IF NOT EXISTS cca_assessments (
			id TEXT PRIMARY KEY,
			class_day_id TEXT NOT NULL,
			attendee_id TEXT NOT NULL UNIQUE,
			score REAL,
			passed INTEGER,
			notes TEXT NOT NULL DEFAULT '',
			status TEXT NOT NULL DEFAULT 'draft',
			updated_at TEXT NOT NULL
		)`,
		`CREATE TABLE IF NOT EXISTS cca_artifacts (
			id TEXT PRIMARY KEY,
			assessment_id TEXT NOT NULL,
			path TEXT NOT NULL,
			content_type TEXT NOT NULL,
			captured_at TEXT NOT NULL
		)`,
		`CREATE TABLE IF NOT EXISTS outbound_packets (
			id TEXT PRIMARY KEY,
			assessment_id TEXT,
			class_day_id TEXT,
			kind TEXT NOT NULL,
			workflow_id TEXT NOT NULL DEFAULT '',
			recipients TEXT NOT NULL,
			status TEXT NOT NULL,
			error TEXT NOT NULL DEFAULT '',
			sent_at TEXT
		)`,
		`CREATE TABLE IF NOT EXISTS practice_attempts (
			id TEXT PRIMARY KEY,
			attendee_id TEXT,
			class_day_id TEXT,
			score REAL,
			created_at TEXT NOT NULL
		)`,
	}
	for _, s := range stmts {
		if _, err := sqlDB.Exec(s); err != nil {
			return err
		}
	}
	_ = driver
	return nil
}
