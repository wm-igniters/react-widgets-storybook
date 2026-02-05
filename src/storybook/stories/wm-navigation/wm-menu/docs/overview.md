# Overview

A **Menu** is a navigation component that displays a group of related actions or links. Typically used in headers or toolbars, it appears as a drop-down when the user hovers over or clicks the trigger element, allowing easy access to related pages or actions.

### Markup

```javascript
<wm-menu caption="Menu" autoclose="outsideClick" name="menu"></wm-menu>
```

### Examples

#### Properties 

- Controls how the Menu is triggered (hover vs click).

```javascript
// Displays the menu when the user hovers over the trigger element
Page.Widgets.menu.showonhover = true;
```

- Sets the layout orientation of the Menu items.

```javascript
// Displays menu items in a vertical layout
Page.Widgets.menu.menulayout = "vertical";
```

#### Events 

- Triggered when a menu item is selected.

```javascript
Page.menuSelect = function ($event, widget, $item) {
    // Example: Application header menu with options like Profile, Settings, Logout

    if ($item.value === "profile") {
        // Navigate to user profile page
        App.Actions.goToPage_UserProfile.invoke();

    } else if ($item.value === "settings") {
        // Open settings dialog
        Page.Widgets.settingsDialog.open();

    } else if ($item.value === "logout") {
        // Perform logout action
        App.Variables.logoutUser.invoke();
    }
};
```