"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { SectionKicker } from "@/components/section-kicker";
import { useTranslations } from "@/i18n/locale-context";
import { HomeSources } from "@/components/home/home-sources";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";

export function HomePageContent() {
  const { t } = useTranslations();

  return (
    <div className="relative">
      <PageShell>
        <section className="flex min-h-[78dvh] flex-col justify-end gap-8 pb-16 pt-8 lg:gap-10 lg:pb-24">
          <SectionKicker>{t("home.kicker")}</SectionKicker>
          <BrandLogo className="h-16 w-16 text-foreground sm:h-20 sm:w-20" />
          <div className="max-w-[18ch]">
            <h1 className="site-title">{t("home.title")}</h1>
          </div>
          <p className="lede max-w-xl">{t("home.subtitle")}</p>
          <p className="max-w-xl border-l-2 border-[var(--crown)] pl-4 text-[var(--copy)]">
            {t("home.educationalNotice")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href={slidesIndexHref(DEFAULT_TRACK)}>{t("home.lessonsShort")}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={practiceTestHref(DEFAULT_TRACK)}>{t("home.testShort")}</Link>
            </Button>
          </div>
        </section>

        <HomeSources />
      </PageShell>
    </div>
  );
}
