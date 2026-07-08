"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Light mode on" : "Dark mode on"}
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-9 w-[3.25rem] shrink-0 items-center rounded-full border border-border bg-muted p-0.5 transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
        className
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-transform duration-200",
          isLight ? "translate-x-0" : "translate-x-[1.35rem]"
        )}
      >
        {isLight ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </span>
    </button>
  );
}
