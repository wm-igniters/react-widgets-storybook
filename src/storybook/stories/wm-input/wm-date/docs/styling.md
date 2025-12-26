# Styling

The Date component in WaveMaker Mobile uses React Native styling. Unlike web components, styling is applied through style objects rather than CSS classes.

The Date component styling is primarily controlled through the application's theme settings. For custom styling, you can use the following approaches:

## Style Properties

Style properties can be configured in the Properties panel:

- **Width**: Set the component width in px or %
- **Layout**: Control how the component fits within its parent container

## Theme Customization

For more extensive styling, modify the application theme variables related to inputs and date pickers:

- Primary color affects the selection highlight
- Font settings control the text appearance
- Border styles define the input field boundaries

## Advanced Styling

For advanced styling needs, you can extend the component styling through custom themes or by applying custom styles in the application's style configuration.

Note that unlike web components, React Native components cannot be styled with conventional CSS classes. Instead, they use a styling system based on JavaScript objects with properties similar to CSS, but with some differences in naming conventions (camelCase instead of kebab-case) and available properties.