import Link from "next/link";
import type { Lesson, TocEntry } from "@/lib/lessons";
import { NAV_LESSONS } from "@/lib/lessons";

export function LessonSidebar({ lesson, toc }: { lesson: Lesson; toc: readonly TocEntry[] }) {
  const tocList = (
    <ul className="mt-4 space-y-3">
      {toc.map((entry) => (
        <li key={entry.id}>
          <a href={`#${entry.id}`} className="block py-1 text-lg text-foreground">
            {entry.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <details className="not-prose mb-8 lg:hidden">
        <summary className="cursor-pointer text-lg font-bold uppercase tracking-wide text-muted-foreground">
          On this page
        </summary>
        {tocList}
      </details>

      <aside className="not-prose hidden lg:block lg:sticky lg:top-24">
        <h2 className="text-lg font-bold uppercase tracking-wide text-muted-foreground">On this page</h2>
        {tocList}
        <div className="mt-8 space-y-3">
          <Link href="/lessons" className="block text-lg font-semibold text-foreground">
            All lessons
          </Link>
          {NAV_LESSONS.slice(0, 8).map((item) =>
            item.slug === lesson.slug ? null : (
              <Link key={item.slug} href={`/lessons/${item.slug}`} className="block text-lg text-muted-foreground">
                {item.badge}
              </Link>
            )
          )}
        </div>
      </aside>
    </>
  );
}
