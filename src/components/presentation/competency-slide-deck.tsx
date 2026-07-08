"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  MonitorPlay,
  PanelTopClose,
  PanelTopOpen,
  X,
} from "lucide-react";
import { SLIDE_CYCLIC_ICONS, slideDeckProseClass } from "@/components/presentation/slide-shared";
import { CourseCoverImage } from "@/components/course-cover-image";
import { StandardLogo } from "@/components/standards/standard-logo";
import { isRiggingDiagramId, RiggingDiagram, type RiggingDiagramId } from "@/components/rigging-diagrams";
import {
  COMPETENCY_COURSE,
  type CompetencySlide,
  type CompetencySlideSection,
  type CompetencySlideSectionItem,
  type HeroStatCallout,
  type SlideEmphasis,
  type SlidePanelBg,
  type SlideSourceLink,
} from "@/lib/competency-course";
import { STANDARD_URLS, type StandardLogoId } from "@/lib/standards-links";
import { openAudienceDisplayWindow } from "@/lib/open-audience-window";
import { useSlideCastPublisher, useSlideCastSubscriber } from "@/lib/use-slide-cast";
import { cn } from "@/lib/utils";

const OFFLINE_CACHE = "pull-slides-v1";
const CAST_SLUG = COMPETENCY_COURSE.slug;
const PURE_SLIDE_KEY = "pull-slides-pure";

function readPureSlidePreference(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(PURE_SLIDE_KEY) === "1";
  } catch {
    return false;
  }
}

type Props = {
  readonly castRole?: "presenter" | "audience";
  readonly initialSlideIndex: number;
};

function fsSupported() {
  if (typeof document === "undefined") return false;
  const el = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> };
  return Boolean(el.requestFullscreen || el.webkitRequestFullscreen);
}

async function enterFullscreen(el: HTMLElement) {
  const wk = el as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> };
  try {
    if (el.requestFullscreen) await el.requestFullscreen();
    else if (wk.webkitRequestFullscreen) await wk.webkitRequestFullscreen();
  } catch {
    /* user gesture may be required */
  }
}

async function exitFullscreen() {
  const d = document as Document & { webkitExitFullscreen?: () => Promise<void> };
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (d.webkitExitFullscreen) await d.webkitExitFullscreen();
  } catch {
    /* ignore */
  }
}

