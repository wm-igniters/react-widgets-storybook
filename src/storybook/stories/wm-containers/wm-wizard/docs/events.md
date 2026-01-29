# Callback Events

## Wizard Events

| Event | Description |
|-------|-------------|
| `onDone` | Triggered when the Done button is clicked on the final step. Receives the current step data and all steps data. |
| `onCancel` | Triggered when the Cancel button is clicked. Receives the current step data and all steps data. |
| `onStepClick` | Triggered when a step header is clicked. Receives the index of the clicked step. |

## Wizard Step Events

| Event | Description |
|-------|-------------|
| `onLoad` | Triggered when a step is loaded and becomes active. Receives the step data and step index. |
| `onNext` | Triggered when the Next button is clicked. Receives the widget reference, current step data, and step index. Return boolean or Promise<boolean> to control navigation. |
| `onPrev` | Triggered when the Previous button is clicked. Receives the widget reference, current step data, and step index. Return boolean or Promise<boolean> to control navigation. |
| `onSkip` | Triggered when the Skip link is clicked. Receives the widget reference, current step data, and step index. Return boolean or Promise<boolean> to control navigation. |

### Event Usage Examples

#### Handling Step Completion
```javascript
Page.wizard1Done = function(currentStep, steps) {
    // Perform action when the wizard is completed
    var liveData = Page.Widgets.liveform2.dataset.data;
    var profileData = liveData[liveData.length - 1];
    var userName = profileData.personByPerson.userName;
    
    // Update data via service variable
    Page.Variables.UpdateRegistered.setInput('uid', userName);
    Page.Variables.UpdateRegistered.update();
    
    // Show success message
    DialogService.open('alertdialog1', Page, {
        'mode': 'edit',
        'showInUserMode': true
    });
};
```

#### Custom Validation Before Moving to Next Step
```javascript
Page.step1Next = function(widget, currentStep, stepIndex) {
    // Validate form before proceeding to next step
    var form = Page.Widgets.liveform1;
    if (form.formWidgets.email.datavalue && 
        form.formWidgets.username.datavalue) {
        return true; // Allow navigation to next step
    } else {
        app.notify.error("Please complete all required fields");
        return false; // Prevent navigation to next step
    }
};
```

#### Loading Data for a Step
```javascript
Page.step2Load = function(step, stepIndex) {
    // Load related data when entering the step
    var personId = Page.Widgets.liveform1.dataoutput.personId;
    Page.Variables.ProfileData.setInput('personId', personId);
    Page.Variables.ProfileData.update();
};
```