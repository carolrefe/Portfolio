# Carol Ferrari — Kunstportfolio

A static, multilingual art portfolio for **Carol Ferrari**, built with plain
HTML/CSS/JS (no build step). Works are grouped into **collections** and every piece
and collection has its own clean URL. Available in **German, Italian, French and
English** via the language switch (top right).

Live site: `https://carolrefe.github.io/Portfolio/`

### Mobile View (QR Code)
<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://carolrefe.github.io/Portfolio/Perspektive-1" alt="QR Code Live Site" width="150" />

## URLs

- Home: `/Portfolio/`
- A single work: `/Portfolio/Dunkelheit`, `/Portfolio/Anemone`, `/Portfolio/Perspektive-4`, …
- A collection: `/Portfolio/Perspektive`, `/Portfolio/Welten`, `/Portfolio/Welle`,
  `/Portfolio/Duo`, `/Portfolio/Formen`, `/Portfolio/Flash`, `/Portfolio/Pastell`,
  `/Portfolio/Blumen`, `/Portfolio/Chromatische-Trilogie`

## Collections (Perspektive shown first)

| Collection | Type | Pieces |
|---|---|---|
| Perspektive | — | Perspektive 1–5 (2 & 3 sold) |
| Welten | Quartett | Himmel, Erde, Wüste, Schachmatt |
| Welle | Trio | Grüne / Rote / Blaue Welle |
| Duo | Duo | Licht, Dunkelheit |
| Formen | Trio | Rechteck, Kreis, Linie |
| Flash | Trio | Flash 1–3 |
| Pastell | Trio | Pastell 1–3 |
| Blumen | Trio | Anemone, Rose, Krokus |
| Chromatische Trilogie | Trio | Blau, Schwarz, Rot |

**Sold:** sold works stay inside their collection and simply show a "Verkauft"
badge on the top-left of the image (there is no separate sold section).

## Editing content

Everything lives in **`data.js`** — the single source of truth:

- **Titles** are objects `{ de, it, fr, en }`. Change any language there.
- **`medium`** is a key (`leinwand`, `karton`, `collageLeinwand`) that translates
  automatically; add more in the `media` section.
- **`image`** is the base filename in `Images/` (no extension); the app tries
  `.jpg`, `.jpeg`, `.png`, … automatically. Use `null` for a "coming soon" placeholder.
- **`sold: true`** marks a work sold.
- **UI text** for all four languages lives in the `ui` section.

Each artwork page shows: **Technik · Format · Kollektion · Preis** ("auf Anfrage",
or "Verkauft" for sold works).

## Structure
