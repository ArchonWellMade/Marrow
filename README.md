# Marrow Butchery

Brand website for Marrow Butchery — built with Next.js (App Router) and ready to deploy on Vercel.

## Stack

- **Next.js 15** (App Router, plain JavaScript — no TypeScript)
- **React 19**
- Plain CSS in `app/globals.css` (no Tailwind, no CSS-in-JS)
- All product content lives in `lib/products.js` — one file, one source of truth

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Deploy to Vercel

1. **Push to GitHub.** Initialize a repo if you haven't yet:

   ```bash
   git init
   git add .
   git commit -m "Initial Marrow site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

2. **Import to Vercel.** Go to <https://vercel.com/new>, pick the GitHub repo. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

3. **Done.** Vercel runs `npm install && next build` and serves the result. Every push to `main` redeploys; every PR gets a preview URL.

## Project layout

```
app/
├── layout.jsx              Root layout (loads fonts + global CSS, mounts Chrome and Footer)
├── globals.css             All site styles (formerly styles.css)
├── page.jsx                Home (hero, story, selection grid)
├── craft/page.jsx          Our Craft
├── selection/page.jsx      Full filterable catalog
├── dry-aging/page.jsx      Dry-Aging
├── wholesale/page.jsx      Wholesale (with trade form)
├── visit/page.jsx          Visit Us (with map + contact form)
└── products/
    └── [slug]/page.jsx     One dynamic route for all 15 products
                            (statically generated at build time)

components/
├── Chrome.jsx              Header + nav drawer (client component, shared state)
├── Footer.jsx              Footer
├── Newsletter.jsx          Newsletter signup section
├── HeroSlider.jsx          Home-page cross-fade slider
├── SelectionGrid.jsx       Filterable product grid (URL `?cat=...` honored)
├── ProductGallery.jsx      Product main image + thumbnail swap
├── QuantityAndBuy.jsx      Qty stepper + reserve/call buttons
└── ContactForm.jsx         Form for visit + wholesale pages

lib/
└── products.js             All 15 products (data + helpers + category list)

public/
└── quotation.html          Print-ready quotation, served at /quotation.html

_legacy_html/               Original hand-written static HTML (safe to delete)
```

## Routes

- `/` — home
- `/craft`, `/selection`, `/dry-aging`, `/wholesale`, `/visit`
- `/products/<slug>` — one per item in `lib/products.js`
- `/selection?cat=beef` (or `pork`, `lamb`, `poultry`, `seafood`, `charcuterie`) — pre-filters the catalog
- `/quotation.html` — static quotation document

## Editing content

- **Add/edit a product**: open [lib/products.js](lib/products.js), add or modify an entry. The product page and all selection grids update automatically. Rebuild to regenerate the static product route.
- **Edit a page**: each page is a single `.jsx` file under `app/`. Plain JSX, no surprises.
- **Edit styles**: [app/globals.css](app/globals.css).
- **Add a nav item**: edit the `NAV` array in [components/Chrome.jsx](components/Chrome.jsx) and add the corresponding footer link in [components/Footer.jsx](components/Footer.jsx).

## Notes

- Images are external (Unsplash / gstatic). They're whitelisted in [next.config.mjs](next.config.mjs) so you can upgrade to `next/image` later if you want optimization.
- The newsletter, wholesale enquiry, and visit-us contact forms are UI-only — they show a success state but don't actually send anything. Wire up an email / form provider (Resend, Formspree, etc.) when you're ready.
- The `_legacy_html/` folder holds the original static HTML site. It is **not** served by Next.js; delete it whenever you're satisfied with the React port.
