"use client";

import Link from "next/link";
import { ArrowRight, ClipboardCheck, Presentation, QrCode } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { HomeSources } from "@/components/home/home-sources";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";

export function HomePageContent() {
  const { t } = useTranslations();

  return (
    <div className="relative">
      <PageShell className="relative">
        <section className="flex min-h-[72dvh] flex-col justify-center gap-8 py-12 lg:gap-10 lg:py-20">
          <BrandLogo
            priority
            className="h-[min(18vmin,7.5rem)] w-auto max-w-[min(100%,18rem)] object-left sm:h-32"
          />
          <div className="max-w-3xl space-y-5">
            <p className="category-label">{t("home.category")}</p>
            <h1 className="site-title max-w-[16ch]">{t("home.title")}</h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">{t("home.subtitle")}</p>
          </div>

          <div className="flex max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href={slidesIndexHref(DEFAULT_TRACK)} className="flex items-center gap-2">
                <Presentation className="h-5 w-5" aria-hidden />
                {t("home.lessonsShort")}
                <ArrowRight className="h-4 w-4 opacity-70" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={practiceTestHref(DEFAULT_TRACK)} className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" aria-hidden />
                {t("home.testShort")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/join" className="flex items-center gap-2">
                <QrCode className="h-5 w-5" aria-hidden />
                {t("teaching.joinTitle")}
              </Link>
            </Button>
          </div>
        </section>

        <section className="border-t border-border py-12 lg:py-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="site-title-sm">{t("home.certTitle")}</h2>
            <p className="text-base text-muted-foreground lg:text-lg">{t("home.certText")}</p>
            <Button asChild variant="outline" size="sm">
              <Link href="/disclaimer">{t("home.certCta")}</Link>
            </Button>
          </div>
        </section>

        <div className="border-t border-border py-12">
          <HomeSources />
        </div>
      </PageShell>
    </div>
  );
}
