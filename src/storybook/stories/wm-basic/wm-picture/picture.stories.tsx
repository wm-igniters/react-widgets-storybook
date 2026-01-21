import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";

import PictureDefaultExport from "../../../../components/basic/picture/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import style from "./docs/style.md?raw";
import token from "./docs/token.md?raw";

import pictureTokensData from "../../../../designTokens/components/picture/picture.json";

const meta: Meta<typeof PictureDefaultExport> = {
  title: "Basic/Picture",
  component: PictureDefaultExport,
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
      const { resizemode, shape, pictureaspect } = args;
      const renderKey = `${shape}-${resizemode}-${pictureaspect}`;
  
      return (
        <Box style={{ padding: 16 }} key={renderKey}>
          <PictureDefaultExport
            key={renderKey}
            {...args}
            listener={mockListener}
          />
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
    />
  ),
  args:{
    name:"docsPicture",
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
    return (
      <Box style={{ padding: 16 }}>
        <Stack spacing={3}>
          <Typography variant="h6" fontWeight={600}>Image Showcase:</Typography>
          <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", gap: 2 }}>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Default
              </Typography>
              <PictureDefaultExport
                name="shapeDefault"
                picturesource="/showcaseImage.png"
                alttext="Default shape"
                width="150px"
                height="150px"
                listener={mockListener}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Circle
              </Typography>
              <PictureDefaultExport
                name="shapeCircle"
                picturesource="/showcaseImage.png"
                alttext="Circle shape"
                width="150px"
                height="150px"
                shape="circle"
                listener={mockListener}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Rounded
              </Typography>
              <PictureDefaultExport
                name="shapeRounded"
                picturesource="/showcaseImage.png"
                alttext="Rounded shape"
                width="150px"
                height="150px"
                shape="rounded"
                listener={mockListener}
                styles={{ borderRadius: "12px" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="caption" display="block" mb={1}>
                Thumbnail
              </Typography>
              <PictureDefaultExport
                name="shapeThumbnail"
                picturesource="/showcaseImage.png"
                alttext="Thumbnail shape"
                width="150px"
                height="150px"
                shape="thumbnail"
                listener={mockListener}
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    );
  },
  args: {
    name: "showcasePictureShapes",
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
    name: "standardPicture",
    listener: mockListener,
    picturesource: "/showcaseImage.png",
    alttext: "Placeholder image",
    width: "200px",
    height: "200px",
    resizemode: "cover",
    shape: "thumbnail",
    "data-design-token-target":"true"
  },
  argTypes: {
    picturesource: { control: "text" },
    pictureplaceholder: { control: "text" },
    alttext: { control: "text" },
    pictureaspect: {
      control: { type: "select" },
      options: ["None", "H", "V", "Both"],
    },
    shape:{
      control:"select",
      options:['circle',"rounded","thumbnail"]
    },
    resizemode: {
      control: { type: "select" },
      options: ["fill", "cover", "contain", "none", "scale-down"],
    },
    width: { control: "text" },
    height: { control: "text" },
    "data-design-token-target": { table: { disable: true } },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: pictureTokensData,  // Pass raw JSON data instead of pre-parsed config
      componentKey: "picture",  // Component identifier for parsing
      extractCSSVariablesAtRuntime: true,  // Enable runtime CSS variable extraction
    },
    layout: 'fullscreen',
  },
};