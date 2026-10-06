# KAKU CONTEXT — Demo_Site

> Canonical continuity document for future ChatGPT/Kaku sessions.
>
> **Rule:** Read this file before making product, design, architecture, repository, deployment, or portfolio decisions. Update it whenever a meaningful decision, milestone, blocker, or verified state changes.

## 1. Mission

Transform `Midosd249/Demo_Site` into a **sales-grade website portfolio + digital growth platform** for Saudi/GCC SMBs, optimized for phone-based field sales in Riyadh. The immediate commercial purpose is to create convincing real-business website demos that can be shown during prospect visits and sold as a separate website service or add-on. The digital-menu product is explicitly out of scope here and lives in a separate repository.

The website layer owns:

- Brand website
- Service/package presentation
- Booking and enquiry flows
- WhatsApp conversion
- Local visibility
- SEO foundations
- AI/search readiness
- Client reporting
- Ongoing growth operations

The separate digital-menu repository owns:

- Digital menus
- QR/menu-specific workflows
- Menu operations

The products may be sold together, but their core jobs must remain separate. **Do not implement, recreate, migrate, or optimize the digital-menu workflow in this repository.**

## 2. User intent — canonical commercial brief

The user wants a deep-researched, continuously improving portfolio of genuinely usable business websites that can be demonstrated live on a phone during Riyadh field-sales rounds; look production-grade rather than generic; vary strongly across sectors; demonstrate clear conversion mechanics; make a prospect imagine their own business inside the site; create a path from demo to paid website to ongoing growth work; reuse architecture without making every demo look identical; and use deep research for sector selection, buyer behavior, UX, visual direction, SEO, local search, accessibility, compliance, and recurring service opportunities.

The portfolio is complementary to the separate digital-menu offer. This repository must never drift back into being a menu repository.

## 3. Current verified state

**Repository:** `Midosd249/Demo_Site`

**Working branch:** `refactor/website-growth-platform`

**Latest verified continuity commit:** `002cc6ce31eeb22d58487ac441e9a080df4baeed`

**Latest broader platform commit observed:** `c84f7a87eae32df109d48a504deae38f0439ef7f`

The repository is public and the connected GitHub account has write access.

The branch contains the website-growth platform direction and the website-only portfolio/design boundary.

### Existing platform surface

The current product direction includes:

1. Dashboard
2. Websites + Builder
3. SEO Audit
4. Local Visibility
5. AI Visibility
6. Competitors
7. Reports
8. Clients
9. Settings

Primary workflow:

**Create Website → Edit → Preview → Publish → Audit SEO → Improve Local Visibility → Improve AI Readiness → Record Competitors → Generate Client Report → Manage Client**

The builder is an expandable section editor rather than a drag-and-drop canvas. Current section vocabulary includes Hero, About, Services, Map, Testimonials, FAQ, CTA, and Contact.

### Data foundation

Growth tables are additive to the existing Supabase schema:

- `growth_websites`
- `seo_audits`
- `growth_clients`
- `growth_reports`
- `competitors`

Legacy menu tables are preserved and must not be deleted as part of the growth platform.

Tenant-scoped RLS is part of the design. The browser must never contain a service-role key.

### Existing portfolio strategy

The portfolio is now explicitly website-only.

Sector sequence:

| Priority | Demo | Commercial hook | Core conversion |
|---|---|---|---|
| 01 | Premium barber | Service catalogue + booking | WhatsApp booking |
| 02 | Ladies salon / spa | Services + packages + booking | WhatsApp / appointment |
| 03 | Dental / aesthetics clinic | Trust + services + doctors | Appointment request |
| 04 | Car detailing / ceramic | Before-after + packages | Quote / WhatsApp |
| 05 | Gym / boutique fitness | Membership + classes | Trial booking |
| 06 | Local fashion / abaya boutique | Editorial commerce | WhatsApp / visit |
| 07 | Home-services brand | Service areas + instant request | WhatsApp |
| 08 | Florist / gift studio | Occasions + catalog presentation | WhatsApp order |
| 09 | Event / wedding studio | Portfolio + package discovery | Consultation |
| 10 | Local professional services | Expertise + proof + enquiry | Lead request |

### SALON / LUMÉRA Beauty Atelier

Second field-sales demo. The existing salon build was materially elevated after review into a distinct editorial beauty world rather than a Barber clone.

Verified direction:

- Asymmetric photography-led hero
- Warm ivory / espresso / muted rose / olive palette
- Editorial serif typography
- Visual service grid rather than a generic card catalogue
- Contextual service detail sheet
- Booking message generator with copy-to-clipboard
- No fake phone number or fake booking destination
- Occasion / bridal package story
- Location preview with explicit handoff for real client data
- Sticky mobile navigation
- Responsive desktop/tablet/mobile layouts
- Reduced-motion support
- DEMO-safe fictional content

