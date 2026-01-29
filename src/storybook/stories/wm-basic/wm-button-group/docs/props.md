# Props

| Property | Type | Default | Description |
|---------|------|---------|-------------|
| **name** | string | - | A unique identifier for the Button Group. Special characters and spaces are not allowed. |
| **vertical** | boolean | false | Determines if the buttons should be arranged vertically (true) or horizontally (false). |
| **show** | boolean | true | Controls the visibility of the component. This is a bindable property. |
| **horizontalalign** | string | 'left' | Specifies how the buttons should be aligned horizontally. Possible values include 'left', 'center', and 'right'. |
| **children** | React.ReactNode | - | The buttons to be included in the button group. |
| **width** | string | - | The width of the widget, specified in em, pt, px or % (e.g., '50px', '75%'). |

### Common Use Cases

```javascript
// Creating a media player control group
<ButtonGroup name="mediaControls" horizontalalign="center">
  <Button name="playButton" iconclass="wi wi-play" />
  <Button name="pauseButton" iconclass="wi wi-pause" />
  <Button name="stopButton" iconclass="wi wi-stop" />
</ButtonGroup>

// Creating a vertical navigation menu
<ButtonGroup name="navMenu" vertical={true}>
  <Button name="homeButton" caption="Home" />
  <Button name="productsButton" caption="Products" />
  <Button name="aboutButton" caption="About" />
  <Button name="contactButton" caption="Contact" />
</ButtonGroup>
```