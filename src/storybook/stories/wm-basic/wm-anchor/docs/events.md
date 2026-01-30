# Callback Events

<details open>
  <summary>Basic Events</summary>
    <div>
        | Event | Description |
        | --- | --- |
        | `onFocus` | This event handler is called each time your component is focused. |
        | `onBlur` | This event handler is called each time your focus leaves your component. |
    </div>
</details>

<details>
  <summary>Mouse Events</summary>
    <div>
        | Event | Description |
        | --- | --- |
        | `onClick` | This event handler is called whenever the click event is triggered on a component. |
        | `onDoubleClick` | This event handler is called whenever the double click event is triggered on a component. |
        | `onMouseEnter` | This event handler is called whenever the mouse enters the component. |
        | `onMouseLeave` | This event handler is called whenever the mouse leaves the component. |
    </div>
</details>

<details>
  <summary>Touch Events</summary>
    <div>
        | Event | Description |
        | --- | --- |
        | `onTap` | This event handler is called whenever the component is tapped. |
        | `onDoubleTap` | This event handler is called whenever the component is double tapped. |
    </div>
</details>

### Use Cases

- Triggered on anchor click to navigate to another page within the application.

```javascript
    Page.anchor1Click = function ($event, widget) {
    App.Actions.goToPage_Main.invoke();
};
```

- Triggered on anchor click to update the caption text dynamically.

```javascript
    Page.anchor1Click = function ($event, widget) {
    widget.caption = "Clicked";
};
```

- Triggered when the anchor receives keyboard focus (i.e via the Tab key)

```javascript
    Page.anchor1Focus = function ($event, widget) {
        console.log("Anchor is focused");
};
```