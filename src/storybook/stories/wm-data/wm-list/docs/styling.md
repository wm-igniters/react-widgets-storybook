# Styling

The List component provides several CSS classes and styling options to customize its appearance.

## Component Classes

| CSS Class | Applied To | Description |
|-----------|------------|-------------|
| `.app-list` | Main container | Base class for the list component. |
| `.app-list-container` | List container | Contains all list items. |
| `.app-list-item` | List item | Applied to each item in the list. |
| `.active` | Selected list item | Applied to the currently selected list item. |
| `.app-list-item-hover` | Hovered list item | Applied when hovering over a list item. |
| `.app-list-header` | List header | Contains the title and subheading. |
| `.app-list-message` | Message container | Contains no-data or loading messages. |

## Custom Classes

The following properties allow for custom class application:

- `listclass`: Apply a custom CSS class to the overall list container.
- `itemclass`: Apply custom CSS classes to individual list items, either as a static string or dynamically through a function.
- `paginationclass`: Apply a custom CSS class to the pagination controls.

## Direction-Specific Styling

| CSS Class | Applied When | Description |
|-----------|--------------|-------------|
| `.app-list-horizontal` | `direction="horizontal"` | Applied when list is in horizontal layout. |
| `.app-list-vertical` | `direction="vertical"` | Applied when list is in vertical layout (default). |

## Responsive Grid Styling

When `itemsperrow` is specified, responsive grid classes are applied:

| CSS Class | Description |
|-----------|-------------|
| `.list-xs-items-1` to `.list-xs-items-12` | Grid columns for extra small screens. |
| `.list-sm-items-1` to `.list-sm-items-12` | Grid columns for small screens. |
| `.list-md-items-1` to `.list-md-items-12` | Grid columns for medium screens. |
| `.list-lg-items-1` to `.list-lg-items-12` | Grid columns for large screens. |

## Example Custom Styling

```css
/* Custom styling for list component */
.app-list.custom-list {
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Custom styling for list items */
.app-list-item.important-item {
  font-weight: bold;
  background-color: #fff8e1;
}

/* Custom styling for active items */
.app-list-item.active {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
}
```

To apply dynamic classes based on item data:

```javascript
// Configure dynamic item classes
Page.Widgets.myList.itemclass = function(item) {
  if (item.priority === 'high') {
    return 'high-priority-item';
  } else if (item.status === 'completed') {
    return 'completed-item';
  }
  return 'normal-item';
};
```