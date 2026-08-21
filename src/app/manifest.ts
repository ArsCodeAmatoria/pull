import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pull — 92 Competencies",
    short_name: "Pull",
    description:
      "Educational material on the 92 rigger competencies WorkSafeBC is putting forward. Always follow current WorkSafeBC regulations and standards, and manufacturers' instructions.",
    start_url: "/",
    display: "standalone",
    background_color: "#e8eef4",
    theme_color: "#003e83",
    orientation: "any",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
