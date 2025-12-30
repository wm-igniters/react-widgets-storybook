# Callback Events

| Event | Description |
|-------|-------------|
| onSubmit(event, widget) | Triggered when the user submits the login form by clicking the login button or pressing Enter. This is typically used to handle the authentication process. |
| onOpened(event, widget) | Triggered after the login dialog has been opened and is visible to the user. Useful for initialization tasks or focus management. |
| onClose(event, widget) | Triggered when the dialog is closed, either by clicking the cancel button, clicking outside the dialog, or pressing Escape. |
| onSuccess(event, widget) | Triggered when authentication is successful. Typically used to navigate to a new page or update the UI. |
| onError(event, widget) | Triggered when authentication fails. Can be used to display custom error messages or perform additional actions on failure. |

## Event Handling Examples

### Handling Login Success
```javascript
Page.onLoginSuccess = function(event, widget) {
    // Navigate to dashboard after successful login
    App.Navigate.goToPage('Dashboard');
    
    // Or update application state
    App.Variables.isLoggedIn.dataValue = true;
};
```

### Handling Login Errors
```javascript
Page.onLoginError = function(event, widget) {
    // Log the error
    console.log('Login failed');
    
    // Update custom error message
    Page.Widgets.loginDialog.errormessage = 'Invalid credentials. Please try again.';
    
    // Reset password field
    Page.Widgets.passwordInput.datavalue = '';
};
```