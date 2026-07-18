import type { Metadata } from "next";
import Link from "next/link";
import { Frown } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { ResetPasswordForm } from "@/features/auth/components/reset-password-form";

export const metadata: Metadata = {
  title: "Set new password",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background py-12">
      <PageShell className="flex justify-center">
        <Card className="w-full max-w-md bg-foreground/[0.03]">
          <CardHeader className="space-y-3 text-center">
            <Link href="/" className="mx-auto flex items-center gap-2 font-display font-bold">
              <Frown className="h-7 w-7 text-foreground" strokeWidth={2.25} />
              <span className="text-xl tracking-[0.12em]">pull</span>
            </Link>
            <h1 className="text-3xl">Choose a new password</h1>
            <p className="text-lg text-muted-foreground">
              Enter a new password for your pull account.
            </p>
          </CardHeader>
          <CardContent>
            <ResetPasswordForm />
          </CardContent>
        </Card>
      </PageShell>
    </div>
  );
}
