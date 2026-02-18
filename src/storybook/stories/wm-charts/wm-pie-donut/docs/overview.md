# Overview

The **Pie** or **Donut** Chart component allows you to display data as a pie or donut, making it easy to visualize proportions and part-to-whole relationships. It supports customization of colors, legends, labels, and tooltips. Data can be bound from tables, variables, web services, live filters, or other sources, enabling dynamic visualization of distributions and comparisons for analysis and reporting.

### Markup

- Pie Chart

```javascript
<wm-chart type="Pie" title="Pie Chart" height="250px" iconclass="wi wi-pie-chart" name="pieChart"></wm-chart>
```

- Donut Chart

```javascript
<wm-chart type="Donut" title="Donut Chart" height="250px" iconclass="wi wi-donut-large" name="donutChart"></wm-chart>
```


### Examples

#### Properties 

- This pie chart displays data as slices of a circle, representing proportions of a whole, and supports configurable visual themes, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Pie" theme="Retro" name="pieChart"></wm-chart>
```

```javascript
// Set the pie chart's visual theme dynamically
Page.Widgets.pieChart.theme = "Retro";
```

- This donut chart displays data as slices of a ring, representing proportions of a whole, and supports configurable colors, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Donut" customcolors="#4CAF50, #2196F3, #FFC107" name="donutChart"></wm-chart>
```

```javascript
Page.Widgets.donutChart.customcolors = "#4CAF50, #2196F3, #FFC107";
```

#### Events 

- This is the markup for the pie chart on-beforerender event, executed during the chart initialization phase just before it is rendered on the page. The same event behavior applies to a donut chart, with differences only in the component name and chart type (i.e., type="Pie" with pieChartBeforerender vs type="Donut" with donutChartBeforerender).

```javascript
<wm-chart type="Pie" on-beforerender="pieChartBeforerender(widget, chartInstance)" name="pieChart"></wm-chart>
```

```javascript
Page.pieChartBeforerender = function (widget, chartInstance) {
  // Show the legend and set legend type to "classic"
  widget.legendtype = "classic";
  widget.showlegend = true;
};
```

#### Sample Pie or Donut Chart Dataset

- This is the markup for Pie and Donut Chart components bound to a sample dataset, where each data object represents a category (name) and its corresponding numeric value (value). The Donut Chart additionally supports a donutratio to adjust the size of the inner hole.

```javascript
<wm-chart
  type="Pie"
  title="Pie Chart"
  height="250px"
  iconclass="wi wi-pie-chart"
  name="pieChart"
  dataset="bind:Variables.stvPieDonutChartData.dataSet"
  xaxisdatakey="name"
  yaxisdatakey="value"
></wm-chart>
```

```javascript
<wm-chart
  type="Donut"
  title="Donut Chart"
  height="250px"
  iconclass="wi wi-donut-large"
  name="donutChart"
  dataset="bind:Variables.stvPieDonutChartData.dataSet"
  xaxisdatakey="name"
  yaxisdatakey="value"
  donutratio="0.7"
></wm-chart>
```

```javascript
// Sample dataset for Pie and Donut Chart components
let pieDonutChartData = [
  { "name": "Product A", "value": 400 },
  { "name": "Product B", "value": 300 },
  { "name": "Product C", "value": 200 },
  { "name": "Product D", "value": 278 },
  { "name": "Product E", "value": 189 }
]
```