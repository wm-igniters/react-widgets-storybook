# Overview

The **Cumulative Line Chart** component displays data as a continuously increasing line, making it easy to track totals or running sums over time. It supports customization of colors, legends, tooltips, and axis settings, ensuring clear visualization of accumulated metrics. Data can be bound from tables, variables, web services, live filters, or other sources, allowing dynamic updates as new values are added.

### Markup

```javascript
<wm-chart type="Cumulative Line" title="Cumulative Line Chart" height="250px" iconclass="wi wi-line-chart" name="cumulativeLineChart"></wm-chart>
```

### Examples

#### Properties 

- This cumulative line chart displays data as a continuous line showing cumulative values and supports configurable visual themes, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Cumulative Line" theme="Retro" name="cumulativeLineChart"></wm-chart>
```

```javascript
// Set the cumulative line chart's visual theme dynamically
Page.Widgets.cumulativeLineChart.theme = "Retro";
```

- This cumulative line chart displays data as a continuous line and supports configurable colors, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Cumulative Line" customcolors="#4CAF50, #2196F3, #FFC107" name="cumulativeLineChart"></wm-chart>
```

```javascript
// Set the cumulative line chart's colors dynamically
Page.Widgets.cumulativeLineChart.customcolors = "#4CAF50, #2196F3, #FFC107";
```

#### Events 

- This is the markup for the cumulative line chart on-beforerender event, executed during the chart initialization phase just before it is rendered on the page.

```javascript
<wm-chart type="Cumulative Line" on-beforerender="cumulativeLineChartBeforerender(widget, chartInstance)" name="cumulativeLineChart"></wm-chart>
```

```javascript
Page.cumulativeLineChartBeforerender = function (widget, chartInstance) {
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
  } else {
    chartInstance.interpolate("cardinal"); // Smooth curves
  }
};
```

#### Sample Cumulative Line Chart Dataset

- This is the markup for the Cumulative Line Chart component bound to a sample dataset, where each data object represents a category on the x-axis (for example, a month), and multiple numeric fields (A, B, C) are plotted cumulatively as lines on the y-axis.

```javascript
<wm-chart
  type="Cumulative Line"
  title="Cumulative Line Chart"
  height="250px"
  iconclass="wi wi-line-chart"
  name="cumulativeLineChart"
  dataset="bind:Variables.stvCumulativeLineChartData.dataSet"
  xaxisdatakey="x"
  yaxisdatakey="A,B,C"
></wm-chart>
```

```javascript
// Sample dataset for the Cumulative Line Chart component
let cumulativeLineChartData = [
  { "x": "Jan", "A": 50,  "B": 100, "C": 75  },
  { "x": "Feb", "A": 130, "B": 240, "C": 165 },
  { "x": "Mar", "A": 250, "B": 400, "C": 275 },
  { "x": "Apr", "A": 400, "B": 600, "C": 415 }
]
```