# Methods

To interact with the Alert Dialog component programmatically, you can access it through the Page.Widgets namespace:

```javascript
var alertDialog = Page.Widgets.myAlertDialog;
```

This component does not expose specific methods beyond the standard widget methods inherited from BaseProps. The primary interaction with this component is through its properties and events.

## Common Programmatic Usage

### Showing the Alert Dialog

```javascript
// Configure and show the alert dialog
function showErrorAlert(errorMessage) {
    var alertDialog = Page.Widgets.myAlertDialog;
    alertDialog.title = "Error";
    alertDialog.text = errorMessage;
    alertDialog.alerttype = "error";
    alertDialog.show();
}
```

### Hiding the Alert Dialog

```javascript
// Programmatically dismiss the alert dialog
Page.Widgets.myAlertDialog.hide();
```