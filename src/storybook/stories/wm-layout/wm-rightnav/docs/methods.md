# Methods

The `rightnav` component can be accessed in script via `Page.Widgets.widgetName` syntax, but it does not expose any specific methods beyond the standard DOM manipulation techniques.

You can interact with the component using standard JavaScript DOM methods:

```javascript
// Example: Hide the right navigation panel
Page.Widgets.rightNavPanel.element.style.display = 'none';

// Example: Toggle visibility
function toggleRightNav() {
  var rightNav = Page.Widgets.rightNavPanel.element;
  if (rightNav.style.display === 'none') {
    rightNav.style.display = 'block';
  } else {
    rightNav.style.display = 'none';
  }
}
```