# Complete Detailed Breakdown of the Lumière Gallery Page

## Step 1: Prepare Files Needed for the Gallery Page

| File | Purpose |
|------|---------|
| `gallery.html` | Main gallery page HTML |
| `assets/css/pages/gallery.css` | All gallery page specific styles |
| `assets/js/pages/gallery.js` | Filter logic, lightbox, masonry layout, all GSAP animations |
| `assets/images/hero/hero-gallery.webp` | Gallery page hero background |
| `assets/images/gallery/food-01.webp` | Hero dish — signature amuse bouche |
| `assets/images/gallery/food-02.webp` | Main course plating — beef |
| `assets/images/gallery/food-03.webp` | Dessert close-up — chocolate |
| `assets/images/gallery/food-04.webp` | Starter — scallop dish |
| `assets/images/gallery/food-05.webp` | Bread and butter service |
| `assets/images/gallery/food-06.webp` | Chef's tasting menu dish |
| `assets/images/gallery/interior-01.webp` | Full dining room — wide shot |
| `assets/images/gallery/interior-02.webp` | Single candlelit table setting |
| `assets/images/gallery/interior-03.webp` | Bar and reception area |
| `assets/images/gallery/interior-04.webp` | Private dining room |
| `assets/images/gallery/interior-05.webp` | Detail — glassware and cutlery |
| `assets/images/gallery/kitchen-01.webp` | Chef at the pass — action shot |
| `assets/images/gallery/kitchen-02.webp` | Kitchen team in service |
| `assets/images/gallery/kitchen-03.webp` | Close-up — plating in progress |
| `assets/images/gallery/events-01.webp` | Private dining event setup |
| `assets/images/gallery/events-02.webp` | Champagne and canapé reception |
| `assets/images/gallery/events-03.webp` | Table flowers and centrepiece detail |

---

## Step 2: Page Head Details & Global Elements

### Page Head Details
- **Page Title:** `Lumière — Gallery | Fine Dining Mayfair`
- **Meta Description:** `Step inside Lumière. Browse our gallery of dishes, interiors, kitchen moments and private dining events — a visual portrait of London's most intimate fine dining experience.`
- **CDNs:** No additional CDN links are needed beyond what loads globally. All animation is handled by the globally loaded GSAP and ScrollTrigger libraries.

### Global Elements
- Navbar container and footer container load via component loader exactly as every other page.
- Custom cursor, page loader and back to top button are all present.
- The reservation CTA banner component loads before the footer as it does on all pages except `reservations.html`.

---

## Step 3: Section 1 — Page Hero

### Design and Layout
- **Height:** Shorter hero — approximately 55 to 60 percent of viewport height.
- **Background:** `hero-gallery.webp` — a dramatic overhead flat-lay of a fully set table at Lumière. Candles lit, glassware catching light, a single dish centred on the plate. Shot directly from above.
- **Overlay:** Dark overlay at 60 percent opacity — lighter than most inner page heroes because the detail in this image is itself part of the visual story.
- Everything inside the hero is centred horizontally and vertically. 

The layout from top to bottom inside the hero content area is:
1. A small breadcrumb in muted small DM Sans text showing Home with a thin chevron arrow then Gallery in cream.
2. Below the breadcrumb a small uppercase gold label in wide letter spacing reading THE GALLERY.
3. Below the label the main page heading in large Cormorant Garamond reading A Visual Portrait of Lumière.
4. Below the heading a single line in DM Sans muted cream text reading Every image tells the story of a meal, a moment, or the hands that made it.
5. At the very bottom of the hero the same thin gold horizontal line draws across the full content width from centre outward.

### Written Copy
- **Breadcrumb:** Home → Gallery
- **Label:** THE GALLERY
- **Heading:** A Visual Portrait of Lumière
- **Subheading:** Every image tells the story of a meal, a moment, or the hands that made it.

### Animation
- Breadcrumb fades in at 0.3 seconds.
- Gold label fades up at 0.5 seconds.
- Heading does Animation 1 line reveal at 0.7 seconds.
- Subheading fades up at 1.0 seconds.
- Gold bottom line draws from centre outward at 1.2 seconds using GSAP scaleX 0 to 1.

