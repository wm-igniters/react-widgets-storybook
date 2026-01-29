import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";

import ButtonGroupDefaultExport from "../../../../components/form/button-group/index";
import ButtonDefaultExport from "../../../../components/form/button/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import style from "./docs/style.md?raw";
import token from "./docs/token.md?raw";

// Import design tokens from the centralized design tokens directory
import buttonGroupTokensData from "../../../../designTokens/components/button-group/button-group.json";

const mockListener = {
  appLocale: {
    LABEL_ICON: "Icon",
  },
  Widgets: {},
};

const meta: Meta<typeof ButtonGroupDefaultExport> = {
  title: "Basic/Button Group",
  component: ButtonGroupDefaultExport,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  return (
    <Box style={{ padding: 16 }}>
      <ButtonGroupDefaultExport {...args} listener={mockListener}>
        <ButtonDefaultExport
          name="button1"
          caption="Left"
          type="button"
        //   className="btn-filled btn-primary"
          listener={mockListener}
        />
        <ButtonDefaultExport
          name="button2"
          caption="Center"
          type="button"
        //   className="btn-filled btn-primary"
          listener={mockListener}
        />
        <ButtonDefaultExport
          name="button3"
          caption="Right"
          type="button"
        //   className="btn-filled btn-primary"
          listener={mockListener}
        />
      </ButtonGroupDefaultExport>
    </Box>
  );
};

export const Docs: Story = {
  render: () => (
    <ComponentDocumentation
      overview={overview}
      properties={props}
      events={events}
      methods={methods}
    //   style={style}
      token={token}
    />
  ),
  args: {
    name: "docsButtonGroup",
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
      <Box sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Typography variant="h6" fontWeight={600}>
            Button Group Showcase
          </Typography>

          {/* Horizontal Button Group */}
          <Stack spacing={1.5}>
            <Typography variant="subtitle2" color="text.secondary">
              Horizontal Layout
            </Typography>

            <Stack direction="row" spacing={4}>
              <ButtonGroupDefaultExport
                name="horizontalGroup"
                listener={mockListener}
              >
                <ButtonDefaultExport
                  name="hButton1"
                  caption="Left"
                  type="button"
                //   className="btn-filled btn-primary"
                  listener={mockListener}
                />
                <ButtonDefaultExport
                  name="hButton2"
                  caption="Center"
                  type="button"
                //   className="btn-filled btn-primary"
                  listener={mockListener}
                />
                <ButtonDefaultExport
                  name="hButton3"
                  caption="Right"
                  type="button"
                //   className="btn-filled btn-primary"
                  listener={mockListener}
                />
              </ButtonGroupDefaultExport>
            </Stack>
          </Stack>

          {/* Vertical Button Group */}
          <Stack spacing={1.5}>
            <Typography variant="subtitle2" color="text.secondary">
              Vertical Layout
            </Typography>

            <Stack direction="row" spacing={4}>
              <ButtonGroupDefaultExport
                name="verticalGroup"
                vertical={true}
                listener={mockListener}
              >
                <ButtonDefaultExport
                  name="vButton1"
                  caption="Left"
                  type="button"
                //   className="btn-outlined btn-secondary"
                  listener={mockListener}
                />
                <ButtonDefaultExport
                  name="vButton2"
                  caption="Center"
                  type="button"
                //   className="btn-outlined btn-secondary"
                  listener={mockListener}
                />
                <ButtonDefaultExport
                  name="vButton3"
                  caption="Right"
                  type="button"
                //   className="btn-outlined btn-secondary"
                  listener={mockListener}
                />
              </ButtonGroupDefaultExport>
            </Stack>
          </Stack>

          {/* Different Alignments */}
          {/* <Stack spacing={1.5}>
            <Typography variant="subtitle2" color="text.secondary">
              Alignment Options
            </Typography>

            <Stack spacing={2}>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Left Aligned (Default)
                </Typography>
                <ButtonGroupDefaultExport
                  name="leftAlignGroup"
                  listener={mockListener}
                >
                  <ButtonDefaultExport
                    name="leftButton1"
                    caption="Left"
                    type="button"
                    className="btn-text btn-primary"
                    listener={mockListener}
                  />
                  <ButtonDefaultExport
                    name="leftButton2"
                    caption="Center"
                    type="button"
                    className="btn-text btn-primary"
                    listener={mockListener}
                  />
                  <ButtonDefaultExport
                    name="leftButton3"
                    caption="Right"
                    type="button"
                    className="btn-text btn-primary"
                    listener={mockListener}
                  />
                </ButtonGroupDefaultExport>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Center Aligned
                </Typography>
                <ButtonGroupDefaultExport
                  name="centerAlignGroup"
                  horizontalalign="center"
                  listener={mockListener}
                >
                  <ButtonDefaultExport
                    name="centerButton1"
                    caption="Left"
                    type="button"
                    className="btn-text btn-secondary"
                    listener={mockListener}
                  />
                  <ButtonDefaultExport
                    name="centerButton2"
                    caption="Center"
                    type="button"
                    className="btn-text btn-secondary"
                    listener={mockListener}
                  />
                  <ButtonDefaultExport
                    name="centerButton3"
                    caption="Right"
                    type="button"
                    className="btn-text btn-secondary"
                    listener={mockListener}
                  />
                </ButtonGroupDefaultExport>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Right Aligned
                </Typography>
                <ButtonGroupDefaultExport
                  name="rightAlignGroup"
                  horizontalalign="right"
                  listener={mockListener}
                >
                  <ButtonDefaultExport
                    name="rightButton1"
                    caption="Left"
                    type="button"
                    className="btn-text btn-tertiary"
                    listener={mockListener}
                  />
                  <ButtonDefaultExport
                    name="rightButton2"
                    caption="Center"
                    type="button"
                    className="btn-text btn-tertiary"
                    listener={mockListener}
                  />
                  <ButtonDefaultExport
                    name="rightButton3"
                    caption="Right"
                    type="button"
                    className="btn-text btn-tertiary"
                    listener={mockListener}
                  />
                </ButtonGroupDefaultExport>
              </Box>
            </Stack>
          </Stack> */}
        </Stack>
      </Box>
    );
  },
  args: {
    name: "buttonGroupShowcase",
    listener: mockListener,
  },
  argTypes: {
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
};

export const Standard: Story = {
  tags: ["show-panel"],
  render: Template,
  args: {
    name: "standardButtonGroup",
    vertical: false,
    // show: true,
    // horizontalalign: "left",
    "data-design-token-target": "true",
  },
  argTypes: {
    vertical: { control: "boolean" },
    // show: { control: "boolean" },
    // horizontalalign: {
    //   control: { type: "select" },
    //   options: ["left", "center", "right"],
    // },
    "data-design-token-target": { table: { disable: true } },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: buttonGroupTokensData,
      componentKey: "button-group",
      extractCSSVariablesAtRuntime: true,
    },
    layout: "fullscreen",
  },
};
