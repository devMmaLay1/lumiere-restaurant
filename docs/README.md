# Lumière - Fine Dining Restaurant Template

A premium, professional HTML/CSS/JavaScript website template for fine dining luxury restaurants. Built with clean code, fully customizable, and ready to sell on marketplaces like ThemeForest, Creative Market, and Payhip.

---

## 🎯 Quick Start for Buyers

**New to web development?** Don't worry! This template is designed to be easy to customize even if you're not a developer.

### 📖 Documentation Guide (Start Here!)

**Choose your path based on your experience level:**

| Document | Best For | Read Time | Purpose |
|----------|----------|-----------|---------|
| **BUYER-GUIDE.md** | Everyone | 5 min | Quick start, essential customizations |
| **QUICK-REFERENCE.md** | Everyone | 2 min | Cheat sheet, keep open while editing |
| **CODE-COMMENTS-GUIDE.md** | Beginners | 5 min | Understanding the 🔧 EDIT system |
| **CUSTOMISATION.md** | All levels | 30 min | Comprehensive step-by-step guide |
| **README.md** | Developers | 10 min | Technical overview (this file) |

**Recommended order:**
1. Read **BUYER-GUIDE.md** first (5 minutes)
2. Keep **QUICK-REFERENCE.md** open while editing
3. Refer to **CUSTOMISATION.md** for detailed instructions

### 🔧 All Editable Sections Are Marked

Throughout the code, you'll see comments like this:
```html
<!-- 🔧 EDIT: Replace with your restaurant name -->
```

These 🔧 wrench emoji comments show exactly where to make changes. Just search for `🔧 EDIT` to find all customizable sections.

### What You Need to Know

1. **All customizable content is marked with 🔧 EDIT comments** in the code
2. **Colors are controlled in ONE place** - change them all at once in `main.css`
3. **Components load automatically** - edit navbar/footer once, updates everywhere
4. **No build process required** - just edit and upload
5. **Comprehensive documentation** - five guides for different needs

### First Steps

1. **Read BUYER-GUIDE.md** - 5-minute quick start
2. **Run locally** - Use Live Server (see "How to Run Locally" below)
3. **Search for 🔧 EDIT** - Find all customizable sections (Ctrl+Shift+F)
4. **Change restaurant name** - Use Find & Replace (Ctrl+Shift+H)
5. **Update colors** - Edit CSS variables in `assets/css/main.css`
6. **Replace images** - Add your photos to `assets/images/` folders
7. **Edit content** - Follow the 🔧 EDIT comments in HTML files

**📖 For detailed instructions, see `BUYER-GUIDE.md` and `CUSTOMISATION.md`**

---

## 🎨 What's Included

### Pages (7 Total)
- **index.html** - Homepage with hero, signature dishes, chef feature, testimonials
- **menu.html** - Full menu with category filtering
- **reservations.html** - Reservation form with date picker
- **about.html** - Brand story, philosophy, team, awards
- **gallery.html** - Masonry gallery with lightbox
- **events.html** - Private dining and events
- **contact.html** - Contact form, map, opening hours

### Components (Reusable)
- Navbar (loaded on every page)
- Footer (loaded on every page)
- Page hero banner
- Reservation CTA
- Newsletter section

---

## 🔧 Customization Overview

### Easy Customizations (No coding required)

✅ **Restaurant name** - Find & Replace "Lumière" with your name  
✅ **Colors** - Edit CSS variables in `main.css`  
✅ **Logo** - Replace `assets/images/brand/logo.webp`  
✅ **Images** - Replace images in `assets/images/` folders  
✅ **Text content** - Look for 🔧 EDIT comments in HTML files  
✅ **Menu items** - Add/remove/edit in `menu.html`  
✅ **Contact info** - Update address, phone, email, hours  
✅ **Social links** - Update URLs in footer  

### Advanced Customizations (Basic coding knowledge)

🔧 **Fonts** - Change Google Fonts link + CSS variables  
🔧 **Animation timing** - Edit duration/delay values in JS files  
🔧 **Form submission** - Connect to Formspree or your backend  
🔧 **Layout changes** - Modify CSS grid/flexbox properties  
🔧 **Add new sections** - Copy existing section structure  

**📖 See `CUSTOMISATION.md` for detailed step-by-step instructions**

---

## 💻 Tech Stack

