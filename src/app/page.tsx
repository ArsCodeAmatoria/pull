import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NAV_LESSONS } from "@/lib/lessons";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="category-label">Rigging education</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Learn rigging. Practice safely. Get certified.
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              pull is a structured rigging course covering regulations, equipment, lift planning, and field operations —
              with online lessons, a practice test, and in-person certification evaluation.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="min-h-[44px] w-full sm:w-auto">
                <Link href="/lessons">
                  Start lessons
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[44px] w-full sm:w-auto">
                <Link href="/practice-test">Take practice test</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/80">
            <CardHeader>
              <BookOpen className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>25 modules + appendices</CardTitle>
              <CardDescription>
                From regulations and equipment through advanced sling geometry, lift planning, and incident analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/lessons" className="text-sm font-medium text-primary hover:underline">
                Browse all lessons →
              </Link>
            </CardContent>
          </Card>

          <Card className="border-border/80">
            <CardHeader>
              <ClipboardCheck className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Practice test</CardTitle>
              <CardDescription>
                Randomized multiple-choice questions with instant feedback and explanations to reinforce your study.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/practice-test" className="text-sm font-medium text-primary hover:underline">
                Start practicing →
              </Link>
            </CardContent>
          </Card>

          <Card className="border-border/80">
            <CardHeader>
              <GraduationCap className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>In-person certification</CardTitle>
              <CardDescription>
                The official evaluation is conducted in person — written exam and practical assessment by a qualified evaluator.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/certification" className="text-sm font-medium text-primary hover:underline">
                Learn about certification →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Course modules</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {NAV_LESSONS.filter((l) => l.kind === "module")
              .slice(0, 9)
              .map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.slug}`}
                  className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{lesson.badge}</p>
                  <p className="mt-1 font-medium leading-snug">{lesson.title.replace(/^Module \d+ — /, "")}</p>
                </Link>
              ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/lessons">View all {NAV_LESSONS.length} lessons</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
