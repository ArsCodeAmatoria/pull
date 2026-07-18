"use client";

import { Frown } from "lucide-react";
import { Suspense } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { LoginForm } from "@/features/auth/components/login-form";
import { useTranslations } from "@/i18n/locale-context";

export function LoginPageContent() {
  const { t } = useTranslations();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-12">
      <PageShell className="flex justify-center">
        <Card className="w-full max-w-md bg-foreground/[0.03]">
          <CardHeader className="space-y-3 text-center">
            <div className="mx-auto flex items-center gap-2 font-display font-bold">
              <Frown className="h-7 w-7 text-foreground" strokeWidth={2.25} />
              <span className="text-xl tracking-[0.12em]">pull</span>
            </div>
            <h1 className="text-3xl">{t("auth.signInTitle")}</h1>
            <p className="text-lg text-muted-foreground">{t("auth.signInSubtitle")}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <Suspense fallback={<div className="h-40 animate-pulse bg-foreground/5" />}>
              <LoginForm />
            </Suspense>
          </CardContent>
        </Card>
      </PageShell>
    </div>
  );
}
