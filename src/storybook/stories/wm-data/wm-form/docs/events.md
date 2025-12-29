# Callback Events

## Form Lifecycle Events

| Event | Description |
|-------|-------------|
| `onBeforeRender(metadata, widget)` | Triggered before the form renders, allowing modification of form field metadata. Returns the possibly modified metadata array. |
| `onBeforeSubmit(event, widget, data)` | Triggered just before form submission. Return false, a string, or an object to prevent submission. Can also return a Promise for async validation. |
| `onSubmit(event, widget, data)` | Triggered when form is submitted, after passing validation. |
| `formSubmit(event, widget, data, operation)` | Alternative submission handler with optional operation parameter. |
| `onSuccess(event, widget, data)` | Triggered when form submission completes successfully. |
| `onError(event, widget, error)` | Triggered when form submission results in an error. |
| `onReset()` | Triggered when the form is reset to initial state. |

## Data Change Events

| Event | Description |
|-------|-------------|
| `onChange(event, widget, data)` | Triggered when any form value changes. |
| `onFormChange(formData)` | Triggered with complete form data when any value changes. |
| `onFieldChange(fieldName, value)` | Triggered when a specific field's value changes. |
| `onChangeHandler(key, field)` | Internal handler for field change events. |
| `onBlur(e)` | Triggered when a form field loses focus. |

## Validation Events

| Event | Description |
|-------|-------------|
| `onValidation(errors)` | Triggered when form validation completes, providing any validation errors. |