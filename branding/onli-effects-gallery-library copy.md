# Onli Brand — Effects & Gallery Library
### Scroll Animations, Motion Primitives & Gallery Mechanics

---

## Overview

This document defines the complete library of scroll effects, motion primitives, and gallery mechanics for the Onli brand design language. Every effect listed here has been observed and validated across the Onli ecosystem and five reference sites. All effects share the same design principles: **on-scroll triggered, physics-grounded, never decorative, always purposeful.** No autoplay animations. No looping idle effects. Everything responds to the user.

---

## Design Principles for Motion

Before specifying any individual effect, these principles govern all motion decisions across the Onli design language:

- **Scroll is the engine.** Every animation is driven by scroll position, not timers or autoplay.
- **Restraint is the aesthetic.** One primary effect per section. Effects do not stack or compete.
- **Ease always.** No linear transitions. All motion uses `power2.out` or `power3.out` easing — smooth deceleration, never mechanical.
- **Duration is short.** Individual element transitions: `0.3s–0.6s`. Section transitions: `0.6s–1.0s`. Nothing longer.
- **Dark and light surfaces have equal status.** Effects must work on both the warm parchment (`#EEEAE5`) and the deep dark (`#1C1C1A`) with equal quality.
- **No bounce, no spring, no elastic.** The brand does not bounce. Damped, controlled motion only.

---

## Effect Library

---

### Effect 01 — Word-by-Word Scroll Color Reveal
**Classification:** Primary motion primitive. Used on every major page.
**Source:** onli.you, sandbar.com

#### Concept
Large display text is rendered in full at page load but appears entirely muted. As the user scrolls, each individual word transitions from muted to full-contrast, left-to-right, tied directly to scroll position. The effect creates the sensation that the text is being activated — or read into existence — by the user's attention.

#### Specification
| Property | Value |
|---|---|
| Typeface | Playfair Display 400 Regular |
| Size | 56–80px |
| Text resting color (light surface) | `#C8C4BE` |
| Text resting color (dark surface) | `#4A4844` |
| Text activated color (light surface) | `#1C1C1A` |
| Text activated color (dark surface) | `#FFFFFF` |
| Transition properties | `color`, `opacity` together |
| Duration per word | `0.3s` |
| Easing | `power2.out` |
| Trigger point | Word enters vertical center of viewport |
| Implementation | GSAP ScrollTrigger, per-word `<span>` wrapping |

#### Usage Rules
- Used for brand statement sections — declarative, sentence-case, period-terminated copy
- Minimum one full viewport height of scroll travel per statement
- Never applied to body copy or UI elements — display text only
- Works on both light and dark section backgrounds
- The full statement must be visible before scroll-activation begins — no partial text reveal on load

---

### Effect 02 — Scroll-Linked Horizontal Card Translation
**Classification:** Primary gallery mechanic. Feature and product showcase.
**Source:** onli.you

#### Concept
A horizontal strip of tall feature cards sits within a vertically-scrolling section. As the user scrolls down, the card strip translates laterally — left or right — mapping vertical scroll progress to horizontal card offset. The user never leaves the vertical scroll gesture. Content is revealed horizontally through a single intuitive motion.

#### Specification
| Property | Value |
|---|---|
| Card width | 340–400px |
| Card height | 480–560px (tall format) |
| Card background | Warm muted tones — khaki `#7A7060`, steel `#6A7070`, slate `#5A6068` |
| Card radius | `16px` |
| Card content | Category label (Inter 400 12px lowercase) + bold headline (Inter 300 28–32px) + media mockup |
| Strip translation direction | Left (as user scrolls down) |
| Scroll travel required | 150–200vh pinned section |
| Implementation | GSAP ScrollTrigger with `pin: true`, horizontal `x` translation |
| Easing | `none` (direct 1:1 scroll mapping, no easing on the translation itself) |
| Card gap | `16–24px` |
| Number of cards | 4–6 visible in strip |

#### Usage Rules
- Always on a dark background section (`#1C1C1A` or `#111111`) — the contrast between the warm card tones and the black canvas is essential
- Never used on the warm parchment surface — that surface is for static layouts
- Cards bleed slightly beyond the right viewport edge at rest, implying more content
- Section before and after the pinned horizontal strip should be standard vertical scroll
- Do not combine with the word reveal effect in the same section

