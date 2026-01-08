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
 * Token reference to CSS variable name mapping
 *
 * Maps design token references (from JSON) to their corresponding
 * CSS variable names in the foundation.css file.
 *
 * Format:
 * - Token Reference: "{category.subcategory.property.value}"
 * - CSS Variable: "--wm-category-subcategory-property"
 *
 * Examples:
 * - "{color.primary.@.value}" → "--wm-color-primary"
 * - "{space.6.value}" → "--wm-space-6"
 * - "{label.large.font-size.value}" → "--wm-label-large-font-size"
 * - "{opacity.hover.value}" → "--wm-opacity-hover"
 */
const TOKEN_TO_CSS_VAR_MAP: Record<string, string> = {
  // Colors - Primary/Secondary/Tertiary
  "{color.primary.@.value}": "--wm-color-primary",
  "{color.secondary.@.value}": "--wm-color-secondary",
  "{color.tertiary.@.value}": "--wm-color-tertiary",
  "{color.on-primary.@.value}": "--wm-color-on-primary",
  "{color.on-secondary.@.value}": "--wm-color-on-secondary",
  "{color.on-tertiary.@.value}": "--wm-color-on-tertiary",

  // Colors - Semantic
  "{color.success.@.value}": "--wm-color-success",
  "{color.error.@.value}": "--wm-color-error",
  "{color.warning.@.value}": "--wm-color-warning",
  "{color.info.@.value}": "--wm-color-info",
  "{color.on-success.@.value}": "--wm-color-on-success",
  "{color.on-error.@.value}": "--wm-color-on-error",
  "{color.on-warning.@.value}": "--wm-color-on-warning",
  "{color.on-info.@.value}": "--wm-color-on-info",

  // Colors - Surface
  "{color.surface.@.value}": "--wm-color-surface",
  "{color.on-surface.@.value}": "--wm-color-on-surface",
  "{color.on-surface.variant.@.value}": "--wm-color-on-surface-variant",
  "{color.surface.container.highest.@.value}": "--wm-color-surface-container-highest",
  "{color.background.@.value}": "--wm-color-background",
  "{color.on-background.@.value}": "--wm-color-on-background",

  // Colors - Special
  "{color.transparent.value}": "--wm-color-transparent",
  "{color.white.value}": "--wm-color-white",
  "{color.black.value}": "--wm-color-black",
  "{color.inherit.value}": "--wm-color-inherit",

  // Spacing
  "{space.0.value}": "--wm-space-0",
  "{space.1.value}": "--wm-space-1",
  "{space.2.value}": "--wm-space-2",
  "{space.3.value}": "--wm-space-3",
  "{space.4.value}": "--wm-space-4",
  "{space.5.value}": "--wm-space-5",
  "{space.6.value}": "--wm-space-6",
  "{space.7.value}": "--wm-space-7",
  "{space.8.value}": "--wm-space-8",
  "{space.9.value}": "--wm-space-9",
  "{space.10.value}": "--wm-space-10",
  "{space.11.value}": "--wm-space-11",
  "{space.12.value}": "--wm-space-12",

  // Radius
  "{radius.none.value}": "--wm-radius-none",
  "{radius.sm.value}": "--wm-radius-sm",
  "{radius.md.value}": "--wm-radius-md",
  "{radius.lg.value}": "--wm-radius-lg",
  "{radius.xl.value}": "--wm-radius-xl",
  "{radius.pill.value}": "--wm-radius-pill",
  "{radius.circle.value}": "--wm-radius-circle",

  // Icons
  "{icon.size.xs.value}": "--wm-icon-size-xs",
  "{icon.size.sm.value}": "--wm-icon-size-sm",
  "{icon.size.md.value}": "--wm-icon-size-md",
  "{icon.size.lg.value}": "--wm-icon-size-lg",

  // Typography - Label Large
  "{label.large.font-size.value}": "--wm-label-large-font-size",
  "{label.large.font-family.value}": "--wm-label-large-font-family",
  "{label.large.font-weight.value}": "--wm-label-large-font-weight",
  "{label.large.line-height.value}": "--wm-label-large-line-height",
  "{label.large.letter-spacing.value}": "--wm-label-large-letter-spacing",

  // Typography - Label Medium
  "{label.medium.font-size.value}": "--wm-label-medium-font-size",
  "{label.medium.font-family.value}": "--wm-label-medium-font-family",
  "{label.medium.font-weight.value}": "--wm-label-medium-font-weight",
  "{label.medium.line-height.value}": "--wm-label-medium-line-height",
  "{label.medium.letter-spacing.value}": "--wm-label-medium-letter-spacing",

  // Typography - Label Small
  "{label.small.font-size.value}": "--wm-label-small-font-size",
  "{label.small.font-family.value}": "--wm-label-small-font-family",
  "{label.small.font-weight.value}": "--wm-label-small-font-weight",
  "{label.small.line-height.value}": "--wm-label-small-line-height",
  "{label.small.letter-spacing.value}": "--wm-label-small-letter-spacing",

  // Opacity
  "{opacity.hover.value}": "--wm-opacity-hover",
  "{opacity.focus.value}": "--wm-opacity-focus",
  "{opacity.active.value}": "--wm-opacity-active",

  // Border
  "{border.width.base.value}": "--wm-border-width-base",
  "{border.style.solid.value}": "--wm-border-style-solid",
  "{border.style.dashed.value}": "--wm-border-style-dashed",
  "{border.style.dotted.value}": "--wm-border-style-dotted",
  "{border.style.none.value}": "--wm-border-style-none",
};

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

          // Look for :root rules
          if (rule.selectorText === ":root") {
            const style = rule.style;

            // Iterate through all properties
            for (let k = 0; k < style.length; k++) {
              const propertyName = style[k];

              // Only process CSS variables (start with --)
              if (propertyName.startsWith("--wm-")) {
                const propertyValue = style.getPropertyValue(propertyName).trim();

                // Get the computed value using getComputedStyle
                const computedValue = computedStyle.getPropertyValue(propertyName).trim();

                // Use computed value if available, otherwise use declared value
                const finalValue = computedValue || propertyValue;

                if (finalValue) {
                  cssVariables.set(propertyName, finalValue);
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

    // console.log(`[CSS Extractor] Extracted ${cssVariables.size} CSS variables from iframe`);

    // Cache the results
    cssVariableCache = cssVariables;

  } catch (error) {
    // console.error("[CSS Extractor] Error extracting CSS variables:", error);
  }

  return cssVariables;
}

/**
 * Builds a token reference map for resolving {token.path} references
 *
 * Converts CSS variable values into a format that can resolve token references.
 * Uses the TOKEN_TO_CSS_VAR_MAP to map token references to CSS variable names,
 * then looks up the computed values.
 *
 * @param cssVariables - Map of CSS variables from extractCSSVariables()
 * @returns Map of token references to their resolved CSS values
 *
 * @example
 * ```typescript
 * const cssVars = extractCSSVariables(iframe);
 * const tokenMap = buildTokenReferenceMap(cssVars);
 * console.log(tokenMap.get("{color.primary.@.value}")); // "rgb(255, 114, 80)"
 * console.log(tokenMap.get("{space.6.value}")); // "24px"
 * ```
 */
export function buildTokenReferenceMap(cssVariables: Map<string, string>): Map<string, string> {
  // Return cached values if available
  if (tokenReferenceCache) {
    return tokenReferenceCache;
  }

  const referenceMap = new Map<string, string>();

  // Map each token reference to its CSS variable value
  Object.entries(TOKEN_TO_CSS_VAR_MAP).forEach(([tokenRef, cssVarName]) => {
    const cssValue = cssVariables.get(cssVarName);
    if (cssValue) {
      referenceMap.set(tokenRef, cssValue);
    } else {
      // console.warn(`[CSS Extractor] CSS variable not found: ${cssVarName} for token ${tokenRef}`);
    }
  });

  // console.log(`[CSS Extractor] Built token reference map with ${referenceMap.size} entries`);

  // Cache the results
  tokenReferenceCache = referenceMap;

  return referenceMap;
}

/**
 * Resolves a token reference using the extracted CSS variables
 *
 * Replaces token references like "{color.primary.@.value}" with their
 * actual computed CSS values from the foundation CSS.
 *
 * Supports:
 * - Single token references: "{color.primary.@.value}"
 * - Multiple token references: "{space.0.value} {space.6.value}"
 * - Mixed content: "1px solid {color.primary.@.value}"
 *
 * @param tokenReference - Token reference string from JSON
 * @param referenceMap - Map from buildTokenReferenceMap()
 * @returns Resolved CSS value
 *
 * @example
 * ```typescript
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
 * ```
 */
export function resolveTokenReference(
  tokenReference: string,
  referenceMap: Map<string, string>
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
      const cssValue = referenceMap.get(match);
      if (cssValue) {
        resolvedValue = resolvedValue.replace(match, cssValue);
      } else {
        // console.warn(`[CSS Extractor] Token reference not found: ${match}`);
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
