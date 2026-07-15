# ICAP — Industry Compliance & Proficiency Australia

Marketing site for ICAP: professional training and assessment for mining,
construction and civil workforces across Australia.

## Stack

- Vite + React + TypeScript, no runtime dependencies beyond React
- Cinematic scroll-scrubbed video hero (`src/hero/`) — a fixed full-screen
  video stage scrubbed by scroll across a 480vh runway, with glass content
  cards floating in 3D perspective; falls back to a static poster hero on
  mobile, reduced-motion, or video failure
- Interactive course catalogue (`src/explorer/`) — full-screen overlay with a
  capability-pathway filter (operator → assessor → supervisor → whole crew),
  course rail, and prospectus pane; deep-linked via `#catalogue/<slug>`
- All course/pricing content lives in `src/content/courses.json`

## Develop

```sh
npm install
npm run dev     # http://localhost:5173
npm run build   # type-check + production build to dist/
```

## Assets

- `public/media/icap-hero.mp4` — AI-generated mine-site flythrough (Kling v3
  via Higgsfield), re-encoded with short GOP (`-g 8`) for smooth scrubbing
- `public/brand/icap-logo.png` — supplied logo (navy on transparent)
- Source materials: `ICAP_Landing_Page_with_Logo.docx`, `LOGO transparent .png`,
  project photos (Wix draft reference)

## Before launch

- Replace `ENQUIRY_EMAIL` in `src/sections/Contact.tsx` with the real inbox
  (or wire a form endpoint) — the form currently composes a mailto draft
- Provide the free assessment checklist PDF and wire the template-store
  checkout links
- Items marked "coming soon" in `courses.json` follow the source doc's
  "need to develop" flags
