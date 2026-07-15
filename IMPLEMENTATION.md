# Implementation Guide

## Files Created

```
app/layout.tsx          Root layout (Server Component) — metadata, Navbar, globals.css
app/page.tsx             Home page (Server Component) — composes all sections
app/globals.css          Tailwind layers, component utility classes, reduced-motion rules

components/Navbar.tsx    Sticky nav with AnimatePresence-driven mobile menu (Client)
components/Hero.tsx      Staggered entrance animation, gradient hero (Client)
components/Menu.tsx      Tabbed menu with scroll-reveal + stagger (Client)
components/Features.tsx  "Why Choose Us" cards, scroll-reveal (Client)
components/Testimonials.tsx  Review cards with staggered star ratings (Client)
components/CTA.tsx       Call-to-action with fade-in-up (Client)
components/Footer.tsx    Contact info, staggered reveal (Client)

lib/data.ts               Typed menu items, testimonials, features
lib/motion-config.ts      Shared Motion animation configs

package.json, tsconfig.json, next.config.js, tailwind.config.ts,
postcss.config.js, .eslintrc.json, .prettierrc, .gitignore
```

## Architecture Decisions

- **Server components by default.** `app/layout.tsx` and `app/page.tsx` render
  on the server with no client JS; every component that needs interactivity or
  `motion/react` is explicitly marked `'use client'`.
- **Static data layer.** `lib/data.ts` exports typed menu/testimonial/feature
  data with no database or API — the site is fully static and deploys as
  prerendered HTML.
- **Centralized animation config.** `lib/motion-config.ts` exports reusable
  animation objects (`fadeInUp`, `staggerContainer`, `buttonHover`, etc.) so
  every component uses consistent timing, easing, and spring physics instead
  of ad hoc values.

## Animation Implementation

- **Entrance (Hero):** a parent `motion.div` uses Motion's `variants` prop
  (`heroContainer`) with `staggerChildren`/`delayChildren`; each child
  (`heroChild`) inherits the `initial`/`animate` state from context so the
  title, subtitle, buttons, and feature icons animate in sequence.
- **Scroll reveal (Menu, Features, Testimonials, Footer):** `staggerContainer`
  / `staggerChild` use `whileInView` with `viewport: { once: true, margin:
  '0px 0px -100px 0px' }` so cards animate in once, ~100px before they enter
  the viewport, staggered by 0.1s per child.
- **Interactive hover/tap:** `buttonHover` and `cardHover` apply spring
  transitions (`stiffness: 300–400`, `damping: 10`) for buttons, cards, and
  feature icons.
- **Mobile menu:** `Navbar.tsx` wraps the backdrop and slide-in panel in
  `AnimatePresence` so both animate out on close, not just in on open. The
  panel slides from `x: 300` to `x: 0` with a spring transition
  (`mobileMenuVariants`); the backdrop cross-fades (`backdropVariants`).

### A layout bug worth knowing about

The header originally used Tailwind's `backdrop-blur` utility. CSS
`backdrop-filter` (like `filter` and `transform`) creates a new **containing
block** for `position: fixed` descendants. Because the mobile menu backdrop
and slide-in panel are rendered inside the `<header>`, that containing block
clipped `h-full`/`inset-0` to the header's own height (~76px) instead of the
viewport — collapsing the mobile menu to a sliver in the top corner. The fix
was to drop `backdrop-blur` from the header (kept a translucent `bg-white/95`
instead). This was caught by rendering the page and inspecting the mobile
menu's bounding box, not by type-checking or linting alone.

## Type Safety

- `tsconfig.json` has `strict: true`; there are no implicit `any` types.
- `lib/data.ts` exports `MenuItem`, `MenuCategories`, `Testimonial`, and
  `Feature` interfaces used throughout the component tree.
- Motion transition objects that use literal union types (e.g.
  `ease: 'easeOut'`, `type: 'spring'`) are declared with `as const` in
  `lib/motion-config.ts` so they satisfy Motion's `Transition` type instead of
  widening to `string`.

## Performance

- Static generation: `next build` prerenders the single route as static HTML.
- `whileInView` animations only run once (`once: true`), avoiding repeated
  reflows on re-scroll.
- Animations use `opacity`/`transform` (GPU-accelerated) rather than
  layout-triggering properties.

## Future Enhancements

- Wire "Start Ordering" / "Browse Menu" CTAs to a real ordering flow or
  external ordering platform link.
- Add a contact form or click-to-call analytics event.
- Add an `og:image` and social preview metadata.
- Add automated visual regression tests for the mobile menu given the
  containing-block issue found during manual testing.
