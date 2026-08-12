"use client";

import { useEffect, useRef } from "react";

function apiOrigin() {
  if (typeof window !== "undefined") return `${window.location.origin}/api/cca`;
  return (process.env.NEXT_PUBLIC_CCA_API_URL ?? "http://127.0.0.1:8080").replace(/\/$/, "");
}

function wsUrl(path: string) {
  const http = (process.env.NEXT_PUBLIC_CCA_API_URL ?? "http://127.0.0.1:8080").replace(/\/$/, "");
  return http.replace(/^http/, "ws") + path;
}

export function useClassDayPublisher(classDayId: string | null, enabled: boolean, index: number) {
  useEffect(() => {
    if (!enabled || !classDayId) return;
    void fetch(`${apiOrigin()}/class-days/${classDayId}/slide`, {
      method: "PUT",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ index }),
    }).catch(() => {
      /* follow-along is best-effort */
    });
  }, [classDayId, enabled, index]);
}

export function useClassDayFollower(
  classDayId: string | null,
  enabled: boolean,
  onIndex: (i: number) => void
) {
  const onIndexRef = useRef(onIndex);
  useEffect(() => {
    onIndexRef.current = onIndex;
  }, [onIndex]);

  useEffect(() => {
    if (!enabled || !classDayId) return;
    const ws = new WebSocket(wsUrl(`/class-days/${classDayId}/follow`));
    ws.onmessage = (ev) => {
      try {
        const data = JSON.parse(ev.data) as { index?: number };
        if (typeof data.index === "number") onIndexRef.current(data.index);
      } catch {
        /* ignore */
      }
    };
    return () => ws.close();
  }, [classDayId, enabled]);
}
