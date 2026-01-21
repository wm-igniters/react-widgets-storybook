import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import WmMenu from "../../../../components/navigation/menu";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import style from "./docs/style.md?raw";
import token from "./docs/token.md?raw";

import { iconClassNames } from "../../constants/iconClassConstants";

import dropdownMenuTokensData from "../../../../designTokens/components/dropdown-menu/dropdown-menu.json";
import { C } from "node_modules/@fullcalendar/core/internal-common";


const meta = {
  title: "Navigation/Menu",
  component: WmMenu,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof WmMenu>;

// Mock listener object for the component
const mockListener = {
  appLocale: {
    LABEL_ICON: "Icon",
  },
  Widgets: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const DesignTokenTemplate = (args: any) => {
  // Component can't spread data-design-token-target, so we apply it to a wrapper
  const { "data-design-token-target": dataAttr, ...componentArgs } = args;

  return (
    <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
      <WmMenu {...componentArgs} listener={mockListener}/>
    </Box>
  );
};

const menuItems = [
  { label: "Home", icon: "wi wi-home" },
  { label: "Profile", icon: "wi wi-person" },
  { label: "Settings", icon: "wi wi-settings" },
  { label: "Logout", icon: "wi wi-sign-out" },
];

export const Docs: Story = {
  render: () => (
    <ComponentDocumentation
      overview={overview}
      properties={props}
      events={events}
      methods={methods}
      // styling={styling}
      style={style}
      token={token}
      externalLink={{
        href: "https://www.figma.com/design/F6S1sF5vM38mn6aLNnGGon/WaveMaker-UI-Kit--Community-?node-id=55141-14250&p=f&t=TmoXZ4j5uVxcseDO-0",
        label: "",
      }}
    />
  ),
  args:{
    name:"docsMenu",
    listener:mockListener
  },
  argTypes:{
    name: {table: {disable : true}},
    listener: {table: {disable: true}}
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Showcase: Story = {
  render: () => {
    const showcaseItems = [
      {
        title: "Menu Position: down,right",
        props: { menuposition: "down,right" },
      },
      {
        title: "Menu Position: up,left",
        props: { menuposition: "up,left" },
      },
      {
        title: "Menu Layout: vertical",
        props: { menulayout: "vertical" },
      },
      {
        title: "Menu Layout: horizontal",
        props: { menulayout: "horizontal" },
      },
      {
        title: "Show on Hover: Enabled",
        props: { showonhover: true },
      },
      {
        title: "Show on Hover: Disabled",
        props: { showonhover: false },
      },
      {
        title: "AutoOpen: never, AutoClose: outsideClick",
        props: { autoopen: "never", autoclose: "outsideClick" },
      },
      {
        title: "AutoOpen: always, AutoClose: disabled",
        props: { autoopen: "always", autoclose: "disabled" },
      },
    ];

    return (
      <Box sx={{ width: "100%", p: 4 }}>
        <Box sx={{mb: 3}}>
          <Typography variant="h6" fontWeight={600}>
            Menu Showcase
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {showcaseItems.map(({ title, props }, index) => (
            <Box key={index}>
              <Typography variant="subtitle2" color="text.secondary" style={{marginBottom: "6px"}}>
                {title}
              </Typography>
              <WmMenu
                name={`menu_showcase_${index}`}
                caption="Menu"
                width="200px"
                iconposition="left"
                iconclass="wi wi-menu"
                menualign="left"
                dataset={menuItems}
                listener={mockListener}
                {...props}
              />
            </Box>
          ))}
        </Box>
      </Box>
    );
  },
  args: {
    name: "menuShowcase",
    listener: mockListener,
  },
  argTypes:{
    name: {table: {disable : true}},
    listener: {table: {disable: true}}
  },
};

export const Standard: Story = {
  tags: ['show-panel'],
  render: DesignTokenTemplate,
  args: {
    name:"standardMenu",
    caption: "Menu",
    width: "200px",
    height: "auto",
    // iconposition: "left",
    iconclass: "",
    disableMenuContext: false,
    menuposition: "down,right",
    // menualign: "left",
    menulayout: "vertical",
    showonhover: false,
    autoclose: "outsideClick",
    autoopen: "never",
    dataset: menuItems,
    listener: mockListener,
    "data-design-token-target":true
  },
  argTypes: {
    caption: { control: "text" },
    height: { control: "text" },
    width: { control: "text" },
    // iconposition: { control: "select", options: ["left", "center", "right"] },
    iconclass:{ control:{ type:"select"}, options: iconClassNames },
    disableMenuContext: { control: "boolean" },
    menulayout: { control: "select", options: ["vertical", "horizontal"] },
    menuposition: { control: "select", options: ["down,left", "down,right", "up,left", "up,right"] },
    // menualign: { control: "select", options: ["left", "center", "right"] },
    showonhover: { control: "boolean" },
    // autoclose: { control: "boolean" },
    autoclose: {
      control: { type: "select" },
      options: ["always", "outsideClick", "disabled"],
    },
    // autoopen: { control: "boolean" } 
    autoopen: {
      control: { type: "select" },
      options: ["never", "always", "activePage"],
    },
    "data-design-token-target": { table : {disable : true} },
    name:{table : {disable : true}},
    listener:{table: {disable : true}}
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: dropdownMenuTokensData,
      componentKey: "dropdown",
      extractCSSVariablesAtRuntime: true,
    },
    layout: 'fullscreen',
  },
};

