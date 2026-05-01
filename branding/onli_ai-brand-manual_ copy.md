# onli.ai Brand Manual
### Master Reference — All onli.ai Products
**Version 1.1 · The Onli Corporation · Design Language Library**

---

> This is the single source of truth for all onli.ai brand expression. It governs every visual decision — from a button label to a hero headline — across every website, interface, and AI-generated output in the onli.ai ecosystem. If you are a developer, designer, or AI system building anything under the onli.ai name, this document governs the output.

---

## Library Map

Six documents comprise the full Design Language Library. This master document provides the essential rules. Companion documents provide deeper specification per domain.

| Document | Scope |
|---|---|
| `onli-brand-manual` (this document) | Master overview — philosophy, color, typography, imagery, rules |
| `onli-brand-design-language` | Complete visual system — layout, spacing, shape, components, nav, buttons |
| `onli-typography-system` | Full type scale, wordmark spec, GSAP type rules, color × type matrix |
| `onli-effects-gallery-library` | Scroll effects, motion primitives, gallery formats, implementation stack |
| `onli-image-brand-language` | Portal system, photography spec, environment and lighting rules |
| `onli-brand-web` (skill) | AI/developer build instructions — step-by-step implementation guide |

---

## Part 1 — Brand Philosophy

### Who onli.ai Is

onli.ai is not a blockchain company. Not a fintech app. Not a crypto wallet. onli.ai is ownership infrastructure — the first system that makes digital assets behave like physical property. Every design decision must reflect this: **structural, precise, sovereign, grounded.**

The brand personality is The Sage combined with The Architect. We know what we are building. We have studied what came before. We designed something that actually works. The visual language reflects this — no hype, no decoration, no flash.

### The Core Design Statement

> Cool. Precise. Editorial confidence.

The onli.ai visual language feels like a modern architecture firm's website crossed with a developer console. It is premium without being loud. It is technical without being cold. The precision comes from the layout, the spacing, and the rules. The restraint comes from the palette.

### Brand Voice — Visual Translation

| Voice Attribute | Visual Translation |
|---|---|
| Declarative | Large type. Period-terminated. Sentence case. No hedging. |
| Structural | Flat surfaces. Grid discipline. No decorative elements. |
| Precise | Exact spacing. Defined radii. No ambiguity in hierarchy. |
| Grounded | Cool gray base. Heavy negative space. Photography over illustration. |
| Sovereign | Dark premium card. Ownership language. Nothing shared unless chosen. |

### Ecosystem Architecture

| Product | Domain | Role | Description |
|---|---|---|---|
| Onli One | onli.one | The Network | Core peer-to-peer infrastructure. The possession protocol. |
| Onli.You | onli.you | User App | Free end-user application. Vault, Gene, Catalog, Auth Log. |
| Onli Cloud | onli.cloud | Dev Platform | Where developers build and deploy Appliances. API, MCP. |
| onli.ai | onli.ai | AI Interface | Conversational AI. Natural language into deterministic system behavior. |
| Onli.FYI | onli.fyi | Info Site | Public-facing use cases, research, and evidence-based content. |
| Neich | neich.market | Currency | Native dollar-for-dollar fixed micro-currency. Not a token. |
| Species | species.market | Turnkey Platform | Out-of-the-box possession-based digital asset economy. |

**The architecture rule:** Onli One is the network. Onli Cloud serves the network. Appliances serve their owners. No brand in this ecosystem may position itself as holding, securing, or custodying user assets. That language is architecturally false and legally dangerous.

---

## Part 2 — Color System

The onli.ai palette is a deliberate reduction. Two surface temperatures. One dark. Status-only color exceptions. No gradients. No brand accents. Color comes from photography, not UI chrome.

### Surface Colors

