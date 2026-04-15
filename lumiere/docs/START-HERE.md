# 🌟 Welcome to Lumière Template!

**Thank you for purchasing the Lumière fine dining restaurant template!**

You're about to launch a beautiful, professional website for your restaurant. This guide will get you started in just 5 minutes.

---

## ✨ What Makes This Template Special

✅ **Beginner-Friendly** - Over 350+ helpful comments guide you through every customization  
✅ **No Coding Required** - All editable sections marked with 🔧 EDIT comments  
✅ **Change Colors Once** - CSS variables update the entire site automatically  
✅ **Edit Once, Update Everywhere** - Navbar and footer load on all pages  
✅ **Comprehensive Docs** - 5 detailed guides for every skill level  
✅ **Professional Design** - Premium animations, smooth scrolling, mobile-responsive  

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Open the Template

1. Extract the ZIP file to your computer
2. Open the `lumiere` folder in VS Code (or your preferred code editor)

### Step 2: Run Locally

**⚠️ IMPORTANT:** You MUST use a local server. Double-clicking HTML files won't work.

**Easiest method:**
1. Install VS Code from https://code.visualstudio.com
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Your browser opens automatically

**Alternative methods:** See `docs/README.md`

### Step 3: Find What to Edit

Press `Ctrl+Shift+F` (Windows) or `Cmd+Shift+F` (Mac) and search for:
```
🔧 EDIT
```

You'll see every customizable section marked with helpful comments!

### Step 4: Make Your First Change

1. Open `index.html`
2. Press `Ctrl+H` (Find & Replace)
3. Find: `Lumière`
4. Replace: `Your Restaurant Name`
5. Click "Replace All"
6. Save and refresh your browser

Congratulations! You just customized your first element.

---

## 📚 Documentation Structure

We've created **5 comprehensive guides** to help you:

### 1. BUYER-GUIDE.md (Start Here!)
**Read time:** 5 minutes  
**Best for:** Everyone  
**Contains:**
- Essential customizations
- Step-by-step instructions
- Common tasks
- Quick tips

### 2. QUICK-REFERENCE.md (Keep Open While Editing)
**Read time:** 2 minutes  
**Best for:** Quick lookups  
**Contains:**
- Cheat sheet
- File locations
- Search terms
- Common tasks

### 3. CODE-COMMENTS-GUIDE.md
**Read time:** 5 minutes  
**Best for:** Understanding the comment system  
**Contains:**
- What 🔧 EDIT means
- Comment types
- How to find sections
- What NOT to edit

### 4. CUSTOMISATION.md (Comprehensive Guide)
**Read time:** 30 minutes  
**Best for:** Detailed instructions  
**Contains:**
- Step-by-step for every feature
- Advanced customizations
- Troubleshooting
- Code structure explanation

### 5. FILE-STRUCTURE-GUIDE.md
**Read time:** 5 minutes  
**Best for:** Understanding file organization  
**Contains:**
- Visual file tree
- What each file does
- Edit frequency guide
- Component system explained

### 6. README.md (Technical Overview)
**Read time:** 10 minutes  
**Best for:** Developers  
**Contains:**
- Tech stack
- File structure
- Browser compatibility
- Build information

### 5. README.md (Technical Overview)
**Read time:** 10 minutes  
**Best for:** Developers  
**Contains:**
- Tech stack
- File structure
- Browser compatibility
- Build information

---

## 🎯 Your First 10 Minutes

Follow this checklist to get started:

1. ✅ **Run locally** - Use Live Server
2. ✅ **Read BUYER-GUIDE.md** - 5 minutes
3. ✅ **Search for 🔧 EDIT** - See all editable sections
4. ✅ **Change restaurant name** - Find & Replace
5. ✅ **Update colors** - Edit `assets/css/main.css`
6. ✅ **Replace logo** - Add to `assets/images/brand/`
7. ✅ **Test on mobile** - Resize browser window
8. ✅ **Check browser console** - Press F12, look for errors

---

## 🔧 The 🔧 EDIT Comment System

Throughout the code, you'll see comments like:

```html
<!-- 🔧 EDIT: Replace with your restaurant name -->
<h1>Lumière</h1>
```

**This means:** "You should change this to match your restaurant."

**How to find all of them:**
1. Press `Ctrl+Shift+F` in VS Code
2. Search: `🔧 EDIT`
3. See every customizable section

**Over 350+ helpful comments** guide you through the entire template!

---

## 📁 File Organization

