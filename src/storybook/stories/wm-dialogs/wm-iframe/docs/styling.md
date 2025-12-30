# Styling

The iframe-dialog component uses a combination of built-in styles and can be customized using CSS classes. 

## CSS Classes

| Class | Description |
|-------|-------------|
| `.app-iframe-dialog` | Main container class for the dialog component. |
| `.app-iframe-dialog-header` | Styles the header section of the dialog. |
| `.app-iframe-dialog-title` | Applies to the title element within the header. |
| `.app-iframe-dialog-content` | Container for the iframe content. |
| `.app-iframe-dialog-actions` | Styles the action buttons area at the bottom of the dialog. |
| `.app-iframe-dialog-close` | Applies to the close button. |

## Custom Styling Example

```css
/* Increase the width of the dialog */
.app-iframe-dialog {
  max-width: 800px;
  width: 90vw;
}

/* Style the header with a gradient background */
.app-iframe-dialog-header {
  background: linear-gradient(to right, #4a90e2, #63b3ed);
  color: white;
}

/* Customize the action buttons */
.app-iframe-dialog-actions button {
  border-radius: 20px;
  padding: 8px 24px;
}
```

## Responsive Behavior

The iframe-dialog component is designed to be responsive, adapting to different screen sizes. On smaller screens, the dialog typically takes up more of the available space to ensure content remains accessible.

For the best experience across devices, consider the following:

- Test your embedded content on various screen sizes
- Ensure the embedded URL is responsive or mobile-friendly
- Set reasonable height constraints to prevent excessive scrolling