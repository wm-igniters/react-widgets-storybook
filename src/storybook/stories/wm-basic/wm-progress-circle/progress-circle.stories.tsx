import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography, Button } from "@mui/material";

import ProgressCircleDefaultExport from "../../../../components/basic/progress-circle/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import style from "./docs/style.md?raw";
import token from "./docs/token.md?raw";

import progressCircleTokensData from "../../../../designTokens/components/progress-circle/progress-circle.json";

const meta: Meta<typeof ProgressCircleDefaultExport> = {
  title: "Basic/ProgressCircle",
  component: ProgressCircleDefaultExport,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock listener object for the component
const mockListener = {
  appLocale: {
    LABEL_ICON: "Icon",
  },
  Widgets: {},
  onChange: () => {},
};

const Template = (args: any) => {
    // component can't spread data-design-token-target, so we apply it to a wrapper
    const { "data-design-token-target": dataAttr, ...componentArgs } = args;
    
    return (
      <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
        <ProgressCircleDefaultExport {...componentArgs} listener={mockListener} />
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
      style={style}
      token={token}
      externalLink={{
        href: "https://www.figma.com/design/F6S1sF5vM38mn6aLNnGGon/WaveMaker-UI-Kit--Community-?node-id=55141-14252&p=f&t=rE8HvDMpyMdtByDG-0",
        label: "",
      }}
    />
  ),
  args:{
    name:"docsProgressCircle",
    listener:mockListener
  },
  argTypes:{
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Showcase: Story = {
  render: () => {
    return (
      <Box style={{ padding: 16 }}>
        <Stack spacing={3}>
          <Typography variant="h6" fontWeight={600}>Progress Circle Showcase</Typography>
          <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", gap: 3 }}>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Default (30%)
              </Typography>
              <ProgressCircleDefaultExport
                name="allDefault"
                datavalue={30}
                type="default"
                captionplacement="inside"
                listener={mockListener}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Success (75%)
              </Typography>
              <ProgressCircleDefaultExport
                name="allSuccess"
                datavalue={75}
                type="success"
                captionplacement="inside"
                listener={mockListener}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Info (50%)
              </Typography>
              <ProgressCircleDefaultExport
                name="allInfo"
                datavalue={50}
                type="info"
                captionplacement="inside"
                listener={mockListener}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Warning (60%)
              </Typography>
              <ProgressCircleDefaultExport
                name="allWarning"
                datavalue={60}
                type="warning"
                captionplacement="inside"
                listener={mockListener}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Danger (85%)
              </Typography>
              <ProgressCircleDefaultExport
                name="allDanger"
                datavalue={85}
                type="danger"
                captionplacement="inside"
                listener={mockListener}
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    );
  },
  args: {
    name: "allTypes",
    listener: mockListener,
  },
  argTypes:{
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
};

export const Standard: Story = {
  tags: ['show-panel'],
  render: Template,
  args: {
    name: "standardProgressCircle",
    listener: mockListener,
    datavalue: 75,
    type: "default",
    minvalue: 0,
    maxvalue: 100,
    captionplacement: "inside",
    hint: "75% Complete",
    title: "",
    subtitle:"",
    "data-design-token-target": true,
  },
  argTypes: {
    datavalue: { control: "number" },
    minvalue: { control: "number" },
    maxvalue: { control: "number" },
    type: {
      control: { type: "select" },
      options: ["default", "success", "info", "warning", "danger"],
    },
    captionplacement: {
      control: { type: "radio" },
      options: ["hidden", "inside"],
    },
    // displayformat: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    hint: { control: "text" },
    "data-design-token-target": { table: { disable: true } },
    listener: { table: { disable: true } },
    name: { table: { disable: true } }
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: progressCircleTokensData,
      componentKey: "progress-circle",
      extractCSSVariablesAtRuntime: true,
      propToVariantMap: {
        propName: "type",
        mapping: {
          default: "progress-circle-default",
          success: "progress-circle-success",
          info: "progress-circle-info",
          warning: "progress-circle-warning",
          danger: "progress-circle-danger"
        }
      }
    },
    layout: 'fullscreen',
  },
};