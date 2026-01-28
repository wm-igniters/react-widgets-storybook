# Props

The Breadcrumb component extends the `DatasetAwareNavProps` base class and accepts the following properties:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `listener` | `Record<string, any>` | `{}` | Object containing event listener configurations for the breadcrumb component. |
| `onBeforenavigate` | `(props: BreadCrumbProps, node: NavNode) => boolean \| void` | `undefined` | Callback function that executes before navigation occurs. Return `false` to prevent navigation. |
| `navNodes` | `NavNode[]` | `[]` | Array of navigation nodes that define the structure and hierarchy of the breadcrumb trail. |

## NavNode Structure

The `NavNode` objects in the `navNodes` array typically contain the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | The text displayed for this navigation node |
| `link` | `string` | The URL or path this node navigates to when clicked |
| `icon` | `string` (optional) | Icon class to display alongside the label |
| `active` | `boolean` (optional) | Indicates if this node represents the current page |

### Common Use Cases

```javascript
// Basic breadcrumb setup
Page.Widgets.myBreadcrumb.navNodes = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Category", link: "/products/category" },
  { label: "Item", link: "/products/category/item", active: true }
];

// Implementing custom navigation control
Page.Widgets.myBreadcrumb.onBeforenavigate = function(props, node) {
  // Show confirmation dialog for certain navigation paths
  if (node.requiresConfirmation) {
    return confirm("Are you sure you want to navigate away?");
  }
  return true; // Allow navigation
};
```