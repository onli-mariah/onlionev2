# onli.ai Brand Design Language
### Complete Visual & Interaction System — All onli.ai Products
**Version 1.1 · The Onli Corporation · Design Language Library**

---

> This document is the complete visual system for building any onli.ai product, website, or interface. It extends the master reference (`onli-brand-manual`) with full specification for layout, spacing, navigation, components, and page architecture. Every value here is exact. Use it as written.

---

## Part 1 — Page Architecture

### Surface Structure

Every onli.ai page is built on two surfaces. All content lives on one or the other.

| Surface | Hex | Role |
|---|---|---|
| Cool Light Gray | `#F6F6F6` | Default. All pages open and close here. |
| Dark Charcoal | `#2A2A2A` | Emphasis sections only. Never opens or closes a page. |

**Page flow rule:** Light → Dark → Light. This is the only permitted surface sequence. Dark sections live in the middle of a page — never at the top or bottom.

**Transition rule:** Maximum two light/dark surface transitions per page. Each transition uses a scroll-driven cross-dissolve over 20vh (see `onli-effects-gallery-library`, Effect 04). Never an instant cut.

### Grid System

| Breakpoint | Columns | Gutter | Outer Margin |
|---|---|---|---|
| Mobile (< 768px) | 4 | 16px | 20px |
| Tablet (768–1199px) | 8 | 24px | 40px |
| Desktop (≥ 1200px) | 12 | 32px | 80px |
| Wide (≥ 1440px) | 12 | 32px | 120px |

- Content max-width: 1280px. Centered. Never full-bleed for text content.
- Hero sections and full-bleed imagery may extend to viewport edge.
- Section padding: 120px top/bottom on desktop, 80px on tablet, 60px on mobile.

### Section Anatomy

Every section follows a consistent internal structure:

```
Section container
  └── Eyebrow label       Inter 400 11–12px  lowercase  #6F655C  letter-spacing 0.08em
  └── Section headline    Playfair Display 400/700  sentence case  period-terminated
  └── Body / subheadline  Inter 300 17–24px  sentence case
  └── Content block       Cards / gallery / split panel / etc.
  └── CTA (optional)      Pill button  lowercase  → suffix
```

- Eyebrow label is always the first element in a section. It orients the reader.
- Section headline follows immediately below eyebrow — no extra spacing between them.
- CTA always sits below the content block, never above.

---

## Part 2 — Spacing System

All spacing uses an 8px base unit. Every value in the system is a multiple of 8.

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 8px | Micro gaps — icon-to-label, tight inline elements |
| `--space-2` | 16px | Default internal component padding |
| `--space-3` | 24px | Card internal padding, form field gaps |
| `--space-4` | 32px | Between related components in a group |
| `--space-5` | 48px | Between distinct content blocks within a section |
| `--space-6` | 64px | Between major content areas within a section |
| `--space-7` | 80px | Section padding — mobile |
| `--space-8` | 120px | Section padding — desktop |
| `--space-9` | 160px | Large hero breathing room |
| `--space-10` | 240px | Full-bleed hero minimum height from content to edge |

### Component Spacing Rules

- **Card internal padding:** 24px on all sides (desktop), 20px (mobile).
- **Between cards in a grid:** 24px gap (desktop), 16px (mobile).
- **Button internal padding:** 12px top/bottom, 24px left/right.
- **Pill / tag internal padding:** 6px top/bottom, 14px left/right.
- **Nav pill internal padding:** 10px top/bottom, 20px left/right.
- **Input field internal padding:** 12px top/bottom, 16px left/right.
- **Section eyebrow-to-headline gap:** 12px.
- **Headline-to-subheadline gap:** 16px.
- **Subheadline-to-body gap:** 24px.
- **Body-to-CTA gap:** 40px.

---

## Part 3 — Navigation System

### Primary Navigation — Dual-Pill Capsule

The primary nav is a floating dual-pill capsule centered at the top of the page. It uses a glassmorphic dark treatment on light surfaces.

**Structure:**
```
[  onli.ai wordmark  ]     [  nav links  ·  nav links  ·  nav links  ]     [  get started →  ]
      Left pill                        Center pill                              Right pill
```

