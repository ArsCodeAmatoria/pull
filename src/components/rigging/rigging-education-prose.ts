/**
 * Shared typography for rigging education modules and appendices.
 * Stronger paragraph/list contrast in light mode than default `prose-slate` alone.
 */
export const riggingEducationArticleClass =
  [
    "rigging-education-article",
    "prose max-w-none dark:prose-invert",
    "prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight",
    "prose-headings:text-foreground",
    "prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/70 prose-h2:pb-2 prose-h2:text-2xl",
    "prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl",
    "prose-h4:mt-5 prose-h4:mb-2 prose-h4:text-lg",
    "prose-p:leading-relaxed prose-p:text-foreground",
    "prose-li:leading-relaxed prose-li:text-foreground",
    "prose-li:my-1",
    "prose-li:marker:text-foreground/50 dark:prose-li:marker:text-muted-foreground",
    "prose-strong:text-foreground",
    "prose-ul:my-4"
  ].join(" ");

/** Mini-nav strip under H2: readable in light mode, slightly softer in dark. */
export const riggingEducationNavStripClass =
  "not-prose text-sm text-foreground/85 dark:text-muted-foreground";

/** Footer link row at end of article. */
export const riggingEducationFooterRowClass =
  "not-prose mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6 text-sm text-foreground/85 dark:text-muted-foreground";
