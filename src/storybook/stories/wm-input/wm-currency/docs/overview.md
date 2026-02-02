# Overview

**Currency** component is a special text component to input the currency type data. This component will change the display format based on the currency type.

### Markup

```javascript
<wm-currency textalign="right" name="currency"></wm-currency>
```

### Examples

#### Properties

- Configures the currency component to use Indian Rupees (INR), including the currency code and symbol.

```javascript
Page.Widgets.currency.currency = "INR";
Page.Widgets.currency.currencyCode = "INR";
Page.Widgets.currency.currencySymbol = "₹";
```

- Sets the default value of the currency component and enables financial input mode. This formats the value with thousands separators and decimal precision.

```javascript
// Output displayed: 8,976.25
Page.Widgets.currency.datavalue = 8976.25;
Page.Widgets.currency.inputmode = "financial"
```

#### Events

- Triggered whenever the currency component’s value changes.

```javascript
Page.currencyChange = function ($event, widget, newVal, oldVal) {
  // Example: Recalculate tax (18%) and update total amount
  const tax = newVal * 0.18;
  Page.Variables.totalAmount.dataSet.dataValue = newVal + tax;
};
```
