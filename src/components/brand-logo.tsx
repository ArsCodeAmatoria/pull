import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  readonly className?: string;
  readonly priority?: boolean;
};

export function BrandLogo({ className, priority }: Props) {
  return (
    <Image
      src="/images/logos/logo.png"
      alt="Ridgetechone"
      width={1254}
      height={1254}
      priority={priority}
      unoptimized
      className={cn("h-10 w-auto object-contain object-left", className)}
    />
  );
}
