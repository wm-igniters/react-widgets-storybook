# Overview

The **Line Chart** or **Area Chart** component allows you to display data as a line or an area, making it easy to visualize trends and changes over time. It supports customization of colors, legends, tooltips, and axis settings. Data can be bound from tables, variables, web services, live filters, or other sources, enabling dynamic visualization of trends, comparisons, and key metrics for analysis and reporting.

### Markup

- Line Chart

```javascript
<wm-chart type="Line" title="Line Chart" height="250px" iconclass="wi wi-line-chart" name="lineChart"></wm-chart>
```

- Area Chart

```javascript
<wm-chart type="Area" title="Area Chart" height="250px" iconclass="fa fa-area-chart" name="areaChart"></wm-chart>
```

### Examples

#### Properties 

- This line chart displays data as points connected by lines and supports configurable visual themes, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Line" theme="Retro" name="lineChart"></wm-chart>
```

```javascript
// Set the line chart's visual theme dynamically
Page.Widgets.lineChart.theme = "Retro";
```

- This area chart displays data as a filled area under the line and supports configurable colors, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Area" customcolors="#4CAF50, #2196F3, #FFC107" name="areaChart"></wm-chart>
```

```javascript
Page.Widgets.areaChart.customcolors = "#4CAF50, #2196F3, #FFC107";
```

#### Events 

- This is the markup for the line chart on-beforerender event, executed during the chart initialization phase just before it is rendered on the page. The same event behavior applies to an area chart, with differences only in the component name and chart type (i.e., type="Line" with lineChartBeforerender vs type="Area" with areaChartBeforerender).

```javascript
<wm-chart type="Line" on-beforerender="lineChartBeforerender(widget, chartInstance)" name="lineChart"></wm-chart>
```

```javascript
Page.lineChartBeforerender = function (widget, chartInstance) {
  // widget is the WaveMaker instance of the Chart widget.

  // chartInstance is the underlying nvd3 chart object
  // You can customize its properties (axes, tooltips, values, line style, etc.)
  // You can also replace it entirely with a new nvd3 chart if needed

  // Set line interpolation based on a configuration variable
  const chartMode = App.Variables.reportConfig.dataSet.lineStyle; // "linear", "step", "cardinal"

  if (chartMode === "linear") {
    chartInstance.interpolate("linear"); // Smooth straight lines
  } else if (chartMode === "step") {
    chartInstance.interpolate("step"); // Step-like progression
  } else if (chartMode === "cardinal") {
    chartInstance.interpolate("cardinal"); // Smooth curves
  }
};
```

#### Sample Line or Area Chart Dataset

- This is the markup for Line and Area Chart components bound to a sample dataset, where each data object represents a category on the x-axis (for example, a month) and multiple numeric fields (Sales, Revenue, Profit) are plotted as lines or areas on the y-axis.

```javascript
<wm-chart
  type="Line"
  title="Line Chart"
  height="250px"
  iconclass="wi wi-line-chart"
  name="lineChart"
  dataset="bind:Variables.stvLineAreaChartData.dataSet"
  xaxisdatakey="x"
  yaxisdatakey="Profit,Revenue,Sales"
  interpolation="cardinal"
></wm-chart>
```

```javascript
<wm-chart
  type="Area"
  title="Area Chart"
  height="250px"
  iconclass="fa fa-area-chart"
  name="areaChart"
  dataset="bind:Variables.stvLineAreaChartData.dataSet"
  xaxisdatakey="x"
  yaxisdatakey="Profit,Revenue,Sales"
  interpolation="linear"
  areaviewtype="stack"
></wm-chart>
```

```javascript
// Sample dataset for the Line and Area Chart components
let lineAreaChartData = [
  { "x": "Jan", "Sales": 4000, "Revenue": 2400, "Profit": 2400 },
  { "x": "Feb", "Sales": 3000, "Revenue": 1398, "Profit": 2210 },
  { "x": "Mar", "Sales": 2000, "Revenue": 9800, "Profit": 2290 },
  { "x": "Apr", "Sales": 2780, "Revenue": 3908, "Profit": 2000 },
  { "x": "May", "Sales": 1890, "Revenue": 4800, "Profit": 2181 },
  { "x": "Jun", "Sales": 2390, "Revenue": 3800, "Profit": 2500 }
];
```