# Design Tokens Addon

A **generic, reusable Design Token system** for Storybook that works with any component. Automatically extracts values from foundation.css at runtime.

---

## Quick Start

### 1. Create JSON (`/src/designTokens/wm-button.json`)
```json
{
  "btn": {
    "meta": {
      "mapping": {
        "selector": { "web": ".app-button,button,.btn" }
      }
    },
    "mapping": {
      "background": {
        "value": "{color.primary.@.value}",
        "type": "color",
        "attributes": {
          "subtype": "color",
          "description": "Button background color"
        }
      }
    },
    "appearances": {
      "filled": {
        "variantGroups": {
          "status": {
            "primary": {
              "background": { "value": "{color.primary.@.value}", ... }
            }
          }
        }
      }
    }
  }
}
```

### 2. Configure Story (`button.stories.tsx`)
```typescript
import buttonTokensData from "../../../../designTokens/wm-button.json";

export const Filled: Story = {
  render: (args) => <ButtonDefaultExport className={args.className} />,
  args: {
    className: "btn-filled btn-primary"
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: buttonTokensData,           // Pass raw JSON
      componentKey: "btn",                    // Component identifier
      extractCSSVariablesAtRuntime: true,    // Extract from foundation.css
    }
  }
};
```

### 3. Done!
Open story → Design Tokens tab appears → Modify tokens → See instant changes ✅

---

## How It Works

### Runtime CSS Extraction Flow

```
Story loads with extractCSSVariablesAtRuntime: true
  ↓
extractCSSVariables() runs
  ↓
Reads iframe's foundation.css :root styles
  ↓
Extracts all --wm-* CSS variables (1306+ variables)
  ↓
Builds token reference map: {color.primary.@.value} → "rgb(255, 114, 80)"
  ↓
parseDesignTokens() resolves references using extracted values
  ↓
Design Tokens panel displays with real foundation.css values
  ↓
User changes token → CSS regenerated → Injected into iframe → Instant update
```

### Example

**foundation.css:**
```css
:root {
  --wm-color-primary: #FF7250;
  --wm-opacity-hover: 8%;
}
```

**wm-button.json:**
```json
{
  "background": {
    "value": "{color.primary.@.value}"  // ← Reference
  },
  "states": {
    "hover": {
      "opacity": {
        "value": "{opacity.hover.value}"  // ← Reference
      }
    }
  }
}
```

**After extraction:**
- `{color.primary.@.value}` → `"rgb(255, 114, 80)"` (computed from foundation.css)
- `{opacity.hover.value}` → `"8%"` (from foundation.css)

**Displayed in panel:**
- Background: rgb(255, 114, 80) [color picker]
- Hover opacity: 0.08 [number input] (auto-converted from 8%)

---

## Key Features

✅ **Runtime extraction** - Reads actual values from foundation.css (no hardcoding)
✅ **Generic** - Works for any component (button, input, anchor, card, etc.)
✅ **Variant-aware** - Different tokens for different className variants
✅ **Real-time updates** - Changes apply instantly without reload
✅ **Smart controls** - Color pickers, dropdowns, number inputs based on token type
✅ **Automatic conversion** - Handles percentages (8% ↔ 0.08) for opacity values
✅ **Fallback support** - Uses hardcoded values if extraction fails
✅ **Reset button** - Restore default values anytime

---

## Adding New Components

To add design tokens for anchor, card, input, list, etc.:

### 1. Create JSON file
```json
// /src/designTokens/wm-anchor.json
{
  "anchor": {
    "meta": {
      "mapping": {
        "selector": { "web": ".app-anchor,a" }
      }
    },
    "mapping": {
      "color": {
        "value": "{color.primary.@.value}",
        "type": "color",
        "attributes": {
          "subtype": "color",
          "description": "Link text color"
        }
      }
    },
    "appearances": {
      "default": {
        "variantGroups": {
          "status": {
            "primary": { "color": { "value": "{color.primary.@.value}", ... } },
            "secondary": { "color": { "value": "{color.secondary.@.value}", ... } }
          }
        }
      }
    }
  }
}
```

