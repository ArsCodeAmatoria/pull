"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
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
import { coverImageAlt, EDGE_PROTECTION_IMAGE_ALT, LW_RATIO_IMAGE_ALT, SOFTENER_IMAGE_ALT, BLOCK_IMAGE_ALT, PILE_SHACKLE_IMAGE_ALT, HOOKS_IMAGE_ALT, CHAIN_IMAGE_ALT, BRIDLE_IMAGE_ALT, WIRE_ROPE_IMAGE_ALT, WIRE_CUT_IMAGE_ALT, WEB_SLING_IMAGE_ALT, WEB_SLING_TAG_IMAGE_ALT, ROUND_SLING_IMAGE_ALT, HITCH_IMAGE_ALT, HAMMER_CHOKE_IMAGE_ALT, SELFDUMP_IMAGE_ALT, CONCRETE_BUCKET_IMAGE_ALT, DEP_IMAGE_ALT, MANBASKET_IMAGE_ALT, TAGLINE_TITLE_IMAGE_ALT, TAGLINE_CLOVE_IMAGE_ALT, TAGLINE_BOWLINE_IMAGE_ALT, TAGLINE_EXTRA_IMAGE_ALT, CRITICAL_LIFT_IMAGE_ALT, PINCHED_SLING_IMAGE_ALT, RADIO_IMAGE_ALT, HAND_SIGNALS_IMAGE_ALT } from "@/lib/course-images";
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
import {
  countCompetenciesByLevel,
  LEVELED_COMPETENCY_GROUPS,
} from "@/data/curriculum-competency-levels";
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
            Open chart
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
  return (
    value === "worksafebc" ||
    value === "bccsa" ||
    value === "asme" ||
    value === "ansi" ||
    value === "csa" ||
    value === "en" ||
    value === "fem" ||
    value === "bchydro"
  );
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
  if (bg === "chain") return "slide-chain-grade-focus";
  if (bg === "chalk") return "slide-chalk-board-focus";
  if (bg === "concrete") return "slide-concrete-math-focus";
  if (bg === "cog") return "slide-cog-math-focus";
  if (bg === "cool") return "slide-panel-bg-cool";
  if (bg === "oppose") return "slide-oppose-focus";
  if (bg === "personnel") return "slide-personnel-focus";
  if (bg === "strength") return "slide-strength-focus";
  if (bg === "competency") return "slide-competency-focus";
  if (bg === "radio") return "slide-radio-focus";
  if (bg === "signals") return "slide-signals-focus";
  if (bg === "hydro") return "slide-hydro-focus";
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

function focusSlideImageAlt(slide: CompetencySlide, src?: string | null): string {
  const image = src ?? slide.image;
  if (image?.includes("edge-protection")) return EDGE_PROTECTION_IMAGE_ALT;
  if (image?.includes("l-w")) return LW_RATIO_IMAGE_ALT;
  if (image?.includes("softner")) return SOFTENER_IMAGE_ALT;
  if (image?.includes("block")) return BLOCK_IMAGE_ALT;
  if (image?.includes("pile-shackle")) return PILE_SHACKLE_IMAGE_ALT;
  if (image?.includes("rigging/hooks")) return HOOKS_IMAGE_ALT;
  if (image?.includes("rigging/chain")) return CHAIN_IMAGE_ALT;
  if (image?.includes("rigging/bridle")) return BRIDLE_IMAGE_ALT;
  if (image?.includes("rigging/wirerope")) return WIRE_ROPE_IMAGE_ALT;
  if (image?.includes("rigging/wirecut")) return WIRE_CUT_IMAGE_ALT;
  if (image?.includes("rigging/webslingtag")) return WEB_SLING_TAG_IMAGE_ALT;
  if (image?.includes("rigging/websling")) return WEB_SLING_IMAGE_ALT;
  if (image?.includes("rigging/roundsling")) return ROUND_SLING_IMAGE_ALT;
  if (image?.includes("rigging/hitch")) return HITCH_IMAGE_ALT;
  if (image?.includes("rigging/hammerchoke")) return HAMMER_CHOKE_IMAGE_ALT;
  if (image?.includes("rigging/selfdump")) return SELFDUMP_IMAGE_ALT;
  if (image?.includes("math/castiron")) return "Cast iron pipe with OD, ID, wall thickness, and length labeled for weight calculation";
  if (image?.includes("math/lockblock")) return "Concrete lock block with length, width, and height labeled for weight calculation";
  if (image?.includes("math/lumber")) return "Douglas fir lumber bundle with length, width, and height labeled for weight calculation";
  if (image?.includes("math/plywood")) return "Plywood stack with length, width, and sheet thickness labeled for weight calculation";
  if (image?.includes("math/beam")) return "Steel I-beam with flange, web, and length dimensions labeled for weight calculation";
  if (image?.includes("math/concretebucket")) return "Concrete bucket labeled SWL 2000 kg for metric volume calculation";
  if (image?.includes("math/dirtpile")) return "Dirt pile labeled for material weight estimation";
  if (image?.includes("math/centergravity")) return "International center of gravity symbol — circle with alternating red and white quadrants";
  if (image?.includes("math/seacan")) return "Sixteen-foot sea can with offset wooden crate labeled for center of gravity calculation";
  if (image?.includes("math/directlybelow")) return "Crane hook aligned directly above the center of gravity symbol on an offset crate in a sea can";
  if (image?.includes("math/wireropechart")) return "Wire rope sling safe working load chart by diameter and hitch type";
  if (image?.includes("math/chainchart")) return "Grade T (8) alloy chain sling safe working load chart by size and hitch type";
  if (image?.includes("rigging/concretebucket")) return CONCRETE_BUCKET_IMAGE_ALT;
  if (image?.includes("rigging/DEP") || image?.includes("rigging/dep")) return DEP_IMAGE_ALT;
  if (image?.includes("rigging/manbasket")) return MANBASKET_IMAGE_ALT;
  if (image?.includes("rigging/tagtitle")) return TAGLINE_TITLE_IMAGE_ALT;
  if (image?.includes("rigging/tagclove")) return TAGLINE_CLOVE_IMAGE_ALT;
  if (image?.includes("rigging/tagbowline")) return TAGLINE_BOWLINE_IMAGE_ALT;
  if (image?.includes("rigging/tagextra")) return TAGLINE_EXTRA_IMAGE_ALT;
  if (image?.includes("crane/criticallift")) return CRITICAL_LIFT_IMAGE_ALT;
  if (image?.includes("rigging/pinchedsling")) return PINCHED_SLING_IMAGE_ALT;
  if (image?.includes("crane/radio")) return RADIO_IMAGE_ALT;
  if (image?.includes("crane/handsignals")) return HAND_SIGNALS_IMAGE_ALT;
  return slide.title;
}

function FocusFactItem({ item, className }: { item: CompetencySlideSectionItem; className?: string }) {
  const parsed = parseSectionItem(item);
  return (
    <li className={cn("slide-focus-readable text-sm leading-snug text-foreground/95 lg:text-[0.9375rem]", className)}>
      <EmphasisLabel label={parsed.label} href={parsed.href} emphasis={parsed.emphasis} />
    </li>
  );
}

function SplitRemovalSectionBlock({
  section,
  splitColumns = false,
}: {
  section: NonNullable<CompetencySlide["sections"]>[number];
  splitColumns?: boolean;
}) {
  const items = section.items;
  const splitAt = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, splitAt);
  const rightItems = items.slice(splitAt);

  return (
    <div className="min-w-0">
      <h3
        className={cn(
          "slide-focus-section-label",
          emphasisTextClass(section.headingEmphasis) || "text-foreground"
        )}
      >
        {section.heading}
      </h3>
      {splitColumns && items.length > 3 ? (
        <div className="mt-1.5 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
          <ul className="space-y-1">
            {leftItems.map((item) => (
              <FocusFactItem key={parseSectionItem(item).label} item={item} className="slide-hooks-focus-item" />
            ))}
          </ul>
          <ul className="space-y-1">
            {rightItems.map((item) => (
              <FocusFactItem key={parseSectionItem(item).label} item={item} className="slide-hooks-focus-item" />
            ))}
          </ul>
        </div>
      ) : (
        <ul className="mt-1.5 space-y-1">
          {items.map((item) => (
            <FocusFactItem key={parseSectionItem(item).label} item={item} className="slide-hooks-focus-item" />
          ))}
        </ul>
      )}
    </div>
  );
}

function SplitRemovalFocusSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const section = sections[0];
  const kicker = slide.focusKicker ?? slide.unitLabel;
  const isMultiSection = sections.length > 1;
  const hasSecondaryImage = Boolean(slide.secondaryImage);
  const leadSectionHeavy = Boolean(section && section.items.length >= 6 && sections.length >= 3);
  const isSyntheticSlingPhoto = Boolean(
    (slide.image?.includes("rigging/websling.png") || slide.image?.includes("rigging/roundsling")) &&
      !slide.image?.includes("webslingtag")
  );

  return (
    <div
      className={cn(
        "slide-hooks-focus grid h-full min-h-0 grid-cols-1 overflow-hidden",
        isSyntheticSlingPhoto
          ? "lg:grid-cols-[minmax(0,40%)_minmax(0,1fr)]"
          : "lg:grid-cols-[minmax(0,44%)_minmax(0,1fr)]"
      )}
    >
      <div className="flex min-h-0 flex-col justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6 lg:pr-4">
        {slide.image ? (
          <div
            className={cn(
              "slide-white-focus-visual-pile relative flex min-h-[min(30vh,260px)] flex-1 items-center justify-center overflow-hidden lg:min-h-0",
              hasSecondaryImage && "flex-col gap-3"
            )}
          >
            <SlidePanelImage
              src={slide.image}
              alt={focusSlideImageAlt(slide, slide.image)}
              priority
              className={cn(
                "relative h-full w-full min-h-[min(28vh,240px)] max-h-[min(42vh,380px)] lg:min-h-0 lg:max-h-full",
                hasSecondaryImage && "min-h-[min(18vh,160px)] max-h-[min(28vh,240px)] flex-[1.15] lg:max-h-none",
                isSyntheticSlingPhoto &&
                  !hasSecondaryImage &&
                  "min-h-[min(34vh,300px)] max-h-[min(52vh,460px)] lg:scale-[1.06]"
              )}
              imageClassName="object-contain object-center"
              sizes={isSyntheticSlingPhoto ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 1024px) 100vw, 44vw"}
            />
            {slide.secondaryImage ? (
              <SlidePanelImage
                src={slide.secondaryImage}
                alt={focusSlideImageAlt(slide, slide.secondaryImage)}
                className="relative h-full w-full min-h-[min(14vh,120px)] max-h-[min(22vh,200px)] flex-1 lg:min-h-0 lg:max-h-none"
                imageClassName="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
            ) : null}
          </div>
        ) : null}
        <div className="shrink-0 space-y-3">
          {slide.focusCallout ? (
            <div className="slide-focus-callout px-3 py-2.5">
              <p className="text-[clamp(0.78rem,1.4vw,0.95rem)] font-display font-bold uppercase leading-snug tracking-wide text-highlight-secondary">
                {slide.focusCallout}
              </p>
            </div>
          ) : null}
          {slide.source ? (
            <p className="slide-hooks-focus-source text-xs text-muted-foreground sm:text-sm">Source: {slide.source}</p>
          ) : null}
        </div>
      </div>

      <div className="slide-hooks-focus-copy flex min-h-0 min-w-0 flex-col justify-center gap-2.5 overflow-y-auto px-4 py-4 sm:gap-3 sm:px-5 sm:py-5 lg:px-6 lg:py-5 lg:pr-10">
        <div className="shrink-0 space-y-1.5">
          <p className="slide-focus-kicker">{kicker}</p>
          <h2 className="slide-focus-title slide-focus-title-large text-balance text-foreground">{slide.title}</h2>
          {slide.summary ? (
            <p className="slide-focus-readable text-sm leading-relaxed text-muted-foreground lg:text-base">
              {slide.summary}
            </p>
          ) : null}
        </div>
        {leadSectionHeavy && section ? (
          <div className="min-w-0 space-y-3">
            <SplitRemovalSectionBlock section={section} splitColumns />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {sections.slice(1).map((s) => (
                <SplitRemovalSectionBlock key={s.heading} section={s} />
              ))}
            </div>
          </div>
        ) : isMultiSection ? (
          <div className="min-w-0 space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {sections.slice(0, 2).map((s) => (
                <SplitRemovalSectionBlock key={s.heading} section={s} />
              ))}
            </div>
            {sections[2] ? <SplitRemovalSectionBlock section={sections[2]} splitColumns /> : null}
          </div>
        ) : section ? (
          <SplitRemovalSectionBlock section={section} splitColumns />
        ) : null}
      </div>
    </div>
  );
}

