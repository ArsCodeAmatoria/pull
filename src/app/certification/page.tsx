import type { Metadata } from "next";
import { CertificationPageContent } from "@/components/certification/certification-page-content";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "In-person rigging certification evaluation — written exam and practical assessment conducted by a qualified evaluator.",
};

export default function CertificationPage() {
  return <CertificationPageContent />;
}
