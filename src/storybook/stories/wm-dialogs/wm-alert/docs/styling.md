# Styling

The Alert Dialog component can be styled using custom CSS classes. The component inherits its base styling from the dialog component system, with additional styling specific to alerts.

## CSS Classes

| Class | Description |
|-------|-------------|
| .wm-app .app-alert-dialog | Main container for the alert dialog |
| .wm-app .app-alert-dialog-header | Styles the dialog header containing the title |
| .wm-app .app-alert-dialog-body | Styles the main content area of the alert |
| .wm-app .app-alert-dialog-icon | Styles the icon container |
| .wm-app .app-alert-dialog-message | Styles the text message container |
| .wm-app .app-alert-dialog-footer | Styles the footer area containing action buttons |
| .wm-app .app-alert-dialog-ok-button | Styles the OK/confirmation button |

## Alert Type Classes

Depending on the `alerttype` property, additional CSS classes are applied:

| Alert Type | Applied Class | Default Styling |
|------------|---------------|------------------|
| error | .app-alert-dialog-error | Red color scheme with error icon |
| warning | .app-alert-dialog-warning | Orange/yellow color scheme with warning icon |
| success | .app-alert-dialog-success | Green color scheme with success icon |
| info | .app-alert-dialog-info | Blue color scheme with information icon |

## Custom Styling Example

```css
/* Make error alerts more prominent */
.wm-app .app-alert-dialog-error .app-alert-dialog-header {
    background-color: #d9534f;
    color: white;
}

/* Custom styling for OK buttons */
.wm-app .app-alert-dialog-ok-button {
    font-weight: bold;
    padding: 10px 20px;
}
```