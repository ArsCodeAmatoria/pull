import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { saveCcaAction } from "@/lib/cca/actions";
import { ccaFetch } from "@/lib/cca/proxy";
import { getInstructorSession } from "@/lib/cca/session";
import type { Assessment, ClassDay } from "@/lib/cca/client";

export const metadata: Metadata = { title: "CCA records" };

export default async function CcaAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const instructor = await getInstructorSession();
  if (!instructor) redirect("/instructor/login");
  const sp = await searchParams;
  const current = await ccaFetch("/class-days/current");
  if (!current.ok) redirect("/admin");
  const day = (await current.json()) as ClassDay;
  const listRes = await ccaFetch(`/class-days/${day.id}/cca`);
  const rows = listRes.ok ? ((await listRes.json()) as Assessment[]) : [];

  return (
    <PageShell className="py-10 space-y-8">
      <div>
        <h1>Continuing competency assessment</h1>
        <p className="mt-2 text-muted-foreground">
          Handwritten test only. Enter score, attach a phone photo, submit the company-archive packet. Not a
          certification.
        </p>
        {sp.error ? <p className="mt-2 text-sm text-destructive">Could not save ({sp.error}).</p> : null}
      </div>
      <div className="space-y-8">
        {rows.map((row) => (
          <form key={row.AttendeeID} action={saveCcaAction} className="space-y-3 border border-border p-4">
            <input type="hidden" name="classDayId" value={day.id} />
            <input type="hidden" name="attendeeId" value={row.AttendeeID} />
            <p className="font-semibold">{row.Attendee}</p>
            <p className="text-sm text-muted-foreground">Status: {row.Status} · photos: {row.PhotoCount}</p>
            <label className="block space-y-1">
              <span className="text-sm">Score</span>
              <input
                name="score"
                type="number"
                step="0.1"
                defaultValue={row.Score ?? ""}
                className="w-full max-w-xs border bg-background px-3 py-2"
              />
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input name="passed" type="checkbox" defaultChecked={row.Passed === true} />
              Pass
            </label>
            <label className="block space-y-1">
              <span className="text-sm">Notes</span>
              <textarea name="notes" defaultValue={row.Notes} className="w-full border bg-background px-3 py-2" rows={2} />
            </label>
            <label className="block space-y-1">
              <span className="text-sm">Photo of handwritten assessment</span>
              <input name="photo" type="file" accept="image/*" capture="environment" />
            </label>
            <div className="flex gap-2">
              <Button type="submit" variant="secondary">
                Save
              </Button>
              <Button type="submit" name="submit" value="1">
                Submit CCA packet
              </Button>
            </div>
          </form>
        ))}
      </div>
    </PageShell>
  );
}
