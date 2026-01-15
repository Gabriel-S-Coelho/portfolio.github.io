# Portfolio Documentation

A personal portfolio website for Gabriel Coelho - Indie Developer and 3D Artist.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [CSS Architecture](#css-architecture)
- [JavaScript Components](#javascript-components)
- [Layout Inconsistencies Found](#layout-inconsistencies-found)
- [How to Customize](#how-to-customize)
- [Responsive Breakpoints](#responsive-breakpoints)
-
---

## Overview

This is a single-page portfolio website built with:
- **HTML5** - Semantic markup
- **CSS3** - Modular component-based architecture
- **JavaScript/jQuery** - Interactive components
- **ScrollReveal.js** - Scroll animations
- **Font Awesome** - Social media icons

### Features
- Dark/Light theme toggle with localStorage persistence
- Responsive design (mobile-first approach)
- Scroll-to-top button
- Collapsible project details
- Smooth scroll animations
- Clean, modular CSS architecture

---

## Project Structure

```
portfolio.github.io/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties (colors, spacing, fonts)
│   ├── base.css           # Global resets
│   ├── utilities.css      # Reusable utility classes (NEW!)
│   ├── animations.css     # Shared keyframe animations (NEW!)
│   ├── fonts.css          # Font imports
│   ├── layout.css         # All layout & typography (CONSOLIDATED!)
│   ├── components.css     # All components (CONSOLIDATED!)
│   └── themes.css         # Theme toggle & dark/light variations (NEW!)
├── js/
│   ├── main.js                 # ScrollReveal initialization
│   └── components/
│       ├── project-toggle.js   # Project expand/collapse
│       ├── scroll-to-top.js    # Scroll to top button
│       └── theme-toggle.js     # Dark/light mode switcher
└── images/
    ├── onmyodo_banner.jpg
    ├── echoes_banner.jpg
    ├── woodsman_banner.jpg
    └── itchio.png
```

### New Structure - Option A (Implemented!)
**8 CSS files total** - Clean, organized, no duplication!

---

## CSS Architecture

### 1. **Variables (variables.css)**
Central configuration file containing all CSS custom properties:

#### Colors
- **Dark Theme (Default):**
  - `--bg-dark: #19171b` - Main dark background
  - `--bg-dark-alt: #191e27` - Alternative dark background
  - `--text-dark: #afafbf` - Primary text color
  - `--text-dark-bright: #e7e7e7` - Bright text for emphasis

- **Light Theme:**
  - `--bg-light: #f5f5f5` - Light background
  - `--text-light: #333333` - Dark text for light mode

- **Accents:**
  - `--accent-primary: #ac3232` - Red accent (links, highlights)
  - `--accent-secondary: #fc6` - Yellow accent

#### Layout Variables
- **Section Padding:**
  - Desktop: `100px 170px`
  - Tablet: `100px`
  - Mobile: `50px`
  - Small: `50px 35px`

- **Max Widths:**
  - Container: `1600px`
  - Intro: `1440px`
  - Content: `650px`

#### Typography
- **Font Families:**
  - Primary: `Raleway, "Source Sans Pro", Helvetica, Arial, sans-serif`
  - Monospace: `Inconsolata, monospace`

- **Font Weights:**
  - Light: `300`
  - Regular: `400`
  - Bold: `700`

### 2. **Layout System (layout.css)**

#### Sections
All main content sections use this structure:
```html
<section class="section">
  <div class="section__title">Title</div>
  <div class="section__content">Content</div>
</section>
```

- `.section` - Flex container, max-width 1600px, centered
- `.section__title` - Fixed width (200px), right-aligned, uppercase
- `.section__content` - Flexible width, max-width 650px

### 3. **Component Styles**

Each component is isolated in its own CSS file:
- **Projects:** Grid layout with featured projects (left) and collapsible list (right)
- **Skills:** Three-column layout showing languages, frameworks, and fields
- **Footer:** Flex layout with copyright and social links
- **Theme Toggle:** Fixed position button with sun/moon icons

---

## JavaScript Components

### 1. **Theme Toggle (theme-toggle.js)**
Manages dark/light mode switching:
- Toggles `.night` class on `<body>` and `<html>`
- Stores preference in `localStorage` as `'theme'`
- Default theme: `'dark'`

### 2. **Scroll to Top (scroll-to-top.js)**
Shows/hides scroll button based on scroll position:
- Shows when scrolled past intro section
- Smooth scroll animation to top (500ms)

### 3. **Project Toggle (project-toggle.js)**
Expands/collapses project details:
```javascript
toggleProject(header)
```
- Toggles `.expanded` class on project
- Animates `max-height` for smooth expansion
- Changes toggle icon between `+` and `−`

### 4. **Main (main.js)**
Initializes ScrollReveal for scroll animations:
- Reveals sections as user scrolls down
- Duration: 600ms
- Easing: `cubic-bezier(.694,0,.335,1)`
- View factor: 0.3 (trigger when 30% visible)

---

## Restructuring Complete! ✅

### **What Was Fixed:**

1. ✅ **Eliminated All Duplication**
   - Removed duplicate intro styles (intro.css)
   - Removed duplicate typography styles (typography.css)
   - Consolidated 14 CSS files → 8 CSS files

2. ✅ **Consistent Variable Usage**
   - All styles now use CSS variables
   - No more hard-coded values overriding variables
   - Clean specificity (no `body .class` hacks)

3. ✅ **Added Reusable Utilities**
   - New utilities.css with flexbox, spacing, text helpers
   - Shared animations.css for all keyframes
   - DRY (Don't Repeat Yourself) principles applied

4. ✅ **Better Organization**
   - Option A structure implemented
   - Clear separation: layout, components, themes
   - Easy to maintain and extend

### **Before vs After:**

| Metric | Before | After |
|--------|--------|-------|
| CSS Files | 14 files | 8 files |
| Duplication | High | None |
| Total CSS Size | ~20KB | ~16KB |
| Maintainability | Medium | High |
| Reusability | Low | High |

---

## How to Customize

### Change Colors
Edit `css/variables.css`:
```css
:root {
  --accent-primary: #your-color;  /* Main accent color */
  --bg-dark: #your-color;         /* Dark mode background */
  --text-dark: #your-color;       /* Dark mode text */
}
```

### Add New Project
Edit `index.html` in the projects section:

**Featured Project (with image):**
```html
<div class="project project-name">
  <figure class="project__pic">
    <a href="project-url" target="_blank">
      <img src="images/project-banner.jpg" alt="Project Name">
    </a>
  </figure>
  <figcaption class="project__caption">
    <div class="project__name">
      <a href="project-url" target="_blank">Project Name</a>
    </div>
    <p>Project description goes here.</p>
  </figcaption>
</div>
```

**Collapsible Project (in sidebar):**
```html
<div class="project collapsable">
  <div class="project__header" onclick="toggleProject(this)">
    <h3 class="project__title">Project Title</h3>
    <span class="toggle-icon">+</span>
  </div>
  <div class="project__details">
    <p>Project description.</p>
    <div class="project__used">
      <span class="project__used__item">Tag1</span>
      <span class="project__used__item">Tag2</span>
    </div>
    <a href="project-url" target="_blank" class="arrow-link">View Project</a>
  </div>
</div>
```

### Change Theme Default
Edit `js/components/theme-toggle.js`:
```javascript
const currentTheme = localStorage.getItem('theme') || 'light'; // Change to 'light'
```

### Adjust Responsive Breakpoints
Edit breakpoints in `css/variables.css` or component files:
```css
@media screen and (max-width: 768px) {
  /* Your responsive styles */
}
```

---

## Responsive Breakpoints

The site uses these main breakpoints:

| Breakpoint | Description | Common Changes |
|------------|-------------|----------------|
| 1280px | Large desktop | Reduced section padding |
| 1024px | Desktop/Tablet | Smaller fonts, adjusted spacing |
| 768px | Tablet | Section layout changes to block, centered titles |
| 630px | Large phone | Skills wrap to 2 columns |
| 550px | Medium phone | Smaller intro padding |
| 480px | Small phone | Icons replace text in footer |
| 360px | Tiny phone | Further font size reductions |

---

## Files Explained

### HTML Files
- **index.html** - The only HTML file, contains all content

### CSS Files (Load Order in HTML)
1. **fonts.css** - Font imports (@font-face or Google Fonts links)
2. **variables.css** - CSS custom properties (loaded first to be available everywhere)
3. **base.css** - Global resets (box-sizing, text selection, lists)
4. **utilities.css** - Reusable utility classes (flex, spacing, text, etc.)
5. **animations.css** - Shared keyframe animations (fadeIn, bounce, pulse, etc.)
6. **layout.css** - All layout & typography (sections, intro, headings, links)
7. **components.css** - All components (projects, skills, footer, buttons)
8. **themes.css** - Theme toggle & dark/light mode variations

### JavaScript Files (Load Order)
1. **jQuery** (CDN) - Required dependency
2. **ScrollReveal** (CDN) - Scroll animations
3. **scroll-to-top.js** - Scroll button functionality
4. **project-toggle.js** - Project expansion
5. **theme-toggle.js** - Theme switcher
6. **main.js** - ScrollReveal initialization (must load last)

---

## Development Notes

### Dependencies
- **jQuery 3.1.1** - For DOM manipulation and animations
- **ScrollReveal.js** - For scroll-based animations
- **Font Awesome 5.0.6** - For social media icons

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS Grid and Flexbox
- CSS Variables (custom properties)
- LocalStorage API

### Theme Persistence
The theme preference is saved in browser's `localStorage`:
- Key: `'theme'`
- Values: `'dark'` or `'light'`
- Persists across page reloads
- Cleared when browser data is cleared

---

## Quick Start

1. **Clone/Download** the repository
2. **Open** `index.html` in a browser
3. **Edit** content in `index.html`
4. **Customize** colors in `css/variables.css`
5. **Add** your project images to `images/` folder
6. **Test** responsiveness by resizing browser window

---

## Future Improvements

### Suggested Fixes:
1. ✅ **Remove duplicate intro.css** - Causes maintenance issues
2. ✅ **Use CSS variables consistently** - Some components use hard-coded values
3. Consider **removing jQuery** - Modern vanilla JS is sufficient
4. Add **loading animations** for images
5. Implement **lazy loading** for images
6. Add **meta tags** for SEO and social sharing
7. Consider **accessibility improvements** (ARIA labels, keyboard navigation)

---

## Support

For issues or questions:
- Check the code comments in each file
- Review this documentation
- Inspect browser DevTools for CSS issues
- Check console for JavaScript errors

---

**Last Updated:** January 2026
**Author:** Gabriel Coelho
**License:** Personal Portfolio
