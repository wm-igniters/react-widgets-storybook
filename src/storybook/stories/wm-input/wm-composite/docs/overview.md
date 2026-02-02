# Overview

The **Composite** component is used to manage the caption position and alignment for form input components such as text, select fields etc.

### Markup

```javascript
<wm-composite name="composite" captionposition="left" horizontalalign="left">
  <wm-label
    class="col-md-3 control-label p"
    notag="true"
    name="label"
    variant="default:p"
  ></wm-label>
  <wm-container
    class="col-md-9 app-container-default"
    name="container"
    variant="default"
  >
    <wm-text name="text"></wm-text>
  </wm-container>
</wm-composite>;
```

### Examples

#### Properties

- Sets the caption position for a text input within a Composite component.

```javascript
Page.Widgets.composite.captionposition = "top";
```