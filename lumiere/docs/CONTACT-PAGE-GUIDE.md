# Contact Page Build Guide

Complete step-by-step guide for building the Lumière contact page to production standard.

---

## Files Required

| File | Purpose |
|------|---------|
| `contact.html` | Main contact page HTML |
| `assets/css/pages/contact.css` | Contact page specific styles |
| `assets/js/pages/contact.js` | Opening hours highlight, map interaction, form logic, animations |
| `assets/js/components/form-handler.js` | Reused form submission and success message logic |
| `assets/images/hero/hero-contact.webp` | Contact page hero — restaurant exterior at night |
| `assets/images/interior/dining-room-01.webp` | Ambient strip section background |

---

## Page Metadata

**Page Title:**  
`Lumière — Contact and Location | Fine Dining Restaurant`

**Meta Description:**  
`Find Lumière in the heart of Mayfair, London. Contact our team for reservations, private dining enquiries and general questions. We look forward to hearing from you.`

**Dependencies:**  
No additional CDN libraries beyond global stack. No Flatpickr needed. Standard libraries load as normal.

---

## Build Order — Follow Exactly

### STEP 1 — Page Head and Boilerplate

Write the complete HTML head section first:
- All meta tags including Open Graph
- Font preconnect links
- Google Fonts link
- AOS CSS link
- All five custom CSS link tags in correct order: main, components, animations, utilities, contact
- Set page title and meta description exactly as specified

Write body opening tag, page loader div, custom cursor divs and navbar container div. This creates the complete shell.

---

### STEP 2 — Hero Section

Build the hero section completely and verify it renders correctly before proceeding.

**Required Elements:**
- Background image with overlay
- Breadcrumb with correct IDs
- Gold label
- Heading
- Subheading
- Gold separator line
- All elements ID'd for GSAP

Do not proceed until this section is visually confirmed.

---

### STEP 3 — Contact Details and Map Section

Build the primary information section third. This is the most structurally complex section.

**Build Order:**
1. Three column layout on desktop first
2. Verify layout is pixel perfect
3. Add full width map row below

The three columns must be perfect before adding the map.

---

### STEP 4 — Ambient Image Strip

Build the narrow full width atmospheric image strip fourth. Purely visual and structurally simple — single section with image and overlay. Build quickly and move on.

---

### STEP 5 — Contact Form Section

Build the contact form fifth:
- All fields, labels, textarea and submit button
- Success message overlay must be built in this same step
- Transition must be ready before JS is written

---

### STEP 6 — FAQ Section

Build the accordion FAQ section sixth:
- All five questions and answers in HTML
- Correct structure for JavaScript accordion to target
- Do not write accordion JS yet — just HTML structure

---

### STEP 7 — Find Us Section

Build the secondary location strip seventh. Simple centred section with address in large elegant typography and directions link.

---

### STEP 8 — Reservation CTA and Footer Elements

Add reservation CTA component container div, footer container div and back to top button eighth.

---

### STEP 9 — Scripts

Add all script tags at bottom of body in correct load order:
1. GSAP
2. ScrollTrigger
3. Lenis
4. AOS
5. CountUp
6. Core JS files
7. Component files
8. contact.js
9. main.js (last)

---

### STEP 10 — contact.css

Write complete CSS file after HTML is finished:
1. Hero styles
2. Contact details columns
3. Map row
4. Ambient strip
5. Contact form
6. Success message
7. FAQ accordion
8. Find us section

Every section needs mobile first styles then tablet and desktop breakpoints layered on top.

---

### STEP 11 — contact.js

Write JavaScript file absolutely last after both HTML and CSS are complete and verified.

**Initialization Order:**
1. Hero animations first
2. Contact section animations second
3. Opening hours auto highlight third
4. Map interaction fourth
5. Form handler fifth
6. Success message sixth
7. FAQ accordion seventh
8. Scroll animations eighth

Every element ID in JS must match exactly what is in HTML.

