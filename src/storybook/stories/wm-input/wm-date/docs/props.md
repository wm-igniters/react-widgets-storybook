# Props

## Basic Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| name | string | - | Unique identifier for the Date component |
| placeholder | string | - | Text displayed in the input field when empty |
| value | date/string | - | Initial date value, can be set to current date |
| show | boolean | true | Determines component visibility; bindable property |
| disabled | boolean | false | When true, makes the component display-only |

## Date Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| datePattern | string | - | Format pattern for date display (e.g., 'dd-MMMM-yyyy', 'yyyy/MM/dd') |
| outputFormat | string | 'yyyy-MM-dd' | Format of the data value returned by the component |
| minDate | date/string | - | Minimum selectable date; dates before this will be disabled |
| maxDate | date/string | - | Maximum selectable date; dates after this will be disabled |
| excludeDays | array | - | Array of days (0-6, Sunday to Saturday) to exclude from selection |
| excludeDates | array/string | - | Specific dates to exclude from selection |
| showWeekNumber | boolean | false | When true, displays week numbers in the date picker |

## Behavior

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| showDatePickerOn | string | 'inputAndButtonClick' | Controls when date picker appears: 'inputAndButtonClick' or 'buttonClick' |
| required | boolean | false | When true, form validation will require this field |
| readOnly | boolean | false | When true, prevents changing the input value |
| autoFocus | boolean | false | Automatically focuses this element on page load |
| loadOnDemand | boolean | false | Defers initialization until component becomes visible (only when show property is bound) |
| skipOnChangeEventFromScript | boolean | false | When enabled, Change events are only triggered from UI interaction, not from script updates |

## Accessibility

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| hint | string | - | Tooltip text shown on hover |
| tabindex | number | 0 | Sets the tab order for keyboard navigation |
| shortcutkey | string | - | Keyboard shortcut to focus/activate the component |

## Common Use Cases

### Setting Date Range Restrictions

```javascript
// Set minimum date to today
Page.Widgets.myDate.minDate = new Date();

// Set maximum date to 30 days from today
let maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 30);
Page.Widgets.myDate.maxDate = maxDate;
```

### Excluding Specific Days

```javascript
// Exclude weekends (Saturday and Sunday)
Page.Widgets.myDate.excludeDays = [0, 6];
```

### Custom Date Formatting

```javascript
// Set custom display pattern
Page.Widgets.myDate.datePattern = "MMMM dd, yyyy";

// Set custom output format
Page.Widgets.myDate.outputFormat = "yyyy-MM-dd";
```