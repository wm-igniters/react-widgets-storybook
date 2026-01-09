# React Widgets Storybook

This project showcases React components for WaveMaker with interactive documentation and design token management.

## Table of Contents

- [Getting Started](#getting-started)
- [Design Token System](#design-token-system)
- [Development Setup](#development-setup)
- [Yalc Setup](#yalc-setup)

---

## Getting Started

### Installation

```bash
npm install
```

### Running Storybook

```bash
npm run storybook
```

Opens Storybook at [http://localhost:6006](http://localhost:6006)

---

## Design Token System

This project includes a comprehensive design token system for managing and previewing component styles in real-time.

### Quick Start

1. **View Design Tokens**: Navigate to any component story with the "DesignToken" variant
2. **Open Panel**: Click the "Design Tokens" tab at the bottom of Storybook
3. **Edit Tokens**: Modify any token value to see real-time changes
4. **Switch Variants**: Change className in Controls to preview different appearances

### Documentation

- **[Complete Implementation Guide](./Design_Token_Implementation.md)** - Comprehensive guide covering:
  - Architecture and data flow
  - Component categories and patterns
  - JSON structure and property types
  - Creating design token stories
  - Edge cases and troubleshooting

### Key Features

- ✅ **Real-time Editing** - See token changes instantly
- ✅ **Variant Management** - Support for appearances and multi-dimensional variants
- ✅ **Runtime CSS Extraction** - Automatically extracts values from foundation.css
- ✅ **Universal Approach** - Works with all component types automatically
- ✅ **Nested Tokens** - Handles complex structures like `body.padding`, `footer.border.color`
- ✅ **State Support** - Hover, focus, active, disabled, checked states

### Creating a Design Token Story

```tsx
import componentTokensData from "../../../../designTokens/components/component/component.json";

export const DesignToken: Story = {
  tags: ['show-panel'],
  args: {
    name: "designTokenComponent",
    listener: mockListener,
    "data-design-token-target": "true"
  },
  argTypes: {
    "data-design-token-target": { control: false }
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: componentTokensData,
      componentKey: "component",
      extractCSSVariablesAtRuntime: true,
    },
  },
};
```

For detailed implementation patterns, JSON structure, and troubleshooting, see [Design_Token_Implementation.md](./Design_Token_Implementation.md).

---

## Development Setup

### Project Structure

```
.storybook/
├── addons/
│   └── design-tokens/         # Design token system
│       ├── DesignTokenPanel.tsx
│       ├── tokenParser.ts
│       ├── cssVariableExtractor.ts
│       └── types.ts
src/
├── components/                # React components
│   ├── basic/
│   ├── form/
│   ├── container/
│   └── ...
├── designTokens/              # Design token JSON files
│   └── components/
│       ├── button/
│       ├── card/
│       └── ...
└── storybook/stories/         # Storybook stories
    ├── wm-basic/
    ├── wm-form/
    └── ...
```

### Component Categories

- **Basic** - Simple components (Label, Icon, Picture, Spinner)
- **Form** - Form controls (Button, Checkbox, Radio, Input)
- **Container** - Layout components (Card, Accordion, Panel, List)
- **Advanced** - Complex components (Carousel, Wizard, DataTable)

---

## Yalc Setup

This project uses Yalc for local development of the `@wavemaker/react-runtime` package.

### Prerequisites

- Node.js and npm installed
- Yalc installed globally:
  ```bash
  npm install -g yalc
  ```

### Steps to Publish the Package to Yalc

1. Go to the directory where @wavemaker/react-runtime is developed:
   ```bash
   yalc publish --private
   ```

2. Verify the Package is Published:
   ```bash
   cd /Users/your-username/.yalc/packages/@wavemaker/react-runtime
   ```