| Property | Value |
|---|---|
| Background | `rgba(28,28,26,0.55)` |
| Backdrop filter | `blur(12px)` |
| Border | `0.5px solid rgba(255,255,255,0.12)` |
| Border radius | 999px |
| Height | 48px |
| Position | `fixed`, `top: 24px`, centered horizontally |
| Wordmark | Inter 700 + 400, 14px, `#FFFFFF`, lowercase |
| Nav links | Inter 400, 14px, `#FFFFFF` at 0.85 opacity, lowercase |
| Active link | `#FFFFFF` at full opacity |
| CTA pill | Separate pill, right side — `#FFFFFF` bg, `#1C1C1A` text, Inter 500, lowercase, → suffix |
| Transition on scroll | Opacity increases from 0.55 to 0.85 after 60px scroll |

**Rules:**
- Never use a hamburger menu.
- Never use a dropdown menu.
- Maximum 5 nav links. Beyond 5, consolidate.
- The wordmark and CTA are always present. Nav links are the variable element.
- On mobile: wordmark pill (left) + CTA pill (right) only. Nav links collapse into a section tab system lower on the page.

### Secondary Navigation — Section Tab System

Used for multi-section product or documentation pages. Sits below the hero, sticky on scroll.

| Property | Value |
|---|---|
| Background | `#EEEEEE` pill background |
| Border radius | 999px (outer container), 999px (active tab) |
| Active tab bg | `#1C1C1A` |
| Active tab text | `#FFFFFF`, Inter 400 13px, lowercase |
| Inactive tab text | `#6F655C`, Inter 400 13px, lowercase |
| Height | 40px outer container, 32px tabs |
| Padding (tabs) | 6px top/bottom, 16px left/right |
| Position | `sticky`, `top: 88px` (below primary nav) |

### Persistent Bottom Navigation — Expanding Pill

Used on all multi-section pages with 3 or more scroll sections. Full specification in `onli-effects-gallery-library`, Effect 10.

| Property | Value |
|---|---|
| Position | `fixed`, `bottom: 24px`, `left: 24px` |
| Pill height | 36px |
| Inactive width | 40px (number only) |
| Active width | auto (~120–140px, number + label) |
| Background | `rgba(30,30,28,0.55)`, `blur(12px)` |
| Text | Inter 400 12px, `#FFFFFF` |
| Max pills | 6 |

---

## Part 4 — Component System

### Cards

**Standard card:**

| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Border radius | 16px |
| Border | `0.5px solid #E5E5E5` |
| Padding | 24px |
| Shadow | None |
| Headline | Inter 300–400, 18–22px, `#0A0A0A` |
| Body | Inter 300, 16px, `#3A3A3A` |
| Eyebrow | Inter 400, 11–12px, `#6F655C`, lowercase, 0.08em tracking |

**Premium card (dark):**

| Property | Value |
|---|---|
| Background | `#2A2A2A` |
| Border radius | 16px |
| Border | `0.5px solid rgba(255,255,255,0.1)` |
| Padding | 32px |
| Headline | Inter 300–400, 18–22px, `#FFFFFF` |
| Body | Inter 300, 16px, `#6B6763` |
| CTA | `#FFFFFF` pill, `#1C1C1A` text, lowercase |

**Feature card (on dark section):**

| Property | Value |
|---|---|
| Background | Warm muted tones — khaki `#7A7060`, steel `#6A7070`, slate `#5A6068` |
| Border radius | 16px |
| Padding | 24px |
| Headline | Inter 300, 28–32px, `#FFFFFF` |
| Label | Inter 400, 12px, lowercase, `#FFFFFF` at 0.6 opacity |

### Pricing Cards

Pricing cards always appear as a set. One card per tier. One premium dark card maximum per set.

| Property | Value |
|---|---|
| Card width | Equal. Never vary widths within a set. |
| Tier label | Inter 400 11px, uppercase exception — `MONTHLY` / `ANNUAL` — micro-label only |
| Price display | Inter 300, 48px, `#0A0A0A`, letter-spacing -0.02em |
| Price subtext | Inter 300, 14px, `#6F655C` |
| Feature list | Inter 300, 15px, `#3A3A3A`, 12px vertical gap between items |
| CTA | Full-width pill at bottom of card |
| Most popular badge | Inter 400 11px, lowercase, `#F6F6F6` bg, `#1C1C1A` text, 999px radius |

### Pill / Tag / Chip

| Property | Value |
|---|---|
| Background | `#EEEEEE` |
| Border radius | 999px |
| Padding | 6px top/bottom, 14px left/right |
| Text | Inter 400, 12–13px, `#2E2E2E`, lowercase |
| Border | None (default) · `0.5px solid #E5E5E5` (outlined variant) |