---

## Global Elements

Navbar and footer load via component loader. Custom cursor, page loader and back to top button present on every page. All handled by main.js and core JS files — nothing extra needed in contact.js for these.

---

## Section 1 — Page Hero

### Design and Layout

**Height:** 50-58% of viewport height (shorter than homepage)

**Background:** `hero-contact.webp` — restaurant exterior at night with warm golden light glowing through tall windows, dark stone facade and wet cobblestone street reflections. Moody, atmospheric, communicates physical location. Dark overlay at 65% opacity.

**Content Layout (top to bottom, all centred):**

1. **Breadcrumb** — Small muted DM Sans: Home → Contact
2. **Gold Label** — Uppercase wide letter spacing: GET IN TOUCH
3. **Main Heading** — Large Cormorant Garamond: Find Us
4. **Subheading** — DM Sans muted: "We are always delighted to hear from you. Our team responds to all enquiries within the same working day."
5. **Trust Items** — Three items in row (desktop) / stacked (mobile):
   - MapPin icon + "12 Mount Street, Mayfair, London"
   - Clock icon + "Open Wednesday to Sunday from 5:30 PM"
   - Phone icon + "+44 20 7000 0000"
6. **Gold separator line** at bottom

### Written Copy

```
Breadcrumb: Home → Contact
Label: GET IN TOUCH
Heading: Find Us
Subheading: We are always delighted to hear from you. Our team responds to all enquiries within the same working day.

Trust Items:
- 12 Mount Street, Mayfair, London
- Open Wednesday to Sunday from 5:30 PM
- +44 20 7000 0000
```

### Animation

| Element | Animation | Timing |
|---------|-----------|--------|
| Breadcrumb | Fade in | 0.3s |
| Gold label | Fade up | 0.5s |
| Main heading | Animation 1 line reveal | 0.7s |
| Subheading | Fade up | 1.0s |
| Trust items | Stagger fade in (0.1s stagger) | 1.2s |
| Gold bottom line | ScaleX from centre (0 to 1) | 1.5s |

---

## Section 2 — Contact Details and Map

### Design and Layout

**Background:** Dark primary #0D0D0D with generous section padding

**Structure:** Two horizontal rows stacked vertically

#### Row 1 — Three Column Information Grid

Three equal width columns side by side on desktop with generous gap. Thin vertical gold line at 25% opacity separates columns (two dividers total).

**Responsive:**
- Desktop: Three columns side by side
- Tablet: Two columns, third drops below
- Mobile: Single column stacked with horizontal gold lines between

---

#### Column 1 — Visit Us

**Label:** VISIT US (uppercase gold, wide letter spacing)

**Address:** (DM Sans cream, generous line height, each line separate)
```
12 Mount Street
Mayfair
London
W1K 2TN
United Kingdom
```

**Thin gold line** (20% opacity)

**Transport Note:** (DM Sans small muted)
```
Two minutes walk from Bond Street underground station. 
Valet parking available on Mount Street from 6 PM daily.
```

**Link:** Get Directions ↗ (gold text with ExternalLink icon, opens Google Maps)

---

#### Column 2 — Opening Hours

**Label:** OPENING HOURS (uppercase gold)

**Hours List:** (Two column mini layout — day left, hours right)
```
Monday         Closed
Tuesday        Closed
Wednesday      6:00 PM — 11:00 PM
Thursday       6:00 PM — 11:00 PM
Friday         5:30 PM — 11:30 PM
Saturday       5:30 PM — 11:30 PM
Sunday         6:00 PM — 10:30 PM
```

**Today's Highlight:** Current day gets subtle gold background (8% opacity) and day name transitions from muted grey to gold. Automatic via JavaScript.

**Thin gold line**

**Note:** (DM Sans very small muted)
```
Last orders taken 30 minutes before closing. 
Kitchen closes at 10:30 PM.
```

---

#### Column 3 — Contact Us

