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
  title: "Weight charts",
  description:
    "Reference tables for load weight estimation. For educational purposes only — confirm with manufacturer data and current WorkSafeBC requirements.",
};

export default async function SlidesChartsPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground">
        <Link href="/">Home</Link> / <Link href={slidesIndexHref(DEFAULT_TRACK)}>Lessons</Link> /{" "}
        <span className="text-foreground">Weight charts</span>
      </nav>

      <header className="mb-8 space-y-3">
        <Badge>Reference</Badge>
        <h1>Weight charts</h1>
        <p className="text-xl text-muted-foreground">
          Use during the rigging math block for material density and panel weights. For educational
          purposes only — confirm weights with manufacturer data and current WorkSafeBC requirements.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            href={slidesPresentHref(DEFAULT_TRACK, { unit: "math" })}
            className="inline-block font-semibold underline underline-offset-4"
          >
            Return to math lessons →
          </Link>
          <Link
            href="/slides/rigging-charts"
            className="inline-block font-semibold underline underline-offset-4"
          >
            Rigging charts →
          </Link>
        </div>
      </header>

      <WeightChartPicker initialCategoryId={sp.chart} />
    </PageShell>
  );
}
