package auth

import (
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type InstructorClaims struct {
	InstructorID string `json:"iid"`
	Username     string `json:"usr"`
	DisplayName  string `json:"name"`
	MustChange   bool   `json:"mcp"`
	jwt.RegisteredClaims
}

type DayClaims struct {
	AttendeeID  string `json:"aid"`
	ClassDayID  string `json:"cid"`
	DisplayName string `json:"name"`
	jwt.RegisteredClaims
}

func SignInstructor(secret, id, username, display string, mustChange bool, ttl time.Duration) (string, error) {
	now := time.Now()
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, InstructorClaims{
		InstructorID: id,
		Username:     username,
		DisplayName:  display,
		MustChange:   mustChange,
		RegisteredClaims: jwt.RegisteredClaims{
			Subject:   id,
			IssuedAt:  jwt.NewNumericDate(now),
			ExpiresAt: jwt.NewNumericDate(now.Add(ttl)),
		},
	})
	return t.SignedString([]byte(secret))
}

func ParseInstructor(secret, token string) (*InstructorClaims, error) {
	t, err := jwt.ParseWithClaims(token, &InstructorClaims{}, func(t *jwt.Token) (any, error) {
		return []byte(secret), nil
	})
	if err != nil {
		return nil, err
	}
	c, ok := t.Claims.(*InstructorClaims)
	if !ok || !t.Valid {
		return nil, fmt.Errorf("invalid instructor token")
	}
	return c, nil
}

func SignDay(secret, attendeeID, classDayID, name string, exp time.Time) (string, error) {
	now := time.Now()
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, DayClaims{
		AttendeeID:  attendeeID,
		ClassDayID:  classDayID,
		DisplayName: name,
		RegisteredClaims: jwt.RegisteredClaims{
			Subject:   attendeeID,
			IssuedAt:  jwt.NewNumericDate(now),
			ExpiresAt: jwt.NewNumericDate(exp),
		},
	})
	return t.SignedString([]byte(secret))
}

func ParseDay(secret, token string) (*DayClaims, error) {
	t, err := jwt.ParseWithClaims(token, &DayClaims{}, func(t *jwt.Token) (any, error) {
		return []byte(secret), nil
	})
	if err != nil {
		return nil, err
	}
	c, ok := t.Claims.(*DayClaims)
	if !ok || !t.Valid {
		return nil, fmt.Errorf("invalid day token")
	}
	return c, nil
}
