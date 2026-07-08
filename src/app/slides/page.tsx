import type { Metadata } from "next";
import { SlidesIndexContent } from "@/components/slides/slides-index-content";
import { getSlideCourse } from "@/lib/competency-course";
import { parseTrackSlug } from "@/lib/tracks";

type PageProps = {
  searchParams: Promise<{ track?: string }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams;
  const track = parseTrackSlug(sp.track);
  const course = getSlideCourse(track);
  return {
    title: "Lessons",
    description: course.description,
  };
}

export default async function SlidesIndexPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const track = parseTrackSlug(sp.track);

  return <SlidesIndexContent track={track} />;
}
