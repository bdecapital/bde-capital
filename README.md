# BDE Capital — Direct-Response Landing Page

High-converting, single-page landing site for **BDE Capital**, an insurance agency
growth, acquisition, and exit platform. Built in the **Sabri Suby / King Kong /
Scale & Sell** direct-response style.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

## Run it

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Design language

- **Near-black** backgrounds (`ink` scale) with a **single lime accent** `#D7FF2F` — no other accent colors.
- **Massive uppercase display type** (Archivo 800/900) + Inter body.
- Full-screen hero, radial lime glow, dark photo overlays, glassmorphism form card, sticky CTA.

## Page structure (single page, conversion-optimized)

1. **Hero** — `SCALE IT. / SELL IT. / UP TO 9X.` with **Learn More** + **See If You Qualify**
   CTAs and an animated dashboard visual (rising chart, count-ups, floating deal cards, 9X badge).
   No stock photography — a fully abstract dark/lime graphic system.
2. **Carrier marquee** — infinite left→right strip of placeholder carriers
3. **Track Record** (`#track-record`) — six credibility proof cards
4. **The Problem** (`#problem`) — "Most Agencies Are Worth $0 Without The Owner"
5. **The Shift** — "Income Pays The Bills. Equity Changes Your Life."
6. **The BDE Exit Flywheel** (`#flywheel`) — the 6-step mechanism
7. **Case Studies** — anonymized before→after outcomes + disclaimer
8. **Who This Is For / Not For** (`#who-for`)
9. **FAQ** (`#faq`)
10. **Apply** — full application form, "See If Your Agency Qualifies" (`#apply`)
- Plus a **sticky CTA bar** that follows on scroll and hides once the form is in view.

Multiple conversion points push toward the form: nav button, hero secondary CTA, sticky bar,
mid-page CTAs (Flywheel, Who-For), and the application form.

**Compliance:** copy uses "up to 9X" and "position for a premium exit" — never a guaranteed
multiple or sale. The case-study and apply sections carry results disclaimers.

## Where to customize

| What | File |
|------|------|
| Name, phone, email, CTAs, nav anchors, stats | `lib/site.ts` |
| Problem / Shift / Method / Authority / Who-for / FAQ copy | `lib/content.ts` |
| Colors (lime + ink) and fonts | `tailwind.config.ts` |
| Logo | `components/ui/Logo.tsx` |
| 2-step lead form fields & button | `components/sections/LeadForm.tsx` |
| Valuation engine math (factors, multiple curve) | `components/sections/ValuationEngine.tsx` |
| Flywheel steps / case-study figures / proof blocks | `lib/content.ts` |

## Wire up before launch

1. **Lead form** (`components/sections/LeadForm.tsx`) — `onSubmit` currently simulates a
   submit. Point it at your CRM / API route (GoHighLevel, HubSpot, Salesforce, etc.).
   Fields collected: First, Last, Phone, Email, Agency Name, Team Size, Annual Issued Premium.
2. **Visuals** — the hero and apply sections use an **abstract animated graphic system**
   (no stock photos). The hero dashboard numbers (`HeroVisual.tsx`) and case-study figures
   (`lib/content.ts`) are illustrative placeholders — swap for real metrics when available.
3. **Domain** — set `site.url` in `lib/site.ts` (feeds metadata, sitemap, robots).
4. **Contact details** — replace the placeholder phone/email in `lib/site.ts`.

## Notes

- Mobile-first, animated (scroll reveals, stagger, count-ups, accordion, sticky CTA).
- Accessibility: skip link, focus rings, `prefers-reduced-motion`, labeled inputs, SVG icons (no emoji).
- SEO: per-page metadata, Open Graph, JSON-LD `Organization`, sitemap & robots.
- The whole page prerenders as static HTML for fast loading.
