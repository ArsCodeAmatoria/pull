"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        aria-pressed={theme === "light"}
        className={cn(
          "flex h-12 w-12 items-center justify-center transition-opacity",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          theme === "light" ? "text-foreground opacity-100" : "text-muted-foreground opacity-50 hover:opacity-80"
        )}
      >
        <Sun className="h-7 w-7" strokeWidth={2.25} />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        aria-pressed={theme === "dark"}
        className={cn(
          "flex h-12 w-12 items-center justify-center transition-opacity",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          theme === "dark" ? "text-foreground opacity-100" : "text-muted-foreground opacity-50 hover:opacity-80"
        )}
      >
        <Moon className="h-7 w-7" strokeWidth={2.25} />
      </button>
    </div>
  );
}
