# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when an item is selected. Provides the selected item and selection details. |
| `onClick` | Triggered when a list item is clicked. Provides the clicked item and event details. |
| `onDblclick` | Triggered when a list item is double-clicked. Provides the double-clicked item and event details. |
| `onMouseEnter` | Triggered when the mouse pointer enters a list item. Provides the item and event details. |
| `onMouseLeave` | Triggered when the mouse pointer leaves a list item. Provides the item and event details. |
| `onReorder` | Triggered when an item is reordered through drag-and-drop. Provides the reordered item details and new order. |
| `onSelectionlimitexceed` | Triggered when the selection limit is exceeded in multiselect mode. Provides the widget and limit value. |
| `onBeforedatarender` | Triggered before the data is rendered in the list. Allows for manipulation of the dataset before rendering. |
| `onRender` | Triggered after the data is rendered in the list. Provides access to the rendered dataset. |
| `onPaginationchange` | Triggered when the pagination changes (page number or page size). Provides pagination details. |
| `onSetrecord` | Triggered when the current record is set. Provides the record details. |