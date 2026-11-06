/* =====================================================================
   VIEW — everything that draws to the screen. No app logic lives here;
   the Controller tells the View what to show.
   ===================================================================== */

const View = {

  reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,

  els: {
    screens:    {},   // filled in init()
    menuItems:  [],
    wipe:       document.getElementById("wipe"),
    memberGrid:  document.getElementById("member-grid"),
    eventGrid:   document.getElementById("event-grid"),
    galleryGrid: document.getElementById("gallery-grid"),
    sfx:        document.getElementById("sfx-select"),
    cursor:     document.getElementById("cursor"),
    clock:      document.getElementById("clock"),
  },

  init() {
    document.querySelectorAll(".screen").forEach(s => {
      this.els.screens[s.id.replace("screen-", "")] = s;
    });
    this.els.menuItems = [...document.querySelectorAll(".menu-item")];
    document.querySelectorAll("[data-ransom]").forEach(el => this.ransomize(el));
    this.els.sfx.volume = 0.45;
    this.startClock();
    this.startParallax();
    this.startCursor();
    document.body.classList.add("loaded");
  },

  // Deterministic pseudo-random hash (so letters look the same every visit)
  hash(str) {
    let h = 9;
    for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 387420489);
    return (h ^ h >>> 9) >>> 0;
  },

  /* ---------- Ransom-note lettering ---------- */
  ransomize(el) {
    const text = el.dataset.ransom || el.textContent;
    el.textContent = "";
    [...text].forEach((c, i) => {
      const span = document.createElement("span");
      span.className = "ch display";
      span.textContent = c;
      const h = this.hash(text + i);
      const rot = (h % 17) - 8;                 // -8..8 degrees
      const scale = 0.86 + ((h >> 3) % 30) / 100; // 0.86..1.15
      const dy = ((h >> 5) % 9) - 4;            // -4..4 px
      const t = `rotate(${rot}deg) scale(${scale}) translateY(${dy}px)`;
      span.style.setProperty("--t", t);
      span.style.transform = t;
    const variant = (h >> 7) % 10;

// Force specific letters to have black boxes
if (
  (text === "SIRKEL" && c === "K") ||
  (text === "SOLIDARITY" && c === "N")
) {
  span.classList.add("box");
}
else if (variant === 0) {
  span.classList.add("box");
}
else if (variant === 1) {
  span.classList.add("boxw");
}
else if (variant === 2) {
  span.classList.add("red");
}

el.appendChild(span);
    });
  },

  /* ---------- Screens & menu ---------- */
  showScreen(name) {
    const s = this.els.screens;
    Object.values(s).forEach(sc => sc.classList.remove("active"));
    s[name].classList.add("active");
    s[name].scrollTop = 0;
    document.body.dataset.screen = name;

    // video Home: putar dari awal tiap kembali ke Home, jeda di layar lain
    const vid = document.getElementById("art-home");
    if (vid && vid.play) {
      if (name === "home") { try { vid.currentTime = 0; } catch {} vid.play().catch(() => {}); }
      else vid.pause();
    }
  },

  setMenuSelection(index) {
    this.els.menuItems.forEach((m, j) => m.classList.toggle("sel", j === index));
  },

  // Diagonal wipe; calls swap() mid-way while the screen is covered
  wipe(swap, done) {
    if (this.reducedMotion) { swap(); done(); return; }
    const w = this.els.wipe;
    w.classList.remove("go"); void w.offsetWidth;  // restart animation
    w.classList.add("go");
    setTimeout(swap, 340);
    setTimeout(done, 720);
  },

  /* ---------- Sound ---------- */
  playSelect() {
    try {
      this.els.sfx.currentTime = 0;
      const p = this.els.sfx.play();
      if (p && p.catch) p.catch(() => {});  // blocked before first user gesture — fine
    } catch {}
  },

  /* ---------- Kartu: anggota, kegiatan, galeri ---------- */
  // Split "Rafi" so the first word renders in the accent color
  splitTitle(title) {
    const first = title.split(" ")[0];
    return `<em>${first}</em>${title.slice(first.length)}`;
  },

  // Foto + huruf cadangan: kalau file gambar tidak ada, <img> dihapus dan huruf tampil
  thumb(src, ini, cls = "", alt = "") {
    return `<div class="thumb ${cls}"><span class="ini" aria-hidden="true">${ini}</span>` +
           `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()"></div>`;
  },

  addCard(grid, i, key, cls, html) {
    const el = document.createElement("article");
    el.className = "card " + cls;
    el.style.setProperty("--tilt", ((this.hash(key) % 5) - 2) * 0.8 + "deg");
    el.style.setProperty("--d", i * 70 + "ms");
    el.innerHTML = html;
    grid.appendChild(el);
  },

  renderMembers(list) {
    list.forEach((m, i) => this.addCard(this.els.memberGrid, i, m.name, "", `
      ${this.thumb(m.photo, m.name[0], "member", "Foto " + m.name)}
      <span class="lang">${m.rn} · ${m.arcana}</span>
      <h3>${this.splitTitle(m.name)}</h3>
      <p>${m.quote}</p>
      <div class="meta"><span>RANK ${m.rank}</span><span class="go">SOCIAL LINK</span></div>`));
  },

  renderEvents(list) {
    list.forEach((e, i) => this.addCard(this.els.eventGrid, i, e.title, "feat", `
      <span class="lang" style="--lc:${e.color}">${e.tag}</span>
      <h3>${this.splitTitle(e.title)}</h3>
      <p>${e.desc}</p>
      <div class="meta"><span>${e.when}</span><span class="go">${e.where}</span></div>`));
  },

  renderGallery(list) {
    list.forEach((g, i) => this.addCard(this.els.galleryGrid, i, g.title, "", `
      ${this.thumb(g.img, String(i + 1).padStart(2, "0"), "member", g.title)}
      <h3>${this.splitTitle(g.title)}</h3>
      <p>${g.desc}</p>`));
  },

  /* ---------- Ambient: clock, parallax, animated cursor ---------- */
  startClock() {
    setInterval(() => {
      this.els.clock.textContent =
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " · IND";
    }, 1000);
  },

  startParallax() {
    if (this.reducedMotion) return;
    const stripes = document.getElementById("bg-stripes");
    const halftone = document.getElementById("bg-halftone");
    const arts = [...document.querySelectorAll(".menu-art")];
    let tx = 0, ty = 0, cx = 0, cy = 0;
    addEventListener("mousemove", e => {
      tx = e.clientX / innerWidth - 0.5;
      ty = e.clientY / innerHeight - 0.5;
    }, { passive: true });
    const loop = () => {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      stripes.style.transform = `translate(${cx * 22}px, ${cy * 14}px)`;
      halftone.style.transform = `translate(${cx * -34}px, ${cy * -22}px)`;
      arts.forEach(a => {
        if (a.isConnected)
          a.style.transform = `translate(${cx * 14}px, ${cy * 9}px) scale(1.04)`;
      });
      requestAnimationFrame(loop);
    };
    loop();
  },

  // 30-frame sprite-strip cursor extracted from the original .ani files
  startCursor() {
    if (!matchMedia("(pointer:fine)").matches || this.reducedMotion) return;
    // sembunyikan kursor sistem hanya kalau sprite-nya benar-benar ada
    const probe = new Image();
    probe.onload = () => this.runCursor();
    probe.src = "assets/cursors/normal.png";
  },

  runCursor() {
    const cur = this.els.cursor;
    document.body.classList.add("cursor-on");
    let x = -100, y = -100, frame = 0, last = 0, visible = false;

    addEventListener("mousemove", e => {
      x = e.clientX; y = e.clientY;
      if (!visible) { cur.style.display = "block"; visible = true; }
      const t = e.target;
      const overLink = t.closest &&
        t.closest("a,button,.card,.menu-item,.back-hint,.contact-chip,#big-name");
      cur.classList.toggle("link", !!overLink);
    }, { passive: true });

    document.documentElement.addEventListener("mouseleave", () => {
      cur.style.display = "none"; visible = false;
    });

    const tick = ts => {
      if (ts - last >= 50) {                       // 50ms = original .ani frame rate
        frame = (frame + 1) % 30; last = ts;
        cur.style.backgroundPosition = -frame * 48 + "px 0";
      }
      cur.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  },
};
