# NAQA Garment Care — Project Workflow

## Purpose and non-negotiable rules
This is a fictional static portfolio/demo website. Use HTML5, CSS3, vanilla JavaScript, and Vercel-compatible static files only.

- Never build all pages or sections at once.
- Never begin interface implementation before Stage 0 documentation is approved.
- Never skip a stage or silently continue to the next stage.
- Never add unapproved features.
- Never append random CSS overrides; fix the authoritative rule and clean up conflicts.
- Never claim browser verification without actual browser testing.
- Never claim a deployment is visually correct because its status is READY.
- Never use a screenshot from a different deployment as proof.
- Always identify the current commit/deployment when reporting deployed behavior.
- Always test the mobile first viewport.
- Always report what was not tested.
- Static inspection is not browser verification.
- Do not modify unrelated files or add temporary patch files.
- Do not invent real business details, verified reviews, certifications, customer counts, guarantees, or delivery promises.
- Do not write index.html until Stage 1 is explicitly approved.

## Required beginning-of-stage report
1. Stage name and objective.
2. Files planned for creation/change.
3. Features included.
4. Features explicitly postponed.
5. Acceptance criteria.
6. Testing plan.

## Required end-of-stage report
1. Files actually changed.
2. Implementation summary.
3. Tests performed and results.
4. Tests not performed.
5. Known limitations.
6. Pass/fail decision.
7. Exact approval needed before continuing.
8. Focused commit message and commit identifier when a commit exists.

If a stage fails, stop. Fix only that stage and re-test it. Do not proceed until it passes and receives explicit user approval.

## Mandatory stages
### Stage 0 — Documentation and project contract
Create/update DESIGN.md, PROJECT_WORKFLOW.md, CONTRIBUTING.md, README.md, and CHANGELOG.md. Confirm project structure, tokens, breakpoints, and first-viewport acceptance criteria. Do not create or modify interface files. Stop for approval.

### Stage 1 — Minimal foundation and first viewport
After approval, create only the minimal HTML foundation and first viewport for review. No complete site, later sections, or nonessential interactions. Stop for approval.

### Stage 2 — Header and mobile navigation
Implement and test the header and responsive navigation only, including keyboard and accessible state behavior. Stop for approval.

### Stage 3 — Hero section approval
Refine hero composition, copy, image treatment, and CTA. Validate mobile and desktop widths; stop for explicit visual approval.

### Stage 4 — Services section
Add only the approved service presentation. Avoid invented claims. Stop for approval.

### Stage 5 — Process and quality sections
Add approved care-process and quality explanation with truthful demo-safe language. Stop for approval.

### Stage 6 — Pricing and conversion sections
Add only approved demo pricing/enquiry patterns. Label sample prices; never imply a frontend-only form reached a real business. Stop for approval.

### Stage 7 — Secondary pages
Create secondary pages only after scope and navigation are approved. Validate relative paths for every HTML file. Stop for approval.

### Stage 8 — Interactions and accessibility
Implement approved interactions and test keyboard behavior, ARIA state, Escape behavior where applicable, validation, reduced motion, and error handling. Stop for approval.

### Stage 9 — Responsive and visual QA
Test 320, 360, 390, 414, 768, 1024, and 1440px. Check overflow, overlap, clipping, image crops, controls, Arabic readability, hero balance, and fixed elements. Inspect console, test interactions, and capture screenshots at 390, 768, and 1440px from the exact commit/deployment being evaluated. Stop for approval if changes are required.

### Stage 10 — Deployment and final handoff
Deploy only after previous stages are approved. Confirm the deployed URL maps to the tested commit. Document state, tests, screenshots, and limitations. Do not call the project production-ready without evidence for the completion criteria.

## Target project structure
naqa-dry-cleaning/
- index.html — create only in Stage 1
- css/style.css — authoritative stylesheet, added in an approved stage
- js/main.js — add only when approved behavior requires it
- assets/images/
- assets/icons/
- DESIGN.md
- PROJECT_WORKFLOW.md
- CONTRIBUTING.md
- README.md
- CHANGELOG.md

Use relative paths only for deployment under /naqa-dry-cleaning/. Use css/style.css, js/main.js, and assets/images/example.jpg. Never use root-absolute asset paths. Use lowercase filenames, hyphens, and no spaces. Do not create responsive.css, duplicate CSS files, or temporary patches. No frameworks, build system, backend, database, authentication, or unnecessary dependencies.

## Evidence policy
Distinguish static inspection, automated checks, and real-browser verification. Parsed CSS, valid JavaScript, HTTP success, and Vercel READY do not prove correct rendering. Browser verification requires opening the exact local/deployed version in a real browser or browser automation, testing required widths, checking console output, exercising key interactions, and capturing evidence. If browser access is unavailable, include this exact sentence in the report: "Browser visual verification was not available in this environment." Never claim fully tested, visually verified, pixel perfect, or production ready without the required evidence. Always list unperformed tests.

## Approval policy
Only clear, explicit approval of the completed current stage permits work on the next stage. Silence, general feedback, or approval of a different detail is not approval for the next stage.
