# Tanaka's Sushi & Juice Bar

A production-ready Next.js 14 website for Tanaka's Sushi & Juice Bar — Shop 25,
Yeperenye Centre, Hartley St, Alice Springs, NT 0870.

## Features

- Next.js 14 App Router with React Server Components
- TypeScript in strict mode, fully typed components and data
- Tailwind CSS styling with a small set of reusable component classes
- Motion (`motion/react`) entrance, scroll-reveal, and hover animations
- Responsive, mobile-first layout with an animated mobile navigation menu
- Accessible markup (semantic HTML, ARIA labels, `prefers-reduced-motion` support)

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

## File Structure

See [FILE_STRUCTURE.txt](./FILE_STRUCTURE.txt) for the full project layout.

```
app/            Route, layout, and global styles (Server Components)
components/     Navbar, Hero, Menu, Features, Testimonials, CTA, Footer
lib/            Static data (menu, testimonials, features) and animation config
```

## Troubleshooting

- **Blank/invisible animated content**: give scroll-reveal animations time to
  trigger — they run once when the element enters the viewport
  (`whileInView`, `once: true`).
- **Mobile menu not covering the full screen**: any ancestor of the fixed-position
  menu with a CSS `filter`/`backdrop-filter`/`transform` creates a new
  containing block and will clip `position: fixed` children to its own box.
  Keep such effects off ancestors of the mobile nav, or portal the menu to
  `document.body`.
- **Type errors on Motion `transition`/`ease` values**: string literals like
  `'easeOut'` widen to `string` by default; use `as const` on transition
  objects in `lib/motion-config.ts` to keep the literal types Motion expects.

## Documentation

- [IMPLEMENTATION.md](./IMPLEMENTATION.md) — technical implementation details
- [DEPLOYMENT.md](./DEPLOYMENT.md) — hosting and deployment guide
- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) — client-facing project summary
- [FILE_STRUCTURE.txt](./FILE_STRUCTURE.txt) — file organization reference
