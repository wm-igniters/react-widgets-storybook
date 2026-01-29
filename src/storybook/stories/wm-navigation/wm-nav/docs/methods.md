# Methods

The Nav component doesn't have any pre-defined methods listed in the component data. However, you can access and manipulate the component programmatically using the standard widget reference pattern:

```javascript
// Access the Nav component
var navComponent = Page.Widgets.myNavName;

// Modify properties at runtime
navComponent.show = false; // Hide the navigation
navComponent.show = true;  // Show the navigation
```

## Common Property Modifications

Though not formal methods, here are common ways to interact with the Nav component programmatically:

### Changing Visibility

```javascript
// Toggle navigation visibility based on condition
Page.Widgets.myNav.show = userIsAuthenticated;
```

### Updating Data Source

```javascript
// Update navigation items dynamically
Page.Widgets.myNav.dataset = newNavigationItems;
```

### Setting Active Item

```javascript
// Set the active navigation item
Page.Widgets.myNav.isactive = "currentPageId";
```