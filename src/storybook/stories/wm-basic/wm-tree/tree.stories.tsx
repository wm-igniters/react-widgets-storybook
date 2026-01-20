import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography, Button } from "@mui/material";

import TreeDefaultExport from "../../../../components/basic/tree/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const meta: Meta<typeof TreeDefaultExport> = {
  title: "Basic/Tree",
  component: TreeDefaultExport,
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

// Sample tree data
// const simpleTreeData = [
//   {
//     label: "Node 1",
//     id: "node1",
//     icon:"",
//     children: [
//       { label: "Node 1.1", id: "node1_1" },
//       { label: "Node 1.2", id: "node1_2" },
//     ],
//   },
//   {
//     label: "Node 2",
//     id: "node2",
//     icon:"",
//     children: [
//       { label: "Node 2.1", id: "node2_1" },
//       { label: "Node 2.2", id: "node2_2" },
//     ],
//   },
//   {
//     label: "Node 3",
//     id: "node3",
//     icon:""
//   },
// ];

// const fileSystemData = [
//   {
//     label: "Documents",
//     icon: "fa fa-folder",
//     id: "docs",
//     children: [
//       {
//         label: "Work",
//         icon: "fa fa-folder",
//         id: "work",
//         children: [
//           { label: "Report.pdf", icon: "fa fa-file-pdf-o", id: "report" },
//           { label: "Presentation.pptx", icon: "fa fa-file-powerpoint-o", id: "ppt" },
//         ],
//       },
//       {
//         label: "Personal",
//         icon: "fa fa-folder",
//         id: "personal",
//         children: [
//           { label: "Resume.doc", icon: "fa fa-file-word-o", id: "resume" },
//           { label: "Photo.jpg", icon: "fa fa-file-image-o", id: "photo" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Downloads",
//     icon: "fa fa-folder",
//     id: "downloads",
//     children: [
//       { label: "Software.zip", icon: "fa fa-file-archive-o", id: "software" },
//       { label: "Music.mp3", icon: "fa fa-file-audio-o", id: "music" },
//     ],
//   },
// ];

const organizationData = [
  {
    label: "CEO",
    name: "John Smith",
    id: "ceo",
    children: [
      {
        label: "CTO",
        name: "Sarah Johnson",
        id: "cto",
        children: [
          { label: "Dev Team Lead", name: "Mike Chen", id: "devlead" },
          { label: "QA Team Lead", name: "Emma Wilson", id: "qalead" },
        ],
      },
      {
        label: "CFO",
        name: "David Brown",
        id: "cfo",
        children: [
          { label: "Accounting Manager", name: "Lisa Anderson", id: "accmgr" },
          { label: "Finance Analyst", name: "Tom Davis", id: "finanalyst" },
        ],
      },
    ],
  },
];

// const deepNestedData = [
//   {
//     label: "Level 1",
//     id: "l1",
//     children: [
//       {
//         label: "Level 2",
//         id: "l2",
//         children: [
//           {
//             label: "Level 3",
//             id: "l3",
//             children: [
//               {
//                 label: "Level 4",
//                 id: "l4",
//                 children: [
//                   { label: "Level 5", id: "l5" },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

const Template = (args: any) => (
  <Box style={{ padding: 16 }}>
    <TreeDefaultExport {...args} listener={mockListener} />
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
    name:"docsTree",
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

// export const Basic: Story = {
//   render: Template,
//   args: {
//     name: "basicTree",
//     listener: mockListener,
//     dataset: simpleTreeData,
//     treeicons: "fa fa-circle",
//     nodeclick: "none",
//     horizontalalign: "left",
//     show: true,
//   },
// };

export const Showcase: Story = {
  render: Template,
  args: {
    name: "showcaseOrgChart",
    listener: mockListener,
    dataset: organizationData,
    treeicons: "fa fa-arrow-right",
    levels: 2,
    horizontalalign: "left",
    show: true,
  },
  argTypes: {
    dataset: { control: "object" },
    treeicons: {
      control: { type: "select" },
      options: ["wi wi-keyboard-arrow-right", "wi wi-arrow-forward", "wi wi-minus", "fa fa-minus", "fa fa-arrow-right", "fa fa-folder-tree", "fa fa-circle"],
    },
    levels: { control: "number" },
    horizontalalign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    show: { control: "boolean" },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
};

export const Standard: Story = {
  tags: ['show-panel'],
  render: Template,
  args: {
    name: "standardPropsTree",
    listener: mockListener,
    dataset: [
      {
        title: "Node 1",
        customId: "custom1",
        subnodes: [
          { title: "Node 1.1", customId: "custom1_1" },
          { title: "Node 1.2", customId: "custom1_2" },
        ],
      },
      {
        title: "Node 2",
        customId: "custom2",
      },
    ],
    nodelabel: "title",
    nodeid: "customId",
    nodechildren: "subnodes",
    treeicons: "fa fa-folder-tree",
    horizontalalign: "left",
    show: true,
  },
  argTypes: {
    dataset: { control: "object" },
    datavalue: { control: "text" },
    treeicons: {
      control: { type: "select" },
      options: ["wi wi-keyboard-arrow-right", "wi wi-arrow-forward", "wi wi-minus", "fa fa-minus", "fa fa-arrow-right", "fa fa-folder-tree", "fa fa-circle"],
    },
    levels: { control: "number" },
    nodelabel: { control: "text" },
    nodeicon: { control: "text" },
    nodechildren: { control: "text" },
    nodeid: { control: "text" },
    nodeclick: {
      control: { type: "select" },
      options: ["expand", "none"],
    },
    orderby: { control: "text" },
    horizontalalign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    show: { control: "boolean" },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
};
