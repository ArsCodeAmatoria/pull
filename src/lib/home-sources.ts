import { STANDARD_URLS } from "@/lib/standards-links";
import type { StandardLogoId } from "@/lib/standards-links";

export type HomeSourceItem = {
  label: string;
  href: string;
  logo?: StandardLogoId;
};

export type HomeSourceGroup = {
  id: string;
  headingKey:
    | "home.sourcesBc"
    | "home.sourcesCsa"
    | "home.sourcesAsme"
    | "home.sourcesInternational";
  items: readonly HomeSourceItem[];
};

export const HOME_SOURCE_GROUPS: readonly HomeSourceGroup[] = [
  {
    id: "bc",
    headingKey: "home.sourcesBc",
    items: [
      { label: "WorkSafeBC OHSR Part 14", href: STANDARD_URLS.ohrsPart14, logo: "worksafebc" },
      { label: "WorkSafeBC OHSR Part 15", href: STANDARD_URLS.ohrsPart15, logo: "worksafebc" },
      { label: "BC Crane Safety (BCCSA)", href: STANDARD_URLS.bccsaCompetency, logo: "bccsa" },
    ],
  },
  {
    id: "csa",
    headingKey: "home.sourcesCsa",
    items: [
      { label: "CSA Z248 Tower cranes", href: STANDARD_URLS.csaZ248, logo: "csa" },
      { label: "CSA Z150 Mobile cranes", href: STANDARD_URLS.csaZ150, logo: "csa" },
    ],
  },
  {
    id: "asme",
    headingKey: "home.sourcesAsme",
    items: [
      { label: "ANSI", href: STANDARD_URLS.ansi, logo: "ansi" },
      { label: "ASME B30 Overview", href: STANDARD_URLS.asmeB30, logo: "asme" },
      { label: "ASME B30.3 Tower cranes", href: STANDARD_URLS.asmeB303, logo: "asme" },
      { label: "ASME B30.5 Mobile cranes", href: STANDARD_URLS.asmeB305, logo: "asme" },
      { label: "ASME B30.9 Slings", href: STANDARD_URLS.asmeB309, logo: "asme" },
      { label: "ASME B30.10 Hooks", href: STANDARD_URLS.asmeB3010, logo: "asme" },
      { label: "ASME B30.20 Below-the-hook", href: STANDARD_URLS.asmeB3020, logo: "asme" },
      { label: "ASME B30.26 Rigging hardware", href: STANDARD_URLS.asmeB3026, logo: "asme" },
    ],
  },
  {
    id: "international",
    headingKey: "home.sourcesInternational",
    items: [
      { label: "EN 13155 Load attachments", href: STANDARD_URLS.en13155, logo: "en" },
      { label: "FEM Crane & hoist rules", href: STANDARD_URLS.fem, logo: "fem" },
    ],
  },
] as const;
