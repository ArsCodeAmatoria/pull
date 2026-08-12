import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ridgetechone — Teaching Aid",
    short_name: "Ridgetechone",
    description:
      "Instructor teaching aid: classroom slides, practice quizzes, and continuing competency assessment. Not certification.",
    start_url: "/",
    display: "standalone",
    background_color: "#e8eef4",
    theme_color: "#003e83",
    orientation: "any",
    icons: [
      {
        src: "/images/brand/ridgetechone-mark.png",
        sizes: "192x192",
        type: "image/png",
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