**Label:** CONTACT US (uppercase gold)

**Contact Rows:** (Icon left, detail right, clickable)
- Phone icon + +44 20 7000 0000
- Mail icon + hello@lumiere.co.uk
- MapPin icon + 12 Mount Street, London

**Thin gold line**

**Reservations Block:**
- Label: RESERVATIONS
- Calendar icon
- +44 20 7000 0001 (direct line)
- reservations@lumiere.co.uk

**Thin gold line**

**Social Media:**
- Label: FOLLOW US (uppercase muted)
- Four circular outlined gold buttons (36px × 36px)
- Instagram, Facebook, TripAdvisor, Google
- Hover: Fill with gold 15% opacity, icon full gold

---

#### Row 2 — Full Width Embedded Map

**Height:**
- Desktop: 380px
- Tablet: 300px
- Mobile: 250px

**Styling:**
- Dark map style (Google Maps dark theme or CSS filter)
- Thin gold border 1px at 25% opacity
- Same container max width as columns above
- Aligns with columns

**Floating Label:** Small gold pill shaped label on top left corner reading "LUMIÈRE" (uppercase DM Sans gold on dark surface with thin gold border)

**Below Map:** (Centred small muted text)
```
Valet parking available from 6 PM · Nearest tube: Bond Street — 2 minutes walk
```

### Animation for Section 2

| Element | Animation | Details |
|---------|-----------|---------|
| Three columns | Animation 3 stagger | Col 1 left, Col 2 up, Col 3 right |
| Vertical dividers | ScaleY top to bottom | Simultaneous with columns |
| Map container | Fade up | After columns complete (0.4s) |
| Lumière label | Scale 0.8 to 1.0 with fade | After map appears |

---

## Section 3 — Ambient Image Strip

### Design and Layout

**Height:**
- Desktop: 280px
- Mobile: 200px

**Width:** Full bleed edge to edge (no container constraint)

**Background:** Cropped section of `dining-room-01.webp` with dark overlay at 72% opacity

**Content:** None — purely visual breathing space

**Animation:** 
- Desktop: Animation 2 parallax at 20% scroll speed
- Mobile: Static, no parallax

---

## Section 4 — Contact Form Section

### Design and Layout

**Background:** Surface #1A1A18

**Layout:**
- Desktop: Two column split — form 60% left, info 40% right
- Mobile: Stacked vertically, form first

---

#### Left Column — The Contact Form

**Form Card:**
- Dark primary #0D0D0D background
- Thin gold border at 20% opacity
- Padding: 44px desktop, 24px mobile
- Subtle gold glow (4% opacity box shadow)

**Heading:** Send a Message (Cormorant Garamond)

**Subtext:** (DM Sans small muted)
```
For reservations please use our dedicated booking page. 
This form is for general enquiries only.
```

**Form Fields:**

**Group 1 — Personal Details:**
- Full name (left) and email (right) side by side desktop, stacked mobile

**Group 2 — Subject:**
- Single full width custom dropdown
- Options: General Enquiry, Press and Media, Feedback, Careers and Employment, Supplier Enquiry, Other
- Each option has small description in muted text

**Group 3 — Message:**
- Full width textarea
- Placeholder: "Please share your message and we will respond within the same working day"
- Minimum height: 160px
- Character counter: 0 of 800 (bottom right)
- Border transitions from gold 20% to full gold on focus

**Submit Button:**
- Full width, 54px height
- Outlined gold border, transparent fill
- Gold text: "Send Message" with Send icon right
- Hover: Fills gold, text turns dark, icon slides right (0.3s ease)

**Below Button:** (Centred very small muted)
```
We respond to all messages within the same working day, Monday to Friday.
```

**Field Styling:** Identical to reservations/events — underline input style, bottom border only at gold 20% opacity, transitions to full gold on focus, label above in small uppercase DM Sans.

---

#### Right Column — Supporting Information

Floats on surface background with no card (lighter feel vs heavy form card).

