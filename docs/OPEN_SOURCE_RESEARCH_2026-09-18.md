# Open-source opportunity research — 2026-09-18

## Selection rule
Only patterns that fit the existing vanilla/static + Supabase architecture are candidates. Repositories are inspiration and reference points; no code is copied automatically.

## 1. RTL dashboard interaction patterns

**satnaing/shadcn-admin** — MIT. The project documents responsive/accessibility-focused dashboard patterns and explicit RTL support, including sidebar, command, table, dialog and sheet adjustments.

Fit: high for interaction ideas and component behavior; low for direct adoption because Demo_Site intentionally remains vanilla JS.

Reference: https://github.com/satnaing/shadcn-admin

Recommended adaptation: reproduce the principles—keyboard-safe navigation, consistent sidebar/mobile navigation, command/search, accessible dialogs, table states—using small vanilla primitives.

## 2. Privacy-first analytics

**umami-software/umami** — MIT. Umami is an open-source privacy-first analytics platform with self-hosting support and a PostgreSQL-backed deployment model.

Fit: medium. It is too large to embed, but its product model is useful for defining a minimal first-party event vocabulary and privacy boundaries.

Reference: https://github.com/umami-software/umami

Recommended adaptation: keep Demo_Site analytics first-party and minimal. Start with page/audit/report workflow events and aggregate counts; do not introduce third-party tracking just to make the dashboard look richer.

## 3. Lightweight privacy analytics

**plausible/analytics** — open-source, lightweight, privacy-focused analytics. The project emphasizes simple dashboards and privacy-friendly measurement.

Fit: medium for product principles, not a direct dependency.

Reference: https://github.com/plausible/analytics

Recommended adaptation: use the same discipline—small metric vocabulary, no invented dimensions, and reports that emphasize actionable summaries over noisy charts.

## 4. Structured-data validation

**adobe/structured-data-validator** — open-source repository for validating structured data.

Fit: high as a research/reference pattern for a future evidence-based JSON-LD inspection layer. It should not be treated as a production dependency until its current maintenance/license/dependency posture is reviewed.

Reference: https://github.com/adobe/structured-data-validator

## 5. What should NOT be adopted now

- Full React/TanStack dashboard starters: useful references, but a framework rewrite is not justified by the current repository evidence.
- Full analytics platforms: too heavy for the current product stage.
- AI-agent frameworks: not needed for the core user-facing product; agent roles should remain a development workflow concern until there is a concrete product use case.

## Immediate research-derived features

1. Accessible global command/search pattern.
2. Typed dashboard data-table pattern with empty/loading/error/permission states.
3. Audit provenance and versioning.
4. Privacy-first first-party event vocabulary.
5. Structured-data inspection with evidence, not an invented score.
