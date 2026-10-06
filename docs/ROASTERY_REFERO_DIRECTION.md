# MATLA Roastery — Refero Direction

**Date:** 2026-10-06  
**Sector:** Specialty coffee roastery / Riyadh  
**Demo:** `demos/riyadh-roastery/`

## Commercial scene

The demo is meant for a field-sales conversation with a Riyadh roastery owner. The first screen must communicate: contemporary roastery, serious product presentation, and a clear next step without pretending that checkout, reviews, branches, or live ordering exist.

**Primary action:** explore the coffee range.  
**Secondary action:** copy a contextual product enquiry.  
**Signature device:** roast-log sheet paired with a physical-looking coffee bag, followed by a selectable origin/roast record.

## Forner reference decisions

The supplied Forner reference was read in full.

### Keep

- Bone canvas / roast ink palette.
- Flat paper-on-paper surfaces.
- Hairline structural borders.
- Sharp 4px-style geometry rather than soft cards.
- Large editorial type and generous section rhythm.
- Rare serif italic annotations.
- Product imagery treated as an artifact rather than a generic hero photo.

### Adapt

- Arabic typography uses IBM Plex Sans Arabic with more comfortable line-height and measure; the Forner display metrics are not copied into Arabic.
- The single-voice typographic restraint becomes Arabic sans + sparse serif annotation + monospaced product metadata.
- The portfolio/editorial rhythm becomes a roastery narrative: bag → roast log → origins → roast philosophy → bean field → brew notes.
- Product metadata becomes useful coffee information: origin, process, roast, brew, tasting notes, demo price.

### Reject

- Forner's exact page composition.
- Forner copy, photography, logos, or proprietary typefaces.
- Portfolio-case-study sequencing as a literal template.
- Huge full-width image sections whose dimensions dictate the page.
- Repeated text/image split sections.
- Generic 3-card coffee grids.
- Fake commerce, testimonials, branches, ratings, awards, or verified claims.

## Visual system

Tokens intentionally stay close to the supplied reference:

- Canvas: `#faf5eb`
- Ink: `#484036`
- Linen: `#ecece4`
- Sandstone: `#cacab0`
- Structural slate: `#666e72`
- No chromatic accent.
- No drop shadows.
- No gradients.
- Sharp borders and controlled paper surfaces.

## Image strategy

The demo uses local SVG artwork rather than random remote stock photography. The bag and bean field are original presentation assets created for this fictional brand. This keeps the color/lighting system coherent, avoids broken remote images, and makes replacement straightforward for a real client handoff.

## Responsive rule

The composition is re-authored at `1100px`, not merely shrunk. On phone widths:

- hero becomes a deliberate sequence: product → roast sheet → note;
- origin navigation becomes a compact three-way selector;
- product detail becomes a single column;
- manifesto becomes a single narrative column;
- brew options remain selectable without a card wall;
- sticky mobile action remains available.

## Truth / handoff

The site is `DEMO / noindex,nofollow`. Product names, origins, prices and roast data are fictional presentation content. The enquiry button copies a message only. Before production, replace identity, product facts, prices, contact destination, legal content, imagery/assets and any commerce integration with verified client-owned information.