### 2. Add to story
```typescript
import anchorTokensData from "../../../../designTokens/wm-anchor.json";

export const DesignToken: Story = {
  render: (args) => <AnchorComponent className={args.className} />,
  args: { className: "anchor-primary" },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: anchorTokensData,
      componentKey: "anchor",
      extractCSSVariablesAtRuntime: true,
    }
  }
};
```

### 3. Add token references (if new foundation tokens)
If your JSON uses new foundation.css tokens, add them to `cssVariableExtractor.ts`:

```typescript
const TOKEN_TO_CSS_VAR_MAP: Record<string, string> = {
  // ... existing mappings ...

  // New mappings:
  "{elevation.sm.value}": "--wm-elevation-sm",
  "{transition.duration.fast.value}": "--wm-transition-duration-fast",
};
```

---

## File Structure

```
.storybook/addons/design-tokens/
├── DesignTokenPanel.tsx      # Main UI component (panel in Storybook)
├── tokenParser.ts             # Parses JSON, resolves token references
├── cssVariableExtractor.ts    # Extracts CSS variables from foundation.css at runtime
├── types.ts                   # TypeScript type definitions
├── register.tsx               # Addon registration with Storybook
├── preset.ts                  # Storybook preset configuration
└── README.md                  # This file
```

---

## Token Types & Controls

| Type | Example | Control |
|------|---------|---------|
| **Color** | `background`, `color`, `border-color` | Color picker + text input |
| **Font** | `font-size`, `font-weight`, `font-family` | Text input |
| **Space** | `padding`, `margin`, `gap` | Text input (px, rem, em) |
| **Radius** | `border-radius`, `radius` | Text input |
| **Border** | `border-width`, `border-style` | Text / select input |
| **Opacity** | `opacity`, `state-layer-opacity` | Number input (0-1) |
| **Select** | `text-transform`, `cursor` | Dropdown |
| **Shadow** | `box-shadow`, `shadow` | Text input |

---

## FAQ & Troubleshooting

### Q: When are CSS variables picked from foundation.css?

**A:** At **runtime** when:
1. Story loads with `extractCSSVariablesAtRuntime: true`
2. Iframe becomes ready
3. CSS extraction runs and caches results

**Important:**
- Extraction happens ONCE per story load (cached)
- Values are computed values (e.g., `"rgb(255, 114, 80)"` not `"#FF7250"`)
- Cache clears when story changes

### Q: Why do we still need hardcoded fallback values?

**A:** The `resolveTokenValue()` function in tokenParser.ts is a **fallback** for:
- Runtime extraction disabled
- Iframe not accessible or CORS issues
- Development without foundation.css
- Backward compatibility

**Priority:**
```typescript
if (cssVariableMap && cssVariableMap.size > 0) {
  // ✅ PREFERRED: Use runtime extraction
  value = resolveTokenValueRuntime(value, cssVariableMap);
} else {
  // ⚠️ FALLBACK: Use hardcoded values
  value = resolveTokenValue(value);
}
```

### Q: Why aren't state tokens showing?

**A:** They are! Check the **"States"** section (scroll down in panel). You should see:
- Hover opacity: 0.08
- Focus opacity: 0.12
- Active opacity: 0.16
- Disabled state tokens

If empty, check console for extraction errors.

### Q: Why do opacity values show as decimals (0.08) not percentages (8%)?

**A:** Automatic conversion!
- foundation.css uses: `8%` (percentage)
- Number input expects: `0.08` (decimal between 0-1)
- System converts: `8%` ↔ `0.08` automatically

### Q: Token changes not applying?

**Check:**
1. **Console logs** - Look for `[Design Tokens] ✓ Tokens Applied`
2. **data-design-token-target** - Buttons must have this attribute
3. **tokenData + componentKey** - Both must be provided in parameters
4. **Iframe ready** - Extraction waits up to 10 retries

### Q: Values not matching foundation.css?

**Check:**
1. **Extraction success** - Console should show "✓ CSS extraction successful"
2. **Fallback values** - If using fallback, values in tokenParser.ts must match foundation.css
3. **Token reference map** - Check TOKEN_TO_CSS_VAR_MAP in cssVariableExtractor.ts

