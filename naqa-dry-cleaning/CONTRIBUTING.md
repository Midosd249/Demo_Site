# Contributing to NAQA Garment Care

## Scope and source of truth
This is a fictional portfolio/demo site for NAQA Garment Care in Riyadh. Work only on the approved stage and files in its plan. Do not modify unrelated repository areas.

- DESIGN.md: brand, tokens, responsive rules, images, components, first viewport.
- PROJECT_WORKFLOW.md: stages, approval gates, tests, and definition of done.
- CONTRIBUTING.md: implementation and change rules.
- README.md: usage, structure, assets, current stage, and limitations.
- CHANGELOG.md: stage history and tests.

If code and documentation disagree, stop and resolve the discrepancy in the appropriate approved stage.

## Coding rules

### HTML
- Use doctype, lang="ar", dir="rtl", and a correct viewport meta tag.
- Use semantic landmarks and exactly one main element per page.
- Avoid duplicate IDs; keep source formatted and readable.
- Use meaningful Arabic alt text for informative images.
- Use buttons for actions and anchors for navigation.
- Use relative paths only and verify under /naqa-dry-cleaning/.
- Never put a complete page on one line.

### CSS
- Maintain one authoritative stylesheet: css/style.css.
- Keep section order: reset, tokens, base typography, layout, components, responsive, accessibility/motion.
- Do not add responsive.css, duplicate stylesheets, random appended overrides, or blanket !important.
- Avoid repeated full component definitions; remove obsolete rules when changing a component.
- Do not apply global aspect ratios to all images; use component-specific wrappers and controlled dimensions.
- Prefer logical properties for RTL-aware layout.
- Use understandable selectors and tokenized values.
- Each CSS change must report selector, reason, affected component, and responsive impact.

### JavaScript
- Use vanilla JavaScript only.
- Use defensive null checks for optional elements.
- Keep one consistent state class and synchronize aria-expanded with actual state.
- Support keyboard interaction and Escape where applicable.
- Avoid unnecessary global variables.
- Report meaningful development errors instead of silently swallowing failures.
- Never imply a frontend-only form was received by a real business.

### Content and assets
- Business information is fictional unless supplied explicitly by the user.
- Do not invent licenses, certifications, customer names/counts, verified reviews, real addresses, guarantees, or delivery promises.
- Mark demo prices, service areas, sample reviews, and contact details as demo content where needed.
- Use relevant garment-care photography only.
- External assets require a stable URL, meaningful Arabic alt text, a README source entry, and a replacement plan.
- Do not introduce unapproved dependencies or frameworks.

## Change management
1. Read the source-of-truth documents.
2. State the stage plan and acceptance criteria before editing.
3. Limit changes to approved files and scope.
4. Test changed behavior, not only syntax.
5. Report performed and unperformed tests.
6. Update CHANGELOG.md with stage, date, files, tests, and remaining issues.
7. Make one focused stage commit using the required format, e.g. stage-00: establish project documentation.
8. Stop and wait for explicit approval.

Do not bundle unrelated refactors, formatting sweeps, dependency changes, or speculative features into a stage commit.

## Prohibited shortcuts
- Building the entire site in one step or skipping an approval gate.
- Changing visual direction without approval.
- Treating deployment success as visual correctness.
- Claiming browser tests, screenshots, or console checks that were not performed.
- Using screenshots from another commit/deployment as evidence.
- Using root-absolute project asset paths.
- Creating temporary patches or unused files.
- Appending CSS overrides instead of fixing the authoritative rule.
- Adding fake proof, unsupported promises, or unrelated stock images.
