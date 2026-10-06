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


## Sweep — VISUAL QUALITY RED TEAM — 2026-10-06

### Exa references that changed the bar

| Source | Type | Signal | Applied |
|---|---|---|---|
| Noir Studio / PrimoDevStudio | Motion case study | Full-screen loader, split typography, pinned horizontal gallery, magnetic CTA, custom cursor, ScrollTrigger choreography | Adapted as a restrained interaction vocabulary; no code copied |
| fromanother / Hon Tran case study | Award-winning agency case study | The site itself is the pitch; cinematic media, editorial pacing, shared motion language, GPU-safe transform/opacity animation | Applied to clinic hero/reveal rhythm |
| The Atelier / Apala Gonzalez | Cinematic barber case study | Grain/vignette, section counters, scroll-driven narrative, gallery/lightbox, persistent mobile action | Used as a direction reference for portfolio-level craft |
| Lumina Dental Studio | Dental design case study | Warm medical art direction, service-by-benefit structure, humanized clinician presentation, low-friction booking | Adapted into NOVA's calmer medical world |
| NOVA Clinics Saudi | Riyadh clinic | Local clinic expectations: clear services, comfort, location and appointment information | Used for sector truth/structure, not visual copying |
| Smile Design Riyadh | Riyadh clinic | Explicit service, contact and location information | Used as content-model reference only |
| Smile World Riyadh | Riyadh clinic | Calm experience language, specialists, technology, location and appointment flow | Used as conversion/content reference |

### GitHub references inspected in this red-team pass

- dj2313/salon-website — premium salon reference with motion, theme depth and responsive component structure.
- zidvsd/lumina-dental — dental-specific frontend reference.
- eternalstoneinside/noir-detailing-studio — automotive/detailing reference candidate.
- Isradev96/barbershop-website — barber reference candidate.
- Mian-0/Landing-page-for-an-agency — high-polish motion reference; not a code donor because license is not permissive.
- StartBootstrap/startbootstrap-agency — MIT architecture reference; used for structural ideas only.

### Red-team finding

The mobile screenshot exposed a real quality failure: the clinic demo was receiving a desktop composition at a phone-sized physical viewport, producing a giant image followed by a compressed text column. The underlying issue was a breakpoint that activated too late for the actual showcase environment.

This was not a copywriting problem. It was a composition and responsive-system problem.

### Corrective decisions

**Keep**
- Full-bleed hero imagery.
- Oversized display typography.
- Editorial chaptering.
- Purposeful motion.
- Service storytelling instead of dense lists.
- Persistent conversion action.

**Change**
- Mobile/tablet breakpoint moved to 1100px across all three completed demos.
- NOVA rebuilt around a cinematic hero, marquee, chapter system, service-stage composition, team overlay, journey track, appointment dock, reveal choreography and reduced-motion fallback.
- Portfolio design system now explicitly bans text-first stacks and requires a memorable visual device per demo.

**Reject**
- Giant image + narrow text column as the primary hero.
- Equal-weight generic card grids.
- Paragraph-heavy sections presented as the main visual content.
- Desktop-first layouts that merely shrink on phones.

### Verification status

- Source-level regression tests were extended for the premium visual system and 1100px mobile-first breakpoint.
- Vercel deployment dpl_7FNnFGwvmp8vY1mkCKfpSDoHrFvv reached READY for commit ac254f5458f1449f4fb1e618b787d0ce1860183e.
- HTTP fetches returned 200 for the public root and all three demos after the clinic redesign.
- Real interactive screenshot QA remains limited by the current tool environment; source and deployment verification are complete, but a Chrome DevTools visual pass is still a separate verification layer.
