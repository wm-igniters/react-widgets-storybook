# Styling

Calendar component can be styled using custom classes applied to events and the calendar container.

## Event Styling

You can apply custom styling to events by setting the `className` property to a field in your dataset that contains CSS class names.

## Calendar Options

These options can be set through the `applyCalendarOptions` method to customize calendar appearance:

| Option | Description |
| --- | --- |
| allDaySlot | Controls whether the all-day slot is displayed at the top of the calendar |
| allDayText | Sets the text for the all-day slot label |
| slotDuration | Sets the frequency for displaying time slots (default: '00:30:00') |
| slotLabelFormat | Determines the time-text format displayed on the vertical axis |
| slotLabelInterval | Controls how often the time-axis is labeled with time values |
| minTime | Sets the earliest time displayed (default: "00:00:00") |
| maxTime | Sets the latest time displayed (default: "24:00:00") |
| slotEventOverlap | Determines if timed events should visually overlap (default: true) |