| Token | Hex | Name | Usage |
|---|---|---|---|
| `--surface-base` | `#F6F6F6` | Cool Light Gray | Universal page background. All onli.ai products. Canon standard. |
| `--surface-dark` | `#2A2A2A` | Dark Charcoal | Dark sections, feature areas, premium conversion moments. |
| `--card-light` | `#FFFFFF` | White | Cards, panels, and content containers on gray base. |
| `--card-panel` | `#E5E5E5` | Panel Gray | Secondary panels, split-panel fills, section dividers. |
| `--card-premium` | `#2A2A2A` | Premium Dark | Annual/premium tier card surface. One per page maximum. |
| `--pill-bg` | `#EEEEEE` | Pill Gray | Nav capsules, section tabs, all pill and chip elements. |

**Rules:**
- Pages open on cool gray. Pages close on cool gray. Dark sections live in the middle.
- Maximum two light/dark surface transitions per page.
- Never open or close a page on a dark background.

### Text Colors — Light Surfaces

| Token | Hex | Usage |
|---|---|---|
| `--text-heading` | `#0A0A0A` | H1/H2 headings. Highest contrast. |
| `--text-primary` | `#1C1C1A` | Primary body and UI text. |
| `--text-body` | `#3A3A3A` | Card titles, body copy, primary content on cards. |
| `--text-nav` | `#2E2E2E` | Nav labels, pill text, UI chrome. |
| `--text-hero` | `#8A7F75` | Hero tagline register — warm brownish gray. |
| `--text-muted` | `#6F655C` | Captions, supporting labels, secondary descriptors. |
| `--text-disabled` | `#A1A1A1` | Disabled states, footer, least prominent text. |

### Text Colors — Dark Surfaces

| Token | Hex | Usage |
|---|---|---|
| `--text-on-dark` | `#FFFFFF` | All primary text on dark surfaces. |
| `--text-muted-dark` | `#6B6763` | Secondary text and labels on dark surfaces. |

### GSAP Scroll Reveal Colors

| Token | Hex | Usage |
|---|---|---|
| `--reveal-rest-light` | `#C8C8C8` | Unactivated word color on light surface — neutral gray. |
| `--reveal-rest-dark` | `#4A4844` | Unactivated word color on dark surface. |
| `--reveal-active-light` | `#0A0A0A` | Activated word color on light surface. |
| `--reveal-active-dark` | `#FFFFFF` | Activated word color on dark surface. |

### Status Colors

| Token | Hex | Name | Usage |
|---|---|---|---|
| `--status-available` | `#00C950` | Available Green | Available badge, confirmed state, active status. |
| `--status-full` | `#FF6467` | Booked Red | Fully booked badge, error state, rejected. |
| `--status-limited` | `#4A90D9` | Tech Blue | Limited badge, pending/neutral state. |

### onli.ai Accent

| Token | Hex | Usage |
|---|---|---|
| `--ai-accent` | `#5A6E8A` | Muted slate blue. Syn indicator dot, active inference state. Used exclusively in onli.ai contexts — never in other products. |

### Hard Color Rules

- **Never use pure black (`#000000`)** as a background or text color. Primary CTA buttons use `#1C1C1A`.
- **Never use pure white (`#FFFFFF`)** as a page background. White is a card surface only.
- **Never introduce accent colors** outside the defined palette — no brand purple, no teal, no blue (except `--ai-accent` in onli.ai contexts only).
- **No gradients. Anywhere. No exceptions.**
- Status colors (`#00C950`, `#FF6467`, `#4A90D9`) are the only colors permitted outside the surface and text palette.
- Color comes from photography, not UI chrome.

---

## Part 3 — Typography System

Two typefaces. No substitutions. No additions.

| Typeface | Role |
|---|---|
| **Playfair Display** | Display headlines, GSAP scroll reveal statements only. The brand's declarative voice. |
| **Inter** | All operational typography — body copy, UI, labels, nav, buttons, captions, code. |

### Playfair Display — Rules

| Role | Weight | Size | Line Height | Tracking | Case | Punctuation |
|---|---|---|---|---|---|---|
| Hero / Display | 400 Regular | 72–96px | 1.1 | -0.02em | Sentence case | Period-terminated |
| Section headline | 400 Regular | 48–64px | 1.15 | -0.01em | Sentence case | Period-terminated |
| Feature statement | 700 Bold | 40–56px | 1.2 | -0.01em | Sentence case | Period-terminated |
| GSAP scroll reveal | 400 Regular | 56–80px | 1.15 | -0.02em | Sentence case | Period-terminated |
| Pull quote | 400 Italic | 32–40px | 1.3 | 0em | Sentence case | No period |