---

### Effect 03 — Hero Parallax — Image Scale + Text Float
**Classification:** Page entry effect. Used on full-bleed hero sections.
**Source:** onli.you

#### Concept
A full-bleed hero image fills the viewport. Overlaid text sits in the lower portion of the frame. As the user begins to scroll, the image scales subtly upward (slow zoom out from initial scale) while the text simultaneously floats upward and fades — creating a separation between image and text layers that signals transition out of the hero. The image edge reaches the viewport edge and the section clips away cleanly.

#### Specification
| Property | Value |
|---|---|
| Hero image initial scale | `1.05` |
| Hero image exit scale | `1.0` |
| Image scale duration | Tied to scroll — full travel over 60vh |
| Text initial position | Bottom-left, `y: 0`, `opacity: 1` |
| Text exit position | `y: -40px`, `opacity: 0` |
| Text exit scroll travel | 30vh |
| Background clip behavior | Section exits viewport cleanly, no overlap |
| Implementation | GSAP ScrollTrigger on hero container |
| Easing | `power2.inOut` |

#### Usage Rules
- Used exclusively on hero sections with full-bleed brand photography
- Image must be high resolution — the scale effect will expose compression artifacts at low quality
- Text overlaid on the hero image must pass 4.5:1 contrast — use white text on dark/moody images
- The downward scroll indicator (arrow or chevron) fades out in sync with the text
- This effect is always the first scroll interaction on a page — not used mid-page

---

### Effect 04 — Section Background Color Transition
**Classification:** Section transition. Structural scroll landmark.
**Source:** onli.you, onli.cloud

#### Concept
As the user scrolls from one major section to the next, the page background transitions between the warm parchment surface and the deep dark surface. This is not an instant cut — it is a gradual cross-dissolve driven by scroll position, so the user passes through a transitional zone. This creates a clear visual hierarchy between "editorial/marketing" sections (warm light) and "product/technical" sections (dark).

#### Specification
| Property | Value |
|---|---|
| Light surface color | `#EEEAE5` (warm parchment) |
| Dark surface color | `#1C1C1A` (near-black) |
| Transition zone | 20vh overlap between sections |
| Implementation | GSAP ScrollTrigger background-color tween or CSS scroll-timeline |
| Easing | `power1.inOut` |
| Text color transition | Simultaneous — light text fades in as dark text fades out |

#### Usage Rules
- The transition always flows: light → dark → light (never dark → light as the opening surface)
- Every surface transition must be accompanied by a typographic color transition — never leave dark text on a transitioning-to-dark background
- The warm parchment is the default resting state — pages open and close on light
- Use sparingly — maximum two light/dark transitions per page

---

### Effect 05 — Oversized Ghost Heading Overlay
**Classification:** Section label / ambient wayfinding.
**Source:** onli.you

#### Concept
An ultra-thin, oversized section heading sits at the center of the viewport, rendered in a near-invisible color close to the background (dark-on-dark or light-on-light). As the user scrolls into the section, the heading fades from ghost to slightly more visible — never fully opaque. Behind it, the actual content (card grid, images, text) scrolls at a faster rate. The heading acts as a fixed ambient label while the content beneath it moves through.

#### Specification
| Property | Value |
|---|---|
| Typeface | Inter 200 ExtraLight or Playfair Display 300 |
| Size | 80–120px |
| Color on dark surface | `#2A2A28` (just barely lighter than `#1C1C1A`) |
| Color on light surface | `#DEDAD4` (just barely darker than `#EEEAE5`) |
| Opacity at rest | `0.4` |
| Opacity at peak visibility | `0.7` |
| Position | `position: sticky`, centered vertically and horizontally |
| Scroll behavior | Heading is sticky; content grid scrolls behind it |
| Implementation | CSS `position: sticky` + GSAP opacity tween |

#### Usage Rules
- Used only for major section labels — "Appliances", "Private By Default", "Ownership"
- Never used for navigation or functional labels — purely ambient and decorative in function
- Content behind the heading must be dark cards on dark background or light cards on light — the contrast must not fight with the ghost heading
- Maximum one ghost heading per section
- Text is always sentence case, single word or short phrase

---

### Effect 06 — Centered Focus Carousel (Depth-of-Field Gallery)
**Classification:** Gallery mechanic. Feature showcase. Product states.
**Source:** sandbar.com

