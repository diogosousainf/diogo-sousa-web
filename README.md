# Diogo Sousa · Portfolio

Personal portfolio built with Angular 17 (standalone components, signals, new control flow) and hand-written CSS. No UI framework.

## Running locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # output in dist/new-portfolio/browser
```

## Editing content

All text, projects and career entries live in `src/app/content.ts`, in Portuguese (`pt`) and English (`en`).
Project screenshots are in `src/assets/work/`.

## Structure

- `src/app/sections/`: hero, work, career, about and contact sections
- `src/app/palette.component.ts`: command palette (Ctrl/⌘ + K)
- `src/app/lang.service.ts`: PT/EN switch, remembered in localStorage
- `src/styles.css`: design tokens and all styles
