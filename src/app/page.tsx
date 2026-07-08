import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";

export const metadata: Metadata = {
  title: "pull — Rigging Course",
  description:
    "Crane rigging and advanced rigging education — structured lessons, practice tests, and in-person certification.",
};

export default function HomePage() {
  return <HomePageContent />;
}
