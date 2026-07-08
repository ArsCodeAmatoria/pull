import type { Metadata } from "next";
import { CompetencySlideDeck } from "@/components/presentation/competency-slide-deck";

export const metadata: Metadata = {
  title: "Audience · Rigger competency slides",
  description: "TV/audience view synced from presenter.",
  robots: { index: false, follow: false },
};

export default function SlidesCastPage() {
  return <CompetencySlideDeck castRole="audience" initialSlideIndex={0} />;
}
