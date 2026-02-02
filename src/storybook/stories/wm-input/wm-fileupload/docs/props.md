# Properties

<details open>
  <summary>Basic</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `caption` | string | - | The caption is the text that the end user sees on your fileupload. It can be bound to a variable or another component. |
        | `name` | string | - | A unique identifier for the fileupload component. Special characters and spaces are not allowed. |
    </div>
</details>

<details>
  <summary>Accessibility</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `tabindex` | number | 0 | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for component access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable. NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
        | `arialabel` | string | - | Accessibility label for screen readers |
        | `hint` | string | - | Any text you enter for this property will be shown as a tooltip if the mouse hovers over this component for 1.5 seconds. |
    </div>
</details>

<details>
  <summary>Layout</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `width` | string | - | The width of the component can be specified in em, pt, px or % (i.e 50px, 75%). |
        | `height` | string | - | The height of the component can be specified in em, pt, px or % (i.e 50px, 75%). |
    </div>
</details>

<details>
  <summary>Behavior</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `multiple` | boolean | false | Enable/Disable to switch between Multiple/Single File Upload Component. |
        | `fileUploadMessage` | string | - | Message text for file upload while in multi-select mode. |
        | `show` | boolean | true | Showing determines whether or not a component is visible. It is a bindable property. |
        | `loadOnDemand` | boolean | false | When this property is set and show property is bound, the initialization of the component will be deferred till the component becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the component through script until the component is initialized). When show property is not bound the component will be initialized immediately. |
        | `disabled` | boolean | false | If the disabled property is true (checked) the component becomes display-only and user input will not be accepted. It can also set programmatically by binding it to a boolean type variable. |
        | `contenttype` | string | - | (Allowed File Extensions) Select the default filter file type in file choose option. It can be bindable to a string having comma separated extensions. Example: '.pdf, .doc, .gif'. |
        | `maxfilesize` | number | 1 | If the max file size is set, file upload will restrict the files more than max file size. Default Max file size is 1MB, it can be set up to 50MB. |
    </div>
</details>

<details>
  <summary>Graphics</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `iconclass` | string | - | This property defines the class of the icon that is applied to the button. By default, it is set to wi wi-file-upload |
    </div>
</details>

<details>
  <summary>Format</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `horizontalalign` | string | - | This property specifies how the elements should be aligned horizontally. |
    </div>
</details>