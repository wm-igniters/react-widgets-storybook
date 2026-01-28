# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the selected tab changes. Provides the event, component props, new pane index, and old pane index as parameters. |
| `onLoad` | Called when the tabs component is loaded. |

## Event Parameters

### onChange

The onChange event provides the following parameters:

```typescript
(
  event: React.SyntheticEvent,
  props: WmTabsProps,
  newPaneIndex: number,
  oldPaneIndex: number
) => void
```

## Usage Examples

### Handle Tab Change

```javascript
Page.onTabsChange = function(event, props, newPaneIndex, oldPaneIndex) {
  console.log("Tab changed from", oldPaneIndex, "to", newPaneIndex);
  
  // Load specific data based on selected tab
  if (newPaneIndex === 0) {
    Page.Variables.EngineeringEmployeesData.update();
  } else if (newPaneIndex === 1) {
    Page.Variables.SalesEmployeesData.update();
  }
};
```

### Tab Load Event

```javascript
Page.onTabsLoad = function() {
  console.log("Tabs component loaded");
  
  // Initialize data for the first tab
  Page.Variables.EngineeringEmployeesData.update();
};
```