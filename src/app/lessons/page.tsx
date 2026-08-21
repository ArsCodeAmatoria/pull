import type { Metadata } from "next";
import { LessonsIndexContent } from "@/components/lessons/lessons-index-content";

export const metadata: Metadata = {
  title: "Lessons",
  description: "Reading on the 92 rigger competencies WorkSafeBC is putting forward. For educational purposes only.",
};

export default function LessonsPage() {
  return <LessonsIndexContent />;
}
