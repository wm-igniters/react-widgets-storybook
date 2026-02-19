# Overview

The **Wizard** component is a container used to guide users through a multi-step workflow by dividing complex forms or processes into smaller steps. It provides navigation controls such as Next, Previous, Cancel, and Done, helping users complete tasks in a structured and easy-to-follow manner.

### Markup

```javascript
<wm-wizard type="static" stepstyle="justified" class="number app-wizard" name="wizard" variant="number">
    <wm-wizardstep name="wizardstepUserInfo"></wm-wizardstep>
    <wm-wizardstep name="wizardstepAccountSetUp"></wm-wizardstep>
    <wm-wizardstep name="wizardstepConfirmation"></wm-wizardstep>
    <wm-wizardaction name="wizardaction">
        <wm-anchor class="app-wizard-skip" caption="Skip »" show="bind:skippable()" on-click="skip()" name="anchor1"
            variant="standard"></wm-anchor>
        <wm-container class="app-wizard-actions-right app-container-default" name="container4" variant="default">
            <wm-button class="btn-filled btn-default" type="button" caption="bind:cancelbtnlabel()"
                show="bind:cancelable()" on-click="cancel()" name="button1" variant="filled:default">
            </wm-button>
            <wm-button class="btn-filled btn-default" type="button" iconclass="wi wi-chevron-left"
                caption="bind:previousbtnlabel()" show="bind:hasPreviousStep()" on-click="previous()"
                disabled="bind:disablePrevious()" name="button2" variant="filled:default"></wm-button>
            <wm-button class="btn-filled btn-default" type="button" iconclass="wi wi-chevron-right" iconposition="right"
                caption="bind:nextbtnlabel()" show="bind:hasNextStep()" on-click="next()" disabled="bind:disableNext()"
                name="button3" variant="filled:default">
            </wm-button>
            <wm-button class="btn-filled btn-default" type="button" iconclass="wi wi-check"
                caption="bind:donebtnlabel()" show="bind:hasNoNextStep()" on-click="done()"
                disabled="bind:disableDone()" name="button4" variant="filled:default"></wm-button>
        </wm-container>
    </wm-wizardaction>
</wm-wizard>
```

### Examples

#### Properties

- This wizard has a configurable enablenext property which determines whether the Next button is enabled. It can be set in the markup or dynamically via script to control navigation between steps.

```javascript
<wm-wizard enablenext="true"  name="wizard"></wm-wizard>
```

```javascript
// Enable the Next button to allow users to move to the next wizard step
Page.Widgets.wizard.enablenext = true;
```

- The wizard step has a configurable enableskip property which determines whether the Skip button is shown for that step. It can be set in the markup or dynamically via script to allow users to skip optional steps.

```javascript
<wm-wizardstep enableskip="true" name="wizardstepAccountSetUp"></wm-wizardstep>
```

```javascript
Page.Widgets.wizardstepAccountSetUp.enableskip = true;
```

#### Events

- This is the markup for a wizard with an on-done event, executed whenever the user completes all the steps of the wizard. It is commonly used to update variables, invoke services, or redirect the user after finishing the wizard flow.

```javascript
<wm-wizard on-done="wizardDone(widget, steps)" name="wizard"></wm-wizard>
```

```javascript
Page.wizardDone = function (widget, steps) {
  // Step 3: Confirmation – mark the user onboarding as completed

  // Update the local variable to indicate the user has finished the wizard
  Page.Variables.stvUserOnboarding.dataSet.isOnboarded = true;

  // Invoke the service to persist the completion status in the backend
  Page.Variables.svUpdateUserOnboarding.invoke();

  // Optionally, redirect the user to the dashboard or home page
  App.Actions.goToPage_Dashboard.invoke();
};
```

- This is the markup for a wizard step with an on-load event, executed when the step is loaded. It can either invoke a variable/service directly in the markup or call a handler function to perform actions.

```javascript
<wm-wizardstep on-load="Variables.svGetUserInfo.invoke()" name="wizardstepUserInfo"></wm-wizardstep>
```

```javascript
<wm-wizardstep on-load="wizardstepUserInfoLoad(widget, stepIndex)" name="wizardstepUserInfo"></wm-wizardstep>
```

```javascript
Page.wizardstepUserInfoLoad = function (widget, stepIndex) {
  // Invoke the service to fetch user information when this wizard step loads
  Page.Variables.svGetUserInfo.invoke();
};
```

#### Methods

- This method advances the wizard to the next step programmatically, allowing the application to control the step flow without requiring the user to click the Next button.

```javascript
// Move to the next wizard step programmatically
Page.Widgets.wizard.next();
```





