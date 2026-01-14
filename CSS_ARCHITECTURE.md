# CSS Architecture Documentation

## Overview

This portfolio uses a modular, variable-based CSS architecture for better maintainability and scalability.

## File Structure

```
css/
├── fonts.css                  # All @font-face declarations
├── variables.css              # All CSS custom properties (colors, spacing, typography, images)
├── base.css                   # Global resets and utilities
├── layout/
│   ├── layout.css            # Core layout system (sections, intro, grid)
│   └── typography.css         # Typography enhancements
└── components/
    ├── projects.css          # Project cards and categories
    ├── skills.css            # Skills section
    ├── experience.css        # Experience section and status component
    ├── footer.css            # Footer component
    ├── buttons.css           # Buttons and interactive links
    ├── scroll-indicator.css  # Scroll arrow
    ├── theme-toggle.css      # Dark/light mode toggle
    └── micro-interactions.css # Hover effects and animations
```

## Architecture Principles

### 1. **CSS Variables First**
All design tokens (colors, spacing, typography) are defined in `variables.css` using CSS custom properties.

**Benefits:**
- Single source of truth for design values
- Easy theme customization
- Consistent spacing and sizing across components
- Quick global updates

### 2. **Separation of Concerns**

#### **fonts.css**
- All @font-face declarations
- Raleway font family (Light, Regular, Medium, Bold)
- Inconsolata monospace font
- Legacy BitPotion font

#### **variables.css**
- Colors (dark/light themes)
- Layout spacing and widths
- Typography scales
- Effects (transitions, shadows, border-radius)
- Z-index layers
- Image paths and icons
- Selection colors

#### **base.css**
- Global resets (box-sizing, font-smoothing)
- Selection colors
- Universal list and strong tag styles
- Utility classes (emoji, small)

#### **layout/layout.css**
- Body and HTML base styles
- Section layout system
- Intro section structure
- Responsive breakpoints
- Grid and flexbox layouts

#### **layout/typography.css**
- Text styles and improvements
- Heading hierarchy
- Paragraph spacing

#### **components/***
- Self-contained UI components
- Component-specific styles only
- Use variables from `variables.css`
- Each component is independent and modular

### 3. **Mobile-First Responsive Design**

All layouts use mobile-first media queries:
```css
/* Mobile (default) */
.element { padding: 20px; }

/* Tablet */
@media screen and (max-width: 768px) { ... }

/* Desktop */
@media screen and (max-width: 1280px) { ... }
```

## Usage Examples

### Using CSS Variables

```css
/* Instead of hardcoded values */
.bad-example {
    padding: 100px 170px;
    color: #ac3232;
    font-size: 1.25rem;
}

/* Use variables */
.good-example {
    padding: var(--section-padding-desktop);
    color: var(--accent-primary);
    font-size: var(--font-section-title);
}
```

### Creating New Components

1. **Create component file**: `css/components/new-component.css`
2. **Use existing variables**:
   ```css
   .new-component {
       padding: var(--gap-medium);
       background: var(--bg-dark);
       border-radius: var(--radius-medium);
       transition: all var(--transition-normal) var(--transition-ease);
   }
   ```
3. **Add to HTML**: `<link rel="stylesheet" href="css/components/new-component.css">`

### Customizing Themes

Edit `variables.css` to change theme colors:

```css
:root {
    /* Change accent color globally */
    --accent-primary: #your-color;

    /* Change dark theme background */
    --bg-dark: #your-bg-color;
}
```

## Migration Status

The old `main.css` file has been **completely removed**! All styles are now properly organized into modular files.

### Migration Completed:
1. ✅ Created `fonts.css` with all @font-face declarations
2. ✅ Created `variables.css` with all design tokens and image paths
3. ✅ Created `base.css` with global resets and utilities
4. ✅ Created `layout/layout.css` with core layout system
5. ✅ Organized all components into separate CSS files
6. ✅ Removed all duplicate styles
7. ✅ **Deleted `main.css` completely**

## CSS Custom Properties Reference

### Layout Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--section-padding-desktop` | `100px 170px` | Desktop section padding |
| `--max-width-container` | `1600px` | Maximum content width |
| `--gap-large` | `100px` | Large spacing |
| `--gap-medium` | `60px` | Medium spacing |

### Typography Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--font-primary` | `Raleway, ...` | Body font |
| `--font-monospace` | `Inconsolata, monospace` | Monospace font |
| `--font-base` | `1rem` | Base font size |
| `--font-h1` | `2.5rem` | H1 heading size |
| `--weight-bold` | `700` | Bold weight |

### Color Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--accent-primary` | `#ac3232` | Primary red accent |
| `--accent-secondary` | `#fc6` | Secondary yellow accent |
| `--bg-dark` | `#19171b` | Dark theme background |
| `--text-dark` | `#afafbf` | Dark theme text |
| `--selection-bg` | `#fc6` | Text selection background |

### Image Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--icon-sun-dark` | `url(../img/switch/sun.svg)` | Sun icon for light theme |
| `--icon-moon-light` | `url(../img/switch/moon-white.svg)` | Moon icon for dark theme |
| `--status-light-color` | `#43d08a` | Status indicator LED color |

## Best Practices

### ✅ DO
- Use CSS variables for all colors, spacing, and typography
- Keep components self-contained
- Use semantic class names
- Group related styles together
- Add comments for complex sections

### ❌ DON'T
- Use hardcoded pixel values (use variables)
- Mix layout and component styles
- Duplicate responsive breakpoints
- Use `!important` (fix specificity instead)
- Create overly specific selectors

## Responsive Breakpoints

Standardized breakpoints across the site:

```css
/* Extra Small: < 330px */
/* Small: < 480px */
/* Medium: < 768px */
/* Large: < 1024px */
/* Extra Large: < 1280px */
```

## Performance Considerations

1. **CSS Load Order**: Fonts → Variables → Base → Layout → Components
2. **File Size**: Each component is <5KB for fast loading
3. **Specificity**: Low specificity for easy overrides
4. **Transitions**: Use `will-change` for animated properties
5. **Modular Loading**: Only load what you need, easy to remove unused components

## Future Improvements

- [x] Convert all `main.css` styles (COMPLETED)
- [x] Delete `main.css` file (COMPLETED)
- [ ] Add CSS utility classes system
- [ ] Create design tokens JSON for tooling
- [ ] Add CSS linting rules
- [ ] Minify and combine for production
- [ ] Add CSS custom properties fallbacks for older browsers

## Support

For questions or improvements, refer to this documentation or update it when making architectural changes.

---

**Last Updated**: January 2026
**Version**: 3.0
**Maintainer**: Gabriel Coelho
