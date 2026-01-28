# Styling

The Tabs component can be styled using CSS classes. The component consists of a tab navigation bar and content panes.

## Base Classes

| Class | Description |
|-------|-------------|
| `.app-tabs` | Main container for the tabs component |
| `.nav-tabs` | Container for the tab headers |
| `.tab-content` | Container for tab content panes |
| `.tab-pane` | Individual tab content pane |

## Tab Position Classes

Depending on the `tabsposition` property, additional classes are applied:

| Class | Description |
|-------|-------------|
| `.tabs-top` | Applied when tabs are positioned at the top |
| `.tabs-bottom` | Applied when tabs are positioned at the bottom |
| `.tabs-left` | Applied when tabs are positioned at the left |
| `.tabs-right` | Applied when tabs are positioned at the right |

## State Classes

| Class | Description |
|-------|-------------|
| `.active` | Applied to the currently active tab header and pane |
| `.disabled` | Applied to disabled tab headers |

## Badge Styling

Tab panes can include badges with different styles:

| Class | Description |
|-------|-------------|
| `.badge` | Base class for tab badges |
| `.badge-default` | Default badge style |
| `.badge-primary` | Primary badge style |
| `.badge-success` | Success badge style |
| `.badge-info` | Info badge style |
| `.badge-warning` | Warning badge style |
| `.badge-danger` | Danger badge style |

## Customization Examples

### Custom Tab Header Styling

```css
/* Change the active tab color */
.app-tabs .nav-tabs .nav-link.active {
  background-color: #0088cc;
  color: white;
  border-color: #0088cc;
}

/* Style tab headers */
.app-tabs .nav-tabs .nav-link {
  border-radius: 4px 4px 0 0;
  padding: 10px 15px;
  transition: all 0.3s ease;
}

/* Add hover effect to tabs */
.app-tabs .nav-tabs .nav-link:hover:not(.active) {
  background-color: #f0f0f0;
  border-color: #ddd #ddd transparent;
}
```

### Tab Content Styling

```css
/* Style the tab content container */
.app-tabs .tab-content {
  border: 1px solid #ddd;
  border-top: none;
  padding: 20px;
  background-color: white;
  border-radius: 0 0 4px 4px;
}

/* Add animation to tab transitions */
.app-tabs .tab-pane.fade {
  transition: opacity 0.3s ease-in-out;
}
```