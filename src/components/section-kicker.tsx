import { cn } from "@/lib/utils";

export function SectionKicker({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <p className={cn("kicker", className)}>
      <span className="mono">{children}</span>
    </p>
  );
}
