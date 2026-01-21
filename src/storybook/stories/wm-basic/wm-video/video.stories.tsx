import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography, Button } from "@mui/material";

import VideoDefaultExport from "../../../../components/basic/video/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import token from "./docs/token.md?raw";

import videoTokensData from "../../../../designTokens/components/video/video.json";

const meta: Meta<typeof VideoDefaultExport> = {
  title: "Basic/Video",
  component: VideoDefaultExport,
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

// Sample video URLs (using free sample videos)
const sampleMp4Video = "https://videos.pexels.com/video-files/5155396/5155396-uhd_2560_1440_30fps.mp4";
const sampleMp4Video2 = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
const samplePoster = "https://via.placeholder.com/640x360/333/fff?text=Video+Poster";

const Template = (args: any) => {
  const { autoplay, loop, muted, videopreload } = args;
  const renderKey = `${autoplay}-${loop}-${muted}-${videopreload}`;
  
  return(
  <Box style={{ padding: 16 }}>
    <VideoDefaultExport {...args} listener={mockListener} key={renderKey} />
  </Box>
)};

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
    name:"docsVideo",
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
        <Stack spacing={4}>
          <Box>
            <Stack mb={3}>
              <Typography variant="h6" mb={2}>
                Autoplay & Loop Settings
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" mb={1}>
                  Standard Video
                </Typography>
                <VideoDefaultExport
                  name="standard"
                  mp4format={sampleMp4Video}
                  controls={true}
                  listener={mockListener}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2" mb={1}>
                  Autoplay (Muted)
                </Typography>
                <VideoDefaultExport
                  name="autoplayMuted"
                  mp4format={sampleMp4Video}
                  controls={true}
                  autoplay={true}
                  muted={true}
                  listener={mockListener}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2" mb={1}>
                  Loop Enabled
                </Typography>
                <VideoDefaultExport
                  name="loopEnabled"
                  mp4format={sampleMp4Video}
                  controls={true}
                  loop={true}
                  listener={mockListener}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2" mb={1}>
                  Autoplay + Loop (Muted)
                </Typography>
                <VideoDefaultExport
                  name="autoplayLoop"
                  mp4format={sampleMp4Video}
                  controls={true}
                  autoplay={true}
                  loop={true}
                  muted={true}
                  listener={mockListener}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
  },
  args: {
    name: "showcaseVideo",
    listener: mockListener,
  },
  argTypes: { 
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
};

export const Standard: Story = {
  tags: ['show-panel'],
  render: Template,
  args: {
    name: "standardVideo",
    listener: mockListener,
    mp4format: sampleMp4Video,
    controls: true,
    autoplay: false,
    loop:false,
    videopreload: "none",
    showcontrols: true,
    muted: false,
    "data-design-token-target":true
  },
  argTypes: {
    mp4format: { control: "text" },
    webmformat: { control: "text" },
    oggformat: { control: "text" },
    controls: { control: "boolean" },
    autoplay: { control: "boolean" },
    loop: { control: "boolean" },
    muted: { control: "boolean" },
    poster: { control: "text" },
    videopreload: {
      control: { type: "select" },
      options: ["auto", "metadata", "none"],
    },
    subtitlesource: { control: "text" },
    subtitlelang: { control: "text" },
    videosupportmessage: { control: "text" },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
    "data-design-token-target": { table: { disable: true } } 
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: videoTokensData,
      componentKey: "video",
      extractCSSVariablesAtRuntime: true,
    },
    layout: 'fullscreen',
  },
};