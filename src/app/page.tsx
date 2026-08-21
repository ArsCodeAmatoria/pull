import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";

export const metadata: Metadata = {
  title: "Pull — 92 Competencies",
  description:
    "Educational material on the 92 rigger competencies WorkSafeBC is putting forward. Always follow current WorkSafeBC regulations and standards, and manufacturers' instructions.",
};

export default function HomePage() {
  return <HomePageContent />;
}
