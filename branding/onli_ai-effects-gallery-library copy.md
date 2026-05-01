# onli.ai Effects & Gallery Library
### Scroll Animations, Motion Primitives & Gallery Mechanics
**Version 1.1 · The Onli Corporation · Design Language Library**

---

> This document defines the complete library of scroll effects, motion primitives, and gallery mechanics for all onli.ai products. Every effect is scroll-driven, physics-grounded, and purposeful. No autoplay. No looping. Everything responds to the user. Use effects exactly as specified — do not combine, reorder, or substitute.

---

## Part 1 — Design Principles for Motion

These principles govern every motion decision across the onli.ai design language. Read them before implementing any effect.

- **Scroll is the engine.** Every animation is driven by scroll position. Never by timers, autoplay, or idle state.
- **Restraint is the aesthetic.** One primary effect per section. Effects do not stack or compete in the same viewport.
- **Ease always.** No linear transitions. All motion uses `power2.out` or `power3.out` — smooth deceleration, never mechanical.
- **Duration is short.** Individual element transitions: `0.3s–0.6s`. Section transitions: `0.6s–1.0s`. Nothing longer.
- **Both surfaces are equal.** Effects must work on cool gray `#F6F6F6` and dark charcoal `#2A2A2A` with equal quality.
- **No bounce, no spring, no elastic.** The brand does not bounce. Damped, controlled motion only.

---

## Part 2 — Effect Library

---

### Effect 01 — Word-by-Word Scroll Color Reveal
**Classification:** Primary motion primitive. Used on every major page.
**Surface:** Light or dark.
**Source:** onli.you, sandbar.com

#### Concept
Large display text renders in full at page load, entirely muted. As the user scrolls, each word transitions from muted to full contrast, left-to-right, tied directly to scroll position. The text is activated — read into existence — by the user's attention.

#### Specification

| Property | Value |
|---|---|
| Typeface | Playfair Display 400 Regular |
| Size | 56–80px (scale to statement length) |
| Resting color — light surface | `#C8C8C8` |
| Resting color — dark surface | `#4A4844` |
| Activated color — light surface | `#0A0A0A` |
| Activated color — dark surface | `#FFFFFF` |
| Transition properties | `color` + `opacity` together |
| Duration per word | `0.3s` |
| Easing | `power2.out` |
| Trigger point | Word reaches vertical center of viewport |
| Implementation | GSAP ScrollTrigger — per-word `<span>` wrapping |

#### Implementation

```javascript
// Wrap each word in a span on init
function wrapWords(element) {
  const words = element.textContent.split(' ');
  element.innerHTML = words
    .map(word => `<span class="reveal-word">${word}</span>`)
    .join(' ');
}

// Init scroll reveal
function initWordReveal(selector, surface = 'light') {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    wrapWords(el);
    const words = el.querySelectorAll('.reveal-word');
    const restColor  = surface === 'dark' ? '#4A4844' : '#C8C8C8';
    const activeColor = surface === 'dark' ? '#FFFFFF' : '#0A0A0A';

    // Set initial state
    gsap.set(words, { color: restColor, opacity: 0.6 });

    words.forEach(word => {
      gsap.to(word, {
        color: activeColor,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: word,
          start: 'top center',
          toggleActions: 'play none none none',
        },
      });
    });
  });
}
```

#### Usage Rules
- Used for brand statement sections only — declarative, sentence-case, period-terminated copy.
- Never applied to body copy or UI elements.
- The full statement must be visible before scroll activation begins.
- Minimum one full viewport height of scroll travel per statement.
- Maximum one scroll reveal statement per section.
- Never applied to questions — only declarations.

---

### Effect 02 — Scroll-Linked Horizontal Card Translation
**Classification:** Primary gallery mechanic. Feature and product showcase.
**Surface:** Dark only.
**Source:** onli.you

#### Concept
A horizontal strip of tall feature cards sits within a vertically-scrolling pinned section. As the user scrolls down, the card strip translates laterally left, mapping vertical scroll progress directly to horizontal card offset. The user never leaves the vertical scroll gesture.

#### Specification

