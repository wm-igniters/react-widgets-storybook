# Overview

The **Date** component allows users to select a date using an interactive date picker.

### Markup

```javascript
  <wm-date name="date" mindate="CURRENT_DATE"></wm-date>
```

### Examples

#### Properties

- Sets the maximum selectable date in the date component.

```javascript
Page.Widgets.date.maxdate = new Date();
```

#### Events

- Configures the date picker before it is rendered by disabling past dates and weekends.

```javascript
Page.dateBeforeload = function ($event, widget) {
    widget.mindate = new Date();
    widget.excludedays = "0, 6";
};
```

- Triggered when the date input loses focus.

```javascript
Page.dateBlur = function ($event, widget) {
    //Example: Can validate the entered date, display error messages
    const dobValue = widget.datavalue;
    const currentDate = new Date();

    if (dobValue) {
        const dob = new Date(dobValue); // convert to Date object

        if (dob.getTime() > currentDate.getTime()) {
            Page.Widgets.labelErrorMsg.caption = "Date of birth cannot be in the future";
            Page.Widgets.labelErrorMsg.show = true;

            // reset invalid value
            widget.datavalue = null;
        } else {
            Page.Widgets.labelErrorMsg.show = false;
        }
    }
};
```
