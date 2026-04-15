# 📁 Lumière Template - File Structure Guide

**Visual guide to understanding where everything is and what you need to edit.**

---

## 🗂️ Complete File Structure

```
lumiere/
│
├── 📄 START-HERE.md                    ← Read this first!
│
├── 📂 docs/                            ← 📖 All documentation
│   ├── BUYER-GUIDE.md                  ← 5-min quick start
│   ├── QUICK-REFERENCE.md              ← Cheat sheet
│   ├── CODE-COMMENTS-GUIDE.md          ← Understanding comments
│   ├── CUSTOMISATION.md                ← Comprehensive guide
│   ├── FILE-STRUCTURE-GUIDE.md         ← This file
│   ├── README.md                       ← Technical overview
│   ├── MENU-PAGE-GUIDE.md              ← Menu page specific
│   ├── ABOUT-PAGE-GUIDE.md             ← About page specific
│   ├── GALLERY-PAGE-GUIDE.md           ← Gallery page specific
│   ├── RESERVATIONS-PAGE-GUIDE.md      ← Reservations page specific
│   └── CREDITS.md                      ← Libraries used
│
├── 📄 index.html                       ← 🔧 Homepage
├── 📄 menu.html                        ← 🔧 Menu page
├── 📄 reservations.html                ← 🔧 Reservations page
├── 📄 about.html                       ← 🔧 About page
├── 📄 gallery.html                     ← 🔧 Gallery page
├── 📄 events.html                      ← 🔧 Events page
├── 📄 contact.html                     ← 🔧 Contact page
│
├── 📂 components/                      ← 🔧 Reusable HTML (edit once, updates all pages)
│   ├── navbar.html                     ← Navigation bar
│   ├── footer.html                     ← Footer
│   ├── page-hero.html                  ← Page hero banner
│   ├── reservation-cta.html            ← Reservation CTA
│   └── newsletter.html                 ← Newsletter signup
│
└── 📂 assets/                          ← All CSS, JS, and images
    │
    ├── 📂 css/                         ← Stylesheets
    │   ├── main.css                    ← 🔧 COLORS & FONTS (edit this!)
    │   ├── components.css              ← Button, card, form styles
    │   ├── animations.css              ← Cursor, loader, transitions
    │   ├── utilities.css               ← Helper classes
    │   └── 📂 pages/                   ← Page-specific styles
    │       ├── home.css
    │       ├── menu.css
    │       ├── reservations.css
    │       ├── about.css
    │       ├── gallery.css
    │       ├── events.css
    │       └── contact.css
    │
    ├── 📂 js/                          ← JavaScript files
    │   ├── main.js                     ← Main initialization
    │   ├── 📂 core/                    ← Core functionality (rarely edit)
    │   │   ├── component-loader.js     ← Loads navbar/footer
    │   │   ├── cursor.js               ← Custom cursor
    │   │   ├── loader.js               ← Page loader
    │   │   ├── navbar.js               ← Navbar behavior
    │   │   └── smooth-scroll.js        ← Smooth scrolling
    │   ├── 📂 components/              ← Reusable components
    │   │   ├── counter.js              ← Animated counters
    │   │   ├── testimonial-slider.js   ← Testimonial carousel
    │   │   ├── form-handler.js         ← 🔧 Form submission (edit endpoint)
    │   │   └── animations-init.js      ← Animation initialization
    │   └── 📂 pages/                   ← Page-specific JavaScript
    │       ├── home.js                 ← Homepage animations
    │       ├── menu.js                 ← Menu filtering/pagination
    │       ├── reservations.js         ← Reservation form
    │       ├── about.js                ← About page animations
    │       ├── gallery.js              ← Gallery lightbox
    │       ├── events.js               ← Events page
    │       └── contact.js              ← Contact form
    │
    └── 📂 images/                      ← 🔧 Replace with your images
        ├── 📂 brand/                   ← Logo and brand assets
        │   └── logo.webp               ← 🔧 Your logo here
        ├── 📂 hero/                    ← Full-screen backgrounds (1920x1080px)
        │   ├── hero-home.png
        │   ├── hero-menu.webp
        │   └── ...
        ├── 📂 dishes/                  ← Food photography (800x600px)
        ├── 📂 interior/                ← Restaurant photos (1200x800px)
        ├── 📂 team/                    ← Staff portraits (600x800px)
        ├── 📂 events/                  ← Event photos (1200x800px)
        └── 📂 gallery/                 ← Gallery images (800x800px)
```

---

## 🎯 Files by Edit Frequency

### 🔧 Edit Often (Your Content)

