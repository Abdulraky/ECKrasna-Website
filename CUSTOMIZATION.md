# Configuration & Customization Guide

## 🎨 Quick Customization Reference

### 1. Edit Company Information

**File**: `index.html`

```html
<!-- Logo/Company Name - Line ~31 -->
<div class="logo">E&C KRASNA</div>

<!-- Hero Title - Line ~56 -->
<h1 class="hero-title">An <span class="highlight">Opportunity</span><br>Unlock global markets...</h1>

<!-- Company Name in Profile - Line ~134 -->
<h3>E&C KRASNA SOLUTIONS</h3>

<!-- Footer Company Info - Line ~390 -->
<h4>E&C KRASNA SOLUTIONS</h4>
<p>Unlocking global markets through innovative energy solutions.</p>

<!-- Contact Footer - Line ~315 -->
<p><strong>Address:</strong> Global Headquarters, Energy District</p>
<p><strong>Phone:</strong> +1 (555) 123-4567</p>
<p><strong>Email:</strong> info@ecksarna.com</p>
```

### 2. Change Color Scheme

**File**: `src/css/style.css` (Lines 8-18)

```css
:root {
    --primary-dark: #1a1a1a;      /* Light black background */
    --primary-black: #000000;     /* Deep black */
    --accent-gold: #d4af37;       /* Gold accent (less common) */
    --accent-yellow: #ffc107;     /* Yellow accent (primary) */
    --text-light: #f5f5f5;        /* Light text */
    --text-gray: #999999;         /* Gray text */
    --border-gray: #333333;       /* Border color */
    --white: #ffffff;             /* White */
}
```

**Popular Color Combinations:**

Green Energy Theme:
```css
--accent-yellow: #27ae60;    /* Green */
--accent-gold: #2ecc71;      /* Light green */
```

Blue Energy Theme:
```css
--accent-yellow: #3498db;    /* Blue */
--accent-gold: #2980b9;      /* Dark blue */
```

Red/Orange Energy Theme:
```css
--accent-yellow: #e74c3c;    /* Red */
--accent-gold: #e67e22;      /* Orange */
```

### 3. Update Navigation Links

**File**: `index.html` (Lines ~45-53)

```html
<ul class="nav-menu">
    <li><a href="#home" class="nav-link">Home</a></li>
    <li><a href="#about" class="nav-link">About Us</a></li>
    <li><a href="#services" class="nav-link">Services</a></li>
    <li><a href="#team" class="nav-link">Team</a></li>
    <li><a href="#testimonials" class="nav-link">Testimonials</a></li>
    <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>
```

### 4. Update Services

**File**: `index.html` (Lines ~230-260)

Replace the service cards with your actual services:

```html
<div class="service-card">
    <div class="service-icon">⚡</div>
    <h3>Energy Consulting</h3>
    <p>Strategic guidance for sustainable energy solutions</p>
</div>
```

**Available emoji icons:**
- ⚡ Lightning (Energy)
- 🏗️ Construction (Infrastructure)
- 📊 Chart (Data/Analytics)
- 🌍 Globe (Global)
- 🔧 Wrench (Technical)
- 💼 Briefcase (Business)
- 🎯 Target (Goals)
- 🚀 Rocket (Innovation)

### 5. Add/Edit Team Members

**File**: `index.html` (Lines ~266-290)

```html
<div class="team-member">
    <img src="src/assets/images/team-member-1.jpg" alt="Team member">
    <h3>John Smith</h3>
    <p>Energy Strategy Director</p>
</div>
```

**To add more team members:**
1. Copy a team-member div
2. Update name, title, and image
3. Adjust grid layout if needed (currently 3 columns on desktop)

### 6. Edit Testimonials

**File**: `index.html` (Lines ~294-312)

```html
<div class="testimonial-card">
    <p class="testimonial-text">"Exceptional service and deep industry knowledge."</p>
    <p class="testimonial-author">- Client Name / Company</p>
</div>
```

### 7. Update Contact Information

**File**: `index.html`

Contact Section (Lines ~320-340):
```html
<div class="contact-info">
    <h3>Contact Information</h3>
    <p><strong>Address:</strong> Your Address</p>
    <p><strong>Phone:</strong> Your Phone</p>
    <p><strong>Email:</strong> Your Email</p>
</div>
```

Footer (Lines ~407-409):
```html
<p><strong>Address:</strong> Your Address Here</p>
<p><strong>Phone:</strong> Your Phone Here</p>
<p><strong>Email:</strong> your-email@example.com</p>
```

### 8. Update Footer Links

**File**: `index.html` (Lines ~395-406)

