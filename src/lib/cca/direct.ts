import { compare, hash } from "bcryptjs";
import { jwtSecret, parseInstructorToken, signInstructorToken } from "@/lib/cca/jwt";
import { ccaPool } from "@/lib/cca/pg";

type InstructorRow = {
  id: string;
  username: string;
  display_name: string;
  password_hash: string;
  must_change_password: number;
  active: number;
};

function json(status: number, body: unknown, cookie?: string) {
  const headers = new Headers({ "content-type": "application/json" });
  if (cookie) headers.append("set-cookie", cookie);
  return new Response(JSON.stringify(body), { status, headers });
}

function instructorCookie(token: string, clear = false) {
  const secure = process.env.VERCEL ? "; Secure" : "";
  if (clear) {
    return `pull_instructor=; Path=/; HttpOnly; SameSite=Lax; Max-Age=-1${secure}`;
  }
  return `pull_instructor=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 3600}${secure}`;
}

function cookieValue(header: string | null, name: string) {
  if (!header) return "";
  for (const part of header.split(";")) {
    const [k, ...rest] = part.trim().split("=");
    if (k === name) return rest.join("=");
  }
  return "";
}

async function instructorByUsername(username: string) {
  const { rows } = await ccaPool().query<InstructorRow>(
    `SELECT id, username, display_name, password_hash, must_change_password, active
     FROM instructors WHERE lower(username)=lower($1)`,
    [username]
  );
  return rows[0] ?? null;
}

async function instructorById(id: string) {
  const { rows } = await ccaPool().query<InstructorRow>(
    `SELECT id, username, display_name, password_hash, must_change_password, active
     FROM instructors WHERE id=$1`,
    [id]
  );
  return rows[0] ?? null;
}

export async function handleDirectCca(path: string, init: RequestInit = {}) {
  const method = (init.method ?? "GET").toUpperCase();
  const cookieHeader =
    init.headers instanceof Headers
      ? init.headers.get("cookie")
      : typeof init.headers === "object" && init.headers
        ? String((init.headers as Record<string, string>).cookie ?? "")
        : "";

  if (path === "/me" && method === "GET") {
    const token = cookieValue(cookieHeader, "pull_instructor");
    const claims = token ? parseInstructorToken(jwtSecret(), token) : null;
    if (!claims) return json(401, { error: "unauthenticated" });
    return json(200, {
      role: "instructor",
      id: claims.iid,
      username: claims.usr,
      displayName: claims.name,
      mustChangePassword: claims.mcp,
    });
  }

  if (path === "/instructor/login" && method === "POST") {
    const body = JSON.parse(String(init.body ?? "{}")) as { username?: string; password?: string };
    const row = await instructorByUsername(String(body.username ?? "").trim());
    if (!row || row.active !== 1 || !(await compare(String(body.password ?? ""), row.password_hash))) {
      return json(401, { error: "invalid credentials" });
    }
    const mustChange = row.must_change_password === 1;
    const token = signInstructorToken(jwtSecret(), {
      id: row.id,
      username: row.username,
      displayName: row.display_name,
      mustChangePassword: mustChange,
    });
    return json(
      200,
      {
        id: row.id,
        username: row.username,
        displayName: row.display_name,
        mustChangePassword: mustChange,
      },
      instructorCookie(token)
    );
  }

  if (path === "/instructor/logout" && method === "POST") {
    return json(200, { ok: "true" }, instructorCookie("", true));
  }

  if (path === "/instructor/password" && method === "POST") {
    const token = cookieValue(cookieHeader, "pull_instructor");
    const claims = token ? parseInstructorToken(jwtSecret(), token) : null;
    if (!claims) return json(401, { error: "unauthenticated" });
    const body = JSON.parse(String(init.body ?? "{}")) as { current?: string; next?: string };
    if (!body.next || body.next.length < 8) {
      return json(400, { error: "password must be at least 8 characters" });
    }
    const row = await instructorById(claims.iid);
    if (!row || !(await compare(String(body.current ?? ""), row.password_hash))) {
      return json(401, { error: "current password incorrect" });
    }
    const nextHash = await hash(body.next, 10);
    await ccaPool().query(`UPDATE instructors SET password_hash=$1, must_change_password=0 WHERE id=$2`, [
      nextHash,
      row.id,
    ]);
    const nextToken = signInstructorToken(jwtSecret(), {
      id: row.id,
      username: row.username,
      displayName: row.display_name,
      mustChangePassword: false,
    });
    return json(200, { ok: "true" }, instructorCookie(nextToken));
  }

  return json(501, { error: "not available on this host" });
}
