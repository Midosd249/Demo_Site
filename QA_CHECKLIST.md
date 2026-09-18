# QA_CHECKLIST

## PH-01 Foundation Hardening

### Exact local commands
From repository root:

    find src -type f -name '*.js' -print0 | xargs -0 -n1 node --check
    node --check platform.js
    node scripts/validate-foundation.mjs

Expected validator result: Foundation validation passed: 18 checks.

### Deterministic fixtures
- tests/fixtures/seo-healthy.html: readable successful SEO fixture with title, description, one H1, canonical, robots, viewport and JSON-LD.
- tests/fixtures/seo-blocked.html: unavailable-condition fixture. Its missing fields are not treated as proof of a live network failure.
- tests/fixtures/growth-shell-contract.html: vocabulary contract for loading, empty, success, error and permission states.
Fixtures are test-only and must never become customer or production evidence.

### CI contract
CI runs JavaScript syntax, required-file checks, secret-pattern checks and the deterministic foundation validator. The foundation validator requires no external network.

### Browser/device smoke still required
Verify desktop and narrow mobile widths, RTL, navigation, loading/empty/error/permission states, SEO blocked path, builder create/edit/reorder/save/preview and absence of active-app console errors.

### SEO honesty
Successful fetch is required before a score exists. HTTP failure and CORS/network failure are blocked/unavailable. Missing fields are failed observed checks only after a successful page read. Fixtures never represent production evidence.

### Release evidence
Before any production claim record exact deployed SHA, Vercel READY state, verified deployment URL, browser smoke result, robots meta plus HTTP x-robots-tag result, and Supabase auth/RLS smoke result.

### Existing baseline checks
    find src -type f -name '*.js' -print0 | xargs -0 -n1 node --check
    node --check platform.js

Required files: index.html, README.md, AGENTS.md, styles/growth.css, growth_platform_migration.sql.
