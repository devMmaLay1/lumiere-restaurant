# LUMIÈRE EVENTS PAGE — COMPLETE BUILD GUIDE

This guide breaks down the Events page build into 11 sequential steps. Follow each step in order and verify completion before moving to the next.

---

## FILES NEEDED FOR THE EVENTS PAGE

| File | Purpose |
|------|---------|
| `events.html` | Main events page HTML |
| `assets/css/pages/events.css` | All events page specific styles |
| `assets/js/pages/events.js` | Event type filter, enquiry form, upcoming events interactions |
| `assets/js/components/form-handler.js` | Reused from reservations — generic form submission logic |
| `assets/images/hero/hero-events.webp` | Events page hero background |
| `assets/images/events/private-dining-setup.webp` | Private dining room feature section |
| `assets/images/events/corporate-event.webp` | Corporate event type card |
| `assets/images/events/celebration.webp` | Celebrations event type card |
| `assets/images/interior/private-dining.webp` | Private dining room detail image |

---

## PAGE HEAD DETAILS

**Page title:**  
`Lumière — Private Events & Dining | Fine Dining Restaurant`

**Meta description:**  
`Host your private event at Lumière. Intimate celebrations, corporate dinners and exclusive tasting evenings in the heart of Mayfair. Enquire with our events team today.`

**Additional requirements:**
- Include Flatpickr CSS and JS links (same as reservations page)
- No additional CDN libraries needed beyond global dependencies
- All five custom CSS files in correct order: main, components, animations, utilities, events

---

## BUILD ORDER — FOLLOW THIS EXACTLY


### STEP 1 — Page Head and Boilerplate

**What to build:**
Write the complete HTML head section first with all meta tags, font links, AOS link, Flatpickr CSS link and all five custom CSS link tags in the correct order — main, components, animations, utilities, events. Set the page title and meta description exactly as specified above. Add the Open Graph meta tags. Write the body opening tag. Add the page loader div, custom cursor divs and the navbar container div.

**Required elements:**
- `<!DOCTYPE html>` declaration
- `<html lang="en">`
- Complete `<head>` section with:
  - Meta charset UTF-8
  - Viewport meta tag
  - Page title (exact text above)
  - Meta description (exact text above)
  - Open Graph meta tags (og:title, og:description, og:image, og:url)
  - Google Fonts link for Cormorant Garamond and DM Sans
  - AOS CSS link
  - Flatpickr CSS link
  - Custom CSS files in order:
    1. `assets/css/main.css`
    2. `assets/css/components.css`
    3. `assets/css/animations.css`
    4. `assets/css/utilities.css`
    5. `assets/css/pages/events.css`
- `<body>` opening tag
- Page loader div: `<div id="page-loader"></div>`
- Custom cursor divs: `<div id="custom-cursor"></div>` and `<div id="custom-cursor-follower"></div>`
- Navbar container: `<div id="navbar-container"></div>`

**Verification checklist:**
- [ ] All CSS files load in correct order
- [ ] Flatpickr CSS link present
- [ ] Page title matches specification exactly
- [ ] Meta description matches specification exactly
- [ ] All boilerplate divs present with correct IDs

---

### STEP 2 — Hero Section

**What to build:**
Build the hero section completely before touching any other section. The hero must be working with its background image path, overlay, breadcrumb, label, heading, subheading, trust items and gold separator line.

**Design specifications:**
- Height: 55-60vh (shorter than standard hero)
- Background image: `assets/images/hero/hero-events.webp`
- Overlay: Dark at 68% opacity (heavier than most pages)
- Content: Centered horizontally and vertically

**Required elements:**

1. **Breadcrumb** (small muted DM Sans):
   - Text: `Home → Private Events`
   - ID: `hero-breadcrumb` (for animation)

2. **Gold label** (uppercase, wide letter spacing):
   - Text: `PRIVATE EVENTS AND DINING`
   - ID: `hero-label` (for animation)

3. **Main heading** (large Cormorant Garamond):
   - Text: `Events and Occasions`
   - ID: `hero-heading` (for Animation 1 line reveal)

4. **Subheading** (DM Sans muted):
   - Text: `Intimate celebrations, exclusive dinners and curated experiences — all crafted entirely around you.`
   - ID: `hero-subheading` (for animation)

5. **Trust items** (side by side):
   - Left: Lucide Users icon + `Up to 20 Guests`
   - Right: Lucide Calendar icon + `Bespoke Arrangements`
   - Container ID: `hero-trust-items` (for animation)

6. **Gold separator line** (bottom of hero):
   - ID: `hero-line` (for scaleX animation)

**Animation sequence:**
- 0.3s: Breadcrumb fades in
- 0.5s: Gold label fades up
- 0.7s: Main heading line reveal (Animation 1)
- 1.0s: Subheading fades up
- 1.2s: Trust items fade in together
- 1.4s: Gold line draws from center (scaleX 0 to 1)

**Verification checklist:**
- [ ] Hero height is 55-60vh
- [ ] Background image path correct
- [ ] Overlay opacity at 68%
- [ ] All content centered
- [ ] All animation target IDs present
- [ ] Trust items display side by side on desktop
- [ ] Lucide icons render correctly

---

### STEP 3 — Event Types Section

**What to build:**
Build this section second because it is the primary content section. Get all four event type cards built with their images, headings, descriptions and buttons. Verify the two column grid layout works on desktop.

**Design specifications:**
- Background: Dark primary
- Layout: Two column grid on desktop, single column on mobile
- Section label: `WHAT WE OFFER` (centered, uppercase gold)
- Section heading: `How Can We Host You?` (Cormorant Garamond, centered)
- Intro paragraph: Two sentences explaining tailored events (DM Sans muted, centered)

**Four event type cards structure:**

Each card contains:
- Full bleed image (top 55% of card)
- Dark gradient overlay at bottom edge of image
- Content area on dark surface #1A1A18
- Gold ornamental symbol ✦
- Event type name (Cormorant Garamond medium)
- Description (2-3 lines, DM Sans small muted)
- Thin gold separator line (20% opacity)
- Full width outlined gold button

**Card hover effects:**
- Image zooms to 106% scale (0.5s transition)
- Image stays contained (overflow hidden)

**Card 1 — Private Dining:**
- Image: `assets/images/events/private-dining-setup.webp`
- Name: `Private Dining`
- Description: `Our exclusive private dining room accommodates up to 20 guests for the most intimate of occasions. From the menu to the flowers, every detail is curated around you.`
- Capacity: `Up to 20 guests`
- Button: `Enquire About Private Dining`
- Button action: Scroll to form, pre-select "Private Dining"

**Card 2 — Corporate Events:**
- Image: `assets/images/events/corporate-event.webp`
- Name: `Corporate Events`
- Description: `Impress clients and reward your team with a Lumière corporate dinner. We offer bespoke menus, AV arrangements and dedicated service staff for the evening.`
- Capacity: `Up to 20 guests`
- Button: `Enquire About Corporate Dining`
- Button action: Scroll to form, pre-select "Corporate Event"


**Card 3 — Celebrations:**
- Image: `assets/images/events/celebration.webp`
- Name: `Celebrations`
- Description: `Birthdays, anniversaries, engagements and proposals — our team transforms every celebration into a memory that stays with you long after the evening ends.`
- Capacity: `Up to 20 guests`
- Button: `Enquire About a Celebration`
- Button action: Scroll to form, pre-select "Birthday Celebration" or "Anniversary Dinner"

**Card 4 — Wine and Tasting Evenings:**
- Image: `assets/images/interior/dining-room-01.webp`
- Name: `Wine and Tasting Evenings`
- Description: `Join us for an exclusive curated evening with our head sommelier. Seasonal tasting menus paired with exceptional wines selected to complement every course.`
- Capacity: `Up to 30 guests`
- Button: `Enquire About a Tasting Evening`
- Button action: Scroll to form, pre-select "Wine and Tasting Evening"

