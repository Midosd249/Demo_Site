# Refero Styles — Permanent Visual Research Reference

> **Canonical external visual reference for this repository.**
> Reviewed: 2026-10-06
> Primary source: https://styles.refero.design/
>
> This document records how the repository uses Refero Styles as a design-research instrument. It is not a license to copy any source site's code, brand, assets, proprietary identity, or distinctive composition.

## 1. Why this reference is permanent

Refero Styles is a large, AI-readable library of extracted website design systems. The library currently presents 2,000+ style references and exposes, per style, inspectable visual direction plus structured information for:

- color roles
- typography
- type scale
- spacing rhythm
- radii
- surfaces
- component patterns
- imagery rules
- layout logic
- usage guidance
- DESIGN.md exports
- Tailwind-oriented tokens
- CSS-variable-oriented tokens
- design-token views

The important lesson is not the number of references. The important lesson is the **translation from visual evidence into explicit design rules**.

Refero itself warns that its generated style records are extracted references rather than official brand guides. Therefore this file is a research source, not an authority that overrides the project's own product constraints.

## 2. Mandatory read rule

Every new design/build session in this repository MUST read:

1. `KAKU_CONTEXT.md`
2. `FIELD_SALES_MISSION.md`
3. `PORTFOLIO_STRATEGY.md`
4. `DESIGN.md`
5. **`docs/REFERO_STYLES_REFERENCE.md`**
6. `RESEARCH_SWEEP.md`
7. the target demo and its recent commits

For any of the following, the current session MUST revisit the live Refero source before implementation:

- a new sector
- a major visual redesign
- a portfolio-wide visual quality pass
- a new shared component
- a new typography system
- a new motion language
- a new image/layout treatment
- a redesign triggered by a visual QA failure

**Do not assume an old Refero observation is still sufficient. Re-open the source and inspect the relevant style pages.**

## 3. What Refero is for

Use Refero to answer:

> **What does excellent contemporary web work do with hierarchy, space, type, imagery, surfaces, components and motion?**

Then translate those observations into an original Saudi-ready design.

Refero is especially valuable for:

### A. Visual language discovery
Study different visual worlds before choosing a sector direction:

- editorial
- luxury
- cinematic
- product-first
- brutalist
- warm paper
- monochrome
- dark technical
- playful consumer
- gallery / museum
- fashion
- industrial
- wellness
- premium service

### B. Token discipline
Extract the **roles** behind values rather than randomly collecting hex codes:

- canvas
- raised surface
- primary text
- secondary text
- border/hairline
- action
- selected state
- focus state
- disabled state

Likewise record typography by role:

- display
- heading
- body
- label
- metadata
- UI/control

### C. Composition
Study:

- hero proportions
- image-to-copy balance
- full-bleed versus contained media
- editorial offsets
- asymmetric grids
- section transitions
- negative space
- content width
- repeated spacing rhythm
- visual pacing

### D. Component behavior
Study how strong sites treat:

- navigation
- CTAs
- cards
- filters
- galleries
- sheets/dialogs
- sticky controls
- pagination
- forms
- product/service showcases
- footer/legal areas

### E. Interaction language
Use references to discover purposeful mechanisms such as:

- reveal choreography
- pinned narratives
- horizontal galleries
- progressive disclosure
- hover/focus transformations
- contextual CTA changes
- sticky storytelling
- restrained cursor behavior
- image transitions

Motion must still obey `DESIGN.md`: purposeful, performant, accessible, and disabled when reduced motion is requested.

## 4. The correct Refero workflow

For every meaningful visual task:

### Step 1 — Define the commercial problem

Before searching, write:

- sector
- audience
- dominant conversion
- primary objection/hesitation
- desired emotional tone
- phone-first sales context

Example:

**AUTO / detailing**
- conversion: quote / WhatsApp
- hesitation: "What will my car actually look like?"
- visual problem: prove transformation
- likely visual device: before/after storytelling

### Step 2 — Browse Refero by visual need

Do not search only for the business category.

Search for the **design mechanism** required by the problem.

Examples:

- Need premium service → editorial / luxury / fashion / hotel references
- Need transformation proof → product comparison / gallery / before-after references
- Need trust → medical / financial / premium professional references
- Need cinematic atmosphere → studio / agency / fashion references
- Need dense information → product / SaaS / dashboard references
- Need warmth → wellness / hospitality / editorial references

### Step 3 — Inspect the actual style page

Do not stop at the thumbnail.

Read:

- description
- palette
- typography
- spacing
- radii
- components
- layout
- imagery
- Do/Don't rules
- DESIGN.md export where useful

If the page provides multiple token representations, compare them rather than blindly choosing one.

### Step 4 — Extract decisions, not decoration

For each selected reference write:

**Keep**
- what is genuinely useful

**Adapt**
- what must change for Arabic/RTL, Saudi behavior, mobile field sales, accessibility or sector identity

**Reject**
- what would cause copying, overfitting, poor UX, performance problems, or weak commercial fit

**New capability**
- only if the pattern deserves a reusable primitive

### Step 5 — Combine lessons from multiple references

Never build from a single reference.

A strong sector direction should normally combine:

- one composition reference
- one typography/surface reference
- one interaction reference
- one sector/business reference
- Saudi/local requirements

The result must be a new composition.

## 5. Critical distinction: reference system vs project system

Refero can tell us:

> "This site uses huge type, large negative space, alternating surfaces and pill CTAs."

It cannot tell us:

> "Our Riyadh clinic should therefore look exactly like Apple."

The project system remains authoritative:

