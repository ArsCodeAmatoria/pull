package mail

import (
	"bytes"
	"fmt"
	"net/smtp"
	"os"
	"path/filepath"
	"strings"
	"time"
)

type Sender struct {
	Host     string
	Port     int
	User     string
	Pass     string
	From     string
	DataDir  string
}

func (s Sender) Send(to []string, subject, body string, attachments map[string][]byte) error {
	to = unique(to)
	if len(to) == 0 {
		return fmt.Errorf("no recipients")
	}
	msg := buildMIME(s.From, to, subject, body, attachments)
	if s.Host == "" {
		dir := filepath.Join(s.DataDir, "outbound")
		if err := os.MkdirAll(dir, 0o755); err != nil {
			return err
		}
		name := time.Now().UTC().Format("20060102T150405") + ".eml"
		return os.WriteFile(filepath.Join(dir, name), msg, 0o644)
	}
	addr := fmt.Sprintf("%s:%d", s.Host, s.Port)
	var auth smtp.Auth
	if s.User != "" {
		auth = smtp.PlainAuth("", s.User, s.Pass, s.Host)
	}
	return smtp.SendMail(addr, auth, s.From, to, msg)
}

func buildMIME(from string, to []string, subject, body string, attachments map[string][]byte) []byte {
	var b bytes.Buffer
	boundary := "pull-cca-boundary"
	fmt.Fprintf(&b, "From: %s\r\n", from)
	fmt.Fprintf(&b, "To: %s\r\n", strings.Join(to, ", "))
	fmt.Fprintf(&b, "Subject: %s\r\n", subject)
	fmt.Fprintf(&b, "MIME-Version: 1.0\r\n")
	fmt.Fprintf(&b, "Content-Type: multipart/mixed; boundary=%s\r\n\r\n", boundary)
	fmt.Fprintf(&b, "--%s\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n%s\r\n", boundary, body)
	for name, data := range attachments {
		fmt.Fprintf(&b, "--%s\r\nContent-Type: application/octet-stream\r\nContent-Disposition: attachment; filename=%q\r\nContent-Transfer-Encoding: base64\r\n\r\n", boundary, name)
		enc := make([]byte, (len(data)+2)/3*4)
		n := encodeBase64(enc, data)
		b.Write(enc[:n])
		b.WriteString("\r\n")
	}
	fmt.Fprintf(&b, "--%s--\r\n", boundary)
	return b.Bytes()
}

func encodeBase64(dst, src []byte) int {
	const table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
	di, si := 0, 0
	n := len(src) / 3 * 3
	for si < n {
		val := uint(src[si])<<16 | uint(src[si+1])<<8 | uint(src[si+2])
		dst[di+0] = table[val>>18&0x3F]
		dst[di+1] = table[val>>12&0x3F]
		dst[di+2] = table[val>>6&0x3F]
		dst[di+3] = table[val&0x3F]
		si += 3
		di += 4
	}
	remain := len(src) - si
	if remain == 0 {
		return di
	}
	val := uint(src[si]) << 16
	if remain == 2 {
		val |= uint(src[si+1]) << 8
	}
	dst[di+0] = table[val>>18&0x3F]
	dst[di+1] = table[val>>12&0x3F]
	if remain == 2 {
		dst[di+2] = table[val>>6&0x3F]
		dst[di+3] = '='
	} else {
		dst[di+2] = '='
		dst[di+3] = '='
	}
	return di + 4
}

func unique(in []string) []string {
	seen := map[string]struct{}{}
	var out []string
	for _, s := range in {
		s = strings.TrimSpace(s)
		if s == "" {
			continue
		}
		if _, ok := seen[s]; ok {
			continue
		}
		seen[s] = struct{}{}
		out = append(out, s)
	}
	return out
}
