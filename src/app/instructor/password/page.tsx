import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { instructorPasswordAction } from "@/lib/cca/actions";
import { getInstructorSession } from "@/lib/cca/session";

export const metadata: Metadata = { title: "Set password" };

export default async function InstructorPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const instructor = await getInstructorSession();
  if (!instructor) redirect("/instructor/login");
  const sp = await searchParams;
  return (
    <PageShell className="py-12">
      <div className="mx-auto max-w-md space-y-6">
        <h1>Set a new password</h1>
        <p className="text-muted-foreground">Hi {instructor.displayName}. Choose a password of at least 8 characters.</p>
        {sp.error ? <p className="text-sm text-destructive">Could not update password.</p> : null}
        <form action={instructorPasswordAction} className="space-y-4">
          <label className="block space-y-1">
            <span className="text-sm font-medium">Current password</span>
            <input name="current" type="password" required className="w-full border bg-background px-3 py-2" />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium">New password</span>
            <input name="next" type="password" required minLength={8} className="w-full border bg-background px-3 py-2" />
          </label>
          <Button type="submit">Save password</Button>
        </form>
      </div>
    </PageShell>
  );
}
