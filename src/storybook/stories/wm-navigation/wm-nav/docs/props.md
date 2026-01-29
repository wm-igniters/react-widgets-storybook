# Props

## Core Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | string | "horizontal" | Defines the orientation of the navigation structure. Options include "horizontal" or "vertical". |
| `type` | string | "navbar" | Specifies the navigation style. Common values include "navbar", "sidebar", "tabs", etc. |
| `name` | string | | A unique identifier for the nav component. |
| `show` | boolean | true | Determines whether the navigation is visible. |

## Behavior Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autoclose` | string | "false" | When set to "true", automatically closes navigation items when another is opened. |
| `autoopen` | string | "false" | When set to "true", automatically opens navigation items when hovered or focused. |
| `showonhover` | boolean | false | When true, shows sub-navigation items only when the parent item is hovered over. |
| `isactive` | string | | Expression to determine which navigation item is currently active. |

## Item Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemlabel` | string or function | | The text displayed for navigation items. Can be a string or a function that returns a string based on the item data. |
| `itemhint` | string | | Tooltip text shown when hovering over navigation items. |
| `itemlink` | string | | Path or URL that the navigation item links to. |
| `itemicon` | string | | Icon identifier to display with the navigation item. |
| `iconposition` | string | "left" | Position of the icon relative to the label ("left" or "right"). |
| `itembadge` | string | | Content to display as a badge (typically for notifications or counts). |
| `itemtarget` | string | "_self" | Target attribute for the navigation link (e.g., "_blank", "_self"). |
| `itemchildren` | string | | Property name that contains child navigation items for nested navigation. |
| `itemaction` | string | | Action to perform when the navigation item is clicked. |

## Styling & Miscellaneous

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `class` | string | | Custom CSS class(es) to apply to the navigation component. |
| `itemclass` | string | | Custom CSS class(es) to apply to individual navigation items. |
| `dataset` | any | | Custom data attributes to attach to the navigation component. |
| `orderby` | string | | Property to sort navigation items by. |
| `userrole` | string | | Role-based access control. Navigation is only shown to users with specified role. |

## Common Use Cases

### Basic Horizontal Navigation Bar
```javascript
// Configure a basic top navigation bar
Page.Widgets.topNav.type = "navbar";
Page.Widgets.topNav.layout = "horizontal";
```

### Vertical Sidebar with Auto-closing Behavior
```javascript
Page.Widgets.sideNav.type = "sidebar";
Page.Widgets.sideNav.layout = "vertical";
Page.Widgets.sideNav.autoclose = "true";
```

### Dynamic Navigation with Custom Item Labels
```javascript
// Use a function to generate navigation item labels
Page.Widgets.dynamicNav.itemlabel = function(item) {
    return item.name.toUpperCase() + (item.new ? " (New)" : "");
};
```

### Navigation with Badges
```javascript
// Configure navigation with notification badges
Page.Widgets.notificationNav.itembadge = "notificationCount";
```

### Role-Based Navigation
```javascript
// Show navigation only to admin users
Page.Widgets.adminNav.userrole = "admin";
```