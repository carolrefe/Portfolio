/*
 * Portfolio data — single source of truth.
 * Edit titles, mediums, sizes, or add descriptions here.
 * "image" is the base filename inside the Images/ folder (without extension);
 * the app tries several extensions automatically.
 * Set image to null for works that don't have a photo yet.
 */
window.PORTFOLIO = {
  artist: "Carol Ferrari",
  tagline: "Acryl & Mischtechnik",
  intro:
    "Abstrakte Acrylmalerei und Mischtechnik — ein Spiel aus Farbe, Fluss und Struktur, in dem feste Form und fließender Raum aufeinandertreffen.",
  contact: {
    name: "Carol Ferrari",
    address: "Büelstrasse 40b, 8132 Egg",
    phone: "+41 79 505 60 27",
    email: "carol.refe@bluewin.ch"
  },
  exhibitions: [
    { year: "2019", title: "Perspektive", place: "Galerie Glashütte, Zumikon" },
    { year: "2018", title: "Équilibre", place: "Galerie Glashütte, Zumikon" },
    { year: "2017", title: "Anflug von Süden", place: "Galerie Glashütte, Zumikon" },
    { year: "2016", title: "Le Passage dans l'Art", place: "Galerie Glashütte, Zumikon" },
    { year: "2014", title: "Klang-Art", place: "Galerie Glashütte, Zumikon" }
  ],

  /* Collections (Trios / Duo). "pieces" lists piece slugs in order. */
  collections: [
    {
      slug: "Welle",
      title: "Welle",
      type: "Trio",
      medium: "Acryl auf Leinwand",
      size: "40 × 40 cm",
      pieces: ["Gruene-Welle", "Rote-Welle", "Blaue-Welle"]
    },
    {
      slug: "Duo",
      title: "Duo",
      type: "Duo",
      medium: "Acryl auf Leinwand",
      size: "40 × 40 cm",
      pieces: ["Licht", "Dunkelheit"]
    },
    {
      slug: "Formen",
      title: "Formen",
      type: "Trio",
      medium: "Acryl auf Leinwand",
      size: "30 × 30 cm",
      pieces: ["Rechteck", "Quadrat", "Kreis"]
    },
    {
      slug: "Flash",
      title: "Flash",
      type: "Trio",
      medium: "Acryl auf Leinwand",
      size: "30 × 24 cm",
      pieces: ["Flash-1", "Flash-2", "Flash-3"]
    },
    {
      slug: "Pastell",
      title: "Pastell",
      type: "Trio",
      medium: "Acryl auf Leinwand",
      size: "15 × 15 cm",
      pieces: ["Pastell-1", "Pastell-2", "Pastell-3"]
    }
  ],

  /* All individual pieces, keyed by URL slug. */
  pieces: {
    /* --- Welle (Trio) --- */
    "Gruene-Welle": { title: "Grüne Welle", image: "Grüne Welle", medium: "Acryl auf Leinwand", size: "40 × 40 cm", collection: "Welle" },
    "Rote-Welle": { title: "Rote Welle", image: "Rote Welle", medium: "Acryl auf Leinwand", size: "40 × 40 cm", collection: "Welle" },
    "Blaue-Welle": { title: "Blaue Welle", image: "Blaue Welle", medium: "Acryl auf Leinwand", size: "40 × 40 cm", collection: "Welle" },

    /* --- Duo --- */
    "Licht": { title: "Licht", image: "Licht", medium: "Acryl auf Leinwand", size: "40 × 40 cm", collection: "Duo" },
    "Dunkelheit": { title: "Dunkelheit", image: "Dunkelheit", medium: "Acryl auf Leinwand", size: "40 × 40 cm", collection: "Duo" },

    /* --- Formen (Trio) --- */
    "Rechteck": { title: "Rechteck", image: null, medium: "Acryl auf Leinwand", size: "30 × 30 cm", collection: "Formen" },
    "Quadrat": { title: "Quadrat", image: "Il Quadrato", medium: "Acryl auf Leinwand", size: "30 × 30 cm", collection: "Formen" },
    "Kreis": { title: "Kreis", image: "Il Tondo", medium: "Acryl auf Leinwand", size: "30 × 30 cm", collection: "Formen" },

    /* --- Flash (Trio) --- */
    "Flash-1": { title: "Flash 1", image: "Flash 1", medium: "Acryl auf Leinwand", size: "30 × 24 cm", collection: "Flash" },
    "Flash-2": { title: "Flash 2", image: "Flash 2", medium: "Acryl auf Leinwand", size: "30 × 24 cm", collection: "Flash" },
    "Flash-3": { title: "Flash 3", image: "Flash 3", medium: "Acryl auf Leinwand", size: "30 × 24 cm", collection: "Flash" },

    /* --- Pastell (Trio) --- */
    "Pastell-1": { title: "Pastell 1", image: "Pastell 1", medium: "Acryl auf Leinwand", size: "15 × 15 cm", collection: "Pastell" },
    "Pastell-2": { title: "Pastell 2", image: "Pastell 2", medium: "Acryl auf Leinwand", size: "15 × 15 cm", collection: "Pastell" },
    "Pastell-3": { title: "Pastell 3", image: "Pastell 3", medium: "Acryl auf Leinwand", size: "15 × 15 cm", collection: "Pastell" },

    /* --- Individuals --- */
    "Himmel": { title: "Himmel", image: "Himmel", medium: "Acryl auf Leinwand", size: "60 × 60 cm", collection: null },
    "Erde": { title: "Erde", image: "Erde", medium: "Acryl auf Leinwand", size: "60 × 60 cm", collection: null },
    "Desert": { title: "Desert", image: "Desert", medium: "Acryl auf Leinwand", size: "40 × 40 cm", collection: null },
    "Perspektive-1": { title: "Perspektive 1", image: "Perspektive 1", medium: "Collage · Acryl auf Leinwand", size: "40 × 40 cm", collection: null },
    "Perspektive-2": { title: "Perspektive 2", image: "Perspektive 2", medium: "Acryl auf Leinwand", size: "40 × 40 cm", collection: null },
    "Anemone": { title: "Anemone", image: "Anemone", medium: "Acryl auf Karton", size: "100 × 70 cm", collection: null },
    "Rose": { title: "Rose", image: "Rose", medium: "Acryl auf Karton", size: "100 × 70 cm", collection: null },
    "Krokus": { title: "Krokus", image: "Krokus", medium: "Acryl auf Karton", size: "", collection: null },
    "La-Linea": { title: "La Linea", image: "La Linea", medium: "", size: "", collection: null },
    "Le-Bleu": { title: "Le Bleu", image: "Le Bleu", medium: "", size: "", collection: null },
    "Le-Noir": { title: "Le Noir", image: "Le Noir", medium: "", size: "", collection: null },
    "Le-Rouge": { title: "Le Rouge", image: "Le Rouge", medium: "", size: "", collection: null },
    "Scacco-Matto": { title: "Scacco Matto", image: "Scacco Matto", medium: "", size: "", collection: null }
  },

  /* Order of individual works shown on the home page. */
  individualsOrder: [
    "Himmel", "Erde", "Desert", "Perspektive-1", "Perspektive-2",
    "Anemone", "Rose", "Krokus", "La-Linea",
    "Le-Bleu", "Le-Noir", "Le-Rouge", "Scacco-Matto"
  ]
};
