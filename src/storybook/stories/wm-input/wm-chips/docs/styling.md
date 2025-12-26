# Styling

The Chips component can be customized through various style properties and custom classes.

## Custom Classes

| Class Name | Description |
| --- | --- |
| chip-item-class-name | Applied to individual chip items. Can be set conditionally using expressions. |

## Style Customization

The appearance of chips can be customized using:

1. **Color Schemes**: Apply different background colors to categorize chips
2. **Icons**: Use leftIconClass and rightIconClass to add visual cues
3. **Badges**: Add leftBadge and rightBadge for additional information
4. **Selection Indicators**: Use selectedIconClass to highlight selected items

## Example: Conditional Styling

You can apply different styles to chips based on their values:

```javascript
// In the Style tab, chip-item-class-name can be bound to an expression
// Example: Apply different styles based on category
bind: item.value.category === 'Programming' ? 'programming-chip' : 'other-chip'
```

This will check if the chip's category is 'Programming' and applies the 'programming-chip' class, otherwise applies 'other-chip' class.

:::note
Here "item" represents the chip object in the expression context.
:::