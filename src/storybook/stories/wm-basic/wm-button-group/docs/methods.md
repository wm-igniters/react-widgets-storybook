# Methods

The Button Group component doesn't have specific methods beyond those provided by the base component class. Individual buttons within the group have their own methods.

To access the Button Group in script:

```javascript
// Toggle visibility of the button group
Page.Widgets.myButtonGroup.show = !Page.Widgets.myButtonGroup.show;

// Change alignment
Page.Widgets.myButtonGroup.horizontalalign = "center";

// Switch between vertical and horizontal arrangement
Page.Widgets.myButtonGroup.vertical = !Page.Widgets.myButtonGroup.vertical;
```

For methods specific to the buttons within the group, refer to the Button component documentation.