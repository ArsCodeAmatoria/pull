import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ccaFetch } from "@/lib/cca/proxy";
import { getInstructorSession } from "@/lib/cca/session";
import type { Attendee, ClassDay } from "@/lib/cca/client";

export const metadata: Metadata = { title: "Roster" };

export default async function RosterPage() {
  const instructor = await getInstructorSession();
  if (!instructor) redirect("/instructor/login");
  const current = await ccaFetch("/class-days/current");
  if (!current.ok) {
    return (
      <PageShell className="py-10">
        <h1>Roster</h1>
        <p className="mt-2 text-muted-foreground">Open a class day first.</p>
        <Link href="/admin" className="mt-4 inline-block underline">
          Class day
        </Link>
      </PageShell>
    );
  }
  const day = (await current.json()) as ClassDay;
  const rosterRes = await ccaFetch(`/class-days/${day.id}/roster`);
  const roster = rosterRes.ok ? ((await rosterRes.json()) as Attendee[]) : [];

  return (
    <PageShell className="py-10 space-y-6">
      <h1>Roster</h1>
      <p className="text-muted-foreground">
        {roster.length} joined · code {day.joinCode}
      </p>
      <ul className="space-y-2">
        {roster.map((a) => (
          <li key={a.ID} className="border-b border-border py-2">
            <span className="font-medium">{a.DisplayName}</span>
            {a.EmployeeID ? <span className="ml-2 text-muted-foreground">{a.EmployeeID}</span> : null}
          </li>
        ))}
      </ul>
      <Link href="/admin/cca" className="underline">
        Enter CCA scores
      </Link>
    </PageShell>
  );
}
