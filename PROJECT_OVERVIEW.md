# Project Overview — Tanaka's Sushi & Juice Bar Website

## Executive Summary

This is a complete, modern website for Tanaka's Sushi & Juice Bar built to
give the business a direct online presence — separate from Uber Eats,
DoorDash, Google Maps, and Yelp — so future orders and customer relationships
don't depend entirely on third-party platforms and their commissions.

## What This Gives the Business

- A professional, fast-loading website that works well on phones (most
  customers will visit from mobile)
- A full menu presented by category (Sushi, Donburi & Teppanyaki, Juices &
  Drinks) that's easy to update
- Clear contact information — address, phone number (tap-to-call), and hours
  — always visible in the footer
- Customer testimonials up front to build trust with new visitors
- A foundation to add online ordering, a booking system, or a loyalty program
  later without rebuilding the site

## Design Highlights

- Clean, modern layout with the restaurant's red branding
- Smooth, subtle animations as visitors scroll — content fades and slides
  into view rather than appearing abruptly
- A polished mobile menu that slides in from the side, matching the feel of
  a native app
- All animations are subtle by design — no bouncing or flashy effects — and
  automatically turn off for visitors who have "reduce motion" enabled on
  their device

## Technology Stack (Plain English)

- **Next.js** — the framework that renders the site quickly and makes it
  search-engine friendly
- **TypeScript** — catches mistakes before they reach visitors
- **Tailwind CSS** — a consistent design system so spacing, colors, and text
  sizes stay uniform across the whole site
- **Motion** — powers the animations
- No database, no login system, no payment processing — the site is
  intentionally simple and cheap to run and host

## Key Features

- Home page with hero banner, full menu, "Why Choose Us," testimonials, a
  call-to-action, and contact footer
- Tabbed menu so visitors can switch between Sushi, Donburi & Teppanyaki, and
  Juices & Drinks without leaving the page
- Fully responsive — looks right on a phone, tablet, or desktop
- Accessible — screen-reader friendly, keyboard navigable, readable color
  contrast

## Cost Breakdown

- **Hosting:** $0/month on Vercel's or Netlify's free tier at this traffic
  level
- **Domain name:** ~$15–20/year if a new domain is purchased
- **Ongoing maintenance:** menu prices, hours, and testimonials live in one
  data file (`lib/data.ts`) and can be edited without touching the design

## FAQ

**Do we need a developer to update the menu or hours?**
Editing `lib/data.ts` and redeploying (or asking Claude Code to do it) is all
that's needed — no database or admin panel to manage.

**Can we add online ordering later?**
Yes — the "Start Ordering" and "Browse Menu" buttons are already in place and
can be wired to a checkout flow or an external ordering link.

**Will this replace Uber Eats / DoorDash?**
Not necessarily — it gives the business a channel that doesn't take a
commission cut and that the business fully controls, while still keeping
listings on those platforms for discovery.

**Is customer or payment data collected?**
No. The current site has no forms, logins, or payment processing — it's an
informational and menu-browsing site.

## Timeline

This build (project scaffolding, all pages/components, animations,
configuration, and documentation) was completed in a single development
session, verified with automated type-checking, linting, a production build,
and a manual browser check of the desktop and mobile layouts — and is ready
to deploy immediately.
