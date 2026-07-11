import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";

export const metadata: Metadata = {
  title: "pull — Tower Crane Rigger",
  description:
    "Open BC tower crane rigger education — lessons, practice tests, and certification by a Qualified Certifier.",
};

export default function HomePage() {
  return <HomePageContent />;
}
