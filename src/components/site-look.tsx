"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/** Applies SaaS chrome everywhere except live presenter/cast decks (those use dark Orbitron). */
export function SiteLook() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const onDeck = pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast");
    if (onDeck) {
      document.body.removeAttribute("data-site");
      document.documentElement.classList.add("dark");
    } else {
      document.body.setAttribute("data-site", "saas");
      document.documentElement.classList.remove("dark");
    }
  }, [pathname]);

  return null;
}
