# Styling

The page-dialog component inherits styling from its base dialog implementation but with page-like presentation. The following CSS classes can be used to customize its appearance:

- `.app-page-dialog`: The main container class for the page-dialog component
- `.app-page-dialog-content`: Applied to the content area of the page-dialog

Custom styling can be applied to match your application's design requirements:

```css
.app-page-dialog {
    max-width: 80vw;
    border-radius: 8px;
}

.app-page-dialog-content {
    padding: 20px;
    font-family: Arial, sans-serif;
}
```

When using a prefab, styling would typically be defined within the prefab itself, though container styles from the page-dialog component will still apply.