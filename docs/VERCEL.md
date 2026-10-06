# Vercel deployment policy

The repository is linked to the existing Vercel project **demo-site**.

- GitHub repository: Midosd249/Demo_Site
- Working branch: refactor/website-growth-platform
- Vercel project: demo-site
- Team: Midosd2's projects

## Preview deployment

Use the working branch for preview deployments. Do not reconnect another repository.

For explicit verification of a branch commit, a fresh Vercel deployment may be created from the linked Git source using the Vercel deployment integration.

Latest verified quality-pass deployment:

- Deployment: dpl_BYw39fZoS3wwf7AN2mnBAc9X59rJ
- Commit: f784ab97eb197eb91f5b58b07e7d2844ff5ade06
- State: READY
- Branch: refactor/website-growth-platform

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
