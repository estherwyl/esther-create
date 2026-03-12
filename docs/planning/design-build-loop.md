# Design-Build-Loop: Personal Portfolio Website

**Created**: 2026-03-12
**Status**: DOGFOOD
**Last Updated**: 2026-03-12

---

## 1. ITCH

### The Job to Be Done
> When I want to share my work and creative identity online, I want a personal website that feels like *me* — thoughtful, creative, and human — so I can establish a presence that reflects who I actually am, not just what my LinkedIn says.

### Current Workaround
> My current workaround is having no dedicated personal site (relying on LinkedIn and scattered writing platforms), which is painful because it doesn't capture the full picture — the AI experiments, the writing, the creative curiosity — and it forces people to piece together who I am from disconnected sources.

### Success Criteria
> I'll know this is solved when:
> - I can send one URL to anyone and it clearly communicates: who I am, what I build, and what I write
> - The site feels like a creative/product person made it — not a generic dev template
> - I can add a new project card or writing post by editing a single data file

### Notes
- This surfaces a few times a week whenever she wants to share her work, apply to something, or introduce herself professionally
- The site doubles as a creative lab — she wants to document her AI experiments publicly as she goes
- Strong directional clarity: "product leader and creative builder exploring AI, storytelling, and human connection"

---

## 2. CHALLENGE

### Assumptions Being Made
- [x] A custom-built site will feel more "her" than a no-code tool like Framer or Webflow
- [x] Three pages (Projects, About, Writing) covers her current needs
- [x] Placeholder content is fine to start — she'll fill in real content post-build
- [x] She won't need a CMS or backend right now — direct file editing is acceptable
- [ ] The visual direction (off-white, cobalt, serif headings) will hold up once real content is in

### Simpler Alternatives Considered
| Alternative | Why Not (or Why Maybe) |
|-------------|------------------------|
| Framer / Webflow | Less control over exact aesthetic; harder to version-control; ongoing subscription |
| Notion public page | Too generic, not ownable, no custom domain feel |
| GitHub Pages + Jekyll | Good for devs, too markdown-heavy for a creative portfolio |
| Squarespace | Fast to launch, but templates fight against truly custom aesthetics |
| **Vite + React + plain CSS** | ✅ Full control, easy to run locally, simple to hand-edit, no lock-in |

### Hypothesis
> I believe a clean, minimal Vite + React site with editorial typography and a project-first layout will feel like a high-quality creative portfolio.
> I'll know this is true when Esther looks at the running site and says it feels like *her* — not like a template.

### Kill Criteria
> If the site feels indistinguishable from a generic developer portfolio after styling, or if adding new content requires touching more than one file, the structure needs to be rethought.

### Decision
- [x] Proceed to BUILD

---

## 3. BUILD

### What Was Built
Vite + React personal portfolio site with 3 pages (Projects default, About, Writing), plain CSS design system, and editable data files.

### Key Decisions
| Decision | Rationale |
|----------|-----------|
| Vite + React (no TypeScript) | Fast local dev, component model, no complexity overhead |
| Plain CSS with variables | Easy to read/edit, no build tooling dependencies, explicit design tokens |
| State-based tab switching (no router) | 3 tabs = no need for React Router; simpler mental model |
| All content in `src/data/` files | Single place to edit text; no need to touch components |
| Playfair Display + Inter | Elegant serif for headings, clean sans for body — editorial pairing |
| No dark mode, no animations | Keeps it focused; avoids generic dev portfolio feel |

### Deferred for Later
- Real portrait photo (placeholder block used)
- Actual writing post links (Substack / Xiaohongshu URLs)
- Contact form or email CTA
- SEO meta tags / Open Graph
- Custom domain setup
- Any backend / CMS

### Build Date
2026-03-12

---

## 4. DOGFOOD

### Dogfood Period
[Start date] → [End date]

### Friction Log

| Date | What I Was Doing | What Went Wrong / Felt Off | Severity (1-3) |
|------|------------------|---------------------------|----------------|
| | | | |
| | | | |
| | | | |

### Categorized Issues

**Quick Fixes (< 30 min)**
- [ ] [Issue]

**Worth Doing Eventually**
- [ ] [Issue]

**Tolerable (not worth fixing)**
- [Issue]

**Design Flaw Signals**
- [Issue — indicates fundamental rethink needed]

---

## 5. REFLECT

### Usage Reality
- Did I actually use it? [Yes/No/Sometimes]
- How often? [Daily/Weekly/Rarely/Never]

### Hypothesis Validation
- Was the core hypothesis validated? [Yes/No/Partially]
- Evidence: [What happened that proves/disproves it]

### Decision

- [ ] **Iterate** — Fix top issues, continue dogfooding
- [ ] **Polish** — Core works, ready to add UI/docs/etc.
- [ ] **Pivot** — Rethink the approach (back to CHALLENGE)
- [ ] **Kill** — Not worth continuing
- [ ] **Ship** — Ready for broader use

### Next Steps
1. [Specific action]
2. [Specific action]

### Lessons Learned
[What would you do differently next time?]

---

## Iteration Log

### Iteration 1: 2026-03-12
**Phase**: BUILD
**Changes**: Initial scaffold — Vite + React, 3 pages, design system, placeholder data
**Result**: Build complete. Clean compile, all 3 pages functional, search + filter working, responsive layout. Moving to DOGFOOD.

---

## Final Status

**Outcome**: ONGOING
**Summary**: [To be filled after dogfood period]
**Time Invested**: [To be filled]
