# Vercel deployment policy

The repository is linked to the existing Vercel project **demo-site**.

- GitHub repository: Midosd249/Demo_Site
- Working branch: refactor/website-growth-platform
- Vercel project: demo-site
- Team: Midosd2's projects

## Preview deployment

Use the working branch for preview deployments. Do not reconnect another repository.

For explicit verification of a branch commit, a fresh Vercel deployment may be created from the linked Git source using the Vercel deployment integration.

Latest verified deployment:

- Deployment: dpl_3sdMGja3coL6jZFZu7g9g1u5BL6u
- Commit: 8b78da26c58260764cb7477c0ae7a7097d70a34e
- State: READY
- Public preview: demo-site-mgigg9ptb-midosd2s-projects.vercel.app
- Public root is the sales portfolio and does not load Supabase authentication.
- The authenticated Growth Studio workspace is isolated at /studio.html and is noindex/nofollow.
- State: READY
- Branch: refactor/website-growth-platform

Vercel project protection check: password protection, SSO protection, and trusted IP protection are disabled at project level. The public demo routes are therefore intended to be directly viewable.

## Security

1. Configure only public frontend variables required by the existing Supabase client.
2. Never add a service-role key to browser-visible configuration.
3. Do not expose private client data in demo pages.
4. Keep external integrations optional and fail honestly.

## Verification

Before declaring a visual or behavioral change complete:

- deployment state is READY
- target routes return HTTP 200
- Arabic RTL shell is intact
- desktop and mobile layout are reviewed
- CTA behavior is verified
- reduced-motion behavior remains present
- no fake contact data is shipped
- no digital-menu workflow is introduced
- console/network issues are checked when browser tooling is available

## Production

A preview is not production. Do not promote or alter production settings unless explicitly required and approved.