function ChainGradeSectionList({
  section,
  splitColumns = false,
}: {
  section: NonNullable<CompetencySlide["sections"]>[number];
  splitColumns?: boolean;
}) {
  const items = section.items;
  const splitAt = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, splitAt);
  const rightItems = items.slice(splitAt);

  return (
    <article className="min-w-0">
      <h3
        className={cn(
          "slide-chain-editorial-label",
          emphasisTextClass(section.headingEmphasis) || "text-foreground"
        )}
      >
        {section.heading}
      </h3>
      {splitColumns && items.length > 3 ? (
        <div className="slide-chain-editorial-cols mt-2.5">
          <ul className="space-y-1.5">
            {leftItems.map((item) => (
              <FocusFactItem key={parseSectionItem(item).label} item={item} className="slide-chain-editorial-item" />
            ))}
          </ul>
          <ul className="space-y-1.5">
            {rightItems.map((item) => (
              <FocusFactItem key={parseSectionItem(item).label} item={item} className="slide-chain-editorial-item" />
            ))}
          </ul>
        </div>
      ) : (
        <ul className="mt-2.5 space-y-1.5">
          {items.map((item) => (
            <FocusFactItem key={parseSectionItem(item).label} item={item} className="slide-chain-editorial-item" />
          ))}
        </ul>
      )}
    </article>
  );
}

function BridleMathChalkSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const kicker = slide.focusKicker ?? slide.unitLabel;
  const hasDiagram = slide.diagram && isRiggingDiagramId(slide.diagram);
  const tableSection = sections.find((section) =>
    section.items.some((item) => /^\d+°/.test(parseSectionItem(item).label))
  );
  const isListHeading = (heading: string) =>
    /remember|best practice|regulation|standard|practice|regs|recuerde|pr[aá]ctica|buenas|reglamento|norma/i.test(
      heading
    );
  const otherSections = sections.filter((section) => section !== tableSection);
  const teachingSections = otherSections.filter((section) => !isListHeading(section.heading));
  const listSections = otherSections.filter((section) => isListHeading(section.heading));

  const tableRows =
    tableSection?.items.map((item) => {
      const label = parseSectionItem(item).label;
      const [angle, multiplier] = label.split(/\s*[·—–-]\s*/);
      return { angle: angle?.trim() ?? label, multiplier: multiplier?.trim() ?? "" };
    }) ?? [];

  const renderSection = (section: NonNullable<CompetencySlide["sections"]>[number]) => (
    <article key={section.heading} className="space-y-1.5">
      <h3 className={cn("slide-chalk-label", emphasisTextClass(section.headingEmphasis) || "text-foreground")}>
        {section.heading}
      </h3>
      {section.items.map((item, index) => {
        const label = parseSectionItem(item).label;
        const isFormula = label.includes("=") || label.includes("÷") || label.includes("sin");
        const isList = isListHeading(section.heading);
        if (index === 0 && !isList && isFormula) {
          return (
            <p key={label} className="slide-chalk-formula">
              {label}
            </p>
          );
        }
        if (isList) {
          return (
            <p key={label} className="slide-chalk-body">
              · {label}
            </p>
          );
        }
        return (
          <p key={label} className={isFormula ? "slide-chalk-formula" : index === 0 ? "slide-chalk-formula" : "slide-chalk-body"}>
            {label}
          </p>
        );
      })}
    </article>
  );

  const renderListSection = (section: NonNullable<CompetencySlide["sections"]>[number]) => (
    <div key={section.heading} className="space-y-1.5">
      <h3
        className={cn(
          "slide-chalk-label",
          emphasisTextClass(section.headingEmphasis) || "text-foreground"
        )}
      >
        {section.heading}
      </h3>
      <div className="space-y-1.5">
        {section.items.map((item) => {
          const parsed = parseSectionItem(item);
          return (
            <p
              key={parsed.label}
              className={cn("slide-chalk-body", emphasisTextClass(parsed.emphasis))}
            >
              · {parsed.label}
            </p>
          );
        })}
      </div>
    </div>
  );

  const isDiagramBelowTitle = slide.diagram === "basket-vertical-vs-inclined";

  if (isDiagramBelowTitle && hasDiagram) {
    return (
      <div className="slide-chalk-board flex h-full min-h-0 flex-col overflow-hidden px-6 py-4 sm:px-9 sm:py-5 lg:px-12 lg:py-6">
        <header className="shrink-0 space-y-1 pb-2">
          <p className="slide-chalk-kicker">{kicker}</p>
          <h2 className="slide-chalk-title text-balance text-[clamp(1.35rem,2.8vw,2.1rem)] leading-tight">
            {slide.title}
          </h2>
        </header>

        <div className="slide-chalk-diagram-frame flex min-h-0 flex-1 items-center justify-center overflow-hidden py-1">
          <RiggingDiagram
            id={slide.diagram as RiggingDiagramId}
            variant="slide-large"
            className="h-full max-h-full w-full max-w-4xl"
          />
        </div>

        <div className="shrink-0 space-y-3 pt-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
            {teachingSections.map(renderSection)}
          </div>
          {listSections.map(renderListSection)}
          {slide.focusCallout ? <p className="slide-chalk-pull">{slide.focusCallout}</p> : null}
          {slide.source ? <p className="slide-chalk-body opacity-80">Source: {slide.source}</p> : null}
        </div>
      </div>
    );
  }

  return (
    <div className="slide-chalk-board grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden px-6 py-5 sm:px-9 sm:py-6 lg:px-12 lg:py-7">
      <header className="shrink-0 space-y-1.5">
        <p className="slide-chalk-kicker">{kicker}</p>
        <h2 className="slide-chalk-title text-balance">{slide.title}</h2>
      </header>

      <main
        className={cn(
          "grid min-h-0 content-center gap-5 py-3 lg:py-4",
          hasDiagram || tableSection
            ? "grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-x-12"
            : "grid-cols-1"
        )}
      >
        {tableSection ? (
          <>
            <div className="min-w-0 space-y-4">
              <article className="space-y-2.5">
                <h3
                  className={cn(
                    "slide-chalk-label",
                    emphasisTextClass(tableSection.headingEmphasis) || "text-foreground"
                  )}
                >
                  {tableSection.heading}
                </h3>
                <div className="slide-chalk-table" role="table" aria-label="Sling angle tension multipliers">
                  <div className="slide-chalk-table-head" role="row">
                    <span role="columnheader">Sling Angle</span>
                    <span role="columnheader">Tension Multiplier</span>
                  </div>
                  {tableRows.map((row) => (
                    <div key={row.angle} className="slide-chalk-table-row" role="row">
                      <span role="cell">{row.angle}</span>
                      <span className="slide-chalk-table-value" role="cell">
                        ×{row.multiplier}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
              {!hasDiagram ? otherSections.map(renderSection) : null}
            </div>
            {hasDiagram ? (
              <div className="slide-chalk-diagram-frame flex min-h-[min(32vh,280px)] items-center justify-center overflow-hidden lg:min-h-0">
                <RiggingDiagram id={slide.diagram as RiggingDiagramId} variant="slide-large" className="h-full max-w-none" />
              </div>
            ) : (
              <div className="min-w-0 space-y-4">{otherSections.map(renderSection)}</div>
            )}
          </>
        ) : (
          <>
            <div className="min-w-0 space-y-4">
              {(hasDiagram ? teachingSections : sections).map(renderSection)}
            </div>
            {hasDiagram ? (
              <div className="slide-chalk-diagram-frame flex min-h-[min(32vh,280px)] items-center justify-center overflow-hidden lg:min-h-0">
                <RiggingDiagram id={slide.diagram as RiggingDiagramId} variant="slide-large" className="h-full max-w-none" />
              </div>
            ) : null}
          </>
        )}
      </main>

      <footer className="shrink-0 space-y-2 pt-3">
        {tableSection && hasDiagram
          ? otherSections.map(renderListSection)
          : hasDiagram && !tableSection
            ? listSections.map(renderListSection)
            : null}
        {slide.focusCallout ? <p className="slide-chalk-pull">{slide.focusCallout}</p> : null}
        {slide.summary ? <p className="slide-chalk-formula">{slide.summary}</p> : null}
        {slide.source ? <p className="slide-chalk-body opacity-80">Source: {slide.source}</p> : null}
      </footer>
    </div>
  );
}

function ChainGradeFocusSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const kicker = slide.focusKicker ?? slide.unitLabel;
  const hasImage = Boolean(slide.image);

  if (hasImage && slide.image) {
    return (
      <div className="slide-chain-editorial grid h-full min-h-0 grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,42%)_minmax(0,58%)]">
        <div className="relative z-10 grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] gap-3 overflow-y-auto px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7 lg:pr-4">
          <header className="shrink-0 space-y-2">
            <p className="slide-chain-editorial-kicker">{kicker}</p>
            <h2 className="slide-chain-editorial-title slide-chain-editorial-title-with-image text-balance">
              {slide.title}
            </h2>
            {slide.summary ? <p className="slide-chain-editorial-deck">{slide.summary}</p> : null}
          </header>

          <main className="min-w-0 content-center space-y-4 py-2">
            {sections.map((section) => (
              <ChainGradeSectionList
                key={section.heading}
                section={section}
                splitColumns={section.items.length >= 4}
              />
            ))}
          </main>

          <footer className="shrink-0 space-y-2">
            {slide.focusCallout ? (
              <p className="slide-chain-editorial-pull">&ldquo;{slide.focusCallout}&rdquo;</p>
            ) : null}
          </footer>
        </div>

        <div className="relative z-0 flex min-h-[min(48vh,420px)] flex-col overflow-hidden px-2 py-3 sm:px-3 lg:min-h-0 lg:h-full lg:px-4 lg:py-4 lg:pl-0">
          <div className="flex min-h-0 flex-1 items-center justify-center">
            <SlidePanelImage
              src={slide.image}
              alt={focusSlideImageAlt(slide)}
              priority
              className="relative h-full w-full min-h-[min(46vh,400px)] lg:min-h-0 lg:scale-[1.12]"
              imageClassName="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          {slide.source ? (
            <p className="slide-chain-editorial-source shrink-0 px-2 pb-1 pt-2 text-right lg:px-3">
              Source: {slide.source}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="slide-chain-editorial grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden px-7 py-6 sm:px-11 sm:py-7 lg:px-16 lg:py-8">
      <header className="grid shrink-0 gap-3 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-12">
        <div className="space-y-2">
          <p className="slide-chain-editorial-kicker">{kicker}</p>
          <h2 className="slide-chain-editorial-title text-balance">{slide.title}</h2>
        </div>
        {slide.summary ? <p className="slide-chain-editorial-deck lg:pb-1">{slide.summary}</p> : null}
      </header>

      <main className="grid min-h-0 grid-cols-1 content-center gap-5 py-4 sm:grid-cols-2 sm:gap-x-12 lg:gap-x-20 lg:py-5">
        {sections[0] ? (
          <ChainGradeSectionList section={sections[0]} splitColumns={sections[0].items.length >= 4} />
        ) : null}
        {sections[1] ? (
          <ChainGradeSectionList section={sections[1]} splitColumns={sections[1].items.length >= 4} />
        ) : null}
      </main>

      <footer className="grid shrink-0 gap-2 sm:gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
        {slide.focusCallout ? (
          <p className="slide-chain-editorial-pull">&ldquo;{slide.focusCallout}&rdquo;</p>
        ) : null}
        {slide.source ? <p className="slide-chain-editorial-source lg:text-right">Source: {slide.source}</p> : null}
      </footer>
    </div>
  );
}

function HitchCapacitiesFocusSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const kicker = slide.focusKicker ?? slide.unitLabel;
  const hitchSection =
    sections.find((section) =>
      section.items.some((item) => parseSectionItem(item).label.includes(" · "))
    ) ??
    sections.find((section) => /hitch|rated capacity|configuration/i.test(section.heading)) ??
    sections[0];
  const noteSections = sections.filter((section) => section !== hitchSection);
  const isWideHitchVisual = Boolean(
    slide.image?.includes("rigging/hitch") || slide.image?.includes("rigging/hammerchoke")
  );
  const isChokeAngleTable = Boolean(
    hitchSection && /choke|reduction|angle/i.test(hitchSection.heading)
  );
  const tableColLeft = isChokeAngleTable ? "Angle of Choke" : "Hitch";
  const tableColRight = isChokeAngleTable ? "Reduction Factor*" : "Typical Rated Capacity*";
  const tableAria = isChokeAngleTable ? "Choke angle reduction factors" : "Rated hitch capacities";
  const rememberSection = noteSections.find((section) => /remember|recuerde/i.test(section.heading));
  const detailSections = noteSections.filter((section) => section !== rememberSection);

  const hitchRows =
    hitchSection?.items.map((item) => {
      const parsed = parseSectionItem(item);
      const label = parsed.label;
      const separator = label.lastIndexOf(" · ");
      const hitch = separator >= 0 ? label.slice(0, separator).trim() : label;
      const capacity = separator >= 0 ? label.slice(separator + 3).trim() : "";
      return {
        hitch,
        capacity,
        emphasis: parsed.emphasis,
      };
    }) ?? [];

  const hitchTable = hitchSection ? (
    <div className="min-w-0">
      <h3
        className={cn(
          "slide-focus-section-label",
          emphasisTextClass(hitchSection.headingEmphasis) || "text-foreground"
        )}
      >
        {hitchSection.heading}
      </h3>
      <div
        className="mt-2 overflow-hidden rounded-md border border-border/70"
        role="table"
        aria-label={tableAria}
      >
        <div
          className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-x-3 border-b border-border/70 bg-muted/40 px-3 py-2 text-[0.7rem] font-display font-bold uppercase tracking-wider text-muted-foreground sm:text-xs"
          role="row"
        >
          <span role="columnheader">{tableColLeft}</span>
          <span role="columnheader">{tableColRight}</span>
        </div>
        {hitchRows.map((row) => (
          <div
            key={`${row.hitch}-${row.capacity}`}
            className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-x-3 border-b border-border/50 px-3 py-1.5 last:border-b-0 sm:py-2"
            role="row"
          >
            <span
              className={cn(
                "slide-focus-readable text-sm leading-snug text-foreground/95 lg:text-[0.9375rem]",
                emphasisTextClass(row.emphasis)
              )}
              role="cell"
            >
              {row.hitch}
            </span>
            <span
              className={cn(
                "slide-focus-readable text-sm font-semibold leading-snug text-foreground lg:text-[0.9375rem]",
                emphasisTextClass(row.emphasis)
              )}
              role="cell"
            >
              {row.capacity}
            </span>
          </div>
        ))}
      </div>
    </div>
  ) : null;

  if (isWideHitchVisual) {
    return (
      <div className="slide-hooks-focus grid h-full min-h-0 grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,46%)_minmax(0,1fr)]">
        <div className="flex min-h-0 flex-col gap-3 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-5 lg:pr-4">
          {slide.image ? (
            <div className="slide-white-focus-visual-pile relative flex min-h-[min(28vh,240px)] shrink-0 items-center justify-center overflow-hidden lg:min-h-[min(36vh,320px)] lg:flex-1">
              <SlidePanelImage
                src={slide.image}
                alt={focusSlideImageAlt(slide, slide.image)}
                priority
                className="relative h-full w-full min-h-[min(26vh,220px)] max-h-[min(40vh,360px)] lg:min-h-0 lg:max-h-full"
                imageClassName="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
          ) : null}

          <div className="shrink-0 space-y-3">
            {hitchTable}
            {rememberSection ? <SplitRemovalSectionBlock section={rememberSection} /> : null}
            {slide.focusCallout ? (
              <div className="slide-focus-callout px-3 py-2.5">
                <p className="text-[clamp(0.78rem,1.4vw,0.95rem)] font-display font-bold uppercase leading-snug tracking-wide text-highlight-secondary">
                  {slide.focusCallout}
                </p>
              </div>
            ) : null}
            {slide.source ? (
              <p className="slide-hooks-focus-source text-xs text-muted-foreground sm:text-sm">
                Source: {slide.source}
              </p>
            ) : null}
          </div>
        </div>

        <div className="slide-hooks-focus-copy flex min-h-0 min-w-0 flex-col justify-center gap-3 overflow-y-auto px-4 py-4 sm:gap-3.5 sm:px-5 sm:py-5 lg:px-7 lg:py-5 lg:pr-10">
          <div className="shrink-0 space-y-1.5">
            <p className="slide-focus-kicker">{kicker}</p>
            <h2 className="slide-focus-title slide-focus-title-large text-balance text-foreground">{slide.title}</h2>
            {slide.summary ? (
              <p className="slide-focus-readable text-sm leading-relaxed text-muted-foreground lg:text-base">
                {slide.summary}
              </p>
            ) : null}
          </div>

          {detailSections.map((section) => (
            <SplitRemovalSectionBlock key={section.heading} section={section} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="slide-hooks-focus grid h-full min-h-0 grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,46%)_minmax(0,1fr)]">
      <div className="flex min-h-0 flex-col justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6 lg:pr-3">
        {slide.image ? (
          <div className="slide-white-focus-visual-pile relative flex min-h-[min(34vh,300px)] flex-1 items-center justify-center overflow-hidden lg:min-h-0">
            <SlidePanelImage
              src={slide.image}
              alt={focusSlideImageAlt(slide, slide.image)}
              priority
              className="relative h-full w-full min-h-[min(32vh,280px)] max-h-[min(54vh,480px)] lg:min-h-0 lg:max-h-full lg:scale-[1.04]"
              imageClassName="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        ) : null}
        <div className="shrink-0 space-y-3">
          {slide.focusCallout ? (
            <div className="slide-focus-callout px-3 py-2.5">
              <p className="text-[clamp(0.78rem,1.4vw,0.95rem)] font-display font-bold uppercase leading-snug tracking-wide text-highlight-secondary">
                {slide.focusCallout}
              </p>
            </div>
          ) : null}
          {slide.source ? (
            <p className="slide-hooks-focus-source text-xs text-muted-foreground sm:text-sm">Source: {slide.source}</p>
          ) : null}
        </div>
      </div>

      <div className="slide-hooks-focus-copy flex min-h-0 min-w-0 flex-col justify-center gap-2.5 overflow-y-auto px-4 py-4 sm:gap-3 sm:px-5 sm:py-5 lg:px-6 lg:py-5 lg:pr-9">
        <div className="shrink-0 space-y-1.5">
          <p className="slide-focus-kicker">{kicker}</p>
          <h2 className="slide-focus-title slide-focus-title-large text-balance text-foreground">{slide.title}</h2>
          {slide.summary ? (
            <p className="slide-focus-readable text-sm leading-relaxed text-muted-foreground lg:text-base">
              {slide.summary}
            </p>
          ) : null}
        </div>

        {hitchTable}

        {noteSections.map((section) => (
          <SplitRemovalSectionBlock
            key={section.heading}
            section={section}
            splitColumns={section.items.length >= 4}
          />
        ))}
      </div>
    </div>
  );
}

function usesHitchCapacitiesLayout(slide: CompetencySlide) {
  if (!slide.image) return false;
  const isHitchVisual =
    slide.image.includes("rigging/webslingtag") ||
    slide.image.includes("rigging/hitch") ||
    slide.image.includes("rigging/hammerchoke");
  if (!isHitchVisual) return false;
  return Boolean(
    slide.sections?.some((section) =>
      section.items.some((item) => parseSectionItem(item).label.includes(" · "))
    )
  );
}

function usesSplitRemovalLayout(slide: CompetencySlide) {
  return Boolean(
    slide.image &&
      (slide.image.includes("rigging/hooks") ||
        slide.image.includes("rigging/chain") ||
        slide.image.includes("rigging/wirerope") ||
        slide.image.includes("rigging/websling.png") ||
        slide.image.includes("rigging/roundsling") ||
        (slide.image.includes("rigging/hitch") && !usesHitchCapacitiesLayout(slide)))
  );
}

function StrengthRatingsSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const kicker = slide.focusKicker ?? slide.unitLabel;
  const hasDiagram = slide.diagram && isRiggingDiagramId(slide.diagram);
  const isListHeading = (heading: string) =>
    /remember|recuerde|key concept|concepto clave/i.test(heading);
  const teachingSections = sections.filter((section) => !isListHeading(section.heading));
  const listSections = sections.filter((section) => isListHeading(section.heading));

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-5">
      <header className="shrink-0 space-y-1 pb-2">
        <p className="slide-strength-kicker">{kicker}</p>
        <h2 className="slide-strength-title text-balance text-[clamp(1.15rem,2.4vw,1.75rem)]">
          {slide.title}
        </h2>
      </header>

      <main className="grid min-h-0 flex-1 grid-cols-1 content-stretch gap-4 overflow-hidden lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-x-8">
        <div className="flex min-h-0 flex-col justify-center gap-3 overflow-hidden">
          {teachingSections.map((section) => (
            <article key={section.heading} className="space-y-1">
              <h3
                className={cn(
                  "slide-strength-label text-[0.68rem]",
                  emphasisTextClass(section.headingEmphasis) || "text-foreground"
                )}
              >
                {section.heading}
              </h3>
              {section.items.map((item) => {
                const parsed = parseSectionItem(item);
                const isFormula =
                  parsed.label.includes("=") || parsed.label.includes("÷");
                return (
                  <p
                    key={parsed.label}
                    className={cn(
                      isFormula ? "slide-strength-formula text-[clamp(0.88rem,1.4vw,1.05rem)]" : "slide-strength-body text-[clamp(0.78rem,1.15vw,0.9rem)]",
                      emphasisTextClass(parsed.emphasis)
                    )}
                  >
                    {parsed.label}
                  </p>
                );
              })}
            </article>
          ))}

          {listSections.map((section) => (
            <div key={section.heading} className="space-y-1">
              <h3
                className={cn(
                  "slide-strength-label text-[0.68rem]",
                  emphasisTextClass(section.headingEmphasis) || "text-foreground"
                )}
              >
                {section.heading}
              </h3>
              {section.items.map((item) => {
                const parsed = parseSectionItem(item);
                return (
                  <p
                    key={parsed.label}
                    className={cn(
                      "slide-strength-body text-[clamp(0.78rem,1.15vw,0.9rem)]",
                      emphasisTextClass(parsed.emphasis)
                    )}
                  >
                    · {parsed.label}
                  </p>
                );
              })}
            </div>
          ))}
        </div>

        {hasDiagram ? (
          <div className="flex min-h-0 items-center justify-center overflow-hidden">
            <RiggingDiagram
              id={slide.diagram as RiggingDiagramId}
              variant="slide-large"
              className="h-full max-h-full w-full max-w-none"
            />
          </div>
        ) : null}
      </main>

      <footer className="shrink-0 space-y-1 pt-2">
        {slide.focusCallout ? <p className="slide-strength-pull text-[clamp(0.8rem,1.3vw,0.98rem)]">{slide.focusCallout}</p> : null}
        {slide.source ? <p className="slide-strength-body text-xs opacity-75">Source: {slide.source}</p> : null}
      </footer>
    </div>
  );
}

function MaterialWeightsChartSlidePanel({ slide }: { slide: CompetencySlide }) {
  const kicker = slide.focusKicker ?? slide.unitLabel;
  const columns = (slide.sections ?? []).map((section) => {
    const [heading, unit] = section.heading.split(/\s*[|｜]\s*/);
    return {
      heading: heading?.trim() ?? section.heading,
      unit: unit?.trim() ?? "",
      rows: section.items.map((item) => {
        const label = parseSectionItem(item).label;
        const [name, value] = label.split(/\s*[·—–]\s*/);
        return { name: name?.trim() ?? label, value: value?.trim() ?? "" };
      }),
    };
  });

  return (
    <div className="slide-material-weights-chart flex h-full min-h-0 flex-col overflow-hidden px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7 xl:px-12 xl:py-8">
      <header className="shrink-0 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 border-b border-black/35 pb-2.5 mb-3 sm:pb-3 sm:mb-4">
        <div className="space-y-0.5">
          <p className="slide-concrete-math-kicker">{kicker}</p>
          <h2 className="slide-concrete-math-title text-balance">{slide.title}</h2>
        </div>
        {slide.focusCallout ? (
          <p className="slide-concrete-math-pull max-w-xl text-right sm:pb-0.5">{slide.focusCallout}</p>
        ) : null}
      </header>

      <div className="flex min-h-0 flex-1 items-center justify-center">
        <div
          className={cn(
            "grid w-full max-w-[92rem] content-stretch gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-3.5 lg:gap-x-5",
            columns.length >= 4
              ? "grid-cols-2 lg:grid-cols-4"
              : columns.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : columns.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1"
          )}
        >
          {columns.map((column) => (
            <section
              key={column.heading}
              className="slide-material-weights-table flex min-h-0 min-w-0 flex-col border border-black/25 bg-black/[0.03]"
            >
              <div className="slide-material-weights-thead shrink-0 grid grid-cols-[minmax(0,1fr)_auto] gap-2 border-b border-black/35 px-2.5 py-1.5 sm:px-3 sm:py-2">
                <span className="slide-concrete-math-label">{column.heading}</span>
                <span className="slide-concrete-math-label text-right opacity-80">
                  {column.unit || "Value"}
                </span>
              </div>
              <div className="flex min-h-0 flex-1 flex-col justify-between">
                {column.rows.map((row, index) => (
                  <div
                    key={`${column.heading}-${row.name}`}
                    className={cn(
                      "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5",
                      index % 2 === 1 && "bg-black/[0.05]",
                      index < column.rows.length - 1 && "border-b border-black/10"
                    )}
                  >
                    <span className="slide-concrete-math-chart-name">{row.name}</span>
                    <span className="slide-concrete-math-chart-value whitespace-nowrap tabular-nums">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function MadApproachSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const chartSections = sections.slice(0, 2);
  const practiceSections = sections.slice(2);
  const kicker = slide.focusKicker ?? slide.unitLabel;

  const parseChartRow = (item: CompetencySlideSectionItem) => {
    const label = parseSectionItem(item).label;
    const parts = label.split(/\s*[·—–]\s*/).map((part) => part.trim());
    return {
      name: parts[0] ?? label,
      metres: parts[1] ?? "",
      third: parts[2] ?? "",
    };
  };

  return (
    <div className="slide-hydro-mad flex h-full min-h-0 flex-col overflow-hidden px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6">
      <header className="shrink-0 mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black/10 pb-2.5 sm:mb-3.5">
        <div className="min-w-0 flex flex-wrap items-center gap-x-4 gap-y-1">
          <StandardLogo id="bchydro" className="h-7 max-w-[8.5rem] sm:h-8 sm:max-w-[9.5rem]" />
          <div className="min-w-0">
            <p className="slide-focus-kicker">{kicker}</p>
            <h2 className="slide-focus-title text-balance leading-tight">{slide.title}</h2>
          </div>
        </div>
        {slide.focusCallout ? (
          <p className="slide-focus-callout max-w-sm px-3 py-2 text-[clamp(0.82rem,1.25vw,0.95rem)] leading-snug text-highlight">
            {slide.focusCallout}
          </p>
        ) : null}
      </header>

      <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-3 overflow-hidden lg:gap-3.5">
        <div className="grid min-h-0 gap-3 sm:grid-cols-2">
          {chartSections.map((section, sectionIndex) => {
            const [heading] = section.heading.split(/\s*[|｜]\s*/);
            const isDowned = sectionIndex === 1;
            return (
              <section
                key={section.heading}
                className={cn("slide-hydro-table flex min-h-0 flex-col", isDowned && "slide-hydro-table--alert")}
              >
                <div className="slide-hydro-table-head shrink-0 grid grid-cols-[minmax(0,1fr)_auto_auto] gap-2 px-3 py-1.5">
                  <span>{heading?.trim() ?? section.heading}</span>
                  <span className="text-right">m</span>
                  <span className="min-w-[1.75rem] text-right">{isDowned ? "" : "ft"}</span>
                </div>
                <div className="flex min-h-0 flex-1 flex-col justify-evenly">
                  {section.items.map((item, index) => {
                    const row = parseChartRow(item);
                    return (
                      <div
                        key={`${section.heading}-${row.name}`}
                        className={cn(
                          "grid grid-cols-[minmax(0,1fr)_auto_auto] items-baseline gap-2 px-3 py-1",
                          index % 2 === 1 && "bg-black/[0.03]",
                          index < section.items.length - 1 && "border-b border-black/8"
                        )}
                      >
                        <span className="slide-hydro-table-name text-[clamp(0.8rem,1.2vw,0.92rem)] leading-snug">
                          {row.name}
                        </span>
                        <span className="slide-hydro-table-value text-right tabular-nums">{row.metres}</span>
                        <span className="slide-hydro-table-value min-w-[1.75rem] text-right tabular-nums opacity-85">
                          {isDowned ? "" : row.third}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className="grid min-h-0 gap-x-6 gap-y-2 overflow-hidden sm:grid-cols-2">
          {practiceSections.map((section) => (
            <section key={section.heading} className="slide-hydro-practice min-w-0">
              <h3
                className={cn(
                  "slide-focus-section-label text-[0.72rem]",
                  emphasisTextClass(section.headingEmphasis) || "text-foreground"
                )}
              >
                {section.heading}
              </h3>
              <ul className="mt-1 space-y-1">
                {section.items.map((item) => (
                  <FocusFactItem
                    key={parseSectionItem(item).label}
                    item={item}
                    className="text-[clamp(0.8rem,1.2vw,0.92rem)] leading-snug"
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {slide.sourceLinks?.length ? (
        <div className="mt-2.5 shrink-0 border-t border-black/10 pt-2">
          <SlideSourceLinkList
            links={slide.sourceLinks}
            className="slide-focus-readable gap-x-3 text-xs"
          />
        </div>
      ) : null}
    </div>
  );
}

function SignalChartSlidePanel({ slide }: { slide: CompetencySlide }) {
  const sections = slide.sections ?? [];
  const kicker = slide.focusKicker ?? slide.unitLabel;

  return (
    <div className="slide-signal-chart flex h-full min-h-0 flex-col overflow-hidden px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6">
      <header className="shrink-0 mb-3 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-b border-white/15 pb-2.5">
        <div className="min-w-0 space-y-0.5">
          <p className="slide-focus-kicker">{kicker}</p>
          <h2 className="slide-focus-title text-balance leading-tight">{slide.title}</h2>
        </div>
        {slide.focusCallout ? (
          <p className="slide-focus-callout max-w-md px-3 py-2 text-[clamp(0.82rem,1.25vw,0.95rem)] leading-snug text-highlight-secondary">
            {slide.focusCallout}
          </p>
        ) : null}
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-1 content-stretch gap-3 overflow-hidden sm:grid-cols-2 xl:grid-cols-4">
        {sections.map((section) => {
          const isStopCol = /stop|paro/i.test(section.heading);
          return (
            <section
              key={section.heading}
              className={cn(
                "slide-signal-chart-table flex min-h-0 flex-col",
                isStopCol && "slide-signal-chart-table--alert"
              )}
            >
              <div className="slide-signal-chart-head shrink-0 px-3 py-2">
                {section.heading}
              </div>
              <div className="flex min-h-0 flex-1 flex-col justify-evenly">
                {section.items.map((item, index) => {
                  const label = parseSectionItem(item).label;
                  return (
                    <div
                      key={`${section.heading}-${label}`}
                      className={cn(
                        "px-3 py-1.5 text-[clamp(0.78rem,1.15vw,0.92rem)] leading-snug",
                        index % 2 === 1 && "bg-white/[0.04]",
                        index < section.items.length - 1 && "border-b border-white/10"
                      )}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {slide.sourceLinks?.length ? (
        <div className="mt-2.5 shrink-0 border-t border-white/10 pt-2">
          <SlideSourceLinkList
            links={slide.sourceLinks}
            className="slide-focus-readable gap-x-3 text-xs"
          />
        </div>
      ) : null}
    </div>
  );
}

function CompetencyLevelBadge({
  level,
}: {
  level: "basic" | "intermediate" | "advanced";
}) {
  const label = level === "basic" ? "Basic" : level === "intermediate" ? "Int" : "Adv";
  return (
    <span
      className={cn(
        "slide-competency-badge shrink-0",
        level === "basic" && "slide-competency-badge--basic",
        level === "intermediate" && "slide-competency-badge--intermediate",
        level === "advanced" && "slide-competency-badge--advanced"
      )}
    >
      {label}
    </span>
  );
}

function WorkSafeBCBrandMark({
  className,
  logoClassName,
}: {
  className?: string;
  logoClassName?: string;
}) {
  return (
    <Image
      src="/images/logos/worksafebc.png"
      alt="WorkSafeBC"
      width={1024}
      height={193}
      className={cn(
        "h-10 w-auto max-w-[14rem] shrink-0 object-contain object-left sm:h-11 sm:max-w-[16rem]",
        logoClassName,
        className
      )}
    />
  );
}

function CompetencyOverviewSlidePanel({ slide }: { slide: CompetencySlide }) {
  const counts = countCompetenciesByLevel();
  const kicker = slide.focusKicker ?? slide.unitLabel;

  return (
    <div className="slide-competency-matrix flex h-full min-h-0 flex-col overflow-hidden px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7">
      <header className="shrink-0 mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-3 border-b border-white/15 pb-3">
        <div className="min-w-0 space-y-2">
          <WorkSafeBCBrandMark />
          <p className="slide-focus-kicker">{kicker}</p>
          <h2 className="slide-focus-title text-balance leading-tight">{slide.title}</h2>
          {slide.summary ? (
            <p className="slide-focus-readable max-w-3xl text-[clamp(0.9rem,1.4vw,1.05rem)] leading-snug text-muted-foreground">
              {slide.summary}
            </p>
          ) : null}
        </div>
        {slide.focusCallout ? (
          <p className="slide-focus-callout max-w-sm px-3 py-2 text-[clamp(0.85rem,1.3vw,1rem)] leading-snug text-highlight">
            {slide.focusCallout}
          </p>
        ) : null}
      </header>

      <div className="grid min-h-0 flex-1 gap-4 overflow-hidden lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="grid min-h-0 grid-cols-3 gap-3">
          {(
            [
              ["basic", "Covered here", counts.basic],
              ["intermediate", "Next course", counts.intermediate],
              ["advanced", "Later pathway", counts.advanced],
            ] as const
          ).map(([level, caption, count]) => (
            <div key={level} className={cn("slide-competency-stat", `slide-competency-stat--${level}`)}>
              <CompetencyLevelBadge level={level} />
              <p className="slide-competency-stat-value tabular-nums">{count}</p>
              <p className="slide-competency-stat-label">{caption}</p>
            </div>
          ))}
        </div>

        <div className="slide-competency-legend flex min-h-0 flex-col justify-center gap-3 overflow-y-auto">
          <p className="slide-focus-section-label">Legend</p>
          <ul className="space-y-2 text-[clamp(0.85rem,1.3vw,0.98rem)] leading-snug">
            <li className="flex items-start gap-2">
              <CompetencyLevelBadge level="basic" />
              <span>Gold highlight — competency introduced in this Basic course</span>
            </li>
            <li className="flex items-start gap-2">
              <CompetencyLevelBadge level="intermediate" />
              <span>Intermediate badge — leftover for the Intermediate course</span>
            </li>
            <li className="flex items-start gap-2">
              <CompetencyLevelBadge level="advanced" />
              <span>Advanced badge — leftover for the Advanced course</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            {counts.total} competencies · Knowledge → Demonstration → Assessment → Sign-off
          </p>
          {(slide.sections ?? []).map((section) => (
            <div key={section.heading} className="pt-1">
              <h3 className="slide-focus-section-label">{section.heading}</h3>
              <ul className="mt-1 space-y-1">
                {section.items.map((item) => (
                  <FocusFactItem
                    key={parseSectionItem(item).label}
                    item={item}
                    className="text-[clamp(0.82rem,1.2vw,0.92rem)] leading-snug"
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {slide.sourceLinks?.length ? (
        <div className="mt-3 shrink-0 border-t border-white/10 pt-2">
          <SlideSourceLinkList links={slide.sourceLinks} className="slide-focus-readable gap-x-3 text-xs" />
        </div>
      ) : null}
    </div>
  );
}

function CompetencyMatrixSlidePanel({ slide }: { slide: CompetencySlide }) {
  const kicker = slide.focusKicker ?? slide.unitLabel;
  const moduleCodes = (slide.sections ?? []).map((section) => section.heading);
  const groups = LEVELED_COMPETENCY_GROUPS.filter((group) => moduleCodes.includes(group.moduleCode));
  const columnCount = groups.length >= 3 ? 3 : groups.length === 2 ? 2 : 1;

  return (
    <div className="slide-competency-matrix flex h-full min-h-0 flex-col overflow-hidden px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
      <header className="shrink-0 mb-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-white/15 pb-2">
        <div className="min-w-0 flex flex-wrap items-center gap-x-3 gap-y-1">
          <WorkSafeBCBrandMark logoClassName="h-8 max-w-[12rem] sm:h-9 sm:max-w-[13rem]" />
          <div className="min-w-0">
            <p className="slide-focus-kicker">{kicker}</p>
            <h2 className="slide-focus-title text-balance text-[clamp(1.15rem,2vw,1.55rem)] leading-tight">
              {slide.title}
            </h2>
          </div>
        </div>
        {slide.focusCallout ? (
          <p className="slide-focus-callout max-w-sm px-2.5 py-1.5 text-[clamp(0.75rem,1.1vw,0.88rem)] leading-snug text-highlight">
            {slide.focusCallout}
          </p>
        ) : null}
      </header>

      <div
        className={cn(
          "grid min-h-0 flex-1 gap-2.5 overflow-hidden",
          columnCount === 3 && "grid-cols-1 lg:grid-cols-3",
          columnCount === 2 && "grid-cols-1 lg:grid-cols-2",
          columnCount === 1 && "grid-cols-1"
        )}
      >
        {groups.map((group) => (
          <section key={group.moduleCode} className="slide-competency-group flex min-h-0 flex-col overflow-hidden">
            <div className="slide-competency-group-head shrink-0 px-2.5 py-1.5">{group.title}</div>
            <ul className="min-h-0 flex-1 space-y-0 overflow-y-auto">
              {group.competencies.map((item, index) => (
                <li
                  key={item.label}
                  className={cn(
                    "slide-competency-row flex items-start gap-1.5 px-2 py-1",
                    item.level === "basic" && "slide-competency-row--basic",
                    index % 2 === 1 && "bg-white/[0.03]",
                    index < group.competencies.length - 1 && "border-b border-white/8"
                  )}
                >
                  {item.level === "basic" ? null : <CompetencyLevelBadge level={item.level} />}
                  <span
                    className={cn(
                      "min-w-0 flex-1 text-[clamp(0.62rem,0.95vw,0.78rem)] leading-snug",
                      item.level === "basic" && "font-medium text-highlight"
                    )}
                  >
                    {item.label}
                  </span>
                  {item.level === "basic" ? <CompetencyLevelBadge level="basic" /> : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function ConcreteMathSlidePanel({
  slide,
  tone = "concrete",
}: {
  slide: CompetencySlide;
  tone?: "concrete" | "cog";
}) {
  const sections = slide.sections ?? [];
  const kicker = slide.focusKicker ?? slide.unitLabel;
  const hasImage = Boolean(slide.image);
  const hasSecondaryImage = Boolean(slide.secondaryImage);
  const dualCharts = Boolean(hasImage && hasSecondaryImage);
  const imageAlt = focusSlideImageAlt(slide);
  const secondaryAlt = focusSlideImageAlt(slide, slide.secondaryImage);
  const prefix = tone === "cog" ? "slide-cog-math" : "slide-concrete-math";
  const renderSection = (section: NonNullable<CompetencySlide["sections"]>[number]) => {
    const isAnswer = /answer|respuesta/i.test(section.heading);
    return (
      <article key={section.heading} className="space-y-1">
        <h3
          className={cn(
            `${prefix}-label`,
            emphasisTextClass(section.headingEmphasis)
          )}
        >
          {section.heading}
        </h3>
        <div className="space-y-0.5">
          {section.items.map((item, index) => {
            const parsed = parseSectionItem(item);
            const isFormula =
              parsed.label.includes("=") ||
              parsed.label.includes("×") ||
              parsed.label.includes("÷") ||
              parsed.label.includes("π") ||
              parsed.label.includes("≈");
            return (
              <p
                key={`${section.heading}-${index}`}
                className={cn(
                  isAnswer
                    ? `${prefix}-answer`
                    : isFormula
                      ? `${prefix}-formula`
                      : `${prefix}-body`,
                  emphasisTextClass(parsed.emphasis)
                )}
              >
                {parsed.label}
              </p>
            );
          })}
        </div>
      </article>
    );
  };

  if (dualCharts && slide.image && slide.secondaryImage) {
    return (
      <div className="flex h-full min-h-0 flex-col overflow-hidden px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
        <header className="shrink-0 space-y-1 pb-2 sm:pb-3">
          <p className={`${prefix}-kicker`}>{kicker}</p>
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h2 className={`${prefix}-title text-balance`}>{slide.title}</h2>
            {slide.focusCallout ? (
              <p className={`${prefix}-pull max-w-xl text-right`}>{slide.focusCallout}</p>
            ) : null}
          </div>
          {slide.summary ? (
            <p className={`${prefix}-body max-w-3xl`}>{slide.summary}</p>
          ) : null}
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-5">
          <div className={`${prefix}-visual relative min-h-[28%] overflow-hidden rounded-sm lg:min-h-0`}>
            <SlidePanelImage
              src={slide.image}
              alt={imageAlt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0 h-full w-full"
              imageClassName="object-contain p-1.5 sm:p-2"
              priority
            />
          </div>
          <div className={`${prefix}-visual relative min-h-[28%] overflow-hidden rounded-sm lg:min-h-0`}>
            <SlidePanelImage
              src={slide.secondaryImage}
              alt={secondaryAlt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0 h-full w-full"
              imageClassName="object-contain p-1.5 sm:p-2"
              priority
            />
          </div>
        </div>

        {sections.length > 0 ? (
          <div className="mt-3 grid shrink-0 grid-cols-1 gap-3 border-t border-black/15 pt-3 sm:grid-cols-3 sm:gap-5 sm:pt-4">
            {sections.map(renderSection)}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid h-full min-h-0 grid-cols-1 overflow-hidden",
        hasImage && "lg:grid-cols-[minmax(0,50%)_minmax(0,50%)]"
      )}
    >
      {hasImage && slide.image ? (
        <div className={`${prefix}-visual relative min-h-[36%] overflow-hidden lg:min-h-0 lg:h-full`}>
          <SlidePanelImage
            src={slide.image}
            alt={imageAlt}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full"
            imageClassName="object-contain p-2 sm:p-3 lg:p-4"
            priority
          />
        </div>
      ) : null}

      <div
        className={cn(
          "flex h-full min-h-0 min-w-0 flex-col justify-center gap-2.5 overflow-hidden px-4 py-3 sm:gap-3 sm:px-6 sm:py-4 lg:px-7 lg:py-5",
          !hasImage && tone === "cog" && "gap-4 px-6 py-6 sm:gap-5 sm:px-10 sm:py-8 lg:px-14 lg:py-10"
        )}
      >
        <header className={cn("shrink-0 space-y-1", !hasImage && tone === "cog" && "space-y-2")}>
          <p className={`${prefix}-kicker`}>{kicker}</p>
          <h2
            className={cn(
              `${prefix}-title text-balance`,
              !hasImage && tone === "cog" && "text-[clamp(1.5rem,3.2vw,2.35rem)]"
            )}
          >
            {slide.title}
          </h2>
          {!hasImage && slide.summary ? (
            <p className={`${prefix}-body max-w-3xl text-[clamp(0.85rem,1.35vw,1.05rem)]`}>
              {slide.summary}
            </p>
          ) : null}
        </header>

        <main
          className={cn(
            "min-h-0 space-y-2.5 sm:space-y-3",
            !hasImage &&
              tone === "cog" &&
              sections.length >= 2 &&
              "grid grid-cols-1 content-start gap-x-8 gap-y-5 sm:grid-cols-2 sm:space-y-0 lg:gap-x-12 lg:gap-y-6",
            !hasImage && tone === "cog" && sections.length >= 3 && "lg:grid-cols-3"
          )}
        >
          {sections.map(renderSection)}
        </main>

        {slide.focusCallout ? (
          <p className={`${prefix}-pull shrink-0`}>{slide.focusCallout}</p>
        ) : null}
      </div>
    </div>
  );
}

function FocusSlidePanel({ slide }: { slide: CompetencySlide }) {
  if (slide.panelBg === "chain") {
    return <ChainGradeFocusSlidePanel slide={slide} />;
  }

  if (slide.panelBg === "chalk") {
    return <BridleMathChalkSlidePanel slide={slide} />;
  }

  if (slide.panelBg === "concrete" && slide.formula === "material-weights-chart") {
    return <MaterialWeightsChartSlidePanel slide={slide} />;
  }

  if (slide.panelBg === "hydro" && slide.formula === "mad-chart") {
    return <MadApproachSlidePanel slide={slide} />;
  }

  if (slide.panelBg === "signals" && slide.formula === "signal-chart") {
    return <SignalChartSlidePanel slide={slide} />;
  }

  if (slide.panelBg === "competency" && slide.formula === "competency-overview") {
    return <CompetencyOverviewSlidePanel slide={slide} />;
  }

  if (slide.panelBg === "competency" && slide.formula === "competency-matrix") {
    return <CompetencyMatrixSlidePanel slide={slide} />;
  }

  if (slide.panelBg === "concrete") {
    return <ConcreteMathSlidePanel slide={slide} />;
  }

  if (slide.panelBg === "cog") {
    return <ConcreteMathSlidePanel slide={slide} tone="cog" />;
  }

  if (slide.panelBg === "strength") {
    return <StrengthRatingsSlidePanel slide={slide} />;
  }

  if (usesHitchCapacitiesLayout(slide)) {
    return <HitchCapacitiesFocusSlidePanel slide={slide} />;
  }

  if (usesSplitRemovalLayout(slide)) {
    return <SplitRemovalFocusSlidePanel slide={slide} />;
  }

  const sections = slide.sections ?? [];
  const isDenseFocus = sections.length >= 3;
  const imageAlt = focusSlideImageAlt(slide);
  const hasDiagram = slide.diagram && isRiggingDiagramId(slide.diagram);
  const isWhiteFocus = slide.panelBg === "white";
  const isOpposeFocus = slide.panelBg === "oppose";
  const isPersonnelFocus = slide.panelBg === "personnel";
  const isRadioFocus = slide.panelBg === "radio";
  const isSignalsFocus = slide.panelBg === "signals";
  const isCommFocus = isRadioFocus || isSignalsFocus;
  const isBlockHero = Boolean(slide.image?.includes("block"));
  const isCompactLessonPhoto = Boolean(slide.image?.includes("pile-shackle"));
  const isLwRatioFocus = Boolean(slide.image?.includes("l-w"));
  const isLessonPhotoHero = isBlockHero || isCompactLessonPhoto;
  const isCompressFocus = slide.panelBg === "compress";
  const isLargeFocusDiagram =
    slide.panelBg === "compress" || slide.panelBg === "angle" || slide.panelBg === "sine";
  const isLargeImageFocus = isLargeFocusDiagram || isLessonPhotoHero;
  const isCriticalLiftImage = Boolean(slide.image?.includes("crane/criticallift"));
  const imageOnRight = slide.formula === "image-right" || isCriticalLiftImage;
  const hasVisual = Boolean(slide.image) || Boolean(hasDiagram);
  const isPlanningFocus = slide.unit === "planning";
  const isCloseFocus = slide.unit === "close";
  /** Radio / hand-signal slides keep a photo + dense copy — skip oversized planning text. */
  const isFullTextFocus = (isPlanningFocus || isCloseFocus) && !isCommFocus;
  const isSelfdumpSplit = Boolean(slide.image?.includes("selfdump") && sections.length >= 2);
  const isManbasketSplit = Boolean(slide.image?.includes("manbasket") && sections.length >= 2);
  const splitVisualText = Boolean(
    (hasDiagram && (isWhiteFocus || isOpposeFocus) && sections.length >= 2) ||
      isSelfdumpSplit ||
      isManbasketSplit
  );
  const leftSection = isSelfdumpSplit
    ? (sections.find((section) => /common|comunes/i.test(section.heading)) ?? sections[sections.length - 1])
    : isManbasketSplit
      ? (sections.find((section) => /all-up|peso total/i.test(section.heading)) ?? sections[1] ?? sections[0])
      : splitVisualText
        ? sections[0]
        : null;
  const rightSections = leftSection
    ? sections.filter((section) => section !== leftSection)
    : sections;
  const kicker =
    slide.focusKicker ?? (slide.ohrsRef ? `${slide.unitLabel} · OHSR Part 15` : slide.unitLabel);

  return (
    <div
      className={cn(
        "grid h-full min-h-0 shrink-0 grid-cols-1 overflow-hidden",
        !hasVisual
          ? "lg:grid-cols-1"
          : isSignalsFocus
            ? "lg:grid-cols-[minmax(0,46%)_minmax(0,1fr)]"
            : isRadioFocus
            ? "lg:grid-cols-[minmax(0,30%)_minmax(0,1fr)]"
            : isLargeImageFocus
            ? isBlockHero
              ? "lg:grid-cols-[minmax(0,56%)_minmax(0,1fr)]"
              : isCompactLessonPhoto
                ? "lg:grid-cols-[minmax(0,48%)_minmax(0,1fr)]"
                : "lg:grid-cols-[minmax(0,62%)_minmax(0,1fr)]"
            : splitVisualText
              ? "lg:grid-cols-[minmax(0,50%)_minmax(0,1fr)]"
              : imageOnRight
                ? "lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]"
                : "lg:grid-cols-[minmax(0,44%)_minmax(0,1fr)]"
      )}
    >
      {slide.image ? (
        <div
          className={cn(
            "relative flex min-h-[min(36vh,300px)] items-center justify-center lg:min-h-0 lg:h-full",
            imageOnRight && "lg:order-2",
            (isWhiteFocus || isCriticalLiftImage || isCommFocus) &&
              "slide-white-focus-visual bg-white px-4 py-4 sm:px-6 lg:px-8",
            isCommFocus && "bg-transparent px-3 py-3 sm:px-4 lg:px-5",
            isPersonnelFocus && "slide-white-focus-visual px-4 py-4 sm:px-6 lg:px-8",
            (isSelfdumpSplit || isManbasketSplit) &&
              "flex-col items-stretch justify-start gap-2 overflow-hidden px-4 py-3 sm:px-5 lg:px-6 lg:py-4",
            isBlockHero &&
              "slide-white-focus-visual-block min-h-[min(50vh,460px)] px-2 py-2 sm:px-3 lg:px-4 lg:pr-1",
            isCompactLessonPhoto &&
              "slide-white-focus-visual-pile min-h-[min(42vh,380px)] shrink-0 overflow-hidden px-2 py-2 sm:px-3 lg:px-4 lg:pr-2"
          )}
        >
          <div
            className={cn(
              "relative w-full",
              isSelfdumpSplit || isManbasketSplit
                ? "flex min-h-[min(42vh,320px)] flex-1 items-center justify-center lg:min-h-0"
                : "h-full"
            )}
          >
            <SlidePanelImage
              src={slide.image}
              alt={imageAlt}
              priority
              className={cn(
                "relative h-full w-full",
                isWhiteFocus || isPersonnelFocus
                  ? "min-h-[min(34vh,280px)] max-h-full"
                  : "min-h-[min(36vh,300px)] lg:min-h-0",
                (isSelfdumpSplit || isManbasketSplit) && "min-h-[min(38vh,280px)] max-h-full",
                isBlockHero && "min-h-[min(48vh,440px)]",
                isCompactLessonPhoto && "min-h-[min(38vh,340px)] max-h-[min(50vh,420px)] lg:min-h-0 lg:max-h-full"
              )}
              imageClassName={
                isWhiteFocus || isPersonnelFocus || isCriticalLiftImage || isCommFocus
                  ? "object-contain object-center"
                  : "object-cover object-center"
              }
              sizes={
                isBlockHero
                  ? "(max-width: 1024px) 100vw, 56vw"
                  : isCompactLessonPhoto
                    ? "(max-width: 1024px) 100vw, 48vw"
                    : isSignalsFocus
                      ? "(max-width: 1024px) 100vw, 46vw"
                      : isRadioFocus
                        ? "(max-width: 1024px) 100vw, 30vw"
                    : isSelfdumpSplit || isManbasketSplit
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : imageOnRight
                        ? "(max-width: 1024px) 100vw, 42vw"
                        : "(max-width: 1024px) 100vw, 44vw"
              }
            />
          </div>
          {(isSelfdumpSplit || isManbasketSplit) && leftSection ? (
            <div className="shrink-0">
              <h3
                className={cn(
                  "slide-focus-section-label",
                  emphasisTextClass(leftSection.headingEmphasis) || "text-foreground"
                )}
              >
                {leftSection.heading}
              </h3>
              <ul className="mt-1 space-y-1">
                {leftSection.items.map((item) => (
                  <FocusFactItem key={parseSectionItem(item).label} item={item} />
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : hasDiagram ? (
        <div
          className={cn(
            "slide-focus-diagram-frame flex min-h-[min(48vh,420px)] flex-col px-3 py-3 sm:px-4 lg:min-h-0 lg:h-full lg:px-5 lg:py-4",
            isLargeFocusDiagram && "slide-focus-diagram-large",
            isWhiteFocus && "slide-white-focus-visual bg-white px-4 py-4 sm:px-6 lg:px-8",
            isOpposeFocus && "slide-white-focus-visual px-4 py-4 sm:px-6 lg:px-8",
            splitVisualText && "justify-center gap-3 overflow-y-auto lg:px-6 lg:py-5",
            (slide.panelBg === "angle" && "slide-angle-diagram-frame") ||
              (slide.panelBg === "sine" && "slide-sine-diagram-frame")
          )}
        >
          <div
            className={cn(
              "flex min-h-0 items-center justify-center overflow-hidden [&_svg]:h-auto [&_svg]:max-h-full [&_svg]:w-full",
              splitVisualText ? "max-h-[min(52vh,360px)] shrink-0 lg:max-h-[min(58%,420px)]" : "flex-1"
            )}
          >
            <RiggingDiagram
              id={slide.diagram as RiggingDiagramId}
              variant={isLargeFocusDiagram || isWhiteFocus || isOpposeFocus ? "slide-large" : "slide"}
              className={cn(
                isLargeFocusDiagram || isWhiteFocus || isOpposeFocus ? "h-full max-w-none" : "w-full max-w-md"
              )}
            />
          </div>
          {leftSection ? (
            <div className="shrink-0 pt-1">
              <h3
                className={cn(
                  "slide-focus-section-label",
                  emphasisTextClass(leftSection.headingEmphasis) || "text-foreground"
                )}
              >
                {leftSection.heading}
              </h3>
              <ul className="mt-1 space-y-1">
                {leftSection.items.map((item) => (
                  <FocusFactItem key={parseSectionItem(item).label} item={item} />
                ))}
              </ul>
            </div>
          ) : null}
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
          "flex min-h-0 min-w-0 flex-col justify-center gap-3 overflow-hidden px-5 py-5 sm:gap-3.5 sm:px-7 sm:py-6 lg:px-9 lg:py-7",
          imageOnRight && "lg:order-1",
          imageOnRight && "gap-3.5 overflow-hidden py-5 sm:gap-4 sm:py-6 lg:px-10 lg:py-7",
          isFullTextFocus && !imageOnRight && "gap-4 overflow-hidden py-5 sm:gap-5 sm:py-6 lg:px-12 lg:py-8",
          !hasVisual && isFullTextFocus && "mx-auto w-full max-w-6xl justify-center",
          isBlockHero && "slide-focus-text-block px-4 sm:px-5 lg:pl-2 lg:pr-6",
          isCompactLessonPhoto &&
            "slide-focus-text-pile justify-center gap-2.5 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5 lg:pl-4 lg:pr-8 lg:py-5",
          isCommFocus &&
            "slide-radio-copy justify-center gap-2.5 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5 lg:px-7 lg:py-5 lg:pr-9",
          isDenseFocus && !isLwRatioFocus && !isFullTextFocus && !imageOnRight && !isCommFocus && "justify-start gap-2.5 overflow-y-auto py-4",
          isLwRatioFocus && "justify-center gap-2.5 overflow-y-auto py-4",
          splitVisualText && "justify-center gap-4 overflow-y-auto",
          (isSelfdumpSplit || isManbasketSplit) && "justify-center gap-3 overflow-y-auto",
          slide.image?.includes("concretebucket") && "justify-start gap-2.5 overflow-y-auto py-4"
        )}
      >
        <div
          className={cn(
            "space-y-2",
            imageOnRight && "space-y-2.5",
            (isDenseFocus ||
              isSelfdumpSplit ||
              isManbasketSplit ||
              isCommFocus ||
              (isFullTextFocus && !imageOnRight)) &&
              "space-y-1.5"
          )}
        >
          <p className="slide-focus-kicker">{kicker}</p>
          {slide.ohrsRef && !imageOnRight && !isFullTextFocus && !isCommFocus ? (
            <p className="slide-focus-ohrs text-[clamp(2.25rem,5vw,3.75rem)]">OHSR {slide.ohrsRef}</p>
          ) : null}
          {slide.ohrsRef && imageOnRight ? (
            <p className="font-display text-[clamp(1.35rem,2.8vw,1.85rem)] font-extrabold tracking-wide text-highlight">
              OHSR {slide.ohrsRef}
            </p>
          ) : null}
          {slide.ohrsRef && isCommFocus ? (
            <p className="font-display text-[clamp(1.2rem,2.2vw,1.55rem)] font-extrabold tracking-wide text-highlight">
              OHSR {slide.ohrsRef}
            </p>
          ) : null}
          {slide.ohrsRef && isFullTextFocus && !imageOnRight ? (
            <p className="font-display text-[clamp(1.5rem,3.2vw,2.1rem)] font-extrabold tracking-wide text-highlight">
              OHSR {slide.ohrsRef}
            </p>
          ) : null}
          <h2
            className={cn(
              "slide-focus-title text-balance text-foreground",
              isBlockHero && "slide-focus-title-large",
              isCompactLessonPhoto && "slide-focus-title-large",
              imageOnRight && "text-[clamp(1.55rem,3vw,2.15rem)]",
              isCommFocus && "text-[clamp(1.2rem,2.1vw,1.65rem)] leading-[1.15]",
              isFullTextFocus && !imageOnRight && "text-[clamp(1.55rem,3vw,2.25rem)]"
            )}
          >
            {slide.title}
          </h2>
          {slide.summary && !splitVisualText ? (
            <p
              className={cn(
                "slide-focus-readable leading-relaxed text-muted-foreground",
                imageOnRight
                  ? "text-[clamp(0.95rem,1.6vw,1.125rem)] leading-snug"
                  : isCommFocus
                    ? "text-[clamp(0.92rem,1.45vw,1.05rem)] leading-snug"
                    : isFullTextFocus
                    ? "text-[clamp(1rem,1.7vw,1.2rem)] leading-snug"
                    : isDenseFocus
                      ? "text-sm lg:text-[0.95rem]"
                      : "text-base lg:text-lg"
              )}
            >
              {slide.summary}
            </p>
          ) : null}
          {slide.focusCallout ? (
            <div
              className={cn(
                "slide-focus-callout",
                (isDenseFocus ||
                  isSelfdumpSplit ||
                  isManbasketSplit ||
                  imageOnRight ||
                  isFullTextFocus ||
                  isCommFocus) &&
                  "px-3 py-2.5"
              )}
            >
              <p
                className={cn(
                  "text-highlight-secondary",
                  imageOnRight
                    ? "text-[clamp(0.95rem,1.55vw,1.1rem)] leading-snug"
                    : isCommFocus
                      ? "text-[clamp(0.88rem,1.35vw,1rem)] leading-snug"
                      : (isDenseFocus || isSelfdumpSplit || isManbasketSplit || isFullTextFocus) &&
                        "text-[clamp(0.8rem,1.5vw,1rem)]"
                )}
              >
                {slide.focusCallout}
              </p>
            </div>
          ) : null}
        </div>

        {rightSections.length > 0 ? (
          <div
            className={cn(
              "grid min-h-0 gap-3",
              isSelfdumpSplit || isManbasketSplit
                ? "grid-cols-1 gap-3"
                : imageOnRight
                  ? "grid-cols-1 gap-4"
                  : isCommFocus
                    ? "grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 sm:gap-y-4"
                  : isCloseFocus
                    ? rightSections.length >= 4
                      ? "grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4"
                      : "grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-3 sm:gap-y-6"
                    : isPlanningFocus
                      ? "grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2 sm:gap-y-6"
                      : isDenseFocus
                      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                      : isCompactLessonPhoto || splitVisualText
                        ? "grid-cols-1 gap-2"
                        : "grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
            )}
          >
            {rightSections.map((section) => (
              <div key={section.heading} className="min-w-0">
                <h3
                  className={cn(
                    "slide-focus-section-label",
                    imageOnRight && "text-[0.8rem] tracking-[0.12em]",
                    isDenseFocus && "text-[0.7rem]",
                    isCommFocus && "text-[0.78rem] tracking-[0.12em]",
                    isFullTextFocus && !imageOnRight && "text-[0.85rem] tracking-[0.12em]",
                    emphasisTextClass(section.headingEmphasis) || "text-foreground"
                  )}
                >
                  {section.heading}
                </h3>
                <ul className={cn("mt-1.5 space-y-1", imageOnRight && "mt-2 space-y-1.5", isCommFocus && "mt-1.5 space-y-1.5")}>
                  {section.items.map((item) => (
                    <FocusFactItem
                      key={parseSectionItem(item).label}
                      item={item}
                      className={
                        imageOnRight
                          ? "text-[clamp(0.92rem,1.5vw,1.05rem)] leading-snug lg:text-[1.05rem]"
                          : isCommFocus
                            ? "slide-radio-item text-[clamp(0.9rem,1.4vw,1.02rem)] leading-snug"
                          : isFullTextFocus
                            ? "text-[clamp(0.98rem,1.65vw,1.12rem)] leading-snug lg:text-[1.1rem]"
                            : undefined
                      }
                    />
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

function HandDrawnChartGuideOverlay() {
  // Pixel coords match public/images/math/wireropechart.png (1067×1475).
  // Column centers from chart grid: Size ~100, Vertical ~260, Choker ~400,
  // Basket ~556, 60° ~690, 45° ~849, 30° ~993. Angle headers ~y 660.
  return (
    <svg
      className="slide-chart-guide-overlay pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1067 1475"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <marker
          id="chart-guide-arrow"
          markerWidth="12"
          markerHeight="12"
          refX="10"
          refY="6"
          orient="auto"
        >
          <path d="M0,0 L12,6 L0,12 Z" fill="hsl(43 88% 55%)" />
        </marker>
        <marker
          id="chart-guide-arrow-rust"
          markerWidth="12"
          markerHeight="12"
          refX="10"
          refY="6"
          orient="auto"
        >
          <path d="M0,0 L12,6 L0,12 Z" fill="hsl(22 72% 48%)" />
        </marker>
      </defs>

      {/* Size / rope diameter header */}
      <path
        d="M 24,140 C 40,180 70,220 95,255"
        className="slide-chart-guide-stroke"
        markerEnd="url(#chart-guide-arrow)"
      />
      <text x="8" y="125" className="slide-chart-guide-label" transform="rotate(-10 8 125)">
        Size
      </text>

      {/* Vertical hitch header — start here */}
      <ellipse cx="260" cy="270" rx="78" ry="88" className="slide-chart-guide-ring" />
      <path
        d="M 110,95 C 155,130 200,180 235,230"
        className="slide-chart-guide-stroke slide-chart-guide-stroke-accent"
        markerEnd="url(#chart-guide-arrow-rust)"
      />
      <text
        x="20"
        y="85"
        className="slide-chart-guide-label slide-chart-guide-label-accent"
        transform="rotate(-6 20 85)"
      >
        Start · Vertical
      </text>

      {/* Choker hitch header */}
      <path
        d="M 355,80 C 370,130 385,180 398,230"
        className="slide-chart-guide-stroke"
        markerEnd="url(#chart-guide-arrow)"
      />
      <text x="310" y="68" className="slide-chart-guide-label" transform="rotate(-4 310 68)">
        Choker
      </text>

      {/* Basket hitch header */}
      <path
        d="M 575,75 C 570,130 565,180 556,230"
        className="slide-chart-guide-stroke"
        markerEnd="url(#chart-guide-arrow)"
      />
      <text x="530" y="62" className="slide-chart-guide-label" transform="rotate(4 530 62)">
        Basket
      </text>

      {/* Angle columns — brace under 60° / 45° / 30° headers */}
      <path d="M 665,640 C 760,665 880,665 1015,640" className="slide-chart-guide-brace" />
      <path
        d="M 860,130 C 870,280 870,420 855,610"
        className="slide-chart-guide-stroke slide-chart-guide-stroke-accent"
        markerEnd="url(#chart-guide-arrow-rust)"
      />
      <text x="720" y="115" className="slide-chart-guide-label slide-chart-guide-label-accent">
        Angles 60° · 45° · 30°
      </text>

      {/* Read across a capacity row */}
      <path d="M 90,730 L 1020,730" className="slide-chart-guide-brace" />
      <path
        d="M 35,840 C 45,790 65,755 88,735"
        className="slide-chart-guide-stroke"
        markerEnd="url(#chart-guide-arrow)"
      />
      <text x="10" y="870" className="slide-chart-guide-label" transform="rotate(-10 10 870)">
        Read across
      </text>

      {/* Bottom notes: ×¾ choker / ×2 double basket */}
      <rect x="595" y="1075" width="445" height="265" rx="12" className="slide-chart-guide-box" />
      <path
        d="M 920,990 C 890,1020 850,1050 820,1075"
        className="slide-chart-guide-stroke slide-chart-guide-stroke-accent"
        markerEnd="url(#chart-guide-arrow-rust)"
      />
      <text x="770" y="975" className="slide-chart-guide-label slide-chart-guide-label-accent">
        × 0.75 · × 2
      </text>
    </svg>
  );
}

function CoverSlidePanel({ slide }: { slide: CompetencySlide }) {
  const imageSrc = slide.image ?? "/images/luffer.png";
  const seriesLabel = slide.focusKicker ?? "Basic Rigging Info in Course";
  const isChartGuideCover = Boolean(
    slide.cover && slide.image && (slide.formula === "chart-guide" || slide.image.includes("wireropechart"))
  );

  if (isChartGuideCover && slide.image) {
    return (
      <div className="slide-cover-panel slide-cover-panel--chart-guide relative grid h-full min-h-0 grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1.55fr)]">
        <div className="slide-cover-copy relative z-10 flex h-full min-h-0 flex-col justify-center gap-3 overflow-hidden px-5 py-5 sm:gap-3.5 sm:px-7 sm:py-6 lg:px-8 lg:py-6">
          <div className="max-w-md space-y-2.5 sm:space-y-3">
            <span className="slide-cover-rule" aria-hidden />
            <p className="slide-cover-kicker">{seriesLabel}</p>
            <h1 className="slide-cover-title text-balance">{slide.unitLabel}</h1>
            <p className="slide-cover-course-name text-balance">{slide.title}</p>
            {slide.summary ? (
              <p className="slide-cover-subtitle text-pretty">{slide.summary}</p>
            ) : null}
          </div>
          {slide.bullets.length > 0 ? (
            <ul className="slide-cover-features max-w-md space-y-1.5">
              {slide.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="relative flex min-h-0 items-stretch justify-center p-1.5 sm:p-2 lg:p-2 lg:pl-0">
          <div className="slide-chart-guide-frame relative h-full w-auto max-w-full overflow-hidden aspect-[1067/1475]">
            <Image
              src={slide.image}
              alt={focusSlideImageAlt(slide, slide.image)}
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 72vw"
            />
            <HandDrawnChartGuideOverlay />
          </div>
        </div>
      </div>
    );
  }

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
          </div>
          <h1 className="slide-cover-title text-balance">{slide.unitLabel}</h1>
          <p className="slide-cover-course-name text-balance">{slide.title}</p>
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

  if (slide.cover && slide.image) {
    return <CoverSlidePanel slide={slide} />;
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
  const indexRef = useRef(index);
  const viewportWRef = useRef(0);
  const totalRef = useRef(total);
  const controlsOpenRef = useRef(controlsOpen);
  const ignoreScrollRef = useRef(false);
  const skipNavScrollRef = useRef(false);
  const scrollSettleTimer = useRef<number | null>(null);

  const slide = slides[index];
  indexRef.current = index;
  totalRef.current = total;
  controlsOpenRef.current = controlsOpen;

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
      if (w > 0) {
        viewportWRef.current = w;
        setViewportW(w);
      }
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(outer);
    return () => ro.disconnect();
  }, []);

  const scrollToIndex = useCallback((nextIndex: number, behavior: ScrollBehavior = "smooth") => {
    const scroller = viewportRef.current;
    const width = viewportWRef.current;
    if (!scroller || width <= 0) return;
    const target = nextIndex * width;
    if (Math.abs(scroller.scrollLeft - target) < 1) return;

    ignoreScrollRef.current = true;
    if (scrollSettleTimer.current != null) window.clearTimeout(scrollSettleTimer.current);
    scroller.scrollTo({ left: target, behavior });
    scrollSettleTimer.current = window.setTimeout(() => {
      ignoreScrollRef.current = false;
      scrollSettleTimer.current = null;
    }, behavior === "smooth" ? 480 : 80);
  }, []);

  useLayoutEffect(() => {
    if (skipNavScrollRef.current) {
      skipNavScrollRef.current = false;
      return;
    }
    scrollToIndex(index, isAudience ? "instant" : "smooth");
  }, [index, isAudience, scrollToIndex]);

  useLayoutEffect(() => {
    if (viewportW <= 0) return;
    const scroller = viewportRef.current;
    if (!scroller) return;
    scroller.scrollLeft = indexRef.current * viewportW;
  }, [viewportW]);

  const commitIndexFromScroll = useCallback((nextIndex: number) => {
    const clamped = Math.max(0, Math.min(totalRef.current - 1, nextIndex));
    const scroller = viewportRef.current;
    const width = viewportWRef.current;

    if (clamped === indexRef.current) {
      if (width > 0 && scroller && Math.abs(scroller.scrollLeft - clamped * width) > 1) {
        scroller.scrollTo({ left: clamped * width, behavior: "smooth" });
      }
      ignoreScrollRef.current = false;
      return;
    }

    if (width > 0 && scroller) {
      scroller.scrollTo({ left: clamped * width, behavior: "smooth" });
    }
    skipNavScrollRef.current = true;
    ignoreScrollRef.current = true;
    setIndex(clamped);
    window.setTimeout(() => {
      ignoreScrollRef.current = false;
    }, 80);
  }, []);

  const syncIndexFromScroll = useCallback(() => {
    if (isAudience || ignoreScrollRef.current) return;
    const scroller = viewportRef.current;
    const width = viewportWRef.current;
    if (!scroller || width <= 0) return;
    commitIndexFromScroll(Math.round(scroller.scrollLeft / width));
  }, [commitIndexFromScroll, isAudience]);

  // Native horizontal swipe even when the finger starts on a vertically scrollable slide.
  useEffect(() => {
    const scroller = viewportRef.current;
    if (!scroller || isAudience) return;

    let startX = 0;
    let startY = 0;
    let startScroll = 0;
    let axis: "x" | "y" | null = null;
    let tracking = false;

    const onTouchStart = (event: TouchEvent) => {
      if (controlsOpenRef.current) return;
      if (event.touches.length !== 1) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea, select, label, [data-no-swipe]")) return;
      const touch = event.touches[0];
      if (!touch) return;
      tracking = true;
      axis = null;
      startX = touch.clientX;
      startY = touch.clientY;
      startScroll = scroller.scrollLeft;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!tracking || event.touches.length !== 1) return;
      const touch = event.touches[0];
      if (!touch) return;
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      if (axis == null) {
        if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
        axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }

      if (axis !== "x") return;

      event.preventDefault();
      ignoreScrollRef.current = true;
      scroller.scrollLeft = startScroll - dx;
    };

    const finish = () => {
      if (!tracking) return;
      tracking = false;
      if (axis !== "x") {
        axis = null;
        return;
      }
      axis = null;
      const width = viewportWRef.current;
      if (width <= 0) {
        ignoreScrollRef.current = false;
        return;
      }
      commitIndexFromScroll(Math.round(scroller.scrollLeft / width));
    };

    scroller.addEventListener("touchstart", onTouchStart, { passive: true, capture: true });
    scroller.addEventListener("touchmove", onTouchMove, { passive: false, capture: true });
    scroller.addEventListener("touchend", finish, { capture: true });
    scroller.addEventListener("touchcancel", finish, { capture: true });
    scroller.addEventListener("scrollend", syncIndexFromScroll);

    return () => {
      scroller.removeEventListener("touchstart", onTouchStart, true);
      scroller.removeEventListener("touchmove", onTouchMove, true);
      scroller.removeEventListener("touchend", finish, true);
      scroller.removeEventListener("touchcancel", finish, true);
      scroller.removeEventListener("scrollend", syncIndexFromScroll);
    };
  }, [commitIndexFromScroll, isAudience, syncIndexFromScroll]);

  useEffect(() => {
    return () => {
      if (scrollSettleTimer.current != null) window.clearTimeout(scrollSettleTimer.current);
    };
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
          className={cn(
            "relative min-h-0 flex-1",
            isAudience
              ? "overflow-hidden"
              : "snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            activePanelBg || "bg-background"
          )}
        >
          {!deckReady ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center text-sm text-muted-foreground">
              Preparing slides…
            </div>
          ) : null}

          <div
            className={cn("flex h-full min-h-0 flex-row", !deckReady && "opacity-0")}
            style={{ width: viewportW > 0 ? viewportW * total : "100%" }}
          >
            {slides.map((s, i) => (
              <div
                key={s.id}
                style={{ width: viewportW > 0 ? viewportW : "100%" }}
                className={cn(
                  "h-full min-h-0 shrink-0 snap-start snap-always",
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