**Animation sequence:**
- Section heading: Animation 1 line reveal on scroll
- Intro paragraph: Fade up after heading
- Four cards: Stagger in using Animation 3 (top-left, top-right, bottom-left, bottom-right, 0.18s stagger)
- Card images: Subtle Animation 2 parallax at 15% scroll speed

**Verification checklist:**
- [ ] Two column grid on desktop
- [ ] Single column stack on mobile
- [ ] All four cards present with correct content
- [ ] Images have correct paths
- [ ] Hover zoom effect works (106% scale)
- [ ] Buttons have data attributes for form pre-selection
- [ ] Gold ornamental symbol ✦ displays correctly
- [ ] All animation target IDs/classes present

---

### STEP 4 — Private Dining Room Feature Section

**What to build:**
Build the full width split layout feature section. Get the image grid on the left and all text content, capacity details and CTA button on the right working correctly.

**Design specifications:**
- Background: Slightly lighter surface #1A1A18
- Layout: 55% left (images) / 45% right (content) on desktop
- Mobile: Stacked — images top, content below

**Left Column — Image Arrangement:**

- Main large image: `assets/images/interior/private-dining.webp` (full column height)
- Overlapping smaller image: `assets/images/interior/dining-room-02.webp` (portrait format)
  - Position: Bottom right corner of main image
  - Border: 2px solid gold at 50% opacity
  - Shadow: Subtle dark box shadow
  - Elevated appearance
- **Mobile behavior:** Show single main image only, no overlap

**Right Column — Text Content:**

1. **Gold label:**
   - Text: `THE PRIVATE ROOM`
   - Style: Uppercase, small, gold

2. **Heading:**
   - Text: `An Exclusive Space Reserved for You`
   - Style: Large Cormorant Garamond
   - Animation: Line reveal (Animation 1)

3. **Paragraph:**
   - Text: `Separated entirely from the main dining room, our private space seats up to twenty guests around a single magnificent table. The room is yours for the evening — the menu, the pace, the atmosphere, the music — all curated to your vision. Whether you are hosting twelve for a birthday dinner or twenty for a boardroom celebration, the experience will be entirely your own.`
   - Style: DM Sans muted, body size

4. **Gold divider line** (30% opacity)

5. **Capacity and feature info blocks** (2x2 grid):

   **Block 1:**
   - Icon: Lucide Users (gold)
   - Label: `CAPACITY` (uppercase, small, muted)
   - Value: `Up to 20 guests` (cream)

   **Block 2:**
   - Icon: Lucide Clock (gold)
   - Label: `MINIMUM BOOKING` (uppercase, small, muted)
   - Value: `3 hours` (cream)

   **Block 3:**
   - Icon: Lucide UtensilsCrossed (gold)
   - Label: `CATERING` (uppercase, small, muted)
   - Value: `Bespoke menu available` (cream)

   **Block 4:**
   - Icon: Lucide Wine (gold)
   - Label: `MINIMUM SPEND` (uppercase, small, muted)
   - Value: `From £150 pp` (cream)


6. **Gold divider line**

7. **CTA Button:**
   - Text: `Enquire About the Private Room`
   - Style: Full width, outlined gold
   - Action: Scroll to form, pre-select "Private Dining"

8. **Contact line:**
   - Text: `Or speak to our events team directly — +44 20 7000 0001`
   - Style: Small muted DM Sans, centered

**Animation sequence:**
- Left main image: Slide in from left (x: -40px to 0) with fade
- Overlapping image: Scale from 0.9 to 1.0 with fade (after main image)
- Gold label: Fade in
- Heading: Animation 1 line reveal
- Paragraph: Fade up
- Info blocks: Stagger in using Animation 3 (top to bottom in pairs)
- Button: Scale in last

**Verification checklist:**
- [ ] Split layout 55/45 on desktop
- [ ] Images stack on mobile (single image only)
- [ ] Overlapping image has gold border and shadow
- [ ] 2x2 info grid displays correctly
- [ ] All Lucide icons render
- [ ] Button has pre-selection data attribute
- [ ] Phone number is clickable link
- [ ] All animation target IDs present

---

### STEP 5 — Upcoming Events Section

**What to build:**
Build the three upcoming event cards. Each card needs its image, date badge, event name, description, price and button.

**Design specifications:**
- Background: Dark primary
- Section label: `WHAT'S ON` (centered, uppercase gold)
- Section heading: `Upcoming Experiences` (Cormorant Garamond, centered)
- Intro text: `Join us for one of our seasonal dining experiences — open to all guests.` (DM Sans muted, centered)
- Layout: Three column grid on desktop, two column on tablet, single column on mobile

**Card structure:**
- Full bleed image at top
- Date badge overlaid on top-left corner of image
- Content area on dark surface #1A1A18
- Event name, description, price, button


**Date badge design:**
- Small dark pill with thin gold border
- Month abbreviation (uppercase, small gold DM Sans) above day number (large Cormorant Garamond gold)
- Position: Top-left corner with padding
- Example: `DEC` above `24`

**Card hover effects:**
- Entire card lifts 4px with subtle shadow
- Image zooms to 106% scale (contained)

**Event 1 — Christmas Tasting Menu:**
- Image: `assets/images/events/christmas-tasting.webp` (or placeholder)
- Date badge: `DEC / 24`
- Name: `Christmas Tasting Menu Evening`
- Description: `A nine-course festive tasting experience with paired wines selected by our head sommelier.`
- Price: `£195 per person` (Cormorant Garamond gold)
- Button: `Book This Event` → links to `reservations.html`

**Event 2 — New Year's Eve:**
- Image: `assets/images/events/new-years-eve.webp` (or placeholder)
- Date badge: `DEC / 31`
- Name: `New Year's Eve Prestige Dinner`
- Description: `Welcome the new year with a spectacular ten-course prestige menu, Champagne reception and live piano.`
- Price: `£285 per person`
- Button: `Book This Event` → links to `reservations.html`

**Event 3 — Valentine's Night:**
- Image: `assets/images/events/valentines.webp` (or placeholder)
- Date badge: `FEB / 14`
- Name: `Valentine's Night — A Table for Two`
- Description: `An intimate five-course menu for couples, with a Champagne toast, rose petal setting and a petit four gift.`
- Price: `£165 per person`
- Button: `Book This Event` → links to `reservations.html`

**Animation sequence:**
- Section heading: Animation 1 line reveal on scroll
- Intro paragraph: Fade up
- Three cards: Stagger in using Animation 3 (left to right, 0.18s stagger)
- Date badges: Scale from 0.85 to 1.0 with fade (after card appears)

**Verification checklist:**
- [ ] Three column grid on desktop
- [ ] Two column on tablet
- [ ] Single column on mobile
- [ ] Date badges positioned correctly on images
- [ ] Date badge format correct (month/day split)
- [ ] Card hover effects work
- [ ] All buttons link to reservations.html
- [ ] Price displays in gold Cormorant Garamond
- [ ] All animation target classes present

---

### STEP 6 — Enquiry Form Section

**What to build:**
Build the enquiry form with all fields, custom selects, Flatpickr date picker, textarea and submit button. The success message overlay must also be built in this step.

**Design specifications:**
- Background: Dark primary
- Layout: Two column split on desktop (58% form / 42% info), stacked on mobile
- Form container: Dark surface card #1A1A18 with thin gold border (20% opacity), generous padding, subtle gold box shadow

**Left Column — The Enquiry Form:**

**Form heading and intro:**
- Heading: `Send an Enquiry` (Cormorant Garamond)
- Subtext: `Our events team will respond within 24 hours` (DM Sans small muted)

**Form fields (in order):**

**Group 1 — Personal Details** (side by side on desktop):
1. Full Name (required, minlength 2)
   - Label: `FULL NAME`
   - Placeholder: `Your full name`
   - Validation: Required, minimum 2 characters
   - Error: `Please enter your full name`

2. Email Address (required, type email)
   - Label: `EMAIL ADDRESS`
   - Placeholder: `your.email@example.com`
   - Validation: Required, valid email format
   - Error: `Please enter a valid email address`

