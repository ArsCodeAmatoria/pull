import Link from "next/link";
import { CheckCircle2, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ModuleProgress } from "@/services/curriculum.service";

export function ModuleList({ modules }: { readonly modules: ModuleProgress[] }) {
  return (
    <div className="space-y-3">
      {modules.map(({ module, completedCount, totalCount }) => {
        const isComplete = totalCount > 0 && completedCount === totalCount;
        return (
          <Link
            key={module.id}
            href={`/curriculum/${module.code}`}
            className="flex items-center gap-4 bg-foreground/5 p-5 transition-opacity hover:opacity-90"
          >
            <div className="shrink-0">
              {isComplete ? (
                <CheckCircle2 className="h-8 w-8 text-highlight" />
              ) : (
                <Circle className="h-8 w-8 text-muted-foreground" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-bold leading-tight">{module.title}</p>
              <p className="mt-1 text-base text-muted-foreground">
                {completedCount} / {totalCount} lessons complete
              </p>
              <div className="mt-2 h-1.5 max-w-xs bg-foreground/10">
                <div
                  className={cn("h-full bg-primary", isComplete && "bg-highlight")}
                  style={{
                    width: `${totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%`,
                  }}
                />
              </div>
            </div>
            <ChevronRight className="h-6 w-6 shrink-0 text-muted-foreground" />
          </Link>
        );
      })}
    </div>
  );
}
