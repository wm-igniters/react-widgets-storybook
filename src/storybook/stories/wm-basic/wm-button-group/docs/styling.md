# Styling

The Button Group component can be styled using CSS classes. The component uses standard CSS classes that can be overridden to customize appearance.

### CSS Classes

- `.app-button-group` - Applied to the main container of the button group
- `.btn-group` - Standard Bootstrap class applied to horizontally arranged button groups
- `.btn-group-vertical` - Applied when the vertical property is true

### Child Component Styling

Individual buttons within the group can be styled using button-specific classes. Refer to the Button component documentation for details on styling individual buttons.

### Example CSS Customization

```css
/* Custom styling for a specific button group */
.app-button-group.MyCustomGroup {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 5px;
}

/* Styling buttons within a specific group */
.app-button-group.MyCustomGroup .btn {
  margin: 2px;
  min-width: 100px;
}
```