"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/** Keeps the punk site look on, except live presenter/cast decks. */
export function SiteLook() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const onDeck = pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast");
    if (onDeck) {
      document.body.removeAttribute("data-site");
    } else {
      document.body.setAttribute("data-site", "punk");
    }
  }, [pathname]);

  return null;
}
