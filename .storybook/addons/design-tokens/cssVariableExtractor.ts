/**
 * ============================================================================
 * CSS VARIABLE EXTRACTOR - Runtime CSS Variable Extraction
 * ============================================================================
 *
 * This utility extracts CSS variable values from the Storybook preview iframe
 * at runtime, eliminating the need for hardcoded values in tokenParser.ts.
 *
 * Key Features:
 * - Reads computed CSS variables from iframe's :root element
 * - Resolves nested CSS variable references (e.g., var(--wm-color-primary))
 * - Resolves calc() expressions to pixel values
 * - Builds mapping from token references to actual CSS values
 * - Caches extracted values for performance
 *
 * Usage:
 * ```typescript
 * const iframe = document.querySelector("#storybook-preview-iframe");
 * const cssVars = extractCSSVariables(iframe);
 * const tokenMap = buildTokenReferenceMap(cssVars);
 * const resolvedValue = resolveTokenReference("{color.primary.@.value}", tokenMap);
 * ```
 */

/**
 * Dynamically converts a token reference to its CSS variable name
 *
 * This function transforms token references from JSON format to CSS variable names
 * following the foundation.css naming convention.
 *
 * Conversion Rules:
 * 1. Remove curly braces { }
 * 2. Remove .value suffix
 * 3. Replace @ placeholder with empty string
 * 4. Handle cross-component references (form.mapping.* → form.*)
 * 5. Handle state references (form.states.* → form-states-*)
 * 6. Replace dots (.) with hyphens (-)
 * 7. Add --wm- prefix
 *
 * Examples:
 * - "{color.primary.@.value}" → "--wm-color-primary"
 * - "{h6.font-size.value}" → "--wm-h6-font-size"
 * - "{border.width.base.value}" → "--wm-border-width-base"
 * - "{space.6.value}" → "--wm-space-6"
 * - "{border.style.base.value}" → "--wm-border-style-base"
 * - "{color.surface.container.highest.@.value}" → "--wm-color-surface-container-highest"
 * - "{form.mapping.control.border.color.value}" → "--wm-form-control-border-color"
 * - "{form.mapping.states.hover.control.border.color.value}" → "--wm-form-states-hover-control-border-color"
 *
 * @param tokenReference - Token reference string from JSON (e.g., "{color.primary.@.value}")
 * @returns CSS variable name (e.g., "--wm-color-primary")
 */
export function tokenReferenceToCSSVariable(tokenReference: string): string {
  if (!tokenReference || typeof tokenReference !== 'string') {
    return tokenReference;
  }

  // Auto-append .value suffix if missing (forgiving parser)
  // This handles cases like {wizard.mapping.step.title.color} → {wizard.mapping.step.title.color.value}
  let normalizedReference = tokenReference;
  if (tokenReference.startsWith('{') && tokenReference.endsWith('}') && !tokenReference.includes('.value}')) {
    normalizedReference = tokenReference.replace(/\}$/, '.value}');
  }

  // Remove curly braces and .value suffix
  let cssVarName = normalizedReference
    .replace(/^\{/, '')      // Remove leading {
    .replace(/\}$/, '')      // Remove trailing }
    .replace(/\.value$/, ''); // Remove .value suffix

  // Replace @ placeholder with empty string
  // The @ is used in token references like {color.primary.@.value} to indicate theme variant
  cssVarName = cssVarName.replace('.@', '');

  // Handle cross-component references with .mapping. segment
  // This is a GENERIC fix that works for ALL components, not just form
  // Examples:
  // - wizard.mapping.step.title.color → wizard.step.title.color
  // - form.mapping.control.border.color → form.control.border.color
  // - accordion.mapping.header.background → accordion.header.background
  // - {component}.mapping.{rest} → {component}.{rest}
  if (cssVarName.includes('.mapping.')) {
    cssVarName = cssVarName.replace(/\.mapping\./g, '.');
  }

  // Replace dots with hyphens
  cssVarName = cssVarName.replace(/\./g, '-');

  // Add --wm- prefix
  cssVarName = `--wm-${cssVarName}`;

  return cssVarName;
}

// Cache for extracted CSS variables to avoid repeated DOM queries
let cssVariableCache: Map<string, string> | null = null;
let tokenReferenceCache: Map<string, string> | null = null;

/**
 * Extracts all CSS variable values from the iframe's computed styles
 *
 * Reads CSS variables from the :root element in the Storybook preview iframe.
 * All values are returned as computed values (e.g., "24px", "#FF7250", "8%").
 *
 * @param iframe - Storybook preview iframe element
 * @returns Map of CSS variable names to their computed values
 *
 * @example
 * ```typescript
 * const iframe = document.querySelector("#storybook-preview-iframe");
 * const cssVars = extractCSSVariables(iframe);
 * console.log(cssVars.get("--wm-color-primary")); // "rgb(255, 114, 80)"
 * console.log(cssVars.get("--wm-space-6")); // "24px"
 * console.log(cssVars.get("--wm-opacity-hover")); // "8%"
 * ```
 */
