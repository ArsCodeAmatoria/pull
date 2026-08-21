import { cn } from "@/lib/utils";

/** Full-bleed width with KERN-style page padding. */
export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full px-[var(--pad)]", className)}>{children}</div>;
}
