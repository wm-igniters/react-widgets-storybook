# Methods

The page-dialog component can be accessed in scripts via `Page.Widgets.widgetName` where `widgetName` is the name you've given to your dialog instance.

No specific methods are documented for this component. However, it likely inherits standard dialog methods such as `show()`, `hide()`, and possibly others from its parent implementations.

### Common Method Use Cases

```javascript
// Show the dialog
Page.Widgets.myPageDialog.show();

// Hide the dialog
Page.Widgets.myPageDialog.hide();

// Example of updating content and showing dialog
function showUserDetails(userId) {
  // Update content based on user ID
  Page.Widgets.myPageDialog.content = generateUserDetailsHTML(userId);
  // Display the dialog
  Page.Widgets.myPageDialog.show();
}
```