#### Concept
Three cards are visible simultaneously in a horizontal row. The center card is in full sharp focus — full opacity, full size, fully rendered. The two flanking cards are blurred, reduced in opacity, and partially cropped by the viewport edges. Clicking either side card or its label rotates the carousel: the selected card animates to center (scales up, de-blurs, opacity to 1), and the previous center card moves to the opposite flank (scales down, blurs, opacity reduces).

#### Specification
| Property | Value |
|---|---|
| Center card width | 340px |
| Center card height | 460px (portrait) |
| Center card blur | `0` |
| Center card opacity | `1.0` |
| Center card scale | `1.0` |
| Side card width | ~280px (visually, due to scale) |
| Side card scale | `0.82` |
| Side card blur | `blur(10px)` |
| Side card opacity | `0.55` |
| Side card offset | Partially cropped — ~40px beyond viewport edge |
| Card radius | `20px` |
| Transition duration | `0.5s` |
| Easing | `power2.inOut` |
| Navigation | Click side card OR click label text below |
| Label — active | Inter 400 22px, `#1C1C1A`, centered below card |
| Label — inactive | Inter 300 22px, `#A09C97`, centered below card position |
| Caption below | Inter 300 Light 15px, `#8A8278`, centered, updates per active card |
| Background | Warm parchment `#EEEAE5` — uninterrupted |

#### Usage Rules
- Always on the warm parchment background — the blur effect requires a clean, non-competing background
- Cards contain Onli brand photography only — no UI mockups, no screenshots in this gallery format
- Minimum 3 cards, maximum 7 — the mechanic breaks visually beyond 7
- Labels below each card position are always visible — not just the active one — providing wayfinding
- Auto-advance is never used — user-driven only
- This gallery format is used for feature storytelling moments, not product catalogs

---

### Effect 07 — 3D Perspective Card Fan
**Classification:** Showcase gallery. Hero-level visual statement.
**Source:** unveil.fr

#### Concept
All items in a collection are displayed simultaneously as a diagonal fan of cards rendered in 3D perspective — as if physical cards are spread out on a table viewed from a slight elevation angle. Cards stack from bottom-left (foreground, larger) to top-right (background, smaller) using CSS `perspective` and `transform-style: preserve-3d`. The entire composition responds to mouse cursor position with a live parallax tilt. Scrolling advances through the card set — more cards emerge from the back as earlier cards exit the foreground.

#### Specification
| Property | Value |
|---|---|
| Card dimensions | 340×230px (landscape) |
| Card radius | `8px` (minimal — the 3D effect is the feature, not the card shape) |
| Parent perspective | `1200px` |
| Card `rotateY` | `~18°` |
| Card `rotateX` | `~12°` |
| Card Z-offset per step | `~40px` |
| Card X-offset per step | `~60px` |
| Card Y-offset per step | `~40px` |
| Mouse parallax range | ±8° total rotation on X and Y axes |
| Mouse parallax smoothing | `lerp 0.08` (very slow follow for premium feel) |
| Hover state | Hovered card: `translateZ +30px`, `scale(1.04)`, project name appears |
| Hover — other cards | Slight opacity reduction `0.85` |
| Glassmorphic cards | Every 3rd–4th card: `backdrop-filter: blur(8px)`, `background: rgba(255,255,255,0.08)`, allowing cards behind to bleed through |
| Background | Off-white `#F8F6F2` — warm, very light |
| Implementation | CSS 3D transforms + GSAP mousemove handler |
| Click behavior | Clicked card expands to fill viewport → page transition to detail |

#### Usage Rules
- This is the highest-complexity gallery effect in the library — used only at the portfolio, showcase, or ecosystem-level presentation layer
- Never used for UI feature cards or pricing — those use Effect 02 or Effect 06
- The glassmorphic cards within the stack must use Onli brand imagery behind the glass layer — the transparency must reveal something meaningful, not empty space
- Minimum 8 cards to make the fan visually credible
- The mouse parallax must be disabled on touch devices — replaced with a slow CSS auto-tilt animation on mobile
- The INDEX toggle (flat grid view) must always be available as an alternative view mode

---

### Effect 08 — Staggered Image Grid Reveal
**Classification:** Content reveal. Gallery section entry.
**Source:** onli.cloud (product cards section)