```html
<div class="footer-section">
    <h4>Quick Links</h4>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</div>

<div class="footer-section">
    <h4>Follow Us</h4>
    <ul>
        <li><a href="https://linkedin.com/company/your-company">LinkedIn</a></li>
        <li><a href="https://twitter.com/your-company">Twitter</a></li>
        <li><a href="https://facebook.com/your-company">Facebook</a></li>
    </ul>
</div>
```

## 📐 CSS Customization

### Font Sizes

**Heading Sizes** (in `style.css`):
- `.hero-title`: 4rem (Line 315)
- `.toc-header h2`: 3rem (Line 288)
- `.about-header h2`: 3rem (Line 517)
- `.services h2`: 2.5rem (Line 538)

Change values and adjust responsively in `responsive.css`.

### Spacing

**Section Padding** (in `style.css`):
```css
.hero { height: 100vh; }              /* Full screen */
.services { padding: 80px 0; }        /* Top/bottom spacing */
.container { max-width: 1200px; }     /* Max width */
```

### Shadows and Effects

**Add card shadows**:
```css
.service-card {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
```

**Add hover effects**:
```css
.service-card:hover {
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
    transform: translateY(-8px);
}
```

## 🔧 JavaScript Customization

### Change Scroll Behavior

**File**: `src/js/main.js`

```javascript
// Line ~38 - Smooth scroll offset
targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'    // 'start', 'center', or 'end'
});
```

### Customize Form Messages

**File**: `src/js/main.js` (Lines ~105-125)

```javascript
// Success message
submitBtn.textContent = 'Message Sent!';
submitBtn.style.background = '#28a745';  // Green

// Reset message
submitBtn.textContent = 'Send Message';
submitBtn.style.background = '#ffc107';  // Yellow
```

### Add External API Integration

**For contact form email sending** (Lines ~95):
```javascript
fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
})
.then(response => response.json())
.then(data => {
    // Handle response
    console.log('Email sent:', data);
})
.catch(error => console.error('Error:', error));
```

## 🎯 Typography Customization

**Change Font Family** (in `style.css`, Line 10):
```css
--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Alternative options: */
/* 'Arial', sans-serif */
/* 'Georgia', serif */
/* 'Courier New', monospace */
/* 'Trebuchet MS', sans-serif */
```

**Google Fonts Integration**:
Add to `index.html` head:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update CSS:
```css
--font-family: 'Poppins', sans-serif;
```

## 📱 Responsive Customization

### Adjust Mobile Breakpoints

**File**: `src/css/responsive.css`

```css
/* Change from 1024px to 1200px */
@media (max-width: 1200px) { ... }

/* Change mobile threshold */
@media (max-width: 600px) { ... }  /* Instead of 480px */
```

### Mobile Menu Customization

**File**: `src/js/main.js` (Lines ~14-26)

Adjust menu timing or styling.

## 🔐 Security Best Practices

### Before Going Live

1. **Remove console.log statements** (Line ~154 in main.js)
2. **Remove test/debug code**
3. **Update all contact information** with real details
4. **Set up proper email service** for contact form
5. **Add HTTPS certificate**
6. **Test form submission** thoroughly
7. **Check all links** are working

## 🚀 Advanced Customization

### Add Analytics

Add to `index.html` before closing `</body>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add FAQ Section

Copy the testimonials section and modify for FAQs:
```html
<section class="faqs">
    <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-item">
            <h3>Question?</h3>
            <p>Answer here...</p>
        </div>
    </div>
</section>
```

### Add Blog Section

Create new section similar to testimonials with blog posts:
```html
<section class="blog">
    <div class="blog-post">
        <img src="..." alt="Post image">
        <h3>Post Title</h3>
        <p>Post date and excerpt</p>
    </div>
</section>
```

## 📋 Checklist Before Launch

- [ ] Update all company information
- [ ] Add actual images (remove placeholders)
- [ ] Test all links and navigation
- [ ] Check mobile responsiveness
- [ ] Set up contact form backend
- [ ] Update meta descriptions (SEO)
- [ ] Test in multiple browsers
- [ ] Check load time/performance
- [ ] Set up SSL certificate
- [ ] Configure analytics
- [ ] Test contact form submissions
- [ ] Proofread all text content

## 💾 File Reference Quick Link

| File | Purpose | Edit For |
|------|---------|----------|
| `index.html` | Content | Text, links, structure |
| `style.css` | Design | Colors, fonts, layout |
| `responsive.css` | Mobile | Breakpoints, mobile styles |
| `main.js` | Functionality | Interactions, form, animations |

---

**Need help?** Refer to README.md for detailed documentation or QUICK_START.md for basic setup.