**Hard rules:**
- Always sentence case. Never Title Case. Never ALL CAPS.
- Always period-terminated on declarative statements. This is the onli.ai typographic signature.
- Never below 32px rendered size.
- Never in buttons, pills, nav, or any UI element.
- Italic is reserved for pull quotes only — never in UI.
- The 400 Regular weight is the primary workhorse. 700 Bold used sparingly for maximum emphasis only.

### Inter — Rules

| Role | Weight | Size | Line Height | Tracking | Case |
|---|---|---|---|---|---|
| Large subheadline | 300 Light | 24–32px | 1.4 | -0.01em | Sentence case |
| Body copy primary | 300 Light | 17–18px | 1.75 | 0em | Sentence case |
| Body copy secondary | 400 Regular | 15–16px | 1.7 | 0em | Sentence case |
| Nav / wordmark label | 400 Regular | 14px | 1.0 | 0em | lowercase |
| Pill / tag / chip | 400 Regular | 12–13px | 1.0 | 0.01em | lowercase |
| Section marker / eyebrow | 400 Regular | 11–12px | 1.0 | 0.08em | lowercase |
| CTA button text | 500 Medium | 13–14px | 1.0 | 0.02em | lowercase |
| Pricing / numbers | 300 Light | 32–48px | 1.0 | -0.02em | — |
| Caption / metadata | 300 Light | 12–13px | 1.5 | 0em | Sentence case |
| Code / API | Mono 400 | 13px | 1.6 | 0em | lowercase |

**Hard rules:**
- Weights 200–300 are the luxury register — large subheadlines, pricing, editorial body copy.
- Weight 400 is the utility register — UI labels, nav, pills, buttons, captions.
- Weight 500 is used only in CTA buttons and the bold half of the wordmark.
- Weights 600–900 are **never used**. Contrast is Playfair Display's job.
- Nav, labels, pills, tags, and the wordmark are always lowercase. Non-negotiable.
- Letter spacing at `0.08em` for 11–12px eyebrow labels only. Never above 14px.
- Minimum font size: 11px. Never go below.

### Wordmark System

The rule applies to every onli.ai product without exception:

```
"onli" Inter 700  +  ".cloud" Inter 400   →   onli.cloud
"onli" Inter 700  +  ".you"   Inter 400   →   onli.you
"onli" Inter 700  +  ".ai"    Inter 400   →   onli.ai
"onli" Inter 700  +  ".one"   Inter 400   →   onli.one
```

- Always lowercase. No exceptions.
- The dot is the brand separator. It is structural, not decorative.
- The weight contrast (700 → 400) across the dot is the typographic fingerprint.
- Never italicize the wordmark. Never letter-space the wordmark.
- Minimum rendered height: 14px.

### Type Scale — Quick Reference

```
96px  Playfair Display  400  →  Hero display. Full-bleed moments.
72px  Playfair Display  400  →  Section hero. GSAP reveal entry.
56px  Playfair Display  400  →  GSAP scroll statements.
48px  Playfair Display  400  →  Section headlines.
40px  Playfair Display  700  →  Feature emphasis.
32px  Inter             300  →  Large subheadline / pricing display.
24px  Inter             300  →  Subheadline / intro copy.
18px  Inter             300  →  Primary body copy.
16px  Inter             400  →  Secondary body copy.
14px  Inter             400  →  Nav / wordmark / CTA buttons.
13px  Inter             400  →  Pills / tags / chips / code.
12px  Inter             300  →  Captions / metadata / eyebrows.
11px  Inter             400  →  Smallest UI labels. Floor. Never go below.
```

---

## Part 4 — Shape, Spacing & Buttons

### Border Radius

