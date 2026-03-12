# Design Improvements: Portfolio Site

**Created**: 2026-03-12
**Status**: Proposed — awaiting confirmation before build

---

## Improvement 1 — Global Footer
**Priority**: High
**Affects**: All pages

### Problem
The site has no footer. Visitors who scroll to the bottom of any page hit a blank void with no way to connect, no social links, no sense of closure.

### Proposed Design

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Esther Wang                    LinkedIn  ↗     │
│  Product leader & creative builder.   GitHub  ↗ │
│  Built with curiosity.             Substack  ↗  │
│                                                 │
│  © 2026                                         │
└─────────────────────────────────────────────────┘
```

**Layout**: 2-column — left: short tagline, right: social icon links
**Style**: Same `--bg` background, top border `--border`, generous vertical padding
**Links**: LinkedIn, GitHub, Substack (icon + label, open in new tab)
**Typography**: Small, muted — `--text-muted`, `--text-xs`

---

## Improvement 2 — Projects Page: Personal Identity Strip
**Priority**: High
**Affects**: Projects page

### Problem
The Projects page opens with "Projects" as the heading — it reads like a section header, not a landing page. First-time visitors have no context for *whose* projects these are or who Esther is.

### Proposed Design

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Esther Wang                                    │
│  ─────────────────────────────────────────────  │  ← thin accent line
│  Product leader and creative builder            │
│  exploring AI, storytelling, and human          │
│  connection.                                    │
│                                                 │
│  Projects ↓                                     │  ← smaller section label
└─────────────────────────────────────────────────┘
```

**Change**: Replace current `<h1>Projects</h1>` + tagline with a 2-line hero:
- Line 1: `Esther Wang` — large serif, `--text-5xl`
- Thin cobalt accent rule below the name
- Line 2: Full positioning sentence — `--text-lg`, `--text-secondary`
- Small "Projects" label above the grid as a section anchor

**Effect**: The page now reads as a *personal landing page* with a projects section below, not just a projects list.

---

## Improvement 3 — About Page: Pillars as Horizontal 3-Column
**Priority**: Medium
**Affects**: About page

### Problem
The three pillars (AI / Storytelling / Human connection) are currently stacked vertically in a list. This buries them in the body copy and loses the visual impact of showing the three things at once.

### Proposed Design

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌───────────┐  ┌───────────┐  ┌─────────────┐ │
│  │ AI        │  │Storytell- │  │ Human       │ │
│  │           │  │ing        │  │ connection  │ │
│  │ Experi-   │  │           │  │             │ │
│  │ menting   │  │ Exploring │  │ Building    │ │
│  │ with gen  │  │ how tech  │  │ ideas that  │ │
│  │ AI...     │  │ transforms│  │ connect...  │ │
│  └───────────┘  └───────────┘  └─────────────┘ │
└─────────────────────────────────────────────────┘
```

**Layout**: CSS 3-column grid on desktop, stacked on mobile
**Style**: Each pillar is a subtle card (`--surface`, `--border`, `--radius`) with:
  - Cobalt accent label at top (`--accent`, serif)
  - Description text below (`--text-secondary`)
**Effect**: Creates a strong visual "three pillars" moment — scannable and memorable

---

## Improvement 4 — Nav: "Say hello" CTA
**Priority**: Medium
**Affects**: Nav (all pages)

### Problem
There is no call to action anywhere on the site. Someone inspired by the work has no obvious next step.

### Proposed Design

```
┌─────────────────────────────────────────────────┐
│  Esther Wang        Projects  Writing  About    │
│                                    [Say hello →]│
└─────────────────────────────────────────────────┘
```

**Addition**: A small `mailto:` link on the far right of the nav
**Style**: Subtle — `--text-sm`, `--text-secondary`, no button border. On hover: `--accent` color
**Behavior**: Opens default email client with `mailto:` link

---

## Improvement 5 — Writing Cards: Platform-Tinted Thumbnails
**Priority**: Low
**Affects**: Writing page

### Problem
All writing card thumbnails show the same plain grey placeholder. When real images aren't available, they look unfinished.

### Proposed Design

Replace the flat grey placeholder with a soft gradient tinted to the platform:

| Platform | Gradient | Label |
|----------|----------|-------|
| Substack | warm amber `#FEF3C7` → `#FDE68A` | "S" monogram |
| Xiaohongshu | soft rose `#FFE4E6` → `#FECDD3` | "小" monogram |

**Effect**: Cards look intentional and polished even without real images. Each platform has a distinct visual identity.

---

## Improvement 6 — Page Fade-in Transition
**Priority**: Low
**Affects**: All pages

### Problem
Switching tabs feels abrupt — content snaps in immediately.

### Proposed Design

Add a CSS keyframe fade-in (`opacity: 0 → 1`, `translateY: 8px → 0`) on each page component mount.
- Duration: `0.2s ease-out`
- No delay
- Subtle enough to not feel animated, just "smooth"

---

## Implementation Order (recommended)

| # | Improvement | Effort | Impact |
|---|-------------|--------|--------|
| 1 | Global footer | Small | High |
| 2 | Projects identity strip | Small | High |
| 3 | About pillars 3-col | Small | Medium |
| 4 | Nav CTA | Tiny | Medium |
| 5 | Writing thumbnails | Small | Low |
| 6 | Page fade-in | Tiny | Low |