| Property | Value |
|---|---|
| Card width | 340–400px |
| Card height | 480–560px |
| Card background | Warm muted tones — khaki `#7A7060`, steel `#6A7070`, slate `#5A6068` |
| Card radius | 16px |
| Card content | Eyebrow label (Inter 400 12px lowercase) + headline (Inter 300 28–32px) + media |
| Translation direction | Left (as user scrolls down) |
| Scroll travel | 150–200vh pinned section |
| Implementation | GSAP ScrollTrigger `pin: true`, horizontal `x` translation |
| Easing | `none` — direct 1:1 scroll mapping |
| Card gap | 16–24px |
| Number of cards | 4–6 |

#### Implementation

```javascript
function initHorizontalStrip(sectionSelector, stripSelector) {
  const section = document.querySelector(sectionSelector);
  const strip   = document.querySelector(stripSelector);

  const totalWidth   = strip.scrollWidth;
  const viewportWidth = window.innerWidth;
  const translateX   = -(totalWidth - viewportWidth + 160); // 160px right padding

  gsap.to(strip, {
    x: translateX,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${totalWidth}`,
      scrub: true,
      pin: true,
    },
  });
}
```

#### Usage Rules
- Always on dark background `#2A2A2A` — the contrast between warm card tones and dark canvas is essential.
- Never on the cool gray surface.
- Cards bleed slightly beyond the right viewport edge at rest, implying more content.
- Do not combine with the word reveal effect in the same section.
- Section before and after the pinned strip should be standard vertical scroll.

---

### Effect 03 — Hero Parallax — Image Scale + Text Float
**Classification:** Page entry effect. Full-bleed hero sections only.
**Surface:** Full-bleed image over any surface.
**Source:** onli.you

#### Concept
A full-bleed hero image fills the viewport. Overlaid text sits in the lower portion. As the user scrolls, the image scales subtly (slow zoom out) while the text simultaneously floats upward and fades — creating a layer separation that signals transition out of the hero.

#### Specification

| Property | Value |
|---|---|
| Hero image initial scale | `1.05` |
| Hero image exit scale | `1.0` |
| Image scale travel | Over 60vh of scroll |
| Text initial position | `y: 0`, `opacity: 1` |
| Text exit position | `y: -40px`, `opacity: 0` |
| Text exit scroll travel | 30vh |
| Implementation | GSAP ScrollTrigger on hero container |
| Easing | `power2.inOut` |

#### Implementation

```javascript
function initHeroParallax(heroSelector, textSelector, imageSelector) {
  const hero  = document.querySelector(heroSelector);
  const text  = document.querySelector(textSelector);
  const image = document.querySelector(imageSelector);

  // Image scale
  gsap.fromTo(image,
    { scale: 1.05 },
    {
      scale: 1.0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '60% top',
        scrub: true,
      },
    }
  );

  // Text float + fade
  gsap.to(text, {
    y: -40,
    opacity: 0,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: '30% top',
      scrub: true,
    },
  });
}
```

#### Usage Rules
- Used exclusively on hero sections with full-bleed brand photography.
- Always the first scroll interaction on a page — never used mid-page.
- Text overlaid on the hero must pass 4.5:1 contrast ratio.
- The scroll indicator (chevron/arrow) fades in sync with the text.

---

### Effect 04 — Section Background Color Transition
**Classification:** Section transition. Structural scroll landmark.
**Surface:** Light → Dark → Light.
**Source:** onli.you, onli.cloud

#### Concept
As the user scrolls from one section to the next, the page background transitions between cool gray and dark charcoal. A gradual cross-dissolve driven by scroll — not an instant cut. The user passes through a transitional zone. Text colors transition simultaneously.

#### Specification

| Property | Value |
|---|---|
| Light surface | `#F6F6F6` |
| Dark surface | `#2A2A2A` |
| Transition zone | 20vh overlap between sections |
| Implementation | GSAP ScrollTrigger background-color tween |
| Easing | `power1.inOut` |
| Text transition | Simultaneous with background — light text fades in as dark text fades out |

#### Implementation

```javascript
function initSurfaceTransition(triggerSelector, direction = 'to-dark') {
  const fromBg   = direction === 'to-dark' ? '#F6F6F6' : '#2A2A2A';
  const toBg     = direction === 'to-dark' ? '#2A2A2A' : '#F6F6F6';

  gsap.to('body', {
    backgroundColor: toBg,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: triggerSelector,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
    },
  });
}
```

#### Usage Rules
- Flow is always: light → dark → light. Never dark → light as the opening surface.
- Maximum two surface transitions per page.
- Every background transition must be accompanied by a simultaneous text color transition.
- Never leave dark text on a transitioning-to-dark background.

---