The booking interaction deliberately stops at a truthful, copy-ready WhatsApp message until a real client number/provider is verified.

### BRONZE / Riyadh Barber

First field-sales demo:

`demos/riyadh-barber/`

Verified direction from the prior build:

- Premium barber identity
- Arabic-first RTL
- English toggle
- Editorial hero
- Services + starting prices
- Service duration
- Service detail sheet
- Contextual WhatsApp booking
- Gallery / atmosphere
- Location
- Direct call
- Sticky mobile booking
- Responsive layout
- Reduced-motion support
- Fictional/demo-safe content
- Replaceable external imagery
- **No menu system**

BRONZE is the reference implementation for conversion mechanics, not a visual template that every future sector should copy.

## 4. Non-negotiable product rules

### Product boundary

Never reintroduce menu-centric UX into this repository merely because the legacy code contains it.

If a website needs to reference a menu, link to or integrate with the separate menu product rather than duplicating its core workflow.

### Truthfulness

Never fabricate:

- Reviews
- Ratings
- Rankings
- Search positions
- Traffic
- Leads
- Revenue
- Performance results
- Business addresses
- Phone numbers
- Client testimonials
- Competitor facts

Demo content must be visibly safe and replaceable.

A failed browser SEO fetch/CORS failure is **Unavailable**, not a score.

Local Visibility and AI Visibility must distinguish:

- Implemented
- Manual
- Unavailable / Not available

Competitors are user-entered unless an actual connected source verifies the fact.

### Saudi/GCC experience

Default to:

- Arabic-first
- RTL-first
- Mobile-first
- Clear WhatsApp/call/booking actions
- Local service context
- Branch/location clarity
- Simple forms
- Fast first viewport
- Strong photography
- Clear prices/packages where commercially appropriate

English is a secondary mode, not the design default.

## 5. Strategic diagnosis

The repository has already crossed the most important strategic boundary: it is no longer a collection of pretty demos; it is being shaped into a **repeatable sales and growth system**.

The next risk is not lack of features. The risk is building ten disconnected demos without creating a reusable production system.

Therefore the next phase has four priorities:

1. **Systemize** the reusable website/conversion architecture.
2. **Differentiate** each sector strongly enough for a sales conversation.
3. **Operationalize** SEO/local/AI/reporting capabilities so the product has recurring value after launch.
4. **Prove** each capability with explicit verification instead of claims.

The portfolio should be treated as a set of sector-specific sales weapons built on one reliable platform foundation.

## 6. Master roadmap

### Phase 0 — Continuity and foundation
**Status: In progress / partially complete**

Goals:

- Keep this context file current.
- Keep website/menu boundary explicit.
- Keep legacy menu history intact.
- Establish a single reusable website data/content contract.
- Establish verification expectations before adding more surface area.

Exit criteria:

- Future sessions can resume from this file without reconstructing history.
- New work has a clear place in the architecture.
- No accidental menu/product regression.

### Phase 1 — Reusable website engine
**Priority: Highest**

Build or stabilize a reusable architecture for:

- Global site shell
- Header/navigation
- Hero
- Services/packages
- Gallery
- Proof/benefit blocks
- FAQ
- Location/contact
- Conversion panel
- Sticky mobile action
- Detail sheet/modal
- Booking/enquiry flow
- WhatsApp message generator
- SEO metadata
- JSON-LD/schema hooks
- Language/RTL handling
- Demo-content safety markers

Principle:

**Build the engine once; build sector identity separately.**

Do not prematurely build a universal drag-and-drop page builder. The current section editor is sufficient until real client workflows prove a stronger need.

### Phase 2 — Sector portfolio expansion
Build the next demos in this order:

1. **SALON / SPA**
   - Visual direction must materially differ from BRONZE.
   - Focus: packages, treatments, appointment conversion.
   - Primary action: WhatsApp / appointment.

2. **CLINIC**
   - Focus: trust, doctor/service clarity, appointment intent.
   - Primary action: appointment request.
   - Strongest requirements: accessibility, factual discipline, privacy-safe demo data.

3. **AUTO**
   - Focus: before/after, packages, vehicle/service fit, quote.
   - Primary action: quote / WhatsApp.

4. **FITNESS**
   - Focus: trial, classes, membership.
   - Primary action: trial booking.

Then continue with Fashion, Home Services, Florist/Gifts, Events, Professional Services.

Every new demo must answer:

- Why does this sector need a website?
- What is the single dominant conversion?
- What information reduces hesitation?
- What visual idea makes this sector feel native?
- What recurring growth work can be sold after launch?

### Phase 3 — Local visibility system

Turn local SEO from a checklist into an operating workflow.

Foundation:

