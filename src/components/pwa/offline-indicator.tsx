"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";

export function OfflineIndicator() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const sync = () => setOffline(!navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  if (!offline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-[300] flex -translate-x-1/2 items-center gap-2 bg-foreground px-4 py-2 text-sm font-medium text-background shadow-lg"
    >
      <WifiOff className="h-4 w-4" aria-hidden />
      Offline mode — cached pages still work
    </div>
  );
}
