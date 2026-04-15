# Lumière Reservations Page — Implementation Guide

This guide provides a complete breakdown of the reservations page structure, design, and functionality.

---

## Files Required

| File | Purpose |
|------|---------|
| `reservations.html` | Main reservations page HTML |
| `assets/css/pages/reservations.css` | All reservations page specific styles |
| `assets/js/pages/reservations.js` | Flatpickr setup, guest stepper, form validation, success message |
| `assets/js/components/form-handler.js` | Generic form submission and success message logic |
| `assets/images/hero/hero-reservations.webp` | Reservations page hero background |
| `assets/images/interior/private-dining.webp` | Used in private dining CTA section |

---

## Page Head Configuration

**Page Title:**
```
Lumière — Reserve a Table | Fine Dining Restaurant
```

**Meta Description:**
```
Reserve your table at Lumière. Experience award-winning fine dining in the heart of Mayfair. Book online or contact us directly for private dining enquiries.
```

**Additional CDN Link:**
The Flatpickr CSS file must be included in the head. This should only load on this page since no other page uses the date picker.

---

## Global Elements

All standard global elements are present:
- Navbar container (loaded via component loader)
- Footer container (loaded via component loader)
- Custom cursor
- Page loader
- Back to top button

All handled by `main.js` and core JS files.

---

## Step-by-Step Section Breakdown

### Step 1: Build the Page Hero Section

**Design Specifications:**
- Height: 50-60% of viewport height (shorter than homepage hero)
- Background: `hero-reservations.webp` (elegantly set dining table at night with candles)
- Overlay: Dark at 70% opacity (heavier than other pages for better text readability)
- Alignment: All content centered horizontally and vertically

**Content Structure (top to bottom):**

1. **Breadcrumb Navigation**
   - Small muted DM Sans text
   - Text: "Home → Reserve a Table"

2. **Gold Label**
   - Small uppercase with wide letter spacing
   - Text: "RESERVATIONS"

3. **Main Heading**
   - Large Cormorant Garamond
   - Text: "Reserve Your Table"

4. **Subheading**
   - DM Sans muted text
   - Text: "We look forward to welcoming you to Lumière."

5. **Trust Indicators**
   - Two items displayed side by side
   - Left: Lucide Calendar icon + "Instant Confirmation"
   - Right: Lucide Phone icon + "Or call us — +44 20 0000 0000"
   - Small DM Sans muted text with gold icons

6. **Bottom Separator**
   - Thin gold horizontal line across full content width

**Animation Sequence:**
- 0.3s: Breadcrumb fades in
- 0.5s: Gold label fades up
- 0.7s: Main heading (Animation 1 line reveal)
- 1.0s: Subheading fades up
- 1.2s: Trust items fade in together
- 1.4s: Gold line draws from center outward (GSAP scaleX 0 to 1)

---

### Step 2: Build the Reservation Form Section

**Section Layout:**
- Background: Dark primary `#0D0D0D`
- Desktop: Two column split (55% left / 45% right)
- Mobile: Single column stacked (form first, info below)

#### Left Column — The Reservation Form

**Form Card Styling:**
- Background: `#1A1A18`
- Border: Thin gold at 20% opacity
- Padding: 48px all sides (desktop) / 24px (mobile)
- Box shadow: Subtle gold glow at 5% opacity

**Form Header:**
- Heading: "Make a Reservation" (Cormorant Garamond, cream)
- Subtext: "Complete the details below and we will confirm your reservation by email." (DM Sans, small, muted)

**Form Field Groups:**

**Group 1 — Personal Details**
- Full Name (left) + Email Address (right)
- Side by side on desktop, stacked on mobile

**Group 2 — Contact**
- Phone Number (left) + Number of Guests (right)
- Guest field is a custom stepper:
  - Minus button (left) | Number display (center) | Plus button (right)
  - Min: 1, Max: 12
  - Buttons: Square outlined gold
  - Number: Cormorant Garamond medium size gold

**Group 3 — Date and Time**
- Date (left) + Time (right)
- Date field: Flatpickr with dark luxury theme
  - Past dates disabled and greyed out
  - Gold highlights on selected dates
  - Gold hover states
- Time field: Custom styled dropdown
  - Options: 6:00 PM to 10:30 PM (30-minute intervals)
  - Dark panel with gold hover states

**Group 4 — Occasion**
- Full width custom styled dropdown
- Options: Birthday, Anniversary, Business Dinner, Romantic Dinner, Proposal, Celebration, Other
- Lucide ChevronDown icon on right

