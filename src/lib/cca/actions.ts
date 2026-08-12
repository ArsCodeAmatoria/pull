"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { applySetCookies, ccaFetch } from "@/lib/cca/proxy";

function safeNextPath(value: string) {
  if (!value.startsWith("/") || value.startsWith("//")) return null;
  return value;
}

export async function instructorLoginAction(formData: FormData) {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = safeNextPath(String(formData.get("next") ?? ""));
  const res = await ccaFetch("/instructor/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  await applySetCookies(res);
  if (!res.ok) {
    redirect(next ? `/instructor/login?error=1&next=${encodeURIComponent(next)}` : "/instructor/login?error=1");
  }
  const data = (await res.json()) as { mustChangePassword?: boolean };
  if (data.mustChangePassword) redirect("/instructor/password");
  redirect(next ?? "/");
}

export async function instructorLogoutAction() {
  try {
    const res = await ccaFetch("/instructor/logout", { method: "POST" });
    await applySetCookies(res);
  } catch {
    /* still clear local session cookies */
  }
  const jar = await cookies();
  jar.delete("pull_instructor");
  jar.delete("pull_day");
  redirect("/instructor/login");
}

export async function instructorPasswordAction(formData: FormData) {
  const res = await ccaFetch("/instructor/password", {
    method: "POST",
    body: JSON.stringify({
      current: String(formData.get("current") ?? ""),
      next: String(formData.get("next") ?? ""),
    }),
  });
  await applySetCookies(res);
  if (!res.ok) redirect("/instructor/password?error=1");
  redirect("/admin");
}

export async function openClassDayAction() {
  const res = await ccaFetch("/class-days", {
    method: "POST",
    body: JSON.stringify({ course: "rigger-competency", locale: "en" }),
  });
  if (!res.ok) redirect("/admin?error=1");
  redirect("/admin");
}

export async function joinClassAction(formData: FormData) {
  const res = await ccaFetch("/join", {
    method: "POST",
    body: JSON.stringify({
      code: String(formData.get("code") ?? ""),
      name: String(formData.get("name") ?? ""),
      employeeId: String(formData.get("employeeId") ?? ""),
    }),
  });
  await applySetCookies(res);
  if (!res.ok) redirect("/join?error=1");
  redirect("/slides/present?track=rigger-competency&follow=1");
}

export async function saveCcaAction(formData: FormData) {
  const classDayId = String(formData.get("classDayId") ?? "");
  const attendeeId = String(formData.get("attendeeId") ?? "");
  const scoreRaw = String(formData.get("score") ?? "");
  const passed = formData.get("passed") === "on";
  const notes = String(formData.get("notes") ?? "");
  const score = scoreRaw === "" ? null : Number(scoreRaw);
  const res = await ccaFetch("/cca", {
    method: "POST",
    body: JSON.stringify({
      classDayId,
      attendeeId,
      score,
      passed,
      notes,
    }),
  });
  if (!res.ok) redirect("/admin/cca?error=save");
  const as = (await res.json()) as { ID?: string };
  const id = as.ID;
  const photo = formData.get("photo");
  if (id && photo instanceof File && photo.size > 0) {
    const body = new FormData();
    body.append("photo", photo);
    const up = await ccaFetch(`/cca/${id}/photos`, { method: "POST", body });
    if (!up.ok) redirect("/admin/cca?error=photo");
  }
  if (formData.get("submit") === "1" && id) {
    const sub = await ccaFetch(`/cca/${id}/submit`, { method: "POST" });
    if (!sub.ok) redirect("/admin/cca?error=submit");
  }
  redirect("/admin/cca");
}

export async function sendDigestAction(classDayId: string) {
  await ccaFetch(`/class-days/${classDayId}/digest`, { method: "POST" });
  redirect("/admin/packets");
}
