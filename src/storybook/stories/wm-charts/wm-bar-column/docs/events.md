# Callback Events

<details open>
  <summary>Callback Events</summary>
    <div>
        | Event | Description |
        | --- | --- |
        | `onSelect` | This event handler is called each time a user selects a bar or column in the chart. |
        | `onBeforeRender` | This event handler is called just before the bar or column chart is rendered on the page. |
        | `onTransform` | This event handler is called when the data or configuration of the bar or column chart is transformed prior to rendering. |
    </div>
</details>


### Use Cases

- Triggered when the user clicks on a specific bar of the Bar Chart (same applies to Column Chart, only the component name differs).

```javascript
    Page.barChartSelect = function ($event, widget, selectedItem, selectedChartItem) {
    //Example Scenario: Click a sales bar to view detailed sales data for that month
};
```

- Triggered during the initialization phase of the Bar Chart, just before it is rendered on the page (same applies to Column Chart, only the component name differs).

```javascript
    Page.barChartBeforerender = function (widget, chartInstance) {
    //Example Scenario: Apply conditional styling or themes before rendering
};
```

- Triggered when the Bar Chart is re-rendered due to data updates, filtering, or configuration changes (same applies to Column Chart, only the component name differs).

```javascript
    Page.barChartTransform = function ($event, widget) {
    //Example Scenario: Modify incoming data before display (format values, apply calculations)
};
```