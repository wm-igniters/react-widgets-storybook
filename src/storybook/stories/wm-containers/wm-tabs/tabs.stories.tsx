import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import WmTabs from "../../../../components/container/tabs";
import WmTabPane from "../../../../components/container/tabs/tab-pane";

import tabsTokensData from "../../../../designTokens/components/tabs/tabs.json";


import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import token from "./docs/token.md?raw";

const mockListener = {
  appLocale: {},
  Widgets: {},
  onChange: () => {},
};

const meta = {
  title: "Containers/Tabs",
  component: WmTabs,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof WmTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <ComponentDocumentation
      overview={overview}
      properties={props}
      events={events}
      methods={methods}
    //   styling={styling}
    token={token}
    />
  ),
  args: {
    name: "DocsTabs",
    dataset: [],
    listener: mockListener,
  },
  argTypes:{
    name:{table:{disable: true}},
    dataset: {table: {disable: true}},
    listener: {table: {disable: true}}
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const Showcase: Story = {
  render: () => {
    return (
      <Box sx={{ p: 4 }}>
        <Stack spacing={4}>
          {/* Main Heading */}
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Tabs Showcase
            </Typography>
          </Box>

          {/* Tab Positions Section */}
          <Stack spacing={1.5}>
            {/* <Typography variant="subtitle2" color="text.secondary">
              Tab Positions - Top (Default)
            </Typography> */}

            {/* Top Position */}
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" color="text.secondary">
              Tab Position - Top (Default)
            </Typography>
            <WmTabs
              name="topTabs"
              type="static"
              dataset={[]}
              defaultpaneindex={0}
              tabsposition="top"
              listener={mockListener}
            >
              <WmTabPane name="tab1" title="Home" listener={mockListener} index={0}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2">
                    Tabs positioned at the top of the content. This is the most common layout for desktop applications.
                  </Typography>
                </Box>
              </WmTabPane>
              <WmTabPane name="tab2" title="Profile" listener={mockListener} index={1}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2">
                    Click between tabs to switch content. Each tab maintains its own state.
                  </Typography>
                </Box>
              </WmTabPane>
              <WmTabPane name="tab3" title="Settings" listener={mockListener} index={2}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2">
                    Top-positioned tabs are ideal for dashboards and content-heavy interfaces.
                  </Typography>
                </Box>
              </WmTabPane>
            </WmTabs>
            </Stack>

            {/* Bottom Position */}
            <Stack spacing={1.5} style={{marginBottom: "24px"}}>
              <Typography variant="subtitle2" color="text.secondary">
                Tab Position - Bottom
              </Typography>
              <WmTabs
                name="bottomTabs"
                type="static"
                dataset={[]}
                defaultpaneindex={0}
                tabsposition="bottom"
                listener={mockListener}
                >
                <WmTabPane name="tab1" title="Dashboard" listener={mockListener} index={0}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Tabs positioned at the bottom for mobile-like navigation patterns.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab2" title="Messages" listener={mockListener} index={1}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Bottom positioning puts content first and navigation second.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab3" title="Alerts" listener={mockListener} index={2}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Common in mobile apps and wizard-style interfaces.
                    </Typography>
                  </Box>
                </WmTabPane>
              </WmTabs>
            </Stack>

            {/* Left Position */}
            <Stack spacing={1.5} style={{marginBottom: "24px"}}>
              <Typography variant="subtitle2" color="text.secondary">
                Tab Position - Left
              </Typography>
              <Box sx={{ height: "auto" }}>
                <WmTabs
                  name="leftTabs"
                  type="static"
                  dataset={[]}
                  defaultpaneindex={0}
                  tabsposition="left"
                  listener={mockListener}
                    >
                  <WmTabPane name="tab1" title="Overview" listener={mockListener} index={0}>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body2">
                        Vertical tabs on the left are ideal for settings panels and configuration screens.
                      </Typography>
                    </Box>
                  </WmTabPane>
                  <WmTabPane name="tab2" title="Details" listener={mockListener} index={1}>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body2">
                        Left positioning works well when you have limited horizontal space.
                      </Typography>
                    </Box>
                  </WmTabPane>
                  <WmTabPane name="tab3" title="Actions" listener={mockListener} index={2}>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body2">
                        Allows for longer tab labels without horizontal scrolling.
                      </Typography>
                    </Box>
                  </WmTabPane>
                </WmTabs>
              </Box>
            </Stack>

            {/* Right Position */}
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" color="text.secondary">
                Tab Position - Right
              </Typography>
              <Box sx={{ height: "auto" }}>
                <WmTabs
                  name="rightTabs"
                  type="static"
                  dataset={[]}
                  defaultpaneindex={0}
                  tabsposition="right"
                  listener={mockListener}
                    >
                  <WmTabPane name="tab1" title="Info" listener={mockListener} index={0}>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body2">
                        Vertical tabs on the right provide an alternative navigation pattern.
                      </Typography>
                    </Box>
                  </WmTabPane>
                  <WmTabPane name="tab2" title="Help" listener={mockListener} index={1}>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body2">
                        Right positioning can be used for secondary navigation or help panels.
                      </Typography>
                    </Box>
                  </WmTabPane>
                  <WmTabPane name="tab3" title="Support" listener={mockListener} index={2}>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body2">
                        Useful for sidebar-style layouts and contextual panels.
                      </Typography>
                    </Box>
                  </WmTabPane>
                </WmTabs>
              </Box>
            </Stack>
          </Stack>

          {/* Justified Layout Section - COMMENTED OUT: Not working properly with active state */}
          {/* <Box>
            <Typography variant="subtitle1" fontWeight={600} mb={3}>
              Justified Layout
            </Typography>

            <Box mb={4}>
              <Typography variant="subtitle2" color="text.secondary" mb={2}>
                Justified Tabs
              </Typography>
              <WmTabs
                name="justifiedTabs"
                type="static"
                dataset={[]}
                defaultpaneindex={0}
                justified={true}
                listener={mockListener}
                >
                <WmTabPane name="tab1" title="Dashboard" paneicon="fa fa-dashboard" listener={mockListener} index={0}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Justified tabs stretch to fill the available width, distributing space equally among all tabs.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab2" title="Analytics" paneicon="fa fa-bar-chart" listener={mockListener} index={1}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Each tab takes equal width regardless of the tab title length.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab3" title="Reports" paneicon="fa fa-file-text" listener={mockListener} index={2}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Useful for dashboards and admin panels where you want a balanced appearance.
                    </Typography>
                  </Box>
                </WmTabPane>
              </WmTabs>
            </Box>
          </Box> */}

          {/* Icon Positions Section */}
          <Box>
            {/* <Typography variant="subtitle1" fontWeight={600} mb={3}>
              Icon Positions
            </Typography> */}

            {/* Icon Left */}
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" color="text.secondary">
                Icon Postion - Left (Default)
              </Typography>
              <WmTabs
                name="iconLeftTabs"
                type="static"
                dataset={[]}
                defaultpaneindex={0}
                iconposition="left"
                listener={mockListener}
                >
                <WmTabPane name="tab1" title="Documents" paneicon="fa fa-file" listener={mockListener} index={0}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Icons positioned to the left of the tab label for natural reading flow.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab2" title="Images" paneicon="fa fa-image" listener={mockListener} index={1}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      This is the most common icon placement for horizontal tabs.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab3" title="Videos" paneicon="fa fa-video" listener={mockListener} index={2}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Left-aligned icons create a familiar left-to-right reading order.
                    </Typography>
                  </Box>
                </WmTabPane>
              </WmTabs>
            </Stack>

            {/* Icon Right */}
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" color="text.secondary">
                Icon Position - Right
              </Typography>
              <WmTabs
                name="iconRightTabs"
                type="static"
                dataset={[]}
                defaultpaneindex={0}
                iconposition="right"
                listener={mockListener}
                >
                <WmTabPane name="tab1" title="Downloads" paneicon="fa fa-download" listener={mockListener} index={0}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Icons positioned to the right of the tab label for emphasis on actions.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab2" title="Uploads" paneicon="fa fa-upload" listener={mockListener} index={1}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Right-aligned icons draw attention to the icon itself.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab3" title="Share" paneicon="fa fa-share" listener={mockListener} index={2}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Useful when the icon represents an action or result.
                    </Typography>
                  </Box>
                </WmTabPane>
              </WmTabs>
            </Stack>

            {/* Icon Top */}
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" color="text.secondary">
                Icon Position - Top
              </Typography>
              <WmTabs
                name="iconTopTabs"
                type="static"
                dataset={[]}
                defaultpaneindex={0}
                iconposition="top"
                listener={mockListener}
                >
                <WmTabPane name="tab1" title="Music" paneicon="fa fa-music" listener={mockListener} index={0}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Icons positioned above the tab label for a more visual, icon-focused layout.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab2" title="Photos" paneicon="fa fa-camera" listener={mockListener} index={1}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Top-aligned icons create a more prominent visual hierarchy.
                    </Typography>
                  </Box>
                </WmTabPane>
                <WmTabPane name="tab3" title="Games" paneicon="fa fa-gamepad" listener={mockListener} index={2}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Common in mobile interfaces and icon-heavy designs.
                    </Typography>
                  </Box>
                </WmTabPane>
              </WmTabs>
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
  },
  args: {
    name: "showcaseTabs",
    dataset: [],
    listener: mockListener,
  },
  argTypes: {
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
    dataset: {table: {disable: true}}
  },
};

export const Standard: Story = {
  tags: ["show-panel"],
  render: (args) => {
    const { "data-design-token-target": dataAttr, ...componentArgs } = args as any;

    return (
      <Box style={{ padding: 16, width: "100%" }} data-design-token-target={dataAttr}>
        <WmTabs key={`${args.justified}-${args.tabsposition}-${args.iconposition}`} {...args}>
          <WmTabPane
            name="pane1"
            title="Tab 1"
            paneicon="fa fa-file"
            listener={mockListener}
            index={0}
            {...componentArgs}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="body1" gutterBottom>
                This is the content for Tab 1. Click on other tabs to switch content.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Each tab can display different information and components.
              </Typography>
            </Box>
          </WmTabPane>

          <WmTabPane
            name="pane2"
            title="Tab 2"
            paneicon="fa fa-folder"
            listener={mockListener}
            index={1}
            {...componentArgs}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="body1" gutterBottom>
                This is the content for Tab 2. Click on other tabs to switch content.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The tab switching is instant and maintains the state of each panel.
              </Typography>
            </Box>
          </WmTabPane>

          <WmTabPane
            name="pane3"
            title="Tab 3"
            paneicon="fa fa-cog"
            listener={mockListener}
            index={2}
            {...componentArgs}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="body1" gutterBottom>
                This is the content for Tab 3. Click on other tabs to switch content.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tabs are perfect for organizing related content in a compact space.
              </Typography>
            </Box>
          </WmTabPane>
        </WmTabs>
      </Box>
    );
  },
  args: {
    name: "StandardTabs",
    type: "static",
    dataset: [],
    defaultpaneindex: 0,
    justified: false,
    tabsposition: "top",
    iconposition:"left",
    listener: mockListener,
    "data-design-token-target": true,
  },
  argTypes: {
    // justified: { control: "boolean" },
    justified: {table: {disable: true}},
    defaultpaneindex: { control: "number" },
    tabsposition: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    iconposition: {
      control: { type: "select" },
      options: ["left", "right", "top"],
    },
    type: { table: { disable: true } },
    dataset: { table: { disable: true } },
    "data-design-token-target": { table: { disable: true } },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: tabsTokensData,
      componentKey: "tabs",
      extractCSSVariablesAtRuntime: true,
    },
    layout: "fullscreen",
  },
};

// export const DynamicTabs: Story = {
//   tags: ["show-panel"],
//   render: (args) => {
//     // Render function to display tab content from dataset
//     const renderTabContent = (item: any, index: number) => {
//       // Return a wrapper (fragment) that contains the WmTabPane so the parent
//       // `WmTabs` can inspect `render(...).props.children` to find the pane props
//       // (title/name) when building the tab headers for dynamic datasets.
//       return (
//         <>
//           <WmTabPane
//             key={index}
//             name={item.name}
//             title={item.title}
//             paneicon={item.paneicon}
//             index={index}
//             listener={mockListener}
//           >
//             <Box sx={{ p: 2 }}>
//               <Typography variant="body1">{item.content}</Typography>
//             </Box>
//           </WmTabPane>
//         </>
//       );
//     };

//     return (
//       <Box style={{ padding: 16, width: "100%" }}>
//         <WmTabs {...args} render={renderTabContent} />
//       </Box>
//     );
//   },
//   args: {
//     name: "DynamicTabs",
//     type: "dynamic",
//     dataset: [
//       {
//         name: "dashboard",
//         title: "Dashboard",
//         paneicon: "fa fa-dashboard",
//         content: "Welcome to the Dashboard. View all your key metrics and analytics here.",
//       },
//       {
//         name: "reports",
//         title: "Reports",
//         paneicon: "fa fa-file-text",
//         content: "Access and generate comprehensive reports for your business data.",
//       },
//       {
//         name: "analytics",
//         title: "Analytics",
//         paneicon: "fa fa-bar-chart",
//         content: "Deep dive into analytics with detailed charts and visualizations.",
//       },
//       {
//         name: "settings",
//         title: "Settings",
//         paneicon: "fa fa-cog",
//         content: "Configure your application settings and preferences.",
//       },
//       {
//         name: "users",
//         title: "Users",
//         paneicon: "fa fa-users",
//         content: "Manage user accounts, permissions, and access controls.",
//       },
//     ],
//     defaultpaneindex: 0,
//     tabsposition: "top",
//     listener: mockListener,
//   },
//   argTypes: {
//     defaultpaneindex: { control: "number" },
//     tabsposition: {
//       control: { type: "select" },
//       options: ["top", "bottom", "left", "right"],
//     },
//     iconposition: {
//       control: { type: "select" },
//       options: ["left", "right", "top", "bottom"],
//     },
//     type: { table: { disable: true } },
//     dataset: { control: "object" },
//     name: { table: { disable: true } },
//     listener: { table: { disable: true } },
//   },
// };