**Group 2 — Contact** (side by side on desktop):
3. Phone Number (required, type tel)
   - Label: `PHONE NUMBER`
   - Placeholder: `+44 20 0000 0000`
   - Validation: Required, minimum 10 digits
   - Error: `Please enter a valid phone number`

4. Company or Organisation (optional)
   - Label: `COMPANY OR ORGANISATION — OPTIONAL`
   - Placeholder: `Company name`
   - Validation: None
   - Error: None

**Group 3 — Event Details** (side by side on desktop):
5. Event Type (required, custom select dropdown)
   - Label: `EVENT TYPE`
   - Options:
     - `Private Dining`
     - `Corporate Event`
     - `Birthday Celebration`
     - `Anniversary Dinner`
     - `Engagement or Proposal`
     - `Wine and Tasting Evening`
     - `Other`
   - Validation: Required
   - Error: `Please select an event type`
   - ID: `event-type-select` (for pre-selection)

6. Preferred Date (required, Flatpickr)
   - Label: `PREFERRED DATE`
   - Placeholder: `Select a date`
   - Validation: Required, cannot be past date
   - Error: `Please select a preferred date`
   - Flatpickr config: Dark luxury theme, disable past dates, minDate: today


**Group 4 — Event Specifics** (side by side on desktop):
7. Number of Guests (required, custom stepper)
   - Label: `NUMBER OF GUESTS`
   - Min: 2
   - Max: 50
   - Default: 10
   - Validation: Required, between 2 and 50
   - Error: `Please enter number of guests`

8. Preferred Time (required, custom select dropdown)
   - Label: `PREFERRED TIME`
   - Options: Time slots from 6:00 PM to 10:00 PM in 30-minute intervals
     - `6:00 PM`
     - `6:30 PM`
     - `7:00 PM`
     - `7:30 PM`
     - `8:00 PM`
     - `8:30 PM`
     - `9:00 PM`
     - `9:30 PM`
     - `10:00 PM`
   - Validation: Required
   - Error: `Please select a preferred time`

**Group 5 — Budget** (full width):
9. Approximate Budget (optional, custom select dropdown)
   - Label: `APPROXIMATE BUDGET — OPTIONAL`
   - Options:
     - `Under £75 per person`
     - `£75 to £125 per person`
     - `£125 to £175 per person`
     - `£175 to £250 per person`
     - `Over £250 per person`
     - `To be discussed`
   - Validation: None
   - Error: None

**Group 6 — Message** (full width):
10. Additional Details (optional, textarea)
    - Label: `ADDITIONAL DETAILS`
    - Placeholder: `Please share any additional details about your event — theme, dietary requirements, special arrangements, or anything else we should know.`
    - Min height: 140px
    - Max length: 600 characters
    - Character counter: Bottom right showing `0 / 600`
    - Validation: Maximum 600 characters
    - Error: `Maximum 600 characters reached`
    - Border: Gold 20% opacity, transitions to full gold on focus

**Submit Button:**
- Text: `Submit Enquiry`
- Icon: Lucide Send (right side)
- Style: Full width, 56px height, outlined gold border, transparent background
- Hover: Fills gold with dark text, arrow slides right
- Transition: 0.3s ease

**Below submit button:**
- Text: `We aim to respond to all enquiries within 24 hours. For urgent requests please call our events team directly on the number below.`
- Style: Small muted DM Sans, centered


**Right Column — Supporting Information:**

Four information blocks stacked vertically with generous spacing. No card background — floats on dark primary.

**Block 1 — Why Choose Lumière:**
- Label: `WHY LUMIÈRE` (gold, uppercase, small)
- Content: Three bullet points with gold dots:
  - `Dedicated events coordinator`
  - `Bespoke menu design with Chef Marchand`
  - `White glove service throughout`

**Block 2 — What's Included:**
- Label: `WHAT'S INCLUDED` (gold, uppercase, small)
- Content: List in DM Sans small muted:
  - `Exclusive use of private dining room`
  - `Personalised menu printed with your event details`
  - `Floral arrangements included`
  - `Dedicated sommelier available`
  - `Room dressed to your theme`

**Block 3 — Contact the Events Team:**
- Label: `SPEAK TO US` (gold, uppercase, small)
- Phone: Lucide Phone icon + `+44 20 7000 0001` (clickable link)
- Email: Lucide Mail icon + `events@lumiere-restaurant.co.uk` (clickable link)
- Note: `Our events team is available Monday to Friday 10am to 6pm` (very small muted)

**Block 4 — Testimonial:**
- Label: `WHAT OUR HOSTS SAY` (gold, uppercase, small)
- Quote: `"Lumière transformed our anniversary dinner into an evening we will never forget. The attention to detail was extraordinary."` (Cormorant Garamond italic cream)
- Attribution: `— Catherine and William Forsythe` (small muted)
- Event type: `30th Anniversary Dinner` (small muted)

**Animation sequence:**
- Form card: Slide in from left (x: -40px to 0) with fade on scroll
- Form card border: Fade from 0 to 20% opacity as card appears
- Right column blocks: Stagger in from right using Animation 3 (0.15s stagger)

**Verification checklist:**
- [ ] Form card has gold border and shadow
- [ ] All 10 form fields present with correct labels
- [ ] Flatpickr initializes on date field
- [ ] Custom selects work (event type, time, budget)
- [ ] Guest stepper works (min 2, max 50)
- [ ] Character counter updates on textarea
- [ ] Textarea border transitions on focus
- [ ] Submit button has Send icon
- [ ] All validation attributes present (required, minlength, type)
- [ ] Right column blocks stack correctly
- [ ] Phone and email are clickable links
- [ ] Form ID matches what events.js will target
- [ ] Event type select has ID for pre-selection

---

### STEP 6A — Success Message Overlay

**What to build:**
Build the success message that appears after form submission. This replaces the form card with the same transition as the reservations page.

**Design specifications:**
- Hidden by default (display: none or opacity: 0)
- Same dimensions and position as form card
- Dark surface #1A1A18 with gold border
- Centered content layout

**Required elements:**

1. **Success icon:**
   - Lucide CheckCircle icon (large, gold)
   - ID for animation

2. **Heading:**
   - Text: `Your Enquiry Has Been Received`
   - Style: Cormorant Garamond, centered

3. **Paragraph:**
   - Text: `Thank you for your interest in hosting your event at Lumière. A member of our events team will contact you personally within 24 hours to discuss your occasion in detail. We very much look forward to welcoming you.`
   - Style: DM Sans muted, centered

4. **Gold divider line**

5. **Enquiry summary** (two column mini layout):
   - Labels (left, muted): `Name:`, `Event Type:`, `Date:`, `Guests:`
   - Values (right, cream): Populated from form submission

6. **Gold divider line**

7. **Reset button:**
   - Text: `Submit Another Enquiry`
   - Style: Secondary outlined gold button
   - Action: Reset form, show form card again

**Animation sequence:**
- Form card: Fade to opacity 0 (0.4s)
- Success card: Fade in from opacity 0 (0.5s)
- CheckCircle icon: Scale from 0 to 1 with GSAP elastic ease (bounce effect)
- Heading: Quick line reveal
- Summary rows: Stagger in top to bottom (0.1s delay)

**Verification checklist:**
- [ ] Success overlay hidden by default
- [ ] Same size and position as form card
- [ ] CheckCircle icon displays correctly
- [ ] Summary layout works (labels left, values right)
- [ ] Reset button shows form again
- [ ] Animation IDs present for GSAP

---

### STEP 7 — Allergen and Policy Notice

**What to build:**
Write the short policy notice section. This is the quickest section.

**Design specifications:**
- Background: Dark primary
- Layout: Centered content, max-width container
- Minimal padding

**Required content:**
- Small centered paragraph in DM Sans very small muted text
- Text: `All private events are subject to our standard terms and conditions. Dietary requirements and allergen information must be provided at least 72 hours before your event. A non-refundable deposit of 30% is required to secure your booking. Full payment is due 7 days before your event date.`

