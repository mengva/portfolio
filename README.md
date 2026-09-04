# Mengva Chuepor — Portfolio

A single-page developer portfolio built with Next.js 14 (App Router) and
Tailwind CSS, generated from your CV.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Before you deploy

1. **Set your real domain.** Open `lib/data.ts` and change `siteUrl` from
   the placeholder `https://mengvachuepor.dev` to your actual domain —
   it feeds the canonical URL, Open Graph tags, JSON-LD, `sitemap.xml`
   and `robots.txt`.
2. **Add a photo (optional).** Drop an image into `/public` and reference
   it from `components/Hero.tsx` with `next/image` if you want a portrait.
3. **Double-check contact details** in `lib/data.ts` (email, phone,
   GitHub) — they're pulled from your CV.

## What's included for SEO / AI-agent discoverability

- Full `metadata` export in `app/layout.tsx`: title template, description,
  keywords, Open Graph, Twitter card, canonical URL.
- `Person` structured data (JSON-LD) embedded in the page `<head>`, so
  search engines and AI answer-engines can parse who you are, your role,
  and your skills without guessing from prose.
- `app/sitemap.ts` → generates `/sitemap.xml`.
- `app/robots.ts` → generates `/robots.txt`, pointing crawlers at the
  sitemap.
- `public/llms.txt` → a plain-markdown summary of the site for AI
  agents/LLM crawlers, following the emerging `llms.txt` convention
  (served at `/llms.txt`).
- Semantic HTML throughout (`header`, `main`, `section`, `dl`) and one
  `h1` per page with a clean heading hierarchy.

## Project structure

```
app/            routes, layout, metadata, sitemap, robots
components/     Nav, Hero, About, Experience, Skills, Education, Contact
lib/data.ts     all CV content — edit this file to update the site
public/llms.txt AI-agent-readable summary
```

## Extending to multiple pages

This demo is one page with anchor-linked sections, which is enough for a
portfolio this size. If you want separate routes later (e.g. `/work`,
`/about`), move each section's content into `app/work/page.tsx`, etc.,
and give each its own `metadata` export — the JSON-LD and `llms.txt`
pattern here extends the same way.
