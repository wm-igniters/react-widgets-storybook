# Methods

The Header component does not have any specific methods defined in the provided component data. As a layout component, it may primarily serve as a container without built-in functional methods.

## Accessing the Component

If you need to access or manipulate the Header component in your scripts, you would typically use:

```javascript
// If using a reference
Page.Widgets.headerComponent

// Or with a ref in React-style components
const headerRef = useRef();
// Then in JSX: <Header ref={headerRef} />
```

## Common DOM Manipulation

Even without defined methods, you can manipulate the Header using DOM operations:

```javascript
// Example: Changing header visibility based on scroll position
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    Page.Widgets.headerComponent.element.classList.add('compact');
  } else {
    Page.Widgets.headerComponent.element.classList.remove('compact');
  }
});
```