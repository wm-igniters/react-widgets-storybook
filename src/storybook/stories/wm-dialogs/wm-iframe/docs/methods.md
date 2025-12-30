# Methods

The iframe-dialog component can be accessed in scripts via the Page.Widgets object, e.g., `Page.Widgets.iframeDialogName`. 

This component does not expose any specific methods beyond the standard property getters and setters. The primary way to interact with the component is through its props and events.

## Common Operations

```javascript
// Open the dialog
Page.Widgets.iframeDialog.open = true;

// Close the dialog programmatically
Page.Widgets.iframeDialog.open = false;

// Change the URL dynamically
Page.Widgets.iframeDialog.url = "https://new-url.example.com";

// Toggle modal behavior
Page.Widgets.iframeDialog.modal = !Page.Widgets.iframeDialog.modal;

// Update the dialog title
Page.Widgets.iframeDialog.title = "Updated Title";
```