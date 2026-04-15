# Lumière About Page — Complete Implementation Guide

## Overview

The About page tells the story of Lumière through a carefully structured narrative journey: origin story, statistics, chef profile, philosophy, provenance, kitchen atmosphere, team, accolades, and final welcome.

---

## Files Required

| File | Purpose |
|------|---------|
| `about.html` | Main about page HTML |
| `assets/css/pages/about.css` | About page specific styles |
| `assets/js/pages/about.js` | Counter animations, timeline interactions, scroll effects |
| `assets/images/hero/hero-about.webp` | About page hero background |
| `assets/images/about/chef-portrait.webp` | Head chef portrait image |
| `assets/images/about/kitchen-action.webp` | Kitchen in action atmospheric shot |
| `assets/images/about/restaurant-interior.webp` | Restaurant interior wide shot |
| `assets/images/about/provenance-farm.webp` | Supplier / provenance atmospheric image |
| `assets/images/about/team-dining-room.webp` | Front of house team in dining room |

---

## Page Head Configuration

**Page Title:**
```
Lumière — Our Story | Fine Dining Mayfair
```

**Meta Description:**
```
Discover the story behind Lumière. From our philosophy of provenance-led cooking to the passionate team behind every dish — learn what makes Lumière one of London's most celebrated fine dining restaurants.
```

**Additional Requirements:**
- No additional CDN links needed beyond global page loads
- Navbar, footer, custom cursor, page loader, and back-to-top button all load globally
- Reservation CTA banner component loads before footer (as on all pages except reservations.html)

---

## Section 1 — Page Hero

### Design & Layout

- Height: 55-65% of viewport height (shorter than homepage)
- Background: `hero-about.webp` — moody, low-lit dining room shot from entrance
- Overlay: Dark at 65% opacity (lighter than reservations page for storytelling atmosphere)
- Content: Horizontally and vertically centered

### Content Structure (Top to Bottom)

1. Breadcrumb — small muted DM Sans text
2. Gold label — uppercase with wide letter spacing
3. Main heading — large Cormorant Garamond
4. Subheading — single line DM Sans muted cream
5. Thin gold horizontal line — full content width separator

### Written Copy

```
Breadcrumb: Home → Our Story
Label: OUR STORY
Heading: The Art of the Table
Subheading: Fine dining rooted in provenance, craft and a singular obsession with excellence.
```

### Animation Sequence

| Element | Animation | Timing |
|---------|-----------|--------|
| Breadcrumb | Fade in | 0.3s after page loader exits |
| Gold label | Fade up | 0.5s |
| Main heading | Animation 1 line reveal | 0.7s |
| Subheading | Fade up | 1.0s |
| Gold bottom line | GSAP scaleX from 0 to 1 (center outward) | 1.2s |

---

## Section 2 — Origin Story (The Beginning)

### Design & Layout

- Background: Dark primary `#0D0D0D`
- Layout: Two column split (50/50) on desktop
- Left column: Full-height image `restaurant-interior.webp` (flush, no border)
- Right column: Text content
- Divider: 1px gold vertical line at 20% opacity between columns (fades top to bottom)

### Right Column Content Structure

1. Gold ornamental symbol: `✦`
2. Gold label: `ESTABLISHED 2019`
3. Section heading: Large Cormorant Garamond
4. Two paragraphs: DM Sans muted cream body text
5. Thin gold divider: 60px decorative rule at 20% opacity
6. Pull quote: Large Cormorant Garamond italic cream

### Written Copy

```
Ornament: ✦
Label: ESTABLISHED 2019
Heading: Born From a Single Belief

Paragraph 1:
"Lumière began not as a business plan but as a belief — that the finest ingredients, treated with absolute respect, need nothing more than skilled hands and a quiet kitchen to become something extraordinary. That belief has guided every decision we have made since opening our doors on Mount Street in the autumn of 2019."

Paragraph 2:
"What started as twelve tables and a team of seven has grown into one of Mayfair's most intimate and admired dining rooms. We have never sought scale. We have always sought depth — in flavour, in craft, in the relationships we build with the farmers, fishermen and producers who make everything we do possible."

Pull Quote:
"We have never sought scale. We have always sought depth."
```

### Animation Sequence

