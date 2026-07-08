import Link from "next/link";
import type { Lesson, TocEntry } from "@/lib/lessons";
import { NAV_LESSONS } from "@/lib/lessons";

export function LessonSidebar({ lesson, toc }: { lesson: Lesson; toc: readonly TocEntry[] }) {
  const tocList = (
    <ul className="mt-3 max-h-[min(50vh,24rem)] space-y-2 overflow-y-auto pr-1">
      {toc.map((entry) => (
        <li key={entry.id}>
          <a href={`#${entry.id}`} className="block py-0.5 text-foreground/85 hover:text-foreground">
            {entry.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <details className="not-prose mb-6 rounded-lg border border-border bg-card p-4 text-sm lg:hidden">
        <summary className="cursor-pointer font-semibold uppercase tracking-wide text-muted-foreground">
          On this page
        </summary>
        {tocList}
      </details>

      <aside className="not-prose hidden lg:sticky lg:top-24 lg:block lg:h-fit">
        <div className="rounded-lg border border-border bg-card p-4 text-sm">
          <h2 className="font-semibold uppercase tracking-wide text-muted-foreground">On this page</h2>
          {tocList}
          <div className="mt-4 space-y-2 border-t border-border pt-3">
            <Link href="/lessons" className="block font-medium text-foreground hover:underline">
              All lessons
            </Link>
            {NAV_LESSONS.slice(0, 8).map((item) =>
              item.slug === lesson.slug ? null : (
                <Link
                  key={item.slug}
                  href={`/lessons/${item.slug}`}
                  className="block text-foreground/85 hover:text-foreground"
                >
                  {item.badge}
                </Link>
              )
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
