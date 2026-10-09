# NAQA Garment Care — Design System

## Brand direction
**Brand:** NAQA Garment Care  
**Arabic name:** نقاء للعناية بالملابس  
**Market:** Riyadh, Saudi Arabia  
**Project type:** Fictional portfolio/demo; not a real operating business.

The visual idea is quiet garment-care craftsmanship: clean fabric, precise pressing, tailored silhouettes, soft steam, garment bags, and tactile textile detail. The experience should feel premium, warm, contemporary, and locally relevant without unsupported business claims.

### Experience principles
1. Arabic-first and RTL by default.
2. Mobile-first; the first viewport must be designed and evaluated at phone width.
3. One clear visual idea per section, not interchangeable card stacks.
4. Strong typography and deliberate negative space.
5. One clear primary conversion action.
6. Never invent reviews, customers, licenses, certifications, addresses, guarantees, customer counts, or performance figures.
7. Mark fictional contact details, pricing, service areas, and examples as demo data where ambiguity is possible.
8. Keep the brand reskinnable through tokens and reusable components.
9. Use motion sparingly and respect reduced-motion preferences.
10. The first viewport must feel complete before later sections or interactions are added.
11. Images support the garment-care story and must not overpower the layout or dictate uncontrolled height.
12. Avoid generic laundry templates, government-portal styling, random card grids, bright blue corporate palettes, random gradients, excessive shadows, and decorative noise.

## Visual concept
- Editorial, tactile, calm, and precise.
- Use restrained compositions inspired by tailoring studios, garment labels, fabric swatches, pressed creases, hangers, and soft natural light.
- Prefer one strong, controlled garment photograph over unrelated stock collages.
- Use component-specific image wrappers, dimensions, object-fit, and object-position.
- Do not use large background imagery unless its purpose, contrast, and mobile crop are justified.
- Demo imagery must be replaced with licensed or client-owned photography before commercial production.

## Color tokens

| Token | Value | Purpose |
|---|---|---|
| Ink | #171411 | Main text and high-contrast details |
| Espresso | #261B15 | Brand-dark surfaces and header accents |
| Bone | #F5F0E8 | Primary page background |
| Sand | #E5D8C7 | Secondary surfaces and separators |
| Brass | #B78A54 | Restrained accent and focus detail |
| Muted | #776C61 | Supporting text only where contrast is sufficient |
| White | #FFFDF8 | Clean surfaces and reverse-text contexts |
| Border | #D8CBBB | Borders and dividers |

Warm neutrals are foundational; brass is an accent, not a large-area fill by default. Do not introduce bright blue or arbitrary gradients. Verify actual text/background contrast. Define tokens once in the authoritative stylesheet.

## Typography
- Arabic primary: IBM Plex Sans Arabic.
- Latin/UI companion: Manrope.
- Use robust system fallbacks if remote fonts fail.
- Use Arabic-first heading and body styles; do not assume Latin display fonts suit Arabic glyphs without visual review.
- Make hierarchy clear through size, weight, line-height, and width.
- Keep Arabic body copy readable on 320–390px screens.
- Avoid long all-bold paragraphs and tight Arabic line-height.
- Remote font requests must fail gracefully.

## Spacing and layout
Use a consistent scale: 4px micro adjustments; 8px compact spacing; 12px labels/controls; 16px standard spacing; 24px component spacing; 32px large gaps; 48px compact section separation; 64px standard section separation; 80–96px wide-screen editorial separation.

Use logical properties such as margin-inline, padding-inline, inset-inline, and text-align: start where practical. Keep content around a readable 1180px maximum width. Use fluid side padding, avoid fixed widths that exceed the viewport, and preserve useful content in the first mobile viewport.

## Responsive breakpoints
- Compact phone: up to 390px; tighten spacing only where needed without losing hierarchy or usable controls.
- Mobile: up to 767px; use deliberate single-column layouts and touch-friendly controls.
- Tablet/narrow layout: 768–1100px; do not simply shrink a desktop composition.
- Wide desktop: 1101px and above; use the full editorial composition and content max width.

Minimum visual QA widths: 320, 360, 390, 414, 768, 1024, and 1440px. Do not add breakpoints casually; document why any additional breakpoint is needed.

## Component vocabulary
Only implement components in their approved stage:
- Demo label or announcement strip
- Brand header and navigation
- Editorial hero
- Primary and secondary CTA buttons
- Service list or service rows
- Care process and quality explanation
- Pricing or enquiry panel with demo labels
- Service-area/contact section using explicitly fictional data
- Footer
- Optional mobile action bar only if separately approved

Avoid equal-weight cards for every content group. Use hierarchy, rows, image/text splits, borders, and whitespace intentionally.

## Image rules
Use relevant subjects: shirts, suits, abayas, delicate fabrics, pressing, tailoring, garment bags, hangers, steam, folded textiles, and textile details. Informative images need meaningful Arabic alt text; decorative images may use empty alt text when appropriate. Images must be placed in controlled wrappers with intentional crop. Never apply a global aspect ratio to every image or allow images to dictate uncontrolled layout height. External URLs must be stable, documented in README, appropriate for demo use, and accompanied by a local/licensed replacement plan.

## Interaction and motion
Motion communicates state or guides attention; it is not continuous decoration. State transitions should generally be 150–220ms. Avoid parallax and excessive reveal choreography. Respect prefers-reduced-motion. Do not add interactions before approval. Controls need visible focus and keyboard support.

## Accessibility
Use semantic landmarks, logical headings, visible keyboard focus, sufficient contrast, comfortable touch targets, meaningful link names and alt text, real buttons for actions, and links for navigation. Keep aria-expanded synchronized with disclosure state. Support Escape for dismissible menus/dialogs where applicable. Fixed controls must not obscure content or focus. Contrast and zoom/reflow must be verified in browser QA, not inferred from source inspection.

## First-viewport acceptance criteria
The first viewport cannot pass until reviewed at minimum 390px and 1440px; 768px is included in formal QA.
- Brand and purpose are immediately clear in Arabic.
- RTL direction and reading order are correct.
- Header/navigation hierarchy is understandable.
- One dominant headline and one primary CTA are visible without competing accents.
- Supporting copy is concise and readable.
- Hero imagery is relevant, intentionally cropped, and constrained.
- No image unintentionally dominates mobile.
- No horizontal overflow, overlapping text, or clipped essential content.
- Demo status is clear where fictional business data could be mistaken as real.
- Focus and contrast requirements are designed in from the start.
- Explicit visual approval is required; deployment READY status is not visual approval.

## CSS architecture contract
One authoritative stylesheet: css/style.css. Required order: reset; tokens; base typography/document styles; layout utilities; components; responsive rules; accessibility/motion. No responsive.css, duplicate CSS files, repeated full component definitions, appended patch piles, blanket !important, or global image aspect-ratio rules. Each CSS change must report selector, reason, affected component, and responsive impact.
