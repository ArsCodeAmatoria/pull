import type { Metadata } from "next";
import { CompetencySlideDeck } from "@/components/presentation/competency-slide-deck";
import { slideIndexFromQuery } from "@/lib/competency-course";

export const metadata: Metadata = {
  title: "Present · Rigger competency slides",
  description: "Presenter mode for the 95-competency rigger slide course.",
};

type PageProps = {
  searchParams: Promise<{ slide?: string; unit?: string; last?: string }>;
};

export default async function SlidesPresentPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const initialSlideIndex = slideIndexFromQuery(sp);

  return (
    <CompetencySlideDeck key={`present-${initialSlideIndex}`} initialSlideIndex={initialSlideIndex} />
  );
}