| Element | Radius | Usage |
|---|---|---|
| Interactive elements | 999px | All buttons, tags, chips, nav capsules. |
| Content containers | 16px | All cards, panels, pricing containers. |
| Form inputs | 8px | Text inputs, dropdowns, search fields. |
| 3D fan cards | 8px | Cards within the 3D perspective gallery. |

- No sharp corners (0px radius) on any UI element.
- No box shadows for elevation. Hierarchy is created through color, not shadow.
- No borders heavier than 1px.

### Button System

| Type | Specification |
|---|---|
| Primary CTA | `#1C1C1A` pill · white text · Inter 500 13–14px · lowercase · `→` suffix · 999px radius |
| Secondary / Ghost | Transparent bg · 1px border `#1C1C1A` · `#1C1C1A` text · Inter 500 · lowercase · 999px radius |
| Glass (nav context) | `rgba(28,28,26,0.55)` · `blur(12px)` · white text · 999px radius · light surfaces only |
| Premium (dark card) | `#FFFFFF` pill · `#1C1C1A` text · Inter 500 · lowercase · inverted for dark card context |

- All CTA buttons include an arrow suffix `→`.
- Button text is always lowercase.
- Playfair Display is never used in buttons.

### Glassmorphism

Glassmorphism appears in exactly two contexts. No others.

| Context | Background | Blur | Constraint |
|---|---|---|---|
| Nav pills (Effect 10) | `rgba(28,28,26,0.55)` | `blur(12px)` | Light surfaces only. Never on dark bg. |
| 3D fan glass cards (Effect 07) | `rgba(255,255,255,0.07)` | `blur(8px)` | Within 3D gallery context only. |

---

## Part 5 — Motion System

All animation is scroll-driven. No autoplay. No looping. Everything responds to the user. GSAP + ScrollTrigger is the only implementation stack.

### Core Motion Rules

- Scroll is the engine. Every animation is driven by scroll position, not timers or autoplay.
- One primary effect per section. Effects do not stack or compete within the same viewport.
- No linear easing on any visible transition. All motion uses `power2.out` or `power3.out`.
- No bounce, spring, or elastic easing.
- Maximum duration: 1.0s per element. Individual transitions: 0.3s–0.6s.

### Timing Reference

| Effect | Duration | Easing | Trigger |
|---|---|---|---|
| Word color reveal (per word) | `0.3s` | `power2.out` | Scroll — word at viewport center |
| Horizontal card translation | Direct 1:1 map | `none` | Scroll — continuous |
| Hero image scale | Over 60vh | `power2.inOut` | Scroll — page load |
| Background color transition | Over 20vh | `power1.inOut` | Scroll — section entry |
| Ghost heading opacity | Over 30vh | `power1.inOut` | Scroll — section entry |
| Carousel card transition | `0.5s` | `power2.inOut` | Click |
| 3D fan mouse parallax | Continuous | `lerp 0.08` | Mousemove |
| Grid stagger (per card) | `0.6s` | `power2.out` | Scroll — card enters viewport |
| Pill nav expand | `0.3s` | `power2.out` | Scroll — section entry |
| Button hover | `0.2s` | `ease` | Hover |

### Implementation Stack

- **GSAP** — core animation engine
- **GSAP ScrollTrigger** — scroll position mapping, pinning, section detection
- **CSS `transform`** — 3D perspective, scale, translate, rotate
- **CSS `backdrop-filter`** — glassmorphism
- **CSS `position: sticky`** — ghost heading overlay

---

## Part 6 — Image Brand Language

Every onli.ai image communicates inevitability and exclusivity. The viewer is approaching a threshold, not observing a scene.

### Visual Philosophy

- Real, grounded environments.
- Impossible, precise portal forms.
- One singular anonymous human subject.
- The moment before crossing — not the act, not the arrival.

### Non-Negotiable Rules

- Exactly one human subject per image.
- Human faces the portal, never the camera.
- Portal is the brightest element in the scene.
- Environment is subdued and minimal. No clutter, noise, or distraction.

### Portal System

**Primary form:** Perfect illuminated ring — clean uniform geometry, soft volumetric glow, floating or embedded.

