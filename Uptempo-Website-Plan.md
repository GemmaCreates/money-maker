## Uptempo Enterprises — One‑Page Website Plan (Agent‑Executable)

**Domain**: uptempoenterprises.com
**Scope**: Single page only. No pricing, customers, resources, legal, or CTAs.
**Brand**: Neutral + muted blue accent (#3A7BD5). No logo; text logo only.
**Contact**: uptempoenterprises@gmail.com

### Objectives
- Present a simple, products‑first one‑page website.
- Use neutral mock images already provided in `assets/`.
- Keep implementation lightweight, accessible, and fast (static HTML/CSS or simple Next.js page).

### Sections (strict order)
1) Hero
2) Products (3 product blocks)
3) How we build (1 line)
4) About
5) Footer

### Finalized Copy (use verbatim)
- Hero
  - H1: “Uptempo Enterprises”
  - Subhead: “Digital Product Lab.”
  - Small line: “uptempoenterprises.com”

- Products
  - Growbie — Milestone Mapping app for children
    - One‑liner: “Track milestone progress and celebrate growth with a clear, calming view.”
    - Bullets:
      - “Age‑appropriate milestones at a glance”
      - “Gentle reminders and progress snapshots”
      - “Private by default”
  - GoTime — Potty training app
    - One‑liner: “Build consistent habits with simple timers and playful positive cues.”
    - Bullets:
      - “Visual timers and routine streaks”
      - “Friendly nudges at the right times”
      - “Lightweight progress view”
  - TheSavvyChefs.com — homegoods ecommerce store
    - One‑liner: “Curated kitchen tools and home goods for everyday craft.”
    - Bullets:
      - “Small‑batch, practical picks”
      - “Clear specs, simple care notes”
      - “Seasonal drops”

- How we build
  - “We make simple products that help people in their everyday lives.”

- About
  - “Uptempo Enterprises builds calm, practical tools for families and homes. We value clarity, gentle guidance, and steady progress.”

- Footer
  - “Uptempo Enterprises”
  - “uptempoenterprises.com”
  - “uptempoenterprises@gmail.com”

### Assets (already created)
- `assets/hero-placeholder.svg` (1600×900)
- `assets/growbie-ui-mock.svg` (1200×720)
- `assets/gotime-ui-mock.svg` (1200×720)
- `assets/savvychefs-grid.svg` (1200×720)
- `assets/og-image.svg` (1200×630)
- `assets/favicon.svg` (64×64)

### Visual System
- Color: Neutral base (off‑white/gray), accent #3A7BD5 for headings/accents.
- Type: Inter or system sans; H1 48–56px, H2 28–32px, body 16–18px; line‑height 1.5–1.6.
- Layout: Max width 1200px; section spacing 80–100px; light separators.
- Imagery: Use SVGs above with alt text; rounded corners; subtle shadow.
- Accessibility: Meet WCAG AA contrast, semantic HTML, keyboard focus outlines, descriptive `alt` text.

### Implementation Options
Option A — Static HTML/CSS (recommended for speed):
- Create `site/` directory with `index.html`, `styles.css`, and reference `assets/`.
- Embed the copy exactly as above. No buttons or forms.

Option B — Next.js (single page):
- Create `app/page.tsx` (or `pages/index.tsx`), import assets, and render sections.
- Add `metadata` for title/description/OG.