| Element | Animation | Details |
|---------|-----------|---------|
| Left image | Slide in from left with fade | GSAP x from -60px to 0, ScrollTrigger |
| Gold vertical divider | Draw downward | GSAP scaleY from 0 to 1 at 0.8s |
| Ornament | Fade in | First on right column |
| Label, heading, paragraphs | Stagger from right | Animation 3, 0.15s stagger |
| Pull quote | Fade in with scale | Scale from 1.02 to 1.0 (settling effect) |

---

## Section 3 — Headline Statistics

### Design & Layout

- Background: Surface `#1A1A18`
- Layout: Four statistics in single row on desktop
- Separator: Thin gold vertical line at 15% opacity between each stat
- Treatment: No cards or borders — stats float on background

### Four Statistics

| Number | Label |
|--------|-------|
| 5 | Years of Excellence |
| 2 | AA Rosettes Awarded |
| 98% | Guest Return Rate |
| 40+ | Artisan Producers |

### Number Styling

- Numbers: Large Cormorant Garamond gold
- Labels: Small DM Sans uppercase muted cream with wide letter spacing

### Counter Animation

- Count up from 0 to final value
- Duration: 2 seconds with easeOut curve
- Trigger: ScrollTrigger when section enters viewport
- Note: `%` and `+` symbols appear instantly (not counted)

### Animation Sequence

1. Section fades in as whole when entering viewport
2. Each statistic staggers in from below (Animation 3, 0.15s stagger left to right)
3. Counter animation begins 0.3s after statistic appears

---

## Section 4 — The Chef (Chef Profile)

### Design & Layout

- Background: Dark primary `#0D0D0D`
- Layout: Two column split — REVERSED from Section 2
- Left column: 55% width — text content
- Right column: 45% width — chef portrait image
- Image treatment: Thin gold border at 25% opacity, subtle gold drop shadow at 8% opacity
- Image filter: `filter: sepia(0.08) brightness(0.95)` for warm photographic quality

### Left Column Content Structure

1. Gold ornamental symbol: `✦`
2. Gold label: `EXECUTIVE CHEF`
3. Large heading: Chef name in Cormorant Garamond
4. Subtitle: Role in DM Sans small muted gold
5. Thin 60px gold decorative rule at 20% opacity
6. Three paragraphs: DM Sans muted cream body text
7. Three accolade badges row

### Written Copy

```
Ornament: ✦
Label: EXECUTIVE CHEF
Heading: Thomas Renard
Subtitle: Executive Chef & Founder

Paragraph 1:
"Thomas Renard spent twelve years in some of Europe's most exacting kitchens before returning to London with a single ambition: to open the restaurant he had always wanted to eat in. Trained under two Michelin-starred chefs in Lyon and later in Copenhagen, his approach is shaped by classical French rigour softened by a deep respect for British seasonal produce."

Paragraph 2:
"At Lumière, Thomas cooks the food he believes in rather than the food the industry expects of him. The menu changes with the seasons not as a marketing exercise but because he refuses to use an ingredient before it has reached its full potential. That discipline is what our guests return for."

Paragraph 3:
"When he is not in the kitchen, Thomas is visiting the farms and fisheries that supply Lumière — relationships built over years of mutual respect and shared standards. He believes the dining room is simply the final stage of a much longer process that begins in the field."
```

### Three Accolade Badges

| Icon | Title | Year |
|------|-------|------|
| Lucide Award | AA Rosette Award | 2021 |
| Lucide Star | Square Meal Top 100 | 2023 |
| Lucide Trophy | London Food Awards | 2024 |

### Animation Sequence

| Element | Animation | Details |
|---------|-----------|---------|
| Text content column | Stagger from left | Animation 3 |
| Chef portrait | Slide in from right with fade | GSAP x from +60px to 0 |
| Accolade badges | Scale in staggered | 0.85 to 1.0, 0.15s stagger (micro stagger pattern) |

---

## Section 5 — Our Philosophy

### Design & Layout

- Background: Surface `#1A1A18`
- Layout: Centered single column (no image — editorial quality)
- Content: Centered heading block + three column grid + full width pull quote

### Centered Heading Block

1. Gold ornamental symbol: `✦`
2. Gold label: `OUR PHILOSOPHY`
3. Large centered heading: Cormorant Garamond
4. Thin 80px gold decorative rule at 30% opacity (centered)

