import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Presentation, Table2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { COMPETENCY_COURSE } from "@/lib/competency-course";

export const metadata: Metadata = {
  title: "Slide course",
  description: COMPETENCY_COURSE.description,
};

function formatDuration(minutes?: number) {
  if (!minutes) return null;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

export default function SlidesIndexPage() {
  const totalDuration = COMPETENCY_COURSE.totalDurationMin;

  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground lg:text-xl">
        <Link href="/">Home</Link> / <span className="text-foreground">Slides</span>
      </nav>

      <header className="space-y-4 pb-8 lg:max-w-3xl">
        <Badge>8-hour classroom course</Badge>
        <h1>{COMPETENCY_COURSE.title}</h1>
        <p className="text-xl text-muted-foreground lg:text-2xl">{COMPETENCY_COURSE.description}</p>
        {totalDuration ? (
          <p className="text-lg font-medium text-foreground">
            Planned instruction: {formatDuration(totalDuration)} ({COMPETENCY_COURSE.slideCount} slides ≈ 5 min each, plus breaks)
          </p>
        ) : null}
        <p className="text-lg text-muted-foreground">
          Separate from{" "}
          <Link href="/lessons" className="font-semibold text-foreground underline underline-offset-4">
            reading lessons
          </Link>
          . Built for in-person teaching with clicker, TV cast, phone, and offline save.
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg">
            <Link href="/slides/present">
              <Presentation className="mr-2 h-5 w-5" />
              Start slide course
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/slides/present?unit=math">Jump to rigging math</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/slides/charts">
              <Table2 className="mr-2 h-5 w-5" />
              Weight charts
            </Link>
          </Button>
        </div>
        <a
          href={COMPETENCY_COURSE.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          BC Crane Safety source article
          <ExternalLink className="h-4 w-4" />
        </a>
      </header>

      <section className="space-y-6 py-8">
        <h2>Course units</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {COMPETENCY_COURSE.units.map((unit) => (
            <Link
              key={unit.id}
              href={`/slides/present?unit=${unit.id}`}
              className="block space-y-2 rounded-lg border border-border p-4 py-3 transition-colors hover:bg-muted/30"
            >
              <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Slides {unit.slideStart}–{unit.slideEnd}
                {unit.durationMin ? ` · ${formatDuration(unit.durationMin)}` : ""}
              </p>
              <p className="text-lg font-semibold lg:text-xl">{unit.label}</p>
              <p className="inline-flex items-center font-display text-sm font-semibold uppercase tracking-wide">
                Present this unit <ArrowRight className="ml-1 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4 py-8 text-lg text-muted-foreground lg:text-xl">
        <h2>What the 95 competencies cover</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Regulations & standards (OHSR Part 15, qualified rigger, WLL, identification)</li>
          <li>WLL, design factor, breaking strength, hitch types, assembly limits</li>
          <li>Softeners and sharp-edge protection (OHSR 15.39)</li>
          <li>Pre-use inspection and removal criteria by gear type</li>
          <li>Rigging math: weight charts, load weight, conversions, sling tension, angles, COG, non-symmetrical picks</li>
          <li>Below-the-hook attachments and lift planning</li>
          <li>Critical lifts and course wrap-up</li>
        </ul>
      </section>

      <section className="space-y-4 py-8 text-lg text-muted-foreground lg:text-xl">
        <h2>Presenter tips</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use arrow keys or a clicker remote (Page Up/Down works too).</li>
          <li>Keep <Link href="/slides/charts" className="text-foreground underline underline-offset-4">weight charts</Link> open on a second screen during the math block.</li>
          <li>Cast audience view to a TV with the monitor button in presenter mode.</li>
          <li>Swipe left/right on phone; tap Save offline before going to a job site without internet.</li>
          <li>Use Lessons for full narrative depth; use Slides for competency delivery in class.</li>
        </ul>
      </section>
    </PageShell>
  );
}
