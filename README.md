# Nature's Brew Co.

A production-ready Next.js 14 website for Nature's Brew Co. — a smoothie,
fresh juice, coffee and healthy grab-and-go bar in Alice Springs.

## Features

- Next.js 14 App Router with React Server Components
- TypeScript in strict mode, fully typed components and data
- Tailwind CSS with a green brand theme (see `app/globals.css` CSS variables)
- Framer Motion entrance, scroll-reveal, tab-switch, and hover animations
- GSAP-driven seamless ingredient marquee (`components/IngredientsSection.tsx`)
- Lenis smooth scrolling, disabled automatically for `prefers-reduced-motion`
- Embla Carousel for the mobile "Favourites" swiper
- React Hook Form + a hand-written Zod resolver for the contact form
- Accessible, keyboard-operable menu tabs, mobile nav, and modals
  (focus trap, Escape-to-close, restored focus)

## Content accuracy note

The full menu (categories, products, ingredients, and prices) was
transcribed directly from a photo of the real Nature's Brew Co. menu board —
see `data/menu.ts` for two ingredient words that were hard to read with full
confidence (flagged with inline comments, not shown to visitors). No gallery
photography was supplied, so `components/Gallery.tsx` renders tasteful CSS
panels instead — drop real photos into `public/images/` and reference them
via the `image` field in `data/gallery.ts` to switch that entry over to
`next/image` automatically. Address, phone, email, and opening hours in
`data/business.ts` are still placeholders — see "Business details to
confirm" below.

## Contact form backend

The contact form (`components/Contact.tsx`) validates and shows a genuine
loading/success/error UI, but **does not send real messages** — no backend
is connected. It intentionally skips the network request instead of faking
one. To go live, wire up a service such as [Formspree](https://formspree.io)
or [Resend](https://resend.com) inside the `onSubmit` handler (the exact
spot is marked with a comment).

## Business details to confirm

Centralised in `data/business.ts`:

- Street address
- Phone number
- Email address
- Confirmed opening hours
- Google Maps link
- Instagram / Facebook links

Until these are filled in, the affected buttons (Call the Store, Get
Directions, social icons) render as inert placeholders instead of broken
links — see `components/ContactLink.tsx`.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Type checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

### Production build

```bash
npm run build
npm start
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for platform-specific instructions
(Vercel, Netlify, AWS, Docker).

## Project structure

```
app/            Routes, layout (fonts + metadata + JSON-LD), global styles,
                icon.tsx / opengraph-image.tsx (generated, no image assets needed)
components/     One component per homepage section, plus components/ui
                (Button, Card, Dialog, Input, Textarea, Badge, Label —
                hand-built with class-variance-authority, not shadcn CLI output)
data/           menu.ts, business.ts, gallery.ts — all editable site content
lib/            utils.ts (cn), validations.ts (Zod schema + RHF resolver),
                motion-config.ts (shared Framer Motion variants), accent.ts
                (category → colour/icon mapping)
```