**Block 1 — Response Time Promise:**
- Label: OUR PROMISE (gold)
- Paragraph: (Cormorant Garamond italic cream)
```
"Every message we receive is read personally by a member 
of our team. We respond to all enquiries within the same 
working day."
```
- Thin gold line below

**Block 2 — Direct Contacts:**
- Label: DIRECT CONTACTS (gold)
- Three rows with role, name, email:
```
RESERVATIONS TEAM
reservations@lumiere.co.uk

EVENTS AND PRIVATE DINING
events@lumiere.co.uk

PRESS AND MEDIA
press@lumiere.co.uk
```

**Block 3 — Social Media:**
- Label: FIND US ONLINE (gold)
- Four circular outlined gold buttons
- Instagram, Facebook, TripAdvisor, Google
- Same style as contact details section

**Block 4 — Emergency Contact Note:**
- Label: URGENT ENQUIRIES (gold)
- Note: (DM Sans small muted)
```
For same day reservation changes or urgent matters please 
call us directly rather than using this form. Our team 
answers the phone from noon daily.
```
- Phone: +44 20 7000 0000 (clickable tel link)

### Animation for Section 4

| Element | Animation |
|---------|-----------|
| Form card | Slide in from left (x: -40px to 0) with fade |
| Form card border | Fade 0 to 20% opacity |
| Right column blocks | Animation 3 stagger from right (0.15s stagger) |

---

## Section 5 — Success Message Overlay

### Design and Layout

**State:** Hidden by default

**Behavior:** Appears in place of form card after successful submission (no page reload)

**Transition:** Form card fades to opacity 0 over 0.4s, then success card fades in over 0.5s taking exact same position, size and styling

**Content (all centred):**
1. Large MailCheck icon in gold (more appropriate than CheckCircle for message sending)
2. Heading: "Your Message Has Been Sent" (Cormorant Garamond)
3. Paragraph: (DM Sans muted)
```
Thank you for reaching out to Lumière. A member of our team 
will respond to your message personally within the same working 
day. We look forward to hearing more from you.
```
4. Thin gold divider line
5. Small summary showing name and subject submitted
6. Secondary outlined gold button: "Send Another Message" (resets form)

### Animation

| Element | Animation | Duration |
|---------|-----------|----------|
| Form card exit | Fade to opacity 0 | 0.4s |
| Success card entrance | Fade in opacity 0 to 1 | 0.5s |
| MailCheck icon | Scale 0 to 1 (power3.out) | Quick, clean |
| Heading | Fast line reveal | — |
| Summary rows | Stagger in | 0.1s delay |

**Note:** Not elastic like other forms — this is general enquiry not celebration moment. Quick and clean.

---

## Section 6 — FAQ Accordion

### Design and Layout

**Background:** Dark primary #0D0D0D

**Section Intro (centred):**
- Label: FREQUENTLY ASKED (uppercase gold)
- Heading: Questions and Answers (Cormorant Garamond)
- Subtext: "Answers to the questions we hear most often from our guests" (DM Sans muted)

**Accordion Design:**

**Closed State:**
- Question text left (DM Sans cream, 16px desktop / 15px mobile)
- Plus icon right (gold)
- Vertical padding: 24px desktop / 18px mobile
- Thin gold top border at 20% opacity
- Last item has bottom border too

**Open State:**
- Plus icon rotates 45° to become X (CSS transition)
- Answer content fades in and slides down (height 0 to auto)
- Question text transitions cream to brighter white
- Only one item open at a time

**Answer Content:**
- Top padding: 8px
- Bottom padding: 24px
- DM Sans muted 15px, line height 1.75
- Some answers include gold text link at end

---

### FAQ Content

**Q1: Do you accommodate dietary requirements and allergies?**

A1: Absolutely. Our kitchen team is experienced in preparing dishes for all dietary requirements including vegetarian, vegan, gluten free, dairy free and nut allergies. We ask that you inform us of any requirements at the time of booking so we can prepare accordingly. Please note our kitchen handles nuts, gluten, dairy and shellfish.

