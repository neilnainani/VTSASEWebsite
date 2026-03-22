# VTSASEWebsite

Repository for the VT SASE (Society of Asian Scientists and Engineers) website.

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

- **React app** lives in `src/` (routes in `App.tsx`, pages in `src/pages/`, content: `siteContent.ts`, styles: `App.css`).
- **Routes:** `/` (home), `/officers` (“Meet The Officers”).
- **Where to add real links & image paths:** see **`CONTENT.md`**.

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
