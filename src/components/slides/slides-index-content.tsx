"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { SectionKicker } from "@/components/section-kicker";
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
    <PageShell className="pb-16 lg:pb-24">
      <header className="space-y-8 py-10 lg:py-16">
        <SectionKicker>{t("slides.kicker")}</SectionKicker>
        <p className="mono text-[var(--steel)]">
          <Link href="/" className="hover:text-foreground">
            {t("common.home")}
          </Link>
          <span className="px-2">/</span>
          <span className="text-foreground">{t("slides.breadcrumb")}</span>
        </p>
        <h1 className="max-w-[14ch]">{title}</h1>
        <p className="lede">{description}</p>
        {totalDuration ? (
          <p className="mono text-[var(--steel)]">
            {t("slides.plannedInstruction", {
              duration: formatDurationLocalized(totalDuration, locale),
              count: courseData.slideCount,
            })}
          </p>
        ) : null}
        <p className="max-w-xl text-[var(--copy)]">{t("slides.intro")}</p>
        <p className="max-w-xl border-l-2 border-[var(--crown)] pl-4 text-[var(--copy)]">
          {t("disclaimer.educational")}
        </p>
        {locale === "es" ? (
          <p className="max-w-xl border-l-2 border-[var(--crown)] pl-4 text-[var(--copy)]">
            {t("slides.contentNotice")}
          </p>
        ) : null}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg">
            <Link href={slidesPresentHref(track)}>{t("slides.startCourse")}</Link>
          </Button>
          {!isIntermediate ? (
            <>
              <Button asChild variant="secondary" size="lg">
                <Link href={slidesPresentHref(track, { unit: "math" })}>{t("slides.jumpToMath")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/slides/charts">{t("slides.weightCharts")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/slides/rigging-charts">{t("slides.riggingCharts")}</Link>
              </Button>
            </>
          ) : null}
        </div>
        <a
          href={courseData.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-foreground shadow-[inset_0_-1px_0_var(--ink)] hover:text-[var(--crown)] hover:shadow-[inset_0_-1px_0_var(--crown)]"
        >
          {isIntermediate ? t("tracks.intermediate.source") : t("slides.sourceArticle")}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </header>

      <section className="border-t border-[var(--line)] py-16">
        <SectionKicker>02 — {t("slides.courseUnits")}</SectionKicker>
        <h2 className="mb-8">{t("slides.courseUnits")}</h2>
        <div>
          {course.units.map((unit, index) => {
            const extraCovers = courseData.slides.filter(
              (slide) => slide.unit === unit.id && slide.cover && slide.id > unit.slideStart
            );
            return (
              <div key={unit.id} className="rule-row grid gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:items-baseline">
                <p className="step-n">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <Link href={slidesPresentHref(track, { unit: unit.id })} className="group block">
                    <h3 className="group-hover:text-[var(--crown)]">{unit.label}</h3>
                    <p className="mt-2 mono text-[var(--steel)]">
                      {t("slides.slidesRange", { start: unit.slideStart, end: unit.slideEnd })}
                      {unit.durationMin ? ` · ${formatDurationLocalized(unit.durationMin, locale)}` : ""}
                    </p>
                    <p className="mt-2 mono text-foreground">{t("slides.presentUnit")} →</p>
                  </Link>
                  {extraCovers.length > 0 ? (
                    <ul className="mt-3 space-y-1">
                      {extraCovers.map((slide) => (
                        <li key={slide.id}>
                          <Link
                            href={slidesPresentHref(track, { slide: String(slide.id) })}
                            className="text-sm text-[var(--copy)] hover:text-[var(--crown)]"
                          >
                            {slide.title} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-16">
        <SectionKicker>03 — {t("slides.taughtTopicsTitle")}</SectionKicker>
        <h2 className="mb-8">{t("slides.taughtTopicsTitle")}</h2>
        <ul>
          {course.topics.map((item) => (
            <li key={item} className="rule-row max-w-3xl text-[var(--copy)]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {course.competencyGroups.length > 0 ? (
        <section className="border-t border-[var(--line)] py-16">
          <SectionKicker>04 — {t("slides.competenciesOutcomesTitle")}</SectionKicker>
          <h2 className="mb-6 max-w-[16ch]">{t("slides.competenciesOutcomesTitle")}</h2>
          <p className="lede mb-10">
            {t("slides.competenciesOutcomesIntro", { count: course.competencyCount })}
          </p>
          <div className="space-y-10">
            {course.competencyGroups.map((group) => (
              <div key={group.moduleCode} className="max-w-3xl">
                <h3>{group.title}</h3>
                <ol className="mt-4 list-decimal space-y-2 pl-6 text-[var(--copy)]">
                  {group.competencies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-t border-[var(--line)] py-16">
        <SectionKicker>05 — {t("slides.presenterTips")}</SectionKicker>
        <h2 className="mb-8">{t("slides.presenterTips")}</h2>
        <ul className="max-w-3xl">
          <li className="rule-row text-[var(--copy)]">{t("slides.tip1")}</li>
          {!isIntermediate ? (
            <li className="rule-row text-[var(--copy)]">
              {t("slides.tip2Before")}{" "}
              <Link href="/slides/charts" className="text-foreground shadow-[inset_0_-1px_0_var(--ink)]">
                {t("slides.tip2Link")}
              </Link>{" "}
              {t("slides.tip2Mid")}{" "}
              <Link
                href="/slides/rigging-charts"
                className="text-foreground shadow-[inset_0_-1px_0_var(--ink)]"
              >
                {t("slides.tip2LinkRigging")}
              </Link>{" "}
              {t("slides.tip2After")}
            </li>
          ) : null}
          <li className="rule-row text-[var(--copy)]">{t("slides.tip3")}</li>
          <li className="rule-row text-[var(--copy)]">{t("slides.tip4")}</li>
          <li className="rule-row text-[var(--copy)]">{t("slides.tip5")}</li>
          <li className="rule-row text-[var(--copy)]">{t("slides.tip6")}</li>
        </ul>
      </section>
    </PageShell>
  );
}
