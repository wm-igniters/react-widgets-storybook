import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";

import HtmlDefaultExport from "../../../../components/basic/html/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";
import { mock } from "node:test";

const meta: Meta<typeof HtmlDefaultExport> = {
  title: "Basic/Html",
  component: HtmlDefaultExport,
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
    <HtmlDefaultExport {...args} listener={mockListener}>
      {args.children}
    </HtmlDefaultExport>
  </Box>
);

export const Docs: Story = {
  render: () => (
    <ComponentDocumentation
      overview={overview}
      properties={props}
      events={events}
      methods={methods}
      styling={styling}
    />
  ),
  args:{
    name:"docsHtml",
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
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Typography variant="h6" fontWeight={600}>
          HTML Showcase
        </Typography>

        {/* 2. Code Snippet */}
        <Stack spacing={1}>
          <Typography variant="subtitle2" color="text.secondary">
            Code Snippet
          </Typography>

          <HtmlDefaultExport name="codeHtml" listener={mockListener}>
            <pre
              style={{
                background: "#f5f5f5",
                padding: "16px",
                borderRadius: "6px",
                overflow: "auto",
              }}
            >
              <code>{`function greet(name) {
  return "Hello, " + name;
}`}</code>
            </pre>
          </HtmlDefaultExport>
        </Stack>

        {/* 3. Rich Content */}
        <Stack spacing={2}>
          <Typography variant="subtitle2" color="text.secondary">
            Rich Content
          </Typography>

          <HtmlDefaultExport name="richHtml" listener={mockListener}>
            <div>
              <p>
                This content contains <strong>bold</strong>, <em>italic</em>,
                and a{" "}
                <a href="https://www.wavemaker.com" target="_blank" rel="noreferrer">
                  link
                </a>
                .
              </p>
              <ul>
                <li>First item</li>
                <li>Second item</li>
              </ul>
            </div>
          </HtmlDefaultExport>
        </Stack>

        {/* 4. Layout Content */}
        <Stack spacing={2}>
          <Typography variant="subtitle2" color="text.secondary">
            Layout Content
          </Typography>

          <HtmlDefaultExport name="layoutHtml" listener={mockListener}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
              }}
            >
              <div style={{ padding: "12px", background: "#e3f2fd" }}>Column 1</div>
              <div style={{ padding: "12px", background: "#fce4ec" }}>Column 2</div>
              <div style={{ padding: "12px", background: "#e8f5e9" }}>Column 3</div>
            </div>
          </HtmlDefaultExport>
        </Stack>
      </Stack>
    </Box>
  ),
  args:{
    name:"showcaseHtml",
    listener: mockListener
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
    name: "standardHtml",
    listener: mockListener,
    horizontalalign: "center",
    show: true,
    children: (
      <div>
        <h2 style={{margin: '0 0 12px'}}>Basic HTML Content</h2>
        <p>This is basic HTML content rendered inside the HTML component.</p>
      </div>
    ),
  },
  argTypes: {
    horizontalalign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    height: { control: "text" },
    width: { control: "text" },
    show: { control: "boolean" },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
    children: { table: { disable: true } }
  },
};

