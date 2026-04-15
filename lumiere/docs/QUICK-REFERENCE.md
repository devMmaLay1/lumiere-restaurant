# ⚡ Lumière Template - Quick Reference Card

**Print this page or keep it open while editing!**

---

## 🎯 Most Common Tasks

### Change Restaurant Name
```
Press: Ctrl+Shift+H
Find: Lumière
Replace: Your Restaurant Name
Click: Replace All
```

### Change Colors
```
File: assets/css/main.css
Line: ~10-50
Edit: CSS variables in :root section
```

### Replace Logo
```
File: assets/images/brand/logo.webp
Size: 200-300px wide, transparent background
Format: WebP or PNG
```

### Update Menu Items
```
File: menu.html
Search: 🔧 EDIT: Menu item
Copy/paste card blocks to add items
```

### Update Contact Info
```
File: components/footer.html
Search: 🔧 EDIT: Update your restaurant address
Also update: phone, email, hours, social links
```

### Connect Forms
```
File: assets/js/components/form-handler.js
Line: ~20
Change: submitEndpoint: null
To: submitEndpoint: 'https://formspree.io/f/YOUR_ID'
```

---

## 📁 File Locations Cheat Sheet

| What to Change | File Path |
|----------------|-----------|
| **Homepage content** | `index.html` |
| **Menu items** | `menu.html` |
| **About page** | `about.html` |
| **Contact page** | `contact.html` |
| **Navigation** | `components/navbar.html` |
| **Footer** | `components/footer.html` |
| **All colors** | `assets/css/main.css` |
| **All fonts** | `assets/css/main.css` |
| **Button styles** | `assets/css/components.css` |
| **Form endpoint** | `assets/js/components/form-handler.js` |
| **Animation timing** | `assets/js/pages/*.js` |

---

## 🎨 CSS Variables Quick Reference

**File:** `assets/css/main.css` (lines 10-50)

```css
:root {
    /* Backgrounds */
    --bg-primary: #0D0D0D;      /* Main background */
    --bg-surface: #1A1A18;      /* Cards/surfaces */
    
    /* Accent Colors */
    --accent-gold: #C9A84C;     /* Buttons, highlights */
    --accent-gold-hover: #E8C56A; /* Hover state */
    
    /* Text Colors */
    --text-cream: #F5ECD7;      /* Special text */
    --text-primary: #F0EDE6;    /* Main text */
    --text-muted: #9A9589;      /* Secondary text */
    
    /* Fonts */
    --font-heading: 'Cormorant Garamond', serif;
    --font-subheading: 'Playfair Display', serif;
    --font-body: 'DM Sans', sans-serif;
    
    /* Spacing */
    --section-padding: 50px;    /* Mobile */
    --container-width: 1280px;
    --border-radius: 6px;
}
```

---

## 🔍 Search Terms

| To Find | Search For |
|---------|-----------|
| All editable sections | `🔧 EDIT` |
| Restaurant name | `Lumière` |
| Contact info | `+44 20` or `hello@lumiere.com` |
| Social links | `href="#"` |
| Image placeholders | `unsplash.com` |
| Form endpoint | `submitEndpoint` |
| Animation timing | `duration:` or `delay:` |
| Color variables | `--accent-gold` or `--bg-primary` |

---

## 🖼️ Image Specifications

| Location | Recommended Size | Format |
|----------|-----------------|--------|
| Hero backgrounds | 1920x1080px | WebP/JPG |
| Dish photos | 800x600px | WebP/JPG |
| Interior shots | 1200x800px | WebP/JPG |
| Chef portraits | 600x800px | WebP/JPG |
| Gallery images | 800x800px | WebP/JPG |
| Logo | 200-300px wide | WebP/PNG |

**Optimization:** Use TinyPNG.com to compress images before uploading.

---

## ⚡ VS Code Shortcuts

| Action | Windows/Linux | Mac |
|--------|--------------|-----|
| Find in file | `Ctrl+F` | `Cmd+F` |
| Find in all files | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Find & Replace | `Ctrl+H` | `Cmd+H` |
| Find & Replace All | `Ctrl+Shift+H` | `Cmd+Shift+H` |
| Save file | `Ctrl+S` | `Cmd+S` |
| Save all files | `Ctrl+K S` | `Cmd+K S` |
| Open file | `Ctrl+P` | `Cmd+P` |
| Command palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |

---

## 🚀 Local Server Commands

### VS Code Live Server (Easiest)
```
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"
```

### Python
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

### Node.js
```bash
npx http-server
# Open URL shown in terminal
```

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Navbar/footer missing | Use local server, don't open HTML directly |
| Images not loading | Check path: `assets/images/folder/file.webp` |
| Animations not working | Check browser console (F12) for errors |
| Forms not sending | Connect to Formspree (see above) |
| Colors not changing | Hard refresh: `Ctrl+Shift+R` |
| Changes not showing | Clear cache or hard refresh |

---

## 📖 Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| **BUYER-GUIDE.md** | Quick start | 5 min |
| **QUICK-REFERENCE.md** | This file | 2 min |
| **CODE-COMMENTS-GUIDE.md** | Comment system | 5 min |
| **CUSTOMISATION.md** | Detailed guide | 30 min |
| **README.md** | Technical overview | 10 min |

---

## ✅ Pre-Launch Checklist

**Content:**
- [ ] Restaurant name
- [ ] Logo
- [ ] All images
- [ ] Menu items
- [ ] Contact info
- [ ] Hours
- [ ] Social links

**Technical:**
- [ ] Colors
- [ ] Forms working
- [ ] Google Maps
- [ ] Mobile tested
- [ ] All links work
- [ ] No console errors

---

## 🎓 Learning Resources

- **HTML:** https://www.w3schools.com/html/
- **CSS:** https://www.w3schools.com/css/
- **Google Fonts:** https://fonts.google.com
- **Image Compression:** https://tinypng.com
- **Color Picker:** Google "color picker"
- **Form Handling:** https://formspree.io

---

## 💡 Pro Tips

1. ✅ Make small changes and test
2. ✅ Keep a backup copy
3. ✅ Use browser console (F12)
4. ✅ Search for 🔧 EDIT comments
5. ✅ Test on mobile devices
6. ✅ Compress images before upload
7. ✅ Read comments in the code
8. ✅ Save frequently

---

**🎯 Start with BUYER-GUIDE.md, then use this as your quick reference!**

**Last Updated:** March 2026