**Group 5 — Special Requests**
- Full width textarea
- Placeholder: "Please share any dietary requirements, allergies, seating preferences, or special arrangements we should know about."
- Min height: 120px (auto-resize vertically)
- Character counter: Bottom right corner "0 of 500" (updates in real time)
- Border transitions from gold 20% to 100% opacity on focus

**Universal Field Styling:**
- Background: Transparent
- Border: Bottom border only (1px gold at 30% opacity) — underline style
- On focus: Border transitions to full gold opacity with subtle glow below
- Label: Small uppercase DM Sans muted text above field
- Label on focus: Transitions from muted grey to gold

**Submit Button:**
- Full width, 56px height
- Outlined gold border, transparent background
- Text: "Confirm Reservation" with Lucide ArrowRight icon
- Hover: Fills with gold, text turns dark `#0D0D0D`, arrow slides right
- Transition: 0.3s

**Below Submit Button:**
- Small muted centered text: "A confirmation will be sent to your email address. We typically confirm within 30 minutes."

#### Right Column — Supporting Information

Four blocks stacked vertically (no card background):

**Block 1 — Opening Hours**
- Label: "OPENING HOURS" (gold)
- Days listed with hours in two-column layout
- Today's day automatically highlighted in gold via JavaScript
- Hours:
  ```
  Monday          Closed
  Tuesday         Closed
  Wednesday       6:00 PM — 11:00 PM
  Thursday        6:00 PM — 11:00 PM
  Friday          5:30 PM — 11:30 PM
  Saturday        5:30 PM — 11:30 PM
  Sunday          6:00 PM — 10:30 PM
  ```

**Block 2 — Location**
- Label: "FIND US" (gold)
- Address in DM Sans cream:
  ```
  12 Mount Street
  Mayfair, London
  W1K 2TN
  United Kingdom
  ```
- Link: "Get Directions" with Lucide ExternalLink icon → Google Maps

**Block 3 — Contact**
- Label: "CONTACT US" (gold)
- Phone: Lucide Phone icon + "+44 20 7000 0000" (tel: link)
- Email: Lucide Mail icon + "reservations@lumiere.co.uk" (mailto: link)

**Block 4 — Dress Code and Policy**
- Label: "GOOD TO KNOW" (gold)
- Three bullet points (gold bullets):
  - Smart casual dress code observed
  - 24 hours notice required for cancellations
  - Groups of 8 or more — please contact us directly

**Section Animation:**
- Form card: Slides in from left (x: -40px to 0) with fade (ScrollTrigger)
- Form border: Fades from 0 to 20% opacity
- Right column blocks: Stagger in from right (Animation 3, 0.15s delay between blocks)

---

### Step 3: Build the Reservation Policies Section

**Design Specifications:**
- Background: Surface `#1A1A18`
- Layout: Three columns on desktop, stacked on mobile

**Three Policy Columns:**

**Column 1 — Cancellation Policy**
- Icon: Lucide CalendarX (gold)
- Heading: "Cancellations" (Cormorant Garamond, cream)
- Text: "We kindly ask for a minimum of 24 hours notice for cancellations or amendments. For groups of six or more we require 48 hours notice. To cancel or amend a reservation please call us directly."

**Column 2 — Dress Code**
- Icon: Lucide Shirt (gold)
- Heading: "Dress Code" (Cormorant Garamond, cream)
- Text: "We observe a smart casual dress code throughout the restaurant. We ask that guests refrain from sportswear, trainers and casual shorts. For private dining events formal dress is appreciated."

**Column 3 — Large Groups**
- Icon: Lucide Users (gold)
- Heading: "Groups and Private Dining" (Cormorant Garamond, cream)
- Text: "For parties of eight or more guests we ask that you contact us directly by telephone or email rather than using the online booking form. Our events team will be delighted to assist you."

**Animation:**
- All three columns stagger in left to right (Animation 3, 0.2s stagger)
- Icons scale from 0.8 to 1.0 before heading and text appear (micro stagger)

---

### Step 4: Build the Private Dining CTA Section

**Design Specifications:**
- Background: `private-dining.webp` (exclusive private dining room)
- Overlay: Dark at 75% opacity (heavy for text readability)
- Layout: Split — left half content, right half empty (lets image breathe)

**Left Half Content:**

1. **Gold Ornament**
   - Symbol: ✦

2. **Gold Label**
   - Text: "PRIVATE DINING" (uppercase)

3. **Heading**
   - Text: "Planning Something Special?" (Cormorant Garamond, large)

4. **Paragraph**
   - Text: "For intimate celebrations, corporate dinners and exclusive events, our private dining room accommodates up to 20 guests. Our events team will work with you to create an experience tailored entirely to your occasion."
   - Style: DM Sans, muted cream