---

**Q2: What is your dress code?**

A2: We observe a smart casual dress code throughout Lumière. We ask that guests refrain from sportswear, trainers and casual shorts. For private dining events and special occasion evenings, formal dress is greatly appreciated. If you are unsure whether your outfit is appropriate please do not hesitate to call us before your visit.

---

**Q3: Is parking available near the restaurant?**

A3: Valet parking is available from 6 PM daily on Mount Street directly outside the restaurant entrance. The nearest public car park is on Davies Street approximately a three minute walk away. Bond Street underground station is two minutes walk from the restaurant making us easily accessible by tube on the Central and Jubilee lines.

---

**Q4: What is your cancellation policy?**

A4: We kindly ask for a minimum of 24 hours notice for the cancellation or amendment of any reservation. For groups of six or more guests we require 48 hours notice. For private dining and event bookings our cancellation policy is outlined in the event confirmation we send at the time of booking. To cancel or amend please call us directly rather than emailing as this ensures the fastest response.

---

**Q5: Do you offer gift vouchers?**

A5: Yes we offer Lumière gift vouchers in any denomination from £50 upwards. Vouchers are available as a beautifully presented physical card sent by post or as a digital version sent by email for last minute gifts. Vouchers are valid for 24 months from the date of purchase and can be redeemed against any dining experience, tasting menu or private event at Lumière. To purchase a voucher please call or email our reservations team directly.

---

### Animation for Section 6

| Element | Animation |
|---------|-----------|
| Section heading | Animation 1 line reveal on viewport enter |
| Five accordion items | Animation 3 stagger — slide up 25px with fade, 0.1s stagger |
| Accordion open | GSAP height 0 to auto with fade (0.35s power2.out) |
| Accordion close | GSAP height to 0 with fade (0.35s power2.out) |
| Plus icon | CSS rotate 0 to 45° |

Accordion open/close handled in contact.js.

---

## Section 7 — Find Us Strip

### Design and Layout

**Background:** Surface #1A1A18

**Content:** Short elegant section, no images, pure typography, all centred

**Layout (top to bottom):**
1. Thin gold horizontal line (60px width centred) — ornamental
2. Very large Cormorant Garamond heading — address split across two lines:
   - "12 Mount Street"
   - "Mayfair, London"
   - Font size: ~56px desktop / 32px mobile
3. Small DM Sans muted subtext: "Mayfair, London · W1K 2TN" (wide letter spacing)
4. Gold text link with Navigation icon: "Open in Google Maps"

### Written Copy

```
[Gold line ornament]

12 Mount Street
Mayfair, London

Mayfair, London · W1K 2TN

[Navigation icon] Open in Google Maps
```

### Animation

| Element | Animation |
|---------|-----------|
| Gold ornament line | ScaleX from centre (0 to 1) on viewport enter |
| Address heading | Animation 1 line reveal — first line, then 0.15s later second line |
| Subtext | Fade up after heading |
| Maps link | Fade in with subtle upward movement |

---

## Section 8 — Reservation CTA Component

The `reservation-cta.html` component loads here via component loader, identical to every other page.

**Context:** Highly relevant on contact page — visitor who just read hours, found address and sent message is in high intent state. CTA captures that intent at exactly the right moment.

---

## Form Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| Full Name | Required, minimum 2 characters | Please enter your full name |
| Email | Required, valid email format | Please enter a valid email address |
| Subject | Required — must select one | Please select a subject |
| Message | Required, minimum 20 characters, maximum 800 | Please enter your message |

**Note:** Only four fields to validate. Contact form intentionally simpler than reservations/events. Visitor should complete within 90 seconds without friction.

---

## Opening Hours Auto Highlight — Technical Details

One of the most impressive details on the contact page, built entirely in vanilla JavaScript.

### How It Works

