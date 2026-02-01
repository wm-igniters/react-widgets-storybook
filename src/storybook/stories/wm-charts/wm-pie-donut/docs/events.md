# Callback Events

<details open>
  <summary>Callback Events</summary>
    <div>
        | Event | Description |
        | --- | --- |
        | `onSelect` | This event handler is called each time a user selects a pie or donut in the chart. |
        | `onBeforeRender` | This event handler is called just before the pie or donut chart is rendered on the page. |
        | `onTransform` | This event handler is called when the data or configuration of the pie or donut chart is transformed prior to rendering. |
    </div>
</details>


### Use Cases

- Triggered when the user clicks on Pie Chart (same applies to Donut Chart, only the component name differs).

```javascript
    Page.pieChartSelect = function ($event, widget, selectedItem, selectedChartItem) {
    //Example: Clicking the “Electronics” slice shows detailed sales, revenue, and profit for that category in a panel.
};
```

- Triggered during the initialization phase of the Pie Chart, just before it is rendered on the page (same applies to Donut Chart, only the component name differs).

```javascript
    Page.pieChartBeforerender = function (widget, chartInstance) {
    //Example: Apply custom colors or highlight specific slices before the chart appears.
};
```

- Triggered when the Pie Chart is re-rendered due to data updates, filtering, or configuration changes (same applies to Donut Chart, only the component name differs).

```javascript
    Page.pieChartTransform = function ($event, widget) {
    //Example: Filter the chart to show only top 5 product categories or calculate percentages dynamically.
};
```