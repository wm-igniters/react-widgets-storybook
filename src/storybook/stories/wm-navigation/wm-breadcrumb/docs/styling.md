# Styling

The Breadcrumb component can be styled using CSS classes to customize its appearance. While the component doesn't expose specific styling properties, you can target its elements through CSS selectors.

## Common CSS Classes

| CSS Class | Purpose |
|-----------|----------|
| `.breadcrumb-container` | The main container for the breadcrumb component |
| `.breadcrumb-item` | Individual breadcrumb items/links |
| `.breadcrumb-separator` | The separator between breadcrumb items |
| `.breadcrumb-item.active` | The current/active breadcrumb item |

## Styling Examples

```css
/* Customize breadcrumb container */
.breadcrumb-container {
  background-color: #f8f9fa;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 20px;
}

/* Style breadcrumb items */
.breadcrumb-item {
  color: #007bff;
  font-weight: normal;
}

/* Style the active/current item */
.breadcrumb-item.active {
  color: #6c757d;
  font-weight: bold;
}

/* Customize separators */
.breadcrumb-separator {
  color: #6c757d;
  margin: 0 8px;
}

/* Add hover effect to clickable items */
.breadcrumb-item:not(.active):hover {
  text-decoration: underline;
  color: #0056b3;
}
```

You can apply custom styles by adding a CSS class to your application's style sheet or by using the application's theming capabilities.