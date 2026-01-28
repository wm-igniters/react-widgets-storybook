# Props

## Basic Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | | Unique identifier for the tabs component |
| `type` | "static" \| "dynamic" | "static" | Determines whether tab panes are predefined (static) or generated from a dataset (dynamic) |
| `dataset` | any[] | | Data source for generating dynamic tab panes |
| `defaultpaneindex` | number | 0 | Sets the default active tab pane on load based on index (0-based) |
| `selectedindex` | number | | Controls the currently selected tab programmatically |

## Layout Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tabsposition` | "top" \| "bottom" \| "left" \| "right" | "top" | Determines the position of tab headers relative to content |
| `justified` | boolean | false | When true, tabs will have equal width across the container |
| `iconposition` | "top" \| "start" \| "end" \| "bottom" \| any | "start" | Position of icons within tab headers |

## Behavior Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `statehandler` | "none" \| "URL" \| "localStorage" \| "sessionStorage" | "URL" | Determines how tab state is retained across page refreshes |
| `autotabactivation` | boolean | true | When true, tabs are automatically activated on click |
| `transition` | "none" \| "slide" \| "fade" | "none" | Animation effect when switching between tabs |
| `nodatamessage` | string | "No Data Found" | Message displayed when no data is available for dynamic tabs |

## Dynamic Tabs Specific Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `render` | ($item: any, $index: number, dataset: any[]) => React.ReactNode | | Custom renderer function for dynamic tab content |

### Common Use Cases

#### Configure Tab Position and Behavior

```javascript
// Set tabs to appear on the left side
Page.Widgets.myTabs.tabsposition = "left";

// Set the second tab to be active by default
Page.Widgets.myTabs.defaultpaneindex = 1;

// Enable justified tabs (equal width)
Page.Widgets.myTabs.justified = true;
```

#### Configure State Management

```javascript
// Store tab state in localStorage instead of URL
Page.Widgets.myTabs.statehandler = "localStorage";

// Disable state retention
Page.Widgets.myTabs.statehandler = "none";
```

#### Configure Dynamic Tabs

```javascript
// Set up dynamic tabs with department data
Page.Widgets.departmentTabs.type = "dynamic";
Page.Widgets.departmentTabs.dataset = Page.Variables.DepartmentsData.dataSet;
```