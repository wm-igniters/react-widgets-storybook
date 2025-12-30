# Styling

The iframe component can be styled using both the `className` and `styles` props. Here are some approaches to customizing its appearance:

## Using className

Apply custom CSS classes to style the iframe container:

```css
.custom-iframe {
  border: 2px solid #3498db;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}
```

Then apply this class:

```javascript
Page.Widgets.myIframe.className = "custom-iframe";
```

## Using Inline Styles

Apply styles directly to the iframe using the styles prop:

```javascript
Page.Widgets.myIframe.styles = {
  border: "none",
  backgroundColor: "#f5f5f5",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  borderRadius: "4px"
};
```

## Styling Considerations

- **Border Styling**: By default, iframes have a border. You can remove it with `border: none` or customize it with border properties.
- **Responsive Design**: Use percentage values for width to make the iframe responsive to its container.
- **Scrollbars**: Control iframe scrollbars using the `overflow` property in your CSS.
- **Content Visibility**: You cannot style the content inside the iframe unless it's from the same origin and you access it through JavaScript.

Remember that iframe styling is limited to the container itself. The content inside the iframe follows its own styling rules and may not be directly controllable from the parent application due to browser security restrictions.