**Styling:**
- Max width: 800px
- Centered horizontally
- Subtle fade-in animation on scroll (AOS or simple GSAP)

**Verification checklist:**
- [ ] Text is centered
- [ ] Max-width applied
- [ ] Font size appropriately small
- [ ] Color is muted (not full cream)

---

### STEP 8 — Footer Elements

**What to build:**
Add the reservation CTA component container div, footer container div and back to top button.

**Required elements:**

1. **Reservation CTA component container:**
   - `<div id="reservation-cta-container"></div>`
   - Loads `components/reservation-cta.html` via component loader

2. **Footer container:**
   - `<div id="footer-container"></div>`
   - Loads `components/footer.html` via component loader

3. **Back to top button:**
   - `<button id="back-to-top" aria-label="Back to top">`
   - Lucide ChevronUp icon inside
   - Fixed position bottom-right
   - Appears when user scrolls down 400px
   - Smooth scroll to top on click

**Verification checklist:**
- [ ] All three container divs present with correct IDs
- [ ] Back to top button has correct ID and aria-label
- [ ] ChevronUp icon inside button
- [ ] Components will load via component-loader.js

---

### STEP 9 — Scripts

**What to build:**
Add all script tags at the bottom of the body in the correct order.

**Required script tags (in exact order):**

1. **GSAP Core:**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
   ```

2. **GSAP ScrollTrigger:**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
   ```

3. **Lenis Smooth Scroll:**
   ```html
   <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
   ```

4. **AOS (Animate On Scroll):**
   ```html
   <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
   ```

5. **Flatpickr:**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
   ```

6. **CountUp.js:**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.8.0/countUp.umd.min.js"></script>
   ```

7. **Custom JS files (in order):**
   ```html
   <!-- Core files first -->
   <script src="assets/js/core/loader.js"></script>
   <script src="assets/js/core/cursor.js"></script>
   <script src="assets/js/core/navbar.js"></script>
   <script src="assets/js/core/smooth-scroll.js"></script>
   <script src="assets/js/core/component-loader.js"></script>
   
   <!-- Component files -->
   <script src="assets/js/components/animations-init.js"></script>
   <script src="assets/js/components/form-handler.js"></script>
   
   <!-- Page specific -->
   <script src="assets/js/pages/events.js"></script>
   
   <!-- Main.js always last -->
   <script src="assets/js/main.js"></script>
   ```

8. **Closing body and html tags:**
   ```html
   </body>
   </html>
   ```

**Verification checklist:**
- [ ] All CDN scripts load before custom scripts
- [ ] Core JS files load first
- [ ] Component JS files load after core
- [ ] events.js loads after components
- [ ] main.js loads last
- [ ] Flatpickr script present (for date picker)
- [ ] No console errors on page load

---

### STEP 10 — events.css

**What to build:**
Write the complete CSS file after the HTML is finished. Start with hero styles, then event type cards, then private dining feature, then upcoming events, then enquiry form, then success message. Every section must have mobile, tablet and desktop breakpoints. Write mobile styles first then layer up.

**CSS structure (in order):**

1. **Hero Section Styles:**
   - Hero container: 55-60vh height, background image, overlay 68% opacity
   - Hero content: Centered flex layout
   - Breadcrumb: Small muted text with chevron
   - Gold label: Uppercase, wide letter spacing
   - Heading: Large Cormorant Garamond
   - Subheading: DM Sans muted
   - Trust items: Flex row, gap between items, icons + text
   - Gold separator line: Centered, width transitions
   - Mobile: Stack trust items if needed, reduce heading size

2. **Event Types Section:**
   - Section container: Dark primary background, padding
   - Section label and heading: Centered
   - Cards grid: 2 columns desktop, 1 column mobile
   - Card structure:
     - Image container: 55% height, overflow hidden
     - Image: Transition transform 0.5s for zoom
     - Image gradient overlay at bottom
     - Content area: Dark surface #1A1A18, padding
     - Gold symbol ✦
     - Event name: Cormorant Garamond medium
     - Description: DM Sans small muted
     - Gold separator: 20% opacity
     - Button: Full width outlined gold
   - Card hover: Transform translateY(-4px), shadow, image scale(1.06)
   - Mobile: Single column, reduce padding

3. **Private Dining Room Feature:**
   - Section container: Surface background #1A1A18
   - Layout: 55/45 split desktop, stacked mobile
   - Left column:
     - Main image: Full height
     - Overlapping image: Position absolute, bottom-right, border 2px gold 50%, shadow
   - Right column:
     - Gold label
     - Heading: Large Cormorant Garamond
     - Paragraph: DM Sans muted
     - Gold dividers: 30% opacity
     - Info blocks: 2x2 grid, icon + label + value
     - Button: Full width outlined gold
     - Contact text: Small muted centered
   - Mobile: Single image only, stack content below, maintain 2x2 info grid

4. **Upcoming Events Section:**
   - Section container: Dark primary, padding
   - Section label and heading: Centered
   - Cards grid: 3 columns desktop, 2 columns tablet, 1 column mobile
   - Card structure:
     - Image: Full bleed top, overflow hidden
     - Date badge: Position absolute top-left, dark pill, gold border, month/day split
     - Content: Dark surface #1A1A18, padding
     - Event name: Cormorant Garamond medium
     - Description: DM Sans small muted
     - Gold separator
     - Price and button row: Flex space-between
     - Price: Cormorant Garamond gold
     - Button: Small outlined gold
   - Card hover: Transform translateY(-4px), shadow, image scale(1.06)
   - Mobile: Single column, full width cards


5. **Enquiry Form Section:**
   - Section container: Dark primary, padding
   - Layout: 58/42 split desktop, stacked mobile
   - Form card:
     - Background: Dark surface #1A1A18
     - Border: 1px solid gold 20% opacity
     - Box shadow: Subtle gold glow
     - Padding: 48px desktop, 24px mobile
   - Form heading and subtext
   - Field groups:
     - Group layout: 2 columns desktop, 1 column mobile
     - Field styling: Underline style, bottom border gold 20%, transitions to full gold on focus
     - Label: Uppercase small DM Sans muted, transitions to gold on focus
     - Input: DM Sans, cream text
   - Custom select dropdowns: Same styling as reservations page
   - Guest stepper: Plus/minus buttons, number display
   - Flatpickr: Dark luxury theme
   - Textarea: Min height 140px, border transitions, character counter bottom-right
   - Submit button: Full width 56px, outlined gold, Send icon, hover fill
   - Below button text: Small muted centered
   - Right column info blocks:
     - No background, float on dark primary
     - Generous vertical spacing
     - Gold labels, muted content
     - Bullet lists with gold dots
     - Icons with text (phone, email)
   - Mobile: Form first, info blocks below, reduce padding

6. **Success Message Overlay:**
   - Container: Same size as form card
   - Background: Dark surface #1A1A18, gold border
   - Centered content
   - CheckCircle icon: Large gold
   - Heading: Cormorant Garamond centered
   - Paragraph: DM Sans muted centered
   - Gold divider
   - Summary layout: 2 columns (label left muted, value right cream)
   - Gold divider
   - Reset button: Secondary outlined gold
   - Hidden by default, shown via JS

7. **Policy Notice Section:**
   - Background: Dark primary
   - Max-width: 800px, centered
   - Small muted text, centered
   - Minimal padding

**Breakpoints to include:**
- Mobile: 0-768px
- Tablet: 769px-1024px
- Desktop: 1025px+