function SlidePanelLinks({ slide }: { slide: CompetencySlide }) {
  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3">
        {slide.chartHref ? (
          <Link
            href={slide.chartHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground underline underline-offset-4"
          >
            Open weight chart
          </Link>
        ) : null}
        {slide.lessonHref ? (
          <Link
            href={slide.lessonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Reading lesson
          </Link>
        ) : null}
      </div>
      {slide.source ? <p className="mt-4 text-sm text-muted-foreground">Source: {slide.source}</p> : null}
    </>
  );
}

function SlidePanelBody({ slide }: { slide: CompetencySlide }) {
  return (
    <div className={cn(slideDeckProseClass(), "min-h-0 flex-1")}>
      <p className="text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl">{slide.summary}</p>
      {slide.sections?.length ? (
        <div className="mt-5 space-y-5">
          {slide.sections.map((section) => (
            <div key={section.heading}>
              <h3
                className={cn(
                  "font-display text-sm font-bold uppercase tracking-widest",
                  emphasisTextClass(section.headingEmphasis) || "text-foreground"
                )}
              >
                {section.heading}
              </h3>
              <ul className="mt-2 space-y-2">
                {section.items.map((item) => {
                  const parsed = parseSectionItem(item);
                  return (
                    <li key={parsed.label} className="flex items-start gap-2 text-base leading-relaxed text-foreground/90 sm:text-lg">
                      {parsed.logo && isStandardLogoId(parsed.logo) ? (
                        <StandardLogo id={parsed.logo} className="mt-1" />
                      ) : null}
                      <span className="min-w-0 flex-1">
                        <EmphasisLabel label={parsed.label} href={parsed.href} emphasis={parsed.emphasis} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-4 space-y-3">
          {slide.bullets.map((bullet, index) => (
            <li key={bullet} className="text-base leading-relaxed text-foreground/90 sm:text-lg">
              {slide.critical && index === 0 ? (
                <span className="font-semibold text-highlight-secondary">{bullet}</span>
              ) : (
                bullet
              )}
            </li>
          ))}
        </ul>
      )}
      {slide.formula ? (
        <p className="mt-6 px-4 py-3 font-mono text-base font-semibold text-highlight sm:text-lg">
          {slide.formula}
        </p>
      ) : null}
      <SlidePanelLinks slide={slide} />
    </div>
  );
}

function isStandardLogoId(value: string): value is StandardLogoId {
  return value === "worksafebc" || value === "bccsa" || value === "asme" || value === "ansi" || value === "csa" || value === "en" || value === "fem";
}

function emphasisTextClass(emphasis?: SlideEmphasis | null) {
  if (emphasis === "yellow") return "text-highlight";
  if (emphasis === "red") return "text-highlight-secondary";
  return "";
}

function slidePanelBgClass(bg: SlidePanelBg | null | undefined) {
  // Stats hero applies its own gradient via slide-stats-hero
  if (bg === "gray") return "";
  if (bg === "warm") return "slide-panel-bg-warm";
  if (bg === "cool") return "slide-panel-bg-cool";
  return "";
}

function HeroStatCallouts({ stats }: { stats: readonly HeroStatCallout[] }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {stats.map((stat) => {
        const inner = (
          <>
            <p
              className={cn(
                "font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-none tracking-tight",
                emphasisTextClass(stat.emphasis) || "text-foreground"
              )}
            >
              {stat.value}
            </p>
            <p className="slide-stats-readable mt-1.5 text-[9px] font-medium uppercase leading-tight tracking-[0.1em] text-muted-foreground sm:text-[10px]">
              {stat.label}
            </p>
          </>
        );
        return (
          <div key={stat.label} className="slide-stat-card rounded-sm px-1.5 py-2.5 text-center sm:px-2 sm:py-3">
            {stat.href ? (
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-85"
                title={`Source: ${stat.label}`}
              >
                {inner}
              </a>
            ) : (
              inner
            )}
          </div>
        );
      })}
    </div>
  );
}

function StatsFactItem({ item }: { item: CompetencySlideSectionItem }) {
  const parsed = parseSectionItem(item);
  return (
    <li className="slide-stats-readable text-[0.8125rem] leading-snug text-foreground/90 sm:text-sm">
      <EmphasisLabel label={parsed.label} href={parsed.href} emphasis={parsed.emphasis} />
    </li>
  );
}

function SlideSourceLinkList({
  links,
  className,
}: {
  links: readonly SlideSourceLink[];
  className?: string;
}) {
  return (
    <ul className={cn("slide-stats-readable flex flex-wrap gap-x-2 gap-y-1.5", className)}>
      {links.map((link, index) => (
        <li key={link.href} className="inline-flex items-center gap-2">
          {index > 0 ? <span className="text-muted-foreground" aria-hidden>·</span> : null}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-foreground/35 underline-offset-[3px] hover:decoration-foreground"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function HeroLeadSummary({ summary }: { summary: string }) {
  const split = summary.indexOf(" — ");
  if (split === -1) {
    return <p className="mt-2 text-sm leading-snug text-foreground sm:mt-3 sm:text-base lg:text-lg">{summary}</p>;
  }
  return (
    <p className="mt-2 text-sm leading-snug text-foreground sm:mt-3 sm:text-base lg:text-lg">
      <span className="text-highlight">{summary.slice(0, split)}</span>
      {summary.slice(split)}
    </p>
  );
}

function parseSectionItem(item: CompetencySlideSectionItem) {
  if (typeof item === "string") {
    return { label: item, href: null as string | null, logo: null as string | null, emphasis: null as SlideEmphasis | null };
  }
  return {
    label: item.label,
    href: item.href ?? null,
    logo: item.logo ?? null,
    emphasis: item.emphasis ?? null,
  };
}

function EmphasisLabel({
  label,
  href,
  emphasis,
}: {
  label: string;
  href: string | null;
  emphasis: SlideEmphasis | null;
}) {
  const textClass = emphasisTextClass(emphasis);
  const inner = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "font-semibold underline underline-offset-2",
        textClass || "text-foreground decoration-foreground/40 hover:decoration-foreground"
      )}
    >
      {label}
    </a>
  ) : textClass ? (
    <span className={cn("font-semibold", textClass)}>{label}</span>
  ) : (
    <span>{label}</span>
  );
  return inner;
}

function HeroSlideItem({ item }: { item: CompetencySlideSectionItem }) {
  const { label, href, logo, emphasis } = parseSectionItem(item);

  return (
    <li className="flex items-start gap-2 text-sm leading-snug sm:text-[0.95rem] lg:text-base">
      {logo && isStandardLogoId(logo) ? <StandardLogo id={logo} className="mt-0.5" /> : null}
      <span className="min-w-0 flex-1">
        <EmphasisLabel label={label} href={href} emphasis={emphasis} />
      </span>
    </li>
  );
}

function HeroSlideSections({ sections }: { sections: readonly CompetencySlideSection[] }) {
  return (
    <div className="space-y-3 lg:space-y-4">
      {sections.map((section) => (
        <div key={section.heading}>
          <h3
            className={cn(
              "font-display text-xs font-bold uppercase tracking-widest sm:text-sm",
              emphasisTextClass(section.headingEmphasis) || "text-foreground"
            )}
          >
            {section.heading}
          </h3>
          <ul className="mt-1 space-y-0.5">
            {section.items.map((item) => (
              <HeroSlideItem key={parseSectionItem(item).label} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const HERO_LOGO_STRIP: readonly { id: StandardLogoId; href: string; title: string }[] = [
  { id: "worksafebc", href: STANDARD_URLS.worksafebc, title: "WorkSafeBC" },
  { id: "bccsa", href: STANDARD_URLS.bccsa, title: "BC Crane Safety" },
  { id: "ansi", href: STANDARD_URLS.ansi, title: "ANSI" },
  { id: "asme", href: STANDARD_URLS.asmeB30, title: "ASME B30" },
  { id: "csa", href: STANDARD_URLS.csaZ248, title: "CSA Z248 tower cranes" },
  { id: "en", href: STANDARD_URLS.en13155, title: "EN 13155" },
  { id: "fem", href: STANDARD_URLS.fem, title: "FEM" },
];

function HeroLogoStrip() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-4 sm:gap-4">
      {HERO_LOGO_STRIP.map(({ id, href, title }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className="inline-flex items-center text-foreground hover:underline"
        >
          <StandardLogo id={id} className="h-6 w-auto px-1 text-[10px]" />
        </a>
      ))}
    </div>
  );
}

function StatsHeroSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const hasDiagram = slide.diagram && isRiggingDiagramId(slide.diagram);

  return (
    <div className="slide-stats-hero flex h-full min-h-0 shrink-0 flex-col overflow-hidden">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 overflow-hidden px-5 py-4 sm:gap-6 sm:px-7 sm:py-5 lg:grid-cols-[minmax(0,42%)_minmax(0,1fr)] lg:gap-8 lg:px-9 lg:py-6">
        <div className="flex min-h-0 flex-col justify-center gap-3 sm:gap-3.5">
          <div className="flex items-center gap-3">
            <span className="slide-stats-rule" aria-hidden />
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {slide.unitLabel} · Canada &amp; BC
            </p>
          </div>

          <h2 className="text-balance font-display text-[clamp(1.4rem,2.6vw,2.35rem)] font-bold uppercase leading-[1.1] tracking-[0.04em] text-foreground">
            {slide.title}
          </h2>

          <p className="slide-stats-readable max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
            {slide.summary}
          </p>

          {slide.heroStats?.length ? <HeroStatCallouts stats={slide.heroStats} /> : null}

          {sections.length > 0 ? (
            <div className="min-h-0 space-y-1.5">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {section.heading}
                  </h3>
                  <ul className="mt-1 space-y-1">
                    {section.items.map((item) => (
                      <StatsFactItem key={parseSectionItem(item).label} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {hasDiagram ? (
          <div className="flex min-h-0 items-center justify-center">
            <div className="slide-stats-chart-frame w-full max-w-lg lg:max-w-none">
              <RiggingDiagram id={slide.diagram as RiggingDiagramId} variant="slide" className="w-full" />
            </div>
          </div>
        ) : null}
      </div>

      {slide.sourceLinks?.length ? (
        <div className="shrink-0 px-5 pb-4 pt-1 sm:px-7 sm:pb-5 lg:px-9">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Sources
          </p>
          <SlideSourceLinkList links={slide.sourceLinks} className="mt-1.5 gap-x-2.5 gap-y-1 text-[10px] sm:text-[11px]" />
        </div>
      ) : slide.source ? (
        <p className="slide-stats-readable shrink-0 px-5 pb-4 text-[10px] text-muted-foreground sm:px-7 sm:pb-5">
          Source: {slide.source}
        </p>
      ) : null}
    </div>
  );
}

function HeroSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const splitAt = Math.ceil(sections.length / 2);
  const leftSections = sections.slice(0, splitAt);
  const rightSections = sections.slice(splitAt);

  return (
    <div className="grid h-full min-h-0 shrink-0 grid-cols-1 overflow-hidden sm:grid-cols-2">
      <div className="flex min-h-0 flex-col justify-center overflow-hidden px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-6">
        <p className="font-display text-[11px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
          {slide.unitLabel}
        </p>
        <p className="mt-1 text-balance font-display text-4xl font-black uppercase leading-[0.92] tracking-tight text-highlight sm:mt-2 sm:text-5xl lg:text-6xl xl:text-7xl">
          {slide.title}
        </p>
        <HeroLeadSummary summary={slide.summary} />
        {leftSections.length > 0 ? (
          <div className="mt-3 min-h-0 sm:mt-4">
            <HeroSlideSections sections={leftSections} />
          </div>
        ) : null}
      </div>
      <div className="flex min-h-0 flex-col justify-center overflow-hidden px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-6">
        {rightSections.length > 0 ? <HeroSlideSections sections={rightSections} /> : null}
        {slide.lessonHref ? (
          <Link
            href={slide.lessonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-foreground underline underline-offset-4 sm:mt-4"
          >
            Module 1 — regulations
          </Link>
        ) : null}
        {slide.source ? (
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">Source: {slide.source}</p>
        ) : null}
        <HeroLogoStrip />
      </div>
    </div>
  );
}

function CoverSlidePanel({ slide }: { slide: CompetencySlide }) {
  return (
    <div className="grid h-full min-h-0 shrink-0 grid-cols-1 overflow-hidden lg:grid-cols-2">
      <CourseCoverImage
        fill
        priority
        className="relative min-h-[min(42vh,320px)] lg:min-h-0"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="flex min-h-0 min-w-0 flex-col justify-center gap-3 px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {slide.unitLabel}
        </p>
        <p className="text-balance font-display text-2xl font-bold uppercase leading-snug tracking-tight text-highlight sm:text-3xl xl:text-4xl">
          {slide.title}
        </p>
        <SlidePanelBody slide={slide} />
      </div>
    </div>
  );
}

function SlidePanel({ slide }: { slide: CompetencySlide }) {
  if (slide.hero && slide.diagram && isRiggingDiagramId(slide.diagram)) {
    return <StatsHeroSlidePanel slide={slide} />;
  }

  if (slide.hero) {
    return <HeroSlidePanel slide={slide} />;
  }

  if (slide.cover && slide.image) {
    return <CoverSlidePanel slide={slide} />;
  }

  const Icon = SLIDE_CYCLIC_ICONS[(slide.id - 1) % SLIDE_CYCLIC_ICONS.length];
  const hasDiagram = slide.diagram && isRiggingDiagramId(slide.diagram);

  return (
    <div className="grid h-full min-h-0 shrink-0 grid-cols-1 content-stretch gap-4 overflow-hidden px-3 py-4 sm:px-6 sm:py-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 xl:gap-x-12">
      <div
        className={cn(
          "flex min-h-0 shrink-0 flex-col gap-3 px-2 py-4 lg:py-6",
          hasDiagram ? "items-stretch justify-start" : "items-center justify-center gap-4 px-4 py-6 text-center lg:py-10"
        )}
      >
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {slide.unitLabel}
        </p>
        {hasDiagram ? (
          <RiggingDiagram id={slide.diagram as RiggingDiagramId} variant="slide" className="flex-1" />
        ) : (
          <span className="inline-flex p-4 text-foreground">
            <Icon className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28" strokeWidth={1.15} aria-hidden />
          </span>
        )}
        <p
          className={cn(
            "text-balance font-display font-bold uppercase leading-snug tracking-tight",
            hasDiagram ? "text-lg sm:text-xl xl:text-2xl" : "text-xl sm:text-2xl xl:text-3xl",
            !hasDiagram && "text-center",
            slide.critical ? "text-highlight-secondary" : "text-foreground"
          )}
        >
          {slide.title}
        </p>
        {slide.ohrsRef ? (
          <p
            className={cn(
              "font-display text-sm font-semibold uppercase tracking-wide text-highlight-secondary",
              !hasDiagram && "text-center"
            )}
          >
            OHSR {slide.ohrsRef}
          </p>
        ) : null}
      </div>
      <div className="flex min-h-0 min-w-0 flex-col gap-4">
        <SlidePanelBody slide={slide} />
      </div>
    </div>
  );
}

export function CompetencySlideDeck({ castRole = "presenter", initialSlideIndex }: Props) {
  const router = useRouter();
  const isAudience = castRole === "audience";
  const slides = COMPETENCY_COURSE.slides;
  const total = slides.length;

  const [index, setIndex] = useState(initialSlideIndex);
  const [viewportW, setViewportW] = useState(0);
  const [cacheMessage, setCacheMessage] = useState<string | null>(null);
  const [browserFs, setBrowserFs] = useState(false);
  const [mountedWithFsProbe, setMountedWithFsProbe] = useState(false);
  const [titleExpanded, setTitleExpanded] = useState(false);
  const [pureSlide, setPureSlide] = useState(false);
  const [pureChromeVisible, setPureChromeVisible] = useState(false);

  const shellRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const slide = slides[index];
  const courseTitle = COMPETENCY_COURSE.title;

  useEffect(() => {
    const stored = localStorage.getItem("pull-theme");
    const wasDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.add("dark");
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      if (stored === "light") document.documentElement.classList.remove("dark");
      else if (!wasDark && stored !== "dark") document.documentElement.classList.remove("dark");
    };
  }, []);

  useEffect(() => {
    setTitleExpanded(false);
  }, [index]);

  useEffect(() => {
    queueMicrotask(() => {
      setMountedWithFsProbe(true);
      setPureSlide(readPureSlidePreference());
    });
  }, []);

  const setPureSlideMode = useCallback((next: boolean) => {
    setPureSlide(next);
    setPureChromeVisible(false);
    try {
      localStorage.setItem(PURE_SLIDE_KEY, next ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, []);

  const togglePureSlide = useCallback(() => {
    setPureSlideMode(!pureSlide);
  }, [pureSlide, setPureSlideMode]);

  useSlideCastPublisher(CAST_SLUG, !isAudience && total > 0, index, total);
  useSlideCastSubscriber(CAST_SLUG, isAudience && total > 0, total, setIndex);

  useEffect(() => {
    const onFs = () => setBrowserFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useLayoutEffect(() => {
    const outer = viewportRef.current;
    if (!outer) return;
    const apply = () => {
      const w = outer.getBoundingClientRect().width;
      if (w > 0) setViewportW(w);
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(outer);
    return () => ro.disconnect();
  }, []);

  const goExit = useCallback(async () => {
    await exitFullscreen();
    router.push("/slides");
  }, [router]);

  const closeAudienceWindow = useCallback(async () => {
    await exitFullscreen();
    window.close();
    window.setTimeout(() => router.push("/slides"), 200);
  }, [router]);

  const openAudienceDisplay = useCallback(async () => {
    await openAudienceDisplayWindow(`${window.location.origin}/slides/cast`);
  }, []);

  const goNext = useCallback(() => {
    if (index < total - 1) setIndex((j) => j + 1);
  }, [index, total]);

  const goPrev = useCallback(() => {
    if (index > 0) setIndex((j) => j - 1);
  }, [index]);

  async function toggleFs() {
    const shell = shellRef.current;
    if (!shell || !fsSupported()) return;
    if (document.fullscreenElement) await exitFullscreen();
    else await enterFullscreen(shell);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("last") === "1") {
      setIndex(total - 1);
      params.delete("last");
      const next = params.toString();
      window.history.replaceState({}, "", window.location.pathname + (next ? `?${next}` : ""));
    }
  }, [total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, [contenteditable=true]")) return;
      if (isAudience && event.key !== "Escape") return;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ": {
          event.preventDefault();
          goNext();
          break;
        }
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp": {
          event.preventDefault();
          goPrev();
          break;
        }
        case "Home": {
          event.preventDefault();
          setIndex(0);
          break;
        }
        case "End": {
          event.preventDefault();
          setIndex(total - 1);
          break;
        }
        case "h":
        case "H": {
          if (event.metaKey || event.ctrlKey || event.altKey) break;
          event.preventDefault();
          togglePureSlide();
          break;
        }
        case "Escape": {
          event.preventDefault();
          if (document.fullscreenElement) {
            void exitFullscreen();
            return;
          }
          if (isAudience) void closeAudienceWindow();
          else void goExit();
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAudienceWindow, goExit, goNext, goPrev, isAudience, togglePureSlide, total]);

  const cacheOffline = async () => {
    setCacheMessage(null);
    try {
      if (!("caches" in window)) {
        setCacheMessage("Offline save is not supported in this browser.");
        return;
      }
      await caches.open(OFFLINE_CACHE).then((c) =>
        c.add(new Request(window.location.href, { credentials: "same-origin" }))
      );
      setCacheMessage("Slide course saved for offline use.");
    } catch {
      setCacheMessage("Could not save offline. Try again when you are online.");
    }
  };

  const translatePx = viewportW > 0 ? -(index * viewportW) : 0;
  const deckReady = viewportW > 0;
  const canFs = mountedWithFsProbe && fsSupported();
  const showChrome = !pureSlide;

  if (!slide) return null;

  return (
    <div
      ref={shellRef}
      role="dialog"
      aria-modal
      aria-label={isAudience ? "Audience: Rigger competency slides" : "Presenter: Rigger competency slides"}
      className={cn(
        "fixed inset-0 z-[200] flex min-h-[100dvh] flex-col overscroll-none bg-background text-foreground",
        browserFs && "!z-[2147483646]"
      )}
      onMouseMove={
        pureSlide
          ? (e) => {
              setPureChromeVisible(e.clientY < 72);
            }
          : undefined
      }
      onTouchStart={
        pureSlide
          ? (e) => {
              const y = e.targetTouches[0]?.clientY;
              if (y != null && y < 96) setPureChromeVisible(true);
            }
          : undefined
      }
    >
      {showChrome ? (
        <header className="flex shrink-0 flex-col gap-2 bg-background px-3 py-2 pt-[max(0.5rem,env(safe-area-inset-top))] sm:gap-3 sm:px-4">
          <div className="flex items-center gap-2">
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => void (isAudience ? closeAudienceWindow() : goExit())}
                className="inline-flex h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label={isAudience ? "Close audience window" : "Exit slide course"}
              >
                <X className="h-6 w-6" strokeWidth={2} />
              </button>
              {canFs ? (
                <button
                  type="button"
                  onClick={() => void toggleFs()}
                  className="inline-flex h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={browserFs ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {browserFs ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                </button>
              ) : null}
              {!isAudience ? (
                <button
                  type="button"
                  onClick={() => void openAudienceDisplay()}
                  className="inline-flex h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Cast to TV"
                >
                  <MonitorPlay className="h-6 w-6" strokeWidth={2} />
                </button>
              ) : null}
              <button
                type="button"
                onClick={togglePureSlide}
                className="inline-flex h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Pure slide — hide header"
                title="Pure slide (H)"
              >
                <PanelTopClose className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <p className="ml-auto shrink-0 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:hidden">
              {index + 1} / {total}
            </p>

            <div className="ml-auto hidden shrink-0 items-center gap-2 sm:flex">
              {!isAudience ? (
                <>
                  <button type="button" onClick={goPrev} className="inline-flex min-h-[44px] items-center gap-1 px-3 font-display text-sm font-semibold uppercase tracking-wide">
                    <ChevronLeft className="h-5 w-5" /> Prev
                  </button>
                  <button type="button" onClick={goNext} className="inline-flex min-h-[44px] items-center gap-1 px-3 font-display text-sm font-semibold uppercase tracking-wide">
                    Next <ChevronRight className="h-5 w-5" />
                  </button>
                  <Link href="/slides" className="px-3 font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Overview
                  </Link>
                  <button type="button" onClick={cacheOffline} className="px-3 font-display text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Save offline
                  </button>
                </>
              ) : (
                <button type="button" onClick={() => void closeAudienceWindow()} className="min-h-[44px] px-4 font-display text-sm font-semibold uppercase tracking-wide">
                  Close
                </button>
              )}
            </div>
          </div>

          <div className="w-full min-w-0">
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {isAudience ? "Audience" : "Presenter"} · Competency {slide.id} / {total} · {slide.unitLabel}
            </p>
            <button
              type="button"
              onClick={() => setTitleExpanded((open) => !open)}
              className="mt-1 w-full text-left sm:pointer-events-none"
              aria-expanded={titleExpanded}
            >
              <h1
                className={cn(
                  "text-balance font-display text-base font-bold leading-snug tracking-tight sm:text-lg",
                  !titleExpanded && "line-clamp-3 sm:line-clamp-none"
                )}
              >
                {slide.title}
              </h1>
              <span className="mt-0.5 inline-block text-xs text-muted-foreground underline underline-offset-2 sm:hidden">
                {titleExpanded ? "Show less" : "Show full title"}
              </span>
            </button>
            <p className="mt-0.5 text-sm text-muted-foreground sm:text-base">{courseTitle}</p>
          </div>
        </header>
      ) : (
        <div
          className={cn(
            "pointer-events-none fixed inset-x-0 top-0 z-[210] flex justify-center px-3 pt-[max(0.5rem,env(safe-area-inset-top))] transition-opacity duration-200",
            pureChromeVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-center gap-1 bg-background/90 px-2 py-1.5 shadow-sm backdrop-blur-sm">
            <button
              type="button"
              onClick={togglePureSlide}
              className="inline-flex h-10 items-center gap-1.5 px-2 font-display text-xs font-semibold uppercase tracking-wide text-foreground"
              aria-label="Show header"
              title="Show controls (H)"
            >
              <PanelTopOpen className="h-4 w-4" />
              Controls
            </button>
            <span className="px-2 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {index + 1} / {total}
            </span>
            {!isAudience ? (
              <>
                <button type="button" onClick={goPrev} className="inline-flex h-10 w-10 items-center justify-center" aria-label="Previous slide">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button type="button" onClick={goNext} className="inline-flex h-10 w-10 items-center justify-center" aria-label="Next slide">
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => void openAudienceDisplay()}
                  className="inline-flex h-10 w-10 items-center justify-center"
                  aria-label="Cast to TV"
                >
                  <MonitorPlay className="h-5 w-5" />
                </button>
              </>
            ) : null}
            {canFs ? (
              <button
                type="button"
                onClick={() => void toggleFs()}
                className="inline-flex h-10 w-10 items-center justify-center"
                aria-label={browserFs ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {browserFs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => void (isAudience ? closeAudienceWindow() : goExit())}
              className="inline-flex h-10 w-10 items-center justify-center"
              aria-label={isAudience ? "Close audience window" : "Exit slide course"}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {pureSlide && !pureChromeVisible ? (
        <button
          type="button"
          onClick={() => setPureChromeVisible(true)}
          className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-[205] -translate-x-1/2 bg-foreground/10 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur-sm"
          aria-label="Show slide controls"
        >
          {index + 1} / {total}
        </button>
      ) : null}

      {cacheMessage && showChrome ? (
        <p className="shrink-0 bg-foreground/10 px-4 py-1.5 text-center text-xs" role="status">
          {cacheMessage}
        </p>
      ) : null}

      <div
        className={cn(
          "mx-auto flex min-h-0 w-full max-w-[1920px] flex-1 flex-col sm:px-4 sm:py-3",
          pureSlide ? "px-0 py-0" : "px-2 py-2"
        )}
      >
        {!isAudience && showChrome ? (
          <p className="mb-1 hidden shrink-0 text-[11px] text-muted-foreground lg:block">
            ← → · Page Up/Down · Space · Home/End · H pure slide · Esc · Swipe on phone · Clicker remotes use arrow/page keys
          </p>
        ) : null}

        <div
          ref={viewportRef}
          className={cn("relative min-h-0 flex-1 overflow-hidden", pureSlide ? "bg-background" : "bg-foreground/5")}
          onTouchStart={
            isAudience
              ? undefined
              : (e) => {
                  touchStartX.current = e.targetTouches[0]?.clientX ?? null;
                }
          }
          onTouchEnd={
            isAudience
              ? undefined
              : (e) => {
                  const start = touchStartX.current;
                  touchStartX.current = null;
                  if (start == null) return;
                  const endX = e.changedTouches[0]?.clientX;
                  if (endX == null) return;
                  const dx = endX - start;
                  if (dx < -48) goNext();
                  else if (dx > 48) goPrev();
                }
          }
        >
          {!deckReady ? (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
              Preparing slides…
            </div>
          ) : null}

          <div
            className={cn(
              "flex h-full min-h-0 flex-row transition-transform duration-500 ease-out motion-reduce:transition-none",
              !deckReady && "pointer-events-none opacity-0"
            )}
            style={{
              width: viewportW > 0 ? viewportW * total : "100%",
              transform: viewportW > 0 ? `translateX(${translatePx}px)` : undefined,
            }}
          >
            {slides.map((s, i) => (
              <div
                key={s.id}
                style={{ width: viewportW > 0 ? viewportW : "100%" }}
                className={cn("h-full min-h-0 shrink-0", slidePanelBgClass(s.panelBg))}
                aria-hidden={i !== index}
              >
                <SlidePanel slide={s} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isAudience && showChrome ? (
        <div className="flex shrink-0 items-center justify-between gap-4 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
          <button type="button" onClick={goPrev} className="flex min-h-[52px] flex-1 items-center justify-center font-display text-sm font-semibold uppercase">
            ← Prev
          </button>
          <button type="button" onClick={cacheOffline} className="text-xs text-muted-foreground underline">
            Offline
          </button>
          <button type="button" onClick={goNext} className="flex min-h-[52px] flex-1 items-center justify-center font-display text-sm font-semibold uppercase">
            Next →
          </button>
        </div>
      ) : null}
    </div>
  );
}
