# Overview

The **Bubble Chart** component is a powerful visualization tool that displays data as bubbles. Each bubble’s position represents two variables (X and Y), while its size represents a third variable, allowing you to visualize relationships between three dimensions of data at once. Data can be bound from tables, variables, web services, live filters etc. This makes it ideal for spotting patterns, correlations, and trends in complex datasets.

### Markup

```javascript
<wm-chart type="Bubble" title="Bubble Chart" height="250px" iconclass="wi wi-bubble-chart" name="bubbleChart"></wm-chart>
```

### Examples

#### Properties 

- This bubble chart displays data using bubbles to represent values and supports configurable visual themes, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Bubble" theme="Retro" name="bubbleChart"></wm-chart>
```

```javascript
// Set the bubble chart's visual theme dynamically
Page.Widgets.bubbleChart.theme = "Retro";
```

- This bubble chart displays data using bubbles and supports configurable colors, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Bubble" customcolors="#4CAF50, #2196F3" name="bubbleChart"></wm-chart>
```

```javascript
// Set the bubble chart's colors dynamically
Page.Widgets.bubbleChart.customcolors = "#4CAF50, #2196F3";
```

#### Events 

- This is the markup for the bubble chart on-beforerender event, executed during the chart initialization phase just before it is rendered on the page.

```javascript
<wm-chart type="Bubble" on-beforerender="bubbleChartBeforerender(widget, chartInstance)" name="bubbleChart"></wm-chart>
```

```javascript
Page.bubbleChartBeforerender = function (widget, chartInstance) {
  // widget is the WaveMaker instance of the Chart widget.

  // chartInstance is the underlying nvd3 chart object
  // You can customize its properties (axes, tooltips, values, shapes, etc.)
  // You can also replace it entirely with a new nvd3 chart if needed

  // change the shape of the bubbles before the chart is rendered
  chartInstance.pointShape("square");
};
```

```javascript
// Page.chartBeforerender = function (widget, chartInstance) {

//   chartInstance is the underlying nvd3 chart object that can be used to customize the chart by setting any properties supported 
//   by the nvd3 library. You can also return a new nvd3 chart object to replace the existing chart—this is useful when a chart type 
//   is not supported by default in WaveMaker but is available in nvd3. The newly created chart will then be rendered.

//   chartInstance = nv.models.discreteBarChart()
//   .x(function(d) {
//     return d.x
//     })
//   .y(function(d) {
//     return d.y
//     })
//    .showValues(true);
//    chartInstance
//         .xAxis.staggerLabels(true);
//    chartInstance.tooltip(true);

//    Assign the modified chartInstance back to the widget
//    widget.chart = chartInstance; 

//    Note: To set chart data, use the widget.setChartData method.
// };
```

#### Sample Bubble Chart Dataset

- This is the markup for the Bubble Chart component bound to a sample dataset, where each data object represents a category on the x-axis and multiple numeric fields (Product_A, Product_B) are plotted as bubbles on the y-axis.

```javascript
<wm-chart
  type="Bubble"
  title="Bubble Chart"
  height="250px"
  iconclass="wi wi-bubble-chart"
  name="bubbleChart"
  dataset="bind:Variables.stvBubbleChartData.dataSet"
  xaxisdatakey="x"
  yaxisdatakey="Product_A,Product_B"
></wm-chart>
```

```javascript
// Sample dataset for the Bubble Chart component
let bubbleChartData = [
  { "x": 0, "Product_A": 100, "Product_A_size": 400, "Product_B": 200, "Product_B_size": 600 },
  { "x": 1, "Product_A": 120, "Product_A_size": 500, "Product_B": 180, "Product_B_size": 400 },
  { "x": 2, "Product_A": 170, "Product_A_size": 450, "Product_B": 150, "Product_B_size": 550 },
  { "x": 3, "Product_A": 140, "Product_A_size": 350, "Product_B": 220, "Product_B_size": 650 },
  { "x": 4, "Product_A": 190, "Product_A_size": 550, "Product_B": 210, "Product_B_size": 500 }
]
```