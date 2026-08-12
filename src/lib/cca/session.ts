import { ccaFetch } from "@/lib/cca/proxy";
import type { CcaSession, InstructorSession } from "@/lib/cca/client";

export async function getCcaSession(): Promise<CcaSession | null> {
  try {
    const res = await ccaFetch("/me");
    if (!res.ok) return null;
    return (await res.json()) as CcaSession;
  } catch {
    return null;
  }
}

export async function getInstructorSession(): Promise<InstructorSession | null> {
  const session = await getCcaSession();
  if (session?.role === "instructor") return session;
  return null;
}