### Effect 05 — Oversized Ghost Heading Overlay
**Classification:** Section label / ambient wayfinding.
**Surface:** Light or dark.
**Source:** onli.you

#### Concept
An ultra-thin, oversized section heading renders in a near-invisible color — dark-on-dark or light-on-light. As the user scrolls into the section, the heading fades from ghost to slightly more visible. Behind it, content scrolls at a faster rate. The heading acts as a fixed ambient label while content moves through it.

#### Specification

| Property | Value |
|---|---|
| Typeface | Inter 200 ExtraLight or Playfair Display 300 |
| Size | 15–25vw — viewport-relative, fills the section width |
| Opacity range | 0.03 → 0.08 (never fully opaque) |
| Color — light surface | `#1C1C1A` |
| Color — dark surface | `#FFFFFF` |
| Position | `sticky`, centered, behind content layer (`z-index: 0`) |
| Content layer | `z-index: 1` — scrolls over the ghost heading |
| Parallax rate | Content scrolls at 1.2× the heading |
| Trigger | Section enters viewport |
| Easing | `power1.inOut` over 30vh |

#### Usage Rules
- One ghost heading per section maximum.
- Never legible — it is ambient texture, not wayfinding text.
- Never use the same text as a visible headline in the same section.
- Works on both light and dark surfaces.

---

### Effect 06 — Centered Focus Carousel
**Classification:** Gallery mechanic. Feature storytelling.
**Surface:** Light — cool gray or white.
**Source:** sandbar.com

#### Concept
A horizontal carousel where the active card sits centered, enlarged, and in full contrast. Adjacent cards are visible at the edges at reduced scale and opacity, implying navigation. The user clicks or drags to advance. Scroll does not drive this effect — it is the exception to the scroll-only rule.

#### Specification

| Property | Value |
|---|---|
| Active card scale | `1.0` |
| Adjacent card scale | `0.88` |
| Adjacent card opacity | `0.5` |
| Card width | 560–720px (desktop), 85vw (mobile) |
| Card radius | 16px |
| Card background | `#FFFFFF` |
| Transition duration | `0.5s` |
| Easing | `power2.inOut` |
| Navigation | Click on adjacent card, or arrow controls |
| Min items | 3 |
| Max items | 7 |
| Drag | Enabled — threshold 60px |

#### Implementation

```javascript
function initCarousel(carouselSelector) {
  const cards   = document.querySelectorAll(`${carouselSelector} .carousel-card`);
  let current   = 0;

  function goTo(index) {
    cards.forEach((card, i) => {
      const offset = i - index;
      gsap.to(card, {
        scale:   offset === 0 ? 1.0 : 0.88,
        opacity: offset === 0 ? 1.0 : 0.5,
        x:       offset * 640,
        duration: 0.5,
        ease:    'power2.inOut',
      });
    });
    current = index;
  }

  goTo(0); // Init
}
```

#### Usage Rules
- Used on light surfaces only.
- Never used for more than 7 items — use the staggered grid for larger sets.
- Never used for fewer than 3 items — use a split panel instead.
- Drag threshold: 60px minimum to register as intentional.
- Auto-advance is never permitted.

---

### Effect 07 — 3D Perspective Card Fan
**Classification:** Gallery mechanic. Portfolio and ecosystem showcase.
**Surface:** Off-white or light.
**Source:** unveil.fr

#### Concept
A set of cards arranged in a 3D perspective fan. The stack responds to mouse movement with subtle parallax — cards shift in depth as the cursor moves across the viewport. On hover, the hovered card rises forward and its glass surface becomes more opaque. Clicking expands the card to full view.

#### Specification

| Property | Value |
|---|---|
| Card dimensions | 320×420px (portrait) |
| Card radius | 8px |
| Card glass background | `rgba(255,255,255,0.07)` |
| Card blur | `blur(8px)` |
| Card border | `0.5px solid rgba(255,255,255,0.15)` |
| Fan spread angle | 3–6° between cards |
| Perspective | `1200px` |
| Mouse parallax speed | `lerp` factor `0.08` |
| Hover card elevation | `translateZ(40px)`, `scale(1.04)` |
| Hover transition | `0.3s`, `power2.out` |
| Min items | 8 |
| Max items | 16 |
| Implementation | CSS `transform-style: preserve-3d` + GSAP lerp mousemove |

#### Implementation

