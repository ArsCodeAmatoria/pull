import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { openClassDayAction } from "@/lib/cca/actions";
import { ccaFetch } from "@/lib/cca/proxy";
import { getInstructorSession } from "@/lib/cca/session";
import type { ClassDay } from "@/lib/cca/client";

export const metadata: Metadata = { title: "Class day" };

export default async function AdminClassDayPage() {
  const instructor = await getInstructorSession();
  if (!instructor) redirect("/instructor/login");
  if (instructor.mustChangePassword) redirect("/instructor/password");

  let day: ClassDay | null = null;
  try {
    const res = await ccaFetch("/class-days/current");
    if (res.ok) day = (await res.json()) as ClassDay;
  } catch {
    day = null;
  }

  return (
    <PageShell className="py-10 space-y-8">
      <div>
        <p className="category-label">Instructor</p>
        <h1>Class day</h1>
        <p className="mt-2 text-muted-foreground">
          Hi {instructor.displayName}. Open a class day to show a QR. This is a teaching aid — not certification.
        </p>
      </div>

      {day ? (
        <div className="space-y-4 max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">Join code</p>
          <p className="font-mono text-5xl font-semibold tracking-[0.2em] text-foreground">{day.joinCode}</p>
          <p className="break-all text-sm text-muted-foreground">{day.joinUrl}</p>
          <p className="text-sm text-muted-foreground">Expires {new Date(day.expiresAt).toLocaleString()}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={`/slides/present?track=${day.courseSlug}`}>Present slides</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/admin/roster">Roster</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/admin/cca">CCA records</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/admin/packets">Packets</Link>
            </Button>
          </div>
        </div>
      ) : (
        <form action={openClassDayAction}>
          <Button type="submit">Open class day</Button>
        </form>
      )}
    </PageShell>
  );
}
