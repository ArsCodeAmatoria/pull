package workflows

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/ArsCodeAmatoria/pull/api/internal/mail"
	"github.com/ArsCodeAmatoria/pull/api/internal/store"
	"github.com/google/uuid"
)

type Runner struct {
	Store  *store.Store
	Mail   mail.Sender
	DataDir string
}

type PacketInput struct {
	AssessmentID string
	ClassDayID   string
	Attendee     string
	Instructor   string
	Course       string
	Date         string
	Score        string
	Result       string
	Notes        string
	Photos       []string
	ArchiveTo    string
	BranchTo     string
	InstructorTo string
}

func (r *Runner) SendCCAPacket(in PacketInput) error {
	if in.AssessmentID == "" {
		return fmt.Errorf("assessment required")
	}
	subject := fmt.Sprintf(mail.PacketSubjectFmt, in.Attendee, in.Course, in.Date)
	body := strings.Join([]string{
		mail.PacketDisclaimer,
		"",
		"Attendee: " + in.Attendee,
		"Instructor: " + in.Instructor,
		"Course: " + in.Course,
		"Class day: " + in.ClassDayID,
		"Date: " + in.Date,
		"Score: " + in.Score,
		"Result: " + in.Result,
		"Notes: " + in.Notes,
		"",
		"Photo evidence is attached. This is a continuing competency assessment record only.",
	}, "\n")
	atts := map[string][]byte{}
	cover := []byte(body)
	atts["cca-record.txt"] = cover
	for i, p := range in.Photos {
		data, err := os.ReadFile(p)
		if err != nil {
			return err
		}
		atts[fmt.Sprintf("photo-%d%s", i+1, filepath.Ext(p))] = data
	}
	recipients := []string{in.ArchiveTo, in.BranchTo, in.InstructorTo}
	err := r.Mail.Send(recipients, subject, body, atts)
	now := time.Now().UTC()
	pkt := store.Packet{
		ID:           uuid.NewString(),
		AssessmentID: in.AssessmentID,
		ClassDayID:   in.ClassDayID,
		Kind:         "cca_packet",
		WorkflowID:   "inline-" + in.AssessmentID,
		Recipients:   strings.Join(mailRecipients(recipients), ", "),
		Status:       "sent",
		SentAt:       &now,
	}
	if err != nil {
		pkt.Status = "failed"
		pkt.Error = err.Error()
		pkt.SentAt = nil
		_ = r.Store.InsertPacket(pkt)
		_ = r.Store.SetAssessmentStatus(in.AssessmentID, "failed")
		return err
	}
	if err := r.Store.InsertPacket(pkt); err != nil {
		return err
	}
	return r.Store.SetAssessmentStatus(in.AssessmentID, "emailed")
}

func (r *Runner) SendDayDigest(day *store.ClassDay) error {
	total, complete, err := r.Store.IncompleteAssessments(day.ID)
	if err != nil {
		return err
	}
	roster, err := r.Store.Roster(day.ID)
	if err != nil {
		return err
	}
	var lines []string
	for _, a := range roster {
		lines = append(lines, "- "+a.DisplayName)
	}
	subject := fmt.Sprintf(mail.DigestSubjectFmt, day.JoinCode, day.CreatedAt.Format("2006-01-02"))
	body := strings.Join([]string{
		mail.DigestDisclaimer,
		"",
		"Instructor: " + day.Instructor,
		"Join code: " + day.JoinCode,
		fmt.Sprintf("Attendance: %d", total),
		fmt.Sprintf("CCA packets emailed: %d", complete),
		fmt.Sprintf("Incomplete: %d", total-complete),
		"",
		"Roster:",
		strings.Join(lines, "\n"),
	}, "\n")
	recipients := []string{day.ArchiveEmail, day.BranchEmail}
	err = r.Mail.Send(recipients, subject, body, nil)
	now := time.Now().UTC()
	pkt := store.Packet{
		ID:         uuid.NewString(),
		ClassDayID: day.ID,
		Kind:       "day_digest",
		WorkflowID: "inline-digest-" + day.ID,
		Recipients: strings.Join(mailRecipients(recipients), ", "),
		Status:     "sent",
		SentAt:     &now,
	}
	if err != nil {
		pkt.Status = "failed"
		pkt.Error = err.Error()
		pkt.SentAt = nil
	}
	return r.Store.InsertPacket(pkt)
}

func mailRecipients(in []string) []string {
	var out []string
	for _, s := range in {
		if strings.TrimSpace(s) != "" {
			out = append(out, s)
		}
	}
	return out
}
