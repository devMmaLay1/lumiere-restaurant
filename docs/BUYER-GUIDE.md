# 🎯 Lumière Template - Quick Buyer Guide

**Welcome!** This is your quick-start guide to customizing the Lumière restaurant template. Even if you're not a developer, you can easily customize this template by following the 🔧 EDIT comments in the code.

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Run the Template Locally

**⚠️ IMPORTANT:** You MUST use a local server. Double-clicking HTML files won't work.

**Easiest Method - VS Code Live Server:**
1. Download VS Code from https://code.visualstudio.com
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Your browser opens automatically

**Alternative - Python Server:**
```bash
# Open terminal in the lumiere folder
python -m http.server 8000
# Then open: http://localhost:8000
```

### Step 2: Make Your First Edit

1. Open `index.html` in VS Code
2. Press `Ctrl+F` and search for: `🔧 EDIT`
3. You'll see comments showing exactly what to change
4. Make a change and save
5. Refresh your browser to see the update

---

## 🔧 What the 🔧 EDIT Comments Mean

Throughout the code, you'll see comments like:

```html
<!-- 🔧 EDIT: Replace with your restaurant name -->
<h1>Lumière</h1>
```

This means: "You should change this to match your restaurant."

**How to find all editable sections:**
1. Press `Ctrl+Shift+F` in VS Code
2. Search for: `🔧 EDIT`
3. You'll see every customizable section

---

## 📝 Essential Customizations

### 1. Change Restaurant Name Everywhere

**Method: Find & Replace**
1. Press `Ctrl+Shift+H` in VS Code
2. Find: `Lumière`
3. Replace: `Your Restaurant Name`
4. Click "Replace All"

Done! Your name updates in all 7 pages, navbar, footer, and meta tags.

---

### 2. Change All Colors at Once

**File:** `assets/css/main.css` (lines 10-50)

```css
:root {
    /* 🔧 EDIT: Change these colors to match your brand */
    --bg-primary: #0D0D0D;        /* Main background */
    --bg-surface: #1A1A18;        /* Cards background */
    --accent-gold: #C9A84C;       /* Buttons, highlights */
    --accent-gold-hover: #E8C56A; /* Hover state */
    --text-primary: #F0EDE6;      /* Main text */
    --text-muted: #9A9589;        /* Secondary text */
}
```

Change these 6 colors and your entire site updates automatically!

**Color Tips:**
- Use a color picker tool (Google "color picker")
- Keep backgrounds dark for luxury feel
- Ensure text is readable against backgrounds
- Test on mobile devices

---

### 3. Replace Your Logo

**Steps:**
1. Prepare your logo:
   - Format: WebP or PNG
   - Size: 200-300px wide
   - Background: Transparent
   - Color: Light (cream, white, gold)

2. Save as: `assets/images/brand/logo.webp`

3. If you use a different filename, search for `logo.webp` and update all references

Your logo appears in:
- Navbar (all pages)
- Footer (all pages)
- Hero section (homepage)
- Page loader

---

### 4. Replace Images

**Image folders:**
```
assets/images/
├── brand/      # Logo
├── hero/       # Full-screen backgrounds (1920x1080px)
├── dishes/     # Food photos (800x600px)
├── interior/   # Restaurant photos (1200x800px)
├── team/       # Staff portraits (600x800px)
├── events/     # Event photos (1200x800px)
└── gallery/    # Gallery images (800x800px)
```

**To replace an image:**
1. Add your image to the appropriate folder
2. Find the `<img>` tag in HTML
3. Look for `🔧 EDIT: Replace with your image`
4. Update the `src` attribute

```html
<!-- 🔧 EDIT: Replace with your dish image -->
<img src="assets/images/dishes/your-photo.webp" alt="Dish name">
```

**Image Tips:**
- Use WebP format for best performance
- Compress images before uploading (use TinyPNG.com)
- Use descriptive filenames
- Update alt text for SEO

---

### 5. Update Contact Information

**Search for these comments in HTML files:**

```html
<!-- 🔧 EDIT: Replace with your restaurant address -->
<!-- 🔧 EDIT: Replace with your phone number -->
<!-- 🔧 EDIT: Replace with your email address -->
<!-- 🔧 EDIT: Update days and hours to match your schedule -->
<!-- 🔧 EDIT: Replace href with your social media URLs -->
```

**Files to update:**
- `components/footer.html` - Footer contact info (updates all pages)
- `contact.html` - Contact page details

---

### 6. Update Menu Items

**File:** `menu.html`

**To add a menu item:**
1. Find an existing menu item card
2. Copy the entire `<div class="menu-item-card">...</div>` block
3. Paste it where you want
4. Update:
   - Image (`src` attribute)
   - Dish name
   - Description
   - Price
   - Category (`data-category` attribute)

