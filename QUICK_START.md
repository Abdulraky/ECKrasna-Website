# Quick Start Guide

## 🚀 How to View the Website

### Option 1: Open in Browser Directly
1. Navigate to `D:\KRASNA WEBSITE`
2. Right-click `index.html`
3. Select "Open with" → Your preferred browser
4. Website will load in your browser

### Option 2: Use Local Server (Recommended)

**Windows - Using Python:**
```bash
# Open Command Prompt/PowerShell in the project folder
cd D:\KRASNA WEBSITE

# If you have Python 3 installed:
python -m http.server 8000

# If you have Python 2 installed:
python -m SimpleHTTPServer 8000

# Then visit: http://localhost:8000
```

**Windows - Using Node.js (if installed):**
```bash
cd D:\KRASNA WEBSITE
npx http-server
# Then visit: http://localhost:8080
```

## 📂 Project Structure

```
D:\KRASNA WEBSITE\
├── index.html                 # Main website file
├── README.md                  # Full documentation
├── IMAGES_GUIDE.md           # Image specifications
├── src/
│   ├── css/
│   │   ├── style.css         # Main styles
│   │   └── responsive.css    # Mobile responsive
│   ├── js/
│   │   └── main.js           # Functionality
│   └── assets/
│       └── images/           # Add images here
```

## 📋 What's Included

✅ **Fully Responsive Design** - Works on all devices
✅ **Mobile Navigation** - Hamburger menu for mobile
✅ **Smooth Animations** - Scroll effects and transitions
✅ **Contact Form** - With validation
✅ **SEO Ready** - Semantic HTML
✅ **No Dependencies** - Pure HTML/CSS/JavaScript
✅ **Professional Styling** - Modern dark theme with gold accents

## 🎨 Sections

1. **Navigation Bar** - Fixed header with mobile menu
2. **Hero Section** - Eye-catching landing area
3. **Table of Contents** - Numbered navigation
4. **Company Profile** - Brand overview
5. **Welcome Message** - CEO/COO greeting
6. **About Us** - Company information
7. **Services** - Service offerings (4 cards)
8. **Team** - Team members showcase
9. **Testimonials** - Client feedback (3 cards)
10. **Contact** - Contact form & information
11. **Footer** - Links and copyright

## 🖼️ Adding Images

The website needs 7 images. See `IMAGES_GUIDE.md` for detailed specifications:

1. `hero-bg.jpg` - Hero section background
2. `company-profile.jpg` - Company profile image
3. `ceo.jpg` - CEO photo
4. `about.jpg` - About section image
5. `team-member-1.jpg` - Team member 1
6. `team-member-2.jpg` - Team member 2
7. `team-member-3.jpg` - Team member 3

**Quick placeholder workaround:**
Temporarily replace image src with a placeholder service:
```html
<img src="https://via.placeholder.com/1920x1080" alt="...">
```

## 🎯 Next Steps

1. **View the website**
   - Open `index.html` in browser
   - Check responsiveness on mobile

2. **Customize content**
   - Edit company name, text in `index.html`
   - Update contact information
   - Modify team member names

3. **Add images**
   - Place images in `src/assets/images/` folder
   - Update image paths if needed

4. **Customize colors** (optional)
   - Edit CSS variables in `src/css/style.css`
   - Look for `:root { --primary-dark, --accent-yellow, etc. }`

5. **Set up contact form** (for production)
   - Currently shows success message only
   - For actual email sending, set up backend endpoint
   - See `README.md` for contact form setup instructions

## 🌐 Browser Compatibility

✅ Chrome, Firefox, Safari, Edge (latest versions)
✅ Mobile browsers (iOS Safari, Chrome Android)
✅ Responsive down to 360px width

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

## 💡 Features Overview

### Mobile Navigation
- Hamburger menu appears on screens below 768px
- Click to open/close mobile menu
- Menu closes when you click a link

### Smooth Scrolling
- Click any navigation link to smoothly scroll to section
- Active link highlighting as you scroll

### Hover Effects
- Cards have hover animations
- Links underline on hover
- Buttons darken on hover

### Form Validation
- Contact form checks for empty fields
- Shows success message on submit
- Form resets automatically

## 🔧 Troubleshooting

**Images not showing?**
- Check file paths (should be: `src/assets/images/filename.jpg`)
- Verify files exist in the folder
- Check browser console (F12) for errors

**Mobile menu not working?**
- Refresh the page
- Check JavaScript console for errors
- Ensure main.js is loading

**Website looks broken?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try in a different browser
- Check that all CSS and JS files are present

## 📞 Support

- Edit `index.html` for text content
- Edit `style.css` for visual styling
- Edit `main.js` for functionality
- See `README.md` for detailed documentation

## 🎉 You're All Set!

Your E&C Krasna Solutions website is ready to use. Start by opening `index.html` in your browser and adding your company images to the `src/assets/images/` folder.

For production deployment, check the README.md file for hosting options (GitHub Pages, Netlify, traditional hosting).
