/**
 * ============================================================================
 * APP LAUNCHER TOOL
 * ============================================================================
 *
 * This component renders the AppLauncher from wm-ui-components in the
 * Storybook toolbar (top header), alongside other toolbar controls.
 */

import React from "react";
import { AppLauncher } from "wm-ui-components";

export const AppLauncherTool: React.FC = () => {
  return (
    <div className="app-launcher-wrapper">
      <AppLauncher excludeId="webstorybook" />
    </div>
  );
};
