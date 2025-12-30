# Methods

The HTML component can be accessed in scripts through the Page.Widgets namespace (e.g., `Page.Widgets.myHtml`), however, it does not provide any specific methods beyond the standard properties listed in the Props section.

To manipulate the HTML component programmatically, you would typically use property assignments rather than method calls:

```javascript
// Example: Dynamically updating HTML content based on some condition
if (userProfile.isAdmin) {
  Page.Widgets.myHtml.content = "<div class='admin-panel'>Admin controls here...</div>";
} else {
  Page.Widgets.myHtml.content = "<div class='user-view'>Limited view...</div>";
}

// Example: Toggling visibility
Page.Widgets.myHtml.show = !Page.Widgets.myHtml.show;
```