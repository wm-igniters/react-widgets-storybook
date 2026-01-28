# Styling

The Wizard component can be styled using CSS classes and custom styles. You can apply styles to the overall wizard container, step headers, step content, and navigation buttons.

## Common CSS Classes

| CSS Class | Description |
|-----------|-------------|
| `.app-wizard` | Main container class for the wizard component |
| `.wizard-header` | Container for the wizard step headers |
| `.wizard-step` | Individual step header elements |
| `.active-step` | Currently active step |
| `.completed-step` | Steps that have been completed |
| `.wizard-content` | Container for the step content |
| `.wizard-actions` | Container for action buttons (next, previous, done, cancel) |

## Customizing Wizard Appearance

You can customize the appearance of the wizard by applying CSS classes through the `className` property or by adding custom styles. For example:

```css
/* Customize step headers */
.custom-wizard .wizard-step {
    background-color: #f0f0f0;
    border-radius: 4px;
    margin-right: 8px;
}

/* Style the active step */
.custom-wizard .active-step {
    background-color: #007bff;
    color: white;
}

/* Style completed steps */
.custom-wizard .completed-step {
    background-color: #28a745;
    color: white;
}

/* Customize action buttons */
.custom-wizard .wizard-actions button {
    margin: 0 5px;
    border-radius: 20px;
}
```

## Step-Specific Styling

You can apply specific styles to individual steps using the `stepClass` property or by targeting steps with specific indexes:

```css
/* Style the first step */
.app-wizard .wizard-content > div:first-child {
    background-color: #f8f9fa;
}

/* Apply padding to all step content */
.app-wizard .wizard-content > div {
    padding: 20px;
}
```

## Responsive Design

Ensure your wizard remains usable on different screen sizes by applying responsive styles:

```css
@media (max-width: 768px) {
    .app-wizard .wizard-header {
        flex-direction: column;
    }
    
    .app-wizard .wizard-step {
        margin-bottom: 10px;
        width: 100%;
    }
    
    .app-wizard .wizard-actions {
        flex-direction: column;
    }
    
    .app-wizard .wizard-actions button {
        margin-bottom: 10px;
        width: 100%;
    }
}
```