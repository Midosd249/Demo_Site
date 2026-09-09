# Data model

The growth layer is additive to the existing Supabase schema. Legacy menu tables are preserved.

## Growth tables
- `growth_websites`: tenant-scoped website records. `payload` stores ordered builder sections and branding/SEO metadata.
- `seo_audits`: observed browser audit results. `score` is nullable and is only written after a successful fetch.
- `growth_clients`: lightweight CRM records.
- `growth_reports`: report payloads assembled from saved real records.
- `competitors`: user-entered competitor records; facts require a real source and verification status.

## Tenant access
The frontend resolves the authenticated user's tenant through `tenant_members`. New writes include that `tenant_id`. RLS policies require membership. The client never uses a service-role key.

## Audit truth rules
A blocked CORS/network request is not an audit result. The UI keeps it in an unavailable state and offers manual checks. No score is persisted for a blocked fetch.

## Migration policy
`growth_platform_migration.sql` is additive. Any future migration must use `create table if not exists`, `create index if not exists`, or safe `alter` operations. Never `DROP` legacy menu objects as part of the growth migration.