- Business identity/NAP source of truth
- Location/branch data
- Opening hours
- Service areas
- Service-specific pages/sections
- Internal linking
- Crawlable contact information
- LocalBusiness/appropriate structured data
- Search Console/analytics integration where legitimately connected
- Review workflow guidance
- Local citation consistency checks

Important rule:

Do not mass-produce thin city/location pages. Create location-specific pages only when genuine local detail exists.

### Phase 4 — AI/search readiness

Treat AI readiness as **machine-readable business truth**, not a magic ranking claim.

Implement:

- Clear business entity information
- Service entities
- Location context
- FAQ/answer-shaped content where useful
- Consistent structured data
- SameAs/social references when real
- Explicit prices/ranges where appropriate
- Service areas
- Hours
- Clear, self-contained factual passages

Validation must distinguish:

- Implemented on website
- Manually required from client
- Connected/verified externally
- Unavailable

Never claim that a business is “recommended by AI” without actual evidence.

### Phase 5 — Reporting + recurring growth

Reports should connect technical work to business outcomes.

Minimum reporting model:

| Layer | Example metrics |
|---|---|
| Visibility | Search impressions, rankings where legitimately measured, profile discovery |
| Engagement | CTA clicks, service views, scroll/interaction events |
| Conversion | Calls, WhatsApp starts, forms, booking requests, quote requests |
| Quality | Qualified leads, source, sales status, close rate when supplied |
| Operations | Work completed, pending client inputs, next actions |

A report should answer:

1. What changed?
2. What evidence proves it?
3. What is still blocked?
4. What should happen next?
5. What business action should the client take?

Do not create vanity dashboards that only show traffic.

### Phase 6 — Client operating layer

Evolve `growth_clients` into a lightweight operating CRM:

- Client identity
- Business details
- Website
- Primary conversion
- Location/branches
- Current status
- Content/assets pending
- SEO baseline
- Visibility baseline
- Growth tasks
- Report history
- Next review date

The goal is not to compete with a full CRM. The goal is to make website + growth delivery operational.

### Phase 7 — Sales machine

The portfolio should eventually support a repeatable field-sales loop:

**Prospect → show sector demo → personalize mentally → diagnose current weakness → propose website → launch → measure → improve → retain**

Each demo needs a 60–120 second sales choreography.

The owner should understand the value before hearing technical vocabulary.

## 7. Design doctrine

Shared system:

- Arabic-first / RTL
- Mobile-first
- One strong visual idea per sector
- Large typography
- Deliberate negative space
- Strong first viewport
- Real conversion actions
- No fake proof
- Replaceable demo assets
- Reduced-motion support
- Accessible interaction
- Correct RTL/LTR directional behavior

Shared tokens currently documented in `DESIGN.md`.

Do not force every sector into the same palette, typography, imagery, or component composition. Reuse **interaction primitives and architecture**, not the visual identity.

## 8. Conversion doctrine

Every sector has one dominant CTA.

| Sector | Primary CTA |
|---|---|
| Barber | WhatsApp booking |
| Salon / Spa | Appointment / WhatsApp |
| Clinic | Appointment request |
| Auto | Quote / WhatsApp |
| Fitness | Trial |
| Fashion | Visit / WhatsApp |
| Home services | Service request |
| Florist | WhatsApp order |
| Events | Consultation |
| Professional services | Enquiry |

The first viewport should establish:

**What is this? → Why trust/choose it? → What can I do now?**

Avoid CTA multiplication. Secondary actions can exist, but one action must clearly win.

## 9. Content and asset rules

For demos:

- Use fictional business identities unless real client permission/data exists.
- Mark demo content clearly.
- Use replaceable licensed assets.
- Record external asset sources.
- Never clone a competitor's identity.
- Never imply fictional testimonials are real.
- Never use a real person's identity without appropriate rights.

For client production:

- Replace every demo asset.
- Verify NAP and hours.
- Verify service names/prices.
- Verify booking destination.
- Verify legal/privacy requirements.
- Verify image licenses/ownership.
- Verify structured data against visible facts.

## 10. Engineering rules

- Work on `refactor/website-growth-platform` unless the repository state explicitly changes.
- Do not merge to `main` without explicit approval.
- Do not rename the repository.
- Do not connect a different repository to deployment.
- Do not delete legacy menu history.
- Prefer additive migrations.
- Keep tenant access enforced by RLS.
- Never ship service-role credentials to the browser.
- External providers are optional and must fail safely.
- A failed external fetch must never become invented data.
- Before changing behavior, add or update regression coverage when the repository's testing setup supports it.
- Verify build/runtime behavior before declaring a feature complete.

## 11. Verification checklist

Before calling a demo complete:

