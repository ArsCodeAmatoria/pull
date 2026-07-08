"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";

export function TrackComingSoon() {
  const { t } = useTranslations();

  return (
    <PageShell className="py-10 lg:py-16">
      <div className="max-w-xl space-y-5">
        <nav className="text-lg text-muted-foreground">
          <Link href="/">{t("common.home")}</Link>
        </nav>
        <h1>{t("tracks.pro.title")}</h1>
        <p className="flex items-center gap-2 font-display text-base font-semibold uppercase tracking-wide text-highlight-secondary lg:text-lg">
          <span aria-hidden className="text-4xl leading-none lg:text-5xl">*</span>
          {t("tracks.comingSoon")}
        </p>
        <p className="text-xl text-muted-foreground">{t("tracks.comingSoonDetail")}</p>
        <Button asChild size="lg">
          <Link href="/">{t("common.home")}</Link>
        </Button>
      </div>
    </PageShell>
  );
}
