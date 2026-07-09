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
  SlidersHorizontal,
  X,
} from "lucide-react";
import { SLIDE_CYCLIC_ICONS, slideDeckProseClass } from "@/components/presentation/slide-shared";
import { SlidePanelImage } from "@/components/course-cover-image";
import { Badge } from "@/components/ui/badge";
import { coverImageAlt, EDGE_PROTECTION_IMAGE_ALT, LW_RATIO_IMAGE_ALT } from "@/lib/course-images";
import { StandardLogo } from "@/components/standards/standard-logo";
import { isRiggingDiagramId, RiggingDiagram, type RiggingDiagramId } from "@/components/rigging-diagrams";
import {
  getSlideCourse,
  type CompetencySlide,
  type CompetencySlideSection,
  type CompetencySlideSectionItem,
  type HeroStatCallout,
  type SlideEmphasis,
  type SlidePanelBg,
  type SlideQuizQuestion,
  type SlideSourceLink,
} from "@/lib/competency-course";
import type { TrackSlug } from "@/lib/tracks";
import { slidesCastHref, slidesIndexHref } from "@/lib/tracks";
import { STANDARD_URLS, type StandardLogoId } from "@/lib/standards-links";
import { openAudienceDisplayWindow } from "@/lib/open-audience-window";
import { useTranslations } from "@/i18n/locale-context";
import { useSlideCastPublisher, useSlideCastSubscriber } from "@/lib/use-slide-cast";
import { cn } from "@/lib/utils";

const OFFLINE_CACHE = "pull-slides-v1";

type Props = {
  readonly castRole?: "presenter" | "audience";
  readonly initialSlideIndex: number;
  readonly courseSlug: TrackSlug;
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
  if (bg === "bc") return "slide-stats-hero";
  if (bg === "gray") return "slide-quiz-gray";
  if (bg === "white") return "slide-panel-bg-white";
  if (bg === "warm") return "slide-edge-focus";
  if (bg === "compress") return "slide-compression-focus";
  if (bg === "angle") return "slide-angle-focus";
  if (bg === "sine") return "slide-sine-focus";
  if (bg === "cover") return "slide-cover-hero";
  if (bg === "cool") return "slide-panel-bg-cool";
  return "";
}

