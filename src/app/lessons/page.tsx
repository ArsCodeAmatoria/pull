import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CraneRiggingEducationOverview } from "@/components/rigging/crane-rigging-education-overview";
import { NAV_LESSONS, OVERVIEW_LESSON } from "@/lib/lessons";

export const metadata: Metadata = {
  title: "Lessons",
  description: "Crane rigging and advanced rigging course modules and reference appendices.",
};

export default function LessonsPage() {
  const modules = NAV_LESSONS.filter((l) => l.kind === "module");
  const appendices = NAV_LESSONS.filter((l) => l.kind === "appendix");

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-foreground">Lessons</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Course curriculum</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Rigging lessons</h1>
        <p className="max-w-3xl text-muted-foreground">
          Structured modules covering crane rigging from fundamentals through advanced operations, plus reference appendices.
        </p>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <CraneRiggingEducationOverview locale="en" />
        <aside className="not-prose mt-10 lg:sticky lg:top-24 lg:mt-0 lg:h-fit">
          <div className="rounded-lg border border-border bg-card p-4 text-sm">
            <h2 className="font-semibold uppercase tracking-wide text-muted-foreground">Quick links</h2>
            <ul className="mt-3 space-y-2">
              {OVERVIEW_LESSON.toc.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`} className="text-foreground/85 hover:text-primary">
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Modules</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {modules.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{lesson.badge}</p>
              <p className="mt-1 font-medium group-hover:text-primary">{lesson.title.replace(/^Module \d+ — /, "")}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Appendices</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {appendices.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{lesson.badge}</p>
              <p className="mt-1 font-medium group-hover:text-primary">
                {lesson.title.replace(/^Appendix [A-E] — /, "")}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
