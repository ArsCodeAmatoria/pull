import {
  buildModule2EducationLinks,
  Module2EquipmentFooterLinks,
  RiggingEducationModule2EquipmentProse
} from "@/components/lessons/rigging-education-module-2-equipment-prose";
import {riggingEducationArticleClass, riggingEducationFooterRowClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";

/** Module 2 — Rigging equipment knowledge (article view; slide deck uses aligned chunks in `module-2-custom-slides`). */
export function RiggingEducationModule2Equipment({locale}: {readonly locale: Locale}) {
  const L = buildModule2EducationLinks(locale);
  return (
    <div className={riggingEducationArticleClass}>
      <RiggingEducationModule2EquipmentProse locale={locale} />
      <div className={riggingEducationFooterRowClass}>
        <Module2EquipmentFooterLinks links={L} />
      </div>
    </div>
  );
}
