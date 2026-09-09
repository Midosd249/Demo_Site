# AGENTS.md

## Mission
Demo_Site is a Website + Digital Growth Platform for Saudi/GCC SMBs. The primary product is not a digital menu.

## Repository lock
- Repository: `Midosd249/Demo_Site`
- Branch: `refactor/website-growth-platform`
- Do not rename the repository.
- Do not merge PR #2 into `main` without explicit user instruction.
- Do not connect or invent a Vercel deployment.
- Do not modify unrelated menu projects.

## Product rules
- Arabic-first, RTL, mobile-first, English-ready.
- No fabricated SEO, local, AI, competitor, ranking, review, or analytics data.
- Demo fixtures must be explicitly labelled `DEMO` and disabled by default.
- CORS/network failures are shown as unavailable, never converted into scores.
- No service-role secrets in frontend or git.
- Supabase is additive and tenant-scoped; never DROP legacy tables.

## Architecture
Static/vanilla JS + HTML. Shared shell lives in `src/app.js`; reusable services live in `src/lib`; screens live in `src/screens`; styles live in `styles/`. Legacy menu UI remains historical and is isolated from the primary shell.

## Quality bar
Every screen needs loading, empty, success, error and permission-denied states. Touch targets must be phone-friendly. Code and schema names stay English; user-facing copy stays Arabic.

## Safe change order
Inspect dependencies -> implement additive change -> validate syntax -> verify persistence/RLS assumptions -> update docs -> update PR notes. Never delete legacy history merely to simplify the migration.
