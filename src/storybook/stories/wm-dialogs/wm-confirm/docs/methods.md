# Methods

The confirm-dialog component can be accessed programmatically through the page scope using the syntax `Page.Widgets.[widgetName]`, where `[widgetName]` is the name assigned to the component in your page.

Unlike some components, the confirm-dialog doesn't expose specific methods beyond setting its properties. You would typically control its behavior through the props and events:

```javascript
// Open the dialog
Page.Widgets.myConfirmDialog.isopen = true;

// Set dialog content dynamically
Page.Widgets.myConfirmDialog.title = "Confirm Update";
Page.Widgets.myConfirmDialog.message = "Update all " + records.length + " records?";

// Change button text based on context
Page.Widgets.myConfirmDialog.oktext = "Yes, Update All";
```

While not methods in the strict sense, these property assignments are the primary way to interact with the confirm dialog programmatically.