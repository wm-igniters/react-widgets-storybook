# Methods

The iframe component can be accessed in scripts using `Page.Widgets.widgetName` syntax, but it doesn't expose any specific methods beyond standard property access and modification.

To interact with an iframe programmatically, you would typically modify its properties:

```javascript
// Change the source URL
Page.Widgets.myIframe.iframesrc = "https://newurl.com";

// Adjust dimensions dynamically
Page.Widgets.myIframe.width = window.innerWidth * 0.8;
Page.Widgets.myIframe.height = 600;
```

For direct interaction with the iframe content, you would need to access the DOM element and then use standard iframe DOM methods, being mindful of same-origin policy restrictions:

```javascript
// Get reference to iframe DOM element (only works if same-origin content)
try {
  const iframeElement = document.getElementById(Page.Widgets.myIframe.id);
  const iframeDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;
  
  // Now you can interact with the iframe's document if same-origin policy allows
  console.log("Iframe title:", iframeDoc.title);
} catch (e) {
  console.log("Cannot access iframe content due to same-origin policy");
}
```