1. On page load, `contact.js` gets current day of week as number from Date object (Sunday = 0, Monday = 1, ... Saturday = 6)
2. Maps that number to corresponding row in opening hours list
3. Adds CSS class to that row (e.g., `hours-row--today`)
4. CSS adds subtle gold background (8% opacity) and transitions day name from muted grey to gold
5. Small "TODAY" label appears on far right in uppercase gold DM Sans at 9px

### Dynamic Status Labels

**Based on current time:**
- Past closing time: "CLOSED NOW" (muted text)
- Before opening time: "OPENS TODAY" (gold)
- Currently open: "OPEN NOW" (subtle green — same as V vegetarian badge)

**Impact:** Makes contact page feel like living, real-time document rather than static HTML. The kind of detail that makes buyers say template is worth every penny.

---

## Google Maps Dark Theme Implementation

The embedded Google Maps iframe must match dark luxury aesthetic.

### Two Approaches (Implement Both as Fallback)

**Primary — Google Maps Dark Style URL:**
Use Google Maps embed URL with dark map type parameter. Gives near-dark map without API key — suitable for template since buyers replace with their own location.

**Fallback — CSS Filter:**
Apply CSS filter to iframe element:
```css
filter: invert(92%) hue-rotate(180deg) brightness(95%) contrast(90%);
```

Transforms standard light Google Maps into dark version matching site palette. Inverts colours then hue-rotates back to correct hues producing dark background with lighter roads and labels.

### HTML Comment Above Iframe

```html
<!-- 🔧 EDIT: Replace the src with your Google Maps embed URL. 
     To get your embed URL: Google Maps → search your location → 
     Share → Embed a map → copy the src value from the iframe code. -->
```

---

## Animation Summary — Complete Reference

| Section | Element | Animation Type | Details |
|---------|---------|----------------|---------|
| **Hero** | Breadcrumb | GSAP fade in | 0.3s |
| | Label | GSAP fade up | 0.5s |
| | Heading | Animation 1 | Line reveal 0.7s |
| | Subheading | GSAP fade up | 1.0s |
| | Trust items | GSAP stagger | 1.2s, 0.1s stagger |
| | Gold line | GSAP scaleX | 1.5s from centre |
| **Contact Columns** | Column 1 | GSAP ScrollTrigger | Slide in from left |
| | Column 2 | GSAP ScrollTrigger | Fade up from below |
| | Column 3 | GSAP ScrollTrigger | Slide in from right |
| | Divider lines | GSAP ScrollTrigger | ScaleY top to bottom |
| | Map container | GSAP | Fade up after columns |
| | Lumière label | GSAP | Scale 0.8 to 1.0 |
| **Ambient Strip** | Image | Animation 2 | Parallax 20% (desktop only) |
| **Form Section** | Form card | GSAP ScrollTrigger | Slide in from left |
| | Form border | GSAP | Fade 0 to 20% |
| | Right blocks | Animation 3 | Stagger from right 0.15s |
| **Success** | Form exit | GSAP | Fade to 0 (0.4s) |
| | Card entrance | GSAP | Fade in (0.5s) |
| | MailCheck icon | GSAP | Scale 0 to 1 power3.out |
| | Heading | Animation 1 | Quick line reveal |
| | Summary rows | Animation 3 | Stagger top to bottom |
| **FAQ** | Heading | Animation 1 | Line reveal |
| | Items entrance | Animation 3 | Stagger slide up 25px, 0.1s |
| | Open answer | GSAP contact.js | Height 0 to auto with fade (0.35s) |
| | Close answer | GSAP contact.js | Height to 0 with fade (0.35s) |
| | Plus icon | CSS transition | Rotate 0 to 45° |
| **Find Us** | Gold line | GSAP | ScaleX from centre |
| | Address | Animation 1 | Line reveal two lines |
| | Subtext | GSAP | Fade up |
| | Maps link | GSAP | Fade in with upward move |
| **CTA Banner** | Unit | AOS | Fade up as unit |