export function extractCSSVariables(iframe: HTMLIFrameElement): Map<string, string> {
  // Return cached values if available
  if (cssVariableCache) {
    return cssVariableCache;
  }

  const cssVariables = new Map<string, string>();

  if (!iframe || !iframe.contentDocument || !iframe.contentWindow) {
    // console.warn("[CSS Extractor] Iframe not ready, cannot extract CSS variables");
    return cssVariables;
  }

  try {
    // Get computed styles from :root element
    const rootElement = iframe.contentDocument.documentElement;
    const computedStyle = iframe.contentWindow.getComputedStyle(rootElement);

    // Extract all CSS variables (properties starting with --)
    // Note: computedStyle doesn't enumerate custom properties in all browsers
    // So we need to get them from the cssText or use a different approach

    // Method 1: Try to get all CSS variables from the style sheets
    const styleSheets = iframe.contentDocument.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const styleSheet = styleSheets[i];
        const cssRules = styleSheet.cssRules || styleSheet.rules;

        for (let j = 0; j < cssRules.length; j++) {
          const rule = cssRules[j] as CSSStyleRule;

          // Look for :root rules AND component-specific rules
          // Component-specific rules contain CSS variables for scoped components like wizard, tabs, etc.
          // Examples: .wm-app .app-wizard, .wm-app .app-tabs, .wm-app .app-wizard .app-wizard-step.current
          const isRootRule = rule.selectorText === ":root";
          const isComponentRule = rule.selectorText &&
                                  rule.selectorText.includes(".wm-app") &&
                                  rule.selectorText.includes(".app-");

          if (isRootRule || isComponentRule) {
            const style = rule.style;

            // Iterate through all properties
            for (let k = 0; k < style.length; k++) {
              const propertyName = style[k];

              // Only process CSS variables (start with --)
              if (propertyName.startsWith("--wm-")) {
                const propertyValue = style.getPropertyValue(propertyName).trim();

                // For :root rules, get the computed value
                // For component rules, use the declared value (they're already specific)
                let finalValue = propertyValue;
                if (isRootRule) {
                  const computedValue = computedStyle.getPropertyValue(propertyName).trim();
                  finalValue = computedValue || propertyValue;
                }

                if (finalValue) {
                  // Don't overwrite if already exists (gives precedence to earlier definitions)
                  if (!cssVariables.has(propertyName)) {
                    cssVariables.set(propertyName, finalValue);
                  }
                }
              }
            }
          }
        }
      } catch (err) {
        // Skip stylesheets that can't be accessed (e.g., cross-origin)
        continue;
      }
    }

    // console.log(`[CSS Extractor] Extracted ${cssVariables.size} CSS variables from iframe (including component-scoped variables)`);

    // Cache the results
    cssVariableCache = cssVariables;

  } catch (error) {
    // console.error("[CSS Extractor] Error extracting CSS variables:", error);
  }

  return cssVariables;
}

/**
 * Loads and resolves form control state variables from form-controls.json
 *
 * The foundation.css references variables like --wm-form-states-hover-control-border-color
 * but these are not defined in the CSS. This function reads them from form-controls.json
 * and resolves their values.
 *
 * @param cssVariables - Existing CSS variables map to augment
 */
async function augmentWithFormControlStates(cssVariables: Map<string, string>): Promise<void> {
  try {
    // Dynamically import the form-controls.json
    const formControlsData = await import('../../../src/designTokens/components/form-controls/form-controls.json');

    const formData = formControlsData.default?.form || formControlsData.form;
    if (!formData || !formData.mapping || !formData.mapping.states) {
      return;
    }

    // Extract state values (hover, focus, error, active)
    const states = formData.mapping.states;

    for (const [stateName, stateData] of Object.entries(states as any)) {
      if (!stateData || typeof stateData !== 'object') continue;

      // Recursively extract all properties from the state
      const extractValues = (obj: any, path: string[] = []) => {
        for (const [key, value] of Object.entries(obj)) {
          if (key === 'value' && typeof value === 'string') {
            // Found a value! Create the CSS variable name
            const cssVarName = `--wm-form-states-${stateName}-${path.join('-')}`;

            // Resolve the value if it's a reference
            let resolvedValue = value;
            if (value.startsWith('{') && value.endsWith('}')) {
              // It's a reference, try to resolve it
              resolvedValue = resolveTokenReference(value, cssVariables);
            }

            cssVariables.set(cssVarName, resolvedValue);
          } else if (typeof value === 'object' && value !== null && key !== 'attributes' && key !== 'type') {
            // Recurse into nested objects
            extractValues(value, [...path, key]);
          }
        }
      };

      extractValues(stateData);
    }
  } catch (error) {
    // console.warn('[CSS Extractor] Could not load form-controls.json for state variables:', error);
  }
}

