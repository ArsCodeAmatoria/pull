import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/page-shell";
import { RiggingChartPicker } from "@/components/presentation/rigging-chart-picker";
import { DEFAULT_TRACK, slidesIndexHref, slidesPresentHref } from "@/lib/tracks";

type PageProps = {
  searchParams: Promise<{ chart?: string }>;
};

export const metadata: Metadata = {
  title: "Rigging charts",
  description:
    "Sling-angle sine math, tension and reduction factors, and hitch ratings by sling type — web, roundsling, wire rope, and chain.",
};

export default async function RiggingChartsPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground">
        <Link href="/">Home</Link> / <Link href={slidesIndexHref(DEFAULT_TRACK)}>Lessons</Link> /{" "}
        <span className="text-foreground">Rigging charts</span>
      </nav>

      <header className="mb-8 space-y-3">
        <Badge>Reference</Badge>
        <h1>Rigging charts</h1>
        <p className="text-xl text-muted-foreground">
          Sine math for sling angles, hitch ratings by sling type, choke-angle reduction, and
          inclined basket derating. Always verify against the sling tag and manufacturer charts.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            href={slidesPresentHref(DEFAULT_TRACK, { unit: "math" })}
            className="inline-block font-semibold underline underline-offset-4"
          >
            Return to math lessons →
          </Link>
          <Link href="/slides/charts" className="inline-block font-semibold underline underline-offset-4">
            Weight charts →
          </Link>
        </div>
      </header>

      <RiggingChartPicker initialCategoryId={sp.chart} />
    </PageShell>
  );
}