| File | What It Contains | Edit Frequency |
|------|------------------|----------------|
| `index.html` | Homepage content | ⭐⭐⭐⭐⭐ |
| `menu.html` | Menu items and prices | ⭐⭐⭐⭐⭐ |
| `about.html` | About page content | ⭐⭐⭐⭐ |
| `contact.html` | Contact page content | ⭐⭐⭐⭐ |
| `components/navbar.html` | Navigation links | ⭐⭐⭐⭐ |
| `components/footer.html` | Footer content | ⭐⭐⭐⭐ |
| `assets/css/main.css` | Colors and fonts | ⭐⭐⭐⭐⭐ |
| `assets/images/` | All images | ⭐⭐⭐⭐⭐ |

### 🔧 Edit Sometimes (Customization)

| File | What It Contains | Edit Frequency |
|------|------------------|----------------|
| `assets/css/pages/*.css` | Page-specific styles | ⭐⭐⭐ |
| `assets/js/pages/*.js` | Animation timing | ⭐⭐ |
| `assets/js/components/form-handler.js` | Form endpoint | ⭐⭐⭐ |

### ⚠️ Rarely Edit (Core Functionality)

| File | What It Contains | Edit Frequency |
|------|------------------|----------------|
| `assets/js/main.js` | Main initialization | ⭐ |
| `assets/js/core/*.js` | Core functionality | ⭐ |
| `assets/css/components.css` | Component styles | ⭐ |
| `assets/css/animations.css` | Animation styles | ⭐ |
| `assets/css/utilities.css` | Utility classes | ⭐ |

---

## 🎨 CSS File Hierarchy

### How CSS Files Work Together

```
1. main.css          ← Foundation (colors, fonts, reset)
   ↓
2. components.css    ← Reusable components (buttons, cards)
   ↓
3. animations.css    ← Animations and transitions
   ↓
4. utilities.css     ← Helper classes
   ↓
5. pages/*.css       ← Page-specific styles
```

**Loading order matters!** Files load in this order in your HTML `<head>`.

### What Each CSS File Does

| File | Purpose | Edit? |
|------|---------|-------|
| `main.css` | Colors, fonts, typography, reset | ✅ YES |
| `components.css` | Buttons, cards, forms, navbar, footer | Rarely |
| `animations.css` | Cursor, loader, hover effects | Rarely |
| `utilities.css` | Spacing, text, display helpers | No |
| `pages/home.css` | Homepage-specific styles | Sometimes |
| `pages/menu.css` | Menu page-specific styles | Sometimes |
| `pages/*.css` | Other page-specific styles | Sometimes |

---

## 🎯 JavaScript File Hierarchy

### How JS Files Work Together

```
1. External Libraries (CDN)
   ├── GSAP (animations)
   ├── Swiper (sliders)
   ├── AOS (scroll reveals)
   └── Lenis (smooth scroll)
   ↓
2. Core JS (assets/js/core/)
   ├── component-loader.js  ← Loads navbar/footer
   ├── cursor.js            ← Custom cursor
   ├── loader.js            ← Page loader
   ├── navbar.js            ← Navbar behavior
   └── smooth-scroll.js     ← Smooth scrolling
   ↓
3. Component JS (assets/js/components/)
   ├── counter.js           ← Animated counters
   ├── testimonial-slider.js ← Testimonial carousel
   ├── form-handler.js      ← Form validation/submission
   └── animations-init.js   ← Animation initialization
   ↓
4. Page JS (assets/js/pages/)
   ├── home.js              ← Homepage animations
   ├── menu.js              ← Menu filtering/pagination
   └── *.js                 ← Other page-specific JS
   ↓
5. Main JS (assets/js/main.js)
   └── Orchestrates everything
```

### What Each JS File Does

| File | Purpose | Edit? |
|------|---------|-------|
| `main.js` | Initializes everything | Rarely |
| `core/component-loader.js` | Loads navbar/footer | No |
| `core/navbar.js` | Navbar behavior | Rarely |
| `core/cursor.js` | Custom cursor | Rarely |
| `core/loader.js` | Page loader | Rarely |
| `components/form-handler.js` | Form submission | ✅ YES (endpoint) |
| `components/counter.js` | Animated counters | Rarely |
| `components/testimonial-slider.js` | Testimonial slider | Rarely |
| `pages/home.js` | Homepage animations | Sometimes |
| `pages/menu.js` | Menu filtering | Sometimes |
| `pages/*.js` | Other page animations | Sometimes |

---

## 🖼️ Image Folder Structure

### Where to Put Your Images