```javascript
function initCardFan(containerSelector) {
  const container = document.querySelector(containerSelector);
  const cards     = container.querySelectorAll('.fan-card');

  let mouseX = 0, mouseY = 0;
  let lerpX  = 0, lerpY  = 0;

  // Mouse tracking
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
  });

  // Lerp loop
  function animate() {
    lerpX += (mouseX - lerpX) * 0.08;
    lerpY += (mouseY - lerpY) * 0.08;

    gsap.set(container, {
      rotateY: lerpX,
      rotateX: -lerpY,
    });

    requestAnimationFrame(animate);
  }
  animate();

  // Hover states
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { z: 40, scale: 1.04, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { z: 0, scale: 1.0, duration: 0.3, ease: 'power2.out' });
    });
  });
}
```

#### Usage Rules
- Minimum 8 items — fewer items do not fill the fan effectively.
- Never used on dark surfaces — the glass effect requires a light or off-white background.
- Mouse parallax is disabled on touch devices — falls back to static fan layout.
- Never used on mobile — falls back to staggered image grid (Effect 08).

---

### Effect 08 — Staggered Image Grid Reveal
**Classification:** Gallery mechanic. Content collections and image libraries.
**Surface:** Light or dark.
**Source:** onli.cloud

#### Concept
A grid of cards or images enters the viewport and animates in with a staggered fade-and-rise. Each card activates sequentially left-to-right as the grid enters the viewport. The cards do not re-animate on scroll back up.

#### Specification

| Property | Value |
|---|---|
| Initial state | `opacity: 0`, `y: 32px` |
| Animated state | `opacity: 1`, `y: 0` |
| Duration per card | `0.6s` |
| Stagger | `0.08s` between cards |
| Easing | `power2.out` |
| Trigger | Card row enters viewport bottom |
| Direction | Left-to-right stagger always |
| Re-animation | Never — fires once only |

#### Implementation

```javascript
function initStaggerGrid(gridSelector) {
  const cards = document.querySelectorAll(`${gridSelector} .grid-card`);

  gsap.set(cards, { opacity: 0, y: 32 });

  ScrollTrigger.batch(cards, {
    onEnter: batch => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
      });
    },
    start: 'top 90%',
    once: true, // Never re-animate
  });
}
```

#### Usage Rules
- Stagger direction is always left-to-right. Never random. Never from center outward.
- Cards that have animated in do not re-animate on scroll back.
- On mobile: reduce stagger to `0.04s` and translate to `y: 20px`.
- Works on both light and dark surfaces — color values adjust accordingly.

---

### Effect 09 — Scroll-Driven Section Pin with Content Fade
**Classification:** Narrative section. Long-form product storytelling.
**Surface:** Dark only.
**Source:** onli.you

#### Concept
A section is pinned to the viewport. Internal content — a sequence of text blocks, images, or cards — fades in and out sequentially as the user scrolls. The section header remains fixed. Content panels cross-dissolve. Creates the sensation of a presentation delivered through natural scroll.

#### Specification

| Property | Value |
|---|---|
| Pin duration | 3–4× viewport height of scroll travel |
| Content panels | 2–4 panels maximum |
| Panel transition | `opacity: 0 → 1 → 0`, `duration: 0.4s` |
| Panel overlap | Outgoing panel begins fading before incoming reaches full opacity |
| Fixed header | Stays in position throughout pin — no animation |
| Background | Dark surface `#2A2A2A` — pinned sections are always dark |
| Exit behavior | Section unpins and scrolls away normally |
| Implementation | GSAP ScrollTrigger `pin: true` with `scrub` |

#### Implementation

