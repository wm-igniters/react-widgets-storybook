# Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **Basic Configuration** ||||
| name | string | "loginDialog" | Unique identifier for the login dialog component |
| title | string | "Login" | Text displayed in the dialog header |
| iconclass | string | "wm-icon wm-icon-lock" | CSS class for the icon displayed in the dialog header |
| logintext | string | "Login" | Text displayed on the submit/login button |
| canceltext | string | "Cancel" | Text displayed on the cancel button |
| **Content** ||||
| errormessage | string | "" | Error message to display when login fails |
| **Data & Events** ||||
| eventsource | IEventSource | null | Event source for the dialog component |
| onSubmit | function | null | Callback function triggered when the login form is submitted |
| onOpened | function | null | Callback function triggered when the dialog is opened |
| onClose | function | null | Callback function triggered when the dialog is closed |
| onSuccess | function | null | Callback function triggered when login is successful |
| onError | function | null | Callback function triggered when login fails |

## Common Use Cases

### Basic Login Dialog Configuration
```javascript
// Configure a basic login dialog
Page.Widgets.loginDialog.title = "Account Access";
Page.Widgets.loginDialog.logintext = "Sign In";
Page.Widgets.loginDialog.canceltext = "Back";
```

### Setting Error Messages Dynamically
```javascript
// Display a custom error message
Page.Widgets.loginDialog.errormessage = "Invalid username or password. Please try again.";
```

### Customizing the Dialog Icon
```javascript
// Change the dialog icon
Page.Widgets.loginDialog.iconclass = "fa fa-user-circle";
```