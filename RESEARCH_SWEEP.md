# RESEARCH SWEEP PROTOCOL — Demo_Site

> Mandatory operating instruction for every future design/build session.
> The goal is not to collect inspiration. The goal is to continuously raise the portfolio's production quality without cloning other work.

## 1. Before building anything

Read, in this order:

1. `KAKU_CONTEXT.md`
2. `FIELD_SALES_MISSION.md`
3. `PORTFOLIO_STRATEGY.md`
4. `DESIGN.md`
5. this file
6. the target demo and its recent commits

Never rely on conversation history alone.

## 2. Mandatory external sweep

Before a new sector, a major visual redesign, or a portfolio-wide quality pass, perform **two research passes**.

### Pass A — GitHub implementation sweep

Search GitHub for relevant open-source repositories using multiple angles, not one generic query. At minimum cover:

- sector-specific templates
- premium/luxury examples
- responsive HTML/CSS/JS implementations
- modern React/Next/Astro/Nuxt starters
- component/design-system repositories
- accessibility and typography references
- booking/contact/conversion patterns
- galleries, filters, dialogs/sheets, sticky mobile actions
- RTL/i18n implementations when relevant

Target **8–15 high-signal repositories** per meaningful sweep. Do not treat search ranking as proof of quality.

For each candidate inspect:

- README
- license
- live demo/preview when available
- architecture and component boundaries
- responsive behavior
- interaction patterns
- typography and spacing
- image/asset strategy
- accessibility
- performance choices
- tests/CI when present
- obvious security/dependency risks

### Pass B — Exa web + visual sweep

Use Exa to research:

- real category leaders
- Saudi/GCC category examples
- current web-design references
- UX/conversion patterns
- current SEO/structured-data guidance
- accessibility/performance guidance
- licensed/open assets when needed

Use several distinct search workstreams. Fetch the strongest source pages instead of trusting snippets.

For visual research, inspect actual screenshots/live pages when available. Record **design patterns**, not copies:
- composition
- grid logic
- typography hierarchy
- art direction
- image treatment
- motion language
- CTA hierarchy
- mobile behavior
- content density
- trust signals

## 3. Asset rules

External assets are inputs, never automatic code donors.

Before reusing an asset, verify:

1. license/usage rights
2. source
3. whether attribution is required
4. whether the asset is suitable for commercial client work
5. whether the asset is actually replaceable in the demo

Preferred order:

1. client-owned
2. properly licensed stock
3. permissive/open-license
4. generated assets when rights and consistency are appropriate

Never copy:

- competitor logos
- proprietary brand identity
- reviews/testimonials
- distinctive illustrations
- proprietary photography
- private business information
- substantial page designs

If a GitHub repository is **not permissively licensed**, treat it as visual/architectural reference only. Do not transplant its code, copy, illustrations, or distinctive design.

## 4. Quality synthesis

After the sweep, write a short decision record before implementation:

### Keep
Patterns worth adopting because they improve usability, conversion, accessibility, maintainability, or perceived quality.

### Adapt
Patterns that are useful but must be redesigned for Arabic/RTL, Saudi business behavior, mobile field-sales use, or the sector's own identity.

### Reject
Patterns that are generic, derivative, inaccessible, slow, deceptive, legally unclear, or visually overused.

### New capability
Only add a reusable primitive when it solves a recurring commercial or UX problem.

The result must be a **new composition**, not a collage of references.

## 5. Completed-site review

A completed demo is not frozen.

Whenever a later sweep reveals a clearly superior pattern, review previously completed demos against the new quality bar.

At minimum check:

- first viewport
- typography
- spacing rhythm
- visual hierarchy
- CTA clarity
- mobile layout
- desktop layout
- RTL/LTR behavior
- touch targets
- dialog/sheet behavior
- reduced motion
- accessibility
- asset quality
- factual/demo safety
- dead or fake conversion paths

Improve the completed site when the evidence is strong enough. Do not redesign for novelty alone.

## 6. Field-sales visual bar

A prospect should be able to see the demo for 5–10 seconds and understand:

**What is this business? → Why does it feel credible? → What can I do now?**

Each sector must have:

- a distinct art direction
- one dominant conversion
- a memorable visual idea
- strong Arabic typography
- credible mobile presentation
- a clear path to real client substitution

The portfolio must never become “one template wearing ten logos.”

## 7. Engineering bar

For behavioral changes:

1. discover the repository's test/build setup
2. write a failing regression test first
3. implement the smallest useful change
4. refactor only after green
5. run the full available suite
6. run runtime/browser verification for browser changes
7. check console/network/layout/accessibility
8. never declare complete from source inspection alone when runtime verification is possible

Pure documentation/configuration changes do not need behavioral tests.

## 8. Research ledger

Maintain a lightweight source ledger for meaningful sweeps.

For each source record:

| Field | Required |
|---|---|
| Source | yes |
| Type | GitHub / live site / article / official guidance / asset |
| URL | yes |
| License | when applicable |
| What was learned | yes |
| Reused directly? | yes/no |
| Why | yes |

Do not store a giant dump of search results. Store decisions and high-signal references.

## 9. Anti-copy rule

The question is never:

> “Which template should we copy?”

The question is:

> “What does the best work in this category teach us, and how do we turn that lesson into a better, original Saudi-ready website?”

Similarity to a reference is a warning sign. A stronger result should be recognizable as its own brand.

## 10. Default sweep command

For a new sector, execute:

**Context → GitHub sweep → Exa sector research → visual scan → asset/license check → synthesis → TDD → build → browser QA → completed-site regression review → ledger update → continuity update → deploy verification.**

If a source cannot be validated, downgrade it to inspiration only.

If research conflicts with the current design system, resolve the conflict explicitly in the decision record rather than silently changing direction.

## 11. Definition of research done

A sweep is complete only when:

- multiple independent source types were checked
- relevant GitHub repositories were inspected
- licenses were considered
- visual references were actually reviewed
- Saudi/local context was considered where relevant
- useful patterns were separated from copyable assets
- at least one improvement decision is concrete
- the source ledger is updated
- the continuity file records the resulting milestone

**Research is part of the build system, not a one-time phase.**
