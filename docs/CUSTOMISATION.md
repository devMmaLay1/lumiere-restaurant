# Lumière Template - Customisation Guide

**👋 Welcome, Buyer!** This guide will help you customize the Lumière template to match your restaurant's brand. Everything is designed to be easily editable, even if you're not a developer.

---

## 🎯 Before You Start

### Understanding the 🔧 EDIT Comments

Throughout the code, you'll see comments like this:
```html
<!-- 🔧 EDIT: Replace with your restaurant name -->
```

These comments mark exactly where you should make changes. Just look for the 🔧 wrench emoji!

### Three Types of Files

1. **HTML files** (.html) - Your content (text, images, structure)
2. **CSS files** (.css) - Your styling (colors, fonts, spacing)
3. **JavaScript files** (.js) - Your functionality (animations, forms, sliders)

**Most buyers only need to edit HTML and CSS files.**

### File Organization

```
lumiere/
├── *.html                  # 🔧 Edit content here
├── components/*.html       # 🔧 Edit navbar/footer here
├── assets/css/main.css     # 🔧 Edit colors & fonts here
├── assets/css/pages/*.css  # 🔧 Edit page-specific styles here
├── assets/js/              # ⚠️ Rarely needs editing
└── assets/images/          # 🔧 Replace with your images
```

---

## 📋 Table of Contents

**🎯 New Buyers: Start with docs/BUYER-GUIDE.md for a 5-minute quick start!**

