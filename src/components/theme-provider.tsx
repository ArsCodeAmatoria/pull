"use client";

import { createContext, useContext } from "react";

type ThemeContextValue = {
  theme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextValue>({ theme: "light" });

/** Site chrome is light SaaS; presenter/cast decks opt into dark via SiteLook. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext.Provider value={{ theme: "light" }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
