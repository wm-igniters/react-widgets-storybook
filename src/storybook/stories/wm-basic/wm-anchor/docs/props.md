# Props

## Basic Configuration

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | - | A unique identifier for the Anchor component. Special characters and spaces are not allowed. |
| `caption` | string | - | The text that the end user sees on the anchor. Can be bound to a variable or another widget. |
| `badgeValue` | string | - | Value to be displayed in the badge span for the anchor. |

## Layout

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | string | - | The width of the widget, can be specified in px or %. |
| `height` | string | - | The height of the widget, can be specified in px or %. |
| `horizontalAlign` | string | "left" | Specifies how the elements should be aligned horizontally (left, center or right). |

## Navigation

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `hyperlink` | string | - | The URL or app screen to navigate to on tapping the anchor. |
| `target` | string | "_self" | Defines behavior on tap of the link (_blank: Opens in a new view, _self: Opens in the same view). |
| `encodeURL` | boolean | false | When enabled, special characters in the URL will be encoded at runtime. |

## Appearance

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `iconClass` | string | - | Defines the class of the icon that is applied to the anchor. |
| `iconUrl` | string | - | URL of the icon image to display alongside the anchor text. |
| `iconWidth` | string | - | Width of the icon (best specified in pixels). |
| `iconHeight` | string | - | Height of the icon (best specified in pixels). |
| `iconMargin` | string | - | Space between the icon and the anchor text (specified in pixels). |
| `iconPosition` | string | "left" | Position of icon relative to text (left, top, or right). |

## Behavior

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `show` | boolean | true | Determines whether the component is visible. Can be bound to a variable. |
| `loadOnDemand` | boolean | false | When set and show property is bound, initialization is deferred until visible. |
| `animation` | string | - | Controls the animation of the component. |

## Accessibility

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `hint` | string | - | Text displayed as a tooltip/hint when the user interacts with the component. |
| `tabindex` | number | 0 | Specifies the tab order for component focus (-1 makes it non-focusable). |
| `shortcutKey` | string | - | Specifies a keyboard shortcut to activate/focus the element. |

### Common Use Cases

```javascript
// Set up a navigation anchor
Page.Widgets.myAnchor.hyperlink = "/ProfileScreen";
Page.Widgets.myAnchor.caption = "View Profile";

// Add badge value for notification
Page.Widgets.myAnchor.badgeValue = "3";

// Configure with icon
Page.Widgets.myAnchor.iconClass = "wm-icon wm-icon-user";
Page.Widgets.myAnchor.iconPosition = "left";
```