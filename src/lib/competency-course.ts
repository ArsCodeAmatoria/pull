import courseData from "@/data/competency-slides.json";

export type CompetencySlideSectionItem =
  | string
  | {
      label: string;
      href?: string | null;
      logo?: string | null;
    };

export type CompetencySlideSection = {
  heading: string;
  items: CompetencySlideSectionItem[];
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
  sections: CompetencySlideSection[] | null;
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

export const COMPETENCY_COURSE = courseData as CompetencyCourse;

export function getCompetencySlide(index: number): CompetencySlide | undefined {
  return COMPETENCY_COURSE.slides[index];
}

export function getUnitForSlide(slideId: number): CompetencyUnit | undefined {
  return COMPETENCY_COURSE.units.find((u) => slideId >= u.slideStart && slideId <= u.slideEnd);
}

export function slideIndexFromQuery(params: {
  slide?: string;
  unit?: string;
  last?: string;
}): number {
  if (params.last === "1") return COMPETENCY_COURSE.slideCount - 1;
  if (params.slide) {
    const n = parseInt(params.slide, 10);
    if (Number.isFinite(n)) return Math.max(0, Math.min(COMPETENCY_COURSE.slideCount - 1, n - 1));
  }
  if (params.unit) {
    const unit = COMPETENCY_COURSE.units.find((u) => u.id === params.unit);
    if (unit) return unit.slideStart - 1;
  }
  return 0;
}
