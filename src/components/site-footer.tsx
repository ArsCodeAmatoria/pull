import { Anchor } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Anchor className="h-4 w-4" />
          <span>pull — rigging course</span>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href="/lessons" className="hover:text-foreground">
            Lessons
          </Link>
          <Link href="/practice-test" className="hover:text-foreground">
            Practice Test
          </Link>
          <Link href="/certification" className="hover:text-foreground">
            Certification
          </Link>
        </div>
      </div>
    </footer>
  );
}