5. **Action Buttons (stacked vertically)**
   - Primary: "Enquire About Private Dining" → `events.html` (outlined gold button)
   - Secondary: "Or call our events team — +44 20 7000 0001" (text link)

**Animation:**
- Background: Subtle parallax (Animation 2, 20% scroll speed)
- Ornament: Fades in first
- Label: Fades up
- Heading: Line reveal (Animation 1)
- Paragraph: Fades up after heading
- Buttons: Scale from 0.95 to 1.0 with fade (0.2s stagger)

**Mobile Behavior:**
- Full width centered content
- Parallax disabled

---

### Step 5: Implement the Success Message Overlay

**Behavior:**
- Hidden by default
- Appears after successful form submission
- Replaces form card (form fades out, success fades in)
- No page reload

**Success Card Styling:**
- Same dimensions and styling as form card
- Background: `#1A1A18`
- Gold border at 20% opacity

**Content Structure (top to bottom):**

1. **Success Icon**
   - Lucide CheckCircle (gold, large, centered)

2. **Heading**
   - Text: "Your Reservation is Confirmed" (Cormorant Garamond)

3. **Confirmation Paragraph**
   - Text: "Thank you for choosing Lumière. A confirmation has been sent to your email address. Our team will contact you within 30 minutes to personally confirm your booking. We look forward to welcoming you."
   - Style: DM Sans, muted

4. **Divider**
   - Thin gold horizontal line

5. **Booking Summary**
   - Two-column layout (label left muted, value right cream)
   - Rows: Name, Date, Time, Guests, Occasion

6. **Reset Button**
   - Text: "Make Another Reservation" (outlined gold)
   - Action: Resets form and shows it again

**Animation:**
- Form card: Fades to opacity 0 (0.4s)
- Success card: Fades in from opacity 0 (0.5s)
- Check icon: Scales 0 to 1 with bounce (GSAP elastic ease)
- Heading: Quick line reveal
- Booking rows: Stagger top to bottom (0.1s delay per row)

---

### Step 6: Implement Form Validation

**Validation Rules and Error Messages:**

| Field | Validation Rule | Error Message |
|-------|----------------|---------------|
| Full Name | Required, minimum 2 characters | "Please enter your full name" |
| Email | Required, valid email format | "Please enter a valid email address" |
| Phone | Required, minimum 10 digits | "Please enter a valid phone number" |
| Guests | Required, between 1 and 12 | "Please select number of guests" |
| Date | Required, cannot be past date | "Please select a valid date" |
| Time | Required | "Please select a preferred time" |
| Occasion | Optional | No error needed |
| Special Requests | Optional, maximum 500 characters | "Maximum 500 characters reached" |

**Error Message Styling:**
- Position: Directly below field
- Font: Small DM Sans
- Color: Muted red (desaturated warm red, not harsh bright red)
- Field border: Transitions to same muted red
- Animation: Fades in (GSAP opacity 0 to 1)
- Resolution: Fades out when corrected, border returns to gold

**Submission State:**
- Button text changes to "Confirming..."
- Small spinning loader appears inside button
- Button disabled during submission (prevents double submission)
- After 1.5s: Success message appears (simulated — replace with real API call)

---

### Step 7: Style the Flatpickr Dark Theme

The Flatpickr calendar must match the Lumière dark luxury aesthetic.

**Flatpickr Custom Styling (in `reservations.css`):**

- Calendar popup background: `#1A1A18`
- Header background: `#0D0D0D`
- Navigation arrows: Gold
- Month/year text: Cream Cormorant Garamond
- Day of week labels: Small muted DM Sans uppercase
- Day numbers: Cream DM Sans
- Hover state: Gold background at 20% opacity
- Selected date: Full gold background with dark text
- Today's date: Subtle gold underline (doesn't compete with selection)
- Disabled past dates: 30% opacity, no hover effect
- Border: Thin gold at 30% opacity
- Shadow: Subtle dark box shadow

---

### Step 8: Configure Mobile Responsiveness

**Mobile Behavior Changes:**

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero trust items | Side by side | Stacked vertically |
| Form and info columns | Two column (55% / 45%) | Single column stacked (form first) |
| Form field groups | Two fields side by side | Single column stacked |
| Guest stepper | Inline with phone field | Full width row below phone |
| Date and time fields | Side by side | Stacked vertically |
| Policy columns | Three column grid | Single column stacked |
| Private dining CTA | Split layout | Full width centered |
| Form card padding | 48px all sides | 24px all sides |
| Right column info blocks | In right column | Below form |
| Flatpickr calendar | Standard size | Full width of screen |
| Slide animations | 40px movement | 20px movement |
| Stagger delays | 0.15s | 0.08s |
| Private dining parallax | Active at 20% | Disabled |

