# Design System: Esther Wang Portfolio

**Status**: Active
**Last Updated**: 2026-03-12

---

## Tokens (current)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F4F3EF` | Page background |
| `--surface` | `#FFFFFF` | Cards, panels |
| `--text-primary` | `#1C2340` | Headings, body |
| `--text-secondary` | `#6B7280` | Labels, meta |
| `--text-muted` | `#9CA3AF` | Placeholders |
| `--accent` | `#3B5BDB` | Cobalt blue — active states, links |
| `--accent-light` | `#EEF2FF` | Chip backgrounds |
| `--border` | `#E5E7EB` | Card borders |
| `--border-strong` | `#D1D5DB` | Dividers |

**Fonts**
- Headings: `Playfair Display` — elegant, editorial, serif
- Body/UI: `Inter` — clean, readable, modern sans

---

## Components (current)

| Component | File | Notes |
|-----------|------|-------|
| Nav | `Nav.jsx` | Frosted glass, fixed top, wordmark + 3 tabs |
| ProjectCard | `ProjectCard.jsx` | Title, team, desc, demo/github links |
| WritingCard | `WritingCard.jsx` | Substack-style row — title, excerpt, meta, thumbnail |
| FilterChips | `FilterChips.jsx` | Pill chips (unused on current build) |
| SearchBar | `SearchBar.jsx` | Search input (unused on current build) |

---

## Identified Gaps (proposed additions)

| Gap | Priority | Proposed Solution |
|-----|----------|-------------------|
| No footer | High | Global footer with social links |
| No personal intro on Projects landing | High | Hero identity strip above the grid |
| About pillars stacked vertically | Medium | 3-column horizontal layout on desktop |
| No nav CTA | Medium | "Say hello" email link on nav right |
| Writing thumbnails are plain grey | Low | Subtle tinted gradient per platform |
| No page transition | Low | CSS fade-in on page mount |
