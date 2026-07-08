"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Presentation, Table2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { formatDurationLocalized, getLocalizedCompetencyCourse } from "@/lib/competency-i18n";
import { COMPETENCY_COURSE } from "@/lib/competency-course";

export function SlidesIndexContent() {
  const { t, locale } = useTranslations();
  const course = getLocalizedCompetencyCourse(locale);
  const totalDuration = COMPETENCY_COURSE.totalDurationMin;

  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground lg:text-xl">
        <Link href="/">{t("common.home")}</Link> / <span className="text-foreground">{t("slides.breadcrumb")}</span>
      </nav>

      <header className="space-y-4 pb-8 lg:max-w-3xl">
        <Badge>{t("slides.badge")}</Badge>
        <h1>{course.title}</h1>
        <p className="text-xl text-muted-foreground lg:text-2xl">{course.description}</p>
        {totalDuration ? (
          <p className="text-lg font-medium text-foreground">
            {t("slides.plannedInstruction", {
              duration: formatDurationLocalized(totalDuration, locale),
              count: COMPETENCY_COURSE.slideCount,
            })}
          </p>
        ) : null}
        <p className="text-lg text-muted-foreground">
          {t("slides.introBefore")}{" "}
          <Link href="/lessons" className="font-semibold text-foreground underline underline-offset-4">
            {t("slides.introLink")}
          </Link>
          {t("slides.introAfter")}
        </p>
        {locale === "es" ? (
          <p className="rounded-sm bg-foreground/5 px-4 py-3 text-base text-muted-foreground">
            {t("slides.contentNotice")}
          </p>
        ) : null}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg">
            <Link href="/slides/present">
              <Presentation className="mr-2 h-5 w-5" />
              {t("slides.startCourse")}
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/slides/present?unit=math">{t("slides.jumpToMath")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/slides/charts">
              <Table2 className="mr-2 h-5 w-5" />
              {t("slides.weightCharts")}
            </Link>
          </Button>
        </div>
        <a
          href={COMPETENCY_COURSE.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          {t("slides.sourceArticle")}
          <ExternalLink className="h-4 w-4" />
        </a>
      </header>

      <section className="space-y-6 py-8">
        <h2>{t("slides.courseUnits")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {course.units.map((unit) => (
            <Link
              key={unit.id}
              href={`/slides/present?unit=${unit.id}`}
              className="block space-y-2 p-4 py-3 transition-colors hover:bg-foreground/4"
            >
              <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {t("slides.slidesRange", { start: unit.slideStart, end: unit.slideEnd })}
                {unit.durationMin ? ` · ${formatDurationLocalized(unit.durationMin, locale)}` : ""}
              </p>
              <p className="text-lg font-semibold lg:text-xl">{unit.label}</p>
              <p className="inline-flex items-center font-display text-sm font-semibold uppercase tracking-wide">
                {t("slides.presentUnit")} <ArrowRight className="ml-1 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4 py-8 text-lg text-muted-foreground lg:text-xl">
        <h2>{t("slides.competenciesTitle")}</h2>
        <ul className="list-disc space-y-2 pl-5">
          {course.competencies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 py-8 text-lg text-muted-foreground lg:text-xl">
        <h2>{t("slides.presenterTips")}</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>{t("slides.tip1")}</li>
          <li>
            {t("slides.tip2Before")}{" "}
            <Link href="/slides/charts" className="text-foreground underline underline-offset-4">
              {t("slides.tip2Link")}
            </Link>{" "}
            {t("slides.tip2After")}
          </li>
          <li>{t("slides.tip3")}</li>
          <li>{t("slides.tip4")}</li>
          <li>{t("slides.tip5")}</li>
        </ul>
      </section>
    </PageShell>
  );
}