### UX
- [ ] Arabic RTL works.
- [ ] English/LTR works where provided.
- [ ] Mobile first viewport is strong.
- [ ] CTA is obvious.
- [ ] Sticky mobile action works.
- [ ] Dialog/sheet works and closes with Escape.
- [ ] Keyboard focus is visible.
- [ ] Reduced motion works.

### Conversion
- [ ] CTA destination is correct.
- [ ] WhatsApp message contains useful context when used.
- [ ] Call action uses verified client number in production.
- [ ] Booking/enquiry data is accurate.
- [ ] No dead-end CTA.

### Content
- [ ] Demo labels are visible.
- [ ] No fake proof.
- [ ] No invented performance claims.
- [ ] Prices/durations are clearly marked as demo when fictional.
- [ ] Assets are replaceable and licensed.

### SEO / machine readability
- [ ] Title/meta are meaningful.
- [ ] Canonical behavior is intentional.
- [ ] Crawlable business facts exist.
- [ ] Structured data matches visible facts.
- [ ] FAQ/schema only represents actual visible content.
- [ ] No thin location-page spam.
- [ ] AI readiness is described as readiness, not guaranteed recommendation.

### Data/security
- [ ] RLS is intact.
- [ ] Tenant boundaries are intact.
- [ ] No service-role key in frontend.
- [ ] External integration failures degrade honestly.
- [ ] Legacy menu data remains intact.

## 12. Current research signals

A current Exa research pass was used to sanity-check the roadmap. The strongest recurring signal is that local growth is not one feature: it is the combination of accurate business facts, mobile usability, service-specific information, local context, structured data, reviews/proof, clear conversion paths, and ongoing measurement.

Useful implementation principles:

- Business identity/NAP should have a single source of truth.
- Core services deserve explicit, useful content rather than one overloaded generic page.
- Local content should contain genuine local information rather than keyword-swapped duplicates.
- Structured data must match visible facts.
- Mobile speed and touch usability affect real conversion, not merely SEO.
- AI/search readiness should emphasize explicit, extractable facts and consistent entities.
- Measure calls, WhatsApp starts, forms, bookings, and qualified leads—not only impressions.

These are strategy inputs, not promises of ranking or AI recommendation.

## 13. Decision log

### D-001 — Website-only repository boundary
**Decision:** Demo_Site is the website/growth layer, not the digital-menu product.

**Reason:** Prevent product duplication and create a clear commercial distinction.

**Status:** Locked.

### D-002 — BRONZE as first field-sales demo
**Decision:** Riyadh Barber is the first website-layer demo.

**Reason:** Strong visual category, frequent service/price changes, natural WhatsApp booking, and easy phone-based demonstration.

**Status:** Complete baseline.

### D-003 — Do not make the next demo another Barber variant
**Decision:** Move to Salon/Spa next.

**Reason:** Validate whether the architecture can support a materially different visual and conversion language.

**Status:** Next portfolio milestone.

### D-004 — Reuse architecture, not identity
**Decision:** Shared components are allowed; visual identity must be sector-specific.

**Reason:** The portfolio must demonstrate range, not a single template in ten costumes.

**Status:** Locked.

### D-005 — Truth over completeness
**Decision:** Unavailable external evidence stays unavailable.

**Reason:** False SEO/visibility claims destroy trust and create unsafe product behavior.

**Status:** Locked.

## 14. Next execution queue

When resuming, execute in this order unless new repository evidence changes the priority:

1. Inspect current branch state and recent commits.
2. Read this file plus `PORTFOLIO_STRATEGY.md`, `DESIGN.md`, `docs/DATA.md`, and `docs/VERCEL.md`.
3. Verify BRONZE still satisfies the conversion/accessibility/truth rules.
4. Identify reusable primitives that should be extracted before the next demo.
5. Build **SALON / SPA** as a genuinely different visual world. (Completed as LUMÉRA; continue only for refinements discovered by verification.)
6. Verify mobile/RTL/CTA/reduced-motion behavior. (Desktop/mobile deployment smoke check completed at HTTP level; interactive browser behavior still requires visual browser QA.)
7. Record the milestone here.
8. Continue to CLINIC only after SALON has passed verification.

Do not spend the next cycle polishing BRONZE endlessly. BRONZE has already proven the concept. The next value is proving repeatability and differentiation.

## 15. Session handoff template

At the end of every meaningful session, update:

### Current milestone
One sentence.

### What changed
Bullets with concrete files/features.

### Verified
What was actually tested or observed.

### Not verified
Anything that remains an assumption.

### Next action
One concrete next implementation step.

### Blocking issue
Only if a real blocker exists.

### Commit
Record the latest relevant SHA.

---

**Canonical rule for future sessions:** If the conversation history is missing, this file is the source of continuity. Reconstruct from the repository, not from memory. Update this file before ending a major work session.
