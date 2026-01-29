# Styling

The Nav component can be styled using standard CSS classes. The component provides two primary ways to apply custom styling:

1. Using the `class` property to style the overall navigation container
2. Using the `itemclass` property to style individual navigation items

## Core Classes

While specific CSS classes aren't listed in the component data, the Nav component typically uses the following class structure:

- `.app-nav` - The base container class
- `.app-nav-horizontal` / `.app-nav-vertical` - Applied based on the layout property
- `.app-nav-item` - Applied to individual navigation items
- `.app-nav-item-active` - Applied to the currently active navigation item
- `.app-nav-item-with-children` - Applied to items that have child navigation items
- `.app-nav-children` - Container for child navigation items

## Example Styling

### Custom Container Styling

```css
.custom-nav {
    background-color: #2c3e50;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
```

### Custom Item Styling

```css
.custom-nav-item {
    padding: 10px 15px;
    color: white;
    transition: background-color 0.3s ease;
}

.custom-nav-item:hover {
    background-color: #34495e;
}
```

### Active Item Styling

```css
.custom-nav-item-active {
    background-color: #3498db;
    font-weight: bold;
}
```

### Badge Styling

```css
.custom-nav-badge {
    background-color: #e74c3c;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    margin-left: 5px;
}
```

These classes can be applied to the Nav component using the `class` and `itemclass` properties, allowing for comprehensive styling customization.