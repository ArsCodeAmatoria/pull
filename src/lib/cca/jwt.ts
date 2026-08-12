import { createHmac } from "node:crypto";

type InstructorPayload = {
  iid: string;
  usr: string;
  name: string;
  mcp: boolean;
  sub: string;
  iat: number;
  exp: number;
};

function b64url(data: string | Buffer) {
  return Buffer.from(data).toString("base64url");
}

export function signInstructorToken(
  secret: string,
  instructor: { id: string; username: string; displayName: string; mustChangePassword: boolean },
  ttlSeconds = 30 * 24 * 3600
) {
  const header = b64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const now = Math.floor(Date.now() / 1000);
  const payload = b64url(
    JSON.stringify({
      iid: instructor.id,
      usr: instructor.username,
      name: instructor.displayName,
      mcp: instructor.mustChangePassword,
      sub: instructor.id,
      iat: now,
      exp: now + ttlSeconds,
    } satisfies InstructorPayload)
  );
  const sig = b64url(createHmac("sha256", secret).update(`${header}.${payload}`).digest());
  return `${header}.${payload}.${sig}`;
}

export function parseInstructorToken(secret: string, token: string) {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [header, payload, sig] = parts;
  const expected = b64url(createHmac("sha256", secret).update(`${header}.${payload}`).digest());
  if (expected !== sig) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as InstructorPayload;
    if (!data?.iid || data.exp * 1000 < Date.now()) return null;
    return data;
  } catch {
    return null;
  }
}

export function jwtSecret() {
  return process.env.CCA_JWT_SECRET || "dev-change-me-cca-jwt";
}
