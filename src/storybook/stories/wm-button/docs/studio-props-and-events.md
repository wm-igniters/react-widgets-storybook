# Props and Events

<details open>
<summary><strong>Props</strong></summary>

## Appearance & Content
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| caption | string | null | Text displayed on the button |
| iconclass | string | null | CSS class for the button icon |
| iconurl | string | null | URL for custom icon image |
| iconposition | any | 'left' | Position of icon relative to text |
| badgevalue | string | null | Value displayed in button badge |

## Icon Styling
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| iconsize | number | 0 | Size of the icon in pixels |
| iconheight | number | null | Height of the icon |
| iconwidth | number | null | Width of the icon |
| iconmargin | number | null | Margin around the icon |

## Layout & Visibility
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| show | any | true | Controls button visibility |
| showindevice | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where button is visible |
| styles | any | null | Custom CSS styles |
| classname | string | null | Additional CSS classes |

## Behavior
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | any | false | Disables button interaction |
| disabletoucheffect | boolean | false | Disables touch feedback effects |
| onTap | Function | null | Callback function for tap events |

## Animation
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | null | Animation type for button |
| animationdelay | number | null | Delay before animation starts |

## Skeleton Loading
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showskeleton | boolean | undefined | Shows skeleton placeholder during loading |
| skeletonheight | string | null | Height of skeleton placeholder |
| skeletonwidth | string | null | Width of skeleton placeholder |

## Accessibility
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | AccessibilityRole | "button" | Accessibility role |
| hint | string | undefined | Tooltip or hint text |

## Identification
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | null | Unique identifier for the button |
| name | string | null | Name attribute for the button |

</details>

<details>
<summary><strong>Callback Events</strong></summary>

| Event | Description |
|-------|-------------|
| onTap | Triggered when the button is tapped/clicked |
| onTouchstart | Triggered when touch/mouse press begins |
| onTouchend | Triggered when touch/mouse press ends |
| onDoubletap | Triggered when the button is double-tapped |
| onLongtap | Triggered when the button is pressed and held |

</details>

## Touch Event Callback Behavior

All callback events support the standard WaveMaker studio behavior patterns:

- **JavaScript Actions**: Execute custom JavaScript functions with access to event parameters
- **Navigation**: Navigate to different pages or external URLs
- **Variable Operations**: Update application variables or invoke service calls
- **Widget Methods**: Call methods on other widgets in the application

Event callbacks receive an event parameter `(e)` containing details about the user interaction, including touch coordinates, timing information, and the source widget reference.