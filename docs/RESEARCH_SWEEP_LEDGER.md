# Research Sweep Ledger

## Sweep — 2026-10-06

### GitHub implementation references

| Source | Type | License | Status | What was learned | Reused directly? |
|---|---|---|---|---|---|
| StartBootstrap/startbootstrap-agency | GitHub | MIT | Inspected | Strong section architecture, responsive portfolio grid, modal pattern, simple build pipeline | No |
| directus-labs/agency-os | GitHub | MIT | Inspected | Complete agency website architecture, dynamic page builder, SEO, themeability, forms, reusable CMS concepts | No |
| Mian-0/Landing-page-for-an-agency | GitHub | All rights reserved | Inspected | High polish from motion, i18n, accessibility, command palette, case-study architecture; creative work is not licensed for reuse | No |
| Nischhalsubba/Creative-Agency | GitHub | Not confirmed in inspected root | Inspected | Visitor-flow thinking, responsive/accessibility/SEO documentation, separation of design concerns | No |
| syalomclubby/sylify-template | GitHub | Verify before reuse | Discovered | Premium Tailwind corporate layouts, theme variants, mobile navigation, spacing direction | No |
| contentful/template-marketing-webapp-nextjs | GitHub | Verify before reuse | Discovered | Marketing-site composition and CMS-friendly structure | No |
| kickstartDS/storyblok-starter | GitHub | Verify before reuse | Discovered | Component/content-system direction for scalable marketing sites | No |
| kickstartDS/storyblok-starter-premium | GitHub | Verify before reuse | Discovered | More complete component/content composition reference | No |

### Exa / web references

| Source | Type | What was learned | Reused directly? |
|---|---|---|---|
| Ijjad — Saudi salon website guide | Saudi practitioner research | Arabic-first RTL, explicit service information, mobile booking, local discovery, real business data and booking integrations matter | No |
| Mawid | Saudi/GCC product reference | Bilingual row-level content, RTL as native behavior, WhatsApp-native booking and service-specific flows | No |
| Bahaa | Saudi product reference | Salon and clinic should use distinct templates and booking journeys rather than one generic shell | No |
| Lapa Ninja | Visual gallery | Large-scale reference library for landing-page composition, responsive inspiration and section patterns | No |
| Land-book | Visual gallery | Current curated examples demonstrate varied grid systems, editorial composition and product storytelling | No |
| SiteInspire | Visual gallery | Curated high-quality web direction and art-direction reference | No |
| Landingfolio | Visual/component gallery | Useful pattern library for landing-page components and conversion composition | No |
| Foundations by Supertype | Open-source design-system reference | Tokenized typography, contrast/legibility checks, editorial blocks, CI-enforced visual quality | No |
| Alpha Design System | Open-source design-system reference | Semantic tokens, Radix accessibility patterns, Storybook-driven component inspection | No |
| Unified UI | Design-system reference | Token-driven components, layered architecture, motion and accessibility patterns | No |

## Decisions from the sweep

### Keep
- Strong art direction before adding more features.
- Distinct section rhythm instead of repeated card grids.
- Typography as a primary design tool.
- Clear conversion hierarchy.
- Small number of high-quality images.
- Sticky navigation/mobile actions when they support the task.
- Dialog/sheet interactions for contextual detail.
- Explicit accessibility and reduced-motion behavior.
- Tokenized, reusable architecture.

### Adapt
- Premium editorial layouts for Arabic RTL rather than translating LTR compositions.
- Booking patterns for Saudi WhatsApp-first behavior until a verified booking provider is connected.
- Design-system primitives without forcing every sector into one visual identity.
- Visual gallery patterns into sector-native compositions.

### Reject
- Copying distinctive external designs.
- Using all-rights-reserved code/design as a code donor.
- Generic same-template-different-logo portfolios.
- Fake testimonials, fake rankings, fake business facts, fake phone numbers.
- Decorative animation that harms mobile performance or comprehension.
- Menu/QR functionality inside this website-only repository.

### New capability
- RESEARCH_SWEEP.md is now a mandatory continuous research/build protocol.
- Completed demos are explicitly subject to later quality passes.
- tests/demo-safety.test.mjs guards demo safety rules.

## Note

Search results are discovery signals, not automatic authorization or proof of quality. Any future reuse must independently verify the source's current license and asset terms.


## Sweep — CLINIC / public-access pass — 2026-10-06

### Exa / current sector references

| Source | Type | What was learned | Reused directly? |
|---|---|---|---|
| Smile Clinic Saudi | Saudi clinic | Trust is built through service clarity, team expertise, safety/process information, educational content, and explicit appointment flow | No |
| Smile World Riyadh | Saudi clinic | Clinic positioning benefits from calm experience language, specialist profiles, technology, safety, and a clear treatment journey | No |
| Prolines Saudi dental guidance | Saudi practitioner | Mobile-first, bilingual RTL, dentist credentials, local SEO, appointment/WhatsApp pathways and accurate clinic facts are recurring requirements | No |
| SmileBright case study | Design case study | Calm visual tone, readable service architecture, doctor profiles, mobile-first CTA hierarchy and local search structure reduce anxiety | No |
| Lumina Dental Studio case study | Design case study | Boutique medical design can combine warmth with clinical credibility; service benefits, genuine doctor information and low-friction booking are strong patterns | No |
| Dentinostic healthcare case study | Product case study | Healthcare UX should reduce anxiety through clear steps, visible licensed professionals and simple progress-oriented journeys | No |

### Clinic decisions

**Keep:** calm editorial medical direction, strong photography, service-by-intent grouping, doctor credibility layer, three-step care journey, appointment request as the dominant CTA, reduced motion, factual demo labeling.

**Adapt:** warm wellness aesthetics into a Riyadh dental/aesthetics context, Arabic-first RTL, Saudi appointment handoff, service detail sheet, copy-ready appointment request until a real channel is verified.

**Reject:** fake credentials, fake patient reviews, invented treatment outcomes, unverified phone numbers, diagnosis claims, and menu/QR workflows.

**New capability:** public portfolio entry point at / is now separate from the authenticated Growth Studio workspace at /studio.html; completed demos remain public and noindex.
