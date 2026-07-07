# Carol Ferrari — Kunstportfolio

A static art portfolio for **Carol Ferrari**, built with plain HTML/CSS/JS (no build
step). Works are grouped into **collections** (Trios / Duo) and **individual works**,
and every piece and collection has its own clean URL.

Live site: `https://carolrefe.github.io/Portfolio/`

## URLs

- Home: `/Portfolio/`
- A single work: `/Portfolio/Dunkelheit`, `/Portfolio/Desert`, `/Portfolio/Anemone`, …
- A collection: `/Portfolio/Welle`, `/Portfolio/Duo`, `/Portfolio/Formen`, `/Portfolio/Flash`, `/Portfolio/Pastell`

Each URL is a folder containing a small `index.html`, which is what lets the address
work without a `.html` ending.

## How it's organised

```
Portfolio/
├── index.html          # Home (grouped gallery)
├── styles.css          # Shared styling for every page
├── data.js             # ← ALL content lives here (titles, medium, size, groups)
├── app.js              # Renders the home / piece / collection pages
├── Images/             # The artwork photos
├── Welle/  Duo/  Formen/  Flash/  Pastell/     # collection pages
└── Dunkelheit/  Desert/  Anemone/  …            # one folder per artwork
```

### To edit content

Open **`data.js`** — it's the single source of truth. You can change any title,
medium, size, or move a piece between collections there, and every page updates
automatically. No need to touch the individual folders.

- `image: "Rose"` refers to `Images/Rose.<ext>`. The site automatically tries
  `.jpg`, `.jpeg`, `.JPG`, `.png`, etc., so mixed extensions are fine.
- `image: null` shows a tasteful "Bild folgt" placeholder (used for `Rechteck`,
  which has no photo yet).

### Collections

| Collection | Type | Pieces |
|---|---|---|
| Welle | Trio | Grüne Welle, Rote Welle, Blaue Welle |
| Duo | Duo | Licht, Dunkelheit |
| Formen | Trio | Rechteck, Quadrat, Kreis |
| Flash | Trio | Flash 1–3 |
| Pastell | Trio | Pastell 1–3 |

Individual works: Himmel, Erde, Desert, Perspektive 1 & 2, Anemone, Rose, Krokus,
La Linea, Le Bleu, Le Noir, Le Rouge, Scacco Matto.

## Local preview

Because the pages load `data.js`/`app.js` with relative paths, just open
`index.html` in a browser, or run a small server:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Publish (GitHub Pages)

1. Commit and push all files (including the `Images/` folder).
2. Repo → **Settings → Pages** → Source: your branch, folder `/ (root)`.
3. The site appears at `https://carolrefe.github.io/Portfolio/`.
