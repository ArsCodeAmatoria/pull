import type { Metadata } from "next";
import { Suspense } from "react";
import { PracticeTestView } from "@/components/practice-test/practice-test-view";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Practice test",
  description: "Randomized rigging practice questions with instant feedback.",
};

function PracticeTestFallback() {
  return (
    <PageShell className="flex min-h-[50vh] items-center justify-center py-10">
      <p className="text-xl font-medium lg:text-2xl">Loading…</p>
    </PageShell>
  );
}

export default function PracticeTestPage() {
  return (
    <Suspense fallback={<PracticeTestFallback />}>
      <PracticeTestView />
    </Suspense>
  );
}