/**
 * Builds a token reference map for resolving {token.path} references
 *
 * This function augments the CSS variables map with form control state variables
 * that are missing from foundation.css but referenced by components like chips.
 *
 * @param cssVariables - Map of CSS variables from extractCSSVariables()
 * @returns Map that can be used to resolve token references (including form state variables)
 *
 * @example
 * ```typescript
 * const cssVars = extractCSSVariables(iframe);
 * const tokenMap = await buildTokenReferenceMap(cssVars);
 * // tokenMap now includes --wm-form-states-hover-control-border-color, etc.
 * ```
 */
export async function buildTokenReferenceMap(cssVariables: Map<string, string>): Promise<Map<string, string>> {
  // Return cached values if available
  if (tokenReferenceCache) {
    return tokenReferenceCache;
  }

  // Clone the map so we don't modify the original
  const augmentedMap = new Map(cssVariables);

  // Augment with form control state variables from JSON
  await augmentWithFormControlStates(augmentedMap);

  // The token reference map now includes both CSS variables and computed state variables
  tokenReferenceCache = augmentedMap;

  // console.log(`[CSS Extractor] Built token reference map with ${augmentedMap.size} entries (${augmentedMap.size - cssVariables.size} added from form-controls.json)`);

  return tokenReferenceCache;
}

/**
 * Resolves a token reference using the extracted CSS variables
 *
 * Replaces token references like "{color.primary.@.value}" with their
 * actual computed CSS values from the foundation CSS.
 *
 * This function now dynamically converts token references to CSS variable names
 * and looks them up in the CSS variables map. This makes it work with ANY
 * token reference without requiring hardcoded mappings.
 *
 * Supports:
 * - Single token references: "{color.primary.@.value}"
 * - Multiple token references: "{space.0.value} {space.6.value}"
 * - Mixed content: "1px solid {color.primary.@.value}"
 * - New token references not in hardcoded map: "{h6.font-size.value}", "{border.style.base.value}"
 *
 * @param tokenReference - Token reference string from JSON
 * @param cssVariablesMap - Map of CSS variables from extractCSSVariables()
 * @returns Resolved CSS value
 *
 * @example
 * ```typescript
 * const cssVars = extractCSSVariables(iframe);
 * const tokenMap = buildTokenReferenceMap(cssVars);
 *
 * // Single reference
 * resolveTokenReference("{color.primary.@.value}", tokenMap);
 * // Returns: "rgb(255, 114, 80)"
 *
 * // Multiple references (e.g., padding)
 * resolveTokenReference("{space.0.value} {space.6.value}", tokenMap);
 * // Returns: "0px 24px"
 *
 * // Mixed content (e.g., border)
 * resolveTokenReference("1px solid {color.primary.@.value}", tokenMap);
 * // Returns: "1px solid rgb(255, 114, 80)"
 *
 * // New token references (not in old hardcoded map)
 * resolveTokenReference("{h6.font-size.value}", tokenMap);
 * // Returns: "14px"
 * ```
 */
export function resolveTokenReference(
  tokenReference: string,
  cssVariablesMap: Map<string, string>
): string {
  if (!tokenReference) {
    return tokenReference;
  }

  let resolvedValue = tokenReference;

  // Replace all token references in the string
  // Matches patterns like {token.path.value}
  const tokenPattern = /\{[^}]+\}/g;
  const matches = tokenReference.match(tokenPattern);

  if (matches) {
    matches.forEach((match) => {
      // Dynamically convert token reference to CSS variable name
      const cssVarName = tokenReferenceToCSSVariable(match);

      // Look up the CSS variable value
      const cssValue = cssVariablesMap.get(cssVarName);

      if (cssValue) {
        resolvedValue = resolvedValue.replace(match, cssValue);
      } else {
        // console.warn(`[CSS Extractor] CSS variable not found for token reference: ${match} → ${cssVarName}`);
        // Keep the original reference if not found
      }
    });
  }

  return resolvedValue;
}

/**
 * Clears the cached CSS variables and token reference maps
 *
 * Call this when the iframe reloads or when you want to force
 * a fresh extraction of CSS variables.
 *
 * @example
 * ```typescript
 * // Clear cache when story changes
 * clearCache();
 * const freshVars = extractCSSVariables(iframe);
 * ```
 */
export function clearCache(): void {
  cssVariableCache = null;
  tokenReferenceCache = null;
  // console.log("[CSS Extractor] Cache cleared");
}