**Essential Customizations (Start Here)**
1. [Change Restaurant Name Site-Wide](#1-change-restaurant-name-site-wide)
2. [Change Colors](#2-change-colors)
3. [Replace Logo](#4-replace-logo)
4. [Replace Images](#5-replace-images)
5. [Update Contact Details](#7-update-contact-details)

**Content Customizations**
6. [Update Menu Items](#6-update-menu-items)
7. [Update Testimonials](#update-testimonials)
8. [Update Chef Section](#update-chef-section)

**Advanced Customizations**
9. [Change Fonts](#3-change-fonts)
10. [Replace Google Maps](#8-replace-google-maps)
11. [Connect Reservation Form](#9-connect-reservation-form)
12. [Adjust Animations](#adjust-animations)

**Deployment**
13. [Deploy Your Site](#10-deploy-your-site)

**Page-Specific Guides**
14. [Customise Menu Page Hero](#11-customise-menu-page-hero)
15. [Customise Menu Introduction Section](#12-customise-menu-introduction-section)
16. [Customise Menu Filter Bar](#13-customise-menu-filter-bar)
17. [Customise Menu Items & Pagination](#14-customise-menu-items--pagination)
18. [Customise Events Page](#customise-events-page)
19. [Customise Reservations Page](#customise-reservations-page)

**Understanding the Code**
18. [Understanding the Code Structure](#🧠-understanding-the-code-structure)
19. [Finding What to Edit](#🔍-finding-what-to-edit)
20. [Common Mistakes to Avoid](#⚠️-common-mistakes-to-avoid)
21. [Advanced Customization Tips](#🎨-advanced-customization-tips)
22. [Troubleshooting Guide](#🐛-troubleshooting-guide)

---

## 1. Change Restaurant Name Site-Wide

The template uses "Lumière" as the default restaurant name. To change it everywhere:

### Using VS Code Find and Replace (Recommended)

1. Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
2. In "Find" field, type: `Lumière`
3. In "Replace" field, type: `Your Restaurant Name`
4. Click "Replace All"

This will update the name in:
- All page titles
- Navbar logo text
- Footer
- Meta descriptions

### Manual Method

Search for the comment `🔧 EDIT: Replace "Lumière" with your restaurant name` in all HTML files and update the text.

---

## 2. Change Colors

All colors are controlled by CSS variables in one place. This makes it incredibly easy to change your entire color scheme.

### Step-by-Step

1. Open `assets/css/main.css`
2. Find the `:root` section at the top (around line 10)
3. Edit the color values:

```css
:root {
    /* Background colors */
    --bg-primary: #0D0D0D;        /* Main background */
    --bg-surface: #1A1A18;        /* Cards and surfaces */
    
    /* Accent colors */
    --accent-gold: #C9A84C;       /* Buttons, highlights */
    --accent-gold-hover: #E8C56A; /* Hover state */
    
    /* Text colors */
    --text-cream: #F5ECD7;        /* Special text */
    --text-primary: #F0EDE6;      /* Main text */
    --text-muted: #9A9589;        /* Secondary text */
    
    /* UI colors */
    --border: #2A2720;            /* Borders and dividers */
    --overlay: rgba(0, 0, 0, 0.6); /* Image overlays */
}
```

4. Save the file
5. Refresh your browser - all colors update automatically!

### Color Tips

- Keep backgrounds dark for the luxury feel
- Use a warm metallic accent (gold, copper, silver)
- Ensure text has good contrast against backgrounds
- Test on mobile devices

---

## 3. Change Fonts

The template uses three Google Fonts. To change them:

### Step 1: Choose Your Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts:
   - **Heading font** - Elegant serif (e.g., Cormorant Garamond, Playfair Display)
   - **Body font** - Clean sans-serif (e.g., DM Sans, Inter, Work Sans)

### Step 2: Update Google Fonts Link

In **every HTML file** (`index.html`, `menu.html`, etc.), find this line in the `<head>`:

```html
<!-- 🔧 EDIT: Replace these fonts with your preferred Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

Replace with your Google Fonts link.

### Step 3: Update CSS Variables

Open `assets/css/main.css` and update these variables:

```css
:root {
    --font-heading: 'Your Heading Font', serif;
    --font-subheading: 'Your Subheading Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

---

## 4. Replace Logo

### Step 1: Prepare Your Logo

- **Format:** WebP (recommended) or PNG
- **Size:** 200-300px wide, transparent background
- **Color:** Light color (cream, white, gold) to show on dark background
- **Filename:** `logo.webp`

### Step 2: Replace the File

1. Navigate to `assets/images/brand/`
2. Replace `logo.webp` with your logo file
3. Keep the same filename OR update all references

### Step 3: Update References (if you changed the filename)

Search for `logo.webp` in all files and update to your new filename.

---

## 5. Replace Images

All images are organized by type in `assets/images/`. Each folder has a specific purpose:

### Image Folders

| Folder | What Goes Here | Recommended Size |
|--------|----------------|------------------|
| `hero/` | Full-screen hero backgrounds | 1920x1080px |
| `dishes/` | Food photography | 800x600px |
| `interior/` | Restaurant interior shots | 1200x800px |
| `team/` | Chef and staff portraits | 600x800px |
| `events/` | Private dining and events | 1200x800px |
| `gallery/` | Gallery page images | 800x800px |
| `brand/` | Logo and brand assets | Various |

### Image Guidelines

- **Format:** WebP for best performance (or JPG)
- **Quality:** High quality but optimized (use tools like TinyPNG)
- **Naming:** Use descriptive names (e.g., `dish-wagyu-beef.webp`)
- **Alt text:** Update alt attributes in HTML for accessibility

### How to Replace

1. Add your images to the appropriate folder
2. Find the `<img>` tag in the HTML
3. Look for the comment `🔧 EDIT: Replace with your image`
4. Update the `src` attribute:

```html
<!-- 🔧 EDIT: Replace with your dish image -->
<img src="assets/images/dishes/your-image.webp" alt="Your dish description">
```

---

## 6. Update Menu Items

Menu items are in `menu.html`. Each item is a card with this structure:

```html
<!-- 🔧 EDIT: Add or remove menu items as needed -->
<div class="menu-item" data-category="starters">
    <div class="menu-item-image">
        <img src="assets/images/dishes/starter-01.webp" alt="Dish name">
    </div>
    <div class="menu-item-content">
        <h3 class="menu-item-name">Dish Name</h3>
        <p class="menu-item-description">Description of the dish</p>
        <span class="menu-item-price">$42</span>
    </div>
</div>
```

### To Add a Menu Item

1. Copy an existing menu item card
2. Paste it where you want it
3. Update:
   - `data-category` (starters, mains, desserts, drinks)
   - Image src and alt text
   - Dish name
   - Description
   - Price

### To Remove a Menu Item

Delete the entire `<div class="menu-item">...</div>` block.

---

## 7. Update Contact Details

Contact information appears in multiple places. Search for these comments:

### Address

```html
<!-- 🔧 EDIT: Replace with your restaurant address -->
```

### Phone Number

```html
<!-- 🔧 EDIT: Replace with your phone number -->
```

### Email

```html
<!-- 🔧 EDIT: Replace with your email address -->
```

### Opening Hours

```html
<!-- 🔧 EDIT: Update days and hours to match your schedule -->
```

### Social Media Links

```html
<!-- 🔧 EDIT: Replace href with your social media URLs -->
```

Update the `href` attribute in each social link.

---

## 8. Replace Google Maps

### Step 1: Get Your Embed Code

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your restaurant address
3. Click "Share" → "Embed a map"
4. Copy the iframe code

### Step 2: Update in contact.html

Find this comment:

```html
<!-- 🔧 EDIT: Replace iframe src with your Google Maps embed -->
```

Replace the entire `<iframe>` tag with your embed code.

---

## Update Testimonials

Testimonials are in the testimonials section of `index.html`.

### To Edit a Testimonial

Find the testimonial slide and update:

```html
<!-- 🔧 EDIT: Testimonial 1 - Update quote, name, and occasion -->
<div class="swiper-slide">
    <div class="testimonial-card">
        <div class="testimonial-quote-mark">"</div>
        
        <!-- 🔧 EDIT: Update testimonial text -->
        <p class="testimonial-text">Your customer's review goes here...</p>
        
        <div class="testimonial-stars">★★★★★</div>
        
        <!-- 🔧 EDIT: Update guest name -->
        <p class="testimonial-name">Customer Name</p>
        
        <!-- 🔧 EDIT: Update occasion -->
        <p class="testimonial-occasion">Anniversary Dinner</p>
    </div>
</div>
```

### To Add a New Testimonial

1. Copy an entire `<div class="swiper-slide">...</div>` block
2. Paste it inside `<div class="swiper-wrapper">`
3. Update the content

### To Remove a Testimonial

Delete the entire `<div class="swiper-slide">...</div>` block.

### Adjust Slider Speed

1. Open `assets/js/pages/home.js`
2. Find `initTestimonialsSwiper()`
3. Change the `delay` value:

```javascript
autoplay: {
    delay: 6000,  // 🔧 EDIT: Time between slides (milliseconds)
}
```

---

## Update Chef Section

The chef section is on the homepage (`index.html`).

### Change Chef Image

```html
<!-- 🔧 EDIT: Replace with your chef's portrait (recommended: 800x1000px) -->
<img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" alt="Chef Name">
```

### Change Chef Content

All text elements have 🔧 EDIT comments:
- Section label ("Meet The Chef")
- Chef name
- Chef quote
- Biography paragraphs (2-3 recommended)
- Credentials line

---

## Adjust Animations

### Disable All Animations

If you want a simpler site without animations:

1. Open each page's JavaScript file (e.g., `assets/js/pages/home.js`)
2. Comment out or delete the animation init functions

### Adjust Animation Speed

Look for these values in JavaScript files:

```javascript
duration: 0.9,    // 🔧 EDIT: Animation duration in seconds
stagger: 0.15,    // 🔧 EDIT: Delay between items in seconds
delay: 1.6,       // 🔧 EDIT: Delay before animation starts
```

### Adjust Scroll Animation Trigger

```javascript
scrollTrigger: {
    trigger: heading,
    start: 'top 80%',  // 🔧 EDIT: When animation starts
    // 80% = when element is 80% down the viewport
    // Try: 'top 90%' (earlier) or 'top 60%' (later)
}
```

### Common Animation Settings

| Setting | What It Does | Typical Values |
|---------|-------------|----------------|
| `duration` | How long animation takes | 0.5 - 2 seconds |
| `stagger` | Delay between items | 0.1 - 0.3 seconds |
| `delay` | Wait before starting | 0 - 2 seconds |
| `ease` | Animation curve | 'power3.out', 'power2.inOut' |
| `y` | Vertical movement | 20 - 60 pixels |
| `opacity` | Fade effect | 0 (invisible) to 1 (visible) |

---

## 9. Connect Reservation Form

The reservation form in `reservations.html` currently shows a success message without sending data. To make it functional:

### Option 1: Formspree (Easiest - Recommended for Beginners)

**Formspree is a free service that handles form submissions without backend code.**

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Click "New Form" and give it a name (e.g., "Restaurant Reservations")
3. Copy your form endpoint URL (looks like: `https://formspree.io/f/xyzabc123`)
4. Open `assets/js/components/form-handler.js`
5. Find this line (around line 20):

```javascript
submitEndpoint: null,  // 🔧 EDIT: Set to your API endpoint (e.g., Formspree URL)
```

6. Replace with:

```javascript
submitEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',  // Your Formspree endpoint
```

7. Save the file. Your form now sends submissions to your email!

### Option 2: Netlify Forms (If deploying to Netlify)

1. Deploy your site to Netlify (see Deploy section)
2. In your form HTML, add `netlify` attribute to the `<form>` tag:

```html
<form id="reservation-form" netlify>
```

3. Netlify automatically handles form submissions
4. View submissions in your Netlify dashboard

### Option 3: Custom Backend

If you have your own backend API:

1. Open `assets/js/components/form-handler.js`
2. Update `submitEndpoint` with your API URL
3. Modify the fetch request if your API requires different headers/format

### Test Your Form

1. Fill out the form on your local site
2. Submit it
3. Check your email or Formspree dashboard for the submission

---

## 10. Deploy Your Site

### Option 1: Netlify (Recommended)

1. Create account at [Netlify](https://www.netlify.com)
2. Drag and drop your `lumiere` folder
3. Site goes live instantly
4. Free SSL certificate included

### Option 2: Vercel

1. Create account at [Vercel](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 3: Traditional Hosting

1. Use FTP client (FileZilla)
2. Upload all files to your web host
3. Ensure folder structure stays intact

---

## 🎯 Quick Customization Checklist

Before launching, make sure you've updated:

- [ ] Restaurant name (Find & Replace)
- [ ] Logo image
- [ ] All hero images
- [ ] Menu items and prices
- [ ] Contact details (address, phone, email)
- [ ] Opening hours
- [ ] Social media links
- [ ] Google Maps embed
- [ ] Form submission endpoint
- [ ] Page titles and meta descriptions
- [ ] Favicon

---

## 💡 Tips for Best Results

1. **Keep it consistent** - Use the same image style throughout
2. **Optimize images** - Compress before uploading
3. **Test on mobile** - Most visitors will be on phones
4. **Update regularly** - Keep menu and hours current
5. **Backup first** - Always keep a copy before making changes

---

## 🆘 Need Help?

If you get stuck:
1. Check the comments in the code (marked with 🔧 EDIT)
2. Review the README.md file
3. Ensure you're running a local server (not opening HTML directly)

---

**Last Updated:** Menu Page — Step 5 (Mains Section with 8 Cards) Complete

---

## 11. Customise Menu Page Hero

The menu page hero is the large banner at the top of `menu.html`. It includes a background image, breadcrumb, gold label, main heading, subheading, and a gold separator line at the bottom.

### Change the Hero Background Image

1. Open `menu.html`
2. Find this comment near line 53:

```html
<!-- 🔧 EDIT: Change the hero background image below. -->
```

3. Replace the `url(...)` inside the `style` attribute with your own image:

```html
<div class="menu-hero-bg" style="background-image: url('assets/images/hero/hero-menu.webp')"></div>
```

**Image Tips:**
- Use a dark, moody closeup of a plated dish
- Recommended resolution: 1920×1080px or higher
- Format: WebP (best performance) or JPG
- Place the file in `assets/images/hero/`

### Change the Hero Text

All text elements in the hero have `🔧 EDIT` comments above them in `menu.html`:

| Element | What to Edit | HTML ID |
|---------|-------------|---------|
| Breadcrumb | Link text and href | `menu-breadcrumb` |
| Gold label | Small uppercase text (e.g., "OUR MENU") | `menu-hero-label` |
| Main heading | Large heading text (e.g., "The Menu") | `menu-hero-heading` |
| Subheading | Tagline below heading | `menu-hero-subheading` |

### Adjust the Hero Overlay Darkness

1. Open `assets/css/pages/menu.css`
2. Find `.menu-hero-overlay`
3. Adjust the `rgba` alpha values:

```css
/* Higher values = darker overlay */
background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.55) 0%,   /* Top */
    rgba(0, 0, 0, 0.65) 50%,  /* Middle */
    rgba(0, 0, 0, 0.75) 100%  /* Bottom */
);
```

### Change the Hero Section Height

1. Open `assets/css/pages/menu.css`
2. Find `.menu-hero` — look for the `🔧 EDIT` comment
3. The height is set per breakpoint:

| Breakpoint | Default Height | CSS Rule |
|-----------|---------------|----------|
| Mobile | `55vh` | `.menu-hero { min-height: 55vh; }` |
| Tablet (768px+) | `60vh` | `@media (min-width: 768px)` block |
| Desktop (1024px+) | `65vh` | `@media (min-width: 1024px)` block |

### Adjust Hero Animation Timing

1. Open `assets/js/pages/menu.js`
2. Find `initMenuHeroAnimations()`
3. The animation timeline has a `delay` property:

```javascript
const heroTl = gsap.timeline({
    /* 🔧 EDIT: Change delay in seconds.
       1.6s accounts for the page loader finishing. */
    delay: 1.6
});
```

4. Each element's entrance timing can be adjusted by changing its `duration` value.

---

## 12. Customise Menu Introduction Section

The menu introduction is a two-column section below the hero with a philosophy paragraph on the left, a vertical gold divider, and three animated stat counters on the right.

### Change the Philosophy Paragraph

1. Open `menu.html`
2. Find the `🔧 EDIT` comment inside `<div class="menu-intro-text">`
3. Replace the paragraph text with your restaurant's philosophy

### Change Stats (Numbers & Labels)

Each stat uses two attributes:
- `data-count` — The number to count up to
- Label text — Displays below the number

```html
<!-- 🔧 EDIT: Change data-count and label text -->
<div class="menu-stat">
    <span class="menu-stat-number" data-count="7">0</span>
    <span class="menu-stat-label">Tasting Courses</span>
</div>
```

**To add more stats:** Copy an entire `<div class="menu-stat">...</div>` block and paste it inside `<div class="menu-intro-stats">`.

**To remove a stat:** Delete the entire `<div class="menu-stat">...</div>` block.

### Change Stat Number Size

1. Open `assets/css/pages/menu.css`
2. Find `.menu-stat-number`
3. Adjust the `font-size` (default: 42px mobile, 56px desktop)

### Hide the Vertical Divider

The gold divider is hidden on mobile and shown on tablets (768px+). To remove it entirely, delete or comment out the `<div class="menu-intro-divider">` element in `menu.html`.

---

## 13. Customise Menu Filter Bar

The filter bar is a horizontal tab row that sticks to the top of the screen on scroll. It filters menu sections by category.

### Add or Remove Filter Categories

1. Open `menu.html`
2. Find the `🔧 EDIT` comment inside `<div class="menu-filter-inner">`
3. Each tab is a `<button>` with a `data-filter` attribute:

```html
<button class="menu-filter-tab" data-filter="starters">Starters</button>
```

**To add a category:** Copy a button and change the `data-filter` value and label. The filter value must match the `data-category` attribute on the corresponding menu section.

**To remove a category:** Delete the entire `<button>` element.

### Change Sticky Bar Appearance

1. Open `assets/css/pages/menu.css`
2. Find `.menu-filter-bar.sticky`
3. Edit the background and border:

```css
.menu-filter-bar.sticky {
    background: #111111;  /* 🔧 EDIT */
    border-bottom: 1px solid rgba(201, 168, 76, 0.3);  /* 🔧 EDIT */
}
```

### Change Filter Animation Speed

1. Open `assets/js/pages/menu.js`
2. Find `filterMenuItems()` function
3. Change the `speed` variable:

```javascript
/* 🔧 EDIT: Transition speed for filter animation */
const speed = 0.25; // seconds
```

---

## 14. Customise Menu Items & Pagination

### Add a New Menu Item Card

1. Open `menu.html`
2. Find the `<div class="menu-items-grid">` inside the relevant section
3. Copy an existing `<div class="menu-item-card">` block
4. Update the image, name, price, description, and badges

### Menu Item Card Structure

```html
<div class="menu-item-card" data-item>
    <div class="menu-item-image">
        <!-- 🔧 EDIT: Replace with your dish image -->
        <img src="assets/images/dishes/your-dish.webp" alt="Dish name" loading="lazy">
    </div>
    <div class="menu-item-content">
        <div class="menu-item-header">
            <h3 class="menu-item-name">Dish Name</h3>
            <span class="menu-item-price">£24</span>
        </div>
        <p class="menu-item-desc">Brief description of the dish.</p>
        <div class="menu-item-badges">
            <span class="badge badge-gf">GF</span>
        </div>
    </div>
</div>
```

### Dietary Badge Options

| Class | Label | Meaning |
|-------|-------|---------|
| `badge-v` | V | Vegetarian |
| `badge-gf` | GF | Gluten-Free |
| `badge-ve` | VE | Vegan |
| `badge-special` | ★ Chef's Special | House speciality |

### Change Items Per Page (Pagination)

1. Open `assets/js/pages/menu.js`
2. Find `ITEMS_PER_PAGE`:

```javascript
/* 🔧 EDIT: Number of menu item cards shown per page */
const ITEMS_PER_PAGE = 8;
```

3. Change the number (e.g., `12` to show more items per page)

### Change Card Image Hover Zoom

1. Open `assets/css/pages/menu.css`
2. Find `.menu-item-card:hover .menu-item-image img`
3. Change `transform: scale(1.05)` to your preferred zoom level


---

## 🧠 Understanding the Code Structure

### How Components Work

The template uses **component loading** to avoid repeating code. Here's how it works:

1. **Navbar and footer are in separate files** (`components/navbar.html`, `components/footer.html`)
2. **Each page has container divs** (`<div id="navbar-container"></div>`)
3. **JavaScript loads the components** into these containers automatically
4. **Edit once, updates everywhere** - change navbar.html and it updates on all 7 pages

**Files involved:**
- `components/navbar.html` - Navbar content
- `components/footer.html` - Footer content
- `assets/js/core/component-loader.js` - Loading logic (don't edit)

### How Animations Work

The template uses three animation libraries:

1. **GSAP** - Advanced animations (hero parallax, text reveals)
   - Controlled in `assets/js/pages/*.js` files
   - Look for `gsap.from()`, `gsap.to()`, `gsap.timeline()`

2. **AOS (Animate On Scroll)** - Simple scroll animations
   - Add `data-aos="fade-up"` to HTML elements
   - Configured in `assets/js/main.js`

3. **CSS Transitions** - Hover effects
   - Defined in CSS files with `transition` property

**To adjust timing:** Look for 🔧 EDIT comments in JavaScript files.

### How Styling Works

The template uses **CSS Variables** (also called CSS Custom Properties):

```css
:root {
    --accent-gold: #C9A84C;  /* Define once */
}

.button {
    background: var(--accent-gold);  /* Use everywhere */
}
```

**Benefits:**
- Change color once, updates entire site
- Easy to maintain
- No find & replace needed

**Where to edit:** `assets/css/main.css` (lines 10-90)

### File Loading Order

Understanding the loading order helps with troubleshooting:

1. **HTML loads** (structure and content)
2. **CSS loads** (styling)
3. **External libraries load** (GSAP, Swiper, AOS from CDN)
4. **Core JS loads** (component-loader, cursor, navbar)
5. **Component JS loads** (counter, form-handler, slider)
6. **Page JS loads** (home.js, menu.js, etc.)
7. **main.js orchestrates** everything

**If something doesn't work:** Check browser console (F12) for errors.

---

## 🔍 Finding What to Edit

### Method 1: Search for 🔧 EDIT Comments

1. Open VS Code (or your code editor)
2. Press `Ctrl+Shift+F` (Windows/Linux) or `Cmd+Shift+F` (Mac)
3. Search for: `🔧 EDIT`
4. You'll see all customizable sections

### Method 2: Use the File Structure

**To change content:**
- Homepage → `index.html`
- Menu → `menu.html`
- Navbar → `components/navbar.html`
- Footer → `components/footer.html`

**To change colors/fonts:**
- All colors → `assets/css/main.css` (CSS variables)
- Page-specific styles → `assets/css/pages/*.css`

**To change animations:**
- Homepage animations → `assets/js/pages/home.js`
- Menu animations → `assets/js/pages/menu.js`
- Form behavior → `assets/js/components/form-handler.js`

### Method 3: Browser Inspect Element

1. Right-click on any element on your site
2. Select "Inspect" or "Inspect Element"
3. See the HTML structure and CSS classes
4. Find the same element in your code editor

---

## ⚠️ Common Mistakes to Avoid

### 1. Opening HTML Files Directly

❌ **Wrong:** Double-clicking `index.html` to open in browser  
✅ **Right:** Using a local server (Live Server, Python, etc.)

**Why?** JavaScript `fetch()` doesn't work with `file://` protocol. You'll see blank navbar/footer.

### 2. Forgetting to Update All Pages

If you change the navbar or footer, you don't need to update all pages (they load automatically). But if you change:
- Page titles
- Meta descriptions
- Google Fonts link

You need to update each HTML file individually.

### 3. Breaking CSS Variables

❌ **Wrong:**
```css
--accent-gold #C9A84C;  /* Missing colon */
```

✅ **Right:**
```css
--accent-gold: #C9A84C;  /* Colon and semicolon */
```

### 4. Incorrect Image Paths

❌ **Wrong:** `images/logo.webp` (missing assets/)  
✅ **Right:** `assets/images/brand/logo.webp`

**Tip:** All paths are relative to the HTML file location.

### 5. Removing Required HTML Elements

Some elements are required for JavaScript to work:
- `id="navbar-container"` - Navbar loads here
- `id="footer-container"` - Footer loads here
- `class="menu-filter-tab"` - Menu filtering needs this
- `data-count` - Counters need this attribute

**If you remove these, features will break.**

---

## 🎨 Advanced Customization Tips

### Add a New Page

1. Copy an existing HTML file (e.g., `about.html`)
2. Rename it (e.g., `catering.html`)
3. Update the content
4. Add a link to it in `components/navbar.html`
5. Create a CSS file in `assets/css/pages/` if needed
6. Create a JS file in `assets/js/pages/` if needed

### Change Layout Grid

Most sections use CSS Grid. To change columns:

```css
.signatures-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 🔧 EDIT: Change 3 to 2 or 4 */
    gap: 32px;
}
```

### Add Custom CSS

Don't edit existing CSS files directly. Instead:

1. Create `assets/css/custom.css`
2. Add your custom styles there
3. Link it in your HTML after other CSS files:

```html
<link rel="stylesheet" href="assets/css/custom.css">
```

This makes it easier to update the template later without losing your changes.

### Disable Features You Don't Need

**Disable custom cursor:**
- Delete `<div class="custom-cursor"></div>` from HTML
- Delete `<div class="custom-cursor-dot"></div>` from HTML

**Disable page loader:**
- Delete `<div id="page-loader">...</div>` from HTML

**Disable smooth scroll:**
- Remove Lenis.js script tag from HTML
- Remove `smooth-scroll.js` script tag

**Disable specific animations:**
- Open the page's JS file (e.g., `home.js`)
- Comment out the init function call (add `//` before it)

---

## 🐛 Troubleshooting Guide

### Navbar/Footer Not Showing

**Problem:** Blank space where navbar/footer should be  
**Cause:** Opening HTML file directly instead of using a server  
**Solution:** Use Live Server, Python server, or Node.js server (see README.md)

### Images Not Loading

**Problem:** Broken image icons  
**Cause:** Incorrect file path or missing image file  
**Solution:** 
- Check image exists in `assets/images/` folder
- Verify path is correct: `assets/images/folder/filename.webp`
- Check file extension matches (webp vs jpg vs png)

### Animations Not Working

**Problem:** Elements appear without animation  
**Cause:** JavaScript error or library not loaded  
**Solution:**
- Open browser console (F12)
- Look for red error messages
- Check if CDN libraries are loading (check Network tab)
- Ensure you're using a local server

### Form Not Submitting

**Problem:** Form shows success but doesn't send email  
**Cause:** No submission endpoint configured  
**Solution:**
- Set up Formspree account
- Add endpoint to `form-handler.js` (see section 9)
- Test submission

### Colors Not Changing

**Problem:** Changed CSS variable but color didn't update  
**Cause:** Syntax error or browser cache  
**Solution:**
- Check for missing colon or semicolon in CSS
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

### Mobile Menu Not Opening

**Problem:** Hamburger icon doesn't open menu  
**Cause:** JavaScript error or missing element  
**Solution:**
- Check browser console for errors
- Ensure navbar.html loaded correctly
- Verify `navbar.js` is included in HTML

---

## 📞 Getting Help

### Before Asking for Help

1. **Check browser console** (F12) for error messages
2. **Search for 🔧 EDIT comments** in the relevant file
3. **Review this guide** for your specific issue
4. **Check README.md** for setup instructions

### Useful Resources

- **HTML basics:** https://developer.mozilla.org/en-US/docs/Learn/HTML
- **CSS basics:** https://developer.mozilla.org/en-US/docs/Learn/CSS
- **JavaScript basics:** https://developer.mozilla.org/en-US/docs/Learn/JavaScript
- **GSAP docs:** https://greensock.com/docs/
- **Swiper docs:** https://swiperjs.com/
- **Google Fonts:** https://fonts.google.com

---

## ✅ Pre-Launch Checklist

Use this checklist before going live:

### Content
- [ ] Restaurant name updated everywhere
- [ ] All placeholder text replaced
- [ ] Menu items and prices updated
- [ ] Contact information correct
- [ ] Opening hours accurate
- [ ] Social media links working
- [ ] All images replaced with your photos
- [ ] Image alt text updated for SEO

### Technical
- [ ] Logo replaced
- [ ] Favicon added
- [ ] Colors match brand
- [ ] Fonts match brand (if changed)
- [ ] Google Maps embed updated
- [ ] Form submission working (test it!)
- [ ] All pages tested on mobile
- [ ] All pages tested on desktop
- [ ] All links working
- [ ] Browser console has no errors

### SEO & Performance
- [ ] Page titles updated
- [ ] Meta descriptions updated
- [ ] Images optimized (compressed)
- [ ] All images have alt text
- [ ] Site tested on multiple browsers
- [ ] Site loads in under 3 seconds

---

## 🚀 Next Steps After Customization

1. **Test thoroughly** - Check every page, every link, every form
2. **Optimize images** - Use TinyPNG or similar to compress
3. **Deploy** - Upload to Netlify, Vercel, or your hosting
4. **Set up analytics** - Add Google Analytics if needed
5. **Submit sitemap** - Submit to Google Search Console
6. **Monitor forms** - Check Formspree dashboard regularly

---

**Last Updated:** Enhanced with comprehensive buyer guidance and troubleshooting



---

## Customise Events Page

The Events page showcases private dining options and allows guests to enquire about hosting events. See `docs/EVENTS-PAGE-GUIDE.md` for complete build documentation.

### Update Event Type Cards

**File:** `events.html` (Section 2)

**To edit an event type card:**

1. Find the event type card you want to edit
2. Look for comments like `<!-- Card 1: Private Dining -->`
3. Update:
   - Image path
   - Event type name
   - Description
   - Capacity
   - Button text
   - `data-event-type` attribute (for form pre-selection)

```html
<!-- 🔧 EDIT: Event type card -->
<div class="event-type-card" data-aos="fade-up" data-aos-delay="0">
    <div class="event-card-image-wrapper">
        <img src="assets/images/events/your-event.webp" alt="Event type">
        <div class="event-card-gradient"></div>
    </div>
    <div class="event-card-content">
        <span class="event-card-ornament">✦</span>
        <h3 class="event-card-name">Your Event Type</h3>
        <p class="event-card-description">
            Description of your event type...
        </p>
        <p class="event-card-capacity">Up to 20 guests</p>
        <div class="event-card-separator"></div>
        <button class="btn btn-outlined event-enquiry-btn" data-event-type="Your Event Type">
            Enquire About This Event
        </button>
    </div>
</div>
```

**To add a new event type:**
1. Copy an entire event card block
2. Paste it in the grid
3. Update all content
4. Add the new event type to the enquiry form dropdown (see below)

**To remove an event type:**
1. Delete the entire `<div class="event-type-card">...</div>` block
2. Remove the option from the enquiry form dropdown

### Update Private Dining Room Details

**File:** `events.html` (Section 3)

**To edit room details:**

```html
<!-- 🔧 EDIT: Private room heading -->
<h2 class="content-heading">An Exclusive Space Reserved for You</h2>

<!-- 🔧 EDIT: Private room description -->
<p class="content-paragraph">
    Your description of the private dining room...
</p>

<!-- 🔧 EDIT: Capacity info blocks -->
<div class="info-block">
    <svg>...</svg>
    <p class="info-label">CAPACITY</p>
    <p class="info-value">Up to 20 guests</p>
</div>
```

**To update images:**
- Main image: `assets/images/interior/private-dining.webp`
- Overlapping image: `assets/images/interior/dining-room-02.webp`

### Update Upcoming Events

**File:** `events.html` (Section 4)

**To edit an upcoming event:**

```html
<!-- 🔧 EDIT: Upcoming event card -->
<div class="upcoming-event-card" data-aos="fade-up">
    <div class="upcoming-card-image-wrapper">
        <img src="assets/images/events/your-event.webp" alt="Event name">
        <!-- 🔧 EDIT: Date badge -->
        <div class="event-date-badge">
            <span class="badge-month">DEC</span>
            <span class="badge-day">24</span>
        </div>
    </div>
    <div class="upcoming-card-content">
        <!-- 🔧 EDIT: Event details -->
        <h3 class="upcoming-event-name">Your Event Name</h3>
        <p class="upcoming-event-description">Event description...</p>
        <div class="upcoming-card-separator"></div>
        <div class="upcoming-card-footer">
            <span class="event-price">£195 per person</span>
            <a href="reservations.html" class="btn btn-outlined btn-small">Book This Event</a>
        </div>
    </div>
</div>
```

### Customize Enquiry Form

**File:** `events.html` (Section 5)

**To add/remove event types in dropdown:**

```html
<!-- 🔧 EDIT: Event type options -->
<div class="custom-select-dropdown" id="event-type-dropdown">
    <div class="custom-select-option" data-value="Private Dining">Private Dining</div>
    <div class="custom-select-option" data-value="Corporate Event">Corporate Event</div>
    <!-- Add your new option here -->
    <div class="custom-select-option" data-value="Your Event Type">Your Event Type</div>
</div>
```

**To change guest limits:**

**File:** `assets/js/pages/events.js` (Line ~350)

```javascript
// 🔧 EDIT: Change guest min/max
const MIN_GUESTS = 2;   // Minimum guests
const MAX_GUESTS = 50;  // Maximum guests
```

**To change time slots:**

```html
<!-- 🔧 EDIT: Time slot options -->
<div class="custom-select-dropdown" id="event-time-dropdown">
    <div class="custom-select-option" data-value="18:00">6:00 PM</div>
    <div class="custom-select-option" data-value="18:30">6:30 PM</div>
    <!-- Add/remove time slots as needed -->
</div>
```

**To change budget ranges:**

```html
<!-- 🔧 EDIT: Budget options -->
<div class="custom-select-dropdown" id="budget-dropdown">
    <div class="custom-select-option" data-value="Under £75 per person">Under £75 per person</div>
    <!-- Edit budget ranges to match your pricing -->
</div>
```

### Connect Events Form to Your Email

**File:** `assets/js/pages/events.js` (Line ~580)

```javascript
// 🔧 BUYER: Set submitEndpoint to your API endpoint
initFormHandler('#events-enquiry-form', {
    showSuccessMessage: false,
    resetOnSuccess: false,
    submitEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',  // 🔧 EDIT: Add your endpoint
    onSuccess: handleFormSuccess
});
```

**Steps:**
1. Create a form at [Formspree.io](https://formspree.io) (free)
2. Copy your form endpoint URL
3. Replace `null` with your endpoint URL
4. Test the form

### Update Contact Information

**File:** `events.html` (Right column info blocks)

```html
<!-- 🔧 EDIT: Events team contact -->
<a href="tel:+442070000001" class="contact-item">
    <svg>...</svg>
    <span>+44 20 7000 0001</span>  <!-- 🔧 EDIT: Your phone -->
</a>
<a href="mailto:events@lumiere-restaurant.co.uk" class="contact-item">
    <svg>...</svg>
    <span>events@lumiere-restaurant.co.uk</span>  <!-- 🔧 EDIT: Your email -->
</a>
```

### Update Policy Notice

**File:** `events.html` (Section 6)

```html
<!-- 🔧 EDIT: Event policies -->
<p class="policy-notice-text">
    All private events are subject to our standard terms and conditions. 
    Dietary requirements and allergen information must be provided at least 
    72 hours before your event. A non-refundable deposit of 30% is required 
    to secure your booking. Full payment is due 7 days before your event date.
</p>
```

### Customize Testimonial

**File:** `events.html` (Right column, Block 4)

```html
<!-- 🔧 EDIT: Events testimonial -->
<blockquote class="testimonial-quote">
    "Your customer testimonial about their event experience..."
</blockquote>
<p class="testimonial-attribution">— Customer Name</p>
<p class="testimonial-event">Event Type</p>
```

### Adjust Animations

**File:** `assets/js/pages/events.js`

**To change hero animation timing:**

```javascript
// 🔧 EDIT: Hero animation sequence (Lines 50-100)
heroTimeline
    .from('#hero-breadcrumb', {
        opacity: 0,
        duration: 0.6,  // 🔧 EDIT: Animation speed
        ease: 'power2.out'
    }, 0.3)  // 🔧 EDIT: Start time
```

**To disable animations:**

Comment out the animation initialization in the `init()` function:

```javascript
function init() {
    // initHeroAnimations();  // Disabled
    // initScrollAnimations();  // Disabled
    initCustomSelects();
    initGuestStepper();
    // ... rest of initialization
}
```

---

## Customise Reservations Page

The Reservations page allows guests to book tables online. See `docs/RESERVATIONS-PAGE-GUIDE.md` for complete documentation.

### Key Customizations

- Update opening hours
- Change guest limits (min/max)
- Customize time slots
- Update occasion options
- Connect form to your booking system
- Update policies section

Refer to the Reservations Page Guide for detailed instructions.

---
