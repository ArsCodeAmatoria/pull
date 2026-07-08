import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { PageShell } from "@/components/page-shell";
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
  return {
    title: lesson.title,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);

  if (!lesson || lesson.slug === "overview") {
    notFound();
  }

  const Content = lesson.component;

  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground lg:text-xl">
        <Link href="/">Home</Link> / <Link href="/lessons">Lessons</Link> /{" "}
        <span className="text-foreground">{lesson.badge}</span>
      </nav>

      <header className="space-y-4 pb-8 lg:max-w-4xl">
        <Badge>{lesson.badge}</Badge>
        <h1>{lesson.title}</h1>
        <p className="text-lg text-muted-foreground">
          For classroom slides, see the{" "}
          <Link href="/slides" className="font-semibold text-foreground underline underline-offset-4">
            Rigger competency slide course
          </Link>
          .
        </p>
      </header>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_16rem] xl:gap-16">
        <div className="order-2 min-w-0 overflow-x-auto lg:order-1">
          <Content locale="en" />
        </div>
        <div className="order-1 lg:order-2">
          <LessonSidebar lesson={lesson} toc={lesson.toc} />
        </div>
      </div>
    </PageShell>
  );
}
