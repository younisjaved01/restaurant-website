# Deployment Guide

## Quick Start (Vercel — recommended)

1. Push this repository to GitHub (already done if you're reading this from
   the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Every push to the default branch redeploys automatically; pull requests
   get preview deployments.

## Platform Options

### Vercel (recommended)

Zero-config for Next.js. Free tier is sufficient for a single-location
restaurant site.

```bash
npm i -g vercel
vercel
```

### Netlify

Use the Next.js Runtime plugin (`@netlify/plugin-nextjs`), enabled by default
when Netlify detects a Next.js project. Connect the git repo in the Netlify
dashboard, or deploy via CLI:

```bash
npm i -g netlify-cli
netlify deploy --build
```

### AWS (self-hosted)

Build and run the standalone Next.js server on any Node.js 18+ host (EC2,
Lightsail, ECS/Fargate):

```bash
npm run build
npm start   # serves on port 3000 by default
```

Put it behind an Application Load Balancer / Nginx with TLS termination.

### Docker

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t natures-brew-co .
docker run -p 3000:3000 natures-brew-co
```

## Environment Variables

None are required for the base deployment — the site is fully static (menu
and business details are in `data/menu.ts` and `data/business.ts`). If you
connect a real contact-form backend (Formspree, Resend, etc. — see
`components/Contact.tsx`), add its keys to `.env.local` (gitignored) and to
your hosting provider's environment variable settings — never commit secrets
to the repository.

## Performance Optimization

- Images are set to `unoptimized: true` in `next.config.js` since the site
  currently uses emoji/text only; if you add photography, either remove that
  flag to use Next.js Image Optimization (requires a Node.js runtime, not
  static export) or pre-optimize images and serve them from `/public`.
- The build output is a single static route — Lighthouse scores should be
  high out of the box. Re-run Lighthouse after adding real photography or
  third-party scripts (analytics, chat widgets) to confirm it stays that way.

## Post-Launch Checklist

- [ ] Point the domain's DNS at the hosting provider (Vercel/Netlify give you
      the exact records to add)
- [ ] Verify the phone number `tel:` link and address in `components/Footer.tsx`
- [ ] Confirm opening hours are current
- [ ] Test the mobile menu and menu-tab switching on a real phone
- [ ] Submit the site to Google Search Console and update the Google Maps /
      Yelp / Uber Eats / DoorDash listings with the new URL
- [ ] Set up basic analytics if desired (e.g. Vercel Analytics, Plausible)

## Cost Estimate

- **Vercel Hobby / Netlify Free:** $0/month — sufficient for a low-traffic
  single-location restaurant site.
- **Domain registration:** ~$15–20/year (if not already owned).
- **Vercel Pro / Netlify Pro** (only needed at higher traffic or for team
  features): ~$20/month.

## Security

- No secrets or API keys are required for the current feature set.
- `.gitignore` excludes `.env*` files so future secrets aren't committed.
- Keep `next` and other dependencies patched — run `npm audit` periodically
  and update via `npm update` / `npm audit fix`.
