import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";

import IframeDefaultExport from "../../../../components/basic/iframe/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import token from "./docs/token.md?raw";

import iframeTokensData from "../../../../designTokens/components/iframe/iframe.json";

const meta: Meta<typeof IframeDefaultExport> = {
  title: "Basic/Iframe",
  component: IframeDefaultExport,
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

const Template = (args: any) => {
    // component can't spread data-design-token-target and has inline styles
    // Wrap it and don't pass width/height to let CSS control sizing
    const { "data-design-token-target": dataAttr, width, height, ...componentArgs } = args;
    // const renderkey = `${width}-${height}`;

    return (
      <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
        <IframeDefaultExport {...componentArgs} listener={mockListener} />
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
    name: "docsIframe",
    listener: mockListener
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
        <Typography variant="h6" mb={3} style={{marginBottom: "20px"}}>
          Social Media Embeds
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={3}
        >
          <Box>
            <Typography variant="subtitle2" mb={1}>
              YouTube
            </Typography>
            <IframeDefaultExport
              name="youtube"
              iframesrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
              width="100%"
              height="200px"
              listener={mockListener}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" mb={1}>
              Google Maps
            </Typography>
            <IframeDefaultExport
              name="maps"
              iframesrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d-74.00425878459418!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="200px"
              listener={mockListener}
            />
          </Box>
        </Box>
      </Box>
    );
  },
  args: {
    name: "showcaseIframe",
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
    name: "basicIframe",
    listener: mockListener,
    iframesrc: "https://docs.wavemaker.com/learn/",
    // width: "200px",
    // height: "200px",
    "data-design-token-target":"true"
  },
  argTypes: {
    iframesrc: { control: "text" },
    // width: { control: "text" },
    // height: { control: "text" },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
    "data-design-token-target": { table: { disable: true } },
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: iframeTokensData,
      componentKey: "iframe",
      extractCSSVariablesAtRuntime: true,
    },
    layout: 'fullscreen',
  }
};