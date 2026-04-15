# Lumière Menu Page - Complete Implementation Guide

## Files Required

| File | Purpose |
|------|---------|
| `menu.html` | Main menu page HTML |
| `assets/css/pages/menu.css` | All menu page specific styles |
| `assets/js/pages/menu.js` | Filter logic, view toggle, all menu interactions |
| `assets/images/hero/hero-menu.webp` | Menu page hero background |
| `assets/images/dishes/*` | All dish photography used on cards |

---

## Page Head Configuration

### Title
```
Lumière — The Menu | Fine Dining Restaurant
```

### Meta Description
```
Explore the Lumière menu — seasonal tasting menus, signature dishes and an exceptional wine list crafted by Chef Étienne Marchand.
```

### Global Elements
- Navbar container (loaded via component loader)
- Footer container (loaded via component loader)
- Back to top button
- Custom cursor
- Page loader
- All handled by `main.js` and core JS files

---

## Step 1: Page Hero Section

### Design & Layout
- Height: 55-65% of viewport height
- Background: `hero-menu.webp` (dark moody closeup of plated dish)
- Dark overlay: 65% opacity
- Content: Centered horizontally and vertically

### Content Structure
1. **Breadcrumb** (top): Small muted text
2. **Label**: Small uppercase gold "OUR MENU"
3. **Heading**: Large Cormorant Garamond "The Menu"
4. **Subheading**: DM Sans muted text
5. **Bottom separator**: 1px gold line at 40% opacity, full width

### Written Copy
```
Breadcrumb: Home → The Menu
Label: OUR MENU
Heading: The Menu
Subheading: Seasonal ingredients. Classical technique. Extraordinary flavour.
```

### Animation Timeline
| Element | Animation | Delay |
|---------|-----------|-------|
| Breadcrumb | Fade in (GSAP) | 0.3s |
| Gold label | Fade up (GSAP) | 0.5s |
| Main heading | Line reveal (Animation 1) | 0.7s |
| Subheading | Fade up (GSAP) | 1.0s |
| Gold line | ScaleX from center (GSAP) | 1.2s |

---

## Step 2: Menu Introduction Section