```html
<!-- 🔧 EDIT: Menu item example -->
<div class="menu-item-card" data-item>
    <div class="menu-item-image">
        <img src="assets/images/dishes/your-dish.webp" alt="Dish name">
    </div>
    <div class="menu-item-content">
        <div class="menu-item-header">
            <h3 class="menu-item-name">Your Dish Name</h3>
            <span class="menu-item-price">$42</span>
        </div>
        <p class="menu-item-desc">Description of your dish</p>
    </div>
</div>
```

**To remove a menu item:** Delete the entire card block.

---

### 7. Connect Forms to Receive Submissions

**Current state:** Forms show success message but don't send emails.

**To make forms work:**

1. Go to [Formspree.io](https://formspree.io) (free)
2. Create account and create a new form
3. Copy your endpoint URL (looks like: `https://formspree.io/f/abc123`)
4. Open `assets/js/components/form-handler.js`
5. Find line ~20:

```javascript
submitEndpoint: null,  // 🔧 EDIT: Set to your API endpoint
```

6. Replace with:

```javascript
submitEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
```

7. Save and test your form!

---

## 📁 File Organization

### Files You'll Edit Often

| File | What It Controls |
|------|------------------|
| `index.html` | Homepage content |
| `menu.html` | Menu items and prices |
| `about.html` | About page content |
| `events.html` | Events and private dining |
| `contact.html` | Contact page content |
| `components/navbar.html` | Navigation (all pages) |
| `components/footer.html` | Footer (all pages) |
| `assets/css/main.css` | Colors and fonts |

### Files You Rarely Need to Edit

| File | What It Does |
|------|-------------|
| `assets/js/main.js` | Initializes everything |
| `assets/js/core/*.js` | Core functionality |
| `assets/js/components/*.js` | Reusable components |
| `assets/js/pages/*.js` | Page animations |
| `assets/css/components.css` | Component styles |
| `assets/css/animations.css` | Animation styles |

**Rule of thumb:** If it's in the `core/` folder, you probably don't need to edit it.

---

## 🎨 Common Customizations

### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the `<link>` code
4. Replace the Google Fonts link in ALL HTML files
5. Update CSS variables in `assets/css/main.css`:

```css
:root {
    --font-heading: 'Your Heading Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

### Change Button Text

Search for:
```html
<!-- 🔧 EDIT: Update button text if needed -->
<a href="reservations.html" class="btn btn-primary">Reserve a Table</a>
```

### Add/Remove Navigation Links

**File:** `components/navbar.html`

Find the navigation section and add/remove `<li>` items:

```html
<ul class="navbar-nav">
    <li><a href="index.html" class="nav-link">Home</a></li>
    <li><a href="menu.html" class="nav-link">Menu</a></li>
    <!-- Add your new page here -->
</ul>
```

**Remember:** Update both desktop nav AND mobile menu.

### Update Testimonials

**File:** `index.html` (testimonials section)

Copy a testimonial slide and update:
- Quote text
- Customer name
- Occasion

```html
<!-- 🔧 EDIT: Testimonial 1 -->
<div class="swiper-slide">
    <div class="testimonial-card">
        <p class="testimonial-text">Your customer review...</p>
        <p class="testimonial-name">Customer Name</p>
        <p class="testimonial-occasion">Anniversary Dinner</p>
    </div>
</div>
```

---

## ⚠️ Common Mistakes

### ❌ Opening HTML Files Directly
**Problem:** Navbar and footer don't appear  
**Solution:** Use a local server (Live Server, Python, etc.)

### ❌ Wrong Image Paths
**Problem:** Images don't load  
**Solution:** Use correct path: `assets/images/folder/filename.webp`

### ❌ Deleting Required Elements
**Problem:** Features stop working  
**Solution:** Don't delete elements with `id` attributes or specific class names

### ❌ Breaking CSS Syntax
**Problem:** Styles don't apply  
**Solution:** Check for missing colons `:` and semicolons `;`

```css
/* ❌ Wrong */
--accent-gold #C9A84C

/* ✅ Right */
--accent-gold: #C9A84C;
```

---

## 🔍 How to Find What to Edit

### Method 1: Search for 🔧 EDIT
1. Press `Ctrl+Shift+F` in VS Code
2. Type: `🔧 EDIT`
3. See all customizable sections

### Method 2: Use Browser Inspect
1. Right-click any element on your site
2. Click "Inspect"
3. See the HTML and CSS
4. Find the same code in your editor

### Method 3: Follow the Comments
Every section has clear comments explaining what it does.

---

## 🐛 Troubleshooting

### Navbar/Footer Missing
- **Cause:** Not using a local server
- **Fix:** Use Live Server or Python server

### Animations Not Working
- **Cause:** JavaScript error
- **Fix:** Open browser console (F12), check for errors

### Form Not Sending
- **Cause:** No endpoint configured
- **Fix:** Set up Formspree (see section 7 above)

### Colors Not Changing
- **Cause:** Browser cache
- **Fix:** Hard refresh (Ctrl+Shift+R)

---

## 📚 Need More Help?

### Documentation Files

- **README.md** - Overview and setup
- **CUSTOMISATION.md** - Detailed step-by-step guide (comprehensive)
- **BUYER-GUIDE.md** - This file (quick reference)
- **MENU-PAGE-GUIDE.md** - Menu page specific guide
- **ABOUT-PAGE-GUIDE.md** - About page specific guide

### Useful Resources

- HTML basics: https://www.w3schools.com/html/
- CSS basics: https://www.w3schools.com/css/
- Google Fonts: https://fonts.google.com
- Image compression: https://tinypng.com
- Color picker: Google "color picker"

---

## ✅ Pre-Launch Checklist

Before going live, check:

**Content:**
- [ ] Restaurant name updated
- [ ] Logo replaced
- [ ] All images replaced
- [ ] Menu items updated
- [ ] Contact info updated
- [ ] Opening hours updated
- [ ] Social links updated

**Technical:**
- [ ] Colors match brand
- [ ] Forms working (test them!)
- [ ] Google Maps updated
- [ ] All pages tested on mobile
- [ ] All links working
- [ ] No console errors (F12)

**SEO:**
- [ ] Page titles updated
- [ ] Meta descriptions updated
- [ ] Image alt text updated

---

## 🚀 Deployment

### Netlify (Easiest)
1. Create account at [Netlify.com](https://www.netlify.com)
2. Drag and drop your `lumiere` folder
3. Site goes live instantly
4. Free SSL certificate included

### Traditional Hosting
1. Use FTP client (FileZilla)
2. Upload all files to your web host
3. Keep folder structure intact

---

## 💡 Pro Tips

1. **Make small changes** - Test after each change
2. **Keep backups** - Copy the original folder before editing
3. **Use browser console** - Press F12 to see errors
4. **Test on mobile** - Most visitors use phones
5. **Compress images** - Faster loading = better experience
6. **Read the comments** - They guide you through everything

---

## 🎓 Understanding the Template

### How It Works

1. **HTML files** contain your content (text, images)
2. **CSS files** control styling (colors, fonts, layout)
3. **JavaScript files** add functionality (animations, forms, sliders)

### Component System

The navbar and footer are **loaded automatically** on every page:

- Edit `components/navbar.html` → Updates all 7 pages
- Edit `components/footer.html` → Updates all 7 pages

This saves you from editing the same content 7 times!

### CSS Variables

Colors and fonts are defined ONCE and used everywhere:

```css
/* Define once in main.css */
:root {
    --accent-gold: #C9A84C;
}

/* Use everywhere */
.button {
    background: var(--accent-gold);
}
```

Change the variable, and every button updates automatically!

---

## 📞 Support

### Before Asking for Help

1. Check browser console (F12) for errors
2. Search for 🔧 EDIT comments in relevant files
3. Review CUSTOMISATION.md for detailed instructions
4. Ensure you're using a local server

### Common Questions

**Q: Can I use this for my client's restaurant?**  
A: Yes! The template license allows commercial use.

**Q: Do I need to know JavaScript?**  
A: No! Most customizations only require editing HTML and CSS.

**Q: Can I add more pages?**  
A: Yes! Copy an existing HTML file and customize it.

**Q: How do I change animations?**  
A: Look for 🔧 EDIT comments in `assets/js/pages/*.js` files.

**Q: Can I remove features I don't need?**  
A: Yes! See CUSTOMISATION.md for instructions.

---

## 🎯 Quick Reference

### File Locations

| What to Change | File Location |
|----------------|---------------|
| Homepage content | `index.html` |
| Menu items | `menu.html` |
| Events page content | `events.html` |
| Navigation links | `components/navbar.html` |
| Footer content | `components/footer.html` |
| All colors | `assets/css/main.css` |
| All fonts | `assets/css/main.css` |
| Form endpoint | `assets/js/components/form-handler.js` |
| Animation timing | `assets/js/pages/*.js` |

### Search Terms

| To Find | Search For |
|---------|-----------|
| All editable sections | `🔧 EDIT` |
| Restaurant name | `Lumière` |
| Contact info | `+44 20` or `hello@lumiere.com` |
| Social links | `href="#"` |
| Image placeholders | `unsplash.com` |

---

**You've got this!** Start with the essential customizations above, then explore the detailed CUSTOMISATION.md guide for advanced features.

**Last Updated:** March 2026