function HeroStatCallouts({ stats }: { stats: readonly HeroStatCallout[] }) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {stats.map((stat) => {
        const inner = (
          <>
            <p
              className={cn(
                "font-display text-[clamp(1.75rem,2.75vw,2.5rem)] font-bold leading-none tracking-wide",
                emphasisTextClass(stat.emphasis) || "text-foreground"
              )}
            >
              {stat.value}
            </p>
            <p className="slide-stats-readable mt-2 whitespace-pre-line text-sm leading-snug text-muted-foreground">
              {stat.label}
            </p>
          </>
        );
        return (
          <div key={stat.label} className="slide-stat-card rounded-sm px-2 py-3 text-center sm:py-3.5">
            {stat.href ? (
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-90"
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
    <li className="slide-stats-readable text-base leading-snug text-foreground/95">
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
            className="font-medium text-foreground underline decoration-[hsl(var(--stats-bc-gold)/0.55)] underline-offset-[3px] hover:decoration-[hsl(var(--stats-bc-gold))]"
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

function FocusFactItem({ item }: { item: CompetencySlideSectionItem }) {
  const parsed = parseSectionItem(item);
  return (
    <li className="slide-focus-readable text-sm leading-snug text-foreground/95 lg:text-[0.9375rem]">
      <EmphasisLabel label={parsed.label} href={parsed.href} emphasis={parsed.emphasis} />
    </li>
  );
}

function FocusSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const isDenseFocus = sections.length >= 3;
  const imageAlt = slide.image?.includes("edge-protection")
    ? EDGE_PROTECTION_IMAGE_ALT
    : slide.image?.includes("l-w")
      ? LW_RATIO_IMAGE_ALT
      : slide.title;
  const hasDiagram = slide.diagram && isRiggingDiagramId(slide.diagram);
  const isWhiteFocus = slide.panelBg === "white";
  const isCompressFocus = slide.panelBg === "compress";
  const isLargeFocusDiagram =
    slide.panelBg === "compress" || slide.panelBg === "angle" || slide.panelBg === "sine";
  const kicker =
    slide.focusKicker ?? (slide.ohrsRef ? `${slide.unitLabel} · OHSR Part 15` : slide.unitLabel);

  return (
    <div
      className={cn(
        "grid h-full min-h-0 shrink-0 grid-cols-1 overflow-hidden",
        isLargeFocusDiagram
          ? "lg:grid-cols-[minmax(0,62%)_minmax(0,1fr)]"
          : "lg:grid-cols-[minmax(0,44%)_minmax(0,1fr)]"
      )}
    >
      {slide.image ? (
        <div
          className={cn(
            "relative flex min-h-[min(36vh,300px)] items-center justify-center lg:min-h-0 lg:h-full",
            isWhiteFocus && "slide-white-focus-visual bg-white px-4 py-4 sm:px-6 lg:px-8"
          )}
        >
          <SlidePanelImage
            src={slide.image}
            alt={imageAlt}
            priority
            className={cn(
              "relative h-full w-full",
              isWhiteFocus ? "min-h-[min(34vh,280px)] max-h-full" : "min-h-[min(36vh,300px)] lg:min-h-0"
            )}
            imageClassName={isWhiteFocus ? "object-contain object-center" : "object-cover object-center"}
            sizes="(max-width: 1024px) 100vw, 44vw"
          />
        </div>
      ) : hasDiagram ? (
        <div
          className={cn(
            "slide-focus-diagram-frame flex min-h-[min(48vh,420px)] flex-col px-3 py-3 sm:px-4 lg:min-h-0 lg:h-full lg:px-5 lg:py-4",
            isLargeFocusDiagram && "slide-focus-diagram-large",
            (slide.panelBg === "angle" && "slide-angle-diagram-frame") ||
              (slide.panelBg === "sine" && "slide-sine-diagram-frame")
          )}
        >
          <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden [&_svg]:h-auto [&_svg]:max-h-full [&_svg]:w-full">
            <RiggingDiagram
              id={slide.diagram as RiggingDiagramId}
              variant={isLargeFocusDiagram ? "slide-large" : "slide"}
              className={cn(isLargeFocusDiagram ? "h-full max-w-none" : "w-full max-w-md")}
            />
          </div>
          {isCompressFocus && slide.diagram === "bucket-compression" ? (
            <p className="slide-focus-diagram-caption shrink-0 px-2 pb-1 pt-1 text-center">
              <span className="block">Shallow bridle squeezes the load</span>
            </p>
          ) : null}
          {slide.panelBg === "angle" && slide.diagram === "sling-angle-slopes" ? (
            <p className="slide-focus-diagram-caption shrink-0 px-2 pb-1 pt-1 text-center">
              <span className="block">Tension up → capacity down</span>
            </p>
          ) : null}
          {slide.panelBg === "sine" && slide.diagram === "sling-tension-sine" ? (
            <p className="slide-focus-diagram-caption shrink-0 px-2 pb-1 pt-1 text-center">
              <span className="block">45° bridle · angle chart</span>
            </p>
          ) : null}
        </div>
      ) : null}

      <div
        className={cn(
          "flex min-h-0 flex-col justify-center gap-3 overflow-hidden px-5 py-5 sm:gap-3.5 sm:px-7 sm:py-6 lg:px-9 lg:py-7",
          isDenseFocus && "justify-start gap-2.5 overflow-y-auto py-4"
        )}
      >
        <div className={cn("space-y-2", isDenseFocus && "space-y-1.5")}>
          <p className="slide-focus-kicker">{kicker}</p>
          {slide.ohrsRef ? <p className="slide-focus-ohrs text-[clamp(2.25rem,5vw,3.75rem)]">OHSR {slide.ohrsRef}</p> : null}
          <h2 className="slide-focus-title text-balance text-foreground">{slide.title}</h2>
          {slide.summary ? (
            <p
              className={cn(
                "slide-focus-readable leading-relaxed text-muted-foreground",
                isDenseFocus ? "text-sm lg:text-base" : "text-base lg:text-lg"
              )}
            >
              {slide.summary}
            </p>
          ) : null}
          {slide.focusCallout ? (
            <div className={cn("slide-focus-callout", isDenseFocus && "px-3 py-2")}>
              <p className={cn("text-highlight-secondary", isDenseFocus && "text-[clamp(0.8rem,1.5vw,1rem)]")}>
                {slide.focusCallout}
              </p>
            </div>
          ) : null}
        </div>

        {sections.length > 0 ? (
          <div
            className={cn(
              "grid min-h-0 gap-3",
              isDenseFocus ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
            )}
          >
            {sections.map((section) => (
              <div key={section.heading} className="min-w-0">
                <h3
                  className={cn(
                    "slide-focus-section-label",
                    isDenseFocus && "text-[0.7rem]",
                    emphasisTextClass(section.headingEmphasis) || "text-foreground"
                  )}
                >
                  {section.heading}
                </h3>
                <ul className="mt-1 space-y-1">
                  {section.items.map((item) => (
                    <FocusFactItem key={parseSectionItem(item).label} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        {slide.sourceLinks?.length ? (
          <SlideSourceLinkList links={slide.sourceLinks} className="slide-focus-readable gap-x-3 text-xs sm:text-sm" />
        ) : slide.source ? (
          <p className="slide-focus-readable text-xs text-muted-foreground sm:text-sm">Source: {slide.source}</p>
        ) : null}
      </div>
    </div>
  );
}

function StatsHeroSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const hasDiagram = slide.diagram && isRiggingDiagramId(slide.diagram);

  return (
    <div className="flex h-full min-h-0 shrink-0 flex-col overflow-hidden">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 overflow-hidden px-5 py-4 sm:gap-6 sm:px-7 sm:py-5 lg:grid-cols-[minmax(0,42%)_minmax(0,1fr)] lg:gap-8 lg:px-9 lg:py-6">
        <div className="flex min-h-0 flex-col justify-center gap-4 sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="slide-stats-rule" aria-hidden />
            <p className="slide-stats-kicker">{slide.unitLabel} · Canada &amp; BC</p>
          </div>

          <h2 className="slide-stats-title text-balance">{slide.title}</h2>

          <p className="slide-stats-readable max-w-md text-lg leading-relaxed text-muted-foreground">
            {slide.summary}
          </p>

          {slide.heroStats?.length ? <HeroStatCallouts stats={slide.heroStats} /> : null}

          {sections.length > 0 ? (
            <div className="min-h-0 space-y-2">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="slide-stats-section-label">{section.heading}</h3>
                  <ul className="mt-1.5 space-y-1.5">
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
        <div className="shrink-0 px-5 pb-4 pt-2 sm:px-7 sm:pb-5 lg:px-9">
          <p className="slide-stats-section-label">Sources</p>
          <SlideSourceLinkList links={slide.sourceLinks} className="mt-2 gap-x-3 gap-y-1.5 text-sm" />
        </div>
      ) : slide.source ? (
        <p className="slide-stats-readable shrink-0 px-5 pb-4 text-sm text-muted-foreground sm:px-7 sm:pb-5">
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

const QUIZ_OPTION_LETTERS = ["A", "B", "C", "D"];

function QuizQuestionCard({
  question,
  revealed,
  questionLabel,
}: {
  question: SlideQuizQuestion;
  revealed: boolean;
  questionLabel: string;
}) {
  return (
    <article className="slide-quiz-card flex min-h-0 flex-col gap-2.5 p-3 sm:gap-3 sm:p-4">
      <div className="space-y-1">
        <p className="slide-quiz-question-label">{questionLabel}</p>
        <p className="slide-quiz-prompt">{question.prompt}</p>
      </div>
      <ul className="grid grid-cols-2 gap-1.5 sm:gap-2">
        {question.options.map((option, optionIndex) => {
          const isCorrect = option.id === question.correctAnswer;
          return (
            <li key={option.id}>
              <div
                className={cn(
                  "slide-quiz-option",
                  revealed && isCorrect && "slide-quiz-option-correct",
                  revealed && !isCorrect && "slide-quiz-option-muted"
                )}
              >
                <span className="slide-quiz-option-letter" aria-hidden>
                  {QUIZ_OPTION_LETTERS[optionIndex]}
                </span>
                <span>{option.text}</span>
              </div>
            </li>
          );
        })}
      </ul>
      {revealed && question.explanation ? (
        <p className="slide-quiz-explanation">{question.explanation}</p>
      ) : null}
    </article>
  );
}

function QuizSlidePanel({ slide }: { slide: CompetencySlide }) {
  const [revealed, setRevealed] = useState(false);
  const { t } = useTranslations();
  const questions = slide.quizQuestions ?? [];
  const kicker = slide.focusKicker ?? slide.unitLabel;

  return (
    <div className="slide-quiz-panel flex h-full min-h-0 flex-col overflow-hidden px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
      <header className="shrink-0 space-y-1.5">
        <p className="slide-focus-kicker">{kicker}</p>
        <h2 className="slide-focus-title text-balance">{slide.title}</h2>
        {slide.summary ? <p className="slide-quiz-summary">{slide.summary}</p> : null}
      </header>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2 sm:gap-3.5 lg:mt-4 lg:gap-4">
        {questions.map((question, i) => (
          <QuizQuestionCard
            key={question.id}
            question={question}
            revealed={revealed}
            questionLabel={t("slides.quizQuestion", { n: i + 1 })}
          />
        ))}
      </div>

      <div className="mt-3 flex shrink-0 justify-center sm:mt-4">
        <button type="button" onClick={() => setRevealed((open) => !open)} className="slide-quiz-reveal-btn">
          {revealed ? t("slides.quizHideAnswers") : t("slides.quizRevealAnswers")}
        </button>
      </div>
    </div>
  );
}

function CoverSlidePanel({ slide }: { slide: CompetencySlide }) {
  const imageSrc = slide.image ?? "/images/luffer.png";
  const seriesLabel = slide.focusKicker ?? "Basic Rigging Info in Course";

  return (
    <div className="slide-cover-panel relative h-full min-h-0 overflow-hidden">
      <div className="slide-cover-visual absolute inset-0">
        <SlidePanelImage
          src={imageSrc}
          alt={coverImageAlt(imageSrc)}
          priority
          className="absolute inset-0"
          imageClassName="object-cover object-[62%_center] sm:object-[58%_center]"
          sizes="100vw"
        />
      </div>
      <div className="slide-cover-scrim absolute inset-0" aria-hidden />
      <div className="slide-cover-copy relative z-10 flex h-full min-h-0 flex-col justify-center gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:max-w-[min(100%,34rem)] lg:px-14 lg:py-10 xl:max-w-[min(100%,38rem)] xl:px-16">
        <div className="max-w-xl space-y-5 lg:space-y-6">
          <span className="slide-cover-rule" aria-hidden />
          <p className="slide-cover-kicker">{seriesLabel}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="slide-cover-badge">
              Open
            </Badge>
            <span className="slide-cover-unit">{slide.unitLabel}</span>
          </div>
          <h1 className="slide-cover-title text-balance">{slide.title}</h1>
          <p className="slide-cover-subtitle text-pretty">{slide.summary}</p>
        </div>
        {slide.bullets.length > 0 ? (
          <ul className="slide-cover-features max-w-lg space-y-2.5">
            {slide.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function SlidePanel({ slide }: { slide: CompetencySlide }) {
  if (slide.quiz && slide.quizQuestions?.length) {
    return <QuizSlidePanel slide={slide} />;
  }

  if (slide.focus) {
    return <FocusSlidePanel slide={slide} />;
  }

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

export function CompetencySlideDeck({ castRole = "presenter", initialSlideIndex, courseSlug }: Props) {
  const router = useRouter();
  const { locale } = useTranslations();
  const isAudience = castRole === "audience";
  const course = getSlideCourse(courseSlug, locale);
  const slides = course.slides;
  const total = slides.length;

  const [index, setIndex] = useState(initialSlideIndex);
  const [viewportW, setViewportW] = useState(0);
  const [cacheMessage, setCacheMessage] = useState<string | null>(null);
  const [browserFs, setBrowserFs] = useState(false);
  const [mountedWithFsProbe, setMountedWithFsProbe] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);

  const shellRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const slide = slides[index];

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      setMountedWithFsProbe(true);
    });
  }, []);

  useEffect(() => {
    setControlsOpen(false);
  }, [index]);

  useSlideCastPublisher(courseSlug, !isAudience && total > 0, index, total);
  useSlideCastSubscriber(courseSlug, isAudience && total > 0, total, setIndex);

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
    router.push(slidesIndexHref(courseSlug));
  }, [router, courseSlug]);

  const closeAudienceWindow = useCallback(async () => {
    await exitFullscreen();
    window.close();
    window.setTimeout(() => router.push(slidesIndexHref(courseSlug)), 200);
  }, [router, courseSlug]);

  const openAudienceDisplay = useCallback(async () => {
    await openAudienceDisplayWindow(`${window.location.origin}${slidesCastHref(courseSlug)}`);
  }, [courseSlug]);

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
          if (controlsOpen) {
            event.preventDefault();
            setControlsOpen(false);
            return;
          }
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
  }, [closeAudienceWindow, controlsOpen, goExit, goNext, goPrev, isAudience, total]);

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
  const activePanelBg = slidePanelBgClass(slide.panelBg);

  if (!slide) return null;

  return (
    <div
      ref={shellRef}
      role="dialog"
      aria-modal
      aria-label={isAudience ? "Audience: Rigger competency slides" : "Presenter: Rigger competency slides"}
      className={cn(
        "fixed inset-0 z-[200] flex min-h-[100dvh] flex-col overscroll-none text-foreground",
        activePanelBg || "bg-background",
        browserFs && "!z-[2147483646]"
      )}
    >
      {!controlsOpen ? (
        <button
          type="button"
          onClick={() => setControlsOpen(true)}
          className="slide-deck-controls-fab fixed bottom-[max(0.85rem,env(safe-area-inset-bottom))] right-4 z-[205] inline-flex items-center gap-2"
          aria-label="Open slide controls"
          aria-haspopup="dialog"
          aria-expanded={false}
        >
          <SlidersHorizontal className="h-4 w-4 shrink-0" aria-hidden />
          <span className="font-display text-xs font-bold uppercase tracking-[0.18em]">
            {index + 1} / {total}
          </span>
        </button>
      ) : null}

      {controlsOpen ? (
        <>
          <button
            type="button"
            className="slide-deck-controls-backdrop fixed inset-0 z-[205]"
            aria-label="Close slide controls"
            onClick={() => setControlsOpen(false)}
          />
          <div
            role="dialog"
            aria-label="Slide controls"
            className="slide-deck-controls-panel fixed bottom-[max(0.85rem,env(safe-area-inset-bottom))] left-4 right-4 z-[210] sm:left-auto sm:w-[min(100%,22rem)]"
          >
            <div className="slide-deck-controls-header">
              <div className="min-w-0 flex-1">
                <p className="slide-deck-controls-kicker">
                  {isAudience ? "Audience" : "Presenter"} · {slide.unitLabel}
                </p>
                <p className="slide-deck-controls-title line-clamp-2">{slide.title}</p>
                <p className="slide-deck-controls-meta">
                  Slide {slide.id} of {total}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setControlsOpen(false)}
                className="slide-deck-controls-icon-btn shrink-0"
                aria-label="Close controls"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="slide-deck-controls-actions">
              {!isAudience ? (
                <>
                  <button type="button" onClick={goPrev} className="slide-deck-controls-btn" disabled={index === 0}>
                    <ChevronLeft className="h-4 w-4" />
                    Prev
                  </button>
                  <button type="button" onClick={goNext} className="slide-deck-controls-btn" disabled={index >= total - 1}>
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button type="button" onClick={() => void openAudienceDisplay()} className="slide-deck-controls-btn">
                    <MonitorPlay className="h-4 w-4" />
                    Cast
                  </button>
                  <Link href={slidesIndexHref(courseSlug)} className="slide-deck-controls-btn">
                    Overview
                  </Link>
                  <button type="button" onClick={cacheOffline} className="slide-deck-controls-btn">
                    Save offline
                  </button>
                </>
              ) : (
                <button type="button" onClick={() => void closeAudienceWindow()} className="slide-deck-controls-btn">
                  Close window
                </button>
              )}
              {canFs ? (
                <button type="button" onClick={() => void toggleFs()} className="slide-deck-controls-btn">
                  {browserFs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  {browserFs ? "Exit fullscreen" : "Fullscreen"}
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => void (isAudience ? closeAudienceWindow() : goExit())}
                className="slide-deck-controls-btn slide-deck-controls-btn-exit"
              >
                <X className="h-4 w-4" />
                {isAudience ? "Exit cast" : "Exit course"}
              </button>
            </div>

            {!isAudience ? (
              <p className="slide-deck-controls-hint">
                ← → · Page Up/Down · Space · Home/End · Esc · Swipe on phone
              </p>
            ) : null}
          </div>
        </>
      ) : null}

      {cacheMessage ? (
        <p className="slide-deck-controls-toast fixed bottom-[max(4.5rem,calc(env(safe-area-inset-bottom)+3.5rem))] right-4 z-[206] max-w-xs" role="status">
          {cacheMessage}
        </p>
      ) : null}

      <div className="flex min-h-0 w-full flex-1 flex-col">
        <div
          ref={viewportRef}
          className={cn("relative min-h-0 flex-1 overflow-hidden", activePanelBg || "bg-background")}
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
                className={cn(
                  "h-full min-h-0 shrink-0",
                  slidePanelBgClass(s.panelBg) || "bg-background"
                )}
                aria-hidden={i !== index}
              >
                <SlidePanel slide={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
