"use client";

import { useEffect, useState } from "react";
import { WifiOff, X } from "lucide-react";
import { useTranslations } from "@/i18n/locale-context";

export function OfflineIndicator() {
  const [offline, setOffline] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { t } = useTranslations();

  useEffect(() => {
    const sync = () => {
      const isOffline = !navigator.onLine;
      setOffline(isOffline);
      if (!isOffline) setDismissed(false);
    };
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  if (!offline || dismissed) return null;

  return (
    <div
      role="status"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-[300] flex -translate-x-1/2 items-center gap-2 bg-foreground px-3 py-2 pl-4 text-sm font-medium text-background shadow-lg"
    >
      <WifiOff className="h-4 w-4 shrink-0" aria-hidden />
      <span>
        {t("offline.offline")} — {t("offline.cached")}
      </span>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm text-background/70 transition-colors hover:bg-background/15 hover:text-background"
        aria-label={t("offline.dismiss")}
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
