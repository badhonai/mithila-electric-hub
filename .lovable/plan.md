# Mithila Electric Center — Single-Page Site

A professional, minimal, mobile-first landing page for the motor repair workshop, built as one TanStack Start route with strong on-page SEO and LocalBusiness structured data.

## Design system (src/styles.css)

- Background: `#0A1628` (deep navy) → `--background`
- Foreground: `#FFFFFF` → `--foreground`
- Accent (primary CTA): `#F5A623` (bright yellow/orange) → `--primary`, with navy `--primary-foreground`
- Muted navy surface for cards: lighter navy (e.g. `#13243F`)
- Border: subtle white at low opacity
- No gradients, no purple
- Fonts via Google Fonts in `<head>`:
  - Headings: **Oswald** (bold industrial display)
  - Body: **Inter** (clean sans-serif)
- Token registration in `@theme inline` so Tailwind utilities (`bg-primary`, `text-foreground`, etc.) work

## Page structure

Single route at `src/routes/index.tsx` replacing the placeholder. Components composed inline or split into `src/components/site/` (Hero, Services, WhyUs, ServiceArea, Contact, Footer) for readability.

Sections in order:

1. **Hero** — Full-width navy. Small eyebrow ("M/S. Mithila Electric Center"), H1 "Industrial Motor Repair in Kanchpur, Narayanganj", tagline "Industrial Motor Repair Specialists — Kanchpur, Narayanganj", two CTAs: `Call Now` (`tel:01829403275`, yellow filled) and `WhatsApp Us` (`https://wa.me/8801829403275`, outline). Sticky-feel top header with business name + phone.
2. **Services** — 6 icon cards (lucide-react icons already in deps): AC Motor Repair (Zap), DC Motor Repair (BatteryCharging), Motor Rewinding (RotateCw), Bearing Replacement (Cog), Motor Parts Supply (Wrench), On-site Service (Truck). Cards: navy surface, yellow icon, white title, muted description.
3. **Why Choose Us** — 4 stat-style points with yellow numerals/icons: 20+ Years Experience, Fast Turnaround, All Motor Sizes, Genuine Parts.
4. **Service Area** — Short paragraph naming Kanchpur, Sonargaon, Rupganj, Narayanganj. Embedded Google Maps iframe (lazy-loaded `loading="lazy"`) pointing to the business location. Uses a standard `https://www.google.com/maps?...&output=embed` URL derived from the shared maps link (Kanchpur, Narayanganj). Titled iframe for a11y.
5. **Contact** — Two-column on desktop, stacked on mobile:
  - Left: Phone (`01829-403275` as `tel:` link), WhatsApp button, address, hours (Sat–Thu 9AM–7PM, Fri Closed).
  - Right: Map iframe reused or a simple contact card.
6. **Footer** — Business name, address, phone, copyright.

## SEO

In `src/routes/index.tsx` `head()`:

- `title`: "Electric Motor Repair Kanchpur | M/S. Mithila Electric Center"
- `meta name="description"`: "Industrial AC & DC motor repair and rewinding in Kanchpur, Narayanganj. Fast service, genuine parts. Call 01829-403275."
- `og:title`, `og:description`, `og:type=website`, `og:url="/"`
- `twitter:card=summary`
- `link rel="canonical" href="/"`
- `scripts` entry with `type="application/ld+json"` containing LocalBusiness schema:
  - `@type`: `LocalBusiness`
  - `name`, `image` (omit if none), `telephone: +8801829403275`
  - `address`: PostalAddress (Jom Jom Super Market, Kanchpur 1430, Narayanganj, BD)
  - `geo`: approximate coords for Kanchpur (≈ 23.6918, 90.5350) — noted as approximate
  - `openingHoursSpecification`: Sat–Thu 09:00–19:00; Fri closed
  - `areaServed`: Kanchpur, Sonargaon, Rupganj, Narayanganj
  - `url`: "/"

In `__root.tsx`: leave sitewide defaults; do NOT add canonical there. Add Oswald + Inter `<link>` preconnect + stylesheet via root `head().links`.

Single `<h1>` in Hero. Keywords ("electric motor repair Kanchpur", "motor rewinding Narayanganj", "AC DC motor repair") used naturally in Hero copy, Services intro, and Service Area paragraph. All decorative icons are `aria-hidden`; the map iframe has a descriptive `title`.

## Performance

- No new npm packages — uses existing Tailwind + lucide-react + shadcn `Button`.
- Google Fonts via `<link>` with `display=swap` and preconnect.
- Map iframe `loading="lazy"`.
- No hero image generation (keeps payload small; user emphasized fast loading and didn't request photography).

## Files touched

- `src/routes/__root.tsx` — add Google Fonts links; keep shell intact.
- `src/routes/index.tsx` — replace placeholder with full page + `head()` + JSON-LD.
- `src/styles.css` — override `:root` tokens to navy/yellow palette and register Oswald/Inter as `--font-display` / `--font-sans`.
- `src/components/site/*.tsx` (new) — Header, Hero, Services, WhyUs, ServiceArea, Contact, Footer.

## Out of scope

- No backend, no Lovable Cloud, no forms, no analytics.
- No multi-page routing (single-page site as requested).
- No hero photography (can add later if you want me to generate an industrial workshop image).

&nbsp;

Show pin location with Google map and help increase visibility on google map 