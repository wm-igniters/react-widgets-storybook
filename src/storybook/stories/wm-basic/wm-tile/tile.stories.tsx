import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography, Button } from "@mui/material";

import TileDefaultExport from "../../../../components/basic/tile/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import style from "./docs/style.md?raw";
import token from "./docs/token.md?raw";

import tileTokensData from "../../../../designTokens/components/tile/tile.json";

const meta: Meta<typeof TileDefaultExport> = {
  title: "Basic/Tile",
  component: TileDefaultExport,
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

const Template = (args: any) => (
  <Box style={{ padding: 16 }}>
    <TileDefaultExport {...args} listener={mockListener}>
      {args.children || "Tile Content"}
    </TileDefaultExport>
  </Box>
);

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
    name:"docsTile",
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
    const tilesHorizontal = [
      { title: "Total Users", value: "1,234", className: "bg-primary" },
      { title: "Active Sessions", value: "567", className: "bg-success" },
      { title: "Critical Alerts", value: "23", className: "bg-danger" },
    ];

    const tilesVertical = [
      { title: "Notifications", description: "5 new notifications", className: "bg-info" },
      { title: "Messages", description: "3 unread messages", className: "bg-primary" },
      { title: "Task", description: "Course to complete", className: "bg-warning" },
    ];

    return (
      <Box sx={{ p: 4 }}>
        {/* Main Heading */}
        <Stack mb={2}>
        <Typography variant="h6" fontWeight={600} mb={5}>
          Tiles Showcase
        </Typography>
        </Stack>

        {/* Horizontal Tiles */}
        <Box mb={4}>
          <Typography variant="subtitle1" fontWeight={500} mb={3}>
            Horizontal Layout
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-between"
            flexWrap="wrap"
            gap="24px"
          >
            {tilesHorizontal.map((tile, index) => (
              <TileDefaultExport
                key={index}
                name={`dashboardTile${index}`}
                listener={mockListener}
                className={tile.className}
                styles={{
                  flex: 1,
                  minWidth: "200px",
                  padding: "24px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  {tile.value}
                </Typography>
                <Typography variant="body1">{tile.title}</Typography>
              </TileDefaultExport>
            ))}
          </Stack>
        </Box>

        {/* Vertical Tiles */}
        <Box>
          <Typography variant="subtitle1" fontWeight={500} mb={3}>
            Vertical Layout
          </Typography>
          <Stack spacing={3}>
            {tilesVertical.map((tile, index) => (
              <TileDefaultExport
                key={index}
                name={`verticalTile${index}`}
                listener={mockListener}
                className={tile.className}
                styles={{
                  padding: "24px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {tile.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tile.description}
                </Typography>
              </TileDefaultExport>
            ))}
          </Stack>
        </Box>
      </Box>
    );
  },
  args: {
    name: "tileShowcase",
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
    name: "standardTile",
    listener: mockListener,
    children: (
      <Box>
        <Typography variant="h6" gutterBottom>
          Tile Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a tile with structured content including a title and description text.
        </Typography>
      </Box>
    ),
    className: "bg-primary",
    "data-design-token-target": true
  },
  argTypes: {
    className: {
      control: {
        type: "select",
      },
      options: ["bg-primary", "bg-success", "bg-danger", "bg-warning", "bg-info"],
    },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
    "data-design-token-target": { table: { disable: true } },
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: tileTokensData,
      componentKey: "tile",
      extractCSSVariablesAtRuntime: true,
    },
    layout: 'fullscreen',
  },
};
