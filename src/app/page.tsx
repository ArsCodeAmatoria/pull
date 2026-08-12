import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";

export const metadata: Metadata = {
  title: "Ridgetechone — Teaching Aid",
  description:
    "Instructor teaching aid — classroom slides, practice quizzes, and continuing competency assessment records. Not certification.",
};

export default function HomePage() {
  return <HomePageContent />;
}
