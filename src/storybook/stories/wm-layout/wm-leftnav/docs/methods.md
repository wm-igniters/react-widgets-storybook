# Methods

The LeftNav component can be accessed programmatically through the Page.Widgets API using the syntax:

```javascript
Page.Widgets.leftNavName
```

Where `leftNavName` is the name given to your LeftNav component instance.

Currently, this component does not expose specific methods beyond the standard properties and events. However, you can still manipulate its behavior by setting properties directly:

```javascript
// Change the column width dynamically
Page.Widgets.leftNav.columnwidth = newWidth;

// Update the navigation height
Page.Widgets.leftNav.navheight = newHeight;
```