---

## Step 4: Section 2 — Filter Bar

### Design and Layout
This section sits directly below the hero with zero gap — it is part of the transition into the gallery grid. 
- **Background:** Dark primary `#0D0D0D`. 
- **Filter Bar:** A single horizontal row of filter buttons centred on the page. It sticks to the top of the viewport when the user scrolls past it — `position: sticky; top: 72px` — sitting just below the navbar. A very subtle backdrop blur and dark background at 90 percent opacity is applied when the filter bar is in sticky mode so it does not become unreadable against gallery images scrolling underneath it.

The filter buttons are five in total. They are not full buttons — they are minimal pill-shaped text toggles. Each pill has a transparent background, a thin border in gold at 25 percent opacity, and text in DM Sans small uppercase muted cream with wide letter spacing. 
- **Active state:** The active filter pill has a gold border at full opacity, gold text, and a very subtle gold background at 8 percent opacity. 
- **Hover state:** On hover a non-active pill transitions its border from 25 percent to 60 percent opacity and the text transitions from muted cream to full cream. All transitions take 0.25 seconds.

### Five Filter Options:
| Filter Label | Shows |
|--------------|-------|
| ALL | Every image in the grid |
| CUISINE | food-01 through food-06 |
| INTERIORS | interior-01 through interior-05 |
| KITCHEN | kitchen-01 through kitchen-03 |
| EVENTS | events-01 through events-03 |

A thin gold horizontal line at 20 percent opacity sits below the filter bar row acting as its bottom border. When in sticky mode this line becomes part of the sticky bar.

### Filter Interaction Behaviour
When a filter button is clicked the grid responds immediately. Images that do not belong to the selected category scale down to 0.95 and fade to opacity 0 over 0.3 seconds using GSAP, then their layout space collapses smoothly — not a jarring jump, a smooth height transition over 0.4 seconds. Images that belong to the selected category fade in and scale from 0.95 to 1.0 over 0.4 seconds. ALL is selected by default on page load.

### Animation
The entire filter bar fades up from below as one unit using GSAP `y` from 20px to 0 with opacity 0 to 1, triggered 0.2 seconds after the hero gold line animation completes. Each pill staggers in individually with 0.08 second stagger left to right after the bar has appeared.

---

## Step 5: Section 3 — The Gallery Grid

### Design and Layout
This is the heart of the page. Dark primary background `#0D0D0D`. The gallery grid uses a pure CSS masonry layout achieved with CSS `columns` property.
- **Columns:** Three columns on desktop, two columns on tablet, one column on mobile. 
- **Gap:** The column gap is 16px. 
- Each image sits inside a wrapper div with 16px bottom margin creating a brick-like staggered layout. This approach is reliable, performant and avoids the complexity of JavaScript masonry libraries.

Each image wrapper contains two elements — the image itself and an overlay that appears on hover. The image fills 100 percent of the wrapper width and its natural height — no forced aspect ratio, no cropping at the wrapper level. The image itself uses `object-fit: cover` only on mobile where a forced minimum height is applied to keep the grid consistent. On desktop images display at their natural proportions.

### The Hover Overlay
On hover over any image a dark overlay fades in over the image — background `#0D0D0D` at 65 percent opacity — over 0.3 seconds. On top of the overlay two things appear: 
1. A small Lucide ZoomIn icon centred in gold that scales in from 0.5 to 1.0 over 0.25 seconds
2. Below the icon a short image caption in DM Sans small muted cream text that fades up from y 8px to 0. 

The cursor changes to a custom zoom cursor — the site's custom cursor changes to a gold ring with a plus symbol inside when hovering over gallery images, reinforcing that clicking will open the image.
The image itself does a very subtle scale from 1.0 to 1.04 on hover over 0.4 seconds. The scale is applied to the image element, not the wrapper, so the overflow is clipped at the wrapper level with `overflow: hidden`.

