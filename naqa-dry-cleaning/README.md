# NAQA Garment Care — Project README

## Overview
NAQA Garment Care (نقاء للعناية بالملابس) is a fictional premium dry-cleaning and garment-care website concept for Riyadh, Saudi Arabia. It is a portfolio/demo project, not a real operating business.

The site is being rebuilt through controlled, approval-gated stages. The new interface must not be implemented until Stage 0 documentation has been reviewed and explicitly approved.

## Technology
- HTML5
- CSS3
- Vanilla JavaScript
- Static files compatible with Vercel
- No framework, build system, backend, database, authentication, or unnecessary dependencies

## Target project structure
naqa-dry-cleaning/
- index.html — create only in Stage 1
- css/style.css — authoritative stylesheet, added in an approved stage
- js/main.js — add only when approved behavior needs it
- assets/images/
- assets/icons/
- DESIGN.md
- PROJECT_WORKFLOW.md
- CONTRIBUTING.md
- README.md
- CHANGELOG.md

This is the target structure, not a claim that interface files already exist. Do not create placeholder files just to populate empty directories.

## How to run
During Stage 0, the new interface is not available to run. After Stage 1 is approved and a minimal HTML foundation exists, open it directly in a browser or run:

    python3 -m http.server 4173

When serving from the repository root, use http://localhost:4173/naqa-dry-cleaning/. When serving from inside this project directory, use http://localhost:4173/. No build step is required.

## Paths and deployment
The site may be hosted under /naqa-dry-cleaning/, so all project links and asset references must be relative. Use css/style.css, js/main.js, and assets/images/example.jpg. Do not use root-absolute asset paths.

## Design source of truth
See DESIGN.md for brand direction, tokens, breakpoints, image rules, component vocabulary, and first-viewport acceptance criteria. See PROJECT_WORKFLOW.md for stage gates and testing policy. See CONTRIBUTING.md for coding and change rules.

## External assets
No external images are approved for the new interface during Stage 0. If external imagery is proposed in a later approved stage, document the stable source URL, intended use, relevance to garment care, Arabic alt text, and local/licensed/client-owned replacement plan. Replace demo stock imagery with licensed or client-owned assets before commercial production. Remote fonts must fail gracefully with system fallbacks.

## Testing instructions
Stage 0 checks are limited to documentation consistency, required token/breakpoint definitions, path-policy consistency, and stage scope. Browser tests do not apply to documentation alone.

Later visual QA must test 320, 360, 390, 414, 768, 1024, and 1440px; check overflow, text overlap, clipping, image sizing/cropping, controls, Arabic readability, hero balance, fixed elements, console output, and key interactions. Capture screenshots at 390, 768, and 1440px from the exact evaluated commit/deployment.

Never claim browser verification without real-browser evidence. Never claim a deployment is visually correct because its status is READY. Always identify the tested commit/deployment and list unperformed tests.

## Current project stage
**Stage 0 — Documentation and project contract.** Awaiting review and explicit approval. Stage 1 must not begin until approval.

## Known limitations
- The redesigned interface has not been approved or implemented.
- No browser visual verification has been performed for this new staged project.
- No new external images or business data are approved.
- Deployment READY status alone is not evidence of visual correctness.
