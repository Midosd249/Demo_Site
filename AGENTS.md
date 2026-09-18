# AGENTS.md

## Mission
Demo_Site is an Arabic-first, RTL, mobile-first Website + Digital Growth Platform for Saudi/GCC SMBs. The primary product is not a digital menu.

## Repository lock
- Repository: `Midosd249/Demo_Site`
- Source of truth: `main`
- Current audited main: `c84f7a87eae32df109d48a504deae38f0439ef7f`
- Work must happen on a dedicated branch and be proposed through a PR.
- Do not merge to `main` without explicit user instruction.
- Do not rename the repository or connect a different repository to Vercel.
- Do not modify unrelated legacy menu history unless a direct dependency requires it.

## Product rules
- Arabic-first, RTL, mobile-first, English-ready.
- No fabricated SEO, local, AI, competitor, ranking, review, traffic, conversion or analytics data.
- CORS/network failures are unavailable, never converted into scores.
- Demo fixtures must be explicitly labelled and disabled by default.
- No service-role secrets in frontend or git.
- Supabase growth data is additive and tenant-scoped; never DROP legacy menu tables.
- The current builder is section-based. Do not replace it with drag-and-drop without explicit product approval.

## Architecture
Static/vanilla JS + HTML. Shared shell lives in `src/app.js`; reusable services live in `src/lib`; screens live in `src/screens`; growth styles live in `styles/growth.css`. Legacy menu UI remains historical and isolated from the primary growth shell.

## Quality bar
Every screen should have loading, empty, success, error and permission-denied states where applicable. Touch targets must be phone-friendly. Code/schema names stay English; user-facing copy stays Arabic unless English is intentionally required.

## Safe change order
Inspect current main -> inspect relevant history/docs -> research only when useful -> implement the smallest additive change -> validate syntax/behavior/security assumptions -> update docs -> report branch and commit.

## Agent operating system
Use `docs/AGENT_SYSTEM.md` for role boundaries and the standard inspect → classify → research → implement → validate → document loop.

## Current continuity note
PR #2 is already merged. Older instructions describing it as draft/pending are obsolete and must not be used as current state.
