# Website Portfolio Design System

## Product surface

Field-sales demo websites for Saudi/GCC SMBs.

## Experience mode

Persuade. The visitor should decide that the business deserves a stronger digital presence and understand the conversion path within seconds.

## Product boundary

This design system is for the **website layer**. It does not define digital-menu UI. Menu creation and QR-menu workflows belong to the separate menu repository.

## Shared principles

1. Arabic-first and RTL by default.
2. Mobile-first because the demo is primarily shown on a phone.
3. One strong visual idea per sector.
4. Large typography and deliberate negative space.
5. Real conversion actions: booking, WhatsApp, call, directions, enquiry, quote.
6. No fake social proof or invented performance metrics.
7. Demo content is visibly marked DEMO.
8. Each demo must be easy to reskin without changing the layout architecture.
9. Motion is short, purposeful, and disabled for reduced-motion users.
10. The first viewport must look finished before any interaction.

## Shared tokens

- Ink: #171411
- Espresso: #261B15
- Bone: #F5F0E8
- Sand: #E5D8C7
- Brass: #B78A54
- Muted: #776C61
- White: #FFFDF8
- Radius: 18–28px
- Content max width: 1180px
- Body font: IBM Plex Sans Arabic
- Display font: Cormorant Garamond / editorial serif
- UI font: Manrope

## Component vocabulary

- Announcement / demo strip
- Brand navigation
- Editorial hero
- Primary conversion action
- Service / package rows
- Feature split
- Gallery rail
- Proof / benefit strip
- Booking / enquiry panel
- Location / contact block
- Sticky mobile action bar
- Detail sheet for service selection
- Footer

## Conversion patterns

Every sector should have one dominant action:

- Grooming / beauty → booking or WhatsApp.
- Clinic → appointment request.
- Auto → quote request.
- Fitness → trial / membership enquiry.
- Home services → service request.
- Local brand → visit / WhatsApp / product enquiry.
- Event studio → consultation.

## Photography

Photography should feel local, tactile, and premium. Avoid generic stock collages. Use a small number of strong images rather than many weak ones. Demo imagery is replaceable and must be licensed or client-owned before production.

## Interaction

- Hover/focus lift: 150–220ms.
- Section reveal: 400–650ms.
- Detail sheet: 220–300ms.
- No continuous decorative animation.
- prefers-reduced-motion must disable non-essential movement.

## Accessibility

- Semantic headings.
- Keyboard-visible focus.
- Minimum comfortable touch targets.
- Sufficient contrast.
- aria-label on icon-only actions.
- Dialogs/sheets close with Escape.
- Images require meaningful alt text.
- Directional language and layout must remain correct in RTL and LTR.
