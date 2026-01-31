# Overview

The **Message** component helps to display a custom message on the page. Based on the message type - error, warning, success, info, loading- the message look and feel changes.

### Markup

```javascript
<wm-message type="success" class="app-message alert-success" caption="Your profile has been updated successfully" name="message" variant="filled:success"></wm-message>
```

### Use Cases

- Displaying a success message when a user successfully submits a form: "Your profile has been updated successfully" with a green check icon.
- Providing info messages for guidance: "Your session will expire in 5 minutes" with a blue info icon.
- Indicating loading state during asynchronous operations: "Uploading files..." with a spinner icon.