# AIVR — Enterprise Landing Page

Next.js 14 + Tailwind CSS + Framer Motion landing page for AIVR A320 SOPs Trainer.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On Windows you can also double-click `start-website.bat`.

## Build

```bash
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local` for local development. On the server (EC2), set the same variables in the process environment — do not commit secrets.

## Project structure

- `app/` — pages, API routes, global styles
- `components/` — UI sections and shared components
- `assets/images/` — images imported by Next.js
- `public/docs/` — downloadable PDFs
- `public/videos/` — hero promo video

## Responsive breakpoints

- **Mobile** (`< md`): hamburger menu, smaller headline via `clamp()`
- **Tablet** (`md`): nav pill visible, medium typography
- **Desktop** (`lg+`): largest headline scale
