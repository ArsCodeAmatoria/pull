"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { markLessonCompleteAction } from "@/app/actions/curriculum-actions";

export function MarkCompleteButton({
  moduleCode,
  lessonId,
  initiallyComplete,
}: {
  readonly moduleCode: string;
  readonly lessonId: string;
  readonly initiallyComplete: boolean;
}) {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(initiallyComplete);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  if (isComplete) {
    return (
      <div className="flex min-h-[52px] items-center gap-2 bg-highlight/15 px-6 py-3 font-display text-lg font-semibold uppercase tracking-wider text-highlight">
        <Check className="h-5 w-5" />
        Lesson complete
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Button
        size="lg"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            setError(null);
            const result = await markLessonCompleteAction(moduleCode, lessonId);
            if (result.error) {
              setError(result.error);
              return;
            }
            setIsComplete(true);
            router.refresh();
          })
        }
      >
        {pending ? "Saving…" : "Mark lesson complete"}
      </Button>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