```javascript
function initPinnedFade(sectionSelector, panelSelector) {
  const section = document.querySelector(sectionSelector);
  const panels  = document.querySelectorAll(panelSelector);
  const count   = panels.length;

  gsap.set(panels, { opacity: 0 });
  gsap.set(panels[0], { opacity: 1 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${count * window.innerHeight * 1.5}`,
      scrub: true,
      pin: true,
    },
  });

  panels.forEach((panel, i) => {
    if (i === 0) return;
    tl.to(panels[i - 1], { opacity: 0, duration: 0.4 })
      .to(panel, { opacity: 1, duration: 0.4 }, '<0.2');
  });
}
```

#### Usage Rules
- Maximum one pinned section per page.
- Pinned sections are always on the dark surface — light surface pins feel too heavy.
- Always precede with a surface transition from light to dark (Effect 04).
- Never pin a section containing interactive elements — pinned sections are observation only.
- Maximum 4 content panels — beyond 4, break into separate sections.

---

### Effect 10 — Persistent Bottom Navigation — Expanding Pill
**Classification:** Navigation component. Persistent wayfinding.
**Surface:** Any — floats above page content.
**Source:** jacksonalexander.com.au

#### Concept
A row of compact pill indicators sits fixed at the bottom-left of the viewport at all times. Each pill shows only a number at rest. When scroll position enters a new section, the corresponding pill expands — its width increases and the section label fades in. Inactive pills contract. Size distinguishes active state, not color.

#### Specification

| Property | Value |
|---|---|
| Pill height | 36px |
| Inactive pill width | 40px |
| Active pill width | auto (~120–140px — number + space + label) |
| Background | `rgba(30,30,28,0.55)` |
| Backdrop filter | `blur(12px)` |
| Border | `0.5px solid rgba(255,255,255,0.12)` |
| Number typography | Inter 400 12px, `#FFFFFF` at 0.6 opacity |
| Label typography | Inter 400 12px, `#FFFFFF` at 0.9 opacity |
| Label fade-in | `opacity: 0 → 1`, `duration: 0.25s` |
| Width transition | `duration: 0.3s`, `ease: power2.out` |
| Gap between pills | 6px |
| Position | `fixed`, `bottom: 24px`, `left: 24px` |
| Companion CTA | Separate pill, `bottom: 24px`, `right: 24px` — same glassmorphic treatment |

#### Implementation

```javascript
function initBottomNav(sections, labels) {
  const nav = document.querySelector('.bottom-nav');

  sections.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter:      () => setActive(i),
      onEnterBack:  () => setActive(i),
    });
  });

  function setActive(index) {
    document.querySelectorAll('.bottom-nav__pill').forEach((pill, i) => {
      const label = pill.querySelector('.pill-label');
      if (i === index) {
        gsap.to(pill,  { width: 'auto', duration: 0.3, ease: 'power2.out' });
        gsap.to(label, { opacity: 0.9,  duration: 0.25 });
      } else {
        gsap.to(pill,  { width: 40,    duration: 0.3, ease: 'power2.out' });
        gsap.to(label, { opacity: 0,   duration: 0.15 });
      }
    });
  }
}
```

#### Usage Rules
- Used on all multi-section pages with 3 or more distinct scroll sections.
- Maximum 6 pills.
- Pill numbers correspond to sections in sequence — never skip numbers.
- On mobile: dots only — no numbers, no labels, no expanding behavior.
- The companion CTA pill (bottom-right) uses identical glassmorphic treatment.
- The glassmorphic treatment is mandatory — this is one of the two primary glassmorphism applications in the design language.

---

## Part 3 — Gallery Format Summary

Four gallery formats. Each has a specific use case. Do not substitute.

| Format | Effect | Use Case | Surface | Items |
|---|---|---|---|---|
| Centered Focus Carousel | 06 | Feature storytelling, comparisons | Light | 3–7 |
| Scroll-Linked Horizontal Strip | 02 | Product features, showcase | Dark | 4–6 |
| 3D Perspective Card Fan | 07 | Portfolio, ecosystem showcase | Off-white / light | 8–16 |
| Staggered Image Grid | 08 | Content collections, image library | Light or dark | Any |

---

## Part 4 — Motion Timing Reference

| Effect | Duration | Easing | Trigger |
|---|---|---|---|
| Word color reveal (per word) | `0.3s` | `power2.out` | Scroll — word at viewport center |
| Horizontal card translation | Direct scroll map | `none` | Scroll — continuous |
| Hero image scale | Over 60vh | `power2.inOut` | Scroll — page load |
| Background color transition | Over 20vh | `power1.inOut` | Scroll — section entry |
| Ghost heading opacity | Over 30vh | `power1.inOut` | Scroll — section entry |
| Carousel card transition | `0.5s` | `power2.inOut` | Click |
| 3D fan mouse parallax | Continuous | `lerp 0.08` | Mousemove |
| 3D fan card hover | `0.3s` | `power2.out` | Hover |
| Grid stagger (per card) | `0.6s` | `power2.out` | Scroll — card enters viewport |
| Pinned panel fade | `0.4s` | Scrub | Scroll — continuous |
| Pill nav expand | `0.3s` | `power2.out` | Scroll — section entry |
| Button hover | `0.2s` | `ease` | Hover |
| Page transition | `0.6s` | `power2.inOut` | Navigation |
| Max single-element duration | `1.0s` | — | — |

