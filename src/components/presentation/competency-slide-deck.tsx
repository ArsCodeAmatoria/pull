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
  X,
} from "lucide-react";
import { SLIDE_CYCLIC_ICONS, slideDeckProseClass } from "@/components/presentation/slide-shared";
import { isRiggingDiagramId, RiggingDiagram, type RiggingDiagramId } from "@/components/rigging-diagrams";
import { COMPETENCY_COURSE, type CompetencySlide } from "@/lib/competency-course";
import { openAudienceDisplayWindow } from "@/lib/open-audience-window";
import { useSlideCastPublisher, useSlideCastSubscriber } from "@/lib/use-slide-cast";
import { cn } from "@/lib/utils";

const OFFLINE_CACHE = "pull-slides-v1";
const CAST_SLUG = COMPETENCY_COURSE.slug;

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

function SlidePanel({ slide }: { slide: CompetencySlide }) {
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
            !hasDiagram && "text-center"
          )}
        >
          {slide.title}
        </p>
        {slide.ohrsRef ? (
          <p
            className={cn(
              "font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground",
              !hasDiagram && "text-center"
            )}
          >
            OHSR {slide.ohrsRef}
          </p>
        ) : null}
      </div>
      <div className="flex min-h-0 min-w-0 flex-col gap-4">
        <div className={cn(slideDeckProseClass(), "min-h-0 flex-1")}>
          <p className="text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl">{slide.summary}</p>
          <ul className="mt-4 space-y-3">
            {slide.bullets.map((bullet) => (
              <li key={bullet} className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                {bullet}
              </li>
            ))}
          </ul>
          {slide.formula ? (
            <p className="mt-6 rounded-lg border border-border bg-muted/40 px-4 py-3 font-mono text-base font-semibold text-foreground sm:text-lg">
              {slide.formula}
            </p>
          ) : null}
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
          {slide.source ? (
            <p className="mt-4 text-sm text-muted-foreground">Source: {slide.source}</p>
          ) : null}
        </div>
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
    queueMicrotask(() => setMountedWithFsProbe(true));
  }, []);

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
  }, [closeAudienceWindow, goExit, goNext, goPrev, isAudience, total]);

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
    >
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

      {cacheMessage ? (
        <p className="shrink-0 bg-foreground/10 px-4 py-1.5 text-center text-xs" role="status">
          {cacheMessage}
        </p>
      ) : null}

      <div className="mx-auto flex min-h-0 w-full max-w-[1920px] flex-1 flex-col px-2 py-2 sm:px-4 sm:py-3">
        {!isAudience ? (
          <p className="mb-1 hidden shrink-0 text-[11px] text-muted-foreground lg:block">
            ← → · Page Up/Down · Space · Home/End · Esc · Swipe on phone · Clicker remotes use arrow/page keys
          </p>
        ) : null}

        <div
          ref={viewportRef}
          className="relative min-h-0 flex-1 overflow-hidden bg-foreground/5"
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
                className="h-full min-h-0 shrink-0"
                aria-hidden={i !== index}
              >
                <SlidePanel slide={s} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isAudience ? (
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