### Three Philosophy Pillars (Grid Layout)

Each pillar contains:
- Lucide icon at top (centered, gold)
- Heading in Cormorant Garamond cream
- 2-3 lines DM Sans small muted text
- Thin vertical gold line at 15% opacity separates each pillar

### Written Copy

```
Ornament: ✦
Label: OUR PHILOSOPHY
Heading: What We Believe
```

**Pillar 1 — Provenance**
```
Icon: Lucide MapPin
Heading: Provenance Above All
Text: Every ingredient on our menu has a name, a place and a story. We source exclusively from British and European artisan producers whose values mirror our own. Knowing where food comes from is not a trend for us — it is the foundation of everything we cook.
```

**Pillar 2 — Seasonality**
```
Icon: Lucide Leaf
Heading: In Season, Always
Text: Our menu exists in a state of constant renewal. We do not serve strawberries in January or asparagus in October. We follow the calendar of the land and the sea, and we believe that constraint is the mother of creativity in the kitchen.
```

**Pillar 3 — Restraint**
```
Icon: Lucide Minus (or Sparkles)
Heading: The Discipline of Less
Text: Fine dining is not about complexity for its own sake. At Lumière we believe in removing everything that does not serve the ingredient. The best dish is the one where every element belongs — and not one element more.
```

**Full Width Pull Quote:**
```
Quote: "The finest cooking is not about what you add. It is about what you have the confidence to leave out."
Attribution: — Thomas Renard, Executive Chef
```

### Animation Sequence

1. Section label and heading stagger in from below (viewport entry)
2. Decorative rule draws outward from center
3. Three pillars stagger left to right (Animation 3, 0.2s stagger)
   - Icons scale from 0.8 to 1.0 first
   - Then heading and text appear
4. Pull quote fades in last with gentle upward movement

---

## Section 6 — Provenance & Suppliers

### Design & Layout

- Background: Dark primary `#0D0D0D`
- Layout: Two column split on desktop
- Left column: 45% width — atmospheric image `provenance-farm.webp`
- Right column: 55% width — text content + supplier list
- Image treatment: Warm tone filter `filter: sepia(0.08) brightness(0.92)`
- Image fills full column height with `object-fit: cover`

### Right Column Content Structure

1. Gold ornament: `✦`
2. Gold label: `OUR PRODUCERS`
3. Large heading: Cormorant Garamond
4. Two paragraphs: DM Sans muted cream body text
5. Five featured suppliers list

### Supplier Row Design

Each row contains:
- Small gold horizontal rule (bullet)
- Supplier name: Cormorant Garamond cream medium
- Thin vertical separator
- Type & location: DM Sans small muted text
- Full width gold line at 15% opacity separates each row

### Written Copy

```
Ornament: ✦
Label: OUR PRODUCERS
Heading: Sourced With Purpose

Paragraph 1:
"Every producer on our supplier list was chosen after a visit — not a phone call, not a brochure, not a sales pitch. Thomas or a senior member of the kitchen team has stood on the land, seen the animals, tasted the produce and looked the grower in the eye. That is the standard we hold ourselves to."

Paragraph 2:
"We publish our producers openly because we believe transparency in sourcing is part of the hospitality we offer. When you ask your server where the beef is from, they will tell you the farm, the county and the farmer's name."
```

### Five Featured Suppliers

| Supplier Name | Type & Location |
|---------------|-----------------|
| Swaledale Foods | Rare breed beef — North Yorkshire |
| Brixham Day Boats | Day-caught fish — Devon Coast |
| Natoora | Heritage vegetables — London & Italy |
| Ampersand Farm | Free range eggs & poultry — Suffolk |
| Neal's Yard Dairy | Artisan British cheese — Borough Market |

### Animation Sequence

| Element | Animation | Details |
|---------|-----------|---------|
| Image | Slide in from left with fade | ScrollTrigger |
| Right column content | Stagger from right | Animation 3 |
| Supplier rows | Stagger top to bottom | 0.1s stagger |
| Row separator lines | Draw left to right | GSAP scaleX from 0 to 1 after each row appears |

---

## Section 7 — The Kitchen (Behind the Scenes)

