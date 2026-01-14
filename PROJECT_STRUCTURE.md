# Portfolio Project Structure

This portfolio website has been organized for better maintainability, scalability, and performance.

## Directory Structure

```
portfolio.github.io/
├── index.html                     # Main HTML file
├── css/
│   ├── main.css                  # Core base styles (reset, body, sections)
│   ├── layout/
│   │   ├── intro.css            # Hero/intro section styles
│   │   └── typography.css       # Typography improvements & hierarchy
│   └── components/
│       ├── scroll-indicator.css # Scroll arrow animation
│       ├── projects.css         # Featured & other projects (grid layout)
│       ├── theme-toggle.css     # Dark/light mode toggle button
│       └── micro-interactions.css # Hover effects, animations, transitions
├── js/
│   └── components/
│       ├── scroll-to-top.js     # Back to top button functionality
│       ├── scroll-effects.js    # ScrollReveal animations
│       ├── project-toggle.js    # Collapsible projects functionality
│       └── theme-toggle.js      # Dark/light mode switcher with localStorage
├── images/                       # Project banners and assets
├── assets/                       # Favicon and other static assets
├── RECOMMENDATIONS.md            # Future improvement suggestions
└── PROJECT_STRUCTURE.md          # This file
```

## Recent Improvements (January 2026)

### Layout Enhancements
- **Wider content area**: Increased max-width to 1600px for better use of screen space
- **Left-aligned sections**: Content starts more from the left for a modern look
- **Responsive breakpoints**: Optimized for 1440px, 1280px, 1024px, 768px, and 480px

### Typography
- **Enhanced hierarchy**: Better font sizes and spacing between headings
- **Improved readability**: Increased line-height (1.8) for paragraphs
- **Section title accents**: Red underline decoration for visual interest
- **Better text rendering**: Antialiasing and optimization for clarity

### Micro-Interactions
- **Smooth hover effects**: Links, buttons, and cards have subtle animations
- **Image zoom**: Project images scale on hover
- **Tag animations**: Skill/genre tags have background fill effect
- **Focus states**: Accessible keyboard navigation with visible focus
- **Reduced motion support**: Respects user preference for less animation

### Dark/Light Mode
- **Toggle button**: Fixed position (top-right) with sun/moon icons
- **Theme persistence**: Saves preference to localStorage
- **Smooth transitions**: 0.3s ease for all color changes
- **Light mode colors**: High contrast white background with dark text
- **Dark mode colors**: Original dark theme with improved readability

### About Section
- **Comprehensive introduction**: 4 paragraphs about background and passion
- **Personal touch**: Describes journey, approach, and interests
- **Strategic placement**: Between intro and skills for better flow

### Projects Organization
- **Side-by-side layout**: Featured projects (left 2/3) and Other projects (right 1/3)
- **Sticky sidebar**: Other projects scroll independently on desktop
- **Custom scrollbar**: Themed scrollbar for other projects list
- **Responsive**: Stacks vertically on tablets and mobile

## File Organization Strategy

### CSS Architecture
Files are organized by **purpose and scope**:

1. **Base/Core** (`main.css`): Global styles, resets, shared patterns
2. **Layout** (`css/layout/`): Page structure and major sections
3. **Components** (`css/components/`): Reusable UI elements and widgets

### JavaScript Architecture
Each component has **single responsibility**:

- **scroll-to-top.js**: Top button visibility and smooth scroll
- **scroll-effects.js**: ScrollReveal configuration
- **project-toggle.js**: Accordion functionality
- **theme-toggle.js**: Color scheme management

### Benefits of This Structure

✅ **Maintainable**: Easy to find and modify specific features
✅ **Scalable**: Add new components without cluttering existing files
✅ **Performance**: Can selectively load only needed styles/scripts
✅ **Collaborative**: Multiple developers can work without conflicts
✅ **Debuggable**: Issues are isolated to specific component files

## Key Features

### Visual Design
- Modern dark theme with light mode option
- Smooth animations and transitions throughout
- Responsive images with hover effects
- Custom scrollbars matching theme
- Accessible focus states

### Interactive Elements
- Collapsible project details
- Sticky navigation for other projects
- Animated scroll indicator
- Theme toggle with icon transitions
- Smooth page reveals

### Performance
- Modular CSS loading
- Deferred script execution
- ScrollReveal for progressive disclosure
- Optimized animations with cubic-bezier easing
- Reduced motion media query support

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Semantic HTML5 structure
- Alt text on all images

## Development Guidelines

### Adding New Features

1. **New CSS Component**:
   ```bash
   Create: css/components/feature-name.css
   Link in: index.html <head>
   ```

2. **New Layout Section**:
   ```bash
   Create: css/layout/section-name.css
   Link in: index.html <head>
   ```

3. **New JavaScript Module**:
   ```bash
   Create: js/components/feature-name.js
   Link in: index.html before </body>
   ```

### Code Style

- **CSS**: Mobile-first, BEM-like naming, grouped by component
- **JavaScript**: jQuery for consistency, functional approach
- **HTML**: Semantic tags, ARIA attributes, progressive enhancement

### Testing Checklist

- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Responsive on mobile, tablet, desktop
- [ ] Keyboard navigation functional
- [ ] Dark and light modes both work
- [ ] No console errors
- [ ] Images load correctly
- [ ] Animations are smooth (60fps)
- [ ] Links open correctly

## Performance Metrics

- **CSS files**: 7 files (~15KB total uncompressed)
- **JS files**: 4 custom files (~5KB total)
- **External deps**: jQuery, ScrollReveal, Font Awesome
- **Page load**: Fast (static files only)
- **First Contentful Paint**: <1s on decent connection

## Future Optimization Opportunities

1. **Minification**: Combine and minify CSS/JS for production
2. **Image Optimization**: Use WebP format, lazy loading
3. **Critical CSS**: Inline above-the-fold styles
4. **Service Worker**: Enable offline support (PWA)
5. **Bundle Analysis**: Identify and remove unused code

## Browser Support

- **Chrome**: ✅ Latest + last 2 versions
- **Firefox**: ✅ Latest + last 2 versions
- **Safari**: ✅ Latest + last 2 versions
- **Edge**: ✅ Latest + last 2 versions
- **Mobile Safari**: ✅ iOS 12+
- **Chrome Mobile**: ✅ Android 8+

---

**Last Updated**: January 2026
**Version**: 2.0
**Maintainer**: Gabriel Coelho
