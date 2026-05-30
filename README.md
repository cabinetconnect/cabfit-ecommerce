# CabFit Ecommerce Website

Production-ready Next.js ecommerce storefront for CabFit, an Australian trade brand selling practical cabinet installation and assembly accessories.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Zustand cart state with localStorage persistence
- Stripe Checkout
- Metadata API, sitemap, robots, canonical URLs, Open Graph, JSON-LD schema
- Vercel-ready project structure

## Getting Started

Install dependencies:

```bash
npm install
```

Create environment variables:

```bash
cp .env.example .env.local
```

PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Required values:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_replace_me
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Stripe Checkout

Checkout is implemented at `src/app/api/checkout/route.ts`.

The route validates cart line items against `src/lib/products.ts`, creates Stripe Checkout line items server-side, collects Australian shipping addresses, adds a fixed Australia-wide shipping rate, and redirects customers to Stripe Checkout.

Use Stripe test keys locally and live keys in Vercel.

## Adding Products

Products are managed in one central file:

```bash
src/lib/products.ts
```

Add a product object with:

- `id`
- `slug`
- `name`
- `description`
- `priceCents`
- `images`
- `variants`
- `benefits`
- `keywords`

Product detail pages, shop cards, related products, cart lines, Stripe checkout, sitemap entries, and product schema all consume this central data.

## Brand Assets

The supplied CabFit logo is stored at:

```bash
public/cabfit-logo.png
public/cabfit-logo-wide.png
```

Logo-derived design tokens:

- Primary charcoal: `#1F2326`
- Primary gold: `#D4A72C`
- Light neutral background: `#F2F2F0`
- Dark neutral: `#141719`
- Border colour: `#D9D4C8`

## SEO

Implemented SEO features:

- Metadata API per page
- Product metadata per product page
- Product JSON-LD schema
- Organization and WebSite JSON-LD schema
- FAQ JSON-LD schema
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- Canonical URLs
- Open Graph and Twitter metadata

Target keywords include cabinet installation accessories, cabinetmaker jigs, cabinet install accessories, cabinet installation jigs, cabinet assembly accessories, cabinet installation products, cabinet installation aids, cabinetmaking accessories, Australian cabinetmakers, and cabinet installers Australia.

## Vercel Deployment

1. Push this project to GitHub.
2. Import the GitHub repository into Vercel.
3. Add environment variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL`
   - `STRIPE_SECRET_KEY`
4. Deploy.

## Launch Notes

- Replace placeholder product SVGs with real product photography when available.
- Connect the contact form and newsletter form to your preferred email, CRM, or newsletter provider before launch.
- Review shipping rates, returns copy, and tax settings with the business owner before accepting live orders.
