# Props

## Data Configuration
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | `T[]` | `[]` | Array of data items to be displayed in the list. |
| `datasource` | `LiveVariableConfig` | - | Configuration for binding to a live data source instead of static dataset. |
| `orderby` | `string` | - | Field name to sort the list items. |
| `groupby` | `string` | - | Field name to group the list items. |

## Display Configuration
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Unique identifier for the list component. |
| `title` | `string` | - | Title displayed at the top of the list. |
| `subheading` | `string` | - | Subtitle displayed below the title. |
| `dateformat` | `string` | - | Format string for date values in the list. |
| `direction` | `IDirection` | `'vertical'` | List layout direction ('vertical' or 'horizontal'). |
| `itemsperrow` | `string` | - | Number of items to display per row in grid layout. |
| `horizontalalign` | `IAlignment` | `'left'` | Horizontal alignment of items ('left', 'center', 'right'). |
| `columnalign` | `IColumnAlignment` | - | Alignment of columns within the list. |
| `hidehorizontalscrollbar` | `boolean` | `false` | Whether to hide horizontal scrollbar. |

## Pagination
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `navigation` | `INavigation` | `'Basic'` | Pagination navigation type ('Basic', 'Pager', 'Classic', etc.). |
| `navigationalign` | `IAlignment` | `'center'` | Alignment of the navigation controls. |
| `pagesize` | `number` | `20` | Number of items per page. |
| `boundarylinks` | `boolean` | `false` | Show boundary links (first/last) in pagination. |
| `paginationclass` | `string` | - | CSS class for pagination controls. |
| `showrecordcount` | `boolean` | `false` | Display the record count information. |
| `allowpagesizechange` | `boolean` | `false` | Allow users to change page size. |
| `pagesizeoptions` | `string` | - | Comma-separated list of available page size options. |

## Selection and Interaction
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `multiselect` | `boolean` | `false` | Enable selection of multiple items. |
| `selectionlimit` | `number` | - | Maximum number of items that can be selected in multiselect mode. |
| `selectfirstitem` | `boolean` | `false` | Automatically select the first item when list loads. |
| `disableitem` | `boolean` | `false` | Disable item selection. |
| `enablereorder` | `boolean` | `false` | Enable drag-and-drop reordering of items. |

## Style and Custom Content
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `listclass` | `string` | - | CSS class for the list container. |
| `itemclass` | `string \| ((item: T) => string \| null \| undefined)` | - | CSS class for list items, or function to dynamically generate classes. |
| `iconclass` | `string` | - | CSS class for icons in list items. |
| `children` | `React.ReactNode` | - | Custom template for list item rendering. |
| `selectedItemWidgets` | `Array<any> \| any` | - | Custom template for selected items. |

## Messages and Loading States
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `nodatamessage` | `string` | `'No data found'` | Message displayed when list is empty. |
| `ondemandmessage` | `string` | - | Message for on-demand loading. |
| `loadingdatamsg` | `string` | `'Loading...'` | Message displayed during data loading. |
| `loadingicon` | `string` | - | Icon shown during loading state. |
| `showcount` | `boolean` | `false` | Show count of items beside group headers. |

## Advanced Configuration
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `statehandler` | `StorageType` | - | Storage type for maintaining component state. |
| `maxsize` | `number` | - | Maximum number of items to display. |
| `collapsible` | `boolean` | `false` | Enable collapsible groups when using groupby. |

## Common Use Cases

### Basic List Configuration
```javascript
// Configure a basic list with static data
Page.Widgets.basicList.dataset = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" }
];
```

### Pagination Configuration
```javascript
// Configure pagination settings
Page.Widgets.paginatedList.navigation = "Classic";
Page.Widgets.paginatedList.pagesize = 10;
Page.Widgets.paginatedList.boundarylinks = true;
Page.Widgets.paginatedList.showrecordcount = true;
```

### Selection Configuration
```javascript
// Configure multi-select with limit
Page.Widgets.multiList.multiselect = true;
Page.Widgets.multiList.selectionlimit = 3;

// Handle selection limit exceeded
Page.Widgets.multiList.onSelectionlimitexceed = function(widget, limit) {
  app.notify.error("You can select a maximum of " + limit + " items.");
};
```

### Grouping and Sorting
```javascript
// Configure grouping and sorting
Page.Widgets.organizedList.groupby = "category";
Page.Widgets.organizedList.orderby = "name asc";
Page.Widgets.organizedList.showcount = true;
Page.Widgets.organizedList.collapsible = true;
```