# Demo_Site — Master Project Roadmap & Continuity Manual

Date: 2026-09-18
Repository: Midosd249/Demo_Site
Source of truth: main
Current audited main: c84f7a87eae32df109d48a504deae38f0439ef7f
Current work branch: audit-foundation
Current work head: 43b24a8cdd3540ea4600e9cc4d5eb526be37aaeb
Open foundation PR: #3 (draft)

## Purpose
This is the durable continuation manual for future ChatGPT/Codex/agent sessions. Read it with AGENTS.md, TASK_BOARD.md, docs/AGENT_SYSTEM.md, docs/REPOSITORY_AUDIT_2026-09-18.md, docs/DATA.md, QA_CHECKLIST.md and docs/VERCEL.md before editing.

## Product definition
Demo_Site is an Arabic-first, RTL, mobile-first Website + Digital Growth Platform for Saudi/GCC SMBs.
Primary workflow: Create Website → Edit → Preview → Publish → SEO Audit → Local Visibility → AI Readiness → Competitors → Reports → Clients.
Architecture: static HTML/CSS/vanilla JavaScript; shared shell in src/app.js; services in src/lib; screens in src/screens; growth styling in styles/growth.css; Supabase optional for auth/persistence; growth data additive and tenant-scoped; legacy menu code/data preserved.
Builder rule: section-based editor only. Do not replace it with drag-and-drop without explicit product approval.

## Non-negotiable rules
1. main is the source of truth.
2. Never merge a PR without explicit human approval.
3. Work on a dedicated branch and use a PR.
4. Do not rename the repository or reconnect Vercel to another repository.
5. Do not modify unrelated legacy menu history.
6. Never expose service-role credentials in frontend code or git.
7. Never fabricate SEO, traffic, conversion, competitor, review, ranking, AI-model or analytics data.
8. CORS/network failure is unavailable, never a score.
9. Unknown remains unknown.
10. Demo fixtures are test-only and disabled by default.
11. Preserve local/degraded operation when Supabase is unavailable.
12. New screens need loading, empty, success, error and permission-denied states where applicable.
13. Arabic is the default user-facing language; code/schema names remain English.
14. Prefer small additive changes over rewrites.

## Completed baseline
Main already contains the growth shell, section builder, browser SEO audit, Local/AI foundations, real-data-only reports foundation, tenant-aware Supabase access, additive schema/RLS foundation, agent-readable metadata and basic CI.
Audit-foundation contains the repository audit, agent operating system, stale-doc reconciliation, open-source research, Vercel documentation, verified deployment record and branch-only canonical update. Issue #4 tracks the production x-robots-tag: noindex conflict. The canonical change is not production until merged and deployed.

## Known risks
P0 deployment robots policy: production previously returned x-robots-tag: noindex while page metadata declared index, follow. Verify whether intentional protection/preview behavior or an unintended configuration before any public indexing claim.
P1 validation: currently syntax-first; deterministic fixture/DOM contract validation is being added now.
P1 UX: screens are mostly hand-authored HTML strings; shared states, responsive navigation, dialogs, tables and accessibility need systematic work.
P1 builder: schema is richer than the editor; typed controls are needed for services, FAQ, testimonials, contact, map and CTA.
P1 SEO: expand checks, provenance and versioning without scoring unavailable evidence.
P1 AI: build an evidence map from public metadata/content/structured data; never claim proprietary model rankings.
P1 reporting: add windows, provenance, trends, saved evidence and export/share.
P1 security: explicitly test cross-tenant denial and review public RPC exposure.
P2 dependencies: document and improve CDN/offline/degraded behavior without unnecessary runtime dependencies.

## Ordered phases
### PH-01 Foundation Hardening
Deterministic repository/HTML/source contracts; healthy and unavailable fixtures; explicit UI state contract; deterministic non-scoring unavailable semantics; CI; exact QA commands; audit provenance/version contract. Exit: local+CI pass, deterministic failures, no network required, unavailable never scores, no secret regression.

### PH-02 Shared Internal UX System
Shared loading/empty/error/permission primitives; responsive sidebar/mobile navigation; consistent buttons, inputs, badges, cards, tables, dialogs/sheets; keyboard/focus/accessibility; RTL/LTR; incremental migration of major screens.

### PH-03 Builder 2.0
Typed Hero, Services, About, FAQ, Testimonials, Contact/Map and CTA editors; image/alt guidance; payload validation; preview consistency; safe compatibility with existing saved sites.

### PH-04 SEO Evidence Engine
Stable check IDs; informational vs blocking findings; title/description guidance; canonical/robots consistency; headings; alt quality; internal links; JSON-LD evidence; locale/Open Graph signals; audit version/timestamp/raw signals; manual/unavailable distinction.

### PH-05 AI Evidence Map
Business/entity completeness; Organization/LocalBusiness/Website structured-data inspection; consistent identity signals; crawl/discovery files; content structure; evidence links; manual verification queue. No model ranking claims.

### PH-06 Reports & Client Deliverables
Date/window; executive summary; evidence sections; real trends; evidence-linked recommendations; client/site scope; export/share; report versioning. Every metric must have source/scope/date.

### PH-07 Tenant Security & Public Surface Hardening
RLS inventory; cross-tenant read/write denial tests; public RPC review; auth/session edge cases; frontend secret-pattern enforcement; regression coverage.

### PH-08 Commercial Growth Intelligence
Growth Health Center; evidence-first recommendations; opportunity backlog; minimal first-party event vocabulary; client timeline; global command/search. No KPI without known source/scope/time window.

### PH-09 Release & Deployment Hardening
Vercel SHA verification; production/preview distinction; robots/header verification; browser smoke; Supabase auth/RLS smoke; release checklist; rollback record.

## Current exact task
PH-01 — Foundation Hardening: deterministic fixture/DOM validation contract. Do not begin PH-02 until PH-01 exit criteria are met and documented.

## Standard task protocol
Inspect current main/branch/PR → read operating docs → inspect relevant files → classify facts/assumptions/recommendations → research only for concrete decisions → smallest additive implementation → exact validation → diff review → docs/task state → report exact branch/commit/PR/next task → stop when human approval is required.

## Continuity handoff
Main SHA; work branch; work HEAD; PR; phase; exact task; completed work; changed files; validation commands/results; blockers; must-not-redo; next exact task.

## Must-not-redo
No framework rewrite, no drag-and-drop rewrite, no legacy deletion, no invented deployment URL, no production indexability claim while robots conflict is unresolved, no fabricated analytics/rankings/reviews/AI visibility, no paid analytics prerequisite.
