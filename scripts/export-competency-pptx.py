#!/usr/bin/env python3
"""Capture competency slides from the live deck into PowerPoint and PDF.

Uses ?export=1 for a full-bleed single-slide render (no presenter chrome).
Quiz slides are exported twice: prompt, then reveal (?reveal=1).
Pass --locale es and set the pull-locale cookie for Spanish decks.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright
from pptx import Presentation
from pptx.util import Emu

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUT = ROOT / "exports" / "powerpoint"
COURSE_JSON = ROOT / "src" / "data" / "competency-slides.json"
COURSE_JSON_ES = ROOT / "src" / "data" / "competency-slides-es.json"

# 16:9 widescreen
SLIDE_W = 12191999
SLIDE_H = 6858000
VIEWPORT = {"width": 1920, "height": 1080}


def slugify(text: str, max_len: int = 48) -> str:
    s = re.sub(r"[^a-zA-Z0-9]+", "-", text.strip().lower()).strip("-")
    return (s or "slide")[:max_len]


def load_course(locale: str) -> dict:
    path = COURSE_JSON_ES if locale == "es" else COURSE_JSON
    return json.loads(path.read_text())


def wait_export_ready(page) -> None:
    page.wait_for_selector('[data-pptx-export="true"]', timeout=90_000)
    page.wait_for_function(
        """() => {
          const root = document.querySelector('[data-pptx-export="true"]');
          if (!root) return false;
          const text = (root.innerText || '').trim();
          return text.length > 0;
        }""",
        timeout=90_000,
    )


def wait_images(page) -> None:
    page.evaluate(
        """async () => {
          const imgs = Array.from(document.images);
          await Promise.all(imgs.map(img => {
            if (img.complete && img.naturalWidth > 0) return;
            return new Promise(resolve => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
            });
          }));
          if (document.fonts && document.fonts.ready) await document.fonts.ready;
        }"""
    )
    page.wait_for_timeout(200)


def capture_viewport(page, path: Path) -> None:
    wait_images(page)
    page.screenshot(path=str(path), full_page=False, type="png")


def build_pptx(image_paths: list[Path], pptx_path: Path) -> None:
    prs = Presentation()
    prs.slide_width = Emu(SLIDE_W)
    prs.slide_height = Emu(SLIDE_H)
    blank = prs.slide_layouts[6]

    for img_path in image_paths:
        slide = prs.slides.add_slide(blank)
        slide.shapes.add_picture(str(img_path), 0, 0, width=Emu(SLIDE_W), height=Emu(SLIDE_H))

    pptx_path.parent.mkdir(parents=True, exist_ok=True)
    prs.save(str(pptx_path))


def build_pdf(image_paths: list[Path], pdf_path: Path) -> None:
    pages: list[Image.Image] = []
    for img_path in image_paths:
        im = Image.open(img_path).convert("RGB")
        pages.append(im)
    if not pages:
        raise SystemExit("No images to write to PDF")
    pdf_path.parent.mkdir(parents=True, exist_ok=True)
    first, rest = pages[0], pages[1:]
    first.save(str(pdf_path), save_all=True, append_images=rest, resolution=150.0)
    for im in pages:
        im.close()


def export(
    base_url: str,
    out_dir: Path,
    track: str = "rigger-competency",
    locale: str = "en",
    make_pdf: bool = True,
) -> None:
    course = load_course(locale)
    slides = course["slides"]
    captures = out_dir / "slide-captures"
    captures.mkdir(parents=True, exist_ok=True)

    for old in captures.glob("*.png"):
        old.unlink()

    image_paths: list[Path] = []
    sequence = 0
    stem_locale = f"-{locale}" if locale != "en" else ""

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport=VIEWPORT,
            device_scale_factor=1,
            color_scheme="dark",
        )
        context.add_cookies(
            [
                {
                    "name": "pull-locale",
                    "value": locale,
                    "url": base_url.rstrip("/") + "/",
                }
            ]
        )
        page = context.new_page()

        for slide in slides:
            slide_num = int(slide["id"])
            title = slide.get("title") or f"slide-{slide_num}"
            is_quiz = bool(slide.get("quiz") and slide.get("quizQuestions"))
            variants = [("prompt", False)]
            if is_quiz:
                variants.append(("reveal", True))

            for kind, reveal in variants:
                qs = f"track={track}&slide={slide_num}&export=1"
                if reveal:
                    qs += "&reveal=1"
                url = f"{base_url.rstrip('/')}/slides/present?{qs}"
                label = f"{title}" + (" [reveal]" if reveal else (" [quiz]" if is_quiz else ""))
                print(f"[{locale}] [{slide_num}/{len(slides)}] {label}", flush=True)

                page.goto(url, wait_until="networkidle", timeout=120_000)
                wait_export_ready(page)
                wait_images(page)

                sequence += 1
                suffix = "-reveal" if reveal else ""
                stem = f"{sequence:03d}-slide-{slide_num:02d}-{slugify(title)}{suffix}"
                out_path = captures / f"{stem}.png"
                capture_viewport(page, out_path)
                image_paths.append(out_path)

        browser.close()

    pptx_name = (
        "Rigger-Competency-Slides-ES.pptx" if locale == "es" else "Rigger-Competency-Slides.pptx"
    )
    pdf_name = (
        "Rigger-Competency-Slides-ES.pdf" if locale == "es" else "Rigger-Competency-Slides.pdf"
    )
    pptx_path = out_dir / pptx_name
    print(f"Building PowerPoint ({len(image_paths)} slides)…", flush=True)
    build_pptx(image_paths, pptx_path)

    if make_pdf:
        pdf_path = out_dir / pdf_name
        print(f"Building PDF ({len(image_paths)} pages)…", flush=True)
        build_pdf(image_paths, pdf_path)
        print(f"Wrote {pdf_path}")

    with Image.open(image_paths[0]) as im:
        print(f"Capture size: {im.size[0]}×{im.size[1]}")
    print(f"Wrote {pptx_path}")
    print(f"PNGs in {captures} ({len(image_paths)} files){stem_locale}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", default="http://127.0.0.1:3001")
    parser.add_argument("--out", type=Path, default=None)
    parser.add_argument("--track", default="rigger-competency")
    parser.add_argument("--locale", choices=("en", "es"), default="en")
    parser.add_argument("--no-pdf", action="store_true")
    args = parser.parse_args()

    out_dir = args.out
    if out_dir is None:
        out_dir = (
            ROOT / "exports" / "powerpoint-es"
            if args.locale == "es"
            else ROOT / "exports" / "powerpoint"
        )

    course_path = COURSE_JSON_ES if args.locale == "es" else COURSE_JSON
    if not course_path.exists():
        print(f"Missing {course_path}", file=sys.stderr)
        return 1

    t0 = time.time()
    export(
        args.base_url,
        out_dir,
        track=args.track,
        locale=args.locale,
        make_pdf=not args.no_pdf,
    )
    print(f"Done in {time.time() - t0:.1f}s")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
