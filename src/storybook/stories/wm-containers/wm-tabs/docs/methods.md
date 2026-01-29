# Methods

The Tabs component exposes several methods that can be accessed via JavaScript. To access these methods, use the pattern: `Page.Widgets.widgetName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|------------|-------------|
| `next()` | none | void | Navigates to the next tab pane |
| `prev()` | none | void | Navigates to the previous tab pane |
| `goToTab()` | index: number | void | Navigates to a specific tab pane by index (0-based) |

## Tab Pane Methods

| Method | Parameters | Return Type | Description |
|--------|------------|------------|-------------|
| `select()` | none | void | Selects a specific tab pane |

## Usage Examples

### Navigating Between Tabs

```javascript
// Navigate to the next tab
Page.Widgets.myTabs.next();

// Navigate to the previous tab
Page.Widgets.myTabs.prev();

// Navigate to the third tab (index 2)
Page.Widgets.myTabs.goToTab(2);

// Select a specific tab pane by its name
Page.Widgets.tabpane1.select();
```

### Creating Tab Navigation Buttons

```javascript
// Previous button click handler
Page.previousButtonClick = function($event, widget) {
  Page.Widgets.myTabs.prev();
};

// Next button click handler
Page.nextButtonClick = function($event, widget) {
  Page.Widgets.myTabs.next();
};

// Direct navigation button click handler
Page.goToSalesTabClick = function($event, widget) {
  Page.Widgets.myTabs.goToTab(1); // Navigate to the sales tab (index 1)
};
```