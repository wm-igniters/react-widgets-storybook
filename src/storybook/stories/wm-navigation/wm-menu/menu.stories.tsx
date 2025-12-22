import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WmMenu from "../../../../components/navigation/menu";


const meta = {
  title: "Navigation/Menu",
  component: WmMenu,
  argTypes: {
    caption: { control: "text" },
    height: { control: "text" },
    width: { control: "text" },
    iconposition: { control: "text" },
    iconclass: { control: "text" },
    disableMenuContext: { control: "boolean" },
    menulayout: { control: "select", options: ["vertical", "horizontal"] },
    menuposition: { control: "select", options: ["down,left", "down,right", "up,left", "up,right"] },
    menualign: { control: "select", options: ["left", "center", "right"] },
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
    }
  },
  parameters: {
    layout: "padded",
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

const menuItems = [
  { label: "Home", icon: "fa-thin fa-link" },
  { label: "Profile", icon: "wi wi-person" },
  { label: "Settings", icon: "wi wi-settings" },
  { label: "Logout", icon: "wi wi-power-settings-new" },
];

export const Basic: Story = {
  args: {
    name:"basicMenu",
    caption: "Menu",
    width: "200px",
    height: "auto",
    iconposition: "left",
    iconclass: "wm-icon wm-icon-menu",
    disableMenuContext: false,
    menuposition: "down,right",
    menualign: "left",
    menulayout: "vertical",
    showonhover: false,
    autoclose: "outsideClick",
    autoopen: "never",
    dataset: menuItems,
    listener: mockListener,
  }
};
