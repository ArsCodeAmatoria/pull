"use client";

import Link from "next/link";
import { ClipboardCheck, Presentation, QrCode } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { HomeSources } from "@/components/home/home-sources";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";

export function HomePageContent() {
  const { t } = useTranslations();

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rotate-12 rounded-full border-4 border-foreground bg-secondary opacity-80 sm:h-56 sm:w-56"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-24 h-28 w-28 -rotate-6 border-4 border-foreground bg-accent sm:h-36 sm:w-36"
      />

      <PageShell className="relative">
        <section className="flex min-h-[78dvh] flex-col justify-center gap-8 py-10 lg:gap-10 lg:py-14">
          <BrandLogo
            priority
            className="h-[min(22vmin,9rem)] w-auto max-w-[min(100%,22rem)] object-left sm:h-40"
          />
          <div className="max-w-5xl space-y-4">
            <p className="category-label">{t("home.category")}</p>
            <h1 className="site-title max-w-[12ch]">{t("home.title")}</h1>
            <p className="max-w-2xl text-xl font-semibold leading-snug text-foreground sm:text-2xl lg:text-3xl">
              {t("home.subtitle")}
            </p>
          </div>

          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="site-sticker -rotate-1">
              <Link href={slidesIndexHref(DEFAULT_TRACK)} className="flex items-center gap-2">
                <Presentation className="h-6 w-6" aria-hidden />
                {t("home.lessonsShort")}
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="site-sticker rotate-1">
              <Link href={practiceTestHref(DEFAULT_TRACK)} className="flex items-center gap-2">
                <ClipboardCheck className="h-6 w-6" aria-hidden />
                {t("home.testShort")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="site-sticker -rotate-2">
              <Link href="/join" className="flex items-center gap-2">
                <QrCode className="h-6 w-6" aria-hidden />
                {t("teaching.joinTitle")}
              </Link>
            </Button>
          </div>
        </section>

        <section className="border-y-4 border-foreground bg-card py-10 shadow-[6px_6px_0_#000]">
          <div className="space-y-4 px-1 sm:px-2">
            <h2 className="site-title-sm">{t("home.certTitle")}</h2>
            <p className="max-w-2xl text-lg font-medium leading-snug lg:text-xl">{t("home.certText")}</p>
            <Button asChild variant="secondary" size="sm" className="site-sticker">
              <Link href="/disclaimer">{t("home.certCta")}</Link>
            </Button>
          </div>
        </section>

        <div className="py-10">
          <HomeSources />
        </div>
      </PageShell>
    </div>
  );
}
