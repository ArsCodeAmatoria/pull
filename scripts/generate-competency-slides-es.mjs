import { readFileSync, writeFileSync } from "fs";
import { ES_SLIDE_TEXT, ES_COURSE_META, ES_UNIT_LABELS } from "./competency-slide-es-translations.mjs";

const EN_PATH = "src/data/competency-slides.json";
const ES_PATH = "src/data/competency-slides-es.json";

function translateSectionItem(item, translated) {
  if (typeof item === "string") return translated ?? item;
  if (!translated || typeof translated !== "object") return item;
  return { ...item, label: translated.label ?? item.label };
}

function translateSections(sections, translatedSections) {
  if (!sections?.length) return sections;
  if (!translatedSections?.length) return sections;
  return sections.map((section, i) => {
    const tr = translatedSections[i];
    if (!tr) return section;
    return {
      ...section,
      heading: tr.heading ?? section.heading,
      items: section.items.map((item, j) => translateSectionItem(item, tr.items?.[j])),
    };
  });
}

function translateHeroStats(stats, translated) {
  if (!stats?.length) return stats;
  if (!translated?.length) return stats;
  return stats.map((stat, i) => ({
    ...stat,
    label: translated[i]?.label ?? stat.label,
  }));
}

function translateQuizQuestions(questions, translated) {
  if (!questions?.length) return questions;
  if (!translated?.length) return questions;
  return questions.map((q, i) => {
    const tr = translated[i];
    if (!tr) return q;
    return {
      ...q,
      prompt: tr.prompt ?? q.prompt,
      explanation: tr.explanation ?? q.explanation,
      options: q.options.map((opt, j) => ({
        ...opt,
        text: tr.options?.[j]?.text ?? opt.text,
      })),
    };
  });
}

function translateSlide(slide, text) {
  if (!text) return slide;
  const unitLabel = ES_UNIT_LABELS[slide.unit] ?? slide.unitLabel;
  return {
    ...slide,
    unitLabel,
    title: text.title ?? slide.title,
    summary: text.summary ?? slide.summary,
    bullets: text.bullets ?? slide.bullets,
    source: text.source ?? slide.source,
    focusKicker: text.focusKicker ?? slide.focusKicker,
    focusCallout: text.focusCallout ?? slide.focusCallout,
    sections: translateSections(slide.sections, text.sections),
    heroStats: translateHeroStats(slide.heroStats, text.heroStats),
    quizQuestions: translateQuizQuestions(slide.quizQuestions, text.quizQuestions),
  };
}

const en = JSON.parse(readFileSync(EN_PATH, "utf8"));

if (ES_SLIDE_TEXT.length !== en.slides.length) {
  throw new Error(`Expected ${en.slides.length} Spanish slide entries, got ${ES_SLIDE_TEXT.length}`);
}

const es = {
  ...en,
  title: ES_COURSE_META.title,
  description: ES_COURSE_META.description,
  units: en.units.map((u) => ({
    ...u,
    label: ES_UNIT_LABELS[u.id] ?? u.label,
  })),
  slides: en.slides.map((slide, i) => translateSlide(slide, ES_SLIDE_TEXT[i])),
};

writeFileSync(ES_PATH, JSON.stringify(es, null, 2));
console.log(`Wrote ${es.slides.length} Spanish slides to ${ES_PATH}`);