---

## State Tokens Deep Dive

State tokens control visual feedback for user interactions (hover, focus, active, disabled).

### JSON Structure
```json
{
  "mapping": {
    "state": {
      "layer": {
        "color": "{color.on-surface.@.value}",    // Base overlay color
        "opacity": "0"                             // Base opacity (invisible)
      }
    },
    "states": {
      "hover": {
        "state": {
          "layer": {
            "opacity": "{opacity.hover.value}"     // 8% when hovering
          }
        }
      },
      "focus": {
        "state": {
          "layer": {
            "opacity": "{opacity.focus.value}"     // 12% when focused
          }
        }
      },
      "active": {
        "state": {
          "layer": {
            "opacity": "{opacity.active.value}"    // 16% when clicked
          }
        }
      }
    }
  }
}
```

### Generated CSS Variables
```css
--wm-btn-state-layer-color: rgb(29, 27, 32);
--wm-btn-state-layer-opacity: 0;
--wm-btn-states-hover-state-layer-opacity: 8%;
--wm-btn-states-focus-state-layer-opacity: 12%;
--wm-btn-states-active-state-layer-opacity: 16%;
```

### Generated CSS Output
```css
/* Base button with overlay positioning */
button[data-design-token-target="true"] {
  position: relative;
  overflow: hidden;
}

/* Hover overlay */
button[data-design-token-target="true"]:hover:not(:disabled)::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgb(29, 27, 32);
  opacity: 8%;
  pointer-events: none;
}

/* Focus and active overlays similar */
```

---

## Token Naming Convention

### CSS Variable Names
Pattern: `--wm-{componentKey}-{path}-{property}`

Examples:
```
JSON: btn → mapping → background
CSS:  --wm-btn-background

JSON: btn → mapping → border → color
CSS:  --wm-btn-border-color

JSON: btn → mapping → states → hover → state → layer → opacity
CSS:  --wm-btn-states-hover-state-layer-opacity
```

### Token References
Map to foundation.css variables:

```typescript
// In JSON:
"value": "{color.primary.@.value}"

// Maps to:
"--wm-color-primary" (in foundation.css)

// Defined in cssVariableExtractor.ts:
"{color.primary.@.value}": "--wm-color-primary"
```

---

## Architecture Benefits

1. **No manual CSS files** - CSS generated dynamically from JSON
2. **Single source of truth** - All design decisions in JSON
3. **Type-safe** - Full TypeScript support
4. **Scalable** - Add unlimited components without code changes
5. **Designer-friendly** - Designers can edit JSON without touching code
6. **Runtime sync** - Always uses actual foundation.css values
7. **Graceful fallback** - Works even if extraction fails

---

## Testing

```bash
npm run storybook
```

1. Navigate to "Basic/Button" → "Filled"
2. Open "Design Tokens" tab (bottom panel)
3. Scroll to see all token categories:
   - Colors (Background, Text, Border)
   - Typography (Font Size, Weight, Family)
   - Spacing (Padding, Gap, Height)
   - Border (Width, Style, Radius)
   - States (Hover/Focus/Active/Disabled)
   - Effects (Shadow, Cursor)
4. Change "Background" to #FF0000
5. Button instantly turns red ✅
6. Scroll to "States" → Change "Hover opacity" to 0.5
7. Hover button → See strong overlay ✅
8. Click "Reset to Defaults" → Restores original values ✅

---

## Debug Mode

All console statements are commented out for production. To enable debugging:

1. Open the file you want to debug:
   - `DesignTokenPanel.tsx` - UI and token application
   - `tokenParser.ts` - JSON parsing and resolution
   - `cssVariableExtractor.ts` - CSS variable extraction

2. Uncomment console statements:
   ```typescript
   // console.log("Debug message");
   console.log("Debug message");  // Uncommented
   ```

3. Reload Storybook and check browser console

---

## Future Components

The system is ready for:
- ✅ wm-button.json (completed)
- ⏳ wm-anchor.json
- ⏳ wm-card.json
- ⏳ wm-input.json
- ⏳ wm-list.json
- ⏳ Any component with design tokens

Just follow the JSON structure and it works automatically!