```
lumiere/
├── START-HERE.md           ← You are here!
│
├── docs/                   ← 📖 All documentation
│   ├── BUYER-GUIDE.md      ← Read this first
│   ├── QUICK-REFERENCE.md  ← Keep open while editing
│   ├── CODE-COMMENTS-GUIDE.md
│   ├── CUSTOMISATION.md    ← Comprehensive guide
│   └── README.md           ← Technical overview
│
├── *.html                  ← 🔧 Your content (7 pages)
├── components/             ← 🔧 Navbar & footer (edit once, updates all pages)
│
├── assets/
│   ├── css/
│   │   ├── main.css        ← 🔧 EDIT COLORS & FONTS HERE
│   │   └── ...
│   ├── js/                 ← Functionality (rarely edit)
│   └── images/             ← 🔧 Replace with your images
│
```

---

## 🎨 Most Common Customizations

### 1. Change Colors (2 minutes)
- **File:** `assets/css/main.css`
- **Lines:** 10-50
- **Edit:** CSS variables in `:root` section

### 2. Replace Logo (1 minute)
- **File:** `assets/images/brand/logo.webp`
- **Size:** 200-300px wide, transparent background

### 3. Update Menu (10 minutes)
- **File:** `menu.html`
- **Search:** `🔧 EDIT: Menu item`
- **Action:** Copy/paste card blocks

### 4. Change Contact Info (5 minutes)
- **File:** `components/footer.html`
- **Search:** `🔧 EDIT: Update your restaurant address`
- **Update:** Address, phone, email, hours, social links

### 5. Connect Forms (5 minutes)
- **Service:** Formspree.io (free)
- **File:** `assets/js/components/form-handler.js`
- **Line:** ~20
- **Change:** `submitEndpoint: null` to your Formspree URL

---

## ⚠️ Important Notes

### Must Use Local Server

❌ **Don't:** Double-click HTML files  
✅ **Do:** Use Live Server, Python, or Node.js server

**Why?** The template loads navbar/footer via JavaScript, which requires a server.

### Keep Backups

Before making major changes, copy the entire `lumiere` folder as a backup.

### Test Frequently

After each change:
1. Save the file
2. Refresh your browser
3. Check if it looks correct
4. Check browser console (F12) for errors

---

## 🆘 Need Help?

### Step 1: Check Documentation
- **BUYER-GUIDE.md** - Quick solutions
- **CUSTOMISATION.md** - Detailed instructions
- **CODE-COMMENTS-GUIDE.md** - Understanding comments

### Step 2: Check Browser Console
1. Press F12 in your browser
2. Click "Console" tab
3. Look for red error messages
4. Google the error message

### Step 3: Common Issues
- **Navbar missing?** Use a local server
- **Images broken?** Check file paths
- **Animations not working?** Check console for errors
- **Forms not sending?** Connect to Formspree

---

## 🎯 Next Steps

1. ✅ **Read BUYER-GUIDE.md** (5 minutes)
2. ✅ **Make your first edits** (10 minutes)
3. ✅ **Replace images** (20 minutes)
4. ✅ **Update menu** (30 minutes)
5. ✅ **Connect forms** (5 minutes)
6. ✅ **Test everything** (15 minutes)
7. ✅ **Deploy** (10 minutes)

**Total time to launch:** ~2 hours

---

## 🌟 You've Got This!

The template is designed to be beginner-friendly. With over 350+ helpful comments in the code and comprehensive documentation, you'll have your restaurant website live in no time.

**Start with `docs/BUYER-GUIDE.md` and follow the 🔧 EDIT comments!**

---

**Questions?** Check the documentation files in the `docs/` folder.

**Last Updated:** March 2026


---

## 🎉 What You Just Got

### 7 Complete Pages
✅ Homepage with hero, signature dishes, chef feature, testimonials  
✅ Menu page with filtering and pagination  
✅ Reservations page with date picker  
✅ About page with team and story  
✅ Gallery page with lightbox  
✅ Events page for private dining  
✅ Contact page with map and form  

### Premium Features
✅ Custom gold cursor (desktop)  
✅ Smooth scrolling throughout  
✅ Page loading animation  
✅ Scroll-triggered animations  
✅ Mobile-responsive design  
✅ Form validation  
✅ Image lightbox  
✅ Testimonial slider  

### Developer-Friendly
✅ Clean, organized code  
✅ 350+ helpful comments  
✅ CSS variables for easy customization  
✅ Component-based structure  
✅ No build process required  
✅ Vanilla JavaScript (no frameworks)  

---