Status pill variants use status colors as background with white text:
- Available: `#00C950` bg, `#FFFFFF` text
- Booked: `#FF6467` bg, `#FFFFFF` text
- Limited: `#4A90D9` bg, `#FFFFFF` text

### Form Inputs

| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Border | `1px solid #E5E5E5` |
| Border radius | 8px |
| Height | 44px (standard), 52px (large) |
| Padding | 12px top/bottom, 16px left/right |
| Text | Inter 400, 15px, `#1C1C1A` |
| Placeholder | Inter 400, 15px, `#A1A1A1` |
| Focus border | `1px solid #1C1C1A` |
| Error border | `1px solid #FF6467` |
| Label | Inter 400, 13px, `#3A3A3A`, above the field, 6px gap |

### Dividers

- Horizontal rules: `1px solid #E5E5E5` on light surfaces, `1px solid rgba(255,255,255,0.1)` on dark.
- Section dividers are created through surface transitions, not visual rules.
- Never use decorative dividers — gradients, ornamental rules, or thick bars.

---

## Part 5 — Layout Patterns

### Hero Section

The standard onli.ai hero occupies 100vh minimum.

| Element | Specification |
|---|---|
| Background | Full-bleed brand photography — portal system |
| Eyebrow | Inter 400, 12px, `#FFFFFF` at 0.7 opacity, lowercase, 0.08em tracking |
| Headline | Playfair Display 400, 72–96px, `#FFFFFF`, sentence case, period-terminated |
| Subheadline | Inter 300, 22–28px, `#FFFFFF` at 0.85 opacity |
| CTA | Ghost pill — white border, white text, lowercase, → suffix |
| Placement | Text in lower-left quadrant. Never centered in a full-bleed hero. |
| Scroll indicator | Chevron or arrow, bottom center, fades with text on scroll |
| Motion | Hero parallax (Effect 03) — image scales 1.05 → 1.0, text floats up and fades on scroll |

### Split Panel

Two-column layout. Used for feature explanations, product details, editorial content.

| Property | Value |
|---|---|
| Column ratio | 50/50 or 55/45 |
| Left panel bg | `#FFFFFF` card |
| Right panel bg | `#E5E5E5` panel gray |
| Gap | 0 (panels are flush, differentiated by bg color) |
| Border radius | 16px on outer container only |
| Padding | 48px on desktop, 32px on tablet |
| Sticky behavior | Optional — one panel may be sticky while the other scrolls |

### Feature Grid

Used for product feature listing. 3-column on desktop, 2-column on tablet, 1-column on mobile.

| Property | Value |
|---|---|
| Card size | Equal height within a row |
| Icon area | 40×40px, `#EEEEEE` bg, 8px radius |
| Headline | Inter 400, 17px, `#0A0A0A` |
| Body | Inter 300, 15px, `#3A3A3A` |
| Gap | 24px |

### Content with Sidebar

Used for documentation, long-form content, API references.

| Property | Value |
|---|---|
| Sidebar width | 240px, fixed |
| Content area | Remaining width, max 720px for readable text |
| Sidebar nav | Inter 400, 13px, `#6F655C` inactive, `#1C1C1A` active, lowercase |
| Active indicator | 2px left border, `#1C1C1A`, on active nav item |
| Sidebar position | `sticky`, `top: 88px` |

---

## Part 6 — Full Page Reference

A complete onli.ai marketing page follows this sequence:

```
1. Fixed primary nav (floating dual-pill capsule)

2. Hero section
   — Full-bleed brand photography
   — Playfair Display headline
   — Subheadline + CTA
   — Scroll indicator
   — Surface: #F6F6F6 or full-bleed image over #F6F6F6

3. Brand statement section
   — GSAP word-by-word scroll reveal
   — Surface: #F6F6F6

4. Feature section (light)
   — Eyebrow + headline
   — Feature grid or split panel
   — Surface: #F6F6F6

5. Product storytelling section (dark)
   — Surface transitions to #2A2A2A (Effect 04)
   — Scroll-linked horizontal card strip (Effect 02) or pinned fade (Effect 09)
   — Dark feature cards

6. Social proof / use cases
   — Centered focus carousel (Effect 06) or staggered grid (Effect 08)
   — Surface: #F6F6F6

7. Pricing section
   — Card set — monthly/annual toggle
   — One premium dark card
   — Surface: #F6F6F6

8. Final CTA section
   — Large Playfair Display statement
   — Single CTA pill
   — Surface: #F6F6F6

9. Footer
   — Surface: #2A2A2A (this is the one permitted dark close — footer only)
   — Wordmark + nav links + legal
```

