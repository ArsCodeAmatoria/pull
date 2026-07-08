# pull

Rigging course site — structured lessons, practice tests, an 8-hour classroom slide deck, and in-person certification guidance.

Built with Next.js, Tailwind CSS, and shadcn-style UI components.

## Features

- **25 lesson modules** plus 5 reference appendices — regulations, WLL/DF, hitches, inspection, rigging math, BTH, lift planning, and critical lifts
- **Practice test** — randomized multiple-choice rigging questions with instant explanations (WorkSafeBC / BCCSA aligned)
- **8-hour slide course** — classroom slides (~5 min each) for in-person delivery, separate from reading lessons
- **Presenter mode** — arrow keys / clicker, swipe on phone, TV cast view, weight-chart picker, and **pure slide** mode (hide header for full-bleed slides; press `H` or use the toolbar button)
- **Rigging math diagrams** — SVG illustrations on slides and lessons (sling angles, COG, tension multipliers, hitches, and more)
- **Weight charts** — interactive capacity tables for use during the math block
- **Certification info** — in-person written exam and practical evaluation guidance
- **English / Spanish** — language switcher in the header (UI and lesson metadata; slide deck content is English with a notice in Spanish mode)
- **Offline-friendly** — save the slide course for use without internet; PWA manifest and offline indicator
- **Light / dark theme** — dark blue and white; yellow and red for sparse highlights only
- **Mobile-ready** — collapsible navigation and touch-friendly controls

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/lessons` | Reading lessons and appendices |
| `/practice-test` | Interactive practice quiz |
| `/certification` | In-person evaluation info |
| `/slides` | Slide course index and unit list |
| `/slides/present` | Presenter view |
| `/slides/cast` | Audience / TV view (synced from presenter) |
| `/slides/charts` | Weight chart picker |

## Theme

Two base colors — dark blue and white. **Yellow** and **red** are text-only highlights (`text-highlight`, `text-highlight-secondary`) — no background fill.

| Switch | Background | Text |
|--------|------------|------|
| On (light) | White | Dark blue |
| Off (dark) | Dark blue | White |

No borders. Large type. Mobile-first layout.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `node scripts/build-competency-slides.mjs` | Regenerate slide deck JSON from source |
| `node scripts/build-rigging-questions.mjs` | Regenerate practice question bank |

## Project structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── lessons/                # Course modules and appendices
│   ├── practice-test/          # Interactive practice quiz
│   ├── certification/          # In-person evaluation info
│   └── slides/                 # Slide course index, presenter, cast, charts
├── components/
│   ├── presentation/           # Slide deck, weight charts, cast sync
│   ├── rigging/                # Lesson content components
│   ├── rigging-diagrams/       # Shared SVG rigging math diagrams
│   ├── quiz/                   # Practice test UI
│   ├── i18n/                   # Locale provider (EN/ES)
│   └── ui/                     # Shared UI primitives
├── data/
│   ├── competency-slides.json  # Classroom slide deck data
│   └── weight-charts.ts        # Chart data for math block
├── i18n/                       # Dictionaries and locale config
└── lib/                        # Lesson registry, course types, utilities

scripts/
├── build-competency-slides.mjs   # Slide deck generator
└── build-rigging-questions.mjs   # Question bank generator
```

## Presenter shortcuts

| Key / action | Effect |
|--------------|--------|
| `←` `→` / Page Up/Down / Space | Previous / next slide |
| `Home` / `End` | First / last slide |
| `H` | Toggle pure slide mode (hide header) |
| `Esc` | Exit fullscreen |
| Swipe | Previous / next on touch devices |
| Mouse to top edge | Show floating controls in pure slide mode |

## License

Private — All rights reserved.