### Image Captions for Each Image:
| File | Caption |
|------|---------|
| `food-01.webp` | Amuse bouche — celeriac velouté |
| `food-02.webp` | Dry-aged beef, bone marrow, shallot |
| `food-03.webp` | Valrhona chocolate, salted caramel, hazelnut |
| `food-04.webp` | Hand-dived scallop, cauliflower, roe butter |
| `food-05.webp` | Sourdough, cultured butter, sea salt |
| `food-06.webp` | Chef's tasting menu — autumn edition |
| `interior-01.webp` | The dining room — set for service |
| `interior-02.webp` | Table for two — candlelit |
| `interior-03.webp` | The reception and bar |
| `interior-04.webp` | The private dining room |
| `interior-05.webp` | Detail — crystal, silver and linen |
| `kitchen-01.webp` | Chef Thomas Renard at the pass |
| `kitchen-02.webp` | The kitchen brigade — Friday service |
| `kitchen-03.webp` | Plating the tasting menu |
| `events-01.webp` | Private dining — corporate dinner |
| `events-02.webp` | Champagne reception — Mount Street |
| `events-03.webp` | Table arrangement — private event |

### Grid Entry Animation — THE PREMIUM SCROLL ANIMATION
This is where the gallery page earns its reputation for top-tier animation. Each image in the grid uses a staggered ScrollTrigger reveal. The animation is built on three layers working together simultaneously:

- **Layer 1 — The Clip Path Reveal:** Each image wrapper starts with `clip-path: inset(100% 0 0 0)` — completely invisible. As the ScrollTrigger fires the clip path animates to `inset(0% 0 0 0)` over 0.9 seconds using GSAP with a `power3.out` ease.
- **Layer 2 — The Image Counter-Move:** Simultaneously the image itself starts slightly below its natural position — `y: 40px` — and travels upward to `y: 0` over 1.1 seconds with `power3.out` ease. The 0.2 second duration difference between the clip and the image movement creates a depth effect.
- **Layer 3 — The Stagger:** Within each visible row of the grid the images stagger with 0.12 seconds between each column. ScrollTrigger start point is "top 90%".

The combined result: Images rise cleanly into the page one after another in a rolling wave as the visitor scrolls.

---

## Step 6: Section 4 — Lightbox Overlay

### Design and Layout
The lightbox is a full-screen overlay that sits above everything at `z-index: 9999`. It is hidden by default (`display: none; opacity: 0`) and only activates when a gallery image is clicked. The lightbox is built entirely in vanilla JavaScript.

### Lightbox Structure
- A full viewport dark overlay — background `#0D0D0D` at 95 percent opacity with a very subtle backdrop blur of 4px.
- Centred inside the overlay the active image displays at maximum size while maintaining its aspect ratio — capped at 90 percent viewport height and 85 percent viewport width. The image sits inside a container with a very thin gold border at 20 percent opacity and a subtle dark box shadow. No border radius.

### Lightbox Controls
- **Top right corner:** a close button. A thin gold X drawn with two CSS lines. 32px by 32px. On hover the X rotates 90 degrees over 0.3 seconds. Clicking outside the image also closes the lightbox.
- **Left and right sides:** previous and next arrow buttons. 48px diameter with a dark surface background `#1A1A18`, a thin gold border at 30 percent opacity, and a Lucide ChevronLeft/ChevronRight icon in gold. On hover shift 4px in direction of travel over 0.2 seconds. The arrows only navigate within the currently active filter category.
- **Bottom:** A small strip containing the image caption on the left and an image counter on the right showing the current image position within the active filtered set (e.g. 4 / 6).

### Animations
- **Lightbox Open:** Overlay fades in from opacity 0 to 0.95 over 0.3 seconds. Selected image scales in from 0.88 to 1.0 over 0.5 seconds using `power3.out` ease. Close button and arrows fade in 0.2 seconds after the image. Caption and counter slide up from y 10px to 0 over 0.3 seconds.
- **Lightbox Close:** Image scales back from 1.0 to 0.92 over 0.3 seconds, overlay fades out simultaneously.
- **Lightbox Navigate:** Outgoing image slides out left/right (`x` ±60px) fading to opacity 0 over 0.25 seconds. Incoming image slides in from opposite direction fading to opacity 1 over 0.35 seconds.

### Keyboard Support
- Left arrow key — previous image.
- Right arrow key — next image.
- Escape key — close lightbox.

