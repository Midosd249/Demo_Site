# QA_CHECKLIST

## Browser
- [ ] `index.html` loads with `lang="ar" dir="rtl"`.
- [ ] Navigation works on desktop and phone widths.
- [ ] All primary screens render loading, empty, success, error and permission-denied states.
- [ ] Buttons and inputs are usable with touch.

## Builder
- [ ] Create a site without demo data.
- [ ] Add hero/services/about/contact/map/testimonials/FAQ/CTA sections.
- [ ] Edit section content.
- [ ] Reorder sections.
- [ ] Save, reload, and verify persisted payload.
- [ ] Preview reflects saved section order/content.

## SEO
- [ ] HTTPS, title, meta description, H1, lang/dir, canonical, robots, viewport, image alts, internal links and JSON-LD are checked.
- [ ] Successful fetch produces a real score from observed checks only.
- [ ] CORS/network failure shows blocked/unavailable state and manual checklist; no score is invented.
- [ ] Saved audit contains observed signals and issues only.

## Security/data
- [ ] Frontend uses only anon/public Supabase configuration.
- [ ] Tenant is resolved from authenticated membership.
- [ ] RLS denies a user outside the tenant.
- [ ] No service-role key or secret appears in source.
- [ ] No legacy menu table is dropped.

## CI
- [ ] `node --check` passes for every frontend JS file.
- [ ] Required files exist and are non-empty.
- [ ] Secret-pattern check passes.

## Product honesty
- [ ] No fake rankings, reviews, GBP actions, AI citations, competitor facts or analytics.
- [ ] Unknown/unavailable values render as `—` or an explicit unavailable state.
