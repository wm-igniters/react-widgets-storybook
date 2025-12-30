# Methods

The login-dialog component can be accessed in scripts through `Page.Widgets.{widgetName}`, where `{widgetName}` is the value of the name property you assigned to your instance of the component.

While the login-dialog component doesn't expose specific methods beyond those inherited from its base class, you can programmatically interact with it using the following patterns:

## Common Usage Patterns

### Opening the Login Dialog
```javascript
// Programmatically open the login dialog
Page.Widgets.loginDialog.open();
```

### Closing the Login Dialog
```javascript
// Programmatically close the login dialog
Page.Widgets.loginDialog.close();
```

### Reset Error State
```javascript
// Clear any error messages
Page.Widgets.loginDialog.errormessage = "";
```

### Programmatic Form Submission
```javascript
// Submit the login form programmatically
// Note: This would typically be handled by the dialog's internal submit button
Page.Widgets.loginDialog.submit();
```