---

## Step 7: Section 5 — Featured Image (Full Bleed Break)

### Design and Layout
This section sits approximately two thirds of the way down the gallery grid. It is a full viewport width atmospheric pause — a single hero-scale featured image with text overlay, breaking the rhythm of the masonry grid.
- **Height:** 65 percent of viewport height. 
- **Background:** `interior-01.webp` — the full wide dining room shot. Dark overlay at 70 percent opacity. 
- Content is centred both horizontally and vertically. No buttons. No labels. Just the image and the words.

### Written Copy
- **Ornament:** `✦`
- **Heading:** Designed for the Evening.
- **Line:** Every detail of this room was considered with one guest in mind — you.

### Animation
- Background does Animation 2 parallax at 20 percent scroll speed.
- Ornament fades in first.
- Heading does Animation 1 line reveal.
- Single line fades up after the heading completes. All triggered by ScrollTrigger with `start: "top 60%"`.

---

## Step 8: Section 6 — Instagram Strip (Social Proof)

### Design and Layout
Surface background `#1A1A18`.
- **Centred Text Block:** Small uppercase gold label reading FOLLOW THE STORY. Below it a short line in Cormorant Garamond cream medium reading Behind the scenes, daily on Instagram. Below that a small DM Sans muted text line reading @lumiere.mayfair styled as a gold text link.
- **Five Square Image Previews:** Five equal-width square image containers displayed in a single row on desktop — on mobile the row scrolls horizontally. Each square has a dark hover overlay with a Lucide Instagram icon centred in gold fading in on hover. Thin gold border at 15 percent opacity. Images used: `food-01`, `interior-02`, `kitchen-01`, `events-01`, `food-03`.

### Animation
The centred text block fades up from below. The five image squares stagger in from the right using Animation 3 with 0.1 second stagger (`x` 30px to 0).

---

## Step 9: Complete CSS Architecture Notes for `gallery.css`

The following CSS rules are critical:

**Masonry Grid:**
```css
.gallery-grid {
  columns: 3;
  column-gap: 16px;
}
.gallery-item {
  break-inside: avoid;
  margin-bottom: 16px;
  overflow: hidden;
  position: relative;
}
```

**Clip Path Initial State:**
Every `.gallery-item` must start with `clip-path: inset(100% 0 0 0)` set via JavaScript before the animation runs — not in CSS — so that images without JavaScript still display correctly.

**Image Scale on Hover:**
```css
.gallery-item img {
  width: 100%;
  display: block;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}
.gallery-item:hover img {
  transform: scale(1.04);
}
```

**Lightbox:**
The lightbox overlay must have `position: fixed`. Body scroll must be locked when open (`overflow: hidden` on body).

**Filter Transition:**
Hidden filtered items use `display: none` after the GSAP fade-out completes.
- Sequence hide: GSAP fade to opacity 0 → then set `display: none`. 
- Sequence show: set `display: block` first → then GSAP fade to opacity 1.

**GPU Acceleration:**
Every gallery item must have `will-change: transform, opacity` applied before GSAP animation and removed after in the onComplete callback.

---

## Step 10: Complete JS Architecture Notes for `gallery.js`

1. **Initial State Setup:**
On DOMContentLoaded use `gsap.set()` to apply the initial clip-path state and y offset to every gallery item.
2. **Filter Logic:**
Add click event listeners to filter pills. On click: update active pill, determine show/hide, run GSAP transition. Store active filter in variable.
3. **ScrollTrigger Reveal:**
Create ScrollTrigger for each gallery item. Use `gsap.timeline()` per item with clip path reveal and image counter-move running simultaneously.
4. **Lightbox:**
Build the lightbox HTML dynamically and append it to body hidden. On click limit navigation to the active category and configure animations + keyboard controls.
5. **Hover Overlays:**
Add `mouseenter` / `mouseleave` event listeners to gallery items for overlay, zoom icon and caption fades using GSAP.

*Performance Note:*
```javascript
// ScrollTrigger.refresh() must be called after any filter change that alters grid height
```

---

