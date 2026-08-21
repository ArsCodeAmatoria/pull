"use client";

import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SectionKicker } from "@/components/section-kicker";
import { CraneRiggingEducationOverview } from "@/components/rigging/crane-rigging-education-overview";
import { useTranslations } from "@/i18n/locale-context";
import { getLocalizedLesson, stripLessonTitlePrefix } from "@/lib/lessons-i18n";
import { BASIC_COURSE_NAV_LESSONS, OVERVIEW_LESSON } from "@/lib/lessons";
import { DEFAULT_TRACK, slidesIndexHref } from "@/lib/tracks";

export function LessonsIndexContent() {
  const { t, locale } = useTranslations();
  const modules = BASIC_COURSE_NAV_LESSONS.filter((l) => l.kind === "module");
  const appendices = BASIC_COURSE_NAV_LESSONS.filter((l) => l.kind === "appendix");
  const overview = getLocalizedLesson(OVERVIEW_LESSON, locale);

  return (
    <PageShell className="pb-16 lg:pb-24">
      <header className="space-y-8 py-10 lg:py-16">
        <SectionKicker>01 — {t("lessons.badge")}</SectionKicker>
        <p className="mono text-[var(--steel)]">
          <Link href="/" className="hover:text-foreground">
            {t("common.home")}
          </Link>
          <span className="px-2">/</span>
          <span className="text-foreground">{t("lessons.breadcrumb")}</span>
        </p>
        <h1 className="max-w-[14ch]">{t("lessons.title")}</h1>
        <p className="lede">
          {t("lessons.introBefore")}{" "}
          <Link
            href={slidesIndexHref(DEFAULT_TRACK)}
            className="text-foreground shadow-[inset_0_-1px_0_var(--ink)] hover:text-[var(--crown)] hover:shadow-[inset_0_-1px_0_var(--crown)]"
          >
            {t("lessons.introLink")}
          </Link>
          {t("lessons.introAfter")}
        </p>
        <p className="max-w-xl border-l-2 border-[var(--crown)] pl-4 text-[var(--copy)]">
          {t("disclaimer.educational")}
        </p>
      </header>

      <div className="space-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 lg:space-y-0">
        <CraneRiggingEducationOverview locale={locale} />
        <aside className="not-prose lg:sticky lg:top-28 lg:h-fit">
          <p className="mono text-[var(--steel)]">{t("lessons.quickLinks")}</p>
          <ul className="mt-4">
            {overview.toc.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} className="rule-row block text-foreground hover:text-[var(--crown)]">
                  {entry.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="border-t border-[var(--line)] py-16">
        <SectionKicker>02 — {t("lessons.modules")}</SectionKicker>
        <h2 className="mb-8">{t("lessons.modules")}</h2>
        {modules.map((lesson, index) => {
          const localized = getLocalizedLesson(lesson, locale);
          return (
            <Link
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              className="rule-row grid gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:items-baseline"
            >
              <p className="step-n">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className="mono text-[var(--steel)]">{localized.badge}</p>
                <h3 className="mt-1 hover:text-[var(--crown)]">
                  {stripLessonTitlePrefix(localized.title, lesson.kind)}
                </h3>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="border-t border-[var(--line)] py-16">
        <SectionKicker>03 — {t("lessons.appendices")}</SectionKicker>
        <h2 className="mb-8">{t("lessons.appendices")}</h2>
        {appendices.map((lesson, index) => {
          const localized = getLocalizedLesson(lesson, locale);
          return (
            <Link
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              className="rule-row grid gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:items-baseline"
            >
              <p className="step-n">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className="mono text-[var(--steel)]">{localized.badge}</p>
                <h3 className="mt-1 hover:text-[var(--crown)]">
                  {stripLessonTitlePrefix(localized.title, lesson.kind)}
                </h3>
              </div>
            </Link>
          );
        })}
      </section>
    </PageShell>
  );
}
