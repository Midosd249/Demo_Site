# Vercel deployment policy

The Vercel project **demo-site** is linked to exactly `Midosd249/Demo_Site`.

## Verified current state — 2026-09-18

- Vercel project: `demo-site`
- Project ID: `prj_rL5NKcNKJ7pZtCNPwvyPckYTetMT`
- Team: `midosd2s-projects`
- Node.js: 24.x
- Latest production deployment: READY
- Production commit: `c84f7a87eae32df109d48a504deae38f0439ef7f`
- Production deployment URL: https://demo-site-b19gugabn-midosd2s-projects.vercel.app
- Git-linked main alias: https://demo-site-git-main-midosd2s-projects.vercel.app
- Preview branch deployments are being created for `audit-foundation`.

## Release rules

1. Keep the Vercel project linked only to `Midosd249/Demo_Site`.
2. Use branch previews for validation; do not treat a branch preview as production.
3. Never add a service-role key to frontend environment variables.
4. Before production promotion, verify commit SHA, READY state, browser smoke checks and Supabase auth/RLS behavior.
5. Do not invent a production URL; record only a URL returned by Vercel.
6. Keep the current production deployment untouched until the replacement has passed validation.
