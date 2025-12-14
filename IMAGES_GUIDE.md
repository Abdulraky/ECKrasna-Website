# Image Placeholders Guide

This document lists all images needed for the E&C Krasna Solutions website.

## Required Images

### 1. Hero Background Image
- **File name**: `hero-bg.jpg`
- **Location**: `src/assets/images/hero-bg.jpg`
- **Size**: 1920x1080px (minimum)
- **Purpose**: Background image for hero section with team at wind turbine
- **Usage**: Displayed full-width at top of page with overlay

### 2. Company Profile Image
- **File name**: `company-profile.jpg`
- **Location**: `src/assets/images/company-profile.jpg`
- **Size**: 500x500px (recommended)
- **Purpose**: Company profile section image (workspace/office photo)
- **Usage**: Left side of company profile section

### 3. CEO/COO Photo
- **File name**: `ceo.jpg`
- **Location**: `src/assets/images/ceo.jpg`
- **Size**: 100x100px (circular, will be used as avatar)
- **Purpose**: CEO/COO welcome message profile photo
- **Usage**: Avatar in welcome message section

### 4. About Section Image
- **File name**: `about.jpg`
- **Location**: `src/assets/images/about.jpg`
- **Size**: 500x400px (recommended)
- **Purpose**: About us section image (power infrastructure/industrial photo)
- **Usage**: Right side of about section

### 5. Team Member Photos
- **Files**:
  - `team-member-1.jpg`
  - `team-member-2.jpg`
  - `team-member-3.jpg`
- **Location**: `src/assets/images/`
- **Size**: 400x400px (recommended)
- **Purpose**: Team member profile photos
- **Usage**: Team section grid display

## Image Specifications

### Format Requirements
- **Primary formats**: JPEG, PNG, WebP
- **Recommended**: JPEG for photos, PNG for graphics with transparency

### Optimization Tips
1. **File size**: Keep under 200KB per image
2. **Resolution**: Use 1920px width maximum
3. **Quality**: Maintain good quality while optimizing size
4. **Tools**:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (https://imageoptim.com/)
   - Squoosh (https://squoosh.app/)

### Color Scheme Considerations
- Hero background: Works best with industrial/energy theme
- Company profile: Professional workspace imagery
- Team photos: Professional headshots with consistent lighting
- About section: Infrastructure/energy-related imagery

## Placeholder Alternatives

If you don't have images ready, you can use:
1. **Unsplash** (https://unsplash.com/) - Free professional photos
2. **Pexels** (https://www.pexels.com/) - Free high-quality images
3. **Pixabay** (https://pixabay.com/) - Royalty-free images
4. **Placeholder services**:
   - `https://via.placeholder.com/1920x1080?text=Hero+Image`
   - `https://placeholder.com/500x500?text=Company+Profile`

## Responsive Image Handling

The website uses responsive CSS, but for best performance:

1. **Consider srcset attribute** (optional enhancement):
```html
<img src="src/assets/images/hero-bg.jpg" 
     srcset="src/assets/images/hero-bg-small.jpg 480w,
             src/assets/images/hero-bg-medium.jpg 768w,
             src/assets/images/hero-bg.jpg 1920w"
     alt="Team at wind turbine">
```

2. **Image path updates**
   - All image paths in HTML use relative paths
   - Ensure images are in the correct folder structure
   - Test paths locally before deployment

## File Organization

```
src/assets/images/
├── hero-bg.jpg              (Hero section background)
├── company-profile.jpg      (Company profile image)
├── ceo.jpg                  (CEO/COO avatar)
├── about.jpg                (About section image)
├── team-member-1.jpg        (Team member 1)
├── team-member-2.jpg        (Team member 2)
└── team-member-3.jpg        (Team member 3)
```

## Quick Start with Placeholder Images

To quickly test the site, add these HTML-based placeholders:

1. Replace image src with placeholder service:
```html
<img src="https://via.placeholder.com/1920x1080/2c2c2c/ffc107?text=Team+at+Wind+Turbine" alt="Hero">
```

2. Or create simple colored divs with text temporarily

3. Then replace with real images later

## Image Upload Instructions

1. Create the `src/assets/images/` folder if not present
2. Add images to this folder
3. Ensure filenames match those in HTML exactly
4. Test in browser to confirm images load
5. Check file sizes and optimize if needed

## Troubleshooting Image Issues

### Images not displaying
- Check browser console (F12) for 404 errors
- Verify file paths match exactly (case-sensitive on Linux/Mac)
- Ensure image files exist in the folder
- Check file permissions (readable)

### Images look blurry/pixelated
- Increase original image resolution
- Check CSS sizing constraints
- Use appropriate image format for content type

### Slow loading
- Optimize and compress images
- Consider using image CDN
- Implement lazy loading
- Use appropriate file formats (WebP with fallback)

## Next Steps

1. Gather or create images matching the specifications
2. Place images in `src/assets/images/` folder
3. Test all pages to ensure images display correctly
4. Optimize images for web performance
5. Consider implementing picture tags for responsive images
