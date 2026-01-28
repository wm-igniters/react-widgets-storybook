# Props

## Basic Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | - | Unique identifier for the wizard |
| `className` | string | - | Additional CSS class names for styling |
| `show` | boolean | true | Controls visibility of the wizard |
| `type` | "static" \| "dynamic" | "static" | Defines if the wizard has static or dynamic steps |
| `title` | string | - | Main title for the wizard |
| `subtitle` | string | - | Subtitle displayed under the main title |
| `width` | string \| number | - | Width of the wizard container |
| `height` | string \| number | - | Height of the wizard container |

## Step Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `stepstyle` | "auto" \| "justified" | "auto" | Sets the width style for steps - auto sizes to content, justified distributes evenly |
| `defaultstep` | string | - | Name of the step that should be active by default |
| `defaultstepindex` | number | 0 | Index of the step that should be active by default |
| `stepClass` | string | - | Additional CSS class for styling steps |
| `orientation` | "horizontal" \| "vertical" | "horizontal" | Direction in which steps are laid out |
| `alternativeLabel` | boolean | false | Places labels below the step icons when true |
| `nonLinear` | boolean | false | Allows accessing steps in any order when true |
| `connector` | ReactNode | - | Custom connector component between steps |
| `headernavigation` | boolean | true | Enables/disables navigation through step headers |

## Navigation Button Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `cancelable` | boolean | true | Shows/hides the cancel button |
| `enablenext` | boolean | true | Enables/disables the next button for all steps |
| `nextbtnlabel` | string | "Next" | Text displayed on the next button |
| `previousbtnlabel` | string | "Previous" | Text displayed on the previous button |
| `donebtnlabel` | string | "Done" | Text displayed on the done button |
| `cancelbtnlabel` | string | "Cancel" | Text displayed on the cancel button |
| `actionsalignment` | "left" \| "center" \| "right" | "right" | Horizontal alignment of action buttons |
| `disablenext` | boolean | false | Disables the next button for the current step |
| `disabledone` | boolean | false | Disables the done button |
| `disableprevious` | boolean | false | Disables the previous button |
| `enableskip` | boolean | false | Shows/hides the skip option for the current step |

## Dynamic Wizard Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any[] | - | Data collection used for dynamic wizard generation |
| `fieldDefs` | any[] | - | Field definitions for dynamic wizard steps |
| `nodatamessage` | string | "No Data Found" | Message displayed when no data is available |
| `render` | function | - | Custom render function for dynamic wizard items |
| `dynamicStepIndex` | number | - | Current step index for dynamic wizard |
| `isdynamic` | boolean | false | Indicates if the wizard is in dynamic mode |

## Other Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | - | CSS class for step icons |
| `doneiconclass` | string | - | CSS class for done step icon |
| `message` | { caption: string; type: string } | - | Message to display within the wizard |
| `content` | ReactNode | - | Content to display in the wizard |
| `haveForm` | boolean | false | Indicates if the wizard contains form elements |

### Common Use Cases

#### Set Custom Button Labels
```javascript
// Customize button labels
Page.Widgets.myWizard.nextbtnlabel = "Continue";
Page.Widgets.myWizard.previousbtnlabel = "Go Back";
Page.Widgets.myWizard.donebtnlabel = "Complete";
Page.Widgets.myWizard.cancelbtnlabel = "Exit";
```

#### Control Navigation Based on Validation
```javascript
// Disable the Done button until validation passes
Page.employedBlur = function($event, widget) {
    var employed = Page.Widgets.employed.datavalue;
    if (employed === "No") {
        Page.Widgets.wizardstep2.enabledone = true;
    } else {
        Page.Widgets.wizardstep2.enabledone = false;
    }
};
```

#### Set Default Starting Step
```javascript
// Start wizard at the third step
Page.Widgets.myWizard.defaultstepindex = 2;
```

#### Disable Header Navigation
```javascript
// Prevent clicking on step headers for navigation
Page.Widgets.myWizard.headernavigation = false;
```