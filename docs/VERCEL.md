# Vercel deployment policy

There is currently no Vercel project linked to `Midosd249/Demo_Site`. Do not invent a deployment URL.

## After PR review
1. Link only the existing `Midosd249/Demo_Site` repository.
2. Use the `refactor/website-growth-platform` branch for a Preview while PR #2 is under review.
3. Configure only public frontend variables required by the existing Supabase client. Never add a service-role key.
4. Confirm the Preview URL loads the Arabic RTL shell and all routes.
5. Only after review and explicit approval should production be considered.

## Required verification
- Build/deployment logs are successful.
- Supabase auth and RLS work from the Preview.
- SEO CORS/unavailable state remains honest.
- No secret values appear in browser bundles.
- Repository remains exactly `Midosd249/Demo_Site`.
