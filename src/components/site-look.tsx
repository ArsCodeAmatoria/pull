"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { applySiteTheme, useTheme } from "@/components/theme-provider";

/** Site chrome uses the user theme. Presenter/cast decks stay dark Orbitron. */
export function SiteLook() {
  const pathname = usePathname();
  const { theme } = useTheme();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const onDeck = pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast");
    if (onDeck) {
      document.body.removeAttribute("data-site");
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
      html.style.colorScheme = "dark";
      return;
    }

    document.body.setAttribute("data-site", "saas");
    html.classList.remove("dark");
    applySiteTheme(theme);
  }, [pathname, theme]);

  return null;
}
