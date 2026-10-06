# FIELD SALES MISSION — Demo_Site

## 1. The actual mission

Build a sales-grade portfolio of real business websites that can be opened on a phone during in-person prospecting rounds in Riyadh.

The portfolio is not the digital-menu product.

The user's primary commercial offer remains the separate digital-menu business. This repository exists so that, during the same visit, a business owner can also be shown a credible website service that can be sold as a separate service or as an add-on.

The target outcome is not “more demos.” The target outcome is:

**Show a business owner a website that makes them imagine their own business on it, start a commercial conversation, and create a path to a paid website + ongoing growth engagement.**

## 2. Hard product boundary

### This repository owns
- Business websites
- Brand presentation
- Service/package presentation
- Booking and enquiry journeys
- WhatsApp/call/contact conversion
- Location and branch presentation
- Local SEO foundations
- Search/AI machine-readability
- Analytics/conversion measurement foundations
- Client reporting
- Ongoing website/growth operations

### The separate menu repository owns
- Digital menus
- QR/menu workflows
- Menu operations
- Menu-specific editing/publishing

**Do not rebuild the menu product here.**

The two offers may be sold together, but they must remain separate products with separate jobs.

## 3. Field-sales context

The websites must be designed for a live phone demonstration, not only for desktop portfolio browsing.

A strong demo should work in this sequence:
1. Open the site.
2. Establish the business identity immediately.
3. Show the strongest visual idea.
4. Demonstrate the core service/product information.
5. Trigger the dominant conversion action.
6. Show location/contact confidence.
7. Let the owner mentally substitute their logo, photography, services and contact details.
8. Ask for the business conversation.

### Sales test
- “Can you make this for my business?”
- “How much would this cost?”
- “Can you put our services/photos here?”
- “Can it connect to WhatsApp/booking?”
- “Can you make it appear on Google?”

## 4. Design objective

Every sector must look native to its business, not like the same template with a different logo.

Shared architecture is good. Shared visual identity is not.

The portfolio should demonstrate range, taste, commercial understanding, conversion thinking, Arabic/RTL competence, mobile competence, technical credibility, and ability to work across different business models.

## 5. Portfolio strategy

| Priority | Sector | What the demo must prove | Dominant conversion |
|---|---|---|---|
| 01 | Premium barber | Service discovery + fast booking | WhatsApp booking |
| 02 | Ladies salon / spa | Packages + treatment discovery + appointment confidence | Appointment / WhatsApp |
| 03 | Dental / aesthetics clinic | Trust + doctor/service clarity + compliant information architecture | Appointment request |
| 04 | Car detailing / ceramic | Visual proof + package comparison + vehicle/service fit | Quote / WhatsApp |
| 05 | Boutique fitness / gym | Trial + schedule + membership value | Trial booking |
| 06 | Fashion / abaya boutique | Editorial brand + collection discovery | Visit / WhatsApp |
| 07 | Home services | Problem → service → service area → request | Service request |
| 08 | Florist / gift studio | Occasion-led discovery + visual catalog | WhatsApp order |
| 09 | Wedding / event studio | Portfolio + package discovery + consultation | Consultation |
| 10 | Professional services | Expertise + proof + clear consultation path | Enquiry |

Do not add a sector merely to increase the count. Add it when it proves a new commercial pattern, visual language, or buyer journey.

## 6. Website architecture

Build reusable primitives once and allow sector-specific composition.

Core primitives:
- Site shell
- Language switcher
- Navigation
- Hero
- Service/package cards or rows
- Detail sheet/modal
- Gallery
- Proof/benefit section
- FAQ
- Location/branch block
- Contact block
- Booking/enquiry panel
- WhatsApp message generator
- Sticky mobile CTA
- Footer
- SEO metadata
- Structured-data hooks
- Analytics/conversion event hooks

The system should make it cheap to produce the next sector without making the next sector look cheap.

## 7. Conversion doctrine

Each page and demo has one primary job.

