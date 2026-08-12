import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { BrandLogo } from "@/components/brand-logo";
import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background py-12">
      <PageShell className="flex justify-center">
        <Card className="w-full max-w-md bg-foreground/[0.03]">
          <CardHeader className="space-y-3 text-center">
            <Link href="/" className="mx-auto flex items-center justify-center" aria-label="Ridgetechone">
              <BrandLogo className="h-16 w-auto max-w-[16rem]" />
            </Link>
            <h1 className="text-3xl">Reset your password</h1>
            <p className="text-lg text-muted-foreground">
              We&apos;ll email you a secure link to choose a new password.
            </p>
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
        </Card>
      </PageShell>
    </div>
  );
}
