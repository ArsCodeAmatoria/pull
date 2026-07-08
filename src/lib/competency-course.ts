import competencyData from "@/data/competency-slides.json";
import proData from "@/data/pro-rigging-slides.json";
import type { TrackSlug } from "@/lib/tracks";
import { DEFAULT_TRACK } from "@/lib/tracks";

export type SlideEmphasis = "yellow" | "red";

export type CompetencySlideSectionItem =
  | string
  | {
      label: string;
      href?: string | null;
      logo?: string | null;
      emphasis?: SlideEmphasis | null;
    };

export type CompetencySlideSection = {
  heading: string;
  headingEmphasis?: SlideEmphasis | null;
  items: CompetencySlideSectionItem[];
};

export type SlidePanelBg = "gray" | "warm" | "cool" | "bc" | "white" | "compress";

export type HeroStatCallout = {
  value: string;
  label: string;
  emphasis?: SlideEmphasis | null;
  href?: string | null;
};

export type SlideSourceLink = {
  label: string;
  href: string;
};

export type CompetencySlide = {
  id: number;
  unit: string;
  unitLabel: string;
  title: string;
  summary: string;
  bullets: string[];
  ohrsRef: string | null;
  source: string | null;
  chartHref: string | null;
  lessonHref: string | null;
  formula: string | null;
  diagram: string | null;
  image: string | null;
  cover: boolean;
  hero: boolean;
  critical: boolean;
  focus: boolean;
  sections: CompetencySlideSection[] | null;
  panelBg: SlidePanelBg | null;
  heroStats: HeroStatCallout[] | null;
  sourceLinks: SlideSourceLink[] | null;
  focusKicker: string | null;
  focusCallout: string | null;
};

export type CompetencyUnit = {
  id: string;
  label: string;
  durationMin?: number;
  slideStart: number;
  slideEnd: number;
};

export type CompetencyCourse = {
  slug: string;
  title: string;
  description: string;
  sourceUrl: string;
  totalDurationMin?: number;
  slideCount: number;
  units: CompetencyUnit[];
  slides: CompetencySlide[];
};

const COURSES: Record<TrackSlug, CompetencyCourse> = {
  "rigger-competency": competencyData as CompetencyCourse,
  "pro-rigging": proData as CompetencyCourse,
};

/** @deprecated Use getSlideCourse(track) */
export const COMPETENCY_COURSE = COURSES[DEFAULT_TRACK];

export function getSlideCourse(track: TrackSlug): CompetencyCourse {
  return COURSES[track];
}

export function getCompetencySlide(track: TrackSlug, index: number): CompetencySlide | undefined {
  return getSlideCourse(track).slides[index];
}

export function getUnitForSlide(track: TrackSlug, slideId: number): CompetencyUnit | undefined {
  return getSlideCourse(track).units.find((u) => slideId >= u.slideStart && slideId <= u.slideEnd);
}

export function slideIndexFromQuery(
  track: TrackSlug,
  params: {
    slide?: string;
    unit?: string;
    last?: string;
  }
): number {
  const course = getSlideCourse(track);
  if (params.last === "1") return course.slideCount - 1;
  if (params.slide) {
    const n = parseInt(params.slide, 10);
    if (Number.isFinite(n)) return Math.max(0, Math.min(course.slideCount - 1, n - 1));
  }
  if (params.unit) {
    const unit = course.units.find((u) => u.id === params.unit);
    if (unit) return unit.slideStart - 1;
  }
  return 0;
}
