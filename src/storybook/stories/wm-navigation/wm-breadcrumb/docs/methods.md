# Methods

The Breadcrumb component can be accessed and manipulated programmatically through the Page.Widgets interface. However, it does not expose specific methods beyond the standard widget methods inherited from its base classes.

## Accessing the Breadcrumb Widget

```javascript
// Access the breadcrumb widget
var breadcrumb = Page.Widgets.myBreadcrumb;

// Dynamically update navigation nodes
breadcrumb.navNodes = newNavigationPath;

// Refresh the widget after updating properties
breadcrumb.refresh();
```

## Common Operations

While the component doesn't have specific methods, here are common operations performed on breadcrumb components:

### Updating Breadcrumb Path Dynamically

```javascript
// Update breadcrumb based on current page context
function updateBreadcrumbPath(currentPage, pageTitle) {
  // Get existing path
  var currentPath = Page.Widgets.myBreadcrumb.navNodes.slice();
  
  // Remove any nodes after the current level
  var levelIndex = currentPath.findIndex(node => node.link.includes(currentPage));
  if (levelIndex >= 0) {
    currentPath = currentPath.slice(0, levelIndex + 1);
  } else {
    // Add new node
    currentPath.push({
      label: pageTitle,
      link: '/pages/' + currentPage,
      active: true
    });
    
    // Set previous node as inactive
    if (currentPath.length > 1) {
      currentPath[currentPath.length - 2].active = false;
    }
  }
  
  // Update widget
  Page.Widgets.myBreadcrumb.navNodes = currentPath;
  Page.Widgets.myBreadcrumb.refresh();
}
```