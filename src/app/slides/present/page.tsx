import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CompetencySlideDeck } from "@/components/presentation/competency-slide-deck";
import { getSlideCourse, slideIndexFromQuery } from "@/lib/competency-course";
import { isTrackAvailable, parseTrackSlug } from "@/lib/tracks";

type PageProps = {
  searchParams: Promise<{
    slide?: string;
    unit?: string;
    last?: string;
    track?: string;
    export?: string;
    reveal?: string;
  }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams;
  const track = parseTrackSlug(sp.track);
  const course = getSlideCourse(track);
  return {
    title: `Present · ${course.title}`,
    description: course.description,
  };
}

export default async function SlidesPresentPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const track = parseTrackSlug(sp.track);

  if (!isTrackAvailable(track)) {
    redirect("/");
  }

  const initialSlideIndex = slideIndexFromQuery(track, sp);
  const exportCapture = sp.export === "1";
  const revealAnswers = sp.reveal === "1";

  return (
    <CompetencySlideDeck
      key={`present-${track}-${initialSlideIndex}-${exportCapture}-${revealAnswers}`}
      courseSlug={track}
      initialSlideIndex={initialSlideIndex}
      exportCapture={exportCapture}
      revealAnswers={revealAnswers}
    />
  );
}
