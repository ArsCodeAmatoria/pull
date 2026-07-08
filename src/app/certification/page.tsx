import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { CheckCircle2, ClipboardList, HardHat, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "In-person rigging certification evaluation — written exam and practical assessment conducted by a qualified evaluator.",
};

const evaluationSteps = [
  {
    icon: ClipboardList,
    title: "Written examination",
    description:
      "Proctored written test covering regulations, equipment, rigging math, communication, lift planning, and safety.",
  },
  {
    icon: HardHat,
    title: "Practical evaluation",
    description:
      "Hands-on assessment of inspection, sling configuration, load control, signaling, and safe work practices.",
  },
  {
    icon: Users,
    title: "Evaluator review",
    description: "Qualified evaluator reviews performance and documents the outcome.",
  },
  {
    icon: CheckCircle2,
    title: "Certification decision",
    description: "Successful candidates receive certification. Others get feedback for re-evaluation.",
  },
];

export default function CertificationPage() {
  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground">
        <Link href="/">Home</Link> / <span className="text-foreground">Certification</span>
      </nav>

      <header className="space-y-4 pb-8">
        <Badge>In-person evaluation</Badge>
        <h1>Certification</h1>
        <p className="text-lg text-muted-foreground">
          The official test is in person — written exam and practical evaluation with a qualified assessor.
        </p>
      </header>

      <div className="space-y-3 bg-foreground/5 p-5">
        <p className="text-lg font-semibold">The practice test is for study only.</p>
        <p className="text-muted-foreground">Practice scores do not count toward certification.</p>
      </div>

      <section className="space-y-8 py-10">
        <h2>Evaluation process</h2>
        {evaluationSteps.map(({ icon: Icon, title, description }) => (
          <div key={title} className="space-y-3">
            <Icon className="h-8 w-8" />
            <h3 className="text-xl">{title}</h3>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4 py-10">
        <h2>Before your evaluation</h2>
        <ul className="list-inside list-disc space-y-3 text-lg text-muted-foreground">
          <li>Complete all course modules.</li>
          <li>Practice until you consistently pass the threshold.</li>
          <li>Review appendices for signals, math, and equipment ID.</li>
          <li>Confirm date, location, and PPE with your coordinator.</li>
        </ul>
      </section>

      <div className="flex flex-col gap-3 pb-10">
        <Button asChild size="lg">
          <Link href="/lessons">Review lessons</Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/practice-test">Take practice test</Link>
        </Button>
      </div>
    </PageShell>
  );
}
