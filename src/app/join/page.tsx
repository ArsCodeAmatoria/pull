import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { joinClassAction } from "@/lib/cca/actions";

export const metadata: Metadata = { title: "Join class" };

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string; error?: string }>;
}) {
  const sp = await searchParams;
  return (
    <PageShell className="py-12">
      <div className="mx-auto max-w-md space-y-6">
        <h1>Join class</h1>
        <p className="text-muted-foreground">Scan the instructor QR or enter the class-day code. This is not certification.</p>
        {sp.error ? <p className="text-sm text-destructive">Could not join. Check the code and try again.</p> : null}
        <form action={joinClassAction} className="space-y-4">
          <label className="block space-y-1">
            <span className="text-sm font-medium">Class-day code</span>
            <input
              name="code"
              defaultValue={sp.code ?? ""}
              required
              className="w-full border bg-background px-3 py-2 uppercase"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium">Your name</span>
            <input name="name" required className="w-full border bg-background px-3 py-2" />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium">Employee ID (optional)</span>
            <input name="employeeId" className="w-full border bg-background px-3 py-2" />
          </label>
          <Button type="submit">Join</Button>
        </form>
      </div>
    </PageShell>
  );
}
