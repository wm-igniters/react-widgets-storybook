import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography, Divider } from "@mui/material";

import WmNav from "../../../../components/navbar/nav/index";
import WmNavItem from "../../../../components/navbar/nav-item";
import WmAnchor from "../../../../components/basic/anchor/index";
import WmMenu from "../../../../components/navigation/menu/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import style from "./docs/style.md?raw";
import token from "./docs/token.md?raw";

import navTokensData from "../../../../designTokens/components/nav/nav.json";

const meta: Meta<typeof WmNav> = {
  title: "Navigation/Nav",
  component: WmNav,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock listener object for the component
const mockListener = {
  appLocale: {
    LABEL_ICON: "Icon",
  },
  Widgets: {},
};

export const Docs: Story = {
  render: () => (
    <ComponentDocumentation
      overview={overview}
      properties={props}
      events={events}
      methods={methods}
    //   styling={styling}
      style={style}
      token={token}
      externalLink={{
        href: "https://www.figma.com/design/F6S1sF5vM38mn6aLNnGGon/WaveMaker-UI-Kit--Community-?node-id=55141-14251&p=f",
        label: "",
      }}
    />
  ),
  args: {
    name: "docsNav",
    listener: mockListener,
  },
  argTypes: {
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Showcase: Story = {
  render: () => {
    return (
      <Box width="100%" className="wm-app">
        {/* Showcase Heading */}
        <Box px={{ xs: 2, md: 3 }} py={2}>
          <Typography variant="h6" fontWeight={600} textAlign="left">
            Nav Component Showcase
          </Typography>
        </Box>

        {/* 1. Pills - Default/Horizontal Layout (undefined) */}
        <Box mb={4} width="100%">
          <Box px={{ xs: 2, md: 3 }} mb={2}>
            <Typography variant="subtitle1" fontWeight={500} gutterBottom>
              1. Pills Navigation - Default Layout
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
              Pills with undefined layout (horizontal default)
            </Typography>
          </Box>

          <WmNav name="pills-default-nav" listener={mockListener} type="pills">
            <WmNavItem name="nav-overview" listener={mockListener} className="active">
              <WmAnchor
                name="nav-overview-anchor"
                caption="Overview"
                iconclass="fa fa-eye"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            <WmNavItem name="nav-details" listener={mockListener}>
              <WmAnchor
                name="nav-details-anchor"
                caption="Details"
                iconclass="fa fa-info-circle"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            <WmNavItem name="nav-history" listener={mockListener}>
              <WmAnchor
                name="nav-history-anchor"
                caption="History"
                iconclass="fa fa-history"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            <WmNavItem name="nav-settings" listener={mockListener}>
              <WmAnchor
                name="nav-settings-anchor"
                caption="Settings"
                iconclass="fa fa-cog"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
          </WmNav>
          <Divider sx={{ mt: 3 }} />
        </Box>

        {/* 2. Pills - Justified Layout */}
        <Box mb={4} width="100%">
          <Box px={{ xs: 2, md: 3 }} mb={2}>
            <Typography variant="subtitle1" fontWeight={500} gutterBottom>
              2. Pills Navigation - Justified Layout
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
              Pills with justified layout (full width distribution)
            </Typography>
          </Box>

          <WmNav name="pills-justified-nav" listener={mockListener} type="pills" layout="justified">
            <WmNavItem name="nav-dashboard" listener={mockListener} className="active">
              <WmAnchor
                name="nav-dashboard-anchor"
                caption="Dashboard"
                iconclass="fa fa-dashboard"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            <WmNavItem name="nav-analytics" listener={mockListener}>
              <WmAnchor
                name="nav-analytics-anchor"
                caption="Analytics"
                iconclass="fa fa-chart-bar"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            <WmNavItem name="nav-reports" listener={mockListener}>
              <WmAnchor
                name="nav-reports-anchor"
                caption="Reports"
                iconclass="fa fa-file-text"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            {/* <WmNavItem name="nav-more" listener={mockListener}>
              <WmMenu
                name="nav-more-menu"
                caption="More"
                iconclass="fa fa-ellipsis-v"
                listener={mockListener}
                dataset={[
                  { label: "Settings", icon: "fa fa-cog", link: "#settings" },
                  { label: "Profile", icon: "fa fa-user", link: "#profile" },
                  { label: "Help", icon: "fa fa-question-circle", link: "#help" },
                ]}
                itemlabel="label"
                itemicon="icon"
                itemlink="link"
              />
            </WmNavItem> */}
          </WmNav>
          <Divider sx={{ mt: 3 }} />
        </Box>

        {/* 3. Pills - Stacked Layout */}
        <Box mb={4} width="100%">
          <Box px={{ xs: 2, md: 3 }} mb={2}>
            <Typography variant="subtitle1" fontWeight={500} gutterBottom>
              3. Pills Navigation - Stacked Layout
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
              Pills with stacked layout (vertical)
            </Typography>
          </Box>

          <Box sx={{ maxWidth: "300px" }}>
            <WmNav name="pills-stacked-nav" listener={mockListener} type="pills" layout="stacked">
              <WmNavItem name="nav-home" listener={mockListener} className="active">
                <WmAnchor
                  name="nav-home-anchor"
                  caption="Home"
                  iconclass="fa fa-home"
                  hyperlink=""
                  target="_self"
                  listener={mockListener}
                />
              </WmNavItem>
              <WmNavItem name="nav-profile" listener={mockListener}>
                <WmAnchor
                  name="nav-profile-anchor"
                  caption="Profile"
                  iconclass="fa fa-user"
                  hyperlink=""
                  target="_self"
                  listener={mockListener}
                />
              </WmNavItem>
              <WmNavItem name="nav-messages" listener={mockListener}>
                <WmAnchor
                  name="nav-messages-anchor"
                  caption="Messages"
                  iconclass="fa fa-envelope"
                  hyperlink=""
                  target="_self"
                  listener={mockListener}
                />
              </WmNavItem>
              <WmNavItem name="nav-settings-stacked" listener={mockListener}>
                <WmAnchor
                  name="nav-settings-stacked-anchor"
                  caption="Settings"
                  iconclass="fa fa-cog"
                  hyperlink=""
                  target="_self"
                  listener={mockListener}
                />
              </WmNavItem>
            </WmNav>
          </Box>
          <Divider sx={{ mt: 3 }} />
        </Box>

        {/* 4. Tabs - Default Layout */}
        {/* <Box mb={4} width="100%">
          <Box px={{ xs: 2, md: 3 }} mb={2}>
            <Typography variant="subtitle1" fontWeight={500} gutterBottom>
              4. Tabs Navigation - Default Layout
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
              Tab-style navigation with default layout
            </Typography>
          </Box>

          <WmNav name="tabs-nav" listener={mockListener} type="tabs">
            <WmNavItem name="nav-tab1" listener={mockListener} className="active">
              <WmAnchor
                name="nav-tab1-anchor"
                caption="Overview"
                iconclass="fa fa-eye"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            <WmNavItem name="nav-tab2" listener={mockListener}>
              <WmAnchor
                name="nav-tab2-anchor"
                caption="Details"
                iconclass="fa fa-info-circle"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            <WmNavItem name="nav-tab3" listener={mockListener}>
              <WmAnchor
                name="nav-tab3-anchor"
                caption="History"
                iconclass="fa fa-history"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
            <WmNavItem name="nav-tab4" listener={mockListener}>
              <WmAnchor
                name="nav-tab4-anchor"
                caption="Settings"
                iconclass="fa fa-cog"
                hyperlink=""
                target="_self"
                listener={mockListener}
              />
            </WmNavItem>
          </WmNav>
          <Divider sx={{ mt: 3 }} />
        </Box> */}
      </Box>
    );
  },
  args: {
    name: "showcaseNav",
    listener: mockListener,
  },
  argTypes: {
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Standard: Story = {
  tags: ["show-panel"],
  render: (args) => {
    const { "data-design-token-target": dataAttr, ...componentArgs } = args as any;

    return (
      <Box className="wm-app" data-design-token-target={dataAttr} p={3} sx={{width:"100%"}}>
        <WmNav {...componentArgs} listener={mockListener}>
          <WmNavItem name="nav-home" listener={mockListener} className="active">
            <WmAnchor
              name="nav-home-anchor"
              caption="Link 1"
            //   iconclass="fa fa-home"
              hyperlink=""
              target="_self"
              listener={mockListener}
            />
          </WmNavItem>

          <WmNavItem name="nav-dashboard" listener={mockListener}>
            <WmAnchor
              name="nav-dashboard-anchor"
              caption="Link 2"
            //   iconclass="fa fa-dashboard"
              hyperlink=""
              target="_self"
              listener={mockListener}
            />
          </WmNavItem>

          <WmNavItem name="nav-analytics" listener={mockListener}>
            <WmAnchor
              name="nav-analytics-anchor"
              caption="Link 3"
            //   iconclass="fa fa-chart-bar"
              hyperlink=""
              target="_self"
              listener={mockListener}
            />
          </WmNavItem>

          {/* <WmNavItem name="nav-more" listener={mockListener}>
            <WmMenu
              name="nav-more-menu"
              caption="More"
              iconclass="fa fa-ellipsis-v"
              listener={mockListener}
              dataset={[
                { label: "Settings", icon: "fa fa-cog", link: "#settings" },
                { label: "Profile", icon: "fa fa-user", link: "#profile" },
                { label: "Help", icon: "fa fa-question-circle", link: "#help" },
              ]}
              itemlabel="label"
              itemicon="icon"
              itemlink="link"
            />
          </WmNavItem> */}
        </WmNav>
      </Box>
    );
  },
  args: {
    name: "standardNav",
    type: "pills",
    layout: undefined,
    "data-design-token-target": "true",
  },
  argTypes: {
    "data-design-token-target": { table: { disable: true } },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
    type: {
      control: "select",
      options: ["pills", "tabs"],
      table: {disable: true}
    },
    layout: {
      control: "select",
      options: ["stacked", "justified", "undefined"],
    },
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: navTokensData,
      componentKey: "nav",
      extractCSSVariablesAtRuntime: true,
    },
    layout: "fullscreen",
  },
};
