# Demo_Site — Website + Digital Growth Platform

Arabic-first, RTL, mobile-first operating platform for Saudi/GCC SMB websites and digital growth work.

## Primary workflow

Create Website → Edit → Preview → Publish → Audit SEO → Improve Local Visibility → Improve AI Readiness → Record Competitors → Generate Client Report → Manage Client.

## Product areas

- Dashboard
- Websites + Builder
- SEO Audit
- Local Visibility
- AI Visibility
- Competitors
- Reports
- Clients
- Settings

## Builder

The current builder is an expandable section editor, not a drag-and-drop canvas. It supports adding, editing, reordering, saving and previewing: Hero, About, Services, Map, Testimonials, FAQ, CTA and Contact sections. Data is stored in the `growth_websites.payload` JSON shape.

## Truth and privacy rules

- No fabricated production numbers or rankings.
- CORS/network failure during an SEO fetch is an unavailable result, not a score.
- Local Visibility and AI Readiness distinguish Implemented, Manual and Not available.
- Competitors are user-entered unless an external source is actually connected.
- No private Google Business Profile data or exact AI-model output is claimed.
- Frontend contains only public Supabase configuration; never a service-role key.

## Data

The existing Supabase project remains additive. Growth tables are `growth_websites`, `seo_audits`, `growth_clients`, `growth_reports`, and `competitors`, protected by tenant-scoped RLS. Legacy menu tables are preserved for history and are not part of the primary product navigation.

See `docs/DATA.md` for the data contract and `docs/VERCEL.md` for deployment policy.

## Local test

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`. The app works in local mode when Supabase configuration is unavailable. To exercise the blocked SEO path, audit a site that rejects browser cross-origin access; the UI must show the blocked/unavailable state and manual checks instead of inventing a score.

## Development rules

Work on `refactor/website-growth-platform`. PR #2 remains draft until reviewed. Do not rename the repository, merge to `main`, connect a different repository to Vercel, or delete legacy menu history.

## Legacy isolation

The old menu application files remain in repository history and are not exposed by the new primary shell. They are treated as legacy compatibility material and should only be touched when a dependency requires it.

## License / ownership

This repository is maintained as the Demo_Site product workspace. External provider integrations are optional and must fail safely when unavailable.