```
assets/images/
│
├── 📂 brand/           ← Logo and brand assets
│   └── logo.webp       ← 🔧 Your logo (200-300px wide)
│
├── 📂 hero/            ← Full-screen hero backgrounds
│   ├── hero-home.png   ← 🔧 Homepage hero (1920x1080px)
│   ├── hero-menu.webp  ← 🔧 Menu page hero
│   ├── hero-about.webp ← 🔧 About page hero
│   └── ...             ← Other page heroes
│
├── 📂 dishes/          ← Food photography
│   ├── starter-01.webp ← 🔧 Your dish photos (800x600px)
│   ├── main-01.webp
│   └── ...
│
├── 📂 interior/        ← Restaurant interior shots
│   └── ...             ← 🔧 Your interior photos (1200x800px)
│
├── 📂 team/            ← Chef and staff portraits
│   └── ...             ← 🔧 Your team photos (600x800px)
│
├── 📂 events/          ← Private dining and events
│   └── ...             ← 🔧 Your event photos (1200x800px)
│
└── 📂 gallery/         ← Gallery page images
    └── ...             ← 🔧 Your gallery photos (800x800px)
```

### Image Guidelines

| Aspect | Recommendation |
|--------|---------------|
| **Format** | WebP (best) or JPG |
| **Quality** | High quality but compressed |
| **Naming** | Descriptive (e.g., `dish-wagyu-beef.webp`) |
| **Optimization** | Use TinyPNG.com before uploading |
| **Alt text** | Update in HTML for SEO |

---

## 🎨 Component System Explained

### How Components Work

The template uses a **component loading system** to avoid code duplication:

```
┌─────────────────────────────────────┐
│  index.html (Homepage)              │
│  ┌───────────────────────────────┐  │
│  │ <div id="navbar-container">  │  │ ← Empty container
│  └───────────────────────────────┘  │
│                                     │
│  [Page content here]                │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ <div id="footer-container">  │  │ ← Empty container
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
         ↓ JavaScript loads ↓
┌─────────────────────────────────────┐
│  components/navbar.html             │ ← Edit once
│  [Navbar HTML code]                 │
└─────────────────────────────────────┘
         ↓ Inserted into ↓
┌─────────────────────────────────────┐
│  All 7 pages automatically          │
└─────────────────────────────────────┘
```

**Benefits:**
- Edit navbar.html ONCE → Updates all 7 pages
- Edit footer.html ONCE → Updates all 7 pages
- No copy/paste needed
- Easy to maintain

**Files involved:**
- `components/navbar.html` - Navbar content
- `components/footer.html` - Footer content
- `assets/js/core/component-loader.js` - Loading logic

---

## 🎨 CSS Variables System

### How CSS Variables Work

```
┌──────────────────────────────────────┐
│  assets/css/main.css                 │
│  :root {                             │
│    --accent-gold: #C9A84C;  ← Define │
│  }                                    │
└──────────────────────────────────────┘
         ↓ Used in ↓
┌──────────────────────────────────────┐
│  All CSS files                       │
│  .button {                           │
│    background: var(--accent-gold);   │
│  }                                    │
│  .link:hover {                       │
│    color: var(--accent-gold);        │
│  }                                    │
└──────────────────────────────────────┘
```

**Benefits:**
- Change color ONCE → Updates entire site
- No find & replace needed
- Easy to maintain
- Consistent design

**Variables you'll edit:**
- `--bg-primary` - Main background color
- `--bg-surface` - Card background color
- `--accent-gold` - Button and highlight color
- `--text-primary` - Main text color
- `--font-heading` - Heading font
- `--font-body` - Body text font

---

## 🔄 Page Loading Flow

### What Happens When a Page Loads

```
1. HTML loads
   ↓
2. CSS loads (styling applied)
   ↓
3. External libraries load (GSAP, Swiper, AOS)
   ↓
4. Page loader shows (logo animation)
   ↓
5. Core JS loads (component-loader, cursor, navbar)
   ↓
6. Components load (navbar, footer inserted into page)
   ↓
7. Component JS loads (counter, form-handler, slider)
   ↓
8. Page JS loads (home.js, menu.js, etc.)
   ↓
9. main.js orchestrates everything
   ↓
10. Page loader fades out
   ↓
11. Animations start
   ↓
12. Page is fully interactive
```

**Total load time:** ~1-2 seconds on good connection

---

## 🎯 Edit Priority Guide

### Priority 1: Essential (Do First)

```
✅ Restaurant name      → Find & Replace "Lumière"
✅ Logo                 → assets/images/brand/logo.webp
✅ Colors               → assets/css/main.css (CSS variables)
✅ Contact info         → components/footer.html
✅ Menu items           → menu.html
```

