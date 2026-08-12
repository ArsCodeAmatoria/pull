const API = process.env.CCA_API_URL ?? process.env.NEXT_PUBLIC_CCA_API_URL ?? "http://127.0.0.1:8080";

export function ccaApiUrl(path: string) {
  return `${API.replace(/\/$/, "")}${path}`;
}

export type InstructorSession = {
  role: "instructor";
  id: string;
  username: string;
  displayName: string;
  mustChangePassword: boolean;
};

export type AttendeeSession = {
  role: "attendee";
  id: string;
  classDayId: string;
  displayName: string;
};

export type CcaSession = InstructorSession | AttendeeSession;

export type ClassDay = {
  id: string;
  joinCode: string;
  joinUrl: string;
  courseSlug: string;
  locale: string;
  status: string;
  expiresAt: string;
  currentSlide: number;
  instructor: string;
};

export type Attendee = {
  ID: string;
  ClassDayID: string;
  DisplayName: string;
  EmployeeID: string;
};

export type Assessment = {
  ID: string;
  ClassDayID: string;
  AttendeeID: string;
  Attendee: string;
  Score: number | null;
  Passed: boolean | null;
  Notes: string;
  Status: string;
  PhotoCount: number;
};

export type Packet = {
  ID: string;
  Kind: string;
  Status: string;
  Recipients: string;
  Error: string;
  SentAt: string | null;
};
