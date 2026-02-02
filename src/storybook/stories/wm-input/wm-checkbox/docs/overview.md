# Overview

A **Checkbox** component is a specific type of two-states button that can be either checked or unchecked. Checkboxes let a user select an option. Examples: "I agree to terms and conditions" etc. checked and unchecked options.

### Markup

```javascript
  <wm-checkbox
    caption="Label"
    class="col-md-push-3 col-md-9"
    name="checkbox"
></wm-checkbox>
```

### Examples

#### Properties

- Sets the checkbox’s data value to true.

```javascript
Page.Widgets.checkbox.datavalue = true;
```

#### Events

- Triggered when the checkbox value changes.

```javascript
Page.checkboxChange = function ($event, widget, newVal, oldVal) {
     // Perform actions based on the checkbox state
    if (newVal === true) {
        // Execute logic when the checkbox is checked
        console.log("Checkbox is checked");
    } else {
        // Execute logic when the checkbox is unchecked
        console.log("Checkbox is unchecked");
    }
};
```