#### Concept
A grid of images or cards enters the viewport as the user scrolls. Each card in the grid animates in with a slight upward translate and fade, staggered by column position — leftmost column first, rightmost column last. The stagger creates a sense of the grid "falling into place" rather than appearing all at once.

#### Specification
| Property | Value |
|---|---|
| Entry translate | `y: 40px → y: 0` |
| Entry opacity | `0 → 1` |
| Duration per card | `0.6s` |
| Stagger delay | `0.08s` per column |
| Easing | `power2.out` |
| Trigger | Card enters viewport bottom edge |
| Implementation | GSAP `stagger` on ScrollTrigger `onEnter` |

#### Usage Rules
- Used for image grids, product card grids, and feature card rows
- Never applied to text content — text uses Effect 01 (word reveal) or appears without animation
- The stagger direction is always left-to-right — never random, never outward from center
- Cards that have already animated in do not re-animate on scroll back up
- On mobile, reduce stagger to `0.04s` and translate to `y: 20px` to maintain smoothness

---

### Effect 09 — Scroll-Driven Section Pin with Content Fade
**Classification:** Narrative section. Long-form storytelling.
**Source:** onli.you (dark feature section)

#### Concept
A section is pinned to the viewport while its internal content — a sequence of text blocks, images, or cards — fades in and out sequentially as the user scrolls. The section header remains fixed. Content panels cross-dissolve. This creates the sensation of a presentation or slideshow delivered through the natural scroll gesture.

#### Specification
| Property | Value |
|---|---|
| Pin duration | 3–4× viewport height of scroll travel |
| Content panels | 2–4 panels maximum |
| Panel transition | `opacity: 0 → 1 → 0`, `duration: 0.4s` |
| Panel overlap | Panels cross-dissolve — outgoing panel begins fading before incoming reaches full opacity |
| Fixed header behavior | Stays in position throughout pin, no animation |
| Background | Dark surface `#1C1C1A` — pinned sections are always dark |
| Exit behavior | Section unpins and scrolls away normally |
| Implementation | GSAP ScrollTrigger `pin: true` with scrub |

#### Usage Rules
- Maximum one pinned section per page
- The pinned section must be on the dark surface — light surface pins feel too heavy
- Always precede the pinned section with a clear visual transition from light to dark (Effect 04)
- Pinned sections are for product storytelling — feature details, use case walkthroughs
- Never pin a section that contains interactive elements (forms, buttons) — pinned sections are observation-only

---

### Effect 10 — Persistent Bottom Navigation — Expanding Pill
**Classification:** Navigation component. Persistent wayfinding.
**Source:** jacksonalexander.com.au

#### Concept
A row of compact pill-shaped section indicators sits fixed at the bottom-left of the viewport at all times. Each pill shows only a number at rest. When the user's scroll position enters a new section, the corresponding pill **expands** — its width increases and the section label fades in alongside the number. Inactive pills contract back to number-only. The active pill is visually distinct through size, not color.

#### Specification
| Property | Value |
|---|---|
| Pill height | `36px` |
| Inactive pill width | `40px` |
| Active pill width | `auto` (number + space + label, ~120–140px) |
| Background | `rgba(30, 30, 28, 0.55)` — glassmorphic dark |
| Backdrop filter | `blur(12px)` |
| Border | `0.5px solid rgba(255,255,255,0.12)` |
| Number typography | Inter 400 12px, `#FFFFFF` at 0.6 opacity |
| Label typography | Inter 400 12px, `#FFFFFF` at 0.9 opacity |
| Label fade-in | `opacity: 0 → 1`, `duration: 0.25s` |
| Pill width transition | `width`, `duration: 0.3s`, `ease: power2.out` |
| Gap between pills | `6px` |
| Position | `fixed`, `bottom: 24px`, `left: 24px` |
| Companion CTA | Separate pill, bottom-right — "get started" with avatar thumbnail fused left |

#### Usage Rules
- Used on all multi-section pages with 3 or more distinct scroll sections
- The pill numbers always correspond to sections in sequence — never skip numbers
- Maximum 6 pills — beyond 6 the component becomes unwieldy
- The glassmorphic treatment is mandatory — this is one of the primary glassmorphism applications in the design language
- The companion CTA pill (bottom-right) uses the same glassmorphic treatment
- On mobile, reduce to dots only — no number labels, no expanding behavior