- Arabic-first
- RTL-first
- mobile-first
- Saudi/GCC commercial behavior
- truthful content
- strong conversion
- accessible interaction
- replaceable client assets
- no menu workflow
- no fake business facts

Refero is a **quality benchmark and research library**, not the product design system.

## 6. Token extraction rules

When a Refero style provides exact values, record values together with their purpose.

Good:

> Canvas #f5f5f7 — alternating section surface used to create rhythm without borders.

Bad:

> Gray #f5f5f7.

Good:

> Display 80–96px, tight line-height — hero-scale type used to create architectural hierarchy.

Bad:

> Heading 96px.

Do not import every token.

Select only the values that support the chosen direction.

Avoid token drift:

- random one-off colors
- arbitrary spacing everywhere
- unrelated radii
- excessive shadows
- multiple competing accents
- inconsistent type scales

## 7. Typography rules

Refero demonstrates that typography is often the main visual system, not a finishing step.

For each design direction document:

- display family
- body family
- UI family
- weight range
- display size range
- body size range
- line-height
- tracking
- maximum reading width
- Arabic fallback/substitute

Never blindly copy proprietary fonts.

Use licensed fonts or appropriate substitutes while preserving the intended **typographic role**, not the source brand identity.

For Arabic:

- test actual Arabic glyph behavior
- inspect line wrapping
- preserve readable line length
- avoid mechanically mirroring LTR layouts
- verify numerals, prices and mixed Arabic/English content

## 8. Imagery rules

Refero is particularly useful for understanding **how imagery is composed**:

- crop
- scale
- aspect ratio
- placement
- surrounding whitespace
- overlay treatment
- repetition
- product/lifestyle balance

It is not permission to reuse captured imagery.

For this repository:

1. client-owned assets
2. licensed stock
3. permissive/open assets
4. generated assets when appropriate

Never copy competitor photography, logos, reviews, illustrations, or proprietary visual identity.

## 9. Motion rules

Refero references may show sophisticated motion, but a screenshot or extracted style cannot prove implementation quality.

Before adopting motion, verify:

- why the motion exists
- whether it improves comprehension
- whether it works on touch devices
- whether it is performant
- whether it respects `prefers-reduced-motion`
- whether it interferes with CTA conversion
- whether it needs a library or can use lightweight CSS/JS

Prefer transform/opacity-based motion and progressive enhancement.

Do not add motion merely because a reference has motion.

## 10. Responsive rules

A reference desktop screenshot is never proof of mobile behavior.

For every new design:

- design the phone composition deliberately
- check narrow RTL wrapping
- establish mobile image crops
- establish mobile section order
- preserve CTA visibility
- test touch targets
- avoid shrinking desktop grids into unreadable columns

This repository's current visual bar treats widths up to **1100px as phone/tablet-first composition** for sales demos.

## 11. Anti-copy and licensing

Refero pages describe real brands and real websites. Their extracted DESIGN.md files are **references**.

Never:

- copy a branded layout wholesale
- reproduce a competitor's hero composition pixel-for-pixel
- copy proprietary copy
- copy proprietary photography
- copy logos
- transplant source code without an appropriate license
- treat Refero's extracted tokens as an open-source code license

For GitHub implementation references, independently verify the repository license before code reuse.

## 12. Required research record

Every meaningful Refero sweep must be recorded in `docs/RESEARCH_SWEEP_LEDGER.md`:

| Field | Required |
|---|---|
| Refero style / source | yes |
| Refero URL | yes |
| Date reviewed | yes |
| Visual role | yes |
| Key lesson | yes |
| Keep | yes |
| Adapt | yes |
| Reject | yes |
| Reused directly? | yes/no |
| License/copy concern | when applicable |
| Where applied | yes |

Do not dump dozens of links. Record only high-signal references and the decisions they changed.

## 13. Current reference lessons

### Apple (España)
Observed through Refero's extracted style page.

Useful lesson:
- massive typographic hierarchy
- generous negative space
- monochrome UI with controlled accent
- large visual/product surfaces
- section rhythm through surfaces instead of noisy borders

Use as a lesson in **restraint and scale**, not as an Apple clone.

### Vercel
Keep as a reference for:
- high-contrast technical/editorial composition
- restrained color
- strong type hierarchy
- product narrative

### Linear
Keep as a reference for:
- precision
- dense but disciplined information hierarchy
- dark surfaces
- controlled motion and UI states

### ORYZO AI
Keep as a reference for:
- editorial product presentation
- atmospheric dark direction
- strong hero composition
- visual storytelling

### Teenage Engineering
Keep as a reference for:
- product-led art direction
- unusual composition
- visual personality
- restraint in supporting UI

These are starting points, not permanent templates. The live Refero library should be checked again when the target sector demands a different visual language.

## 14. Quality gate

Before calling a visual build complete, ask:

1. Can I explain the visual direction in one sentence?
2. Did I inspect more than one strong reference?
3. Did I extract design rules rather than copy a page?
4. Is the first viewport compelling without interaction?
5. Is the phone composition intentionally designed?
6. Does the sector look native rather than templated?
7. Is there one memorable visual/interaction device?
8. Is the CTA obvious?
9. Is typography doing real structural work?
10. Are spacing/radius/color choices tokenized?
11. Are assets legally reusable?
12. Is motion purposeful and reduced-motion safe?
13. Does Arabic/RTL feel designed rather than mirrored?
14. Did the result become better because of the research, not merely more decorated?

If the answer to several is "no", the visual work is not finished.

## 15. Permanent source

**Refero Styles:** https://styles.refero.design/

Use the live source for current research. Use this file for the repository's accumulated interpretation and operating rules.
