# 🔧 Code Comments Guide - Lumière Template

This guide explains the comment system used throughout the Lumière template to help you find and customize exactly what you need.

---

## 🎯 The 🔧 EDIT Comment System

Every customizable section in the code is marked with a `🔧 EDIT` comment. This makes it easy to find what you can change without breaking anything.

---

## 📝 Comment Types

### 1. 🔧 EDIT: (Most Common)

**Meaning:** You should customize this to match your restaurant.

**Examples:**

```html
<!-- 🔧 EDIT: Replace with your restaurant name -->
<h1>Lumière</h1>
```

```css
/* 🔧 EDIT: Primary background color */
--bg-primary: #0D0D0D;
```

```javascript
// 🔧 EDIT: Change delay in seconds
delay: 1.6
```

---

### 2. 🔧 BUYER GUIDE:

**Meaning:** Explanation of what this code does and when you might need to edit it.

**Example:**

```javascript
/* 🔧 BUYER GUIDE:
   This file controls the navigation bar behavior:
   - Adds background when scrolling down
   - Highlights the current page link
   - Opens/closes mobile menu
   
   You typically DON'T need to edit this file.
   To change navbar content, edit: components/navbar.html
*/
```

---

### 3. 🔧 TO ADD: / 🔧 TO REMOVE:

**Meaning:** Instructions for adding or removing items.

**Example:**

```html
<!-- 🔧 TO ADD MORE: Copy a slide above and paste here -->
</div>
```

---

### 4. ⚠️ DON'T DELETE:

**Meaning:** This element is required for functionality. Deleting it will break features.

**Example:**

```html
<!-- ⚠️ DON'T DELETE: Required for component loading -->
<div id="navbar-container"></div>
```

---

### 5. 🔧 WHAT THIS DOES:

**Meaning:** Explanation of what a function or section does.

**Example:**

```javascript
/* 🔧 WHAT THIS DOES:
   1. Loads navbar and footer components
   2. Initializes scroll animations
   3. Sets up GSAP for advanced animations
*/
```

---

### 6. 🔧 HOW TO USE:

**Meaning:** Instructions for using a function or feature.

**Example:**

```javascript
/* 🔧 HOW TO USE:
   scrollToElement('#section-id');           // Scroll to element
   scrollToElement('#section-id', -150);     // Scroll with custom offset
*/
```

---

### 7. 🔧 COMMON CUSTOMIZATIONS:

**Meaning:** List of the most common things buyers want to change.

**Example:**

```javascript
/* 🔧 COMMON CUSTOMIZATIONS:
   - Autoplay delay: Change delay value (in milliseconds)
   - Transition speed: Change speed value
   - Effect: Change effect to 'slide', 'fade', 'cube'
*/
```

---

## 🔍 How to Find All Editable Sections

### Method 1: Global Search in VS Code

1. Open VS Code
2. Press `Ctrl+Shift+F` (Windows/Linux) or `Cmd+Shift+F` (Mac)
3. Type: `🔧 EDIT`
4. Press Enter

You'll see a list of ALL editable sections across all files!

### Method 2: Search in Current File

1. Open any file in VS Code
2. Press `Ctrl+F` (Windows/Linux) or `Cmd+F` (Mac)
3. Type: `🔧 EDIT`
4. Use arrows to jump between matches

### Method 3: File Explorer

Look for files with many comments:
- `index.html` - Homepage content
- `menu.html` - Menu items
- `components/navbar.html` - Navigation
- `components/footer.html` - Footer
- `assets/css/main.css` - Colors and fonts

---

## 📂 Files by Edit Frequency

### Files You'll Edit Often

| File | What to Edit | Comment Count |
|------|-------------|---------------|
| `index.html` | Homepage content | 20+ |
| `menu.html` | Menu items | 30+ |
| `components/navbar.html` | Navigation links | 10+ |
| `components/footer.html` | Contact info, hours | 15+ |
| `assets/css/main.css` | Colors, fonts | 25+ |

### Files You Rarely Edit

| File | What It Does | Edit? |
|------|-------------|-------|
| `assets/js/main.js` | Initializes everything | Rarely |
| `assets/js/core/*.js` | Core functionality | Rarely |
| `assets/js/pages/*.js` | Page animations | Sometimes |
| `assets/css/components.css` | Component styles | Rarely |

---

## 💡 Reading the Comments

### HTML Comments

```html
<!-- This is an HTML comment -->
<!-- 🔧 EDIT: This tells you what to change -->
<h1>Content to change</h1>
```

### CSS Comments

```css
/* This is a CSS comment */
/* 🔧 EDIT: This tells you what to change */
--accent-gold: #C9A84C;
```

### JavaScript Comments

