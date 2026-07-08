# pull

Rigging course site — structured lessons, practice tests, and in-person certification guidance.

Built with Next.js, Tailwind CSS, and shadcn-style UI components.

## Features

- **25 lesson modules** plus 5 reference appendices covering crane rigging from regulations through advanced operations
- **Practice test** with randomized multiple-choice questions and instant explanations
- **Certification info** for the in-person written exam and practical evaluation
- **Light / dark theme** — blue-only palette with a toggle in the header
- **Mobile-ready** layout with collapsible navigation and touch-friendly controls

## Theme

| Switch | Background | Text |
|--------|------------|------|
| On (light) | Light blue | Dark blue |
| Off (dark) | Dark blue | Light blue |

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

## Project structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── lessons/          # Course modules and appendices
│   ├── practice-test/    # Interactive practice quiz
│   └── certification/    # In-person evaluation info
├── components/
│   ├── rigging/          # Lesson content components
│   ├── quiz/             # Practice test UI
│   └── ui/               # Shared UI primitives
├── data/                 # Question bank
└── lib/                  # Lesson registry and utilities
```

## License

Private — All rights reserved.