### Priority 2: Important (Do Next)

```
✅ All images           → assets/images/ folders
✅ About page content   → about.html
✅ Testimonials         → index.html
✅ Opening hours        → components/footer.html
✅ Social links         → components/footer.html
```

### Priority 3: Optional (Do Later)

```
✅ Fonts                → main.css + Google Fonts link
✅ Animation timing     → assets/js/pages/*.js
✅ Form endpoint        → assets/js/components/form-handler.js
✅ Google Maps          → contact.html
✅ Meta descriptions    → All HTML files
```

---

## 🔍 Finding Files Quickly

### VS Code Quick Open

Press `Ctrl+P` (Windows) or `Cmd+P` (Mac) and type:

```
navbar.html          → Opens navbar component
footer.html          → Opens footer component
main.css             → Opens main CSS file
home.js              → Opens homepage JavaScript
menu.html            → Opens menu page
```

### VS Code Search

Press `Ctrl+Shift+F` and search for:

```
🔧 EDIT              → All editable sections
Lumière              → Restaurant name
+44 20               → Phone number
hello@lumiere.com    → Email address
href="#"             → Placeholder links
unsplash.com         → Placeholder images
```

---

## 📊 File Statistics

### Total Files: 50+

| Type | Count | Edit? |
|------|-------|-------|
| HTML pages | 7 | ✅ YES |
| HTML components | 5 | ✅ YES |
| CSS files | 12 | ✅ main.css only |
| JavaScript files | 18 | ⚠️ Rarely |
| Documentation | 10 | ℹ️ Read only |
| Image folders | 7 | ✅ Replace images |

### Code Comments: 350+

| File Type | Comment Count |
|-----------|---------------|
| HTML files | ~150 comments |
| CSS files | ~80 comments |
| JavaScript files | ~120 comments |

---

## 🎓 Learning Path

### Beginner Path (No coding experience)

```
1. Read START-HERE.md (this file)
   ↓
2. Read BUYER-GUIDE.md (5 min)
   ↓
3. Search for 🔧 EDIT in files
   ↓
4. Make simple text/image changes
   ↓
5. Refer to CUSTOMISATION.md as needed
```

### Intermediate Path (Basic HTML/CSS)

```
1. Read BUYER-GUIDE.md
   ↓
2. Read CUSTOMISATION.md fully
   ↓
3. Customize colors and fonts
   ↓
4. Modify layouts and spacing
   ↓
5. Add/remove sections
```

### Advanced Path (JavaScript knowledge)

```
1. Read CODE-COMMENTS-GUIDE.md
   ↓
2. Read JavaScript files
   ↓
3. Adjust animation timing
   ↓
4. Modify component behavior
   ↓
5. Add custom functionality
```

---

## 🚀 Deployment Checklist

### Before Deploying

```
Content:
├── ✅ Restaurant name updated
├── ✅ Logo replaced
├── ✅ All images replaced
├── ✅ Menu items updated
├── ✅ Contact info updated
├── ✅ Hours updated
└── ✅ Social links updated

Technical:
├── ✅ Colors match brand
├── ✅ Forms connected (Formspree)
├── ✅ Google Maps updated
├── ✅ Tested on mobile
├── ✅ All links working
└── ✅ No console errors (F12)

SEO:
├── ✅ Page titles updated
├── ✅ Meta descriptions updated
├── ✅ Image alt text updated
└── ✅ Images compressed
```

### Deploy To

**Netlify (Easiest):**
1. Drag and drop `lumiere` folder
2. Site goes live instantly
3. Free SSL included

**Traditional Hosting:**
1. Use FTP client (FileZilla)
2. Upload all files
3. Keep folder structure intact

---

## 💡 Pro Tips

1. **Use the search** - `Ctrl+Shift+F` is your best friend
2. **Follow the comments** - 350+ comments guide you
3. **Test small changes** - Don't change everything at once
4. **Keep backups** - Copy folder before major changes
5. **Use browser console** - F12 shows errors
6. **Compress images** - Use TinyPNG.com
7. **Test on mobile** - Most visitors use phones
8. **Read the docs** - We wrote 5 guides to help you

---

## 🎯 Quick Command Reference

### Find All Editable Sections
```
Ctrl+Shift+F → Search: 🔧 EDIT
```

### Change Restaurant Name
```
Ctrl+Shift+H → Find: Lumière → Replace: Your Name
```

### Open File Quickly
```
Ctrl+P → Type filename
```

### Hard Refresh Browser
```
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

---

**🎉 You're ready to start! Open `docs/BUYER-GUIDE.md` for your first customizations.**

**Last Updated:** March 2026
