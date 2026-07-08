import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/page-shell";
import { WeightChartPicker } from "@/components/presentation/weight-chart-picker";
import { DEFAULT_TRACK, slidesIndexHref, slidesPresentHref } from "@/lib/tracks";

type PageProps = {
  searchParams: Promise<{ chart?: string }>;
};

export const metadata: Metadata = {
  title: "Weight & rigging charts",
  description:
    "Reference tables for load weight estimation — steel, lumber, plywood, conversions, and sling angle multipliers.",
};

export default async function SlidesChartsPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground">
        <Link href="/">Home</Link> / <Link href={slidesIndexHref(DEFAULT_TRACK)}>Lessons</Link> /{" "}
        <span className="text-foreground">Charts</span>
      </nav>

      <header className="mb-8 space-y-3">
        <Badge>Reference</Badge>
        <h1>Weight &amp; rigging charts</h1>
        <p className="text-xl text-muted-foreground">
          Use during the rigging math block of the rigger competency course.
        </p>
        <Link href={slidesPresentHref(DEFAULT_TRACK, { unit: "math" })} className="inline-block font-semibold underline underline-offset-4">
          Return to math lessons →
        </Link>
      </header>

      <WeightChartPicker initialCategoryId={sp.chart} />
    </PageShell>
  );
}