### HTML Skeleton (reference)
Use this as a structure guide. Keep classes minimal; style in `styles.css`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Uptempo Enterprises — Digital Product Lab.</title>
    <meta name="description" content="Simple products that help people in their everyday lives." />
    <meta property="og:title" content="Uptempo Enterprises — Digital Product Lab." />
    <meta property="og:description" content="Simple products that help people in their everyday lives." />
    <meta property="og:image" content="../assets/og-image.svg" />
    <link rel="icon" href="../assets/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- Optional: Inter font; system stack is also fine -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container logo">Uptempo Enterprises</div>
    </header>

    <main>
      <section id="hero" class="section hero">
        <div class="container">
          <h1>Uptempo Enterprises</h1>
          <p class="subhead">Digital Product Lab.</p>
          <p class="note">uptempoenterprises.com</p>
          <img src="../assets/hero-placeholder.svg" alt="Abstract hero placeholder" />
        </div>
      </section>

      <section id="products" class="section products">
        <div class="container">
          <article class="product">
            <div class="product-text">
              <h2>Growbie — Milestone Mapping app for children</h2>
              <p>Track milestone progress and celebrate growth with a clear, calming view.</p>
              <ul>
                <li>Age‑appropriate milestones at a glance</li>
                <li>Gentle reminders and progress snapshots</li>
                <li>Private by default</li>
              </ul>
            </div>
            <div class="product-media">
              <img src="../assets/growbie-ui-mock.svg" alt="Growbie milestone dashboard mock" />
            </div>
          </article>

          <article class="product">
            <div class="product-text">
              <h2>GoTime — Potty training app</h2>
              <p>Build consistent habits with simple timers and playful positive cues.</p>
              <ul>
                <li>Visual timers and routine streaks</li>
                <li>Friendly nudges at the right times</li>
                <li>Lightweight progress view</li>
              </ul>
            </div>
            <div class="product-media">
              <img src="../assets/gotime-ui-mock.svg" alt="GoTime routine timeline mock" />
            </div>
          </article>

          <article class="product">
            <div class="product-text">
              <h2>TheSavvyChefs.com — homegoods ecommerce store</h2>
              <p>Curated kitchen tools and home goods for everyday craft.</p>
              <ul>
                <li>Small‑batch, practical picks</li>
                <li>Clear specs, simple care notes</li>
                <li>Seasonal drops</li>
              </ul>
            </div>
            <div class="product-media">
              <img src="../assets/savvychefs-grid.svg" alt="SavvyChefs 3x2 product grid mock" />
            </div>
          </article>
        </div>
      </section>

      <section id="how" class="section how">
        <div class="container single-line">We make simple products that help people in their everyday lives.</div>
      </section>

      <section id="about" class="section about">
        <div class="container">
          Uptempo Enterprises builds calm, practical tools for families and homes. We value clarity, gentle guidance, and steady progress.
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <div>Uptempo Enterprises</div>
        <div>uptempoenterprises.com</div>
        <div><a href="mailto:uptempoenterprises@gmail.com">uptempoenterprises@gmail.com</a></div>
      </div>
    </footer>
  </body>
  </html>
```

### Minimal CSS Guidelines (reference)
- Base: system sans or Inter; body text color #222; background #F7F7F8.
- Accent: #3A7BD5 for headings, small separators, and tags; avoid overuse.
- Layout:
  - `.container`: max‑width 1200px; margin: 0 auto; padding: 0 24px.
  - `.section`: padding: 80px 0; use 100px on large screens.
  - `.products .product`: grid layout; 1‑column on mobile; 2‑column from 900px.
  - Images: max‑width 100%; border‑radius: 12px; subtle shadow `0 8px 24px rgba(0,0,0,0.06)`.
- Accessibility: focus outlines visible; alt text present; headings follow H1→H2 hierarchy.

### SEO/Metadata
- `<title>`: Uptempo Enterprises — Digital Product Lab.
- `<meta name="description">`: Simple products that help people in their everyday lives.
- OG/Twitter: use `assets/og-image.svg` for previews.

### Deliverables for Agents
- Option A (static):
  - `site/index.html` created using the HTML skeleton above.
  - `site/styles.css` implementing the CSS guidelines.
  - Copy and assets referenced as specified.
- Option B (Next.js):
  - `app/page.tsx` (or `pages/index.tsx`) with sections and copy.
  - `app/globals.css` (or equivalent) with the minimal styles.
  - Metadata configured; `public/` contains copied SVG assets.

### Acceptance Criteria
- Page renders with 5 sections in correct order and exact copy.
- Uses the provided SVG assets with descriptive alt text.
- No pricing/customers/resources/legal sections; no CTAs.
- Valid HTML; basic accessibility checks pass (landmarks, headings, contrast).
- Mobile responsive: single column; desktop uses 2‑column product layout.
- Favicon and OG image are wired.

### Notes
- Keep everything minimal; avoid heavy JS.
- If fonts fail to load, fall back to system stack gracefully.
- All content is static; no analytics or forms in v1.



