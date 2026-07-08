import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LessonSidebar } from "@/components/lesson-sidebar";
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
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/lessons" className="hover:text-primary">
          Lessons
        </Link>{" "}
        / <span className="text-foreground">{lesson.badge}</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">{lesson.badge}</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          {lesson.title}
        </h1>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <div className="order-2 min-w-0 overflow-x-auto lg:order-1">
          <Content locale="en" />
        </div>
        <div className="order-1 lg:order-2">
          <LessonSidebar lesson={lesson} toc={lesson.toc} />
        </div>
      </div>
    </article>
  );
}
