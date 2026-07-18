import Link from "next/link";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

import type { LessonWithStatus } from "@/services/curriculum.service";

function StatusIcon({ status }: { readonly status: LessonWithStatus["status"] }) {
  if (status === "COMPLETED") {
    return <CheckCircle2 className="h-6 w-6 shrink-0 text-highlight" aria-label="Complete" />;
  }
  if (status === "IN_PROGRESS") {
    return <PlayCircle className="h-6 w-6 shrink-0 text-foreground" aria-label="In progress" />;
  }
  return <Circle className="h-6 w-6 shrink-0 text-muted-foreground" aria-label="Not started" />;
}

export function LessonList({
  moduleCode,
  lessons,
}: {
  readonly moduleCode: string;
  readonly lessons: LessonWithStatus[];
}) {
  return (
    <ol className="space-y-2">
      {lessons.map((lesson, index) => (
        <li key={lesson.id}>
          <Link
            href={`/curriculum/${moduleCode}/lessons/${lesson.contentKey}`}
            className="flex items-center gap-4 bg-foreground/5 p-4 transition-opacity hover:opacity-90"
          >
            <StatusIcon status={lesson.status} />
            <span className="text-base font-bold text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1 text-lg font-medium">{lesson.title}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
