import type { Metadata } from "next";
import { SlidesIndexContent } from "@/components/slides/slides-index-content";
import { COMPETENCY_COURSE } from "@/lib/competency-course";

export const metadata: Metadata = {
  title: "Slide course",
  description: COMPETENCY_COURSE.description,
};

export default function SlidesIndexPage() {
  return <SlidesIndexContent />;
}
