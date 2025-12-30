# Callback Events

The live-form component does not expose any specific callback events according to the provided data. However, as a form container, it typically works in conjunction with the following standard form events that may be available through the platform:

| Event | Description |
|-------|-------------|
| `onSubmit` | Triggered when the form is submitted. |
| `onReset` | Triggered when the form is reset. |
| `onChange` | Triggered when any form field value changes. |
| `onBeforeSubmit` | Triggered before form submission, allowing for validation. |
| `onSuccess` | Triggered after a successful form submission. |
| `onError` | Triggered when an error occurs during form submission. |

Please refer to the platform documentation for the specific events that are supported for the live-form component in your implementation context.