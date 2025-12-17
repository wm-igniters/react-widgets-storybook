// Mock for @wavemaker/variables package used in Storybook environment
// This provides stub implementations for variable-related functionality

/**
 * Mock implementation of wmSetDependency
 * In production, this sets dependencies for the WaveMaker variable system
 * In Storybook, we just log the call for debugging purposes
 */
export const wmSetDependency = (key: string, value: any) => {
  // console.log(`[Mock] wmSetDependency called with key: ${key}`, value);
  // No-op in Storybook environment
};

/**
 * Mock implementation of wmGetDependency
 * Returns undefined as dependencies are not available in Storybook
 */
export const wmGetDependency = (key: string) => {
  // console.log(`[Mock] wmGetDependency called with key: ${key}`);
  return undefined;
};

// Export other potential functions that might be needed
export default {
  wmSetDependency,
  wmGetDependency,
};
