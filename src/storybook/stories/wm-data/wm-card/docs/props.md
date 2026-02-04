# Properties

<details open>
  <summary>Basic</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `title` | string | - | Set the title of the component. |
        | `subheading` | string | - | Set the sub heading of the component. |
        | `name` | string | - | A unique identifier for the card component. Special characters and spaces are not allowed. |
    </div>
</details>

<details>
  <summary>Picture</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `imageheight` | string | "200px" | This property allows you to set the height of the picture. |
        | `picturesource` | string | - | This property specifies the source for the picture, it is bindable. |
        | `picturetitle` | string | - | This bindable property specifies the title on the picture. |
    </div>
</details>

<details>
  <summary>Layout</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `width` | string | - | The width of the component can be specified in em, pt, px or % (i.e 50px, 75%). |
        | `height` | string | "250px" | The height of the component can be specified in em, pt, px or % (i.e 50px, 75%). |
    </div>
</details>

<details>
  <summary>Actions</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `actions` | array | - | This property sets the actions for the component. To set the data and events see menu component. |
        | `itemlabel` | string | - | The label for menu items can be bound to a field from a dataset value variable when using the Actions Menu. |
        | `itemicon` | string | - | The icon for menu items can be bound to a field from a dataset value variable when using the Actions Menu. |
        | `itemlink` | string | - | The link for menu items can be bound to a field from a dataset value variable when using the Actions Menu. **Note**: item link has priority over onSelect actions i.e. when the link is selected the onSelect actions won't get executed. |
        | `itemaction` | string | - | Task for menu items generated dynamically. This is the action that will be triggered when the user clicks on the Menu Item. |
        | `userrole` | string | - | Role for menu items generated dynamically. You can assign a property to 'userrole' which contains comma separated user roles. Each item will be evaluated with given 'userrole' for that item to that of the logged in user roles, from security. If any of the user roles bound to 'userrole' property matches then that menu item will be shown else will be hidden. |
        | `subactions` | string | - | When a menu component is required the sub-items can be mentioned in the children. It can be bound to a variable or set to a field from the dataset value variable. |
        | `isactive` | boolean | - | Boolean field to determine if the item should be shown as selected |
    </div>
</details>

<details>
  <summary>Behavior</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `show` | boolean | true | Showing determines whether or not a component is visible. It is a bindable property. |
        | `loadOnDemand` | boolean | false | When this property is set and show property is bound, the initialization of the component will be deferred till the component becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the component through script until the component is initialized). When show property is not bound the component will be initialized immediately. |
        | `animation` | string | - | This property controls the animation of an component. The animation is based on the CSS classes and works only in the run mode. |
    </div>
</details>

<details>
  <summary>Graphics</summary>
    <div>
        | Property | Type | Default | Description |
        | --- | --- | --- | --- |
        | `iconclass` | string | - | This property defines the class of the icon that is applied to the button. |
        | `iconurl` | string | - | This optional property allows you to add an icon to the left side of your button. User can give url of the image. |
    </div>
</details>