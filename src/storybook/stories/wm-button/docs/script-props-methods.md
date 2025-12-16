# Script Props & Methods

The button component can be accessed and manipulated via JavaScript using the Page.Widgets API. Use the following syntax to get or set properties:

```javascript
// Get a property value
var value = Page.Widgets.button1.getWidgetProperty("propertyName");

// Set a property value
Page.Widgets.button1.setWidgetProperty("propertyName", value);
```

## Available Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| animation | string | null | CSS animation class to apply to the button |
| animationdelay | number | null | Delay in milliseconds before animation starts |
| caption | string | null | Text displayed on the button |
| badgevalue | string | null | Value displayed in the button's badge |
| iconclass | string | null | CSS class for the button's icon |

## Common Use Cases

### Toggle Button Visibility
```javascript
// Hide the button
Page.Widgets.button1.setWidgetProperty("show", false);

// Show the button
Page.Widgets.button1.setWidgetProperty("show", true);
```

### Enable/Disable Button
```javascript
// Disable the button
Page.Widgets.button1.setWidgetProperty("disabled", true);

// Enable the button
Page.Widgets.button1.setWidgetProperty("disabled", false);
```

### Update Button Text Dynamically
```javascript
// Change button caption
Page.Widgets.button1.setWidgetProperty("caption", "Click Me!");

// Update based on condition
if (someCondition) {
    Page.Widgets.button1.setWidgetProperty("caption", "Save");
} else {
    Page.Widgets.button1.setWidgetProperty("caption", "Cancel");
}
```

### Add Badge Notification
```javascript
// Set badge value
Page.Widgets.button1.setWidgetProperty("badgevalue", "5");

// Clear badge
Page.Widgets.button1.setWidgetProperty("badgevalue", "");
```

### Change Button Icon
```javascript
// Set icon class
Page.Widgets.button1.setWidgetProperty("iconclass", "fa fa-save");

// Change icon based on state
Page.Widgets.button1.setWidgetProperty("iconclass", "fa fa-spinner fa-spin");
```

### Apply Animation Effects
```javascript
// Add animation with delay
Page.Widgets.button1.setWidgetProperty("animation", "fadeIn");
Page.Widgets.button1.setWidgetProperty("animationdelay", 500);
```

## Methods

No methods are currently available for the button component. All interactions are handled through property manipulation and event handlers.