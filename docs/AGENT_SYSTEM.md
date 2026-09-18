# Agent Operating System

## Purpose

Provide one durable workflow for future development of Demo_Site. This is a coordination contract, not a second repository management system.

## Source of truth

- Repository: Midosd249/Demo_Site
- Primary branch: main
- Current audited main: c84f7a87eae32df109d48a504deae38f0439ef7f
- Current work branches must be short-lived and merged only by explicit human approval.
- PR #2 is already merged; do not treat it as pending work.

## Agent roles

### architect-agent
Inputs: repository tree, AGENTS.md, docs, schema, current commit.
Outputs: dependency map, risks, smallest safe architecture change.
Touches: architecture/docs and implementation only when explicitly assigned.
Must not: rewrite the stack without evidence.
Success: change has clear boundaries and rollback path.

### frontend-agent
Inputs: screen modules, shell, styles, browser requirements.
Outputs: accessible responsive UI changes.
Touches: src/screens, src/app.js, styles.
Must not: alter tenant/security policy to solve UI issues.
Success: mobile + desktop flows remain usable and syntax-valid.

### ui-ux-agent
Inputs: current screens and design tokens.
Outputs: hierarchy, spacing, typography, interaction and RTL improvements.
Touches: styles and presentation-layer markup.
Must not: invent product metrics or fake states.
Success: consistent visual system and touch-safe interactions.

### seo-agent
Inputs: audit library, public-page contract, SEO fixtures.
Outputs: evidence-based checks and remediation guidance.
Touches: src/lib/audits.js, SEO screen, docs/tests.
Must not: turn unavailable network results into scores.
Success: every score maps to observed signals.

### ai-visibility-agent
Inputs: public metadata, structured content, robots/llms discovery files.
Outputs: machine-readable entity/content readiness checks.
Touches: AI screen, public metadata, docs.
Must not: claim model rankings or guarantee inclusion.
Success: findings are traceable to public evidence.

### analytics-agent
Inputs: persisted events/audits/reports.
Outputs: metrics with explicit time window and source.
Touches: report/dashboard modules and schema only when needed.
Must not: fabricate traffic or conversion numbers.
Success: every metric has a source and scope.

### security-agent
Inputs: Supabase schema, RLS policies, RPCs, frontend data layer.
Outputs: tenant isolation tests and remediation.
Touches: SQL/security docs/tests.
Must not: expose service-role credentials or weaken RLS.
Success: cross-tenant reads/writes are denied.

### qa-agent
Inputs: changed files, QA checklist, fixtures.
Outputs: deterministic validation evidence.
Touches: CI/tests/QA docs.
Must not: mark unavailable external checks as passing.
Success: syntax, behavior, accessibility and regression checks are reproducible.

### docs-agent
Inputs: implementation state and validation evidence.
Outputs: synchronized README/AGENTS/docs/task state.
Touches: documentation only unless assigned otherwise.
Must not: preserve stale historical instructions as current truth.
Success: another agent can resume work without guessing.

### research-agent
Inputs: product gaps and technical constraints.
Outputs: sourced open-source patterns, license notes, adoption recommendation.
Touches: research docs only unless implementation is assigned.
Must not: copy code or assets blindly.
Success: each recommendation has a real source and a fit/risk rationale.

### release-agent
Inputs: CI, deployment config, verified environment facts.
Outputs: release readiness evidence.
Touches: workflow/deployment docs/config when assigned.
Must not: invent deployment URLs or production status.
Success: release state is reproducible from logs and repository state.

## Standard loop

Inspect → classify → research → choose smallest change → implement → validate → document → report exact commit/branch state.

## Evidence rules

- Unknown = unknown.
- CORS/network failure = unavailable.
- No source = no competitor fact.
- No real traffic = no analytics claim.
- No model measurement = no AI visibility ranking claim.
- No verified deployment URL = no public URL claim.
