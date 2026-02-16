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
- `DetailProductPage.astro` — Bulk products (breadcrumb → `/products/{category}`)
- `BeddingDetailPage.astro` — Bedding products (breadcrumb → `/bedding/{category}`)
- `DustCollectionDetailPage.astro` — Dust collection products (breadcrumb → `/dust-collection/{category}`, includes lightbox gallery)

## Product Hero Images
- Product images on detail pages render at `width: 150%` to overflow the grid cell for visual impact
- This applies to both Bedding and Dust Collection detail page components

## Category Page Components
- `BeddingCategoryPage.astro` — Bedding category landing (breadcrumb → `/bedding`)
- `DustCollectionCategoryPage.astro` — Dust collection category landing (breadcrumb → `/dust-collection`)

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
