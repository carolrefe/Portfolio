(function () {
    "use strict";

    var P = window.PORTFOLIO;
    var PAGE = window.PAGE || { type: "home", base: "" };
    var BASE = PAGE.base || "";
    var EXTENSIONS = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "jfif"];
    var LANG_KEY = "cf_lang";

    /* ---------- language ---------- */
    function getLang() {
        var stored = null;
        try { stored = localStorage.getItem(LANG_KEY); } catch (e) {}
        if (stored && P.languages.indexOf(stored) !== -1) return stored;
        return P.defaultLang;
    }
    function setLang(l) {
        try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
        LANG = l;
        document.documentElement.lang = l;
        render();
    }
    var LANG = getLang();

    function L() { return P.ui[LANG] || P.ui[P.defaultLang]; }
    function tt(obj) { if (!obj) return ""; return obj[LANG] || obj[P.defaultLang] || ""; }
    function mediumText(key) { return key && P.media[key] ? tt(P.media[key]) : ""; }
    function typeLabel(type) { return P.types[type] ? tt(P.types[type]) : type; }
    function pieceTitle(slug) { return tt(P.pieces[slug].title); }
    function collectionBySlug(slug) {
        return P.collections.filter(function (c) { return c.slug === slug; })[0];
    }

    /* ---------- helpers ---------- */
    function el(tag, attrs, html) {
        var e = document.createElement(tag);
        if (attrs) {
            Object.keys(attrs).forEach(function (k) {
                if (k === "class") e.className = attrs[k];
                else e.setAttribute(k, attrs[k]);
            });
        }
        if (html != null) e.innerHTML = html;
        return e;
    }
    function pieceUrl(slug) { return BASE + slug + "/"; }
    function collectionUrl(slug) { return BASE + slug + "/"; }
    function homeUrl() { return BASE === "" ? "index.html" : BASE; }

    function artImage(imageName, alt, onClick) {
        if (!imageName) {
            return el("div", { class: "placeholder" }, L().imageComing);
        }
        var img = el("img", { alt: alt, loading: "lazy" });
        img.dataset.ext = 0;
        function srcFor(i) { return BASE + "Images/" + encodeURIComponent(imageName) + "." + EXTENSIONS[i]; }
        img.src = srcFor(0);
        img.onerror = function () {
            var next = parseInt(img.dataset.ext, 10) + 1;
            if (next < EXTENSIONS.length) { img.dataset.ext = next; img.src = srcFor(next); }
            else { img.onerror = null; img.style.display = "none"; }
        };
        if (onClick) { img.style.cursor = "zoom-in"; img.addEventListener("click", onClick); }
        return img;
    }

    function card(slug) {
        var p = P.pieces[slug];
        if (!p) { console.warn("Unknown piece slug: " + slug); return el("span", { style: "display:none" }); }
        var a = el("a", { class: "card reveal", href: pieceUrl(slug) });
        var frame = el("div", { class: "frame" });
        frame.appendChild(artImage(p.image, pieceTitle(slug)));
        // if (p.sold) frame.appendChild(el("span", { class: "badge" }, L().soldLabel));
        a.appendChild(frame);
        var info = el("div", { class: "info" });
        info.appendChild(el("div", { class: "t" }, pieceTitle(slug)));
        if (p.size) info.appendChild(el("div", { class: "s" }, p.size));
        a.appendChild(info);
        return a;
    }

    /* ---------- chrome ---------- */
    function topbar() {
        var bar = el("header", { class: "topbar" });
        var w = el("div", { class: "wrap" });
        w.appendChild(el("a", { class: "brand", href: homeUrl() }, "Carol Ferrari<span>.</span>"));

        var right = el("div", { class: "topright" });
        var nav = el("nav", { class: "topnav" });
        nav.appendChild(el("a", { href: homeUrl() + "#collections" }, L().nav_collections));
        nav.appendChild(el("a", { href: homeUrl() + "#contact" }, L().nav_contact));
        right.appendChild(nav);

        var langs = el("div", { class: "langs" });
        P.languages.forEach(function (l) {
            var b = el("button", { class: "lang" + (l === LANG ? " active" : ""), type: "button" }, P.ui[l].langName);
            b.addEventListener("click", function () { setLang(l); });
            langs.appendChild(b);
        });
        right.appendChild(langs);
        w.appendChild(right);
        bar.appendChild(w);
        return bar;
    }

    function footer() {
        var f = el("footer", { class: "footer", id: "contact" });
        var w = el("div", { class: "wrap" });

        var c1 = el("div", { class: "col" });
        c1.appendChild(el("h4", null, L().nav_contact));
        c1.appendChild(el("p", null, P.contact.name));
        c1.appendChild(el("a", { href: "mailto:" + P.contact.email }, P.contact.email));

        var c2 = el("div", { class: "col" });
        c2.appendChild(el("h4", null, L().exhibitions));
        var ul = el("ul", { class: "exhib" });
        P.exhibitions.forEach(function (ex) {
            ul.appendChild(el("li", null, "<b>" + ex.year + "</b> " + tt(ex.title) + " — " + tt(ex.place)));
        });
        c2.appendChild(ul);

        var c3 = el("div", { class: "col" });
        c3.appendChild(el("h4", null, L().atelier));
        c3.appendChild(el("p", null, tt(P.tagline)));
        c3.appendChild(el("p", null, "© " + new Date().getFullYear() + " " + P.artist));

        w.appendChild(c1); w.appendChild(c2); w.appendChild(c3);
        f.appendChild(w);
        return f;
    }

    function lightbox() {
        var lb = el("div", { class: "lightbox", id: "lightbox" });
        lb.appendChild(el("button", { class: "lb-close", "aria-label": "×" }, "&times;"));
        lb.appendChild(el("img", { alt: "" }));
        lb.addEventListener("click", function (e) {
            if (e.target === lb || e.target.classList.contains("lb-close")) closeLightbox();
        });
        document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLightbox(); });
        return lb;
    }
    function openLightbox(src, alt) {
        var lb = document.getElementById("lightbox");
        lb.querySelector("img").src = src;
        lb.querySelector("img").alt = alt || "";
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
        var lb = document.getElementById("lightbox");
        if (lb) { lb.classList.remove("open"); document.body.style.overflow = ""; }
    }

    /* pieces sold */
    function soldSlugs() {
        return Object.keys(P.pieces).filter(function (s) { return P.pieces[s].sold; });
    }
    /* global order for prev/next */
    function orderedSlugs() {
        var order = [];
        P.collections.forEach(function (c) { c.pieces.forEach(function (s) { if (order.indexOf(s) === -1) order.push(s); }); });
        soldSlugs().forEach(function (s) { if (order.indexOf(s) === -1) order.push(s); });
        P.individualsOrder.forEach(function (s) { if (order.indexOf(s) === -1) order.push(s); });
        return order;
    }

    /* ---------- HOME ---------- */
    function renderHome(root) {
        document.title = P.artist + " — " + L().collections;
        root.appendChild(topbar());

        var hero = el("section", { class: "hero" });
        var hw = el("div", { class: "wrap" });
        hw.appendChild(el("p", { class: "kicker" }, tt(P.tagline)));
        hw.appendChild(el("h1", null, P.artist));
        hw.appendChild(el("p", null, tt(P.intro)));
        hero.appendChild(hw);
        root.appendChild(hero);

        // Collections
        var colSection = el("section", { class: "section", id: "collections" });
        var cw = el("div", { class: "wrap" });
        P.collections.forEach(function (c) {
            var head = el("div", { class: "section-head" });
            var left = el("div");
            left.appendChild(el("h2", null, tt(c.title) + (c.type ? '<span class="tag">' + typeLabel(c.type) + "</span>" : "")));
            head.appendChild(left);
            head.appendChild(el("a", { class: "collection-link", href: collectionUrl(c.slug) }, L().viewCollection));
            cw.appendChild(head);

            var metaText = [mediumText(c.medium), c.size].filter(Boolean).join(" · ");
            if (metaText) cw.appendChild(el("p", { class: "meta-inline", style: "margin:-18px 0 22px" }, metaText));

            var grid = el("div", { class: "grid " + (c.pieces.length === 2 ? "cols-2" : "cols-3") });
            c.pieces.forEach(function (s) { grid.appendChild(card(s)); });
            cw.appendChild(grid);
            cw.appendChild(el("div", { style: "height:52px" }));
        });
        colSection.appendChild(cw);
        root.appendChild(colSection);

        // Einzelwerke (only if any)
        if (P.individualsOrder.length) {
            var indSection = el("section", { class: "section", id: "works" });
            var iw = el("div", { class: "wrap" });
            var ih = el("div", { class: "section-head" });
            ih.appendChild(el("h2", null, L().individuals));
            iw.appendChild(ih);
            var igrid = el("div", { class: "grid auto" });
            P.individualsOrder.forEach(function (s) { igrid.appendChild(card(s)); });
            iw.appendChild(igrid);
            indSection.appendChild(iw);
            root.appendChild(indSection);
        }

        root.appendChild(footer());
    }

    /* ---------- PIECE DETAIL ---------- */
    function renderPiece(root, slug) {
        var p = P.pieces[slug];
        if (!p) { renderHome(root); return; }
        document.title = pieceTitle(slug) + " — " + P.artist;

        root.appendChild(topbar());
        root.appendChild(lightbox());

        var section = el("section", { class: "detail" });
        var w = el("div", { class: "wrap" });

        var crumbs = el("div", { class: "crumbs" });
        crumbs.innerHTML = '<a href="' + homeUrl() + '">' + L().portfolio + "</a>";
        if (p.collection) {
            var col = collectionBySlug(p.collection);
            crumbs.innerHTML += '<span class="sep">/</span><a href="' + collectionUrl(col.slug) + '">' + tt(col.title) + "</a>";
        }
        crumbs.innerHTML += '<span class="sep">/</span>' + pieceTitle(slug);
        w.appendChild(crumbs);

        var grid = el("div", { class: "detail-grid" });

        var media = el("div", { class: "detail-media reveal" });
        var big = artImage(p.image, pieceTitle(slug));
        if (p.image && big.tagName === "IMG") {
            big.addEventListener("click", function () { openLightbox(big.src, pieceTitle(slug)); });
        }
        media.appendChild(big);
        // if (p.sold) media.appendChild(el("span", { class: "badge badge-lg" }, L().soldLabel));
        grid.appendChild(media);

        var info = el("div", { class: "detail-info" });
        var kicker = L().single;
        if (p.collection) {
            var kcol = collectionBySlug(p.collection);
            kicker = tt(kcol.title) + (kcol.type ? " · " + typeLabel(kcol.type) : "");
        }
        info.appendChild(el("p", { class: "kicker" }, kicker));
        info.appendChild(el("h1", null, pieceTitle(slug)));

        var spec = el("ul", { class: "spec" });
        if (p.medium) spec.appendChild(el("li", null, "<span>" + L().technik + "</span><span>" + mediumText(p.medium) + "</span>"));
        if (p.size) spec.appendChild(el("li", null, "<span>" + L().format + "</span><span>" + p.size + "</span>"));
        if (p.collection) spec.appendChild(el("li", null, '<span>' + L().kollektion + '</span><span><a class="collection-link" href="' + collectionUrl(p.collection) + '">' + tt(collectionBySlug(p.collection).title) + "</a></span>"));
        var priceVal = p.sold ? L().soldLabel : (p.price ? p.price : L().priceOnRequest);
        spec.appendChild(el("li", null, "<span>" + L().preis + "</span><span>" + priceVal + "</span>"));
        info.appendChild(spec);

        var order = orderedSlugs();
        var idx = order.indexOf(slug);
        if (idx !== -1) {
            var prev = order[(idx - 1 + order.length) % order.length];
            var next = order[(idx + 1) % order.length];
            var dn = el("div", { class: "detail-nav" });
            dn.appendChild(el("a", { href: pieceUrl(prev) }, "← " + pieceTitle(prev)));
            dn.appendChild(el("a", { href: pieceUrl(next) }, pieceTitle(next) + " →"));
            info.appendChild(dn);
        }
        info.appendChild(el("a", { class: "btn-back", href: homeUrl() }, L().back));
        grid.appendChild(info);
        w.appendChild(grid);

        if (p.collection) {
            var col2 = collectionBySlug(p.collection);
            var members = collectionMembers(col2);
            var others = members.filter(function (s) { return s !== slug; });
            if (others.length) {
                var also = el("div", { class: "also" });
                also.appendChild(el("h3", null, L().alsoIn + " " + tt(col2.title)));
                var g = el("div", { class: "grid " + (others.length <= 2 ? "cols-2" : "cols-3") });
                others.forEach(function (s) { g.appendChild(card(s)); });
                also.appendChild(g);
                w.appendChild(also);
            }
        }

        section.appendChild(w);
        root.appendChild(section);
        root.appendChild(footer());
    }

    /* members of a collection = declared pieces + any sold pieces referencing it */
    function collectionMembers(c) {
        var members = c.pieces.slice();
        Object.keys(P.pieces).forEach(function (s) {
            if (P.pieces[s].collection === c.slug && members.indexOf(s) === -1) members.push(s);
        });
        return members;
    }

    /* ---------- COLLECTION ---------- */
    function renderCollection(root, slug) {
        var c = collectionBySlug(slug);
        if (!c) { renderHome(root); return; }
        document.title = tt(c.title) + " (" + typeLabel(c.type) + ") — " + P.artist;

        root.appendChild(topbar());

        var section = el("section", { class: "detail" });
        var w = el("div", { class: "wrap" });

        var crumbs = el("div", { class: "crumbs" });
        crumbs.innerHTML = '<a href="' + homeUrl() + '">' + L().portfolio + '</a><span class="sep">/</span>' + tt(c.title);
        w.appendChild(crumbs);

        var head = el("div", { class: "section-head" });
        head.appendChild(el("h2", null, tt(c.title) + (c.type ? '<span class="tag">' + typeLabel(c.type) + "</span>" : "")));
        var metaText = [mediumText(c.medium), c.size].filter(Boolean).join(" · ");
        if (metaText) head.appendChild(el("span", { class: "meta-inline" }, metaText));
        w.appendChild(head);

        var members = collectionMembers(c);
        var grid = el("div", { class: "grid " + (members.length === 2 ? "cols-2" : "cols-3") });
        members.forEach(function (s) { grid.appendChild(card(s)); });
        w.appendChild(grid);

        w.appendChild(el("a", { class: "btn-back", href: homeUrl() }, L().back));

        section.appendChild(w);
        root.appendChild(section);
        root.appendChild(footer());
    }

    /* ---------- reveal ---------- */
    function initReveal() {
        var targets = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window)) {
            targets.forEach(function (t) { t.classList.add("in"); });
            return;
        }
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
            });
        }, { threshold: 0.1 });
        targets.forEach(function (t) { obs.observe(t); });
    }

    /* ---------- render / boot ---------- */
    function render() {
        var root = document.getElementById("app");
        root.innerHTML = "";
        document.body.style.overflow = "";
        if (PAGE.type === "piece") renderPiece(root, PAGE.slug);
        else if (PAGE.type === "collection") renderCollection(root, PAGE.slug);
        else renderHome(root);
        initReveal();
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.documentElement.lang = LANG;
        render();
    });
})();