```javascript
// This is a single-line JavaScript comment

/* This is a
   multi-line JavaScript comment */

// 🔧 EDIT: This tells you what to change
delay: 1.6
```

---

## 🎯 Comment Locations by Task

### To Change Colors
**File:** `assets/css/main.css`  
**Search for:** `🔧 EDIT: Primary background color`

### To Change Fonts
**File:** `assets/css/main.css`  
**Search for:** `🔧 EDIT: Primary heading font`

### To Update Menu Items
**File:** `menu.html`  
**Search for:** `🔧 EDIT: Menu item`

### To Change Navigation Links
**File:** `components/navbar.html`  
**Search for:** `🔧 EDIT: Navigation links`

### To Update Contact Info
**File:** `components/footer.html`  
**Search for:** `🔧 EDIT: Update your restaurant address`

### To Connect Forms
**File:** `assets/js/components/form-handler.js`  
**Search for:** `🔧 EDIT: Set to your API endpoint`

### To Adjust Animations
**File:** `assets/js/pages/*.js`  
**Search for:** `🔧 EDIT: Change delay` or `🔧 EDIT: Animation duration`

---

## 🚫 What NOT to Edit

### Don't Edit These Unless You Know What You're Doing

1. **Class names** - Used by CSS and JavaScript
   ```html
   <!-- DON'T change "menu-item-card" -->
   <div class="menu-item-card">
   ```

2. **ID attributes** - Used by JavaScript
   ```html
   <!-- DON'T change "navbar-container" -->
   <div id="navbar-container"></div>
   ```

3. **Data attributes** - Used by JavaScript
   ```html
   <!-- DON'T change "data-category" -->
   <div data-category="starters">
   ```

4. **Function names** - Used by other files
   ```javascript
   // DON'T rename this function
   function initNavbar() {
   ```

### Safe to Edit

1. **Text content** - Between HTML tags
   ```html
   <h1>Change this text</h1>
   ```

2. **Image sources** - src attributes
   ```html
   <img src="change/this/path.webp">
   ```

3. **Links** - href attributes
   ```html
   <a href="change-this.html">
   ```

4. **CSS variable values** - In :root
   ```css
   --accent-gold: #C9A84C;  /* Change this color */
   ```

5. **Configuration values** - Marked with 🔧 EDIT
   ```javascript
   const ITEMS_PER_PAGE = 8;  // Change this number
   ```

---

## 🎓 Understanding Comment Structure

### Section Headers

Large comment blocks mark major sections:

```html
<!-- ═══════════════════════════════════════════════
     SECTION 3 — SIGNATURE DISHES
     Three dish cards with hover zoom
     🔧 EDIT: Update section heading and cards below
     ═══════════════════════════════════════════════ -->
```

**What this tells you:**
- Section name and purpose
- What's included in this section
- What you can customize

### Inline Comments

Small comments mark specific elements:

```html
<!-- 🔧 EDIT: Update dish name -->
<h3>Wagyu Beef Tenderloin</h3>
```

**What this tells you:**
- Exactly what to change
- No need to understand the whole section

---

## 📊 Comment Statistics

### Total Comments by File Type

| File Type | Approximate Count |
|-----------|------------------|
| HTML files | 150+ comments |
| CSS files | 80+ comments |
| JavaScript files | 120+ comments |
| **Total** | **350+ comments** |

### Most Commented Files

1. `menu.html` - 35+ comments
2. `index.html` - 25+ comments
3. `assets/css/main.css` - 30+ comments
4. `assets/js/pages/menu.js` - 25+ comments
5. `components/navbar.html` - 12+ comments

---

## 🎯 Quick Reference

### Find All Editable Sections
```
Search: 🔧 EDIT
```

### Find Configuration Values
```
Search: 🔧 EDIT: (in .js files)
```

### Find Required Elements
```
Search: ⚠️ DON'T DELETE
```

### Find Buyer Guides
```
Search: 🔧 BUYER GUIDE
```

---

## 💡 Pro Tips

1. **Read the section header first** - Understand what the section does
2. **Look for inline comments** - They point to specific elements
3. **Check nearby comments** - Context helps understanding
4. **Use VS Code search** - Fastest way to find what you need
5. **Don't delete comments** - They help you and future editors

---

## 🆘 If You Get Stuck

1. **Search for the comment** - Use `Ctrl+Shift+F`
2. **Read the BUYER GUIDE comment** - Explains what the code does
3. **Check CUSTOMISATION.md** - Detailed instructions
4. **Look at examples** - See how existing content is structured
5. **Test small changes** - Make one change at a time

---

**Remember:** The comments are your guide. Follow them, and you can't go wrong!

**Last Updated:** March 2026
