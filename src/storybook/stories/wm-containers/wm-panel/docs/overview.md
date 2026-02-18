# Overview

A **Panel** is used to organize and group related components inside a panel container. It includes a collapsible section with a title bar for better structure and readability.

### Markup

```javascript
<wm-panel subheading="subheading" iconclass="wi wi-account-circle" autoclose="outsideClick" title="Title" name="panel"
    class="panel panel-default" variant="default:default">
    <wm-panel-footer name="panel_footer">
        <wm-label padding="unset 0.5em" class="text-muted p" caption="Addition Info" name="label" variant="default:p">
        </wm-label>
    </wm-panel-footer>
</wm-panel>
```

### Examples

#### Properties

- This panel displays a badge value to indicate counts, notifications, or alerts. The badge type and value can be set in the markup or dynamically via script.

```javascript
<wm-panel badgetype="default" badgevalue="5" name="panel"></wm-panel>
```

```javascript
// Set the panel's badge value and type to display a count or notification
Page.Widgets.panel.badgevalue = "5";
Page.Widgets.panel.badgetype = "default";
```

- This panel shows a "?" icon when helptext has a value, which can be set in the markup or via script.

```javascript
<wm-panel helptext="This is a panel" name="panel"></wm-panel>
```

```javascript
// Set the panel's help text to show a "?" icon with a popup message for guidance
Page.Widgets.panel.helptext = "This is a panel";
```

#### Events

- This is the markup for a panel with an on-close event, executed whenever the panel is closed by the user.

```javascript
<wm-panel on-close="panelClose($event, widget)" name="panel"></wm-panel>
```

```javascript
Page.panelClose = function ($event, widget) {
  // Check if the panel was closed by a user action (click)
  if ($event.type == "click") {
    // Reset the user form to clear any unsaved input
    Page.Widgets.userForm.reset();

    // Hide validation or error messages related to the panel
    Page.Widgets.message.show = false;

    // Clear the selected record to avoid retaining stale data
    Page.Variables.selectedUserId.dataSet.datavalue = null;
  }
};
```

#### Methods

- This method toggles the panel between normal and full-screen mode programmatically, allowing users to focus on detailed content or return to the normal view.

```javascript
// Toggle the panel between normal and full-screen mode programmatically
Page.Widgets.panel.toggleFullScreen();
```

- This method toggles the panel open or closed programmatically, allowing dynamic control of panel visibility.

```javascript
// Toggles the panel status programmatically: expands if closed, closes if expanded
Page.Widgets.panel.toggle(); 
```
