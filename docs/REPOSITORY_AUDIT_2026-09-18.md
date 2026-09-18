# Demo_Site — Repository Audit

Date: 2026-09-18
Baseline: main @ c84f7a87eae32df109d48a504deae38f0439ef7f
Scope: architecture, UX/UI, SEO, AI visibility, analytics, security, QA, deployment, documentation, open-source opportunities.

## 1. Architecture summary

Demo_Site is currently a static/vanilla JavaScript application with HTML/CSS, a small service layer under src/lib, screen modules under src/screens, and Supabase as an optional persistence/auth backend. The primary workflow is Website → Builder → Preview → SEO → Local → AI → Competitors → Reports → Clients.

The builder is correctly section-based rather than drag-and-drop. Website state is stored in growth_websites.payload. Supabase access is tenant-aware in the frontend and backed by additive SQL/RLS work.

The repository also contains legacy menu assets and SQL. They are historical compatibility material and should not be removed during this product transition.

## 2. Current strengths

- Arabic-first RTL and mobile-first shell.
- Clear product boundaries and unusually strong anti-fabrication rules.
- Browser SEO audit correctly treats CORS/network failures as unavailable.
- Tenant-scoped CRUD helpers exist for the growth tables.
- Additive schema approach preserves legacy menu history.
- Builder supports creation, section insertion, reordering, saving and preview.
- Agent-readable files exist: llms.txt, robots.txt and sitemap.xml.
- CI performs JavaScript syntax checks and basic secret-pattern checks.

## 3. Top gaps found

### P0 — operating truth drift
AGENTS.md and TASK_BOARD.md still describe PR #2 as draft / pending even though PR #2 is merged and main contains the growth-platform launch commit. This creates a dangerous continuity problem for future agents.

### P0 — deployment truth is intentionally incomplete
There is no verified production URL in repository metadata. Canonical URLs and AI-discovery links must therefore not claim a public deployment that has not been verified.

### P1 — UI architecture is functional but still prototype-level
The shell has a strong foundation, but screens are mostly hand-authored HTML strings. Shared interaction primitives, consistent data tables, command/search, accessible dialogs, and richer empty/loading/error states are missing.

### P1 — builder depth is incomplete
The data model supports section-specific content, but the current editor primarily exposes title/text fields. Services, FAQ, testimonials, contact, map and CTA need typed editing controls before the builder can be considered a serious production authoring surface.

### P1 — SEO audit is useful but narrow
The audit checks a small set of document signals. It does not yet distinguish informational findings from blocking findings, does not inspect several important page-level signals, and has no durable audit schema/version contract for future checks.

### P1 — AI visibility is readiness guidance, not an evidence system
The current screen correctly avoids claiming model-specific visibility, but it mostly maps generic SEO signals to Implemented/Manual. A stronger version should inspect public machine-readable entity information and content structure without pretending to measure model rankings.

### P1 — analytics/reporting is still a skeleton
Reports display saved counts and the latest SEO score but do not yet provide a coherent time window, source provenance, trend history, or exportable report artifact.

### P1 — validation is syntax-first
CI does not currently run browser-level tests, HTML validation, accessibility smoke checks, or a deterministic local integration test against a fixture site.

### P2 — external runtime dependencies
The active page loads Supabase JS and Google Fonts from CDNs. The application should have a documented offline/degraded path and an explicit dependency policy so a third-party CDN failure cannot make the shell appear broken.

### P2 — documentation hierarchy
The repository has useful documents, but there is no single architecture/agent operating contract that states the current branch truth, change boundaries, validation contract and roadmap in one place.

## 4. Security observations

No service-role key is used by the active frontend according to the inspected source. Tenant membership is resolved before growth-table reads/writes, and the SQL contains tenant-scoped RLS policies.

The next security work should be verification, not redesign: prove each growth table has the expected RLS state, test cross-tenant denial, review public RPC exposure, and ensure no new public endpoint bypasses membership boundaries.

## 5. Product opportunities

- Website health center: one page showing SEO, content, local, AI-readiness and technical checks with provenance.
- Evidence-first recommendations: every recommendation links to the observed signal that triggered it.
- Client-ready report generation from saved evidence, with clear date/window/source labels.
- Builder content blocks with structured fields instead of generic text inputs.
- Public website manifest/entity model so local and AI visibility checks can reason from the same canonical business data.
- Lightweight privacy-first event model for product usage; avoid adding surveillance analytics by default.
- Global command/search for agencies managing multiple clients and sites.
- Audit history with check-versioning so score changes remain explainable after new checks are added.

## 6. Priority implementation order

1. Repair repository operating truth and agent continuity.
2. Establish deterministic validation and fixture-based browser checks.
3. Upgrade the shared UI state model and mobile navigation/accessibility.
4. Deepen the section builder with typed content controls.
5. Expand SEO and AI evidence checks without inventing scores.
6. Build real report generation from persisted evidence.
7. Harden RLS/public RPCs with explicit cross-tenant tests.
8. Verify deployment only after a real Preview/production URL exists.

## 7. Explicit non-goals

- No rewrite to React/Next/Vite merely for fashion.
- No drag-and-drop builder rewrite.
- No fabricated competitor rankings or AI visibility percentages.
- No destructive legacy menu cleanup.
- No paid analytics dependency as a prerequisite.

## 8. Validation note

This audit is repository evidence plus current public open-source research. It does not claim a production deployment, production traffic, real customer metrics, or model-specific AI visibility.
