import type { Metadata } from "next";
import { LessonsIndexContent } from "@/components/lessons/lessons-index-content";

export const metadata: Metadata = {
  title: "Lessons",
  description: "Crane rigging and advanced rigging course modules and reference appendices.",
};

export default function LessonsPage() {
  return <LessonsIndexContent />;
}
