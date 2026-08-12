"use client";

import { useEffect } from "react";

/** Locks html/body to the visual viewport so the page cannot scroll. */
export function LockViewport() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("no-page-scroll");
    body.classList.add("no-page-scroll");
    return () => {
      html.classList.remove("no-page-scroll");
      body.classList.remove("no-page-scroll");
    };
  }, []);

  return null;
}
