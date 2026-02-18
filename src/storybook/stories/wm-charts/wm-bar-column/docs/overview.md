# Overview

The **Bar Chart** or **Column Chart** component allows you to display data as horizontal bars or vertical columns, making it easy to compare values across categories. It supports customization of colors, legends, tooltips, and axis settings, and data can be bound from tables, variables, web services, live filters etc. This enables dynamic visualization of trends, comparisons, and key metrics for analysis and reporting.

### Markup

- Bar Chart

```javascript
<wm-chart type="Bar" title="Bar Chart" height="250px" iconclass="wi wi-bar-chart" name="barChart"></wm-chart>
```

- Column Chart

```javascript
<wm-chart type="Column" title="Column Chart" height="250px" iconclass="wi wi-bar-chart" name="columnChart"></wm-chart>
```

### Examples

#### Properties 

- This bar chart displays data using horizontal bars and supports configurable visual themes, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Bar" theme="Retro" name="barChart"></wm-chart>
```

```javascript
// Set the bar chart's visual theme dynamically
Page.Widgets.barChart.theme = "Retro";
```

- This column chart represents data using vertical columns and supports configurable color schemes, which can be defined in the markup or updated dynamically via script.

```javascript
<wm-chart type="Column" customcolors="#4CAF50, #2196F3, #FFC107" name="columnChart"></wm-chart>
```

```javascript
// Set the column chart's custom colors dynamically
Page.Widgets.columnChart.customcolors = "#4CAF50, #2196F3, #FFC107";
```

#### Events 

- This is the markup for the bar chart on-select event, executed when a user selects a specific bar in the chart. The same event behavior applies to a column chart, with differences only in the component name and chart type (i.e., type="Bar" with barChartSelect vs type="Column" with columnChartSelect).

```javascript
<wm-chart type="Bar" on-select="barChartSelect($event, widget, selectedItem, selectedChartItem)" name="barChart"></wm-chart>
```

```javascript
Page.barChartSelect = function ($event, widget, selectedItem, selectedChartItem) {
  // selectedItem represents the full data object for the selected category
  // Example:
  // { x: 'Feb', Sales: 3000, Revenue: 1398, Profit: 2210 }

  // selectedChartItem represents chart-specific information for the selected bar
  // Example:
  // { x: 'Feb', y: 2210, key: 'Sales', series: 0, seriesIndex: 0, _dataObj: {...} }

  // Identify the selected category (for example, the month)
  const month = selectedItem.x;

  // Identify the selected metric (Sales / Revenue / Profit)
  const metric = selectedChartItem.key;

  // Retrieve the value of the selected bar
  const value = selectedChartItem.y;

  // Update the UI to display details based on the selected bar
  Page.Widgets.detailsLabel.caption = `${metric} for ${month}: ${value}`;

  // Display the details panel
  Page.Widgets.detailsPanel.show = true;
};
```

- This is the markup for the bar chart on-beforerender event, executed during the chart initialization phase just before it is rendered on the page. The same event behavior applies to a Column Chart, with differences only in the component name and chart type (i.e., type="Bar" with barChartBeforerender vs type="Column" with columnChartBeforerender).

```javascript
<wm-chart type="Bar" on-beforerender="barChartBeforerender(widget, chartInstance)" name="barChart"></wm-chart>
```

```javascript
Page.barChartBeforerender = function (widget, chartInstance) {
  // Apply conditional themes before the chart is rendered
  const chartMode = App.Variables.reportConfig.dataSet.chartMode;

  if (chartMode === "finance") {
    widget.theme = "Retro";
  } else if (chartMode === "sales") {
    widget.theme = "Azure";
  } else if (chartMode === "operations") {
    widget.theme = "Orient";
  }
};
```

#### Sample Bar or Column Chart Dataset

- This is the markup for Bar and Column Chart components bound to a sample dataset, where each data object represents a category on the x-axis (for example, a month) and multiple numeric fields (Sales, Revenue, and Profit) are plotted as individual bars or columns on the y-axis.

```javascript
<wm-chart
  type="Bar"
  title="Bar Chart"
  name="barChart"
  dataset="bind:Variables.stvBarColumnChartsData.dataSet"
  yaxisdatakey="Profit,Revenue,Sales"
  xaxisdatakey="x"
  height="250px"
  iconclass="wi wi-bar-chart"
></wm-chart>
```

```javascript
<wm-chart
  type="Column"
  title="Column Chart"
  name="columnChart"
  dataset="bind:Variables.stvBarColumnChartsData.dataSet"
  xaxisdatakey="x"
  yaxisdatakey="Profit,Revenue,Sales"
  height="250px"
  iconclass="wi wi-bar-chart"
></wm-chart>
```

```javascript
// Sample dataset for the Bar or Column charts component
let barColumnChartData = [
  { "x": "Jan", "Sales": 4000, "Revenue": 2400, "Profit": 2400 },
  { "x": "Feb", "Sales": 3000, "Revenue": 1398, "Profit": 2210 },
  { "x": "Mar", "Sales": 2000, "Revenue": 9800, "Profit": 2290 },
  { "x": "Apr", "Sales": 2780, "Revenue": 3908, "Profit": 2000 },
  { "x": "May", "Sales": 1890, "Revenue": 4800, "Profit": 2181 },
  { "x": "Jun", "Sales": 2390, "Revenue": 3800, "Profit": 2500 }
];
```