**Verification checklist:**
- [ ] All sections have mobile styles
- [ ] Grid layouts collapse correctly on mobile
- [ ] Form fields stack on mobile
- [ ] Padding reduces on mobile (48px → 24px)
- [ ] Image overlays work on desktop only
- [ ] Hover effects present on interactive elements
- [ ] Focus states on all form fields
- [ ] Transitions smooth (0.3s-0.5s)
- [ ] Colors match specification (#1A1A18, gold opacity values)

---

### STEP 11 — events.js

**What to build:**
Write the JavaScript file last after both HTML and CSS are complete. Initialize all functions in the correct order. Test that all element IDs in the JS match the IDs in the HTML before finalizing.

**JavaScript structure (in order):**

1. **Wait for DOM ready:**
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       // All initialization code here
   });
   ```

2. **Hero animations (GSAP timeline):**
   - Breadcrumb fade in at 0.3s
   - Label fade up at 0.5s
   - Heading line reveal at 0.7s (Animation 1)
   - Subheading fade up at 1.0s
   - Trust items fade in at 1.2s
   - Gold line scaleX from 0 to 1 at 1.4s

3. **Scroll-triggered animations (GSAP ScrollTrigger):**
   - Event types section heading line reveal
   - Event type cards stagger (Animation 3, 0.18s stagger)
   - Card image parallax (Animation 2, 15% speed)
   - Private room image slide from left
   - Private room overlapping image scale
   - Private room content animations
   - Upcoming events cards stagger
   - Date badge scale animations
   - Form card slide from left
   - Right column blocks stagger from right

4. **Form handler initialization:**
   ```javascript
   initFormHandler('#events-enquiry-form', {
       showSuccessMessage: false,  // Custom success handling
       resetOnSuccess: false,
       submitEndpoint: null,  // Buyer configures
       onSuccess: handleFormSuccess
   });
   ```

5. **Flatpickr initialization:**
   - Target: Date field in form
   - Config: Dark theme, disable past dates, minDate: today
   - Same theme as reservations page

6. **Custom select dropdowns:**
   - Event type select
   - Preferred time select
   - Budget select
   - Custom styling and interaction

7. **Guest number stepper:**
   - Plus button increases (max 50)
   - Minus button decreases (min 2)
   - Display updates


8. **Textarea character counter:**
   - Update counter on input
   - Format: `X / 600`
   - Prevent input beyond 600 characters

9. **Event type pre-selection logic:**
   - Listen for clicks on event type card buttons
   - Smooth scroll to form section
   - Pre-select corresponding option in event type dropdown
   - Example: "Enquire About Private Dining" → selects "Private Dining"

10. **Form success handling:**
    - Custom `handleFormSuccess` function
    - Capture form data
    - Hide form card (fade to opacity 0, 0.4s)
    - Populate success message with submitted data
    - Show success card (fade in, 0.5s)
    - Animate CheckCircle icon (scale 0 to 1, elastic ease)
    - Animate heading line reveal
    - Stagger summary rows (0.1s delay)

11. **Success message reset:**
    - Listen for "Submit Another Enquiry" button click
    - Hide success card
    - Show form card
    - Reset form fields
    - Clear validation errors

12. **Smooth scroll to form:**
    - Function to scroll to enquiry form section
    - Used by event type buttons and private room button
    - Smooth behavior, offset for navbar

**Function organization:**
```javascript
// Hero animations
function initHeroAnimations() { }

// Scroll animations
function initScrollAnimations() { }

// Form initialization
function initEnquiryForm() { }

// Event type pre-selection
function initEventTypeButtons() { }

// Success message handling
function handleFormSuccess(data) { }
function showSuccessMessage(data) { }
function resetForm() { }

// Initialize all
function init() {
    initHeroAnimations();
    initScrollAnimations();
    initEnquiryForm();
    initEventTypeButtons();
}

document.addEventListener('DOMContentLoaded', init);
```

**Verification checklist:**
- [ ] All element IDs match HTML
- [ ] Hero animation timeline runs on page load
- [ ] Scroll animations trigger at correct viewport positions
- [ ] Form handler initializes without errors
- [ ] Flatpickr initializes on date field
- [ ] Custom selects work
- [ ] Guest stepper works (min/max enforced)
- [ ] Character counter updates
- [ ] Event type buttons scroll to form and pre-select
- [ ] Form submission shows success message
- [ ] Success message displays submitted data
- [ ] Reset button works
- [ ] No console errors

---

## GLOBAL ELEMENTS

These elements are handled automatically by existing core files:

- **Navbar:** Loads via `component-loader.js` from `components/navbar.html`
- **Footer:** Loads via `component-loader.js` from `components/footer.html`
- **Reservation CTA:** Loads via `component-loader.js` from `components/reservation-cta.html`
- **Custom cursor:** Initialized by `cursor.js`
- **Page loader:** Handled by `loader.js`
- **Back to top button:** Handled by `main.js`
- **Smooth scroll:** Initialized by `smooth-scroll.js` using Lenis

No additional setup needed for these elements.

---

## SECTION BY SECTION BREAKDOWN

### Section 1 — Page Hero

**Design and Layout:**
- Height: 55-60vh (shorter than standard hero)
- Background: `hero-events.webp` — wide shot of private dining room with candelabras and floral centerpiece
- Overlay: Dark at 68% opacity (heavier than most pages for readability)
- Content: Centered horizontally and vertically

**Layout from top to bottom:**
1. Breadcrumb (small muted DM Sans)
2. Gold label (uppercase, wide letter spacing)
3. Main heading (large Cormorant Garamond)
4. Subheading (DM Sans muted)
5. Two trust items side by side (icons + text)
6. Gold horizontal separator line at bottom

**Written Copy:**
- **Breadcrumb:** `Home → Private Events`
- **Label:** `PRIVATE EVENTS AND DINING`
- **Heading:** `Events and Occasions`
- **Subheading:** `Intimate celebrations, exclusive dinners and curated experiences — all crafted entirely around you.`
- **Trust item left:** Lucide Users icon + `Up to 20 Guests`
- **Trust item right:** Lucide Calendar icon + `Bespoke Arrangements`

**Animation:**
- 0.3s: Breadcrumb fades in
- 0.5s: Gold label fades up
- 0.7s: Main heading Animation 1 line reveal
- 1.0s: Subheading fades up
- 1.2s: Trust items fade in together
- 1.4s: Gold line draws from center outward (GSAP scaleX 0 to 1)

---

### Section 2 — Event Types

**Design and Layout:**
- Background: Dark primary
- Section label: `WHAT WE OFFER` (centered, uppercase gold, wide letter spacing)
- Section heading: `How Can We Host You?` (Cormorant Garamond, centered)
- Intro paragraph: Two sentences explaining tailored events (DM Sans muted, centered)
- Layout: Two column grid desktop, single column mobile

**Card structure (all four cards):**
- Full bleed image (top 55% of card)
- Dark gradient overlay at bottom edge of image
- Content area: Dark surface #1A1A18, generous padding
- Gold ornamental symbol: ✦
- Event type name: Cormorant Garamond medium cream
- Description: 2-3 lines, DM Sans small muted
- Thin gold separator line (20% opacity)
- Full width outlined gold button

**Card hover effects:**
- Image zooms to 106% scale inside container (0.5s transition)
- Card lifts slightly with shadow

**Card 1 — Private Dining:**
- **Image:** `assets/images/events/private-dining-setup.webp`
- **Name:** `Private Dining`
- **Description:** `Our exclusive private dining room accommodates up to 20 guests for the most intimate of occasions. From the menu to the flowers, every detail is curated around you.`
- **Capacity:** `Up to 20 guests`
- **Button:** `Enquire About Private Dining`
- **Button action:** Scroll to form, pre-select "Private Dining"

**Card 2 — Corporate Events:**
- **Image:** `assets/images/events/corporate-event.webp`
- **Name:** `Corporate Events`
- **Description:** `Impress clients and reward your team with a Lumière corporate dinner. We offer bespoke menus, AV arrangements and dedicated service staff for the evening.`
- **Capacity:** `Up to 20 guests`
- **Button:** `Enquire About Corporate Dining`
- **Button action:** Scroll to form, pre-select "Corporate Event"

**Card 3 — Celebrations:**
- **Image:** `assets/images/events/celebration.webp`
- **Name:** `Celebrations`
- **Description:** `Birthdays, anniversaries, engagements and proposals — our team transforms every celebration into a memory that stays with you long after the evening ends.`
- **Capacity:** `Up to 20 guests`
- **Button:** `Enquire About a Celebration`
- **Button action:** Scroll to form, pre-select "Birthday Celebration"

**Card 4 — Wine and Tasting Evenings:**
- **Image:** `assets/images/interior/dining-room-01.webp`
- **Name:** `Wine and Tasting Evenings`
- **Description:** `Join us for an exclusive curated evening with our head sommelier. Seasonal tasting menus paired with exceptional wines selected to complement every course.`
- **Capacity:** `Up to 30 guests`
- **Button:** `Enquire About a Tasting Evening`
- **Button action:** Scroll to form, pre-select "Wine and Tasting Evening"

**Animation:**
- Section heading: Animation 1 line reveal on scroll
- Intro paragraph: Fade up after heading
- Four cards: Stagger in using Animation 3 (top-left, top-right, bottom-left, bottom-right, 0.18s stagger)
- Card images: Subtle Animation 2 parallax at 15% scroll speed

---

### Section 3 — Private Dining Room Feature

**Design and Layout:**
- Background: Slightly lighter surface #1A1A18
- Layout: 55% left (images) / 45% right (content) on desktop
- Mobile: Stacked — images top, content below

**Left Column — Image Arrangement:**
- **Main image:** `assets/images/interior/private-dining.webp`
  - Full column height
  - Shows full private dining room
- **Overlapping smaller image:** `assets/images/interior/dining-room-02.webp`
  - Portrait format
  - Position: Bottom-right corner of main image
  - Border: 2px solid gold at 50% opacity
  - Shadow: Subtle dark box shadow
  - Elevated appearance
- **Mobile:** Single main image only, no overlap

**Right Column — Text Content:**

1. **Gold label:** `THE PRIVATE ROOM` (uppercase, small, gold)

2. **Heading:** `An Exclusive Space Reserved for You` (large Cormorant Garamond)

3. **Paragraph:**
   ```
   Separated entirely from the main dining room, our private space seats up to twenty guests around a single magnificent table. The room is yours for the evening — the menu, the pace, the atmosphere, the music — all curated to your vision. Whether you are hosting twelve for a birthday dinner or twenty for a boardroom celebration, the experience will be entirely your own.
   ```
   (DM Sans muted, body size)

4. **Gold divider line** (30% opacity)

5. **Capacity and feature info blocks** (2x2 grid):

   **Block 1:**
   - Icon: Lucide Users (gold)
   - Label: `CAPACITY` (uppercase, small, muted)
   - Value: `Up to 20 guests` (cream)

   **Block 2:**
   - Icon: Lucide Clock (gold)
   - Label: `MINIMUM BOOKING` (uppercase, small, muted)
   - Value: `3 hours` (cream)

   **Block 3:**
   - Icon: Lucide UtensilsCrossed (gold)
   - Label: `CATERING` (uppercase, small, muted)
   - Value: `Bespoke menu available` (cream)

   **Block 4:**
   - Icon: Lucide Wine (gold)
   - Label: `MINIMUM SPEND` (uppercase, small, muted)
   - Value: `From £150 pp` (cream)

6. **Gold divider line**

7. **CTA Button:**
   - Text: `Enquire About the Private Room`
   - Style: Full width, outlined gold
   - Action: Scroll to form, pre-select "Private Dining"

8. **Contact line:**
   - Text: `Or speak to our events team directly — +44 20 7000 0001`
   - Style: Small muted DM Sans, centered
   - Phone number: Clickable link

**Animation:**
- Left main image: Slide from left (x: -40px to 0) with fade
- Overlapping image: Scale from 0.9 to 1.0 with fade (after main)
- Gold label: Fade in
- Heading: Animation 1 line reveal
- Paragraph: Fade up
- Info blocks: Stagger using Animation 3 (top to bottom in pairs)
- Button: Scale in last

---

### Section 4 — Upcoming Events

**Design and Layout:**
- Background: Dark primary
- Section label: `WHAT'S ON` (centered, uppercase gold)
- Section heading: `Upcoming Experiences` (Cormorant Garamond, centered)
- Intro text: `Join us for one of our seasonal dining experiences — open to all guests.` (DM Sans muted, centered)
- Layout: Three column grid desktop, two column tablet, single column mobile