### Core Languages
- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables), animations, mobile-first responsive design
- **Vanilla JavaScript** - No frameworks, easy to understand and modify

### JavaScript Libraries (All via CDN - No installation required)
- **GSAP** - Hero animations, page loader, text reveals
- **Lenis.js** - Smooth scrolling
- **AOS.js** - Scroll reveal animations
- **Swiper.js** - Testimonial slider and carousels
- **GLightbox** - Gallery lightbox
- **Flatpickr** - Date picker for reservations
- **CountUp.js** - Animated stats counters
- **Typed.js** - Typewriter effect

### CSS Libraries (All via CDN)
- AOS.css, GLightbox.css, Flatpickr.css, Swiper.css

### Fonts (Google Fonts)
- **Cormorant Garamond** - Primary headings (elegant serif)
- **Playfair Display** - Secondary headings (bold serif)
- **DM Sans** - Body text (clean sans-serif)

### Icons
- **Lucide Icons** - Clean minimal line icons (SVG copied directly)

---
- **GSAP** - Hero animations, page loader, text reveals
- **Lenis.js** - Smooth scrolling
- **AOS.js** - Scroll reveal animations
- **Swiper.js** - Testimonial slider and carousels
- **GLightbox** - Gallery lightbox
- **Flatpickr** - Date picker for reservations
- **CountUp.js** - Animated stats counters
- **Typed.js** - Typewriter effect

#### CSS Libraries (All via CDN)
- AOS.css
- GLightbox.css
- Flatpickr.css
- Swiper.css

#### Fonts
- **Cormorant Garamond** - Primary headings
- **Playfair Display** - Secondary headings
- **DM Sans** - Body text

#### Icons
- **Lucide Icons** - Clean minimal line icons (SVG copied directly)

## 🚀 How to Run Locally

**⚠️ IMPORTANT:** This template uses JavaScript `fetch()` to load components (navbar, footer). You MUST use a local server - opening HTML files directly in your browser will NOT work.

### Option 1: VS Code Live Server (Easiest - Recommended)
1. Install VS Code from https://code.visualstudio.com
2. Install the "Live Server" extension
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Your browser opens automatically at http://localhost:5500

### Option 2: Python Simple Server
```bash
# If you have Python installed:
# Open terminal/command prompt in the lumiere folder

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser

### Option 3: Node.js http-server
```bash
# If you have Node.js installed:
npx http-server
```
Then open the URL shown in terminal

### Troubleshooting

**Problem:** Navbar and footer don't appear
**Solution:** You're opening the HTML file directly. Use a local server (see options above).

**Problem:** Animations don't work
**Solution:** Check browser console (F12) for JavaScript errors. Ensure all CDN libraries are loading.

---

```
lumiere/
├── index.html, menu.html, reservations.html, etc.
├── components/          # Reusable HTML components
├── assets/
│   ├── css/            # All stylesheets
│   ├── js/             # All JavaScript files
│   └── images/         # All images organized by type
└── docs/               # Documentation
```

## 🎨 Color Palette

All colors are defined as CSS variables in `assets/css/main.css`:

- **Deep Charcoal** - `#0D0D0D` (Background)
- **Dark Warm Grey** - `#1A1A18` (Surfaces)
- **Warm Gold** - `#C9A84C` (Accent)
- **Bright Gold** - `#E8C56A` (Hover)
- **Soft Cream** - `#F5ECD7` (Special text)
- **Off White** - `#F0EDE6` (Primary text)
- **Muted Warm Grey** - `#9A9589` (Secondary text)

## ✨ Premium Features

- Custom gold cursor (desktop only)
- Page loading animation
- Smooth scroll on all pages
- Image parallax effects
- Text split animations
- Mobile-friendly hamburger menu
- Active page highlighting
- Back to top button
---

## 💡 Tips for Best Results

1. **Keep it consistent** - Use the same image style throughout
2. **Optimize images** - Compress before uploading (use TinyPNG.com)
3. **Test on mobile** - Most visitors will be on phones
4. **Update regularly** - Keep menu and hours current
5. **Backup first** - Always keep a copy before making changes
6. **Follow the comments** - Look for 🔧 EDIT markers in the code
7. **Use browser console** - Press F12 to check for errors
8. **Test forms** - Make sure they're connected and working

---

## 🆘 Need Help?

### Quick Troubleshooting

