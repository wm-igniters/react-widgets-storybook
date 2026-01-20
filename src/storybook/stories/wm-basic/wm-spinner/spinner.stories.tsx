import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography, Button } from "@mui/material";

import SpinnerDefaultExport from "../../../../components/basic/spinner/index";
import { animationNames } from "../../constants/animationsConstants";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import token from "./docs/token.md?raw";

import spinnerTokensData from "../../../../designTokens/components/spinner/spinner.json";

const meta: Meta<typeof SpinnerDefaultExport> = {
  title: "Basic/Spinner",
  component: SpinnerDefaultExport,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock listener object for the component
const mockListener = {
  appLocale: {
    LABEL_ICON: "Icon",
  },
  Widgets: {},
  Variables: {},
};

const Template = (args: any) => {
  // Spinner component can't spread data-design-token-target, so we apply it to a wrapper
    const { "data-design-token-target": dataAttr, ...componentArgs } = args as any;

    return (
      <Box className="wm-app" style={{ padding: 16 }} data-design-token-target={dataAttr}>
        <SpinnerDefaultExport {...componentArgs} listener={mockListener} />
      </Box>
    );
}

export const Docs: Story = {
  render: () => (
    <ComponentDocumentation
      overview={overview}
      properties={props}
      events={events}
      methods={methods}
      // styling={styling}
      token={token}
    />
  ),
  args:{
    name:"docsSpinner",
    listener:mockListener
  },
  argTypes: {
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Showcase: Story = {
  render: () => {
    const spinners = [
      {
        title: "Default Spinner",
        props: {
          name: "defaultSpinner",
          type: "default",
          show: true,
        },
      },
      {
        title: "Icon Spinner",
        props: {
          name: "iconSpinner",
          type: "icon",
          show: true,
          iconsize: "32px",
          iconclass: "fa fa-circle-o-notch fa-spin",
        },
      },
      {
        title: "Image Spinner",
        props: {
          name: "imageSpinner",
          type: "image",
          show: true,
          image:
            "https://media2.giphy.com/media/yyqOUPn5souNBSHUnU/giphy.gif?cid=6c09b952r7hflymkr24fukor7o0567zf293elcewo9s3tia2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",
          imagewidth: "50px",
          imageheight: "50px",
        },
      },
    ];

    return (
      <Box sx={{ p: 4 }}>
        {/* Heading */}
         <Box mb={4}>
          <Typography variant="h6" fontWeight={600}>
            Spinner Showcase
          </Typography>
        </Box>

        {/* Single Row */}
        <Stack direction="row" spacing={8} alignItems="center">
          {spinners.map((spinner, index) => (
            <Box key={index} textAlign="center">
              <Typography variant="caption" mb={1}>
                {spinner.title}
              </Typography>
              <SpinnerDefaultExport
                {...spinner.props}
                listener={mockListener}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    );
  },
  args: {
    name: "showcaseSpinners",
    listener: mockListener,
  },
  argTypes: {
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export const Standard: Story = {
  tags: ['show-panel'],
  render: Template,
  args: {
    name: "standardSpinner",
    caption: "Loading...",
    listener: mockListener,
    show: true,
    type: "default",
    "data-design-token-target": true
  },
  argTypes: {
    caption: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["icon", "image", "default"],
    },
    show: { control: "boolean" },
    iconclass:{
      control:{
        type:"select"
      },
      options:["wi wi-spinner", "fa fa-spinner fa-spin", "fa fa-cog fa-spin", "fa fa-refresh fa-spin",],
    },
    iconsize: { control: "text" },
    image: { control: "text" },
    imagewidth: { control: "text" },
    imageheight: { control: "text" },
    animation: {
      control: { type: "select" },
      options: animationNames,
    },
    "data-design-token-target": { table: { disable: true } },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: spinnerTokensData,  // Pass raw JSON data instead of pre-parsed config
      componentKey: "spinner",  // Component identifier for parsing
      extractCSSVariablesAtRuntime: true,  // Enable runtime CSS variable extraction
      // Note: propToVariantMap not needed - spinner JSON has no variant definitions
      // The spinner component uses base tokens only (no variants for default/icon/image types)
    },
    layout: 'fullscreen',
  }, 
};