**Secondary forms:**
- Tear in reality — soft rupture with light bleed.
- Energy path — guiding luminous line.
- Object-as-portal — monolithic structure.
- Architectural void — cut-out geometry emitting light.

### Environment & Lighting

| Property | Rule |
|---|---|
| Environment | Vast natural or minimal architectural spaces. Strong sense of scale. Clear depth when possible. |
| Key light | Portal is the key light source. Soft bloom and atmospheric diffusion. |
| Atmosphere | Subtle fog, dust, or mist for volumetric effect. Rapid falloff into shadow or haze. |
| Subject lighting | Rim-lit or silhouetted. Never front-lit. |
| Avoid | Multiple light sources. Harsh shadows. Stylized color lighting. |

### Photography & Scale

| Property | Rule |
|---|---|
| Camera angle | Eye-level or slightly low angle. Viewer positioned as participant. |
| Lens equivalent | 35mm to 50mm. Natural perspective. No wide-angle distortion. |
| Depth | Deep focus. Atmosphere provides softness, not lens blur. |
| Human scale | 5–15% of frame. |
| Portal scale | 30–70% of frame. Dominant. |
| Composition | Centered or near-centered. Strong symmetry or controlled imbalance. Leading lines toward portal. |

### Color — Imagery

- Environment: muted, desaturated.
- Portal: luminous neutral — white/gold baseline.
- No stylized color grading. No saturated environmental tones.

### The Test

> If it feels like a destination, it fails. If it feels like a spectacle, it fails. If it feels like an unavoidable threshold, it succeeds.

---

## Part 7 — What Never Happens

Hard violations of the onli.ai design language. No exceptions.

### Typography
- Playfair Display below 32px.
- Inter above weight 500.
- Title Case in any context.
- ALL CAPS in marketing or editorial copy.
- Playfair Display in buttons, pills, or nav.
- Letter spacing applied to Playfair Display.
- Letter spacing applied to Inter above 14px.
- The wordmark in any case other than lowercase.
- The wordmark italicized or letter-spaced.

### Color
- Pure black (`#000000`) as a background or text color.
- Pure white (`#FFFFFF`) as a page background.
- Any accent or brand color outside the defined palette.
- Gradients of any kind, anywhere.
- Box shadows for elevation.
- The retired warm parchment value `#EEEAE5` — use `#F6F6F6`.

### Shape & Layout
- Sharp corners (0px radius) on any UI element.
- Opening a page on a dark background.
- Closing a page on a dark background.
- More than two light/dark surface transitions per page.
- More than one glassmorphism context per page.
- Dropdown navigation menus.
- Hamburger menus.

### Motion
- Autoplay or looping animations.
- Bounce, spring, or elastic easing.
- Linear easing on visible transitions.
- Transitions longer than 1.0s.
- Multiple competing effects in the same viewport section.

### Imagery
- Stock photography.
- Abstract technology illustrations.
- CGI gradient sphere backgrounds.
- Screenshot-as-hero imagery.
- More than one human subject.
- Human subject facing the camera.

### Voice
- Blockchain, crypto, NFT, or token used affirmatively to describe onli.ai.
- Any Appliance described as holding, securing, or custodying user assets.
- Hedging language: "might," "possibly," "could potentially."
- "Access" used where "ownership" is architecturally correct.
- Generic CTAs: "Contact us today!" / "Learn more!" / "Get started now!"

---

## Part 8 — Quality Control Checklist

Run before shipping any onli.ai page, component, or interface.

### Foundation
- [ ] Page opens on cool gray `#F6F6F6`
- [ ] Page closes on cool gray `#F6F6F6`
- [ ] All colors from defined token set
- [ ] No gradients anywhere
- [ ] No pure black or pure white page backgrounds
- [ ] Maximum two light/dark surface transitions per page

### Typography
- [ ] All headlines: Playfair Display, sentence case, period-terminated
- [ ] All UI text: Inter, lowercase where specified
- [ ] No Inter above weight 500
- [ ] Wordmark lowercase with correct weight split (700 → 400)
- [ ] No letter spacing above 14px
- [ ] No Playfair Display below 32px

