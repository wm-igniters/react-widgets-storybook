# Overview

The  **Container** component is a layout box used to group and organize content. It allows users to place UI components or include partial pages inside it. The container helps manage layout, styling, and structure for its child elements.

### Markup

```javascript
<wm-container name="container" direction="row" alignment="top-left" gap="4" width="fill" class="app-container-default"
variant="default"></wm-container>
```

### Examples

#### Properties

- The container has a configurable show property which determines whether the component is visible to the user. It can be set in the markup or dynamically via script.

```javascript
<wm-container show="true" name="container"></wm-container>
```

```javascript
// Setting show = true makes the container visible to the user.
Page.Widgets.container.show = true;
```

- The container has a configurable content property which determines the partial page loaded inside it. It can be set in the markup or dynamically via script.

```javascript
<wm-container content="partialUserDetails" name="container"></wm-container>
```

```javascript
// Setting content loads the specified partial page inside the container.
Page.Widgets.container.content = "partialUserDetails";
```

#### Events

- This is the markup for a container with an on-load event, executed when the container finishes loading its content.

```javascript
<wm-container on-load="containerLoad(widget)" name="container"></wm-container>
```

```javascript
Page.containerLoad = function (widget) {
  // Only works when container content is mapped to partial
  Page.Widgets.label.caption = "Partial Container Loaded Successfully";
};
```