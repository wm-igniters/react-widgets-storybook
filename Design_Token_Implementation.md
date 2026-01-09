# Design Token Implementation Guide

**Complete guide to implementing and understanding the Design Token system in react-widgets-storybook**

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Component Categories](#component-categories)
4. [Design Token JSON Structure](#design-token-json-structure)
5. [Implementation Patterns](#implementation-patterns)
6. [Creating Design Token Stories](#creating-design-token-stories)
7. [Edge Cases and Special Handling](#edge-cases-and-special-handling)
8. [Universal System Components](#universal-system-components)
9. [Testing and Verification](#testing-and-verification)
10. [Troubleshooting](#troubleshooting)

---

## Overview

The Design Token system provides a standardized way to manage and preview design tokens for React components in Storybook. It enables:

- **Real-time token editing** - Modify design tokens and see changes instantly
- **Variant management** - Support for multiple appearances and variants
- **Runtime CSS extraction** - Automatically extract values from foundation.css
- **Universal approach** - Works with all component types automatically

### Key Features

- ✅ **Automatic property mapping** - Dynamically applies all CSS properties from tokens
- ✅ **Nested token support** - Handles complex structures like `body.padding`, `footer.border.color`
- ✅ **State handling** - Supports hover, focus, active, disabled, checked states
- ✅ **Child selectors** - Manages icon, badge, text, image child elements
- ✅ **Variant system** - Handles appearances and multi-dimensional variants
- ✅ **Runtime value resolution** - Extracts values from foundation.css at runtime

---

## Architecture

### System Components

```
.storybook/addons/design-tokens/
├── DesignTokenPanel.tsx       # Main UI panel & CSS generator
├── tokenParser.ts             # JSON parser & token resolver
├── cssVariableExtractor.ts    # Runtime CSS variable extraction
└── types.ts                   # TypeScript interfaces

src/designTokens/components/
└── [component-name]/
    └── [component-name].json  # Design token definitions
```

### Data Flow

```
1. Story loads → componentKey + tokenData passed to parameters
2. TokenParser parses JSON → extracts base tokens + variants
3. CSSVariableExtractor → resolves token references from foundation.css
4. DesignTokenPanel renders → displays editable token controls
5. User changes token → generates CSS with high specificity
6. CSS injected → component updates in real-time
```

---

## Component Categories

### Category A: Simple Components (Direct Mapping)

**Examples**: Label, Icon, Picture, Spinner, Message

**Characteristics**:
- Single element or simple wrapper
- Can spread props directly
- Minimal or no state handling
- 5-10 tokens

**Design Token Needs**:
```json
{
  "component": {
    "mapping": {
      "color": { "value": "{color.primary.@.value}" },
      "font-size": { "value": "{label.large.font-size.value}" },
      "background": { "value": "{color.surface.@.value}" }
    }
  }
}
```

### Category B: Interactive Components (State Management)

**Examples**: Button, Anchor, Checkbox, Radio, Switch

**Characteristics**:
- Form elements or clickable components
- State layers (hover, focus, active, disabled)
- Child selectors (icons, badges)
- 20-30 tokens

**Design Token Needs**:
```json
{
  "btn": {
    "meta": {
      "mapping": {
        "selector": { "web": ".app-button" },
        "childSelectors": {
          "text": ".btn-caption",
          "icon": ".app-icon,i[class*='fa-']"
        },
        "states": {
          "hover": { "selector": { "web": ":hover" } },
          "focus": { "selector": { "web": ":focus" } },
          "active": { "selector": { "web": ":active" } },
          "disabled": { "selector": { "web": "[disabled]" } }
        }
      }
    },
    "mapping": {
      "background": { "value": "{color.primary.@.value}" },
      "color": { "value": "{color.on-primary.@.value}" },
      "states": {
        "hover": {
          "state-layer-opacity": { "value": "{opacity.hover.value}" }
        }
      }
    }
  }
}
```

### Category C: Container Components (Complex Structure)

**Examples**: Card, Accordion, List, Panel, Tabs

**Characteristics**:
- Multiple sub-sections (header, body, footer, item)
- Nested token paths
- Container + item level states
- 40-60+ tokens

**Design Token Needs**:
```json
{
  "card": {
    "mapping": {
      "border": {
        "radius": { "value": "{radius.md.value}" },
        "color": { "value": "{color.outline.@.value}" }
      },
      "body": {
        "padding": { "value": "{space.6.value}" }
      },
      "footer": {
        "padding": { "value": "{space.4.value}" },
        "border": {
          "color": { "value": "{color.outline.@.value}" }
        }
      }
    }
  }
}
```

### Category D: Special Cases (Custom Handling)

**Examples**: Iframe, Picture with variants, Form controls with :checked

**Characteristics**:
- Inline styles that need overriding
- Complex state selectors (:has, :checked)
- Non-standard DOM structure
- Requires wrapper pattern

**Implementation**:
```tsx
// Wrapper pattern for components that can't spread data-design-token-target
export const DesignToken: Story = {
  render: (args) => {
    const { "data-design-token-target": dataAttr, ...componentArgs } = args;

    return (
      <Box data-design-token-target={dataAttr}>
        <ComponentName {...componentArgs} />
      </Box>
    );
  }
}
```

---

## Design Token JSON Structure

### Basic Structure

```json
{
  "componentKey": {
    "meta": {
      "mapping": {
        "selector": {
          "web": ".component-selector",
          "mobile": ".component-selector"
        },
        "childSelectors": {
          "text": ".text-child-class",
          "icon": ".icon-class,i[class*='fa-']",
          "badge": ".badge-class",
          "image": "img,.image"
        },
        "states": {
          "hover": { "selector": { "web": ":hover" } },
          "focus": { "selector": { "web": ":focus" } },
          "active": { "selector": { "web": ":active" } },
          "disabled": { "selector": { "web": "[disabled]" } }
        }
      },
      "appearances": {
        "appearanceName": {
          "description": "Appearance description"
        }
      }
    },
    "mapping": {
      "property": {
        "value": "css-value or {token.reference}",
        "type": "color|font|space|radius|border",
        "attributes": {
          "subtype": "color|font-size|opacity|etc",
          "description": "Property description"
        }
      }
    },
    "appearances": {
      "appearanceName": {
        "mapping": {
          // Appearance-specific token overrides
        },
        "variantGroups": {
          "groupName": {
            "variantName": {
              // Variant-specific tokens
            }
          }
        }
      }
    }
  }
}
```

### Property Types

#### Color Properties
```json
"background": {
  "value": "{color.primary.@.value}",
  "type": "color",
  "attributes": { "subtype": "color" }
}
```

#### Typography Properties
```json
"font-size": {
  "value": "{h4.font-size.value}",
  "type": "font",
  "attributes": { "subtype": "font-size" }
},
"font-family": {
  "value": "{body.large.font-family.value}",
  "type": "font",
  "attributes": { "subtype": "font-family" }
}
```

#### Spacing Properties
```json
"padding": {
  "value": "{space.6.value}",
  "type": "space",
  "attributes": { "subtype": "space" }
}
```

#### Border Properties
```json
"border": {
  "color": {
    "value": "{color.outline.@.value}",
    "type": "color"
  },
  "width": {
    "value": "1px",
    "type": "border",
    "attributes": { "subtype": "border-width" }
  },
  "style": {
    "value": "solid",
    "type": "border",
    "attributes": { "subtype": "border-style" }
  },
  "radius": {
    "value": "{radius.md.value}",
    "type": "radius"
  }
}
```

#### State Properties
```json
"states": {
  "hover": {
    "background": {
      "value": "{color.primary.container.@.value}"
    },
    "state-layer-opacity": {
      "value": "{opacity.hover.value}"
    }
  }
}
```

#### Special Properties
```json
"icon-size": {
  "value": "{icon.size.md.value}",
  "type": "size",
  "attributes": { "subtype": "icon-size" }
},
"image-size": {
  "value": "48px",
  "type": "size"
},
"state-layer-color": {
  "value": "{color.primary.@.value}",
  "type": "color"
}
```

### Nested Token Paths

Support dot notation for complex structures:

```json
"body": {
  "padding": { "value": "{space.6.value}" },
  "background": { "value": "{color.surface.@.value}" }
},
"footer": {
  "padding": { "value": "{space.4.value}" },
  "border": {
    "color": { "value": "{color.outline.@.value}" }
  }
},
"item": {
  "padding": { "value": "{space.3.value}" },
  "background": { "value": "transparent" },
  "header": {
    "font-size": { "value": "{label.small.font-size.value}" }
  }
}
```

These generate CSS variables like:
- `--wm-card-body-padding`
- `--wm-card-footer-border-color`
- `--wm-list-item-header-font-size`

### Appearance and Variant System

#### Simple Appearances (No Variants)
```json
"appearances": {
  "basic": {
    "mapping": {
      "background": { "value": "{color.surface.@.value}" }
    }
  },
  "advanced": {
    "mapping": {
      "background": { "value": "{color.surface.container.@.value}" }
    }
  }
}
```

#### Appearances with Variant Groups
```json
"appearances": {
  "filled": {
    "variantGroups": {
      "status": {
        "default": {
          "background": { "value": "{color.surface.container.highest.@.value}" }
        },
        "primary": {
          "background": { "value": "{color.primary.@.value}" }
        },
        "secondary": {
          "background": { "value": "{color.secondary.@.value}" }
        }
      }
    }
  },
  "outlined": {
    "variantGroups": {
      "status": {
        "default": {
          "border": { "color": { "value": "{color.outline.@.value}" } }
        }
      }
    }
  }
}
```

Results in variant keys:
- `filled-default`
- `filled-primary`
- `filled-secondary`
- `outlined-default`

---

## Implementation Patterns

### Pattern 1: Direct Prop Spreading (Most Components)

**Use when**: Component can spread `data-design-token-target` prop to its root element

**Examples**: Button, Anchor, Label, Audio, Video, Message

```tsx
import ComponentDefaultExport from "@components/path/to/component";
import tokenData from "../../../../designTokens/components/component/component.json";

const mockListener = { appLocale: {}, Widgets: {} };

export const DesignToken: Story = {
  tags: ['show-panel'],
  args: {
    name: "designTokenComponent",
    listener: mockListener,
    // Component-specific props
    "data-design-token-target": "true"
  },
  argTypes: {
    "data-design-token-target": { control: false }
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: tokenData,
      componentKey: "component",
      extractCSSVariablesAtRuntime: true,
    },
  },
};
```

**DesignTokenPanel.tsx handling**:
```typescript
// For components that can spread props, use direct selector
const fullSelector = `${baseSelector}[data-design-token-target="true"]${classSelectors}`;
// Example: .app-button[data-design-token-target="true"].btn-filled.btn-primary
```

### Pattern 2: Wrapper Pattern (Special Components)

**Use when**: Component cannot spread props OR has inline styles that need overriding

**Examples**: Icon, Iframe

**Why needed**:
- Icon: Renders FontAwesome elements that don't accept custom data attributes
- Iframe: Has inline width/height styles that need to be removed

```tsx
import { Box } from "@mui/material";
import ComponentDefaultExport from "@components/path/to/component";
import tokenData from "../../../../designTokens/components/component/component.json";

const mockListener = { appLocale: {}, Widgets: {} };

export const DesignToken: Story = {
  tags: ['show-panel'],
  render: (args) => {
    // Extract data-design-token-target from args
    const { "data-design-token-target": dataAttr, width, height, ...componentArgs } = args as any;

    return (
      <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
        <ComponentDefaultExport {...componentArgs} listener={mockListener} />
      </Box>
    );
  },
  args: {
    name: "designTokenComponent",
    listener: mockListener,
    // Component-specific props (omit width/height for iframe)
    width: undefined,  // Let CSS control sizing
    height: undefined,
    "data-design-token-target": "true"
  },
  argTypes: {
    width: { control: false },  // Hide from controls
    height: { control: false },
    "data-design-token-target": { control: false }
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: tokenData,
      componentKey: "component",
      extractCSSVariablesAtRuntime: true,
    },
  },
};
```

**DesignTokenPanel.tsx handling**:
```typescript
// For components using wrapper pattern, use ancestor selector
const fullSelector = (componentName === 'icon' || componentName === 'iframe')
  ? `[data-design-token-target="true"] ${baseSelector}${classSelectors}`
  : `${baseSelector}[data-design-token-target="true"]${classSelectors}`;

// Icon example: [data-design-token-target="true"] .app-icon-wrapper
// Iframe example: [data-design-token-target="true"] .app-iframe
```

### Pattern 3: Variant Management

**Use when**: Component has multiple appearances or variants

**Examples**: Button (filled/outlined/text with status variants), Picture (shapes)

```tsx
export const DesignToken: Story = {
  tags: ['show-panel'],
  args: {
    name: "designTokenButton",
    listener: mockListener,
    caption: "Button",
    type: "button",
    className: "btn-filled btn-primary",  // Variant specified in className
    "data-design-token-target": "true"
  },
  argTypes: {
    className: {
      control: { type: "select" },
      options: [
        "btn-filled btn-default",
        "btn-filled btn-primary",
        "btn-filled btn-secondary",
        "btn-outlined btn-default",
        "btn-outlined btn-primary",
        "btn-text btn-primary",
      ]
    },
    "data-design-token-target": { control: false }
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: buttonTokensData,
      componentKey: "btn",
      extractCSSVariablesAtRuntime: true,
    },
  },
};
```

**tokenParser.ts handling**:
```typescript
// Automatically extracts variant from className
// "btn-filled btn-primary" → variant key "filled-primary"
// Merges: base tokens + filled tokens + primary tokens
```

---

## Creating Design Token Stories

### Step-by-Step Guide

#### 1. Create Design Token JSON

Location: `/src/designTokens/components/[component-name]/[component-name].json`

```json
{
  "component": {
    "meta": {
      "mapping": {
        "selector": { "web": ".app-component" },
        "childSelectors": {
          "text": ".component-text",
          "icon": ".app-icon,i[class*='fa-']"
        }
      }
    },
    "mapping": {
      "background": {
        "value": "{color.primary.@.value}",
        "type": "color",
        "attributes": { "subtype": "color" }
      },
      "color": {
        "value": "{color.on-primary.@.value}",
        "type": "color",
        "attributes": { "subtype": "color" }
      },
      "padding": {
        "value": "{space.4.value}",
        "type": "space",
        "attributes": { "subtype": "space" }
      }
    }
  }
}
```

#### 2. Import Token Data in Story

```tsx
import componentTokensData from "../../../../designTokens/components/component/component.json";
```

#### 3. Create Design Token Story Export

Choose pattern based on component capabilities:

**Option A: Direct Pattern** (if component can spread props)
```tsx
export const DesignToken: Story = {
  tags: ['show-panel'],
  args: {
    name: "designTokenComponent",
    listener: mockListener,
    // component props...
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

**Option B: Wrapper Pattern** (if component can't spread props or has inline styles)
```tsx
export const DesignToken: Story = {
  tags: ['show-panel'],
  render: (args) => {
    const { "data-design-token-target": dataAttr, ...componentArgs } = args as any;
    return (
      <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
        <ComponentDefaultExport {...componentArgs} listener={mockListener} />
      </Box>
    );
  },
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

#### 4. Add Story Tag for Panel Visibility

```tsx
tags: ['show-panel']
```

This tag triggers the Design Tokens panel to be visible in Storybook.

#### 5. Test Token Changes

1. Open Storybook and navigate to your component
2. Select the "DesignToken" story
3. Open the "Design Tokens" panel at the bottom
4. Modify token values
5. Verify changes apply immediately to the component

---

## Edge Cases and Special Handling

### Edge Case 1: Iframe with Inline Styles

**Problem**: Iframe component has inline `width` and `height` styles that override CSS

**Solution**:
1. Don't pass `width` and `height` props to component
2. Use wrapper pattern with Box
3. Apply CSS to both wrapper and iframe element

```tsx
export const DesignToken: Story = {
  render: (args) => {
    const { "data-design-token-target": dataAttr, width, height, ...componentArgs } = args as any;

    return (
      <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
        <IframeDefaultExport {...componentArgs} listener={mockListener} />
      </Box>
    );
  },
  args: {
    iframesrc: "https://example.com",
    width: undefined,  // Let CSS control
    height: undefined,
    "data-design-token-target": "true"
  },
  argTypes: {
    width: { control: false },
    height: { control: false }
  }
};
```

**DesignTokenPanel.tsx handling**:
```typescript
if (componentName === 'iframe') {
  // Target both wrapper and iframe element
  mainSelectors = `${fullSelector} iframe,\n${fullSelector} .iframe-content`;
}
```

### Edge Case 2: Icon Component Without Direct Props

**Problem**: Icon renders FontAwesome elements that don't accept custom data attributes

**Solution**:
1. Use wrapper pattern with Box
2. Apply ancestor selector pattern
3. Target child elements (.app-icon, i[class*="fa-"])

```tsx
export const DesignToken: Story = {
  render: (args) => {
    const { "data-design-token-target": dataAttr, ...componentArgs } = args as any;

    return (
      <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
        <IconDefaultExport {...componentArgs} listener={mockListener} />
      </Box>
    );
  }
};
```

**DesignTokenPanel.tsx handling**:
```typescript
if (componentName === 'icon') {
  // Target child icon elements
  mainSelectors = `${fullSelector} .app-icon,\n${fullSelector} i[class*="fa-"],\n${fullSelector} i[class*="wi-"],\n${fullSelector} img`;
}
```

### Edge Case 3: Form Controls with :checked State

**Problem**: Checkbox/Radio use complex selectors like `:has(input:checked)`

**Solution**: Define selector in meta.mapping

```json
{
  "checkbox": {
    "meta": {
      "mapping": {
        "selector": {
          "web": ".app-checkbox:has(label > input[type='checkbox']:checked)"
        },
        "states": {
          "checked": {
            "selector": { "web": ":has(input:checked)" }
          }
        }
      }
    }
  }
}
```

### Edge Case 4: Container Components with Subsections

**Problem**: Card, List, Accordion have multiple styled sections

**Solution**: Use nested token paths

```json
{
  "card": {
    "mapping": {
      "body": {
        "padding": { "value": "{space.6.value}" }
      },
      "footer": {
        "padding": { "value": "{space.4.value}" },
        "border": {
          "color": { "value": "{color.outline.@.value}" }
        }
      }
    }
  }
}
```

Generates:
- `--wm-card-body-padding: 24px`
- `--wm-card-footer-padding: 16px`
- `--wm-card-footer-border-color: #79747E`

### Edge Case 5: State Layer vs Direct State Changes

**Problem**: Some components use overlay patterns, others use direct property changes

**Pattern 1: State Layer (Button)**
```json
"states": {
  "hover": {
    "state-layer-opacity": { "value": "8%" }
  }
}
```

**Pattern 2: Direct Property (List)**
```json
"states": {
  "hover": {
    "item": {
      "background": { "value": "{color.surface.container.@.value}" }
    }
  }
}
```

Both patterns are supported automatically.

---

## Universal System Components

### DesignTokenPanel.tsx

**Purpose**: Generates CSS from design tokens and manages UI panel

**Key Functions**:

#### 1. generateCSS()
```typescript
const generateCSS = (
  config: ComponentTokenConfig,
  tokenValues: Record<string, string>,
  className?: string
): string
```

Generates high-specificity CSS rules:
```css
/* Direct selector for components that can spread props */
.app-button[data-design-token-target="true"].btn-filled.btn-primary {
  background-color: #FF7250 !important;
  color: #FFFFFF !important;
}

/* Ancestor selector for wrapper pattern */
[data-design-token-target="true"] .app-icon {
  color: #FF7250 !important;
  font-size: 20px !important;
}
```

#### 2. Dynamic Property Application
```typescript
Object.entries(tokenValues).forEach(([varName, value]) => {
  const property = varName.substring(prefix.length);
  const cssProperty = mapToCSSProperty(property);
  if (cssProperty && value) {
    css += `  ${cssProperty}: ${value} !important;\n`;
  }
});
```

Automatically maps all token properties to CSS without hardcoding.

#### 3. Child Selector Handling
```typescript
// Icon children (for buttons with icons)
if (hasIconSize || hasIconColor) {
  const iconSelectors = config.childSelectors?.icon ||
    '.app-icon,i[class*="fa-"],i[class*="wi-"]';
  css += `${fullSelector} ${iconSelectors} { ... }`;
}

// Image children (for anchors with images)
if (hasImageSize || hasImageRadius) {
  const imageSelectors = config.childSelectors?.image ||
    'img,.image,[class*="-image"]';
  css += `${fullSelector} ${imageSelectors} { ... }`;
}
```

#### 4. State Layer Generation
```typescript
// Hover state
css += `${fullSelector}:hover:not(:disabled) { ... }`;

// State layer overlay
if (hasStateLayer && hasHoverOpacity) {
  css += `${fullSelector}:hover:not(:disabled)::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${stateLayerColor};
    opacity: ${hoverOpacity};
    pointer-events: none;
  }`;
}
```

### tokenParser.ts

**Purpose**: Parses design token JSON and resolves token references

**Key Functions**:

#### 1. parseComponentTokens()
```typescript
export function parseComponentTokens(
  jsonData: any,
  cssVariableMap: Map<string, string>
): ComponentTokenConfig
```

Parses JSON structures and returns:
```typescript
{
  componentName: "btn",
  selector: ".app-button",
  tokens: TokenDefinition[],        // Base tokens
  variants: Record<string, TokenDefinition[]>,  // Variant tokens
  childSelectors: {
    text: ".btn-caption",
    icon: ".app-icon,i[class*='fa-']"
  }
}
```

#### 2. parseTokenObject()
```typescript
function parseTokenObject(
  obj: any,
  componentKey: string,
  path: string[],
  parentType?: string,
  cssVariableMap?: Map<string, string>
): TokenDefinition[]
```

Recursively walks JSON and extracts tokens:
```
Input: { body: { padding: { value: "{space.6.value}" } } }
Output: [{
  name: "--wm-card-body-padding",
  label: "Body → Padding",
  value: "24px",
  type: "space",
  controlType: "text"
}]
```

#### 3. resolveTokenValueRuntime()
```typescript
export function resolveTokenValueRuntime(
  value: string,
  cssVariableMap: Map<string, string>
): string
```

Resolves token references from foundation.css:
```
Input: "{color.primary.@.value}"
Lookup: cssVariableMap.get("--wm-color-primary-@")
Output: "rgb(255, 114, 80)"
```

#### 4. parseClassName()
```typescript
export function parseClassName(
  className: string,
  tokenConfig: ComponentTokenConfig
): string | null
```

Extracts variant from className:
```
Input: "btn-filled btn-primary"
Output: "filled-primary"

Input: "text-primary"
Output: "text-primary"

Input: "h1"
Output: "default-h1"
```

### cssVariableExtractor.ts

**Purpose**: Extracts CSS variable values from foundation.css at runtime

**Key Functions**:

#### 1. extractCSSVariables()
```typescript
export function extractCSSVariables(iframe: HTMLIFrameElement): Record<string, string>
```

Extracts all `--wm-*` variables from computed styles:
```typescript
{
  "--wm-color-primary-@": "rgb(255, 114, 80)",
  "--wm-space-6": "24px",
  "--wm-radius-md": "8px"
}
```

#### 2. buildTokenReferenceMap()
```typescript
export function buildTokenReferenceMap(
  cssVariables: Record<string, string>
): Map<string, string>
```

Converts CSS variables to token reference format:
```typescript
Map {
  "{color.primary.@.value}" => "rgb(255, 114, 80)",
  "{space.6.value}" => "24px",
  "{radius.md.value}" => "8px"
}
```

---

## Testing and Verification

### Testing Checklist

#### For Each Component:

- [ ] **Token Panel Loads**: Design Tokens panel appears when viewing DesignToken story
- [ ] **Token Controls Render**: All tokens show appropriate controls (color picker, text input, dropdown)
- [ ] **Default Values Display**: Initial values match component's current styling
- [ ] **Real-time Updates**: Changing tokens immediately updates component
- [ ] **Variant Switching**: Changing className applies correct variant tokens
- [ ] **State Handling**: Hover, focus, active states work correctly
- [ ] **Child Elements**: Icons, badges, images update when their tokens change
- [ ] **CSS Specificity**: Generated CSS overrides foundation.css and inline styles
- [ ] **Reset Button**: Clicking reset restores original values
- [ ] **No Console Errors**: No errors or warnings in browser console

### Test Scenarios

#### Scenario 1: Simple Component (Label)
1. Open Label → DesignToken story
2. Change `--wm-label-color` → verify text color changes
3. Change `--wm-label-font-size` → verify font size changes
4. Reset → verify values restore

#### Scenario 2: Interactive Component (Button)
1. Open Button → DesignToken story
2. Change `--wm-btn-background` → verify background changes
3. Change `--wm-btn-states-hover-state-layer-opacity` → hover over button → verify opacity overlay
4. Change className to "btn-outlined btn-secondary" → verify tokens update for outlined variant
5. Change `--wm-btn-icon-size` → verify icon size changes (if button has icon)

#### Scenario 3: Container Component (Card)
1. Open Card → DesignToken story
2. Change `--wm-card-body-padding` → verify body padding changes
3. Change `--wm-card-footer-border-color` → verify footer border color changes
4. Change `--wm-card-border-radius` → verify card border radius changes

#### Scenario 4: Special Component (Iframe)
1. Open Iframe → DesignToken story
2. Change `--wm-iframe-width` → verify iframe width changes
3. Change `--wm-iframe-height` → verify iframe height changes
4. Verify no inline styles override CSS

---

## Troubleshooting

### Issue: Design Tokens panel not showing

**Causes**:
- Missing `tags: ['show-panel']` in story
- Missing or incorrect `parameters.designTokens` configuration

**Solution**:
```tsx
export const DesignToken: Story = {
  tags: ['show-panel'],  // Required!
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

### Issue: Token changes not applying to component

**Causes**:
1. Missing `data-design-token-target="true"` attribute
2. Component using wrong selector pattern
3. CSS specificity issue

**Solution**:
```tsx
// Ensure data attribute is in args
args: {
  "data-design-token-target": "true"
}

// Check selector in DesignTokenPanel.tsx
// Component should use appropriate pattern (direct or wrapper)
```

### Issue: Inline styles overriding CSS

**Causes**:
- Component has inline styles from props (width, height, etc.)

**Solution**:
```tsx
// Don't pass conflicting props
const { "data-design-token-target": dataAttr, width, height, ...componentArgs } = args;

args: {
  width: undefined,
  height: undefined
}

argTypes: {
  width: { control: false },
  height: { control: false }
}
```

### Issue: Child elements (icons, images) not updating

**Causes**:
- Missing `childSelectors` in meta.mapping
- DesignTokenPanel not generating child selectors

**Solution**:
```json
// In component.json
"meta": {
  "mapping": {
    "childSelectors": {
      "icon": ".app-icon,i[class*='fa-']",
      "image": "img,.image"
    }
  }
}
```

### Issue: Variant tokens not applying

**Causes**:
- className doesn't match variant key pattern
- Variant not defined in appearances

**Solution**:
```tsx
// Ensure className matches variant key pattern
className: "btn-filled btn-primary"  // → matches "filled-primary" variant

// Check parseClassName() logic in tokenParser.ts
// Verify variant keys in appearances section of JSON
```

### Issue: Token references not resolving

**Causes**:
- Reference not in foundation.css
- cssVariableExtractor not running
- Wrong reference format

**Solution**:
```json
// Correct format: {category.name.@.value}
"value": "{color.primary.@.value}"  // ✓ Correct
"value": "{color-primary}"          // ✗ Wrong

// Enable runtime extraction
parameters: {
  designTokens: {
    extractCSSVariablesAtRuntime: true  // Required
  }
}
```

### Issue: State layers not appearing

**Causes**:
- Missing `state-layer-color` token
- Missing state opacity tokens
- Component position not relative

**Solution**:
```json
// Required tokens
"state-layer-color": {
  "value": "{color.primary.@.value}"
},
"states": {
  "hover": {
    "state-layer-opacity": { "value": "{opacity.hover.value}" }
  }
}
```

### Issue: Complex selectors not working

**Causes**:
- :has(), :checked, complex pseudo-classes need explicit definition

**Solution**:
```json
// Define in meta.mapping
"meta": {
  "mapping": {
    "selector": {
      "web": ".app-checkbox:has(label > input[type='checkbox']:checked)"
    }
  }
}
```

---

## Component-Specific Examples

### Button (Interactive with Variants)

**JSON Structure**:
```json
{
  "btn": {
    "meta": {
      "mapping": {
        "selector": { "web": ".app-button" },
        "childSelectors": {
          "text": ".btn-caption",
          "icon": ".app-icon,i[class*='fa-'],i[class*='wi-']"
        },
        "states": {
          "hover": { "selector": { "web": ":hover" } },
          "disabled": { "selector": { "web": "[disabled]" } }
        }
      }
    },
    "mapping": {
      "background": { "value": "{color.surface.container.highest.@.value}" },
      "color": { "value": "{color.on-surface.@.value}" },
      "border": {
        "color": { "value": "{color.outline.@.value}" },
        "width": { "value": "1px" },
        "radius": { "value": "{radius.md.value}" }
      },
      "icon-size": { "value": "{icon.size.md.value}" },
      "state-layer-color": { "value": "{color.on-surface.@.value}" },
      "states": {
        "hover": {
          "state-layer-opacity": { "value": "{opacity.hover.value}" }
        }
      }
    },
    "appearances": {
      "filled": {
        "variantGroups": {
          "status": {
            "primary": {
              "background": { "value": "{color.primary.@.value}" },
              "color": { "value": "{color.on-primary.@.value}" }
            }
          }
        }
      }
    }
  }
}
```

### Card (Container with Subsections)

**JSON Structure**:
```json
{
  "card": {
    "meta": {
      "mapping": {
        "selector": { "web": ".app-card" }
      }
    },
    "mapping": {
      "border": {
        "radius": { "value": "{radius.md.value}" },
        "width": { "value": "1px" },
        "color": { "value": "{color.outline.@.value}" }
      },
      "body": {
        "padding": { "value": "{space.6.value}" }
      },
      "footer": {
        "padding": { "value": "{space.4.value}" },
        "border": {
          "color": { "value": "{color.outline.@.value}" }
        }
      }
    }
  }
}
```

---

## Summary: Universal System Benefits

### What Works Universally

✅ **Automatic property mapping** - All CSS properties work without hardcoding
✅ **Nested token support** - Handles complex structures automatically
✅ **State handling** - Hover, focus, active, disabled, checked all supported
✅ **Variant system** - Appearances and variantGroups work generically
✅ **Runtime resolution** - Extracts values from foundation.css dynamically
✅ **Child selectors** - Icons, badges, images handled automatically

### Component-Specific Handling

Only two patterns needed:
1. **Direct pattern** (most components) - Add `data-design-token-target` to args
2. **Wrapper pattern** (special cases) - Wrap component in Box

Special cases automatically handled:
- Icon: Ancestor selector + child element targeting
- Iframe: Ancestor selector + child iframe targeting

### Adding New Components

1. Create JSON in `/src/designTokens/components/[name]/[name].json`
2. Choose pattern: direct or wrapper
3. Add DesignToken story
4. Done! System handles everything else automatically

No code changes needed for most components!
