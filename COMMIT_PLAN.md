# COMMIT_PLAN

## Slice commits
1. `docs: define growth platform operating model` — AGENTS, task board, QA, data, Vercel and PR notes.
2. `feat: modularize growth platform shell` — HTML shell, navigation, screens and design system.
3. `feat: persist website builder sections` — builder model, tenant resolution and website persistence.
4. `feat: persist honest seo audits` — browser audit signals, unavailable state and `seo_audits` writes.
5. `feat: add real-data report skeleton` — reports from saved audits/clients only.
6. `ci: validate modular growth platform` — syntax, required files and no-secret checks.

## Guardrails
- Branch only: `refactor/website-growth-platform`.
- No merge to `main`.
- No destructive SQL.
- No secret values.
- Keep each commit reviewable and reversible.