### Design & Layout

- Background: Surface `#1A1A18`
- Background image: `kitchen-action.webp` — kitchen in service with motion blur
- Overlay: Dark at 72% opacity
- Height: Full viewport height minus 100px
- Content: Centered horizontally and vertically
- Treatment: Sparse visual breath — minimal content, maximum atmosphere

### Content Structure

1. Gold label: `IN THE KITCHEN`
2. Large centered heading: Cormorant Garamond
3. Single line: DM Sans muted cream
4. Thin gold bottom line: Full content width

### Written Copy

```
Label: IN THE KITCHEN
Heading: Where the Work Happens
Line: Every plate that leaves our kitchen has passed through hands that care about it.
```

### Animation Sequence

| Element | Animation | Details |
|---------|-----------|---------|
| Background image | Subtle parallax | Animation 2 at 15% scroll speed |
| Label, heading, line | Stagger from below | 0.2s stagger between each, viewport entry |
| Gold bottom line | Draw from center outward | Last element |

---

## Section 8 — The Team

### Design & Layout

- Background: Dark primary `#0D0D0D`
- Layout: Centered heading block + four column grid (desktop) / horizontal scroll (mobile)
- Card background: Dark surface `#1A1A18`
- Card border: Thin gold at 15% opacity
- Card padding: 32px

### Centered Heading Block

1. Gold ornament: `✦`
2. Gold label: `THE TEAM`
3. Large heading: Cormorant Garamond
4. Single line: DM Sans muted text

### Heading Copy

```
Ornament: ✦
Label: THE TEAM
Heading: The People Behind the Experience
Line: From the kitchen pass to the dining room floor — every member of our team shares the same standard.
```

### Team Card Structure

Each card contains:
- Circular portrait image with thin gold ring border
- Name: Cormorant Garamond cream medium
- Role: DM Sans small muted gold uppercase
- Single sentence: DM Sans small muted cream

### Hover Effect

- Border opacity: 15% → 40%
- Name color: Cream → Gold
- Transition: 0.3s

### Four Team Members

**Card 1 — Thomas Renard**
```
Role: EXECUTIVE CHEF & FOUNDER
Line: Twenty years in fine dining kitchens across France, Denmark and the United Kingdom.
```

**Card 2 — Sophie Aldridge**
```
Role: HEAD PASTRY CHEF
Line: Former sous chef at a two Michelin-starred restaurant in Edinburgh. Specialises in French classical patisserie.
```

**Card 3 — James Whitfield**
```
Role: RESTAURANT MANAGER
Line: Fifteen years front of house experience across London's most respected dining rooms.
```

**Card 4 — Amara Diallo**
```
Role: HEAD SOMMELIER
Line: WSET Diploma holder. Curates our wine list with a focus on small growers and low-intervention producers.
```

### Animation Sequence

1. Centered heading block staggers in from below (viewport entry)
2. Four team cards stagger from below (Animation 3, 0.15s stagger left to right)
3. Card portraits scale from 0.9 to 1.0 with card arrival (single unit animation)

---

## Section 9 — Accolades & Press

### Design & Layout

- Background: Surface `#1A1A18`
- Two parts: Award badges (top) + Press quote cards (bottom)

### Part 1 — Award Badges

- Layout: Five badges in centered row (desktop) / 3 then 2 grid (mobile)
- Badge style: Circular or square dark card `#0D0D0D` with thin gold border at 25% opacity
- Badge content: Lucide icon (gold) + award title (Cormorant Garamond cream small) + year (DM Sans muted)

### Five Award Badges

| Icon | Award | Year |
|------|-------|------|
| Lucide Award | AA Two Rosettes | 2022 |
| Lucide Star | Square Meal Top 100 | 2023 |
| Lucide Trophy | London Restaurant Awards | 2024 |
| Lucide BookOpen | Harden's London Guide | 2024 |
| Lucide ThumbsUp | Tripadvisor Travellers Choice | 2024 |

### Part 2 — Press Quote Cards

- Layout: Three cards in row (desktop) / single column stacked (mobile)
- Card style: Dark surface `#0D0D0D`, thin gold border at 15% opacity, 32px padding
- Card content: Large gold opening quotation mark + quote text (Cormorant Garamond italic cream) + publication (DM Sans small muted uppercase gold)