**Navbar/Footer not showing?**
- You're opening HTML directly. Use a local server.

**Images not loading?**
- Check file paths: `assets/images/folder/filename.webp`

**Animations not working?**
- Open browser console (F12) and check for errors

**Forms not sending?**
- Connect to Formspree (see CUSTOMISATION.md section 9)

### Documentation

1. **BUYER-GUIDE.md** - Start here for quick setup (5 minutes)
2. **CUSTOMISATION.md** - Detailed customization instructions (comprehensive)
3. **Search for 🔧 EDIT** - Find all editable sections in code
4. **Check browser console** - Press F12 to see errors

### Resources

- HTML/CSS basics: https://www.w3schools.com
- Google Fonts: https://fonts.google.com
- Image compression: https://tinypng.com
- Form handling: https://formspree.io

---

## 📄 License

This template is designed to be sold on marketplaces. Buyers receive a license to use and customize for their projects.

---

## 🙏 Credits

See `CREDITS.md` for full list of libraries, fonts, and resources used.

---

**Last Updated:** March 2026 - Enhanced with comprehensive buyer guidance and code comments


---

## 🔧 Code Comments Guide

### Understanding the 🔧 EDIT Comments

All customizable sections in the code are marked with `🔧 EDIT` comments. These guide you to exactly what needs to be changed.

**Example in HTML:**
```html
<!-- 🔧 EDIT: Replace with your restaurant name -->
<h1>Lumière</h1>
```

**Example in CSS:**
```css
/* 🔧 EDIT: Primary background color */
--bg-primary: #0D0D0D;
```

**Example in JavaScript:**
```javascript
// 🔧 EDIT: Change delay in seconds
delay: 1.6
```

### How to Find All Editable Sections

**In VS Code:**
1. Press `Ctrl+Shift+F` (Windows/Linux) or `Cmd+Shift+F` (Mac)
2. Search for: `🔧 EDIT`
3. You'll see every customizable section across all files

### Comment Types

| Comment | Meaning |
|---------|---------|
| `🔧 EDIT:` | You should customize this |
| `⚠️ DON'T DELETE:` | Required for functionality |
| `🔧 TO ADD:` | Instructions for adding new items |
| `🔧 TO REMOVE:` | Instructions for removing items |
| `🔧 BUYER GUIDE:` | Explanation of what the code does |

### Files with Most Comments

| File | Comment Count | What to Edit |
|------|--------------|-------------|
| `index.html` | 20+ | Homepage content |
| `menu.html` | 30+ | Menu items and structure |
| `components/navbar.html` | 10+ | Navigation links |
| `components/footer.html` | 15+ | Contact info, hours, social links |
| `assets/css/main.css` | 25+ | Colors, fonts, spacing |
| `assets/js/pages/*.js` | 15+ per file | Animation timing |

---


---

## 📚 Documentation Index

### For Buyers (Start Here)

1. **BUYER-GUIDE.md** - 5-minute quick start
   - Essential customizations
   - Common tasks
   - Quick reference

2. **CODE-COMMENTS-GUIDE.md** - Understanding the comment system
   - What 🔧 EDIT means
   - How to find editable sections
   - What NOT to edit

3. **CUSTOMISATION.md** - Comprehensive guide
   - Step-by-step instructions
   - Advanced customizations
   - Troubleshooting

### For Developers

4. **README.md** - Technical overview (this file)
   - Tech stack
   - File structure
   - Browser compatibility

5. **Page-Specific Guides**
   - MENU-PAGE-GUIDE.md
   - ABOUT-PAGE-GUIDE.md
   - GALLERY-PAGE-GUIDE.md
   - RESERVATIONS-PAGE-GUIDE.md

6. **CREDITS.md** - Libraries and resources

---

## 🎓 Learning Path

### Beginner (No coding experience)
1. Read BUYER-GUIDE.md
2. Search for `🔧 EDIT` in files
3. Make simple text/image changes
4. Refer to CUSTOMISATION.md as needed

### Intermediate (Basic HTML/CSS)
1. Read CUSTOMISATION.md fully
2. Customize colors and fonts
3. Modify layouts and spacing
4. Add/remove sections

### Advanced (JavaScript knowledge)
1. Read CODE-COMMENTS-GUIDE.md
2. Adjust animation timing
3. Modify component behavior
4. Add custom functionality

---
