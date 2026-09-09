# PR #2 notes

## Scope
This branch deepens the Website + Digital Growth Platform without reviving the legacy menu product.

## Implemented in this slice
- Modular Arabic-first shell and screen files.
- Tenant-aware Supabase helpers.
- Website Builder with section add/edit/reorder/save/preview behavior.
- Honest browser SEO audit with CORS/network unavailable handling and persistence after successful reads.
- Reports skeleton sourced only from saved audits and clients.
- Local and AI readiness screens that distinguish Implemented, Manual and Not available.
- User-entered competitor records only; no invented external intelligence.
- Legacy menu history remains untouched and is not exposed by the primary navigation.

## Validation status
- Supabase growth migration is already applied to the existing project.
- Vercel is not linked and no deployment is claimed.
- CI must be checked from GitHub after the branch update.

## Review focus
1. Tenant/RLS behavior.
2. Builder persistence and reload.
3. SEO blocked/fetch-success paths.
4. Mobile RTL behavior.
5. Absence of fabricated production data.
