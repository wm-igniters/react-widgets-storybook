/**
 * ============================================================================
 * APP LAUNCHER ADDON REGISTRATION
 * ============================================================================
 *
 * This file registers the AppLauncher addon with Storybook.
 * It adds the AppLauncher component to the toolbar (top header),
 * in the same row as Zoom, Theme, View mode, and other toolbar controls.
 */

import React from "react";
import { addons, types } from "storybook/manager-api";
import { AppLauncherTool } from "./AppLauncherTool";

// Unique addon identifier
const ADDON_ID = "app-launcher";

/**
 * Register the addon with Storybook
 *
 * This adds the AppLauncher component to the Storybook toolbar (top header)
 * using the TOOL type, which places it alongside other toolbar controls.
 */
addons.register(ADDON_ID, () => {
  addons.add(`${ADDON_ID}/tool`, {
    // Tool type - shows in the toolbar header
    type: types.TOOL,

    // Title for the tool
    title: "App Launcher",

    // Render the AppLauncher component
    render: () => <AppLauncherTool />,
  });
});
