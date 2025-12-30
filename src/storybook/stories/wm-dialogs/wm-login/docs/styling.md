# Styling

The login-dialog component uses standard dialog styling with additional classes specific to the login functionality. You can customize its appearance using CSS.

## Component-Specific Classes

| CSS Class | Purpose |
|-----------|----------|
| `.app-login-dialog` | Main container class for the login dialog |
| `.app-login-dialog-header` | Styles the dialog header section |
| `.app-login-dialog-title` | Styles the dialog title text |
| `.app-login-dialog-icon` | Styles the icon in the dialog header |
| `.app-login-dialog-body` | Styles the main content area containing the login form |
| `.app-login-dialog-error` | Styles the error message container |
| `.app-login-dialog-footer` | Styles the footer area containing action buttons |
| `.app-login-dialog-btn-login` | Styles the login/submit button |
| `.app-login-dialog-btn-cancel` | Styles the cancel button |

## Custom Styling Examples

### Customizing Dialog Size
```css
.app-login-dialog .modal-dialog {
    max-width: 400px;
}
```

### Styling the Login Button
```css
.app-login-dialog-btn-login {
    background-color: #4CAF50;
    color: white;
    font-weight: bold;
}
```

### Styling Error Messages
```css
.app-login-dialog-error {
    color: #f44336;
    font-size: 0.9em;
    margin-bottom: 15px;
}
```

### Customizing the Dialog Header
```css
.app-login-dialog-header {
    background-color: #3f51b5;
    color: white;
}
```