import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "pull — Rigging Course",
    short_name: "pull",
    description: "Crane rigging education with lessons, practice tests, and in-person presentation mode.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1424",
    theme_color: "#0b1424",
    orientation: "any",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
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
