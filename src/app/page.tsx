import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { NAV_LESSONS } from "@/lib/lessons";

export default function HomePage() {
  return (
    <PageShell>
      <section className="py-10 lg:py-16">
        <div className="space-y-6 lg:space-y-8">
          <p className="category-label">Rigging education</p>
          <h1>Learn rigging. Practice safely. Get certified.</h1>
          <p className="text-xl text-muted-foreground lg:text-2xl">
            Structured rigging course with online lessons, a practice test, and in-person certification.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:gap-4">
            <Button asChild size="lg" className="sm:flex-1 lg:flex-none">
              <Link href="/lessons">
                Start lessons
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="sm:flex-1 lg:flex-none">
              <Link href="/practice-test">Take practice test</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-10 py-10 sm:grid sm:grid-cols-2 lg:gap-10 lg:space-y-0 lg:py-16 xl:grid-cols-4">
        {[
          {
            icon: BookOpen,
            title: "25 modules + appendices",
            text: "Regulations through advanced sling geometry, lift planning, and incident analysis.",
            href: "/lessons",
            cta: "Browse all lessons",
          },
          {
            icon: ClipboardCheck,
            title: "Practice test",
            text: "Randomized questions with instant feedback and explanations.",
            href: "/practice-test",
            cta: "Start practicing",
          },
          {
            icon: Presentation,
            title: "95-competency slide course",
            text: "Classroom slides aligned with BC Crane Safety and OHSR Part 15 — clicker, TV cast, offline.",
            href: "/slides",
            cta: "Open slide course",
          },
          {
            icon: GraduationCap,
            title: "In-person certification",
            text: "Official evaluation — written exam and practical assessment.",
            href: "/certification",
            cta: "Learn about certification",
          },
        ].map(({ icon: Icon, title, text, href, cta }) => (
          <div key={title} className="space-y-4">
            <Icon className="h-9 w-9 text-foreground" />
            <h2>{title}</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">{text}</p>
            <Link href={href} className="inline-block font-display text-lg font-semibold uppercase tracking-wide text-foreground">
              {cta} →
            </Link>
          </div>
        ))}
      </section>

      <section className="space-y-6 py-10 lg:py-16">
        <h2>Course modules</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {NAV_LESSONS.filter((l) => l.kind === "module")
            .slice(0, 9)
            .map((lesson) => (
              <Link key={lesson.slug} href={`/lessons/${lesson.slug}`} className="block min-h-[52px] py-2">
                <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {lesson.badge}
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug lg:text-xl">
                  {lesson.title.replace(/^Module \d+ — /, "")}
                </p>
              </Link>
            ))}
        </div>
        <Button asChild variant="secondary" size="lg" className="mt-4 lg:mt-8">
          <Link href="/lessons">View all {NAV_LESSONS.length} lessons</Link>
        </Button>
      </section>
    </PageShell>
  );
}
