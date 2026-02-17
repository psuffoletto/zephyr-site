# Zephyr Equipment Website

## Project Overview
Marketing website for Zephyr Equipment, LLC — a custom bulk material handling equipment manufacturer in Orchard Park, NY. Built with Astro (static site generator).

## Tech Stack
- **Framework:** Astro (static HTML output)
- **Styling:** Scoped `<style>` blocks in `.astro` files, CSS custom properties defined in `BaseLayout.astro`
- **No JS frameworks** — vanilla TypeScript `<script>` blocks for interactivity
- **Build:** `npx astro build` / **Dev:** `npx astro dev`

## Project Structure
```
src/
  components/       # Shared components (Header, Footer, DetailProductPage, etc.)
  data/             # Product data files (products.ts, bedding.ts, dust-collection.ts)
  layouts/          # BaseLayout.astro (global styles, fonts, CSS variables)
  pages/            # File-based routing
    bulk/           # Bulk material handling landing page
    bedding/        # Bedding handling — categories: delivery/, dispensing/, disposal/
    dust-collection/ # Dust collection — categories: cartridge-collectors/
    products/       # Bulk product categories: unload/, fill/, store/, filter/, convey/, clean/, automate/, power/
    about/          # About, careers, test center
    ...
public/
  images/           # All static images (heroes, renders, logos, industries)
```

## Market Segments (3 equal-level categories)
1. **Bulk** (`/bulk`, `/products/*`) — Pneumatic conveying, unloading, filling, storage, filtration
2. **Bedding** (`/bedding/*`) — Vivarium bedding delivery, dispensing, disposal
3. **Dust Collection** (`/dust-collection/*`) — Cartridge collectors, baghouse filters, ventilation

## Product Data Pattern
Each market segment has:
- **Data file** (`src/data/*.ts`) — Product & Category arrays + helper functions
- **Detail page component** (`src/components/*DetailPage.astro`) — Shared product page template
- **Category page component** (`src/components/*CategoryPage.astro`) — Category landing with product cards
- **Page files** (`src/pages/.../*.astro`) — Thin wrappers that import data + component

Products use the shared `Product` and `Category` interfaces from `src/data/products.ts`. Key fields: `name`, `slug`, `modelNumber`, `category`, `tagline`, `description`, `keySpecs`, `features`, `applications`. Optional: `heroImage`, `productImage`, `specTable`, `faqs`, `sketchfabId`, `problems`, `accentLabel`, `galleryImages`.

## Product Detail Page Components
- `DetailProductPage.astro` — Bulk products (breadcrumb → `/products/{category}`, carousel gallery with lightbox)
- `BeddingDetailPage.astro` — Bedding products (breadcrumb → `/bedding/{category}`)
- `DustCollectionDetailPage.astro` — Dust collection products (breadcrumb → `/dust-collection/{category}`, grid gallery with lightbox)

## Product Hero Images
- All detail page components cap hero product images at `max-height: 550px; object-fit: contain` so hero + key specs bar fits within a 1200px viewport
- Dust Collection detail page uses `width: 150%` for visual overflow; Bedding uses `width: 100%`; Bulk uses `width: 175%`
- Individual product pages can override with `<style is:global>` and `!important` (e.g., 13-02 page)
- Hero background images can reference shared images (e.g., LX Series uses `/images/hero/homepage-hero2.png`)
- Category landing pages accept an optional `heroImage` prop for background images (e.g., `/images/unload-hero.png`)

## Category Page Components
- `CategoryPage.astro` — Bulk product category landing (breadcrumb → `/products`, optional `heroImage` prop)
- `BeddingCategoryPage.astro` — Bedding category landing (breadcrumb → `/bedding`)
- `DustCollectionCategoryPage.astro` — Dust collection category landing (breadcrumb → `/dust-collection`)

## Home Page Hero Rotator
- Background image slideshow in `src/pages/index.astro` — add `<div class="hero-slide">` entries with `background-image` URL
- Images stored in `public/images/hero/`

## Success Stories
- **Location:** `src/pages/success-stories/`
- **Index:** `src/pages/success-stories/index.astro` — stories array in frontmatter, grid of cards
- **No shared component** — each story is a standalone `.astro` page with embedded data and scoped styles
- **CSS classes** prefixed with `.cs-` (case study)
- **Section pattern:** Hero → Hero Image → Intro card → Challenge (01) → Solution (02) → Results (03) → Partnership → Gallery → CTA
- **Solution layouts:** Process flow (numbered vertical steps) or 2-column grid with solution cards
- **Gallery:** Photos grid + optional video modal (click-to-play popup)
- **Images:** stored in `public/images/{story-slug}/`
- **Adding a new story:**
  1. Create `src/pages/success-stories/{slug}.astro` following existing pattern
  2. Add story object to the `stories` array in `index.astro`
  3. Add images to `public/images/{slug}/`
- **Current stories:** johns-hopkins, nih-building-35, vacuum-dense-phase, desiccant-conveying

## Adding a New Product
1. Add product object to the relevant data file (e.g., `src/data/dust-collection.ts`)
2. Create page file under the appropriate category directory (e.g., `src/pages/dust-collection/cartridge-collectors/my-product.astro`)
3. Page file imports the detail component + data helpers (3-line pattern)

## Design System
- **Brand color:** `--zephyr-orange` (#E8612D)
- **Dark backgrounds:** `--steel-800`, `--steel-900`
- **Fonts:** `--font-display` (Barlow), `--font-body` (Inter), `--font-accent` (Playfair Display)
- **Accordion color schemes:** `--offwhite`, `--lightblue`, `--orange` (for home page market segments)

## Deployment
- **Hosted on Vercel** — connected to GitHub repo `psuffoletto/zephyr-site`
- **Auto-deploys on push to `main`** — no manual deploy step needed
- Vercel detects Astro automatically; no `vercel.json` required
- No GitHub Actions workflows — Vercel handles build & deploy

## Workflow
1. Make changes locally
2. `npx astro build` — verify it compiles cleanly (0 errors)
3. `git add` specific files (avoid `node_modules/`, `dist/`, `.astro/`, `.claude/`)
4. `git commit` with descriptive message
5. `git push` to `main` — Vercel auto-deploys within ~1 minute
6. Verify on live site

## Build & Verify
```bash
npx astro build    # Must compile cleanly — 0 errors
npx astro dev      # Dev server on port 4321
```

## Git Hygiene
- No `.gitignore` currently in repo — be careful to stage only source files
- Never stage: `node_modules/`, `dist/`, `.astro/`, `.claude/`, `package-lock.json`
- Always stage: `src/`, `public/images/`, config files, `CLAUDE.md`
