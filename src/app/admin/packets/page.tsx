import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { sendDigestAction } from "@/lib/cca/actions";
import { ccaFetch } from "@/lib/cca/proxy";
import { getInstructorSession } from "@/lib/cca/session";
import type { ClassDay, Packet } from "@/lib/cca/client";

export const metadata: Metadata = { title: "Packets" };

export default async function PacketsPage() {
  const instructor = await getInstructorSession();
  if (!instructor) redirect("/instructor/login");
  const current = await ccaFetch("/class-days/current");
  if (!current.ok) redirect("/admin");
  const day = (await current.json()) as ClassDay;
  const res = await ccaFetch(`/class-days/${day.id}/packets`);
  const packets = res.ok ? ((await res.json()) as Packet[]) : [];

  return (
    <PageShell className="py-10 space-y-6">
      <h1>Outbound packets</h1>
      <p className="text-muted-foreground">Company archive email is the record of assessment. Not certification.</p>
      <form
        action={async () => {
          "use server";
          await sendDigestAction(day.id);
        }}
      >
        <Button type="submit" variant="secondary">
          Send end-of-day digest
        </Button>
      </form>
      <ul className="space-y-3">
        {packets.map((p) => (
          <li key={p.ID} className="border-b border-border py-2 text-sm">
            <span className="font-medium">{p.Kind}</span> · {p.Status}
            <div className="text-muted-foreground">{p.Recipients}</div>
            {p.Error ? <div className="text-destructive">{p.Error}</div> : null}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