**Card structure:**
- Vertical layout
- Full bleed image at top
- Date badge overlaid on top-left corner of image
- Content area on dark surface #1A1A18

**Date badge design:**
- Small dark pill with thin gold border
- Month abbreviation (uppercase, small gold DM Sans) above day number (large Cormorant Garamond gold)
- Position: Top-left corner with padding from edge
- Example format: `DEC` above `24`

**Card content:**
- Event name (Cormorant Garamond medium cream)
- One line description (DM Sans small muted)
- Thin gold separator line
- Bottom row: Price left (Cormorant Garamond gold) + Button right (small outlined gold)

**Card hover effects:**
- Card lifts 4px with subtle shadow
- Image zooms to 106% scale (contained)

**Event 1 — Christmas Tasting Menu:**
- **Image:** `assets/images/events/christmas-tasting.webp`
- **Date badge:** `DEC / 24`
- **Name:** `Christmas Tasting Menu Evening`
- **Description:** `A nine-course festive tasting experience with paired wines selected by our head sommelier.`
- **Price:** `£195 per person`
- **Button:** `Book This Event` → `reservations.html`

**Event 2 — New Year's Eve:**
- **Image:** `assets/images/events/new-years-eve.webp`
- **Date badge:** `DEC / 31`
- **Name:** `New Year's Eve Prestige Dinner`
- **Description:** `Welcome the new year with a spectacular ten-course prestige menu, Champagne reception and live piano.`
- **Price:** `£285 per person`
- **Button:** `Book This Event` → `reservations.html`

**Event 3 — Valentine's Night:**
- **Image:** `assets/images/events/valentines.webp`
- **Date badge:** `FEB / 14`
- **Name:** `Valentine's Night — A Table for Two`
- **Description:** `An intimate five-course menu for couples, with a Champagne toast, rose petal setting and a petit four gift.`
- **Price:** `£165 per person`
- **Button:** `Book This Event` → `reservations.html`

**Animation:**
- Section heading: Animation 1 line reveal on scroll
- Intro paragraph: Fade up
- Three cards: Stagger in using Animation 3 (left to right, 0.18s stagger)
- Date badges: Scale from 0.85 to 1.0 with fade (after card appears) — moment of delight

---

### Section 5 — Enquiry Form Section

**Design and Layout:**
- Background: Dark primary
- Layout: Two column split desktop (58% form / 42% info), stacked mobile (form first)
- Form container: Dark surface card #1A1A18, thin gold border (20% opacity), generous padding, subtle gold box shadow

**Left Column — The Enquiry Form:**

**Form heading:**
- Heading: `Send an Enquiry` (Cormorant Garamond)
- Subtext: `Our events team will respond within 24 hours` (DM Sans small muted)

**Form ID:** `events-enquiry-form` (for JS targeting)

**Form fields organized in groups:**

**Group 1 — Personal Details** (side by side desktop, stacked mobile):
1. **Full Name** (required)
   - Label: `FULL NAME`
   - Type: text
   - Placeholder: `Your full name`
   - Required: Yes
   - Minlength: 2
   - Validation error: `Please enter your full name`

2. **Email Address** (required)
   - Label: `EMAIL ADDRESS`
   - Type: email
   - Placeholder: `your.email@example.com`
   - Required: Yes
   - Validation error: `Please enter a valid email address`

**Group 2 — Contact** (side by side desktop, stacked mobile):
3. **Phone Number** (required)
   - Label: `PHONE NUMBER`
   - Type: tel
   - Placeholder: `+44 20 0000 0000`
   - Required: Yes
   - Validation error: `Please enter a valid phone number`

4. **Company or Organisation** (optional)
   - Label: `COMPANY OR ORGANISATION — OPTIONAL`
   - Type: text
   - Placeholder: `Company name`
   - Required: No

