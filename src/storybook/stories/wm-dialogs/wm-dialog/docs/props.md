# Props

## General
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | "" | Sets the title text displayed in the dialog header. |
| name | string | | A unique identifier for the dialog component. |

## Accessibility
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| tabindex | number | 0 | Specifies the tab order of the dialog. Values can range from 0 to 32767. Setting to -1 makes the element non-focusable. |

## Layout
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| width | string | | Width of the dialog in px or % (e.g., "50px", "75%"). |
| height | string | | Height of the dialog in px or % (e.g., "50px", "75%"). |
| showHeader | boolean | true | Controls visibility of the dialog header. |
| modal | boolean | false | When true, adds a backdrop that prevents closing the dialog when clicking outside. |

## Behavior
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| enableDefaultCloseAction | boolean | true | When enabled, adds a close (X) icon to the header and allows closing with the ESC key. |
| animation | string | | Controls the animation effect when the dialog opens or closes. |

## Graphics
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| iconClass | string | | CSS class for the icon displayed in the dialog. |
| iconWidth | string | | Width of the icon in pixels. |
| iconHeight | string | | Height of the icon in pixels. |
| iconMargin | string | | Margin around the icon in pixels to adjust spacing between icon and text. |

### Common Use Cases

```javascript
// Open a dialog programmatically
Page.Widgets.designdialog1.open();

// Configure a modal dialog that must be explicitly closed
Page.Widgets.designdialog1.modal = true;
Page.Widgets.designdialog1.enableDefaultCloseAction = false;
```