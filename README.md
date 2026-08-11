# POM Church — Production Next.js Website

Production-ready website for **The Pentecostals of Manhattan (Manhattan, Kansas)**.

## Stack

- Next.js 16.3 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Motion for React (formerly Framer Motion)
- Next/Image optimization
- Route handlers for contact-form integration
- Metadata, Open Graph, sitemap, robots, manifest, security headers
- Vercel-ready configuration

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

Push the **contents of this folder** to the root of the GitHub repository. Your GitHub repository homepage should show `app/`, `components/`, `public/`, `package.json`, etc. directly — not another nested `pom-next/` folder.

Then import the repository in Vercel. Framework Preset should automatically detect **Next.js**. Leave Root Directory as `./`.

## Production tasks before domain cutover

1. **Giving URL:** `lib/site.ts` currently preserves the generic Tithe.ly destination from the prior build. Replace `site.giving` with POM's direct church-specific giving URL.
2. **Contact form delivery:** `/app/api/contact/route.ts` is wired to the Resend REST API. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in Vercel Environment Variables. The endpoint returns an error rather than pretending to send if delivery is not configured.
3. **Social/message URLs:** Confirm the Facebook Live and featured-message links in `lib/site.ts` before launch.
4. **Images:** Current imagery is bundled locally in `/public/images` and optimized by `next/image`. Replace individual files there when newer approved POM photography is available.
5. **Domain:** In Vercel → Project → Settings → Domains, add `pomchurch.life`, update DNS, and verify redirects/canonical behavior after cutover.

## Project structure

```text
app/
  api/contact/route.ts
  about/
  connect/
  contact/
  events/
  give/
  privacy/
  visit/
  watch/
  globals.css
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
  manifest.ts
components/
  contact-form.tsx
  footer.tsx
  header.tsx
  page-hero.tsx
  reveal.tsx
lib/
  site.ts
public/
  images/
  mark.svg
  favicon.svg
```

## Content sources

Public church information used in the build was verified against `pomchurch.life` in August 2026. See `SOURCES.md`.
