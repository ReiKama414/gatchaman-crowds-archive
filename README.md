# GATCHAMAN CROWDS — The Digital Archive

**English** · [繁體中文](./README.zh-TW.md)

> A **single-page interactive fan archive** for both seasons of *GATCHAMAN CROWDS*, presented in Traditional Chinese — characters, Utsutsu focus, NOTE, relationships, official art, music, and episode notes.

<p align="center">
  <img src="./public/assets/official/s1/key-visual.jpg" alt="Season 1 official key visual" width="720" />
</p>

<p align="center">
  <a href="https://reikama414.vercel.app/">Portfolio</a>
  ·
  <a href="#quick-start">Quick start</a>
  ·
  <a href="#license--rights">License</a>
</p>

---

## Highlights

- **Two seasons in one scroll** — characters, Utsutsu focus, NOTE, relationships, gallery, music, and episode notes
- **Evidence-first data** — `confirmed` / `secondary` / `inferred` / `unknown`, with empty fields hidden in the UI
- **Swipe carousels** — mouse drag, touch, and arrow keys; no horizontal scrollbars
- **Character search** — press `/` to jump to the roster and focus search
- **Motion respect** — follows system Reduced Motion; header Play / Pause toggle

---

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 19 · TypeScript · Vite |
| 3D | Three.js · React Three Fiber · Drei |
| Motion | GSAP · Lenis |
| State | Zustand |
| Style | Tailwind CSS 4 |

---

## Quick start

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (default `http://localhost:5173/`).

| Command | Purpose |
| --- | --- |
| `npm run lint` | ESLint |
| `npm run check:data` | Verify data integrity |
| `npm run build` | Production build |
| `npm run preview` | Preview the build |

The site can be deployed and opened by URL, but it is **not meant for search indexing**: `noindex` meta in `index.html`, sitewide `Disallow` in `public/robots.txt`, and `X-Robots-Tag` via `vercel.json` on Vercel. Well-behaved crawlers should not list it; malicious or robots-ignoring fetchers cannot be fully blocked.

---

## Usage

| Action | Behavior |
| --- | --- |
| Character search | Press `/` |
| Carousels | Drag, swipe, or ← → |
| Image lightbox | Esc, ← →, focus trap |
| Relationship graph | Drag, keyboard select, zoom |
| Music | Track metadata and links to official label / broadcaster pages (no in-site playback) |
| Reduced Motion | System preference or header Play / Pause |

Official video URLs may appear in source citations only. If WebGL is unavailable, data and static visuals remain.

---

## Project structure

```
gatchaman-crowds-archive/
├── public/assets/       # Official stills, merch photos, recreated stills
├── scripts/             # Data verification
├── src/
│   ├── components/      # Archive UI, carousels, scenes
│   ├── data/            # Characters, series, assets, registers
│   ├── App.tsx
│   ├── store.ts
│   └── styles.css
├── LICENSE
├── README.md
└── README.zh-TW.md
```

| Path | Role |
| --- | --- |
| `src/data/characters.ts` | People, aliases, abilities, relationships, per-field evidence |
| `src/data/series.ts` | Two seasons, 24 TV episodes, two specials, music, worldview |
| `src/data/assets.ts` | Asset paths, source URLs, pages, sizes, season, rights notes |
| `src/data/recreated.ts` | Three selected v2 redraw stills — prompts, refs, sizes, transparency |
| `src/data/noteMerch.ts` | Eight-color NOTE merch still (1254×1254) and related records |
| `public/assets/official/` | Successfully fetched official images (media reprints marked per asset) |

Section 07 shows the eight-color NOTE merch remaster. Verified A6 NOTE product photos stay in the gallery and source register. Character NOTE abilities switch from the side menu.

---

## Accuracy & fan work

This is an **unofficial fan work**. Worldview copy, relationship summaries, and visual metaphors may include fan interpretation. Prefer fields marked `confirmed` when accuracy matters.

This is an unofficial fan archive — not a channel for redistributing third-party media.

---

## Third-party materials & attribution

| Material | Rights note |
| --- | --- |
| Characters, titles, official art, music | Belong to NTV, VAP, Tatsunoko Production, and the relevant production committees |
| Official stills under `public/assets/official/` | Fetched for research display; public availability ≠ reuse license |
| Three recreated stills (v2) | Project assets recorded in `src/data/recreated.ts`; not official art; not open for reuse |
| NOTE merch photography | User-supplied / remastered; provenance kept in data and the asset register |
Downloading media for research display does **not** grant permission to redistribute. No open reuse license was obtained for official assets.

---

## Links

| | |
| --- | --- |
| Repository | [gatchaman-crowds-archive](https://github.com/ReiKama414/gatchaman-crowds-archive) |
| Author | [ReiKama414](https://github.com/ReiKama414) |
| Portfolio | [Personal site](https://reikama414.vercel.app/) |
| Full license text | [LICENSE](./LICENSE) |

---

## License / Rights

Copyright (c) ReiKama414. All rights reserved.

This project is provided for personal viewing and learning only.
Without the copyright holder's written consent, you may not use, copy, modify,
distribute, or incorporate it into other projects (including non-commercial use).

The author's software and presentation code follow [LICENSE](./LICENSE).
Third-party franchise materials remain with their respective rights holders and are **not** covered by any open license from this repository.

- [GitHub](https://github.com/ReiKama414/gatchaman-crowds-archive)
- [Portfolio](https://reikama414.vercel.app/)
- [Full license text](./LICENSE)

---

<sub>GATCHAMAN CROWDS — The Digital Archive · ReiKama414 · All rights reserved</sub>
