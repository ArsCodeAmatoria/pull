"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/page-shell";
import { CraneRiggingEducationOverview } from "@/components/rigging/crane-rigging-education-overview";
import { useTranslations } from "@/i18n/locale-context";
import { getLocalizedLesson, stripLessonTitlePrefix } from "@/lib/lessons-i18n";
import { NAV_LESSONS, OVERVIEW_LESSON } from "@/lib/lessons";

export function LessonsIndexContent() {
  const { t, locale } = useTranslations();
  const modules = NAV_LESSONS.filter((l) => l.kind === "module");
  const appendices = NAV_LESSONS.filter((l) => l.kind === "appendix");
  const overview = getLocalizedLesson(OVERVIEW_LESSON, locale);

  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground lg:text-xl">
        <Link href="/">{t("common.home")}</Link> / <span className="text-foreground">{t("lessons.breadcrumb")}</span>
      </nav>

      <header className="space-y-4 pb-8 lg:pb-12">
        <Badge>{t("lessons.badge")}</Badge>
        <h1>{t("lessons.title")}</h1>
        <p className="text-xl text-muted-foreground lg:text-2xl">
          {t("lessons.introBefore")}{" "}
          <Link href="/slides" className="font-semibold text-foreground underline underline-offset-4">
            {t("lessons.introLink")}
          </Link>
          {t("lessons.introAfter")}
        </p>
      </header>

      <div className="space-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 lg:space-y-0">
        <CraneRiggingEducationOverview locale={locale} />
        <aside className="not-prose lg:sticky lg:top-24 lg:h-fit">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {t("lessons.quickLinks")}
          </h2>
          <ul className="mt-4 space-y-3">
            {overview.toc.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} className="block py-1 text-lg text-foreground lg:text-xl">
                  {entry.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="space-y-6 py-10 lg:py-16">
        <h2>{t("lessons.modules")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6">
          {modules.map((lesson) => {
            const localized = getLocalizedLesson(lesson, locale);
            return (
              <Link key={lesson.slug} href={`/lessons/${lesson.slug}`} className="block min-h-[52px] py-2">
                <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {localized.badge}
                </p>
                <p className="mt-2 text-lg font-semibold lg:text-xl">
                  {stripLessonTitlePrefix(localized.title, lesson.kind)}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="space-y-6 py-10 lg:py-16">
        <h2>{t("lessons.appendices")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {appendices.map((lesson) => {
            const localized = getLocalizedLesson(lesson, locale);
            return (
              <Link key={lesson.slug} href={`/lessons/${lesson.slug}`} className="block min-h-[52px] py-2">
                <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {localized.badge}
                </p>
                <p className="mt-2 text-lg font-semibold lg:text-xl">
                  {stripLessonTitlePrefix(localized.title, lesson.kind)}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
