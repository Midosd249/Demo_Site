# VANTA — Refero-led Direction

## Commercial problem

**Sector:** premium car detailing / ceramic / paint correction in Riyadh  
**Dominant conversion:** quote request  
**Primary hesitation:** “What will I actually get, and how do I know which package fits my car?”  
**Phone-first sales scene:** a prospect should understand the offer, see transformation proof, and build a quote request within one short scroll.

## Refero sources used

### Lamborghini.com
https://styles.refero.design/style/c9c5be5a-aaa1-4338-9681-8378d2e24fbd

**Keep**
- automotive theater: product imagery as the primary visual language
- dark/light surface alternation
- aggressive display scale
- minimal structural UI
- one controlled chromatic accent
- hard-edged geometry and hairline separation

**Adapt**
- replace uppercase-only English hierarchy with Arabic-first RTL typography
- use a lime signal accent instead of Lamborghini yellow
- make the CTA a quote action rather than a product-order action
- keep 8px-or-less geometry while preserving touch comfort
- use the visual system for a service business, not a vehicle manufacturer

**Reject**
- brand-specific yellow
- Lamborghini identity, copy, photography, logos, proprietary type
- exact section compositions

### Tesla
https://styles.refero.design/style/7266b546-2fb0-465c-acd6-79001c39829a

**Keep**
- full-bleed automotive imagery
- minimal UI chrome
- simple 4px rhythm
- image-led narrative
- focused primary action

**Adapt**
- use section-level editorial storytelling rather than repeating centered hero stacks
- keep Arabic copy substantial enough to explain service differences
- add quote-builder behavior because a detailing business needs fit and context

**Reject**
- Tesla blue
- vehicle-ordering information architecture
- product-model showroom structure

### 099 SUPPLY
https://styles.refero.design/style/e4a7b5f3-f393-4f6d-b4a5-ecf874024bed

**Keep**
- specimen/catalog metadata language
- hairline dividers
- disciplined monochrome surfaces
- comparison slider as a structural visual tool

**Adapt**
- use the comparison mechanism for before/after proof
- use bilingual micro labels as metadata, not decorative chrome
- keep Arabic body copy dominant

**Reject**
- mono-only typography
- catalog replication
- mockup-tile page structure

## GitHub implementation sweep

High-signal discovery targets included:
- Esorensen-dev/auto-detailing-website
- Arhat1111/Autodox-Car-Detailing-studio---website
- asppats12/AutomotiveMasterpieces
- rajyoggaware111-eng/The-Detailing-Studio-
- SabinaDam/Auto-detailing-Website
- ahad98909/AutoShine-Detailing-Studio
- EvanSawyer/car-detailing-website-template
- AbrRahman/prime-wash-frontend
- martaqh/lp-automotive
- ByteSized-cmd/performance-car-landing

These were treated as implementation/architecture references only. The inspected repository metadata did not establish a permissive license for the selected detailing candidates, so no code or distinctive assets were transplanted.

## Exa sector signals

- Automotive detailing is a visual service: transformation proof deserves first-class placement.
- Package clarity matters: interior, exterior, paint correction, and ceramic protection should be distinguishable.
- Mobile-first quote/booking actions are central.
- Heavy photography must be treated as a performance constraint.
- Service-area/location information belongs in the handoff layer.
- Before/after comparisons should be touch-friendly and keyboard accessible.

## VANTA design system

### Tokens

- Canvas dark: #0a0b0a
- Dark surface: #111311
- Light canvas: #f4f3ef
- Signal accent: #d8ff3f
- Muted dark text: #62655e
- Muted light text: #9b9d97
- Hairline: rgba(244,243,239,.18)
- UI family: Manrope
- Arabic/body family: IBM Plex Sans Arabic
- Max content width: 1380px
- Primary spacing rhythm: 8 / 16 / 24 / 40 / 64 / 96 / 144px
- Geometry: mostly square; controls use minimal radius

### Composition

1. Full-bleed automotive hero
2. Quiet manifesto
3. Interactive transformation stage
4. Editorial service rows
5. Feature split
6. Gallery field
7. Quote builder
8. Location / handoff

### Signature interaction

**Before/after reveal slider.**

It is the page's proof mechanism, not decoration. In production it must use real client-owned before/after pairs.

### Conversion behavior

The dominant CTA is **اطلب تسعيرة**.

The quote builder asks for:
- vehicle type
- service

It then creates a copy-ready Arabic request. No unverified WhatsApp or phone destination is embedded.

### Responsive rule

Widths up to 1100px are deliberately re-composed rather than receiving a shrunken desktop grid.

## Quality verdict

This is a **Refero-led original system**, not a Lamborghini/Tesla clone:
- Refero controls the system grammar.
- Saudi/Arabic requirements control the content and interaction.
- The detailing business controls the commercial mechanism.
- No external source contributes copied code or proprietary assets.