### Buttons & Navigation
- [ ] All buttons pill-shaped (999px radius)
- [ ] Button text lowercase
- [ ] Primary CTAs have arrow suffix (→)
- [ ] Nav uses dual-pill capsule or section tab system
- [ ] No hamburger menus. No dropdowns.

### Shape & Layout
- [ ] No sharp corners on any element
- [ ] Cards at 16px radius
- [ ] No box shadows for elevation

### Images
- [ ] All images from onli.ai brand library
- [ ] No stock photography
- [ ] Hero images follow portal system
- [ ] One human subject. Facing the portal.

### Motion
- [ ] All animations scroll-driven
- [ ] No autoplay or looping
- [ ] No bounce or elastic easing
- [ ] No effect duration longer than 1.0s
- [ ] Effects do not compete within the same viewport section

### Glassmorphism
- [ ] Used only for nav pills or 3D fan glass cards
- [ ] Light surfaces only
- [ ] Blur does not exceed `blur(16px)`

### Voice & Language
- [ ] Terms defined before use
- [ ] No blockchain, crypto, NFT, token used affirmatively
- [ ] "Ownership" not "access"
- [ ] No Appliance described as holding or custodying assets
- [ ] No hedging language
- [ ] Period-terminated on all Playfair Display declarative statements

---

## Quick Reference

```
SURFACES
  Base:            #F6F6F6   cool light gray — universal standard
  Dark:            #2A2A2A   dark charcoal
  Card:            #FFFFFF   white
  Panel:           #E5E5E5   panel gray
  Premium:         #2A2A2A   premium dark card
  Pill bg:         #EEEEEE   nav capsules / chips / tabs

TEXT — LIGHT SURFACES
  Heading:         #0A0A0A   H1/H2 maximum contrast
  Primary:         #1C1C1A   body and UI text
  Body:            #3A3A3A   card content
  Nav:             #2E2E2E   nav / interactive
  Hero tagline:    #8A7F75   warm brownish gray
  Muted:           #6F655C   captions / supporting
  Disabled:        #A1A1A1   footer / disabled

TEXT — DARK SURFACES
  Primary:         #FFFFFF
  Muted:           #6B6763

GSAP SCROLL REVEAL
  Rest light:      #C8C8C8   neutral gray
  Rest dark:       #4A4844
  Active light:    #0A0A0A
  Active dark:     #FFFFFF

STATUS
  Available:       #00C950   green
  Booked:          #FF6467   red
  Limited:         #4A90D9   tech blue

AI ACCENT (onli.ai only)
  Syn:             #5A6E8A   muted slate blue

FONTS
  Display:         Playfair Display 400 / 700  (sentence case, period-terminated)
  Everything:      Inter 300 / 400 / 500  (lowercase UI, sentence case body)

RADII
  Pill:            999px   all interactive elements
  Card:            16px    all content containers
  Input:           8px     form elements
  Fan card:        8px     3D gallery cards

BUTTONS
  Primary:         #1C1C1A pill · white text · lowercase · → suffix
  Secondary:       Ghost pill · outlined · lowercase
  Glass:           rgba(28,28,26,0.55) · blur(12px) · white text

MOTION
  Engine:          GSAP + ScrollTrigger
  Easing:          power2.out (default)
  Max duration:    1.0s per element
  Trigger:         Scroll only — no autoplay

GLASSMORPHISM
  Nav pills:       rgba(28,28,26,0.55) + blur(12px) — light surfaces only
  3D fan cards:    rgba(255,255,255,0.07) + blur(8px) — within 3D gallery only

WORDMARK
  Format:          onli[700].[product][400] — always lowercase
  Rule:            Dot is the brand separator. Weight split is the fingerprint.

THREE CATCHPHRASES (always in this order)
  Trust without chains.
  Possession without permission.
  Control without consensus.
```

---

*onli.ai Brand Manual — Version 1.1*
*Classification: Design Language — Master Reference*
*Applies to: All onli.ai products, websites, interfaces, AI systems, and authorized partner outputs.*