---

## Part 5 — Implementation Stack

All effects are built on the following tools. No substitutions.

- **GSAP** (GreenSock Animation Platform) — core animation engine for all scroll-driven effects
- **GSAP ScrollTrigger** — scroll position mapping, pinning, and section detection
- **CSS `transform`** — 3D perspective, scale, translate, rotate
- **CSS `backdrop-filter`** — glassmorphism on nav pills and glass cards
- **CSS `position: sticky`** — ghost heading overlay
- **`lerp` (linear interpolation)** — mouse parallax smoothing for the 3D fan

### GSAP Setup

```javascript
// Register ScrollTrigger plugin — required
gsap.registerPlugin(ScrollTrigger);

// Default settings
gsap.defaults({
  ease: 'power2.out',
  duration: 0.6,
});

// Refresh on resize
ScrollTrigger.addEventListener('refresh', () => ScrollTrigger.refresh());
window.addEventListener('resize', () => ScrollTrigger.refresh());
```

### Glassmorphism Reference

| Context | Background | Blur | Border |
|---|---|---|---|
| Nav pills (Effect 10) | `rgba(28,28,26,0.55)` | `blur(12px)` | `0.5px solid rgba(255,255,255,0.12)` |
| 3D fan glass cards (Effect 07) | `rgba(255,255,255,0.07)` | `blur(8px)` | `0.5px solid rgba(255,255,255,0.15)` |

```css
/* Nav pill glassmorphism */
.nav-pill {
  background: rgba(28, 28, 26, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 0.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
}

/* 3D fan card glassmorphism */
.fan-card {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
}
```

---

## Part 6 — What Never Happens

- Autoplay animations or looping idle motion.
- Bounce or spring easing on any element.
- Scroll-triggered effects that reverse on scroll-up — effects fire once only.
- Multiple competing effects in the same viewport section.
- Glassmorphism on dark surfaces — the effect requires a light background to be legible.
- The 3D fan used for fewer than 8 items.
- The centered carousel used for more than 7 items.
- The horizontal card strip used on a light surface.
- The pinned section used on a light surface.
- More than one pinned section per page.
- Any effect with a duration longer than `1.0s` for individual elements.
- Linear easing on any visible transition.
- Mouse parallax on touch devices — always detect and disable.
- The 3D fan on mobile — always fall back to staggered grid.

---

## Quick Reference

```
EFFECT INDEX
  01  Word-by-word scroll color reveal     Light or dark    Primary primitive
  02  Horizontal card translation          Dark only        Primary gallery
  03  Hero parallax — scale + text float   Full-bleed       Page entry
  04  Section background transition        Light ↔ dark     Structural
  05  Oversized ghost heading overlay      Light or dark    Ambient
  06  Centered focus carousel              Light only       Feature gallery
  07  3D perspective card fan              Light / off-white Portfolio gallery
  08  Staggered image grid reveal          Light or dark    Content grid
  09  Pinned section with content fade     Dark only        Narrative
  10  Persistent bottom nav pill           Any              Navigation

TIMING RULES
  Individual transitions:   0.3s – 0.6s
  Section transitions:      0.6s – 1.0s
  Maximum single element:   1.0s
  Default easing:           power2.out
  Never:                    linear · bounce · spring · elastic · autoplay

GSAP SCROLL REVEAL COLORS
  Rest light:    #C8C8C8   →   Active light:  #0A0A0A
  Rest dark:     #4A4844   →   Active dark:   #FFFFFF
  Per word:      0.3s · power2.out · trigger at viewport center

GLASSMORPHISM
  Nav pills:     rgba(28,28,26,0.55)    + blur(12px) + border rgba(255,255,255,0.12)
  Fan cards:     rgba(255,255,255,0.07) + blur(8px)  + border rgba(255,255,255,0.15)

IMPLEMENTATION STACK
  GSAP + ScrollTrigger · CSS transform · CSS backdrop-filter · lerp
```

---

*onli.ai Effects & Gallery Library — Version 1.1*
*Classification: Design Language — Motion & Interaction*
*Extends: `onli-brand-manual`, `onli-brand-design-language`*
*Applies to: All onli.ai products, websites, interfaces, and AI-generated outputs.*
