import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      "A proctored written test covering regulations, equipment, rigging math, communication, lift planning, and safety procedures covered in the course modules.",
  },
  {
    icon: HardHat,
    title: "Practical evaluation",
    description:
      "Hands-on assessment of rigging skills including equipment inspection, sling configuration, load control, signaling, and safe work practices in a controlled environment.",
  },
  {
    icon: Users,
    title: "Evaluator review",
    description:
      "A qualified evaluator reviews your written and practical performance, confirms competency against course standards, and documents the outcome.",
  },
  {
    icon: CheckCircle2,
    title: "Certification decision",
    description:
      "Successful candidates receive certification documentation. Unsuccessful candidates receive feedback on areas to improve before re-evaluation.",
  },
];

export default function CertificationPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-foreground">Certification</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">In-person evaluation</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Certification</h1>
        <p className="text-lg text-muted-foreground">
          The official rigging certification test is conducted in person. Online lessons and the practice test prepare you —
          but certification requires a written exam and practical evaluation with a qualified assessor.
        </p>
      </header>

      <div className="mt-8 rounded-lg border border-border bg-muted/40 p-5">
        <p className="font-medium text-foreground">
          The practice test on this site is for study only.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Practice scores do not count toward certification. Use them to identify knowledge gaps before your scheduled
          in-person evaluation.
        </p>
      </div>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold">Evaluation process</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {evaluationSteps.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-border/80">
              <CardHeader>
                <Icon className="mb-2 h-7 w-7 text-primary" />
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold">Before your evaluation</h2>
        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
          <li>Complete all course modules, paying special attention to regulations, inspection, and lift planning.</li>
          <li>Use the practice test repeatedly until you consistently score above the pass threshold.</li>
          <li>Review appendices for hand signals, rigging math, and equipment identification.</li>
          <li>Confirm your evaluation date, location, and required PPE with your training coordinator.</li>
        </ul>
      </section>

      <section className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/lessons"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Review lessons
        </Link>
        <Link
          href="/practice-test"
          className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          Take practice test
        </Link>
      </section>
    </article>
  );
}