- Barber → book
- Salon → book
- Clinic → request appointment
- Auto → request quote
- Fitness → claim trial
- Fashion → visit/message
- Home services → request service
- Florist → order/message
- Events → consultation
- Professional services → enquiry

Secondary actions are allowed, but they must not compete with the primary action.

The first viewport should answer:

**What is this? → Why should I care? → What can I do now?**

## 8. Saudi/GCC defaults

- Arabic is the primary experience.
- RTL is the default layout direction.
- Mobile is the first review environment.
- WhatsApp, calls and booking are high-value actions.
- Location and branch information matter.
- Customers want quick answers.
- Arabic copy should be natural, not mechanically translated.
- English can be complete where useful, but should not control the visual hierarchy by default.
- Service names, prices, durations, opening hours and locations must be factual in production.
- Seasonal operating details such as Ramadan/Eid hours must be treated as changeable business data.

## 9. SEO and AI/search readiness

Build the website so search engines and other systems can understand the business accurately.

Minimum foundation:
- meaningful titles/descriptions
- crawlable service content
- clean internal linking
- intentional canonical URLs
- language URLs where bilingual pages are used
- hreflang where appropriate
- LocalBusiness or more specific schema when applicable
- visible and structured business facts
- accurate location/hours/contact data
- service areas only when genuine
- no invisible claims in structured data
- schema must agree with visible content

AI/search readiness means **clear, extractable business truth**. It does not mean claiming that an AI system will recommend a business.

## 10. Measurement

Prioritize actions closer to revenue:
1. WhatsApp starts
2. Calls
3. Booking requests
4. Quote requests
5. Enquiries/forms
6. Qualified leads
7. Sales status when supplied
8. Repeat/return actions where legitimately measurable

Traffic and impressions are supporting signals, not the primary definition of success.

## 11. Asset strategy

Use external assets to accelerate demo quality, but treat them as replaceable.

Preferred order:
1. Client-owned assets for production.
2. Properly licensed stock/demo photography.
3. Open-license assets with clear attribution/terms.
4. Generated assets when rights and consistency are appropriate.

Never copy a competitor's identity, photography, text, logo, reviews, or proprietary creative.
Maintain an asset/source ledger for production-relevant external assets.

## 12. Research operating model

Research should happen in parallel with building, not as a one-time report.

For every new sector:

### A. Commercial research
Find why owners need the website, common customer questions, dominant conversion behavior, common operational pain, what makes a website commercially valuable, and recurring services that can be sold after launch.

### B. UX research
Find strong and weak category patterns, mobile expectations, booking/contact friction, information hierarchy, trust requirements, and local discovery patterns.

### C. Visual research
Find category-specific art direction, typography, photography language, layout patterns, interaction patterns, useful open-source references, and permissively licensed assets.

Use references as inspiration and architecture input, never as a cloning target.

### D. Technical research
Check current search guidance, structured-data requirements, multilingual/RTL handling, performance expectations, accessibility, privacy, and sector-specific compliance.

### E. Field-sales research
For each sector produce a 60–120 second demo choreography, one-sentence pitch, one dominant CTA, three strongest selling points, likely objections, and next-step offer.

## 13. Repository continuity rule

Before any new session:
1. Read KAKU_CONTEXT.md.
2. Read this file.
3. Read PORTFOLIO_STRATEGY.md.
4. Read DESIGN.md.
5. Inspect the current branch and recent commits.
6. Inspect the target demo before editing.
7. Research only what is needed to make the next decision better.
8. Update the continuity record after a meaningful milestone.

Never rely on conversation history alone.

## 14. Definition of done

The portfolio is working when a prospect can understand each demo within seconds; every sector has a distinct visual identity; every demo has a clear conversion path; the sites are credible on a phone; the websites are easy to reskin; the codebase remains maintainable; SEO foundations are present; facts are truthful; assets are replaceable; the menu product remains completely separate; the demos collectively support a real Riyadh field-sales route; and the next demo can be built faster without looking like a copy of the previous one.