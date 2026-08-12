import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CompetencySlideDeck } from "@/components/presentation/competency-slide-deck";
import { getSlideCourse, slideIndexFromQuery } from "@/lib/competency-course";
import { isTrackAvailable, parseTrackSlug } from "@/lib/tracks";
import { ccaFetch } from "@/lib/cca/proxy";
import { getCcaSession } from "@/lib/cca/session";
import type { ClassDay } from "@/lib/cca/client";

type PageProps = {
  searchParams: Promise<{
    slide?: string;
    unit?: string;
    last?: string;
    track?: string;
    export?: string;
    reveal?: string;
    follow?: string;
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
  const session = await getCcaSession();

  let publishClassDayId: string | null = null;
  let followClassDayId: string | null = null;
  if (sp.follow === "1" && session?.role === "attendee") {
    followClassDayId = session.classDayId;
  } else if (session?.role === "instructor" && sp.export !== "1") {
    try {
      const res = await ccaFetch("/class-days/current");
      if (res.ok) {
        const day = (await res.json()) as ClassDay;
        publishClassDayId = day.id;
      }
    } catch {
      publishClassDayId = null;
    }
  }

  return (
    <CompetencySlideDeck
      key={`present-${track}-${initialSlideIndex}-${exportCapture}-${revealAnswers}-${followClassDayId ?? ""}`}
      courseSlug={track}
      initialSlideIndex={initialSlideIndex}
      exportCapture={exportCapture}
      revealAnswers={revealAnswers}
      publishClassDayId={publishClassDayId}
      followClassDayId={followClassDayId}
    />
  );
}
