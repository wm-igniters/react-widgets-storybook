# Methods

Wizard methods can be accessed using `Page.Widgets.wizardName` in JavaScript. While the Wizard component doesn't expose specific documented methods, you can programmatically interact with it through its properties.

## Common Property Manipulations

| Property Manipulation | Description |
|----------------------|-------------|
| `setProperty('defaultstepindex', value)` | Programmatically set the current step index |
| `setProperty('disablenext', value)` | Enable or disable the Next button |
| `setProperty('disableprevious', value)` | Enable or disable the Previous button |
| `setProperty('disabledone', value)` | Enable or disable the Done button |
| `setProperty('show', value)` | Show or hide the wizard |

### Usage Examples

#### Programmatically Navigate to a Specific Step
```javascript
// Navigate to the third step
Page.Widgets.myWizard.setProperty('defaultstepindex', 2);
```

#### Disable Navigation Based on Conditions
```javascript
// Disable the Next button when a condition is met
Page.validateCurrentStep = function() {
    var data = Page.Widgets.formWidget.datavalue;
    if (!data.required_field) {
        Page.Widgets.myWizard.setProperty('disablenext', true);
    } else {
        Page.Widgets.myWizard.setProperty('disablenext', false);
    }
};
```

#### Show/Hide the Wizard
```javascript
// Hide the wizard when a condition is met
Page.completeProcess = function() {
    Page.Widgets.myWizard.setProperty('show', false);
    Page.Widgets.completionMessage.setProperty('show', true);
};
```