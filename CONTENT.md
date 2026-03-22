# Where to put real content (images & links)

Most text, URLs, and image paths live in **`src/siteContent.ts`**. Edit that file and refresh the dev server.

## Links (one place)

| What | Field in `siteContent.ts` |
|------|---------------------------|
| Top **Join** button | `links.join` (defaults to `/officers#join`) |
| Hero **Become a Member** | `links.becomeMember` |
| Hero **See Upcoming Events** | `links.upcomingEvents` (e.g. `/#events` or an external calendar) |
| Bottom **Join Our Interest List** | `links.interestList` (Google Form, GobblerConnect, etc.) |
| **Email** in footer | `links.email` — use `mailto:yourclub@vt.edu` |
| **Instagram / LinkedIn / Discord** | `links.social` — set each URL; remove a line to hide that link |

**Navigation** items are in `nav`. Use **React Router** paths (e.g. `/`, `/officers`, `/#about`).

**Routes**

- **`/`** — Home (hero + “What VT SASE Offers”)
- **`/officers`** — “Meet The Officers” (officer grid + join CTA). Browser tab title: `officersPageTitle`.

**Home page section anchors** (hash on `/` — must match `href`s):

- `/#events` — hero / upcoming highlights
- `/#about` — “What VT SASE Offers”
- `/#mentorship` — Mentorship card (middle column)
- `/#contact` — footer

**Officers page**

- **`/officers#join`** — join CTA at bottom of `/officers`

## Images

### Logo (header)

1. Add your file to **`public/images/`** (e.g. `public/images/sase-logo.png`).
2. In `siteContent.ts`, set:
   ```ts
   headerLogoUrl: "/images/sase-logo.png",
   ```
3. Leave as `undefined` to keep the gradient “VT” placeholder.

### Officer headshots

1. Add photos to **`public/images/officers/`** (e.g. `jane-doe.jpg`).
2. For each person in `officers`, set:
   ```ts
   { name: "Jane Doe", role: "President", initials: "JD", photoUrl: "/images/officers/jane-doe.jpg" },
   ```
3. Optional: add `link: "https://linkedin.com/in/..."` for a clickable card.

### Event thumbnails (future)

If you add event images later, extend `EventItem` in `siteContent.ts` with an optional `imageUrl` and render it in `HeroSection.tsx`.

## Favicon

Replace **`public/favicon.svg`** with your own icon, or point `index.html` at a `.png` in `public/`.

## Build / run

```bash
npm install
npm run dev
```

Production build: `npm run build` → static files in `dist/`.
