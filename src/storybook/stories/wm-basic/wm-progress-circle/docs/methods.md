# Methods

The Progress Circle widget can be accessed programmatically through the Page.Widgets namespace. While the Progress Circle doesn't expose specific methods beyond its properties and events, you can manipulate its state through property access.

```javascript
// Access the progress circle widget
var progressCircle = Page.Widgets.myProgressCircle;

// Update properties
progressCircle.value = 50;
progressCircle.type = 'warning';

// Example of animating the progress
function animateProgress(targetValue, duration) {
  var startValue = Page.Widgets.myProgressCircle.value;
  var startTime = null;
  
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = (timestamp - startTime) / duration;
    progress = Math.min(progress, 1);
    
    var currentValue = startValue + progress * (targetValue - startValue);
    Page.Widgets.myProgressCircle.value = currentValue;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  
  window.requestAnimationFrame(step);
}

// Usage: animate to 75% over 2 seconds
animateProgress(75, 2000);
```