---

### Step 9: Implement All Animations

**Hero Section Animations:**
- 0.3s: Breadcrumb fades in (GSAP)
- 0.5s: Label fades up (GSAP)
- 0.7s: Heading line reveal (Animation 1)
- 1.0s: Subheading fades up (GSAP)
- 1.2s: Trust items fade in together (GSAP)
- 1.4s: Gold line draws from center (GSAP scaleX)

**Form Section Animations:**
- Form card: Slides in from left with fade (GSAP ScrollTrigger, x: -40px to 0)
- Form border: Fades from 0 to 20% opacity (GSAP)
- Right column blocks: Stagger in from right (Animation 3, 0.15s delay)

**Policy Section Animations:**
- Columns: Stagger left to right (Animation 3, 0.2s stagger)
- Icons: Scale from 0.8 to 1.0 before text (GSAP micro stagger)

**Private Dining Section Animations:**
- Background: Subtle parallax (Animation 2, 20% scroll speed)
- Ornament: Fades in first
- Label: Fades up
- Heading: Line reveal (Animation 1)
- Paragraph: Fades up after heading
- Buttons: Scale from 0.95 to 1.0 with fade (0.2s stagger)

**Success Message Animations:**
- Form exit: Fades to opacity 0 (0.4s)
- Card entrance: Fades in from opacity 0 (0.5s)
- Check icon: Scales 0 to 1 with elastic bounce (GSAP elastic ease)
- Heading: Quick line reveal (Animation 1)
- Booking rows: Stagger top to bottom (Animation 3, 0.1s delay)

**Form Error Animations:**
- Error appears: Fade in opacity 0 to 1 (GSAP)
- Error resolves: Fade out opacity 1 to 0 (GSAP)

---

### Step 10: Important Implementation Notes

**Reservation CTA Component:**
- The `reservation-cta.html` component should NOT appear on the reservations page
- It would be redundant since the page already has the reservation form
- Footer loads directly after the private dining section

**Form Submission:**
- Currently uses 1.5s timeout to simulate server response
- Add comment in JS indicating where to replace with real API call or form service
- Success message displays booking summary with submitted data

**Flatpickr Integration:**
- Include Flatpickr CDN in page head
- Initialize in `reservations.js`
- Apply custom dark theme styles in `reservations.css`

**Guest Stepper Logic:**
- Implement increment/decrement buttons in `reservations.js`
- Enforce min (1) and max (12) limits
- Disable buttons at boundaries

**Character Counter:**
- Real-time update as user types in Special Requests textarea
- Display format: "X of 500"
- Positioned bottom right of textarea

---

## Animation Reference Guide

**Animation 1 — Line Reveal:**
Used for main headings throughout the page.

**Animation 2 — Parallax:**
Used for private dining background image (20% scroll speed, disabled on mobile).

**Animation 3 — Stagger:**
Used for right column blocks, policy columns, success booking rows.

---

## Color Palette Reference

- Dark Primary: `#0D0D0D`
- Dark Surface: `#1A1A18`
- Gold: (use site's primary gold variable)
- Cream: (use site's cream text variable)
- Muted Text: (use site's muted text variable)
- Error Red: Desaturated warm red (not harsh bright red)

---

## Implementation Checklist

- [ ] Create `reservations.html` with proper head configuration
- [ ] Add Flatpickr CDN link to page head
- [ ] Build hero section with all content and trust indicators
- [ ] Create form card with all field groups
- [ ] Implement custom guest stepper component
- [ ] Integrate Flatpickr date picker
- [ ] Build custom time dropdown
- [ ] Build custom occasion dropdown
- [ ] Add character counter to textarea
- [ ] Create right column info blocks
- [ ] Implement today's day highlighting in opening hours
- [ ] Build reservation policies section
- [ ] Build private dining CTA section
- [ ] Create success message overlay
- [ ] Implement all form validation rules and error messages
- [ ] Style Flatpickr with dark luxury theme
- [ ] Add all hero animations
- [ ] Add form section animations
- [ ] Add policy section animations
- [ ] Add private dining section animations
- [ ] Add success message animations
- [ ] Add form error animations
- [ ] Configure mobile responsive behavior
- [ ] Ensure reservation CTA component does NOT load on this page
- [ ] Test form submission flow
- [ ] Test validation on all fields
- [ ] Test guest stepper min/max limits
- [ ] Test date picker (past dates disabled)
- [ ] Test success message display
- [ ] Test "Make Another Reservation" reset functionality

---

*This guide provides the complete specification for implementing the Lumière reservations page. Follow each step sequentially for best results.*
