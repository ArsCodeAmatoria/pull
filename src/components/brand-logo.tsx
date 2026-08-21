import { Frown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  readonly className?: string;
};

export function BrandLogo({ className }: Props) {
  return <Frown aria-hidden className={cn("h-10 w-10", className)} />;
}
