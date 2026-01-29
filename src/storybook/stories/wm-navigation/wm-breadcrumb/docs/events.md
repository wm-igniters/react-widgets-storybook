# Callback Events

The Breadcrumb component provides the following callback events:

| Event | Description |
|-------|-------------|
| `onBeforenavigate(props: BreadCrumbProps, node: NavNode)` | Triggered before navigation occurs when a breadcrumb item is clicked. The callback receives the component props and the navigation node that was clicked. Return `false` from this callback to prevent the navigation from proceeding. |

### Event Usage Example

```javascript
// Prevent navigation if form has unsaved changes
Page.Widgets.myBreadcrumb.onBeforenavigate = function(props, node) {
  if (Page.hasUnsavedChanges()) {
    // Show confirmation dialog
    var navigate = confirm("You have unsaved changes. Are you sure you want to navigate away?");
    return navigate;
  }
  return true; // Allow navigation if no unsaved changes
};

// Log breadcrumb navigation for analytics
Page.Widgets.myBreadcrumb.onBeforenavigate = function(props, node) {
  console.log("User navigated to: " + node.label);
  // Perform analytics tracking
  trackUserNavigation(node.link);
  return true; // Allow navigation to proceed
};
```