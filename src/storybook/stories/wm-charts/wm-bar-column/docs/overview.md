# Overview

The **Bar Chart** or **Column Chart** component allows you to display data as horizontal bars or vertical columns, making it easy to compare values across categories. It supports customization of colors, legends, tooltips, and axis settings, and data can be bound from tables, variables, web services, live filters etc. This enables dynamic visualization of trends, comparisons, and key metrics for analysis and reporting.

### Markup

- Bar Chart

```javascript
<wm-chart type="Bar" name="barChart" title="Bar Chart" height="250px" iconclass="wi wi-bar-chart" dataset="bind:Variables.stvMonthlySales.dataSet" xaxisdatakey="x" yaxisdatakey="Profit,Revenue,Sales"></wm-chart>
```

- Column Chart

```javascript
<wm-chart type="Column" name="columnChart" title="Column Chart" height="250px" iconclass="wi wi-bar-chart" dataset="bind:Variables.stvMonthlySales.dataSet" xaxisdatakey="x" yaxisdatakey="Profit,Revenue,Sales"></wm-chart>
```


### Use Cases

- Compare monthly sales, revenue, and profit across different product categories.
- Monitor inventory levels across warehouses or product lines.
- Display survey results or poll responses by category.
- Track employee performance metrics or team KPIs over time.