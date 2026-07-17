/*
 * Portfolio data — single source of truth (multilingual: de / it / fr / en).
 *
 * - Titles are objects: { de, it, fr, en }.
 * - "medium" is a KEY into MEDIA below (so it translates automatically); "" = none.
 * - "image" is the base filename inside Images/ (without extension); the app tries
 *   several extensions automatically. Use null for works without a photo.
 * - "sold: true" marks a work as sold (badge shown top-left of the image).
 * - "price" (optional) overrides "Preis auf Anfrage", e.g. "260 CHF".
 */
window.PORTFOLIO = {
  languages: ["de", "it", "fr", "en"],
  defaultLang: "de",

  artist: "Carol Ferrari",

  tagline: {
    de: "Acryl & Mischtechnik",
    it: "Acrilico e tecnica mista",
    fr: "Acrylique et technique mixte",
    en: "Acrylic & mixed media"
  },
  intro: {
    de: "Abstrakte Acrylmalerei und Mischtechnik — ein Spiel aus Farbe, Fluss und Struktur, in dem feste Form und fliessender Raum aufeinandertreffen.",
    it: "Pittura acrilica astratta e tecnica mista — un gioco di colore, flusso e struttura, dove la forma solida incontra lo spazio fluido.",
    fr: "Peinture acrylique abstraite et technique mixte — un jeu de couleur, de flux et de structure, où la forme solide rencontre l'espace fluide.",
    en: "Abstract acrylic painting and mixed media — a play of colour, flow and texture, where solid form meets fluid space."
  },

  contact: {
    name: "Carol Ferrari",
    email: "carol.refe@bluewin.ch"
  },

  education: {
    de: "1979–1984 Kunstgewerbeschule, Textildesignerin, Lugano",
    it: "1979–1984 Scuola d’arte applicata, designer tessile, Lugano",
    fr: "1979–1984 École des arts appliqués, designer textile, Lugano",
    en: "1979–1984 School of Applied Arts, Textile Designer, Lugano"
  },


exhibitions: [
  {
    year: "November 2024",
    title: { de: "Thomson Gallery", it: "Thomson Gallery", fr: "Thomson Gallery", en: "Thomson Gallery" },
    place: { de: "Zug", it: "Zugo", fr: "Zoug", en: "Zug" }
  },
  {
    year: "October 2024",
    title: { de: "Artboxy", it: "Artboxy", fr: "Artboxy", en: "Artboxy" },
    place: { de: "Paris", it: "Parigi", fr: "Paris", en: "Paris" }
  },
  {
    year: "August 2024",
    title: { de: "Swissartexpo Artboxy Project", it: "Swissartexpo Artboxy Project", fr: "Swissartexpo Artboxy Project", en: "Swissartexpo Artboxy Project" },
    place: { de: "Zürich", it: "Zurigo", fr: "Zurich", en: "Zurich" }
  },
  {
    year: "2019",
    title: { de: "Perspektive", it: "Prospettiva", fr: "Perspective", en: "Perspective" },
    place: { de: "Galerie Glashütte, Zumikon", it: "Galerie Glashütte, Zumikon", fr: "Galerie Glashütte, Zumikon", en: "Galerie Glashütte, Zumikon" }
  },
  {
    year: "2018",
    title: { de: "Équilibre", it: "Equilibrio", fr: "Équilibre", en: "Balance" },
    place: { de: "Galerie Glashütte, Zumikon", it: "Galerie Glashütte, Zumikon", fr: "Galerie Glashütte, Zumikon", en: "Galerie Glashütte, Zumikon" }
  },
  {
    year: "2017",
    title: { de: "Anflug von Süden", it: "Avvicinamento da sud", fr: "Approche du sud", en: "Approach from the South" },
    place: { de: "Galerie Glashütte, Zumikon", it: "Galerie Glashütte, Zumikon", fr: "Galerie Glashütte, Zumikon", en: "Galerie Glashütte, Zumikon" }
  },
  {
    year: "2016",
    title: { de: "Le Passage dans l'Art", it: "Le Passage dans l'Art", fr: "Le Passage dans l'Art", en: "The Passage into Art" },
    place: { de: "Galerie Glashütte, Zumikon", it: "Galerie Glashütte, Zumikon", fr: "Galerie Glashütte, Zumikon", en: "Galerie Glashütte, Zumikon" }
  },
  {
    year: "2014",
    title: { de: "Klang-Art", it: "Arte sonora", fr: "Art sonore", en: "Sound Art" },
    place: { de: "Galerie Glashütte, Zumikon", it: "Galerie Glashütte, Zumikon", fr: "Galerie Glashütte, Zumikon", en: "Galerie Glashütte, Zumikon" }
  }
],

  /* ---------- UI strings ---------- */
  ui: {
    de: {
      langName: "DE",
      nav_collections: "Kollektionen", nav_contact: "Kontakt",
      collections: "Kollektionen", individuals: "Einzelwerke",
      viewCollection: "Kollektion ansehen →",
      technik: "Technik", format: "Format", kollektion: "Kollektion", preis: "Preis",
      priceOnRequest: "auf Anfrage", soldLabel: "Verkauft",
      back: "Zurück zum Portfolio", alsoIn: "Auch in", imageComing: "Bild folgt",
      exhibitions: "Ausstellungen", atelier: "Atelier", portfolio: "Portfolio",
      single: "Einzelwerk"
    },
    it: {
      langName: "IT",
      nav_collections: "Collezioni", nav_contact: "Contatto",
      collections: "Collezioni", individuals: "Opere singole",
      viewCollection: "Vedi la collezione →",
      technik: "Tecnica", format: "Formato", kollektion: "Collezione", preis: "Prezzo",
      priceOnRequest: "su richiesta", soldLabel: "Venduto",
      back: "Torna al portfolio", alsoIn: "Anche in", imageComing: "Immagine in arrivo",
      exhibitions: "Mostre", atelier: "Atelier", portfolio: "Portfolio",
      single: "Opera singola"
    },
    fr: {
      langName: "FR",
      nav_collections: "Collections", nav_contact: "Contact",
      collections: "Collections", individuals: "Œuvres individuelles",
      viewCollection: "Voir la collection →",
      technik: "Technique", format: "Format", kollektion: "Collection", preis: "Prix",
      priceOnRequest: "sur demande", soldLabel: "Vendu",
      back: "Retour au portfolio", alsoIn: "Aussi dans", imageComing: "Image à venir",
      exhibitions: "Expositions", atelier: "Atelier", portfolio: "Portfolio",
      single: "Œuvre individuelle"
    },
    en: {
      langName: "EN",
      nav_collections: "Collections", nav_contact: "Contact",
      collections: "Collections", individuals: "Individual works",
      viewCollection: "View collection →",
      technik: "Technique", format: "Format", kollektion: "Collection", preis: "Price",
      priceOnRequest: "on request", soldLabel: "Sold",
      back: "Back to portfolio", alsoIn: "Also in", imageComing: "Image coming soon",
      exhibitions: "Exhibitions", atelier: "Studio", portfolio: "Portfolio",
      single: "Individual work"
    }
  },

  /* ---------- Media (translated) ---------- */
  media: {
    leinwand: { de: "Acryl auf Leinwand", it: "Acrilico su tela", fr: "Acrylique sur toile", en: "Acrylic on canvas" },
    karton: { de: "Acryl auf Karton", it: "Acrilico su cartone", fr: "Acrylique sur carton", en: "Acrylic on cardboard" },
    collageLeinwand: { de: "Collage · Acryl auf Leinwand", it: "Collage · Acrilico su tela", fr: "Collage · Acrylique sur toile", en: "Collage · Acrylic on canvas" }
  },

  /* ---------- Collection type labels ---------- */
    types: {
    Solo: { de: "Solo", it: "Solo", fr: "Solo", en: "Solo" },
    Duo: { de: "Duo", it: "Duo", fr: "Duo", en: "Duo" },
    Trio: { de: "Trio", it: "Trio", fr: "Trio", en: "Trio" },
    Quartet: { de: "Quartett", it: "Quartetto", fr: "Quatuor", en: "Quartet" },
    Quintet: { de: "Quintett", it: "Quintetto", fr: "Quintette", en: "Quintet" },
    Sextet: { de: "Sextett", it: "Sestetto", fr: "Sextuor", en: "Sextet" },
    Septet: { de: "Septett", it: "Settimino", fr: "Septuor", en: "Septet" }
  },

  /* ---------- Collections (Perspektive first) ---------- */
  collections: [
    {
      slug: "Perspektive", type: "Quintet", medium: "",
      title: { de: "Perspektive", it: "Prospettiva", fr: "Perspective", en: "Perspective" },
      pieces: ["Perspektive-1", "Perspektive-2", "Perspektive-3", "Perspektive-4", "Perspektive-5"]
    },
    {
      slug: "Welten", type: "Quartet", medium: "", size: "",
      title: { de: "Welten", it: "Mondi", fr: "Mondes", en: "Worlds" },
      pieces: ["Himmel", "Erde", "Desert", "Scacco-Matto"]
    },
    {
      slug: "Welle", type: "Trio",
      title: { de: "Welle", it: "Onda", fr: "Vague", en: "Wave" },
      pieces: ["Gruene-Welle", "Rote-Welle", "Blaue-Welle"]
    },
    {
      slug: "Duo", type: "Duo",
      title: { de: "Duo", it: "Duo", fr: "Duo", en: "Duo" },
      pieces: ["Licht", "Dunkelheit"]
    },
    {
      slug: "Formen", type: "Trio",
      title: { de: "Formen", it: "Forme", fr: "Formes", en: "Forms" },
      pieces: ["Rechteck", "La-Linea", "Kreis"]
    },
    {
      slug: "Flash", type: "Trio",
      title: { de: "Flash", it: "Flash", fr: "Flash", en: "Flash" },
      pieces: ["Flash-1", "Flash-2", "Flash-3"]
    },
    {
      slug: "Pastell", type: "Trio",
      title: { de: "Pastell", it: "Pastello", fr: "Pastel", en: "Pastel" },
      pieces: ["Pastell-1", "Pastell-2", "Pastell-3"]
    },
    {
      slug: "Blumen", type: "", medium: "karton", size: "",
      title: { de: "Blumen", it: "Fiori", fr: "Fleurs", en: "Flowers" },
      pieces: ["Anemone", "Rose", "Krokus", "Krokus-2", "Rose-2", "Rose-3"]
    },
    {
      slug: "Menschen", type: "Duo",
      title: { de: "Menschen", it: "Persone", fr: "Personnes", en: "People" },
      pieces: ["Zusammen", "Allein"]
    },
    {
      slug: "Chromatische-Trilogie", type: "Trio",
      title: { de: "Chromatische Trilogie", it: "Trilogia Cromatica", fr: "Trilogie Chromatique", en: "Chromatic Trilogy" },
      pieces: ["Le-Bleu", "Le-Noir", "Le-Rouge"]
    },

    {
      slug: "Farben", type: "Trio",
      title: { "de": "Farben", "it": "Colori", "fr": "Couleurs", "en": "Colors" },
      pieces: ["Gelb", "Orange", "Gruen"]
    }
  ],
  

  /* ---------- Pieces (keyed by URL slug) ---------- */
  pieces: {
    /* Perspektive — slug number = displayed number; image is the original file */
    "Perspektive-1": { title: { de: "Perspektive 1", it: "Prospettiva 1", fr: "Perspective 1", en: "Perspective 1" }, image: "Perspektive 3", medium: "collageLeinwand", size: "3 × 40 × 40 cm", collection: "Perspektive", price: "260 CHF" },
    "Perspektive-2": { title: { de: "Perspektive 2", it: "Prospettiva 2", fr: "Perspective 2", en: "Perspective 2" }, image: "Perspektive 4", medium: "collageLeinwand", size: "3 × 40 × 40 cm", collection: "Perspektive", sold: true},
    "Perspektive-3": { title: { de: "Perspektive 3", it: "Prospettiva 3", fr: "Perspective 3", en: "Perspective 3" }, image: "Perspektive 5", medium: "collageLeinwand", size: "3 × 40 × 40 cm", collection: "Perspektive", sold: true},
    "Perspektive-4": { title: { de: "Perspektive 4", it: "Prospettiva 4", fr: "Perspective 4", en: "Perspective 4" }, image: "Perspektive 1", medium: "collageLeinwand", size: "3 × 40 × 40 cm", collection: "Perspektive" },
    "Perspektive-5": { title: { de: "Perspektive 5", it: "Prospettiva 5", fr: "Perspective 5", en: "Perspective 5" }, image: "Perspektive 2", medium: "leinwand", size: "3 × 40 × 40 cm", collection: "Perspektive" },

    /* Welten (Quartett) */
    "Himmel": { title: { de: "Himmel", it: "Cielo", fr: "Ciel", en: "Sky" }, image: "Himmel", medium: "leinwand", size: "3 × 60 × 60 cm", collection: "Welten" },
    "Erde": { title: { de: "Erde", it: "Terra", fr: "Terre", en: "Earth" }, image: "Erde", medium: "leinwand", size: "3 × 60 × 60 cm", collection: "Welten" },
    "Desert": { title: { de: "Wüste", it: "Deserto", fr: "Désert", en: "Desert" }, image: "Desert", medium: "leinwand", size: "3 × 40 × 40 cm", collection: "Welten" },
    "Scacco-Matto": { title: { de: "Schachmatt", it: "Scacco Matto", fr: "Échec et mat", en: "Checkmate" }, image: "Scacco Matto", medium: "leinwand", size: "3 ×70 × 70 cm", collection: "Welten" },

    /* Welle (Trio) */
    "Gruene-Welle": { title: { de: "Grüne Welle", it: "Onda Verde", fr: "Vague Verte", en: "Green Wave" }, image: "Grüne Welle", medium: "leinwand", size: "3 × 40 × 40 cm", collection: "Welle" },
    "Rote-Welle": { title: { de: "Rote Welle", it: "Onda Rossa", fr: "Vague Rouge", en: "Red Wave" }, image: "Rote Welle", medium: "leinwand", size: "3 × 40 × 40 cm", collection: "Welle" },
    "Blaue-Welle": { title: { de: "Blaue Welle", it: "Onda Blu", fr: "Vague Bleue", en: "Blue Wave" }, image: "Blaue Welle", medium: "leinwand", size: "3 × 40 × 40 cm", collection: "Welle" },

    /* Duo */
    "Licht": { title: { de: "Licht", it: "Luce", fr: "Lumière", en: "Light" }, image: "Licht", medium: "leinwand", size: "3 × 40 × 40 cm", collection: "Duo" },
    "Dunkelheit": { title: { de: "Dunkelheit", it: "Oscurità", fr: "Obscurité", en: "Darkness" }, image: "Dunkelheit", medium: "leinwand", size: "3 × 40 × 40 cm", collection: "Duo" },

    /* Formen (Trio) */
    "Rechteck": { title: { de: "Rechteck", it: "Rettangolo", fr: "Rectangle", en: "Rectangle" }, image: "Il Quadrato", medium: "leinwand", size: "3 × 30 × 30 cm", collection: "Formen" },
    "La-Linea": { title: { de: "Linie", it: "Linea", fr: "Ligne", en: "Line" }, image: "La Linea", medium: "leinwand", size: "3 × 30 × 30 cm", collection: "Formen" },
    "Kreis": { title: { de: "Kreis", it: "Cerchio", fr: "Cercle", en: "Circle" }, image: "Il Tondo", medium: "leinwand", size: "3 × 30 × 30 cm", collection: "Formen" },
    

    /* Flash (Trio) */
    "Flash-1": { title: { de: "Flash 1", it: "Flash 1", fr: "Flash 1", en: "Flash 1" }, image: "Flash 1", medium: "leinwand", size: "3 × 24 × 30 cm", collection: "Flash" },
    "Flash-2": { title: { de: "Flash 2", it: "Flash 2", fr: "Flash 2", en: "Flash 2" }, image: "Flash 2", medium: "leinwand", size: "3 × 24 × 30 cm", collection: "Flash" },
    "Flash-3": { title: { de: "Flash 3", it: "Flash 3", fr: "Flash 3", en: "Flash 3" }, image: "Flash 3", medium: "leinwand", size: "3 × 24 × 30 cm", collection: "Flash" },

    /* Pastell (Trio) */
    "Pastell-1": { title: { de: "Pastell 1", it: "Pastello 1", fr: "Pastel 1", en: "Pastel 1" }, image: "Pastell 1", medium: "leinwand", size: "3 × 15 × 15 cm", collection: "Pastell" },
    "Pastell-2": { title: { de: "Pastell 2", it: "Pastello 2", fr: "Pastel 2", en: "Pastel 2" }, image: "Pastell 2", medium: "leinwand", size: "3 × 15 × 15 cm", collection: "Pastell" },
    "Pastell-3": { title: { de: "Pastell 3", it: "Pastello 3", fr: "Pastel 3", en: "Pastel 3" }, image: "Pastell 3", medium: "leinwand", size: "3 × 15 × 15 cm", collection: "Pastell" },

    /* Blumen (Trio) */
    "Anemone": { title: { de: "Anemone", it: "Anemone", fr: "Anémone", en: "Anemone" }, image: "Anemone", medium: "karton", size: "1 × 70 × 100 cm", collection: "Blumen" },
    "Rose": { title: { de: "Rose", it: "Rosa", fr: "Rose", en: "Rose" }, image: "Rose", medium: "karton", size: "1 × 70 × 100 cm", collection: "Blumen" },
    "Krokus": { title: { de: "Krokus", it: "Croco", fr: "Crocus", en: "Crocus" }, image: "Krokus", medium: "karton", size: "1 × 70 × 100 cm", collection: "Blumen" },
    "Krokus-2": { title: { de: "Krokus 2", it: "Croco 2", fr: "Crocus 2", en: "Crocus 2" }, image: "Krokus 2", medium: "karton", size: "3 × 30 × 30 cm", collection: "Blumen" },
    "Rose-2": { title: { de: "Rose 2", it: "Rosa 2", fr: "Rose 2", en: "Rose 2" }, image: "Rose 2", medium: "karton", size: "3 × 20 × 20 cm", collection: "Blumen" },
    "Rose-3": { title: { de: "Rose 3", it: "Rosa 3", fr: "Rose 3", en: "Rose 3" }, image: "Rose 3", medium: "karton", size: "3 × 20 × 20 cm", collection: "Blumen" },

    /* Menschen (Duo) */
    "Zusammen": { title: { de: "Zusammen", it: "Insieme", fr: "Ensemble", en: "Together" }, image: "Zusammen", medium: "collageLeinwand", size: "3 × 60 × 50 cm", collection: "Menschen" },
    "Allein": { title: { de: "Allein", it: "Solo", fr: "Seul", en: "Alone" }, image: "Alleine", medium: "collageLeinwand", size: "3 × 50 × 50 cm", collection: "Menschen" },

    /* Chromatische Trilogie (Trio) */
    "Le-Bleu": { title: { de: "Blau", it: "Blu", fr: "Bleu", en: "Blue" }, image: "Le Bleu", medium: "leinwand", size: "3 × 24 × 30 cm", collection: "Chromatische-Trilogie" },
    "Le-Noir": { title: { de: "Schwarz", it: "Nero", fr: "Noir", en: "Black" }, image: "Le Noir", medium: "leinwand", size: "3 × 24 × 30 cm", collection: "Chromatische-Trilogie" },
    "Le-Rouge": { title: { de: "Rot", it: "Rosso", fr: "Rouge", en: "Red" }, image: "Le Rouge", medium: "leinwand", size: "3 × 24 × 30 cm", collection: "Chromatische-Trilogie" },

    /* Farben (Trio) */
    "Gelb": { title: { de: "Gelb", it: "Giallo", fr: "Jaune", en: "Yellow" }, image: "Gelb", medium: "leinwand", size: "3 × 30 × 30 cm", collection: "Farben", sold: true },
    "Orange": { title: { de: "Orange", it: "Arancione", fr: "Orange", en: "Orange" }, image: "Orange", medium: "leinwand", size: "3 × 30 × 30 cm", collection: "Farben", sold: true },
    "Gruen": { title: { de: "Grün", it: "Verde", fr: "Vert", en: "Green" }, image: "Grün", medium: "leinwand", size: "3 × 30 × 30 cm", collection: "Farben", sold: true}
  },

  /* Works shown under "Einzelwerke" (none — all grouped). */
  individualsOrder: []
};