## Step 11: Mobile Behaviour Summary

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero | Centred single column | Unchanged |
| Filter bar | Single row all five pills | Horizontally scrollable row |
| Filter bar sticky | Sticky at 72px | Sticky at 60px |
| Gallery grid | Three column masonry | Single column |
| Gallery grid gap | 16px | 12px |
| Image hover overlay | Full hover overlay | Tap to show overlay, tap again to open lightbox |
| Image scale on hover | 1.04 scale | Disabled — tap only |
| Clip path reveal | Full animation | Full animation unchanged |
| Image counter-move | y 40px to 0 | y 20px to 0 |
| Stagger delay between columns | 0.12 seconds | 0 — single column stacks sequentially |
| Lightbox | Full viewport centred | Full viewport — image fills width |
| Lightbox arrows | Left and right sides | Bottom left and right of image |
| Featured image break section | 65vh height | 50vh height |
| Featured image parallax | Active 20 percent | Disabled |
| Instagram strip | Five in a row | Horizontal scroll snap |
| Section padding | 100px top and bottom | 60px top and bottom |
| All GSAP y movements | 40px | 20px |
| Stagger delays | 0.12 seconds | 0.06 seconds |

---

## Step 12: Full Animation Summary

| Section | Animation | Type | Ease | Duration |
|---------|-----------|------|------|----------|
| Hero — breadcrumb | Fade in | GSAP | `power2.out` | 0.6s |
| Hero — label | Fade up | GSAP | `power2.out` | 0.6s |
| Hero — heading | Line reveal | Animation 1 | `power3.out` | 0.9s |
| Hero — subheading | Fade up | GSAP | `power2.out` | 0.6s |
| Hero — gold line | ScaleX centre outward | GSAP | `power2.inOut` | 0.8s |
| Filter bar | Fade up as unit | GSAP | `power2.out` | 0.5s |
| Filter pills | Stagger left to right | GSAP | `power2.out` | 0.08s stagger |
| Gallery items — clip path | inset 100% to inset 0% | GSAP | `power3.out` | 0.9s |
| Gallery items — image rise | y 40 to 0 | GSAP | `power3.out` | 1.1s |
| Gallery items — stagger | Column offset | ScrollTrigger | — | 0.12s stagger |
| Filter hide | Scale 0.95 + fade out | GSAP | `power2.in` | 0.3s |
| Filter show | Scale 0.95 to 1 + fade in | GSAP | `power2.out` | 0.4s |
| Hover overlay | Opacity 0 to 0.65 | GSAP | `power2.out` | 0.3s |
| Hover zoom icon | Scale 0.5 to 1 | GSAP | `back.out` | 0.25s |
| Hover caption | y 8 to 0 + fade | GSAP | `power2.out` | 0.25s |
| Image scale on hover | 1.0 to 1.04 | CSS transition | cubic-bezier | 0.4s |
| Lightbox open — overlay | Opacity 0 to 0.95 | GSAP | `power2.out` | 0.3s |
| Lightbox open — image | Scale 0.88 to 1 + fade | GSAP | `power3.out` | 0.5s |
| Lightbox open — controls | Fade in delayed | GSAP | `power2.out` | 0.3s |
| Lightbox open — caption | y 10 to 0 + fade | GSAP | `power2.out` | 0.3s |
| Lightbox close — image | Scale 1 to 0.92 + fade | GSAP | `power2.in` | 0.3s |
| Lightbox navigate out | x 0 to ±60 + fade | GSAP | `power2.in` | 0.25s |
| Lightbox navigate in | x ±60 to 0 + fade | GSAP | `power2.out` | 0.35s |
| Lightbox X button hover | Rotate 90deg | CSS transition | ease | 0.3s |
| Featured image — background| Parallax 20 percent | Animation 2 | — | scroll-driven |
| Featured image — ornament | Fade in | GSAP | `power2.out` | 0.5s |
| Featured image — heading | Line reveal | Animation 1 | `power3.out` | 0.9s |
| Featured image — line | Fade up | GSAP | `power2.out` | 0.6s |
| Instagram text block | Fade up from below | GSAP | `power2.out` | 0.6s |
| Instagram squares | Stagger from right | Animation 3 | `power3.out` | 0.1s stagger |
