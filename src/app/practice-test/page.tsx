import { Suspense } from "react";
import type { Metadata } from "next";
import { PracticeTestView } from "@/components/practice-test/practice-test-view";

export const metadata: Metadata = {
  title: "Practice test",
  description: "Practice quiz on the 92 WorkSafeBC rigger competencies. For educational purposes only.",
};

export default function PracticeTestPage() {
  return (
    <Suspense>
      <PracticeTestView />
    </Suspense>
  );
}
