# Callback Events

| Event | Description |
|-------|-------------|
| onOk | Triggered when the user clicks the OK/confirmation button. This event can be used to perform actions after the user acknowledges the alert. |
| onOkClick | Alternative event handler for the OK button click. Functions identically to onOk. Use either onOk or onOkClick based on your application's convention. |

## Event Usage Examples

### Handling Alert Confirmation
```javascript
// Define what happens when the user confirms the alert
Page.onMyAlertDialogOk = function() {
    // Perform actions after user acknowledges the alert
    console.log("User acknowledged the alert");
    
    // Example: Continue with a process after warning
    if (Page.Widgets.myAlertDialog.alerttype === "warning") {
        proceedWithDeletion();
    }
};
```