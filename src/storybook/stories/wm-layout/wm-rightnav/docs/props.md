# Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `columnwidth` | string | "" | Specifies the width of the right navigation panel. This can be defined using any valid CSS width value (px, %, em, rem, etc.) |

## Common Use Cases

### Setting Right Navigation Width

```javascript
// Set the width to a fixed pixel value
Page.Widgets.rightNavPanel.columnwidth = "250px";

// Set the width to a percentage of the parent container
Page.Widgets.rightNavPanel.columnwidth = "20%";

// Set the width dynamically based on screen size
if (window.innerWidth < 768) {
  Page.Widgets.rightNavPanel.columnwidth = "100%";
} else {
  Page.Widgets.rightNavPanel.columnwidth = "300px";
}
```

### Creating a Responsive Side Panel

```javascript
// Function to adjust rightnav width based on screen size
function adjustRightNavWidth() {
  var screenWidth = window.innerWidth;
  
  if (screenWidth < 576) {
    Page.Widgets.rightNavPanel.columnwidth = "100%";
  } else if (screenWidth < 992) {
    Page.Widgets.rightNavPanel.columnwidth = "30%";
  } else {
    Page.Widgets.rightNavPanel.columnwidth = "250px";
  }
}

// Call when page loads
adjustRightNavWidth();

// Add window resize listener
window.addEventListener('resize', adjustRightNavWidth);
```