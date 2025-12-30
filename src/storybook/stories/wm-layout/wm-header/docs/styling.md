# Styling

The Header component does not have specific style properties defined in the provided component data. However, as a layout component, it can be styled using CSS classes and custom styling approaches.

## Common CSS Classes

While specific classes aren't defined in the component data, here are common styling patterns for header components:

- `.header` - The main container class
- `.header-fixed` - For fixed position headers
- `.header-transparent` - For transparent background headers
- `.header-compact` - For smaller, compact header variants

## Styling Examples

```css
/* Basic header styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header {
    padding: 0 16px;
    height: 56px;
  }
}

/* Header sections */
.header .left-section {
  display: flex;
  align-items: center;
}

.header .right-section {
  display: flex;
  align-items: center;
  gap: 16px;
}
```

## Sticky Header Implementation

```css
.header-sticky {
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

/* Compact version that appears on scroll */
.header-sticky.compact {
  height: 48px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
```