# E&C Krasna Solutions Website

A modern, responsive corporate website for E&C Krasna Solutions - a global energy consulting and infrastructure development company.

## Project Overview

This website showcases the company's services, team, and expertise in the energy sector. It features a professional design with a dark theme, smooth animations, and full mobile responsiveness.

## Features

- **Responsive Design** - Fully responsive on all devices (mobile, tablet, desktop)
- **Modern Navigation** - Fixed navbar with mobile hamburger menu
- **Hero Section** - Eye-catching landing area with call-to-action
- **Table of Contents** - Numbered navigation system with featured projects
- **Company Profile** - Professional company overview with branding
- **Service Cards** - Grid layout showcasing key services
- **Team Section** - Showcase of team members with images
- **Testimonials** - Client testimonials in card format
- **Contact Form** - Functional contact form with validation
- **Smooth Animations** - Scroll animations and hover effects
- **Accessibility** - Semantic HTML and proper contrast ratios

## Project Structure

```
D:\KRASNA WEBSITE\
├── index.html                 # Main HTML file
├── src/
│   ├── css/
│   │   ├── style.css         # Main stylesheet
│   │   └── responsive.css    # Mobile responsive styles
│   ├── js/
│   │   └── main.js           # JavaScript functionality
│   └── assets/
│       └── images/           # Image assets folder
└── README.md                 # This file
```

## Getting Started

### Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required
- Images need to be added to `src/assets/images/`

### Setup Instructions

1. **Clone or download the project**
   ```bash
   # Navigate to the project directory
   cd "D:\KRASNA WEBSITE"
   ```

2. **Add Images**
   - Place required images in `src/assets/images/`:
     - `hero-bg.jpg` - Hero section background
     - `company-profile.jpg` - Company profile image
     - `ceo.jpg` - CEO/COO welcome message photo
     - `about.jpg` - About section image
     - `team-member-1.jpg` - Team member photos
     - `team-member-2.jpg`
     - `team-member-3.jpg`

3. **Open in Browser**
   - Double-click `index.html` or
   - Right-click → Open with → Your preferred browser or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     # Using Python 2
     python -m SimpleHTTPServer 8000
     # Using Node.js (http-server)
     npx http-server
     ```
   - Then visit `http://localhost:8000`

## File Descriptions

### index.html
Main HTML file containing:
- Navigation bar with responsive hamburger menu
- Hero section with background image
- Table of contents with featured items
- Company profile section
- Welcome/CEO message section
- About us section with geometric design
- Services grid
- Team members showcase
- Client testimonials
- Contact form
- Footer with links

### src/css/style.css
Contains:
- CSS variables for colors and transitions
- Global styles and typography
- Navigation styles
- Hero section styling
- All section layouts and components
- Card designs and hover effects
- Form styling
- Footer styling

### src/css/responsive.css
Breakpoints for:
- Tablets (1024px and below)
- Mobile Large (768px and below)
- Mobile Small (480px and below)
- Adjusts layout, font sizes, spacing for each breakpoint

### src/js/main.js
JavaScript functionality:
- Mobile menu toggle
- Smooth scroll navigation
- Navbar scroll effects
- Section fade-in animations
- Contact form handling and validation
- Active nav link highlighting
- Parallax effect for hero image
- Table of contents navigation

## Customization Guide

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-dark: #1a1a1a;
    --accent-yellow: #ffc107;
    --accent-gold: #d4af37;
    /* ... more colors ... */
}
```

### Fonts
Change font-family in `:root`:
```css
--font-family: 'Your Font', sans-serif;
```

### Content Updates
- Edit text directly in `index.html`
- Update company name, addresses, and contact info in the footer
- Modify service descriptions in service cards
- Update team member names and titles

### Image Replacement
- Replace placeholder image paths in `index.html` with actual image paths
- Ensure images are optimized for web (compressed)
- Recommended image sizes:
  - Hero background: 1920x1080px or larger
  - Company profile: 500x500px
  - Team members: 400x400px
  - Blog/testimonials: 400x300px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

1. **Image Optimization**
   - Compress images using tools like TinyPNG or ImageOptim
   - Use appropriate image formats (WebP for modern browsers, JPEG/PNG fallback)

2. **Lazy Loading**
   - Uncomment lazy loading code in `main.js` and add `data-src` attributes to images

3. **Minification**
   - Minify CSS and JavaScript for production
   - Use tools like Terser, cssnano, or online minifiers

## Contact Form Setup

For production use, you need to set up a backend endpoint:

1. Create a server endpoint to handle form submissions
2. Update the form submission code in `main.js`
3. Example (Node.js/Express):
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
})
```

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push project files
3. Enable GitHub Pages in repository settings
4. Site will be available at `https://username.github.io/repo-name`

### Traditional Hosting
1. Upload files via FTP to your web server
2. Ensure all file paths are correct
3. Test all functionality on live server

### Netlify
1. Connect GitHub repository
2. Set build command: (none needed - static site)
3. Set publish directory: `.`
4. Deploy

## SEO Optimization

To improve search engine visibility:

1. Add meta descriptions to head:
```html
<meta name="description" content="E&C Krasna Solutions - Global Energy Consulting and Infrastructure Development">
```

2. Add Open Graph tags:
```html
<meta property="og:title" content="E&C Krasna Solutions">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

3. Create sitemap.xml and robots.txt
4. Use structured data (Schema.org)

## Troubleshooting

### Images not showing
- Check file paths in HTML (should be relative: `src/assets/images/`)
- Verify image files exist in the correct folder
- Check browser console for 404 errors

### Mobile menu not working
- Ensure `main.js` is loaded
- Check browser console for JavaScript errors
- Verify hamburger and nav-menu elements exist in HTML

### Form not submitting
- Current form shows success message but doesn't send data
- You need to set up a backend endpoint for actual submissions
- Uncomment and customize fetch code in `main.js`

## License

© 2024 E&C Krasna Solutions. All rights reserved.

## Support

For issues or questions, contact: support@ecksarna.com

## Version History

- **v1.0.0** (2024-12-14) - Initial website launch
  - Complete responsive design
  - All major sections implemented
  - Mobile navigation
  - Contact form (client-side only)
  - Smooth animations

## Next Steps / Future Enhancements

- [ ] Add blog section with CMS integration
- [ ] Implement portfolio/project showcase
- [ ] Add team member detail pages
- [ ] Set up backend for contact form
- [ ] Add testimonial carousel
- [ ] Implement dark/light mode toggle
- [ ] Add multi-language support
- [ ] Integrate analytics
- [ ] Add search functionality
- [ ] Create admin dashboard
