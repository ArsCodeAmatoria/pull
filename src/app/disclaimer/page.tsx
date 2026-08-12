import type { Metadata } from "next";
import { CertificationPageContent } from "@/components/certification/certification-page-content";

export const metadata: Metadata = {
  title: "Not certification",
  description: "Ridgetechone is an instructor teaching aid. Continuing competency assessment records are not certification.",
};

export default function DisclaimerPage() {
  return <CertificationPageContent />;
}
