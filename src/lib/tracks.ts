import questionsData from "@/data/questions.json";
import proQuestionsData from "@/data/pro-questions.json";
import type { Question } from "@/types/question";

export const TRACK_SLUGS = ["rigger-competency", "intermediate", "pro-rigging"] as const;

export type TrackSlug = (typeof TRACK_SLUGS)[number];

export const DEFAULT_TRACK: TrackSlug = "rigger-competency";

export const TRACK_AVAILABLE: Record<TrackSlug, boolean> = {
  "rigger-competency": true,
  intermediate: false,
  "pro-rigging": false,
};

export function isTrackAvailable(track: TrackSlug): boolean {
  return TRACK_AVAILABLE[track];
}

export function parseTrackSlug(value?: string | null): TrackSlug {
  if (value === "pro-rigging" || value === "pro") return "pro-rigging";
  if (value === "intermediate") return "intermediate";
  return DEFAULT_TRACK;
}

export function isTrackSlug(value: string): value is TrackSlug {
  return (TRACK_SLUGS as readonly string[]).includes(value);
}

export function slidesIndexHref(track: TrackSlug): string {
  return `/slides?track=${track}`;
}

export function slidesPresentHref(track: TrackSlug, params?: { unit?: string; slide?: string }): string {
  const search = new URLSearchParams({ track });
  if (params?.unit) search.set("unit", params.unit);
  if (params?.slide) search.set("slide", params.slide);
  return `/slides/present?${search.toString()}`;
}

export function slidesCastHref(track: TrackSlug): string {
  return `/slides/cast?track=${track}`;
}

export function practiceTestHref(track: TrackSlug): string {
  return `/practice-test?track=${track}`;
}

export function getTrackQuestions(track: TrackSlug): Question[] {
  if (track === "intermediate") return proQuestionsData as Question[];
  if (track === "pro-rigging") return [];
  return questionsData as Question[];
}