**Group 3 — Event Details** (side by side desktop, stacked mobile):
5. **Event Type** (required, custom select)
   - Label: `EVENT TYPE`
   - ID: `event-type-select` (for pre-selection)
   - Options:
     - `Private Dining`
     - `Corporate Event`
     - `Birthday Celebration`
     - `Anniversary Dinner`
     - `Engagement or Proposal`
     - `Wine and Tasting Evening`
     - `Other`
   - Required: Yes
   - Validation error: `Please select an event type`

6. **Preferred Date** (required, Flatpickr)
   - Label: `PREFERRED DATE`
   - Type: text (Flatpickr converts)
   - Placeholder: `Select a date`
   - Required: Yes
   - Flatpickr config: Dark luxury theme, disable past dates, minDate: today
   - Validation error: `Please select a preferred date`


**Group 4 — Event Specifics** (side by side desktop, stacked mobile):
7. **Number of Guests** (required, custom stepper)
   - Label: `NUMBER OF GUESTS`
   - Type: number (or custom stepper)
   - Min: 2
   - Max: 50
   - Default: 10
   - Required: Yes
   - Validation error: `Please enter number of guests`

8. **Preferred Time** (required, custom select)
   - Label: `PREFERRED TIME`
   - Options (30-minute intervals):
     - `6:00 PM`
     - `6:30 PM`
     - `7:00 PM`
     - `7:30 PM`
     - `8:00 PM`
     - `8:30 PM`
     - `9:00 PM`
     - `9:30 PM`
     - `10:00 PM`
   - Required: Yes
   - Validation error: `Please select a preferred time`

**Group 5 — Budget** (full width):
9. **Approximate Budget** (optional, custom select)
   - Label: `APPROXIMATE BUDGET — OPTIONAL`
   - Options:
     - `Under £75 per person`
     - `£75 to £125 per person`
     - `£125 to £175 per person`
     - `£175 to £250 per person`
     - `Over £250 per person`
     - `To be discussed`
   - Required: No

**Group 6 — Message** (full width):
10. **Additional Details** (optional, textarea)
    - Label: `ADDITIONAL DETAILS`
    - Placeholder: `Please share any additional details about your event — theme, dietary requirements, special arrangements, or anything else we should know.`
    - Min height: 140px
    - Max length: 600 characters
    - Character counter: Bottom right `0 / 600`
    - Border: Gold 20% opacity, transitions to full gold on focus
    - Validation error: `Maximum 600 characters reached`

**Submit Button:**
- Text: `Submit Enquiry`
- Icon: Lucide Send (right side)
- Style: Full width, 56px height, outlined gold border, transparent background, gold text
- Hover: Fills completely gold with dark text, arrow slides right
- Transition: 0.3s ease

**Below submit button:**
- Text: `We aim to respond to all enquiries within 24 hours. For urgent requests please call our events team directly on the number below.`
- Style: Small muted DM Sans, centered

**Field styling (all fields):**
- Underline input style (bottom border only)
- Border: Gold 20% opacity
- Focus: Border transitions to full gold opacity
- Label: Small uppercase DM Sans muted, transitions to gold on focus
- Input text: DM Sans cream


**Right Column — Supporting Information:**

Four information blocks stacked vertically with generous spacing. No card background — floats on dark primary.

**Block 1 — Why Choose Lumière:**
- Label: `WHY LUMIÈRE` (gold, uppercase, small)
- Content: Three bullet points with small gold dots:
  - `Dedicated events coordinator`
  - `Bespoke menu design with Chef Marchand`
  - `White glove service throughout`

**Block 2 — What's Included:**
- Label: `WHAT'S INCLUDED` (gold, uppercase, small)
- Content: List in DM Sans small muted:
  - `Exclusive use of private dining room`
  - `Personalised menu printed with your event details`
  - `Floral arrangements included`
  - `Dedicated sommelier available`
  - `Room dressed to your theme`

**Block 3 — Contact the Events Team:**
- Label: `SPEAK TO US` (gold, uppercase, small)
- Phone: Lucide Phone icon + `+44 20 7000 0001` (clickable `tel:` link)
- Email: Lucide Mail icon + `events@lumiere-restaurant.co.uk` (clickable `mailto:` link)
- Note: `Our events team is available Monday to Friday 10am to 6pm` (very small muted)

**Block 4 — Testimonial:**
- Label: `WHAT OUR HOSTS SAY` (gold, uppercase, small)
- Quote: `"Lumière transformed our anniversary dinner into an evening we will never forget. The attention to detail was extraordinary."` (Cormorant Garamond italic cream)
- Attribution: `— Catherine and William Forsythe` (small muted)
- Event type: `30th Anniversary Dinner` (small muted)

**Animation:**
- Form card: Slide in from left (x: -40px to 0) with fade on scroll
- Form card border: Fade from 0 to 20% opacity as card appears
- Right column blocks: Stagger in from right using Animation 3 (0.15s stagger)

**Pre-selection behavior:**
When event type card buttons or private room button are clicked:
- Page smoothly scrolls to enquiry form
- Event Type dropdown automatically pre-selects corresponding option
- Handled in events.js using data attributes on buttons

---

### Section 6 — Success Message Overlay

**Design and Layout:**
- Hidden by default (display: none or opacity: 0)
- Appears in place of form card after successful submission
- Same dimensions and position as form card
- Dark surface #1A1A18 with gold border
- Centered content layout

**Required elements:**

1. **Success icon:**
   - Lucide CheckCircle icon (large, gold)
   - ID for animation: `success-icon`

2. **Heading:**
   - Text: `Your Enquiry Has Been Received`
   - Style: Cormorant Garamond, centered
   - ID for animation

3. **Paragraph:**
   - Text: `Thank you for your interest in hosting your event at Lumière. A member of our events team will contact you personally within 24 hours to discuss your occasion in detail. We very much look forward to welcoming you.`
   - Style: DM Sans muted, centered

4. **Gold divider line**

5. **Enquiry summary** (two column mini layout):
   - **Name:** Label `Name:` (muted) + Value from form (cream)
   - **Event Type:** Label `Event Type:` (muted) + Value from form (cream)
   - **Date:** Label `Date:` (muted) + Value from form (cream)
   - **Guests:** Label `Guests:` (muted) + Value from form (cream)
   - Layout: Labels left-aligned, values right-aligned or left with spacing

6. **Gold divider line**

7. **Reset button:**
   - Text: `Submit Another Enquiry`
   - Style: Secondary outlined gold button, centered
   - Action: Reset form, hide success card, show form card

**Animation sequence:**
- Form card: Fade to opacity 0 (0.4s)
- Success card: Fade in from opacity 0 (0.5s)
- CheckCircle icon: Scale from 0 to 1 with GSAP elastic ease (bounce effect — celebration moment)
- Heading: Quick line reveal
- Summary rows: Stagger in top to bottom (0.1s delay)

**JavaScript handling:**
- Success card ID: `enquiry-success-message`
- Form card ID: `enquiry-form-card`
- Populate summary values from form data
- Toggle visibility classes

---

### Section 7 — Reservation CTA Component

**Design and Layout:**
- Component loads via component-loader.js
- Container: `<div id="reservation-cta-container"></div>`
- Loads: `components/reservation-cta.html`

**Purpose:**
On the events page, the CTA is appropriate because guests who are not ready to make a full private dining enquiry may still want to make a regular table reservation.

**Content (from component):**
- Atmospheric background image
- Dark overlay
- Centered heading: `Reserve Your Evening`
- Outlined gold button linking to reservations page

**No additional work needed** — component loads automatically.

---

## FORM VALIDATION DETAILS

| Field | Rule | Error Message |
|-------|------|---------------|
| Full Name | Required, minimum 2 characters | Please enter your full name |
| Email | Required, valid email format | Please enter a valid email address |
| Phone | Required, minimum 10 digits | Please enter a valid phone number |
| Company | Optional | No error needed |
| Event Type | Required — must select one | Please select an event type |
| Date | Required, cannot be past date | Please select a preferred date |
| Guests | Required, between 2 and 50 | Please enter number of guests |
| Time | Required | Please select a preferred time |
| Budget | Optional | No error needed |
| Message | Optional, maximum 600 characters | Maximum 600 characters reached |

