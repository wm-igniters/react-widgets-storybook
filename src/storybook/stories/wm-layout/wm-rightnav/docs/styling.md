# Styling

The `rightnav` component can be styled using CSS. Here are some common styling approaches:

## CSS Classes

- `.app-rightnav` - The main container class for the rightnav component
- `.app-rightnav-content` - The inner content container

## Styling Examples

```css
/* Customize the rightnav background */
.app-rightnav {
  background-color: #f5f5f5;
  border-left: 1px solid #ddd;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
}

/* Style the content within the rightnav */
.app-rightnav-content {
  padding: 15px;
}

/* Add custom scrollbar for overflow content */
.app-rightnav {
  max-height: 100vh;
  overflow-y: auto;
  scrollbar-width: thin;
}

/* Responsive styling */
@media (max-width: 768px) {
  .app-rightnav {
    border-left: none;
    border-top: 1px solid #ddd;
  }
}
```

You can add custom classes to the component in the application's CSS files to override default styles or create specialized themes for different sections of your application.