---

## Mobile Behavior Summary

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero trust items | Three in row | Stacked vertically |
| Contact details | Three column grid with vertical dividers | Single column with horizontal gold lines |
| Column dividers | Vertical gold lines | Horizontal gold lines |
| Map container | 380px height | 250px height |
| Map label | Top left corner | Top left unchanged |
| Ambient strip | 280px with parallax | 180px static no parallax |
| Form and info | Two column 60/40 split | Stacked, form first |
| Form fields group 1 | Two side by side | Single column stacked |
| Form card padding | 44px all sides | 24px all sides |
| Right column blocks | Four blocks in right column | Four blocks below form |
| FAQ items | Full container width | Full width unchanged |
| FAQ question text | 16px | 14px |
| FAQ padding | 24px top/bottom | 16px top/bottom |
| Find us heading | 56px large address | 28px scaled down |
| Slide animations | 40px movement | 20px movement |
| Stagger delays | 0.15 seconds | 0.08 seconds |
| Parallax strip | Active 20% speed | Completely disabled |
| Opening hours highlight | Gold row with TODAY label | Gold row with TODAY label unchanged |

---

## Key Technical Details

### Opening Hours JavaScript Logic

```javascript
// Get current day (0 = Sunday, 6 = Saturday)
const today = new Date().getDay();

// Map to opening hours row
// Add class 'hours-row--today'
// Check current time vs opening/closing times
// Display appropriate status label
```

### Map Dark Theme CSS Filter

```css
.map-iframe {
  filter: invert(92%) hue-rotate(180deg) brightness(95%) contrast(90%);
}
```

### Form Validation

- Client-side validation before submission
- All fields required except character count is informational
- Email format validation
- Message length: 20-800 characters
- Subject must be selected from dropdown

### Success Message Flow

1. Form submits via form-handler.js
2. On success, form card fades out (0.4s)
3. Success card fades in (0.5s)
4. Icon scales in with power3.out ease
5. "Send Another Message" button resets to form

---

## Design Notes

**Information Hierarchy:** Contact page prioritizes findability. Three most critical pieces (location, hours, phone) appear twice — once in hero trust items, once in detailed columns. Visitor never has to search.

**Visual Rhythm:** Alternating backgrounds (dark primary → surface → dark primary) create clear section separation. Ambient strip provides breathing space between information density.

**Form Positioning:** Form appears after visitor has absorbed all contact information. By the time they reach the form they know hours, location, phone, email and have seen the map. Form becomes optional rather than primary action.

**Mobile Optimization:** Three column grid collapses gracefully. Opening hours highlight works identically on mobile. Map remains interactive and useful at smaller size.

**Accessibility:** All form fields properly labeled. Phone and email as clickable links. Map has text alternative below. FAQ accordion keyboard navigable.

---

## Build Checklist

- [ ] Step 1: Page head and boilerplate complete
- [ ] Step 2: Hero section renders correctly
- [ ] Step 3: Contact details three columns pixel perfect
- [ ] Step 3: Map row added below columns
- [ ] Step 4: Ambient image strip complete
- [ ] Step 5: Contact form with all fields built
- [ ] Step 5: Success message overlay structure ready
- [ ] Step 6: FAQ accordion HTML structure complete
- [ ] Step 7: Find us section built
- [ ] Step 8: CTA and footer elements added
- [ ] Step 9: All script tags in correct order
- [ ] Step 10: contact.css complete with mobile breakpoints
- [ ] Step 11: contact.js complete with all animations
- [ ] Verify opening hours highlight works
- [ ] Verify map displays correctly with dark theme
- [ ] Verify form validation works
- [ ] Verify success message transition works
- [ ] Verify FAQ accordion opens/closes correctly
- [ ] Test all responsive breakpoints
- [ ] Test all clickable links (phone, email, maps, social)

---

**End of Contact Page Build Guide**
