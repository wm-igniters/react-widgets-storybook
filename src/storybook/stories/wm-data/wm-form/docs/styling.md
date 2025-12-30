# Styling

The Form component can be styled using a combination of built-in props and custom CSS classes.

## Style Properties

| Property | Description |
|----------|-------------|
| `className` | Custom CSS class to apply to the form container |
| `captionposition` | Controls label position ("top", "left", "right", etc.) |
| `captionalign` | Controls text alignment of labels ("left", "center", "right") |
| `captionwidth` | Controls width of the label area when using horizontal layout |
| `iconclass` | CSS class for an optional icon displayed with the form title |

## CSS Classes

While specific CSS classes aren't enumerated in the component data, forms typically use the following class structure:

| CSS Class | Description |
|-----------|-------------|
| `.form-container` | Main wrapper for the entire form |
| `.form-title` | Styling for the form title |
| `.form-subheading` | Styling for the form subheading text |
| `.form-horizontal` | Applied when form is in horizontal layout mode |
| `.form-vertical` | Applied when form is in vertical layout mode |
| `.form-group` | Container for each form field group |
| `.form-label` | Styling for field labels |
| `.form-control` | Styling for input controls |
| `.form-error` | Styling for error messages |
| `.form-collapsible` | Applied to collapsible form sections |
| `.form-collapsed` | Applied when a collapsible form is collapsed |
| `.form-expanded` | Applied when a collapsible form is expanded |
| `.form-actions` | Container for form action buttons (submit, cancel, etc.) |

## Custom Styling

To apply custom styling to a form:

1. Assign a unique class name using the `className` property
2. Target the form and its elements in your CSS

Example:

```css
/* Custom styling for a user registration form */
.registration-form .form-title {
  color: #2c5282;
  font-size: 1.5rem;
}

.registration-form .form-group {
  margin-bottom: 1.5rem;
}

.registration-form .form-label {
  font-weight: bold;
  color: #4a5568;
}

.registration-form .form-control {
  border-radius: 0.5rem;
  border-color: #e2e8f0;
}

.registration-form .form-control:focus {
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
```

## Responsive Considerations

For responsive forms, consider the following styling approaches:

- Use the `noOfColumns` property to control column count
- Switch between horizontal and vertical layouts based on screen size
- Use CSS media queries to adjust caption width and positioning on smaller screens