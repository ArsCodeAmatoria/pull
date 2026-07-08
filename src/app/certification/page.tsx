import type { Metadata } from "next";
import { CertificationPageContent } from "@/components/certification/certification-page-content";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "Open course material on pull. Certification must be completed in person by a Qualified Certifier.",
};

export default function CertificationPage() {
  return <CertificationPageContent />;
}