**The footer exception:** The footer may use the dark surface `#2A2A2A`. It is the only element permitted to close a page on a dark background. It is not a content section — it is structural.

---

## Part 7 — Footer Specification

| Element | Specification |
|---|---|
| Background | `#2A2A2A` |
| Wordmark | `onli.ai` — Inter 700+400, 16px, `#FFFFFF` lowercase |
| Nav links | Inter 400, 13px, `#6B6763`, lowercase, 24px gap between links |
| Legal text | Inter 300, 12px, `#6B6763` |
| Divider | `1px solid rgba(255,255,255,0.08)` above legal row |
| Padding | 64px top, 48px bottom |
| Layout | Three-column on desktop — wordmark left, nav center, legal right |

**Catchphrases (footer use):**
When the three brand catchphrases appear in the footer, they are rendered in Inter 300, 13px, `#6B6763`, stacked vertically, sentence case:

```
Trust without chains.
Possession without permission.
Control without consensus.
```

---

## Part 8 — Responsive Behavior

### Breakpoint Rules

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Primary nav | Full dual-pill capsule | Full dual-pill capsule | Wordmark + CTA pills only |
| Hero headline | 72–96px Playfair | 56–72px Playfair | 40–56px Playfair |
| Section headline | 48–64px Playfair | 40–48px Playfair | 32–40px Playfair |
| Feature grid | 3 columns | 2 columns | 1 column |
| Split panel | Side by side | Side by side | Stacked |
| Pricing cards | Side by side | Side by side | Stacked, full width |
| Bottom pill nav | Full (number + label on active) | Full | Dots only |
| Section padding | 120px | 80px | 60px |
| Card padding | 24px | 20px | 16px |

### Mobile-Specific Rules

- Horizontal card strip (Effect 02) becomes a vertically stacked card list on mobile.
- 3D fan gallery (Effect 07) becomes a standard staggered grid on mobile.
- GSAP scroll reveal (Effect 01) maintains full behavior on mobile — reduce font size only.
- Hero text moves to center-aligned on mobile (exception to the desktop left-alignment rule).
- No pinned scroll sections on mobile — use standard vertical scroll instead.

---

## Part 9 — What Never Happens

These violations apply specifically to layout, spacing, and components. For full system violations see `onli-brand-manual`, Part 7.

- Content max-width exceeding 1280px for text layouts.
- Cards without border radius.
- Pricing cards with unequal widths in the same set.
- Navigation with more than 5 links.
- Hamburger menus or dropdown navigation.
- Split panels with a gap between columns — panels are always flush.
- Hero text centered on desktop.
- More than one premium dark card per page.
- Section padding below 60px on any breakpoint.
- Components touching the viewport edge without outer margin.
- Sticky elements that overlap each other (primary nav and section tabs must not collide).
- Footer used as a content section — it is structural only.
- Dark surface used for opening or closing any page section other than the footer.

---

## Quick Reference

```
GRID
  Columns:         12 (desktop)  8 (tablet)  4 (mobile)
  Gutter:          32px / 24px / 16px
  Outer margin:    80px / 40px / 20px
  Max content:     1280px centered
  Section padding: 120px / 80px / 60px

SPACING BASE UNIT: 8px
  Common values:   16 / 24 / 32 / 48 / 64 / 80 / 120px

NAV
  Primary:         Fixed dual-pill capsule — rgba(28,28,26,0.55) + blur(12px)
  Height:          48px
  Position:        top: 24px, centered
  Secondary:       Section tab system — sticky top: 88px
  Bottom:          Expanding pill — fixed bottom-left

CARDS
  Standard:        #FFFFFF · 16px radius · 0.5px border #E5E5E5 · 24px padding
  Premium:         #2A2A2A · 16px radius · 32px padding
  Feature:         Muted earth tones · 16px radius · 24px padding

HERO
  Height:          100vh minimum
  Text position:   Lower-left (desktop) · Centered (mobile)
  Headline:        Playfair Display 400 72–96px
  Motion:          Effect 03 — image scale + text float

PAGE SEQUENCE
  Open:            #F6F6F6
  Mid (optional):  #2A2A2A dark section
  Close:           #F6F6F6
  Footer:          #2A2A2A (structural only — permitted dark close)
```

---

*onli.ai Brand Design Language — Version 1.1*
*Classification: Design Language — Visual & Interaction System*
*Extends: `onli-brand-manual`*
*Applies to: All onli.ai products, websites, interfaces, and AI-generated outputs.*
