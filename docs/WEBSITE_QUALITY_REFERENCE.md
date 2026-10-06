# Website Quality Reference

## Purpose

This repository now has a concrete implementation reference for future websites: the Riyadh Clinic static site on this branch.

Reference pages:
- `index.html`
- `doctors.html`
- `services.html`
- `appointment.html`
- `contact.html`
- `css/style.css`
- `js/main.js`

The reference is not a copy template. It is a **quality and implementation standard**. Future sites may change the visual identity, content model, sector, and interaction pattern, but they must preserve the engineering discipline and conversion quality described here.

## Quality bar

A finished website must feel deliberate in the first viewport, work on a narrow phone, and make the primary action obvious.

### 1. Page architecture

Use semantic HTML:
- `header`, `nav`, `main`, `section`, `footer`
- One clear `h1`; sections use a predictable heading hierarchy.
- Real navigation uses `a href`; actions use native `button`.
- Never use `href="#"` for an action that should be a button.
- Keep user-facing copy in Arabic for Arabic-first projects and keep code identifiers in English.

### 2. Visual system

Every site needs:
- A restrained token system in `:root`.
- One primary brand color, one accent, and a controlled neutral palette.
- A max content width and consistent horizontal gutters.
- Clear section rhythm and intentional negative space.
- One dominant visual idea in the hero.
- One dominant conversion action.
- Card grids only where cards are actually useful.
- Motion that explains hierarchy or interaction rather than decorating the page.

The reference clinic uses a simple blue healthcare system, generous spacing, strong contrast, rounded surfaces, and a direct appointment path. A different sector should use a different visual language rather than copying blue/medical styling.

### 3. Conversion

The visitor should understand within seconds:
1. What the business does.
2. Why it is credible.
3. What to do next.

Primary CTA rules:
- Repeat the same primary action in the header/hero and at the natural decision point.
- Keep forms short.
- Make WhatsApp, call, booking, quote, directions, or enquiry actions obvious when relevant.
- Do not invent reviews, awards, licenses, metrics, locations, prices, or client logos.

### 4. Responsive behavior

Mobile is a first-class composition, not a shrunken desktop.

Required:
- Layouts must remain usable around 320–430px wide.
- Touch targets should be comfortably tappable.
- Navigation must have a usable mobile state.
- Sticky mobile actions are allowed when they materially improve conversion.
- Avoid horizontal overflow.
- Test long Arabic labels and mixed Arabic/Latin content.
- Respect `prefers-reduced-motion`.

### 5. Accessibility

Required baseline:
- Meaningful `alt` text for informative images.
- Empty `alt=""` for purely decorative imagery.
- Visible `:focus-visible` states.
- Native buttons for interactions.
- Dialogs/sheets have accessible names and can close with Escape.
- Form controls have labels.
- Icon-only buttons have `aria-label`.
- Contrast must remain readable in every state.
- Motion must be reduced when the user requests reduced motion.

### 6. Performance

The browser should discover the hero/LCP image directly from HTML.

For above-the-fold hero imagery:
- Use a normal `src`.
- Use `fetchpriority="high"` on the primary LCP image.
- Do not combine `loading="lazy"` with the LCP image.

For below-the-fold imagery:
- Use native `loading="lazy"`.
- Use explicit dimensions or stable aspect-ratio containers.
- Use `decoding="async"` where appropriate.
- Prefer responsive `srcset`/AVIF/WebP when production assets are available.

Avoid unnecessary third-party JavaScript. Native browser capabilities are the default.

### 7. JavaScript

Use vanilla JavaScript unless the project genuinely needs a framework.

Rules:
- Query DOM nodes once where practical.
- Guard optional elements before binding listeners.
- Keep state local to the component/interaction.
- Use `async/await` for clipboard/network operations.
- Provide visible status feedback for user actions.
- Never make demo data look like live data.
- Respect reduced-motion preferences.
- Avoid scroll listeners when IntersectionObserver or CSS can solve the problem.
- Do not hide essential content behind JavaScript.

### 8. CSS

Use:
- CSS custom properties for tokens.
- `clamp()` for fluid type where useful.
- Grid/Flex for layout.
- `min()`, `max()`, and `calc()` for controlled gutters.
- `prefers-reduced-motion`.
- Focus states.
- A small, intentional motion vocabulary.

Avoid:
- Random one-off colors.
- Deeply duplicated declarations.
- Excessive absolute positioning.
- Decorative animation running forever without purpose.
- Giant text that breaks on narrow screens.

### 9. Content integrity

Demo sites must visibly identify themselves as demos/concepts where required.

Never fabricate:
- Customer reviews.
- Medical credentials.
- Regulatory licenses.
- Awards.
- Business addresses.
- Phone numbers.
- Opening hours.
- Pricing.
- Performance results.
- Competitor rankings.
- Analytics.

If a value is not approved, label it as demo/sample or leave it as an explicit placeholder.

### 10. Required states

Interactive components should account for:
- Initial state.
- Active/selected state.
- Success feedback.
- Failure/unavailable feedback.
- Empty state when applicable.
- Keyboard/focus state.
- Reduced-motion state.

## Reference implementation patterns

### Hero

The reference implementation keeps the first screen focused:
- One headline.
- One supporting paragraph.
- One primary CTA.
- One secondary CTA.
- No unnecessary carousel.

### Cards

Cards are used to scan choices quickly. They have:
- Clear title.
- Short supporting copy.
- Consistent spacing.
- Hover/focus feedback.
- A single purpose.

### Forms

The reference booking flow uses explicit labels, required markers, sensible input types, and a short path to submission.

For demos without a backend, the UI may build a prepared request message, but it must say that the data is demo-only and must never pretend to submit to a real service.

### Mobile navigation

The mobile state must:
- Have a real button.
- Expose `aria-expanded`.
- Keep the primary action available.
- Close cleanly when the interaction ends.

## Quality checklist

Before calling a site finished:

- [ ] First viewport is visually complete.
- [ ] Primary CTA is obvious.
- [ ] Arabic RTL is correct.
- [ ] Mobile layout works without horizontal overflow.
- [ ] Focus states are visible.
- [ ] Icon-only controls have accessible names.
- [ ] Hero image is not lazy-loaded.
- [ ] Below-fold images are lazy-loaded.
- [ ] Images reserve layout space.
- [ ] Reduced motion is supported.
- [ ] No fake business facts.
- [ ] Demo data is visibly marked.
- [ ] Forms have labels and useful feedback.
- [ ] Interactive controls are keyboard usable.
- [ ] Navigation links point to real destinations.
- [ ] No unnecessary third-party dependency was added.
- [ ] The design has a memorable visual/interaction device.
- [ ] The page has one dominant conversion path.

## Source-backed engineering notes

The implementation standard follows current browser guidance: semantic HTML gives browsers built-in accessibility behavior; interactive targets should be comfortably tappable; visible focus should be preserved; and `prefers-reduced-motion` should be honored. Google Chrome guidance also recommends making the LCP image discoverable in HTML, prioritizing it, and lazy-loading offscreen images instead.

This reference is therefore a **repository rule**, not a one-off styling preference.
