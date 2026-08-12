"use client";

import Link from "next/link";
import { ArrowRight, Calculator, ExternalLink, Presentation, QrCode, Table2, Triangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { formatDurationLocalized, getLocalizedCompetencyCourse } from "@/lib/competency-i18n";
import { getSlideCourse } from "@/lib/competency-course";
import type { TrackSlug } from "@/lib/tracks";
import { isTrackAvailable, slidesPresentHref } from "@/lib/tracks";
import { TrackComingSoon } from "@/components/track-coming-soon";

type Props = {
  readonly track: TrackSlug;
};

export function SlidesIndexContent({ track }: Props) {
  const { t, locale } = useTranslations();

  if (!isTrackAvailable(track)) {
    return <TrackComingSoon track={track} />;
  }

  const courseData = getSlideCourse(track, locale);
  const course = getLocalizedCompetencyCourse(locale, track);
  const totalDuration = courseData.totalDurationMin;
  const isIntermediate = track === "intermediate";
  const title = isIntermediate ? course.title : t("tracks.rigger.title");
  const description = isIntermediate ? course.description : t("tracks.rigger.description");

  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground lg:text-xl">
        <Link href="/">{t("common.home")}</Link> / <span className="text-foreground">{t("slides.breadcrumb")}</span>
      </nav>

      <header className="max-w-3xl space-y-4 pb-8">
        <Badge variant="secondary">{isIntermediate ? t("tracks.intermediate.badge") : t("slides.badge")}</Badge>
        <h1>{title}</h1>
        <p className="text-xl text-muted-foreground lg:text-2xl">{description}</p>
        <p className="text-base text-muted-foreground lg:text-lg">{t("teaching.notCertification")}</p>
        {totalDuration ? (
          <p className="text-lg font-medium text-foreground">
            {t("slides.plannedInstruction", {
              duration: formatDurationLocalized(totalDuration, locale),
              count: courseData.slideCount,
            })}
          </p>
        ) : null}
        <p className="text-lg text-muted-foreground">
          {t("slides.intro")}
        </p>
        {locale === "es" ? (
          <p className="rounded-sm bg-foreground/5 px-4 py-3 text-base text-muted-foreground">
            {t("slides.contentNotice")}
          </p>
        ) : null}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg">
            <Link href={slidesPresentHref(track)}>
              <Presentation className="mr-2 h-5 w-5" />
              {t("slides.startCourse")}
            </Link>
          </Button>
          {!isIntermediate ? (
            <>
              <Button asChild variant="secondary" size="lg">
                <Link href={slidesPresentHref(track, { unit: "math" })}>
                  <Calculator className="mr-2 h-5 w-5" />
                  {t("slides.jumpToMath")}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/slides/charts">
                  <Table2 className="mr-2 h-5 w-5" />
                  {t("slides.weightCharts")}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/slides/rigging-charts">
                  <Triangle className="mr-2 h-5 w-5" />
                  {t("slides.riggingCharts")}
                </Link>
              </Button>
            </>
          ) : null}
          <Button asChild variant="outline" size="lg">
            <Link href="/join">
              <QrCode className="mr-2 h-5 w-5" />
              {t("slides.joinClass")}
            </Link>
          </Button>
        </div>
        <a
          href={courseData.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          {isIntermediate ? t("tracks.intermediate.source") : t("slides.sourceArticle")}
          <ExternalLink className="h-4 w-4" />
        </a>
      </header>

      <section className="space-y-6 py-8">
        <h2>{t("slides.courseUnits")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {course.units.map((unit) => {
            const extraCovers = courseData.slides.filter(
              (slide) => slide.unit === unit.id && slide.cover && slide.id > unit.slideStart
            );
            return (
              <div key={unit.id} className="space-y-2 p-4 py-3 transition-colors hover:bg-foreground/4">
                <Link href={slidesPresentHref(track, { unit: unit.id })} className="block space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("slides.slidesRange", { start: unit.slideStart, end: unit.slideEnd })}
                    {unit.durationMin ? ` · ${formatDurationLocalized(unit.durationMin, locale)}` : ""}
                  </p>
                  <p className="text-lg font-semibold lg:text-xl">{unit.label}</p>
                  <p className="inline-flex items-center text-sm font-semibold text-accent">
                    {t("slides.presentUnit")} <ArrowRight className="ml-1 h-4 w-4" />
                  </p>
                </Link>
                {extraCovers.length > 0 ? (
                  <ul className="space-y-1 pt-1">
                    {extraCovers.map((slide) => (
                      <li key={slide.id}>
                        <Link
                          href={slidesPresentHref(track, { slide: String(slide.id) })}
                          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                        >
                          {slide.title}
                          <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-4 py-8 text-lg text-muted-foreground lg:text-xl">
        <h2>{t("slides.taughtTopicsTitle")}</h2>
        <ul className="list-disc space-y-2 pl-5">
          {course.topics.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {course.competencyGroups.length > 0 ? (
        <section className="space-y-6 py-8">
          <div className="max-w-3xl space-y-3">
            <h2>{t("slides.competenciesOutcomesTitle")}</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">
              {t("slides.competenciesOutcomesIntro", { count: course.competencyCount })}
            </p>
          </div>
          <div className="space-y-8">
            {course.competencyGroups.map((group) => (
              <div key={group.moduleCode} className="max-w-3xl">
                <h3 className="text-xl font-bold lg:text-2xl">{group.title}</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-base text-muted-foreground lg:text-lg">
                  {group.competencies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4 py-8 text-lg text-muted-foreground lg:text-xl">
        <h2>{t("slides.presenterTips")}</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>{t("slides.tip1")}</li>
          {!isIntermediate ? (
            <li>
              {t("slides.tip2Before")}{" "}
              <Link href="/slides/charts" className="text-foreground underline underline-offset-4">
                {t("slides.tip2Link")}
              </Link>{" "}
              {t("slides.tip2Mid")}{" "}
              <Link
                href="/slides/rigging-charts"
                className="text-foreground underline underline-offset-4"
              >
                {t("slides.tip2LinkRigging")}
              </Link>{" "}
              {t("slides.tip2After")}
            </li>
          ) : null}
          <li>{t("slides.tip3")}</li>
          <li>{t("slides.tip4")}</li>
          <li>{t("slides.tip5")}</li>
          <li>{t("slides.tip6")}</li>
        </ul>
      </section>
    </PageShell>
  );
}
