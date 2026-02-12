# Zephyr Equipment Website

Custom-built website for Zephyr Equipment, LLC — bulk material handling equipment manufacturer based in Orchard Park, NY.

Built with [Astro](https://astro.build) for maximum performance. Pure static HTML output, zero JavaScript shipped to the client (except minimal scroll animations).

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel (Recommended)

### First Time Setup

1. **Create a GitHub account** (if you don't have one): https://github.com
2. **Install Git** on your machine: https://git-scm.com
3. **Push this project to GitHub:**

```bash
cd zephyr-site
git init
git add .
git commit -m "Initial Zephyr Equipment website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zephyr-site.git
git push -u origin main
```

4. **Connect to Vercel:**
   - Go to https://vercel.com and sign up with your GitHub account
   - Click "Import Project" → select your `zephyr-site` repo
   - Vercel auto-detects Astro — just click "Deploy"
   - Your site is live at `zephyr-site.vercel.app` within ~60 seconds

5. **Connect your domain:**
   - In Vercel dashboard → Settings → Domains
   - Add `www.zephyrequipment.com` and `zephyrequipment.com`
   - Vercel gives you DNS records to add at your registrar
   - If domain is at Wix: go to Wix Domain Settings → DNS Records → add Vercel's records
   - SSL certificate is automatic

### Ongoing Updates

```bash
# Make changes, then:
git add .
git commit -m "Update product descriptions"
git push
# Vercel auto-deploys in ~30 seconds
```

## Alternative: Deploy to Netlify

```bash
# Build
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

## Alternative: Deploy to Cloudflare Pages

1. Push to GitHub (same as Vercel steps 1-3)
2. Go to https://dash.cloudflare.com → Pages → Create Project
3. Connect your GitHub repo
4. Build settings: Command = `npm run build`, Output = `dist`

## Project Structure

```
zephyr-site/
├── public/              # Static assets (images, favicon)
│   └── images/          # Product photos, hero images
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.astro       # Site navigation
│   │   ├── Footer.astro       # Site footer
│   │   └── ProductPage.astro  # Reusable product page template
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML wrapper with SEO
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── contact.astro      # Contact / quote request
│   │   └── products/
│   │       ├── index.astro          # Products overview
│   │       ├── dust-collectors.astro
│   │       ├── conveyors.astro
│   │       ├── industrial-valves.astro
│   │       ├── bedding-systems.astro
│   │       ├── silos-and-bins.astro
│   │       └── dedusters.astro
│   └── styles/
│       └── global.css   # Design system & brand variables
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Brand System (CSS Variables)

```css
--zephyr-orange: #E8612D     /* Primary brand color */
--steel-800: #1B2A3D         /* Dark backgrounds */
--steel-700: #2C3E50         /* Cards */
--steel-400: #5D7B96         /* Secondary text */
--steel-50: #F5F7FA          /* Light backgrounds */

--font-display: 'Barlow Condensed'  /* Headlines */
--font-body: 'Barlow'               /* Body text */
--font-accent: 'Caveat'             /* Taglines */
```

## Adding Content

### Add a product photo
Drop images into `public/images/` and reference them in your Astro files:
```html
<img src="/images/dust-collector-hero.jpg" alt="Custom dust collector" />
```

### Edit product descriptions
Open the relevant file in `src/pages/products/` and update the props passed to `<ProductPage>`.

### Add a new page
Create a new `.astro` file in `src/pages/` — Astro auto-generates the route.

## Form Handling

The contact form currently needs a backend service. Recommended options:
- **Formspree** (https://formspree.io) — Free tier, just change form action URL
- **Netlify Forms** — Free if hosted on Netlify, zero config
- **Google Forms** — Free, redirect to Google form

## Future Enhancements

- [ ] Add product photography
- [ ] Connect contact form to email service
- [ ] Add project gallery / case studies
- [ ] Add downloadable spec sheets (PDF)
- [ ] Add engineering calculators
- [ ] SEO optimization with meta tags per page
- [ ] Google Analytics / tracking
- [ ] Blog section for technical content
