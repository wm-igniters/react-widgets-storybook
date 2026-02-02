# Properties

<details open>
  <summary>Basic</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `name` | string | - | A unique identifier for the composite component. Special characters and spaces are not allowed. |
    </div>
</details>

<details>
  <summary>Layout</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `width` | string | - | The width of the component can be specified in em, pt, px or % (i.e 50px, 75%). |
        | `height` | string | "auto" | The height of the component can be specified in em, pt, px or % (i.e 50px, 75%). |
    </div>
</details>

<details>
  <summary>Validation</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `required` | boolean | false | A required editor in wm.LiveForm may refuse to save without a required field. |
    </div>
</details>


<details>
  <summary>Behavior</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `show` | boolean | true | Showing determines whether or not a component is visible. It is a bindable property. |
        | `loadOnDemand` | boolean | false | When this property is set and show property is bound, the initialization of the component will be deferred till the component becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the component through script until the component is initialized). When show property is not bound the component will be initialized immediately. |
    </div>
</details>

<details>
  <summary>Caption</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `captionposition` | string | - | This property determines where your caption appears with respect to the edit field. It is up to you to insure that there is sufficient height or width for the caption to fit in the selected position. |
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