### Three Press Quotes

**Quote 1:**
```
Quote: "One of the most quietly confident restaurants in London. The cooking speaks for itself."
Publication: — The Guardian
```

**Quote 2:**
```
Quote: "Lumière is proof that restraint in the kitchen, when paired with truly exceptional produce, is the most exciting thing happening in Mayfair dining."
Publication: — Evening Standard
```

**Quote 3:**
```
Quote: "The kind of restaurant you want to keep to yourself. Intimate, precise and deeply pleasurable."
Publication: — Square Meal
```

### Animation Sequence

| Element | Animation | Details |
|---------|-----------|---------|
| Award badges | Scale in staggered | 0.85 to 1.0, 0.12s stagger |
| Press quote cards | Stagger from below | Animation 3, 0.2s stagger |
| Opening quotation mark | Fade in before quote | 0.1s lead time |

---

## Section 10 — The Dining Room

### Design & Layout

- Background: Dark primary `#0D0D0D`
- Background image: `team-dining-room.webp` — front of house team in set dining room before service
- Overlay: Dark at 68% opacity
- Height: 70% of viewport height
- Content: Centered (no cards, no columns — pure image and copy)

### Content Structure

1. Gold label: Uppercase
2. Large heading: Cormorant Garamond
3. Two short lines: DM Sans muted cream

### Written Copy

```
Label: THE DINING ROOM
Heading: Ready When You Are.
Line 1: An experience designed around you, from the moment you arrive to the moment you leave.
Line 2: We look forward to welcoming you to Lumière.
```

### Animation Sequence

| Element | Animation | Details |
|---------|-----------|---------|
| Background | Subtle parallax | Animation 2 at 15% scroll speed |
| Label, heading, lines | Stagger from below | 0.2s stagger between each |

---

## Mobile Responsive Behavior

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero | Centered single column | Unchanged |
| Section 2 — Origin story | Two column (image left, text right) | Single column (image above text) |
| Section 3 — Statistics | Four in a row | Two by two grid |
| Section 4 — Chef profile | Two column (text left, image right) | Single column (image above text) |
| Section 5 — Philosophy pillars | Three column grid | Single column stacked |
| Section 6 — Provenance | Two column (image left, text right) | Single column (image above text) |
| Section 7 — Kitchen | Full bleed centered | Unchanged |
| Section 8 — Team cards | Four column grid | Horizontal scroll row |
| Section 9 — Award badges | Five in a row | Three then two grid |
| Section 9 — Press quotes | Three column grid | Single column stacked |
| Section 10 — Dining room | Full bleed centered | Unchanged |
| Pull quotes | Large centered | Slightly smaller, still centered |
| Section padding | 100px top and bottom | 60px top and bottom |
| Slide animations | 60px movement | 30px movement |
| Stagger delays | 0.15 seconds | 0.08 seconds |
| Parallax sections | Active | Disabled |
| Counter animations | Active | Active |

---

## Complete Animation Reference

| Section | Element | Animation Type | Details |
|---------|---------|----------------|---------|
| Hero | Label | Fade up | 0.5s |
| Hero | Heading | Line reveal | Animation 1 at 0.7s |
| Hero | Subheading | Fade up | 1.0s |
| Hero | Gold line | ScaleX draw from center | GSAP |
| Section 2 | Image | Slide from left with fade | GSAP ScrollTrigger |
| Section 2 | Gold divider | Draw down scaleY | GSAP |
| Section 2 | Text content | Stagger from right | Animation 3 |
| Section 2 | Pull quote | Scale from 1.02 to 1.0 with fade | GSAP |
| Section 3 | Statistics | Stagger from below | Animation 3 |
| Section 3 | Counters | Count up from zero | JS counter + GSAP |
| Section 4 | Text content | Stagger from left | Animation 3 |
| Section 4 | Chef portrait | Slide from right with fade | GSAP ScrollTrigger |
| Section 4 | Accolade badges | Scale in staggered | GSAP micro stagger |
| Section 5 | Pillar icons | Scale from 0.8 to 1.0 | GSAP micro stagger |
| Section 5 | Pillars | Stagger left to right | Animation 3 |
| Section 5 | Pull quote | Fade up last | GSAP |
| Section 6 | Image | Slide from left | GSAP ScrollTrigger |
| Section 6 | Text content | Stagger from right | Animation 3 |
| Section 6 | Supplier rows | Stagger top to bottom | Animation 3 |
| Section 6 | Row dividers | ScaleX draw left to right | GSAP |
| Section 7 | Background | Subtle parallax 15% | Animation 2 |
| Section 7 | Content | Stagger from below | Animation 3 |
| Section 8 | Team cards | Stagger from below | Animation 3 |
| Section 8 | Card portraits | Scale from 0.9 to 1.0 | GSAP |
| Section 9 | Award badges | Scale from 0.85 to 1.0 staggered | GSAP |
| Section 9 | Press quotes | Stagger from below | Animation 3 |
| Section 9 | Quote marks | Fade in before quote text | GSAP |
| Section 10 | Background | Subtle parallax 15% | Animation 2 |
| Section 10 | Content | Stagger from below | Animation 3 |

