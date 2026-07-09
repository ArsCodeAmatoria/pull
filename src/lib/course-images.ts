export const FLAT_TOP_COVER_IMAGE = "/images/flat-top.png";

export const FLAT_TOP_COVER_ALT = "Flat-top tower crane against a clear sky";

export const LUFFER_COVER_IMAGE = "/images/luffer.png";

export const LUFFER_COVER_ALT = "Luffer crane on a construction site";

export const SELF_CLOSING_COVER_IMAGE = "/images/rigging/self-closing.png";

export const SELF_CLOSING_COVER_ALT = "Self-closing tower crane on a construction site";

export function coverImageAlt(src: string): string {
  if (src.includes("luffer")) return LUFFER_COVER_ALT;
  if (src.includes("self-closing")) return SELF_CLOSING_COVER_ALT;
  if (src.includes("flat-top")) return FLAT_TOP_COVER_ALT;
  return "Course cover image";
}

export const EDGE_PROTECTION_IMAGE = "/images/rigging/edge-protection.png";

export const EDGE_PROTECTION_IMAGE_ALT =
  "Rigging sling with edge protection pad at a sharp steel corner";

export const LW_RATIO_IMAGE = "/images/rigging/l-w.png";

export const LW_RATIO_IMAGE_ALT =
  "Bridle sling diagram labeling vertical height H and sling leg length L at 45 degrees";
