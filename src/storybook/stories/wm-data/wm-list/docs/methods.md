# Methods

List component methods can be accessed in scripts using the Page.Widgets notation (e.g., `Page.Widgets.myList.selectItem(item)`)

| Method | Parameters | Return Type | Description |
|--------|------------|------------|-------------|
| `selectItem` | `item: any` | `void` | Selects the specified item in the list. |
| `deselectItem` | `item: any` | `void` | Deselects the specified item in the list. |
| `selectAllItems` | - | `void` | Selects all items in the list (when multiselect is enabled). |
| `clearSelection` | - | `void` | Clears all selections in the list. |
| `getSelectedItem` | - | `any` | Returns the currently selected item (in single-select mode). |
| `getSelectedItems` | - | `Array<any>` | Returns all selected items (in multi-select mode). |
| `selectItemByIndex` | `index: number` | `void` | Selects the item at the specified index. |
| `selectItemsByIndices` | `indices: Array<number>` | `void` | Selects multiple items at the specified indices. |
| `navigateTo` | `pageNumber: number` | `void` | Navigates to the specified page number. |
| `setPageSize` | `size: number` | `void` | Changes the page size to the specified value. |
| `redraw` | - | `void` | Redraws the list with current data and settings. |
| `refresh` | - | `void` | Refreshes the list data from the data source. |

## Common Method Use Cases

### Managing Selection
```javascript
// Select an item by object reference
Page.Widgets.myList.selectItem(selectedUser);

// Select items by indices
Page.Widgets.myList.selectItemsByIndices([0, 2, 4]);

// Get selected items
var selections = Page.Widgets.myList.getSelectedItems();
console.log("Selected items count:", selections.length);

// Clear all selections
Page.Widgets.myList.clearSelection();
```

### Pagination Control
```javascript
// Navigate to a specific page
Page.Widgets.myList.navigateTo(3);

// Change page size and refresh
Page.Widgets.myList.setPageSize(25);
```

### Data Refresh
```javascript
// Refresh the list data from the data source
Page.Widgets.myList.refresh();

// After modifying dataset, redraw the list
Page.Widgets.myList.dataset.push(newItem);
Page.Widgets.myList.redraw();
```