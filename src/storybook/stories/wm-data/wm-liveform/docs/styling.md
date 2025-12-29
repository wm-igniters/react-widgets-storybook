# Styling

The live-form component can be styled using CSS to match your application's design requirements. While specific CSS classes are not provided in the component data, here are common styling approaches for form components:

## Common CSS Classes

| CSS Class | Description |
|-----------|-------------|
| `.live-form` | The main container class for the live-form component. |
| `.live-form-header` | Styles the header section containing the title and icon. |
| `.live-form-title` | Styles the main form title text. |
| `.live-form-subheading` | Styles the subheading text below the title. |
| `.live-form-body` | Styles the main content area containing the form fields. |
| `.live-form-actions` | Styles the container for form action buttons. |
| `.live-form-error` | Styles the error message display area. |
| `.live-form-field-container` | Styles the container for individual form fields. |
| `.live-form-field-caption` | Styles the field captions/labels. |
| `.live-form-collapsible-header` | Styles the header for collapsible forms. |

## Example Styling

```css
/* Custom styling for a live form */
.app-live-form.live-form {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.app-live-form .live-form-title {
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.app-live-form .live-form-subheading {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.app-live-form .live-form-field-caption {
  font-weight: 500;
  color: #34495e;
}

.app-live-form .live-form-error {
  background-color: #ffecec;
  border-left: 4px solid #e74c3c;
  color: #e74c3c;
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 4px;
}
```

## Responsive Layout Considerations

For responsive forms, consider these styling approaches:

- Use flexbox or grid layouts for field organization
- Implement media queries to adjust captionposition based on screen size
- Reduce padding and margins on mobile devices
- Stack fields vertically on small screens
- Adjust input field widths with percentage-based or responsive units

Consult your platform's specific documentation for any pre-defined CSS variables or theming capabilities that may be available for the live-form component.