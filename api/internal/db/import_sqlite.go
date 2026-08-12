package db

import (
	"database/sql"
	"fmt"
	"os"
)

func ImportSQLite(dst *sql.DB, sqlitePath string) (int, error) {
	if sqlitePath == "" {
		return 0, nil
	}
	if _, err := os.Stat(sqlitePath); err != nil {
		return 0, nil
	}
	src, err := sql.Open("sqlite", sqlitePath)
	if err != nil {
		return 0, err
	}
	defer src.Close()
	if err := src.Ping(); err != nil {
		return 0, err
	}

	type copyJob struct {
		table   string
		columns string
		selects string
		insert  string
		scan    int
	}
	jobs := []copyJob{
		{
			table:   "organizations",
			columns: "id, name, archive_email, branch_email",
			insert:  `INSERT INTO organizations (id, name, archive_email, branch_email) VALUES ($1,$2,$3,$4) ON CONFLICT (id) DO NOTHING`,
			scan:    4,
		},
		{
			table:   "instructors",
			columns: "id, username, display_name, email, password_hash, must_change_password, active, created_at",
			insert:  `INSERT INTO instructors (id, username, display_name, email, password_hash, must_change_password, active, created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT (id) DO NOTHING`,
			scan:    8,
		},
		{
			table:   "class_days",
			columns: "id, org_id, instructor_id, course_slug, locale, join_code, status, expires_at, created_at, current_slide",
			insert:  `INSERT INTO class_days (id, org_id, instructor_id, course_slug, locale, join_code, status, expires_at, created_at, current_slide) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) ON CONFLICT (id) DO NOTHING`,
			scan:    10,
		},
		{
			table:   "day_attendees",
			columns: "id, class_day_id, display_name, employee_id, joined_at",
			insert:  `INSERT INTO day_attendees (id, class_day_id, display_name, employee_id, joined_at) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (id) DO NOTHING`,
			scan:    5,
		},
		{
			table:   "cca_assessments",
			columns: "id, class_day_id, attendee_id, score, passed, notes, status, updated_at",
			insert:  `INSERT INTO cca_assessments (id, class_day_id, attendee_id, score, passed, notes, status, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT (id) DO NOTHING`,
			scan:    8,
		},
		{
			table:   "cca_artifacts",
			columns: "id, assessment_id, path, content_type, captured_at",
			insert:  `INSERT INTO cca_artifacts (id, assessment_id, path, content_type, captured_at) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (id) DO NOTHING`,
			scan:    5,
		},
		{
			table:   "outbound_packets",
			columns: "id, assessment_id, class_day_id, kind, workflow_id, recipients, status, error, sent_at",
			insert:  `INSERT INTO outbound_packets (id, assessment_id, class_day_id, kind, workflow_id, recipients, status, error, sent_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (id) DO NOTHING`,
			scan:    9,
		},
		{
			table:   "practice_attempts",
			columns: "id, attendee_id, class_day_id, score, created_at",
			insert:  `INSERT INTO practice_attempts (id, attendee_id, class_day_id, score, created_at) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (id) DO NOTHING`,
			scan:    5,
		},
	}

	copied := 0
	for _, job := range jobs {
		n, err := copyTable(src, dst, job.table, job.columns, job.insert, job.scan)
		if err != nil {
			return copied, fmt.Errorf("%s: %w", job.table, err)
		}
		copied += n
	}
	return copied, nil
}

func copyTable(src, dst *sql.DB, table, columns, insert string, width int) (int, error) {
	rows, err := src.Query("SELECT " + columns + " FROM " + table)
	if err != nil {
		return 0, err
	}
	defer rows.Close()
	n := 0
	for rows.Next() {
		vals := make([]any, width)
		ptrs := make([]any, width)
		for i := range vals {
			ptrs[i] = &vals[i]
		}
		if err := rows.Scan(ptrs...); err != nil {
			return n, err
		}
		if _, err := dst.Exec(insert, vals...); err != nil {
			return n, err
		}
		n++
	}
	return n, rows.Err()
}
