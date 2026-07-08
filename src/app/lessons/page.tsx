import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/page-shell";
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
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground lg:text-xl">
        <Link href="/">Home</Link> / <span className="text-foreground">Lessons</span>
      </nav>

      <header className="space-y-4 pb-8 lg:pb-12">
        <Badge>Course curriculum</Badge>
        <h1>Rigging lessons</h1>
        <p className="text-xl text-muted-foreground lg:text-2xl">
          Reading material for self-study. For in-person teaching, use the separate{" "}
          <Link href="/slides" className="font-semibold text-foreground underline underline-offset-4">
            95-competency slide course
          </Link>
          .
        </p>
      </header>

      <div className="space-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 lg:space-y-0">
        <CraneRiggingEducationOverview locale="en" />
        <aside className="not-prose lg:sticky lg:top-24 lg:h-fit">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Quick links
          </h2>
          <ul className="mt-4 space-y-3">
            {OVERVIEW_LESSON.toc.map((entry) => (
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
        <h2>Modules</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6">
          {modules.map((lesson) => (
            <Link key={lesson.slug} href={`/lessons/${lesson.slug}`} className="block min-h-[52px] py-2">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {lesson.badge}
              </p>
              <p className="mt-2 text-lg font-semibold lg:text-xl">{lesson.title.replace(/^Module \d+ — /, "")}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6 py-10 lg:py-16">
        <h2>Appendices</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {appendices.map((lesson) => (
            <Link key={lesson.slug} href={`/lessons/${lesson.slug}`} className="block min-h-[52px] py-2">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {lesson.badge}
              </p>
              <p className="mt-2 text-lg font-semibold lg:text-xl">{lesson.title.replace(/^Appendix [A-E] — /, "")}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