---

## Gallery Format Summary

The library defines four distinct gallery formats. Each has a specific use case and must not be substituted.

| Format | Effect # | Use Case | Surface | Complexity |
|---|---|---|---|---|
| Centered Focus Carousel | 06 | Feature storytelling, 3–7 items | Light / parchment | Medium |
| Scroll-Linked Horizontal Strip | 02 | Product features, 4–6 cards | Dark | Medium |
| 3D Perspective Card Fan | 07 | Portfolio, ecosystem showcase | Off-white | High |
| Staggered Image Grid | 08 | Content collections, image library | Light or dark | Low |

---

## Motion Timing Reference

| Effect | Duration | Easing | Trigger |
|---|---|---|---|
| Word color reveal (per word) | `0.3s` | `power2.out` | Scroll — word at viewport center |
| Horizontal card translation | Direct scroll map | `none` | Scroll — continuous |
| Hero image scale | Scroll over 60vh | `power2.inOut` | Scroll — page load |
| Background color transition | Scroll over 20vh | `power1.inOut` | Scroll — section entry |
| Ghost heading opacity | Scroll over 30vh | `power1.inOut` | Scroll — section entry |
| Carousel card transition | `0.5s` | `power2.inOut` | Click |
| 3D fan mouse parallax | Continuous | `lerp 0.08` | Mousemove |
| 3D fan card hover | `0.3s` | `power2.out` | Hover |
| Grid stagger (per card) | `0.6s` | `power2.out` | Scroll — card enters viewport |
| Pill nav expand | `0.3s` | `power2.out` | Scroll — section entry |

---

## Implementation Stack

All effects in this library are built on the following tools:

- **GSAP** (GreenSock Animation Platform) — core animation engine for all scroll-driven effects
- **GSAP ScrollTrigger** — scroll position mapping, pinning, and section detection
- **CSS `transform`** — 3D perspective, scale, translate, rotate
- **CSS `backdrop-filter`** — glassmorphism on nav pills and glass cards
- **CSS `position: sticky`** — ghost heading overlay
- `lerp` (linear interpolation) — mouse parallax smoothing for the 3D fan

### Glassmorphism Specification

Glassmorphism appears in two distinct contexts in the Onli design language:

1. **Navigation pills (Effect 10)** — dark frosted glass, always on light surfaces
2. **3D fan glass cards (Effect 07)** — semi-transparent cards within the 3D stack

| Property | Nav Pills | 3D Fan Glass Cards |
|---|---|---|
| Background | `rgba(28, 28, 26, 0.55)` | `rgba(255, 255, 255, 0.07)` |
| Backdrop filter | `blur(12px)` | `blur(8px)` |
| Border | `0.5px solid rgba(255,255,255,0.12)` | `0.5px solid rgba(255,255,255,0.15)` |
| Text color | White | White or near-black depending on content behind |
| Usage surface | Light (parchment or white) | Off-white or light |

---

## What Never Happens

- Autoplay animations or looping idle motion
- Bounce or spring easing
- Scroll-triggered effects that reverse on scroll-up (effects fire once)
- Multiple competing effects in the same viewport section
- Glassmorphism on dark surfaces (the effect requires a light or colorful background to be legible)
- The 3D fan used for fewer than 8 items
- The centered carousel used for more than 7 items
- Any effect with a duration longer than `1.0s` for individual elements
- Linear easing on any visible transition

---

## Reference Sites

| Site | Effects Observed |
|---|---|
| [onli.cloud](https://onli.cloud) | Staggered image grid, section background transitions, split-panel scroll |
| [onli.you](https://www.onli.you) | Word reveal, horizontal card strip, hero parallax, ghost heading, dark gallery grid |
| [sandbar.com](https://www.sandbar.com) | Centered focus carousel, word reveal, warm parchment scroll behavior |
| [jacksonalexander.com.au](https://jacksonalexander.com.au) | Persistent expanding pill navigation, section scroll detection |
| [unveil.fr](https://unveil.fr) | 3D perspective card fan, mouse parallax, glassmorphic cards, overview/index toggle |

---

*Onli Brand Effects & Gallery Library — Version 1.0*
*Classification: Design Language — Motion & Interaction*
