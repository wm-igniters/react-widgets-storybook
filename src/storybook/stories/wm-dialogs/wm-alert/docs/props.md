# Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **Basic Configuration** |
| name | string | — | Unique identifier for the alert dialog component |
| title | string | "Alert" | The title text displayed in the header of the alert dialog |
| text | string | — | The main message content displayed in the body of the alert dialog |
| oktext | string | "OK" | The text displayed on the confirmation button |
| **Appearance** |
| alerttype | string | "info" | Determines the visual style of the alert dialog. Possible values: "error", "warning", "success", "info" |
| iconclass | string | — | Custom CSS class for the icon displayed in the alert dialog. If not specified, a default icon based on alerttype will be used |

## Common Use Cases

### Basic Alert Dialog
```javascript
// Configure a simple information alert
Page.Widgets.myAlertDialog.title = "Information";
Page.Widgets.myAlertDialog.text = "Your profile has been updated successfully.";
Page.Widgets.myAlertDialog.alerttype = "info";
```

### Error Alert Dialog
```javascript
// Configure an error alert
Page.Widgets.myAlertDialog.title = "Error";
Page.Widgets.myAlertDialog.text = "Failed to save changes. Please try again.";
Page.Widgets.myAlertDialog.alerttype = "error";
Page.Widgets.myAlertDialog.oktext = "Dismiss";
```

### Custom Icon Alert
```javascript
// Configure an alert with a custom icon
Page.Widgets.myAlertDialog.title = "Warning";
Page.Widgets.myAlertDialog.text = "This action cannot be undone.";
Page.Widgets.myAlertDialog.alerttype = "warning";
Page.Widgets.myAlertDialog.iconclass = "fa fa-exclamation-triangle";
```