**Pre-selection behavior:**
When any of the four event type cards in Section 2 or the private dining room button in Section 3 are clicked:
- Page smoothly scrolls to enquiry form
- Event Type dropdown automatically pre-selects corresponding option
- Example: Clicking "Enquire About Corporate Dining" pre-selects "Corporate Event"
- Handled in events.js using data attributes or URL hash

---

## ANIMATIONS SUMMARY

| Section | Animation | Type |
|---------|-----------|------|
| Hero — breadcrumb | Fade in at 0.3s | GSAP |
| Hero — label | Fade up at 0.5s | GSAP |
| Hero — heading | Line reveal at 0.7s | Animation 1 |
| Hero — subheading | Fade up at 1.0s | GSAP |
| Hero — trust items | Fade in together at 1.2s | GSAP |
| Hero — gold line | ScaleX from centre at 1.4s | GSAP |
| Event types — heading | Line reveal on scroll | Animation 1 |
| Event types — paragraph | Fade up after heading | GSAP |
| Event types — four cards | Stagger in 2x2 grid | Animation 3 |
| Event type — card images | Subtle parallax on scroll | Animation 2 |
| Private room — main image | Slide in from left | GSAP |
| Private room — overlay image | Scale from 0.9 to 1.0 | GSAP |
| Private room — heading | Line reveal | Animation 1 |
| Private room — paragraph | Fade up | GSAP |
| Private room — info blocks | Stagger top to bottom in pairs | Animation 3 |
| Private room — button | Scale in last | GSAP |
| Upcoming events — heading | Line reveal | Animation 1 |
| Upcoming events — cards | Stagger left to right | Animation 3 |
| Upcoming events — date badges | Scale from 0.85 to 1.0 after cards | GSAP |
| Enquiry form card | Slide in from left | GSAP |
| Enquiry form border | Fade from 0 to 20 percent | GSAP |
| Right column blocks | Stagger in from right | Animation 3 |
| Success — form exit | Fade to opacity 0 | GSAP |
| Success — card entrance | Fade in from opacity 0 | GSAP |
| Success — check icon | Scale from 0 elastic bounce | GSAP elastic |
| Success — heading | Quick line reveal | Animation 1 |
| Success — summary rows | Stagger top to bottom | Animation 3 |
| CTA banner | Fade up as unit | AOS |

**Animation reference:**
- **Animation 1:** Line reveal (split text, stagger words/lines)
- **Animation 2:** Parallax scroll effect
- **Animation 3:** Stagger fade-up with slight y-axis movement

---

## MOBILE BEHAVIOUR SUMMARY

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero trust items | Side by side | Stacked vertically |
| Event type cards | Two column grid | Single column stacked |
| Private room section | Split layout image left text right | Stacked — images on top text below |
| Private room images | Main large plus overlapping small | Single image only — no overlap |
| Private room info blocks | Two by two grid | Two by two grid — unchanged |
| Upcoming events cards | Three column grid | Single column stacked |
| Upcoming events date badge | Top left of image | Top left of image — unchanged |
| Enquiry form and info | Two column 58/42 split | Single column stacked form first |
| Form field groups | Two fields side by side | Single column stacked |
| Form card padding | 48px all sides | 24px all sides |
| Right column info | Four blocks in right column | Four blocks below form |
| Submit button | Full width of form card | Full width unchanged |
| Success card | Same dimensions as form | Same width as form |
| Slide animations | 40px movement | 20px movement |
| Stagger delays | 0.15 to 0.18 seconds | 0.08 to 0.1 seconds |
| Parallax on cards | Active at 15 percent speed | Disabled completely |
| Private room parallax | Active | Disabled |

---

## TECHNICAL IMPLEMENTATION NOTES

### Form Handler Integration

The enquiry form uses the existing `form-handler.js` component. Initialize in `events.js`:

```javascript
initFormHandler('#events-enquiry-form', {
    showSuccessMessage: false,  // Custom success handling
    resetOnSuccess: false,
    submitEndpoint: null,  // Buyer configures their endpoint
    onSuccess: handleFormSuccess  // Custom function
});
```

### Flatpickr Configuration

Same dark luxury theme as reservations page:

```javascript
flatpickr('#event-date', {
    minDate: 'today',
    dateFormat: 'Y-m-d',
    theme: 'dark',  // Custom CSS for luxury styling
    disableMobile: true
});
```

### Custom Select Dropdowns

Build custom styled select dropdowns (not native `<select>`):
- Hidden native select for form submission
- Custom div structure for visual display
- Click to toggle dropdown
- Option selection updates hidden select value
- Same styling as reservations page custom selects


### Guest Number Stepper

Custom stepper component:
- Minus button (decreases, min 2)
- Number display (center)
- Plus button (increases, max 50)
- Hidden input field for form submission
- Buttons disabled at min/max

### Event Type Pre-selection

Add data attributes to buttons:
```html
<button class="event-enquiry-btn" data-event-type="Private Dining">
    Enquire About Private Dining
</button>
```

JavaScript logic:
```javascript
document.querySelectorAll('.event-enquiry-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const eventType = e.target.dataset.eventType;
        // Scroll to form
        document.querySelector('#enquiry-form-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
        // Pre-select in dropdown
        document.querySelector('#event-type-select').value = eventType;
    });
});
```

### Character Counter

Update on textarea input:
```javascript
const textarea = document.querySelector('#event-message');
const counter = document.querySelector('#char-counter');
const maxLength = 600;

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    counter.textContent = `${length} / ${maxLength}`;
    
    if (length >= maxLength) {
        textarea.value = textarea.value.substring(0, maxLength);
    }
});
```

---

## BUYER CUSTOMIZATION POINTS

### Easy to customize:
- Event type options in dropdown
- Time slot options
- Budget ranges
- Guest min/max values
- Form submission endpoint (in form-handler config)
- Success message text
- Upcoming events content (dates, names, prices)
- Contact phone and email
- Testimonial content

### Requires more work:
- Adding/removing event type cards
- Changing image arrangement in private room section
- Modifying form field structure
- Changing grid layouts

---

## FINAL VERIFICATION CHECKLIST

Before considering the Events page complete, verify:

**HTML:**
- [ ] All 11 build steps completed in order
- [ ] Page title and meta description correct
- [ ] All CSS files linked in correct order
- [ ] Flatpickr CSS and JS included
- [ ] All sections present with correct content
- [ ] All animation target IDs present
- [ ] Form has correct ID for JS targeting
- [ ] All buttons have correct actions/links
- [ ] Component container divs present
- [ ] All script tags in correct order

**CSS:**
- [ ] Mobile-first approach with breakpoints
- [ ] All sections styled completely
- [ ] Grid layouts work at all breakpoints
- [ ] Hover effects on interactive elements
- [ ] Focus states on form fields
- [ ] Transitions smooth
- [ ] Colors match specification
- [ ] Typography correct (Cormorant Garamond, DM Sans)

**JavaScript:**
- [ ] No console errors on load
- [ ] Hero animations run on page load
- [ ] Scroll animations trigger correctly
- [ ] Form handler initializes
- [ ] Flatpickr works on date field
- [ ] Custom selects functional
- [ ] Guest stepper works
- [ ] Character counter updates
- [ ] Event type pre-selection works
- [ ] Form submission shows success message
- [ ] Success message populated with data
- [ ] Reset button works

**Images:**
- [ ] All image paths correct
- [ ] Hero background loads
- [ ] Event type card images load
- [ ] Private room images load
- [ ] Upcoming event images load
- [ ] Images have appropriate alt text

**Functionality:**
- [ ] Form validation works on all fields
- [ ] Error messages display correctly
- [ ] Submit button disabled during submission
- [ ] Success message replaces form
- [ ] Pre-selection from event cards works
- [ ] All links work (phone, email, buttons)
- [ ] Smooth scroll works
- [ ] Back to top button appears and works

---

## BUILD COMPLETE

Once all 11 steps are verified, the Events page is complete and ready for buyer customization.

