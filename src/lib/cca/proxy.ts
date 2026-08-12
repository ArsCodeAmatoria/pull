import { cookies } from "next/headers";
import { ccaApiUrl } from "@/lib/cca/client";
import { handleDirectCca } from "@/lib/cca/direct";
import { usesDirectCca } from "@/lib/cca/pg";

export async function ccaFetch(path: string, init: RequestInit = {}) {
  const jar = await cookies();
  const instructor = jar.get("pull_instructor")?.value;
  const day = jar.get("pull_day")?.value;
  const headers = new Headers(init.headers);
  const cookieParts: string[] = [];
  if (instructor) cookieParts.push(`pull_instructor=${instructor}`);
  if (day) cookieParts.push(`pull_day=${day}`);
  if (cookieParts.length) headers.set("cookie", cookieParts.join("; "));
  if (!headers.has("content-type") && init.body && !(init.body instanceof FormData)) {
    headers.set("content-type", "application/json");
  }
  if (usesDirectCca()) {
    return handleDirectCca(path, { ...init, headers });
  }
  return fetch(ccaApiUrl(path), {
    ...init,
    headers,
    cache: "no-store",
  });
}

export async function applySetCookies(res: Response) {
  const jar = await cookies();
  const raw =
    typeof res.headers.getSetCookie === "function"
      ? res.headers.getSetCookie()
      : res.headers.get("set-cookie")
        ? [res.headers.get("set-cookie") as string]
        : [];
  for (const line of raw) {
    const [pair] = line.split(";");
    const eq = pair.indexOf("=");
    if (eq < 0) continue;
    const name = pair.slice(0, eq).trim();
    const value = pair.slice(eq + 1).trim();
    if (value === "" || line.includes("Max-Age=-1")) {
      jar.delete(name);
      continue;
    }
    jar.set(name, value, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: Boolean(process.env.VERCEL),
    });
  }
}
