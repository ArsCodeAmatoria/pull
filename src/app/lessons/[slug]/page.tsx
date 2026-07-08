import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { PageShell } from "@/components/page-shell";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalizedLesson } from "@/lib/lessons-i18n";
import { getLocale } from "@/lib/get-locale";
import { getLesson, getLessonSlugs } from "@/lib/lessons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getLessonSlugs()
    .filter((slug) => slug !== "overview")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson not found" };
  const locale = await getLocale();
  const localized = getLocalizedLesson(lesson, locale);
  return {
    title: localized.title,
    description: localized.description,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  const locale = await getLocale();
  const dict = getDictionary(locale);

  if (!lesson || lesson.slug === "overview") {
    notFound();
  }

  const localized = getLocalizedLesson(lesson, locale);
  const Content = lesson.component;

  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground lg:text-xl">
        <Link href="/">{dict.common.home}</Link> / <Link href="/lessons">{dict.lessons.breadcrumb}</Link> /{" "}
        <span className="text-foreground">{localized.badge}</span>
      </nav>

      <header className="space-y-4 pb-8 lg:max-w-4xl">
        <Badge>{localized.badge}</Badge>
        <h1>{localized.title}</h1>
        <p className="text-lg text-muted-foreground">
          {dict.lessons.slidesLinkBefore}{" "}
          <Link href="/slides" className="font-semibold text-foreground underline underline-offset-4">
            {dict.lessons.slidesLink}
          </Link>
          {dict.lessons.slidesLinkAfter}
        </p>
        {locale === "es" ? (
          <p className="rounded-sm bg-foreground/5 px-4 py-3 text-base text-muted-foreground">
            {dict.lessons.contentNotice}
          </p>
        ) : null}
      </header>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_16rem] xl:gap-16">
        <div className="order-2 min-w-0 overflow-x-auto lg:order-1">
          <Content locale={locale as Locale} />
        </div>
        <div className="order-1 lg:order-2">
          <LessonSidebar lesson={localized} toc={localized.toc} />
        </div>
      </div>
    </PageShell>
  );
}
