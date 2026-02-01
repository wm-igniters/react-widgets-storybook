# Callback Events

<details open>
  <summary>Callback Events</summary>
    <div>
        | Event | Description |
        | --- | --- |
        | `onSelect` | This event handler is called each time a user selects a bubble in the chart. |
        | `onBeforeRender` | This event handler is called just before the chart is rendered on the page. |
        | `onTransform` | This event handler is called when the data or configuration of the chart is transformed prior to rendering. |
    </div>
</details>


### Use Cases

- Triggered when the user clicks on a specific bubble of the chart.

```javascript
    Page.bubbleChartSelect = function ($event, widget, selectedItem, selectedChartItem) {
    //Example: Clicking on the “Product A” bubble displays detailed sales and profit data in a side panel.
};
```

- Triggered during the initialization phase of the bubble chart, just before it is rendered on the page.

```javascript
    Page.bubbleChartBeforerender = function (widget, chartInstance) {
    //Example: Apply conditional styling based on product category, such as coloring premium products in gold.
};
```

- Triggered when the bubble chart is re-rendered due to data updates, filtering, or configuration changes.

```javascript
    Page.bubbleChartTransform = function ($event, widget) {
    //Example: Filter the chart to show only products sold in the last quarter, or scale bubble sizes based on updated profit margins.
};
```