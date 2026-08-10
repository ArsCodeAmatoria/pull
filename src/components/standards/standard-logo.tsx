import Image from "next/image";
import { cn } from "@/lib/utils";
import type { StandardLogoId } from "@/lib/standards-links";

type Props = {
  readonly id: StandardLogoId;
  readonly className?: string;
};

/** Wordmark in /public/images/logos/ — swap files for official artwork. */
export function StandardLogo({ id, className }: Props) {
  const colored = id === "bchydro" || id === "worksafebc";
  const src = id === "worksafebc" ? `/images/logos/${id}.png` : `/images/logos/${id}.svg`;
  return (
    <Image
      src={src}
      alt=""
      width={id === "worksafebc" ? 240 : colored ? 140 : 72}
      height={id === "worksafebc" ? 45 : colored ? 42 : 16}
      className={cn(
        "h-5 w-auto max-w-[4.75rem] shrink-0 object-contain object-left",
        colored ? "h-7 max-w-[8.5rem]" : "dark:invert",
        id === "worksafebc" && "h-8 max-w-[12rem]",
        className
      )}
    />
  );
}
