(function () {
    "use strict";

    var P = window.PORTFOLIO;
    var PAGE = window.PAGE || { type: "home", base: "" };
    var BASE = PAGE.base || "";
    var EXTENSIONS = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "jfif"];

    /* ---------- helpers ---------- */
    function el(tag, attrs, html) {
        var e = document.createElement(tag);
        if (attrs) {
            Object.keys(attrs).forEach(function (k) {
                if (k === "class") e.className = attrs[k];
                else if (k === "href") e.setAttribute("href", attrs[k]);
                else e.setAttribute(k, attrs[k]);
            });
        }
        if (html != null) e.innerHTML = html;
        return e;
    }

    function pieceUrl(slug) { return BASE + slug + "/"; }
    function collectionUrl(slug) { return BASE + slug + "/"; }
    function homeUrl() { return BASE === "" ? "index.html" : BASE; }

    // Build an <img> that tries multiple extensions, or a placeholder if no image.
    function artImage(imageName, alt, onClick) {
        if (!imageName) {
            var ph = el("div", { class: "placeholder" }, "Bild folgt");
            return ph;
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
        var a = el("a", { class: "card reveal", href: pieceUrl(slug) });
        var frame = el("div", { class: "frame" });
        frame.appendChild(artImage(p.image, p.title));
        a.appendChild(frame);
        var info = el("div", { class: "info" });
        info.appendChild(el("div", { class: "t" }, p.title));
        if (p.size) info.appendChild(el("div", { class: "s" }, p.size));
        a.appendChild(info);
        return a;
    }

    /* ---------- shared chrome ---------- */
    function topbar() {
        var bar = el("header", { class: "topbar" });
        var w = el("div", { class: "wrap" });
        var brand = el("a", { class: "brand", href: homeUrl() }, "Carol Ferrari<span>.</span>");
        var nav = el("nav", { class: "topnav" });
        nav.appendChild(el("a", { href: homeUrl() + "#collections" }, "Kollektionen"));
        nav.appendChild(el("a", { href: homeUrl() + "#works" }, "Werke"));
        nav.appendChild(el("a", { href: homeUrl() + "#contact" }, "Kontakt"));
        w.appendChild(brand); w.appendChild(nav); bar.appendChild(w);
        return bar;
    }

    function footer() {
        var f = el("footer", { class: "footer", id: "contact" });
        var w = el("div", { class: "wrap" });

        var c1 = el("div", { class: "col" });
        c1.appendChild(el("h4", null, "Kontakt"));
        c1.appendChild(el("p", null, P.contact.name));
        c1.appendChild(el("p", null, P.contact.address));
        c1.appendChild(el("a", { href: "tel:" + P.contact.phone.replace(/\s/g, "") }, P.contact.phone));
        c1.appendChild(el("a", { href: "mailto:" + P.contact.email }, P.contact.email));

        var c2 = el("div", { class: "col" });
        c2.appendChild(el("h4", null, "Ausstellungen"));
        var ul = el("ul", { class: "exhib" });
        P.exhibitions.forEach(function (ex) {
            ul.appendChild(el("li", null, "<b>" + ex.year + "</b> " + ex.title + " — " + ex.place));
        });
        c2.appendChild(ul);

        var c3 = el("div", { class: "col" });
        c3.appendChild(el("h4", null, "Atelier"));
        c3.appendChild(el("p", null, P.tagline));
        c3.appendChild(el("p", null, "© " + new Date().getFullYear() + " " + P.artist));

        w.appendChild(c1); w.appendChild(c2); w.appendChild(c3);
        f.appendChild(w);
        return f;
    }

    function lightbox() {
        var lb = el("div", { class: "lightbox", id: "lightbox" });
        lb.appendChild(el("button", { class: "lb-close", "aria-label": "Schließen" }, "&times;"));
        lb.appendChild(el("img", { alt: "" }));
        lb.addEventListener("click", function (e) {
            if (e.target === lb || e.target.classList.contains("lb-close")) closeLightbox();
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeLightbox();
        });
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

    /* ---------- global ordering for prev/next ---------- */
    function orderedSlugs() {
        var order = [];
        P.collections.forEach(function (c) { c.pieces.forEach(function (s) { order.push(s); }); });
        P.individualsOrder.forEach(function (s) { order.push(s); });
        return order;
    }

    /* ---------- HOME ---------- */
    function renderHome(root) {
        root.appendChild(topbar());

        var hero = el("section", { class: "hero" });
        var hw = el("div", { class: "wrap" });
        hw.appendChild(el("p", { class: "kicker" }, P.tagline));
        hw.appendChild(el("h1", null, P.artist));
        hw.appendChild(el("p", null, P.intro));
        hero.appendChild(hw);
        root.appendChild(hero);

        // Collections
        var colSection = el("section", { class: "section", id: "collections" });
        var cw = el("div", { class: "wrap" });
        P.collections.forEach(function (c) {
            var head = el("div", { class: "section-head" });
            var left = el("div");
            left.appendChild(el("h2", null, c.title + '<span class="tag">' + c.type + "</span>"));
            head.appendChild(left);
            head.appendChild(el("a", { class: "collection-link", href: collectionUrl(c.slug) }, "Kollektion ansehen →"));
            cw.appendChild(head);

            var metaLine = el("p", { class: "meta-inline", style: "margin:-18px 0 22px" }, c.medium + " · " + c.size);
            cw.appendChild(metaLine);

            var grid = el("div", { class: "grid " + (c.pieces.length === 2 ? "cols-2" : "cols-3") });
            c.pieces.forEach(function (s) { grid.appendChild(card(s)); });
            cw.appendChild(grid);

            var spacer = el("div", { style: "height:52px" });
            cw.appendChild(spacer);
        });
        colSection.appendChild(cw);
        root.appendChild(colSection);

        // Individuals
        var indSection = el("section", { class: "section", id: "works" });
        var iw = el("div", { class: "wrap" });
        var ih = el("div", { class: "section-head" });
        ih.appendChild(el("h2", null, "Einzelwerke"));
        ih.appendChild(el("span", { class: "meta-inline" }, P.individualsOrder.length + " Werke"));
        iw.appendChild(ih);
        var igrid = el("div", { class: "grid auto" });
        P.individualsOrder.forEach(function (s) { igrid.appendChild(card(s)); });
        iw.appendChild(igrid);
        indSection.appendChild(iw);
        root.appendChild(indSection);

        root.appendChild(footer());
    }

    /* ---------- PIECE DETAIL ---------- */
    function renderPiece(root, slug) {
        var p = P.pieces[slug];
        if (!p) { renderHome(root); return; }
        document.title = p.title + " — " + P.artist;

        root.appendChild(topbar());
        root.appendChild(lightbox());

        var section = el("section", { class: "detail" });
        var w = el("div", { class: "wrap" });

        // breadcrumbs
        var crumbs = el("div", { class: "crumbs" });
        crumbs.innerHTML = '<a href="' + homeUrl() + '">Portfolio</a>';
        if (p.collection) {
            var col = collectionBySlug(p.collection);
            crumbs.innerHTML += '<span class="sep">/</span><a href="' + collectionUrl(col.slug) + '">' + col.title + "</a>";
        }
        crumbs.innerHTML += '<span class="sep">/</span>' + p.title;
        w.appendChild(crumbs);

        var grid = el("div", { class: "detail-grid" });

        var media = el("div", { class: "detail-media reveal" });
        var big = artImage(p.image, p.title);
        if (p.image && big.tagName === "IMG") {
            big.addEventListener("click", function () { openLightbox(big.src, p.title); });
        }
        media.appendChild(big);
        grid.appendChild(media);

        var info = el("div", { class: "detail-info" });
        info.appendChild(el("p", { class: "kicker" }, p.collection ? collectionBySlug(p.collection).title + " · " + collectionBySlug(p.collection).type : "Einzelwerk"));
        info.appendChild(el("h1", null, p.title));
        var spec = el("ul", { class: "spec" });
        if (p.medium) spec.appendChild(el("li", null, "<span>Technik</span><span>" + p.medium + "</span>"));
        if (p.size) spec.appendChild(el("li", null, "<span>Format</span><span>" + p.size + "</span>"));
        if (p.collection) spec.appendChild(el("li", null, '<span>Kollektion</span><span><a class="collection-link" href="' + collectionUrl(p.collection) + '">' + collectionBySlug(p.collection).title + "</a></span>"));
        info.appendChild(spec);

        // prev / next
        var order = orderedSlugs();
        var idx = order.indexOf(slug);
        if (idx !== -1) {
            var prev = order[(idx - 1 + order.length) % order.length];
            var next = order[(idx + 1) % order.length];
            var dn = el("div", { class: "detail-nav" });
            dn.appendChild(el("a", { href: pieceUrl(prev) }, "← " + P.pieces[prev].title));
            dn.appendChild(el("a", { href: pieceUrl(next) }, P.pieces[next].title + " →"));
            info.appendChild(dn);
        }
        info.appendChild(el("a", { class: "btn-back", href: homeUrl() }, "Zurück zum Portfolio"));
        grid.appendChild(info);
        w.appendChild(grid);

        // also in this collection
        if (p.collection) {
            var col2 = collectionBySlug(p.collection);
            var others = col2.pieces.filter(function (s) { return s !== slug; });
            if (others.length) {
                var also = el("div", { class: "also" });
                also.appendChild(el("h3", null, "Auch in " + col2.title));
                var g = el("div", { class: "grid " + (others.length === 1 ? "cols-2" : "cols-3") });
                others.forEach(function (s) { g.appendChild(card(s)); });
                also.appendChild(g);
                w.appendChild(also);
            }
        }

        section.appendChild(w);
        root.appendChild(section);
        root.appendChild(footer());
    }

    /* ---------- COLLECTION ---------- */
    function collectionBySlug(slug) {
        return P.collections.filter(function (c) { return c.slug === slug; })[0];
    }
    function renderCollection(root, slug) {
        var c = collectionBySlug(slug);
        if (!c) { renderHome(root); return; }
        document.title = c.title + " (" + c.type + ") — " + P.artist;

        root.appendChild(topbar());

        var section = el("section", { class: "detail" });
        var w = el("div", { class: "wrap" });

        var crumbs = el("div", { class: "crumbs" });
        crumbs.innerHTML = '<a href="' + homeUrl() + '">Portfolio</a><span class="sep">/</span>' + c.title;
        w.appendChild(crumbs);

        var head = el("div", { class: "section-head" });
        head.appendChild(el("h2", null, c.title + '<span class="tag">' + c.type + "</span>"));
        head.appendChild(el("span", { class: "meta-inline" }, c.medium + " · " + c.size));
        w.appendChild(head);

        var grid = el("div", { class: "grid " + (c.pieces.length === 2 ? "cols-2" : "cols-3") });
        c.pieces.forEach(function (s) { grid.appendChild(card(s)); });
        w.appendChild(grid);

        w.appendChild(el("a", { class: "btn-back", href: homeUrl() }, "Zurück zum Portfolio"));

        section.appendChild(w);
        root.appendChild(section);
        root.appendChild(footer());
    }

    /* ---------- reveal on scroll ---------- */
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

    /* ---------- boot ---------- */
    document.addEventListener("DOMContentLoaded", function () {
        var root = document.getElementById("app");
        if (PAGE.type === "piece") renderPiece(root, PAGE.slug);
        else if (PAGE.type === "collection") renderCollection(root, PAGE.slug);
        else renderHome(root);
        initReveal();
    });
})();