### Design & Layout
- Background: Dark (#0D0D0D)
- Height: ~200px
- Two columns with vertical gold line separator

### Content Structure

**Left Column:**
- Paragraph in Cormorant Garamond italic, cream color
- 2-3 sentences about menu philosophy

**Right Column:**
- Three stats stacked vertically
- Large number (Cormorant Garamond gold)
- Small label (DM Sans muted)

### Written Copy

**Left Column:**
```
Our menu is a living document — rewritten with the seasons, refined by experience, and guided always by the finest ingredients available to us. Chef Marchand changes the menu four times each year to honour what nature provides at its best.
```

**Right Column Stats:**
```
7 / Tasting Courses
30 / Years Experience
4 / Seasonal Changes
```

### Animation
- Vertical divider: ScaleY from 0 to 1 (GSAP ScrollTrigger)
- Left paragraph: Line reveal (Animation 1)
- Stats: Stagger from top to bottom (Animation 3) with 0.15s delay
- Numbers: CountUp.js on viewport enter

---

## Step 3: Category Filter Bar (Sticky)

### Design & Layout
- **Sticky behavior**: Fixes to top on scroll
- **Sticky state**: Darker background (#111111) + 1px gold bottom border (30% opacity)
- **Mobile**: Horizontally scrollable with gradient fade on right edge

### Filter Categories
```
All · Starters · Mains · Seafood · Cheese · Desserts · Drinks · Tasting Menus
```

### Category Mapping
| Tab | Shows |
|-----|-------|
| All | Every menu item |
| Starters | Starter dishes only |
| Mains | Main course dishes only |
| Seafood | Seafood special dishes only |
| Cheese | Cheese course items only |
| Desserts | Dessert dishes only |
| Drinks | Full drinks section |
| Tasting Menus | Tasting menu packages only |

### Filter Logic
- Each menu item has `data-category` attribute
- Active tab has gold underline that slides smoothly (CSS transition 0.3s)
- Cards fade out (opacity 0, scale 0.97) then matching cards fade in
- Transition: 0.25s using GSAP

### Technical Implementation
- Use IntersectionObserver + scroll event listener (not CSS `position: sticky` alone)
- Allows background and border style changes on activation
- Handled in `menu.js`

### Animation
- Filter bar: Fade in as unit after hero animations
- Category switch: Cards fade/scale out → matching cards fade/scale in (0.25s GSAP)
- Active tab underline: Smooth slide (0.3s CSS transition)

---

## Step 4: Starters Section

### Design & Layout
- Category heading: Left aligned, Cormorant Garamond, cream
- Gold ornamental line (40px) to left of heading
- Two column grid on desktop
- Horizontal cards (not square)

### Card Structure
**Left (35% width):**
- Square/portrait dish photo
- Hover: Zoom to 105% scale (0.5s transition)
- Subtle dark gradient on right edge

**Right (65% width):**
- Top row: Dish name (left, cream) + Price (right, gold)
- Description: DM Sans small muted (1-2 lines)
- Dietary badges: V, GF, VE, ★ (Chef's Special)
- Bottom: Thin gold separator line (20% opacity)

### Menu Items
```
Seared Scallops with Cauliflower Velouté — £24
Foie Gras Torchon with Brioche and Fig Compote — £28
Tuna Tartare with Avocado and Yuzu Gel — £22
Burrata with Heirloom Tomatoes and Aged Balsamic — £18
Lobster Bisque with Cognac Cream — £26
Wild Mushroom Velouté with Truffle Oil — £16
Smoked Salmon Roulade with Crème Fraîche and Caviar — £24
Beef Carpaccio with Shaved Parmesan and Rocket — £20
```

### Animation
- Heading: Slide from left (GSAP x: -30px to 0)
- Cards: Stagger fade up vertically (Animation 3) with 0.1s delay

---

## Step 5: Mains Section

### Design & Layout
- **Background**: Surface color (#1A1A18) for visual break
- Identical layout to Starters
- Left aligned heading + two column horizontal card grid

### Menu Items
```
Dry Aged Beef Fillet with Truffle Jus and Fondant Potato — £58
Roasted Lobster Tail with Bisque Foam and Caviar — £72
Pan Seared Duck Breast with Cherry Reduction and Celeriac Purée — £46
Rack of Lamb with Herb Crust and Rosemary Jus — £52
Black Truffle Risotto with Aged Parmesan — £38
Turbot Fillet with Champagne Beurre Blanc and Asparagus — £54
Wagyu Beef Sirloin with Bone Marrow Butter and Triple Cooked Chips — £85
Roasted Pigeon with Beetroot and Blackberry Sauce — £44
```

### Animation
- Identical to Starters
- Heading: Slide from left (GSAP)
- Cards: Stagger fade up vertically (Animation 3)

---

## Step 6: Seafood Specials Section

### Design & Layout
- **Different layout**: Full width single column (not grid)
- Each dish = wide horizontal row spanning full container
- More premium feel

### Row Structure
- Dish name (far left, Cormorant Garamond large)
- Thin dotted gold line (middle)
- Price (far right, Cormorant Garamond gold)
- Description below (DM Sans small muted)
- Gold separator line at bottom

### Intro Paragraph
```
Our seafood is sourced daily from trusted fishermen along the Cornish and Scottish coasts. What arrives each morning determines what you find on this page each evening.
```

### Menu Items
```
Whole Dover Sole Meunière with Brown Butter and Capers — £68
King Crab with Lemon Butter and Samphire — £85
Grilled Sea Bass with Saffron Velouté and Baby Fennel — £52
Tiger Prawns with Garlic Butter and Sourdough — £38
```

### Animation
- Heading: Slide from left (GSAP)
- Intro paragraph: Line reveal (Animation 1)
- Dish rows: Slide from right (GSAP x: 40px to 0) with 0.12s stagger
- Dotted lines: ScaleX from 0 to 1 after row appears

---

## Step 7: Cheese Course Section

### Design & Layout
- **Background**: Primary dark (#0D0D0D)
- Three column grid on desktop
- 5 items total: 3 on first row, 2 centered on second row
- **No photographs** - minimal design

### Card Structure
- Cheese name (Cormorant Garamond medium)
- Origin (DM Sans small muted italic)
- One line description
- Thin gold border (30% opacity)
- Generous padding
- Hover: Border → full gold opacity, name → gold color

### Note Below Grid
```
Our cheese selection changes with the seasons. Your sommelier will be delighted to recommend a wine pairing for each selection.
```

### Menu Items
```
Aged Comté — Franche-Comté, France
Nutty, rich and complex with a crystalline texture

Époisses — Burgundy, France
Washed rind, intensely creamy and pungent

Roquefort — Aveyron, France
Bold blue veins, salty and deeply mineral

Brie de Meaux — Île-de-France
Soft and buttery with a delicate mushroom rind

Kirkham's Lancashire — England
Crumbly, tangy and full of farmhouse character
```

### Animation
- Heading: Slide from left (GSAP)
- Cards: Stagger in reading order (Animation 3) with 0.12s delay
- Borders: Fade in after card appears

---

## Step 8: Desserts Section

### Design & Layout
- **Background**: Surface (#1A1A18) for alternating rhythm
- Two column horizontal card grid (like Starters/Mains)
- Images slightly taller to showcase plating
- Decorative gold ornament (✦) between heading and cards

### Menu Items
```
Dark Chocolate Sphere with Salted Caramel — £18
Deconstructed Lemon Tart with Torched Meringue — £16
Vanilla Crème Brûlée with Shortbread — £14
Raspberry Soufflé with Crème Anglaise — £18
Mango and Passion Fruit Pavlova — £15
Warm Valrhona Chocolate Fondant with Vanilla Ice Cream — £17
Île Flottante with Praline and Caramel — £14
Seasonal Fruit Tart with Crème Pâtissière — £15
```

### Animation
- Identical to Starters/Mains
- Heading: Slide from left (GSAP)
- Cards: Stagger fade up vertically (Animation 3)

---

## Step 9: Drinks Section

### Design & Layout
- **Complex section**: Multiple sub-categories
- Secondary tab bar below main heading
- Sub-tabs: Champagne · White Wine · Red Wine · Dessert Wine · Cocktails · Non Alcoholic

### Sub-Tab Behavior
- Active sub-tab: Gold underline
- Inactive: Muted color
- Same filter logic as main category bar
- Switches drink items shown below

### Row Layout
- Same as Seafood section
- Full width rows: Name (left) + dotted line + price (right)
- Description below in italic muted text (region, vintage, notes)

### Animation
- Sub-tab bar: Fade in as unit (GSAP)
- Drink items: Slide from right with stagger (like Seafood)

---

## Step 10: Tasting Menus Section

### Design & Layout
- **Most premium section**
- Full width dark image background (`private-dining.webp`)
- Heavy dark overlay (80% opacity)
- Three cards side by side on desktop

### Card Structure
- Thin gold border (50% opacity)
- Hover: Border → full opacity + subtle gold glow (box-shadow)
- Small gold label at top (uppercase)
- Large course number (Cormorant Garamond gold)
- "Courses" label below (DM Sans small)
- Price per person (Cormorant Garamond cream)
- Gold separator line
- Numbered course list (DM Sans small muted)
- Full width outlined gold button: "Reserve This Menu"

### Special Feature
- **Middle card**: Slightly taller + "MOST POPULAR" gold badge at top

### Section Intro
```
Label: THE TASTING EXPERIENCE
Heading: Let the Kitchen Guide You
Subheading: "Surrender the menu to us and allow Chef Marchand to take you on a journey through the very best of what our kitchen has to offer this season."
```

### Menu Packages
```
THE LUMIÈRE EXPERIENCE
7 Courses — £145 per person

THE CHEF'S PRESTIGE MENU (MOST POPULAR)
10 Courses — £210 per person

THE VEGETARIAN JOURNEY
6 Courses — £115 per person
```

### Animation
- Heading: Line reveal (Animation 1)
- Subheading: Fade up after heading
- Cards: Stagger left to right (Animation 3) with 0.2s delay
- Card borders: Fade from 0 to 50% opacity as card appears

---

## Step 11: Allergen & Dietary Notice Section

### Design & Layout
- Dark background
- Centered layout
- Thin gold line at top
- Small heading (DM Sans uppercase muted)
- Paragraph below
- Four badge icons in row with labels

### Written Copy
```
Heading: DIETARY REQUIREMENTS AND ALLERGENS

Paragraph: Our team is happy to accommodate dietary requirements and allergies with advance notice. Please inform your server of any requirements before ordering. All our dishes are prepared in a kitchen that handles nuts, gluten, dairy and shellfish.

Badge Labels:
V — Vegetarian
VE — Vegan
GF — Gluten Free
★ — Chef's Special
```

### Animation
- Entire section: Fade up as unit (AOS fade-up)
- No complex animation needed (informational section)

---

## Step 12: Reservation CTA Banner

### Design & Layout
- Uses `reservation-cta.html` component (loaded via component loader)
- Identical across all pages
- Atmospheric background + dark overlay
- Centered heading: "Reserve Your Evening"
- Outlined gold button

### Animation
- Banner: Fade up as unit (AOS)
- Heading: Line reveal (Animation 1) on viewport enter
- Button: Scale from 0.95 to 1.0 with fade after heading

---

## Animation Summary Table

| Section | Animation Type | Tool |
|---------|---------------|------|
| Page hero - heading | Line reveal on load | Animation 1 |
| Page hero - gold line | ScaleX draw from center | GSAP |
| Menu intro - paragraph | Line reveal on scroll | Animation 1 |
| Menu intro - stats | Stagger top to bottom + CountUp | Animation 3 |
| Menu intro - divider | ScaleY draw top to bottom | GSAP |
| Filter bar | Fade in as unit | GSAP |
| Filter bar - active tab | Smooth slide between tabs | CSS transition |
| Filter category transition | Cards fade/scale out then in | GSAP |
| Starters - heading | Slide from left | GSAP |
| Starters - cards | Stagger fade up vertical | Animation 3 |
| Mains - heading | Slide from left | GSAP |
| Mains - cards | Stagger fade up vertical | Animation 3 |
| Seafood - heading | Slide from left | GSAP |
| Seafood - intro | Line reveal | Animation 1 |
| Seafood - rows | Slide from right with stagger | GSAP |
| Seafood - dotted lines | ScaleX draw after row | GSAP |
| Cheese - heading | Slide from left | GSAP |
| Cheese - cards | Stagger reading order | Animation 3 |
| Desserts - heading | Slide from left | GSAP |
| Desserts - cards | Stagger fade up vertical | Animation 3 |
| Drinks - sub tabs | Fade in as unit | GSAP |
| Drinks - rows | Slide from right with stagger | GSAP |
| Tasting menus - heading | Line reveal | Animation 1 |
| Tasting menus - quote | Fade up after heading | GSAP |
| Tasting menus - cards | Stagger left to right | Animation 3 |
| Tasting menus - borders | Fade 0 to 50% opacity | GSAP |
| Allergen section | Fade up as unit | AOS |
| CTA banner | Fade up + heading line reveal | AOS + Animation 1 |

---

## Mobile Behavior Summary

| Element | Desktop | Mobile |
|---------|---------|--------|
| Filter bar | Centered horizontal sticky | Horizontally scrollable sticky |
| Menu item cards | Two column grid | Single column stacked |
| Seafood rows | Full width single column | Full width (unchanged) |
| Cheese cards | Three column grid | Two column grid |
| Tasting menu cards | Three column side by side | Single column stacked |
| Drinks sub tabs | Horizontal row | Horizontally scrollable |
| Tasting card heights | Center card taller | All equal height |
| Slide animations | 30px movement | 15px movement |
| Stagger delays | 0.12-0.15s | 0.08-0.1s |
| Parallax effects | Active | Disabled |

---

## Sticky Filter Bar Technical Details

### Behavior
1. **Initial state**: Natural position below menu intro
2. **On scroll**: When bar reaches viewport top → becomes fixed
3. **Sticky state**: Add CSS class via JavaScript
   - Background: `#111111`
   - Bottom border: `1px solid gold` at 30% opacity
4. **Scroll up**: Returns to natural flow, sticky styles removed

### Implementation
- **Use**: IntersectionObserver + scroll event listener
- **Not**: CSS `position: sticky` alone
- **Why**: Allows background and border style changes on activation
- **File**: `menu.js`

---

## Notes

- All animations use GSAP, AOS, or CSS transitions as specified
- Animation 1 = Line reveal animation
- Animation 3 = Stagger fade up animation
- CountUp.js used for numeric stats
- All sections use ScrollTrigger for viewport-based animations
- Mobile-first approach with progressive enhancement
