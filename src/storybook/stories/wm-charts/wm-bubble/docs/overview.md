# Overview

The **Bubble Chart** component is a powerful visualization tool that displays data as bubbles on a two-dimensional chart. Each bubble’s position represents two variables (X and Y), while its size represents a third variable, allowing you to visualize relationships between three dimensions of data at once. This makes it ideal for spotting patterns, correlations, and trends in complex datasets.

### Markup

```javascript
<wm-chart type="Bubble" name="bubbleChart" title="Bubble Chart" height="250px" iconclass="wi wi-bubble-chart" dataset="bind:Variables.stvProductData.dataSet" xaxisdatakey="x" yaxisdatakey="Product_A,Product_B"></wm-chart>
```

### Use Cases

- Compare multiple products by revenue (Y-axis), units sold (X-axis), and profit margin (bubble size).
- Track stock performance by price (X), volume (Y), and market capitalization (bubble size).
- Visualize patients by age (X), blood pressure (Y), and BMI or risk factor (bubble size).