---

## Implementation Steps

### Step 1: Prepare Image Assets

Create the `lumiere/assets/images/about/` directory and add placeholder images:
- `chef-portrait.webp`
- `kitchen-action.webp`
- `restaurant-interior.webp`
- `provenance-farm.webp`
- `team-dining-room.webp`

Also add to hero directory:
- `lumiere/assets/images/hero/hero-about.webp`

### Step 2: Build HTML Structure

Create `about.html` with:
- Proper page head configuration (title, meta description)
- Global component containers (navbar, footer)
- All 10 sections with semantic HTML structure
- Lucide icon placeholders
- Image src attributes pointing to correct paths
- Reservation CTA banner before footer

### Step 3: Style the Page

Create `assets/css/pages/about.css` with:
- Hero styling with background image and overlay
- Two-column layouts for Sections 2, 4, 6
- Statistics grid layout
- Philosophy pillars grid
- Team cards grid with hover effects
- Award badges styling
- Press quote cards styling
- Full-bleed atmospheric sections (7, 10)
- Mobile responsive breakpoints
- Image filters and treatments

### Step 4: Implement JavaScript

Create `assets/js/pages/about.js` with:
- Counter animation for statistics (count up from 0)
- ScrollTrigger setup for all sections
- GSAP animations for staggers, slides, scales
- Parallax effects for Sections 7 and 10
- Hero entrance sequence
- Mobile detection for animation adjustments

### Step 5: Test & Refine

- Test all animations on scroll
- Verify counter animations trigger correctly
- Check mobile responsive behavior
- Test hover effects on team cards
- Validate image loading and filters
- Ensure smooth transitions between sections

---

## Key Design Principles

1. **Alternating Rhythm:** Sections alternate between dark primary `#0D0D0D` and surface `#1A1A18` backgrounds
2. **Image Position Variation:** Two-column sections alternate image left/right to create visual flow
3. **Warm Photography:** All portrait and atmospheric images use subtle sepia filters for cohesive warmth
4. **Editorial Pacing:** Section 5 (Philosophy) has no image — forces focus on words
5. **Atmospheric Breaks:** Sections 7 and 10 are full-bleed immersive moments with minimal text
6. **Consistent Ornaments:** Gold `✦` symbol appears at the start of major narrative sections
7. **Pull Quotes:** Used strategically to anchor emotional beats in Sections 2 and 5

---

## Animation Reference Codes

- **Animation 1:** Line reveal (used for hero heading)
- **Animation 2:** Parallax scroll effect (used for full-bleed background sections)
- **Animation 3:** Stagger in from direction (used for most content blocks)
- **Micro Stagger:** Small scale-in animations for badges and icons (0.85 to 1.0 scale)
- **Counter Animation:** JavaScript count-up from 0 to target number with easeOut curve

---

## Notes for Implementation

- All animations trigger via GSAP ScrollTrigger when sections enter viewport
- Counter animations in Section 3 require custom JavaScript function
- Image filters should be applied via CSS for performance
- Mobile parallax should be disabled to prevent performance issues
- Supplier list rows should be semantic `<ul>` or `<ol>` for accessibility
- Team member portraits need proper alt text
- Press quotes should use semantic `<blockquote>` elements
- All gold ornamental symbols should be actual Unicode characters, not images
