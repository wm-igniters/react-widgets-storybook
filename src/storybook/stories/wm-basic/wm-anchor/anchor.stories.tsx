import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";

import AnchorDefaultExport from "../../../../components/basic/anchor/index";
import { iconClassNames } from "../../constants/iconClassConstants";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import token from "./docs/token.md?raw";

import anchorTokensData from "../../../../designTokens/components/anchor/anchor.json";


const meta = {
  title: "Basic/Anchor",
  component: AnchorDefaultExport,
} satisfies Meta<typeof AnchorDefaultExport>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock listener object for the component
const mockListener = {
  appLocale: {
    LABEL_ICON: "",
  },
  Widgets: {},
};

const Template = (args: any) => (
  <Box style={{ padding: 16 }}>
    <AnchorDefaultExport {...args} listener={mockListener} />
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
      token={token}
    />
  ),
  args:{
    name: "docsAnchor",
    listener:mockListener
  },
  argTypes:{
    name:{ table: { disable: true } },
    listener:{ table: { disable: true } },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Showcase: Story = {
  render: () => {
    return (
      <Box sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Typography variant="h6" fontWeight={600}>
            Anchor Showcase
          </Typography>

          {/* Row 1: Basic / Icon / Badge */}
          <Stack spacing={1.5}>
            <Typography variant="subtitle2" color="text.secondary">
              Common Variants
            </Typography>

            <Box
              sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 3,
              maxWidth: 900,
              }}
              >
              <Stack spacing={1}>
                <Typography variant="caption" color="text.secondary">
                  Basic
                </Typography>
                <AnchorDefaultExport
                  name="basic"
                  caption="Link"
                  hyperlink=""
                  target="_self"
                  listener={mockListener}
                />
              </Stack>

              <Stack spacing={1}>
                <Typography variant="caption" color="text.secondary">
                  With Icon
                </Typography>
                <AnchorDefaultExport
                  name="withIcon"
                  caption="Link"
                  hyperlink=""
                  target="_self"
                  listener={mockListener}
                  iconclass="fa fa-github"
                  iconposition="left"
                />
              </Stack>

              <Stack spacing={1}>
                <Typography variant="caption" color="text.secondary">
                  With Badge
                </Typography>
                <AnchorDefaultExport
                  name="withBadge"
                  caption="Link"
                  hyperlink=""
                  target="_self"
                  listener={mockListener}
                  badgevalue="5"
                  iconurl=""
                />
              </Stack>

              <Stack spacing={1}>
                <Typography variant="caption" color="text.secondary">
                  With Icon Image
                </Typography>
                <AnchorDefaultExport
                  name="withIconAsImage"
                  caption="Link"
                  hyperlink=""
                  target="_self"
                  listener={mockListener}
                  iconurl="/showcaseImage.png"
                  iconposition="left"
                  iconwidth="16px"
                  iconheight="16px"
                  iconmargin="0 8px 0 0"
                />
              </Stack>
            </Box>
          </Stack>

          {/* Row 2: Variants Grid */}
          <Stack spacing={1.5}>
            <Typography variant="subtitle2" color="text.secondary">
              Icon Positions
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 3,
                maxWidth: 900,
              }}
            >
              <Stack spacing={1}>
                <Typography variant="caption" color="text.secondary">
                  Caption + Icon Left
                </Typography>
              <AnchorDefaultExport
                name="anchorWithIconLeft"
                caption="Link"
                hyperlink=""
                target="_self"
                listener={mockListener}
                iconclass="fa fa-github"
                iconposition="left"
              />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="caption" color="text.secondary">
                  Caption + Icon Right
                </Typography>
             <AnchorDefaultExport
                name="anchorWithIconRight"
                caption="Link"
                hyperlink=""
                target="_self"
                listener={mockListener}
                iconclass="fa fa-github"
                iconposition="right"
                iconurl=""
              />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="caption" color="text.secondary">
                  Caption + Icon Top
                </Typography>
              <AnchorDefaultExport
                name="anchorWithIconTop"
                caption="Link"
                hyperlink=""
                target="_self"
                listener={mockListener}
                iconclass="fa fa-github"
                iconposition="top"
              />
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    );
  },
  args: {
    name: "showcaseAnchors",
    listener: mockListener,
  },
  argTypes:{
    name:{ table: { disable: true } },
    listener:{ table: { disable: true } },
  },
};

export const Standard: Story = {
  tags: ['show-panel'],
  render: Template,
  args: {
    name: "standardAnchor",
    listener: mockListener,
    caption: "Link",
    hyperlink: "",
    target: "_self",
    "data-design-token-target":"true"
  },
  argTypes: {
    caption: { control: "text" },
    hyperlink: { control: "text" },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
    },
    iconclass:{ control:{ type:"select"}, options: iconClassNames },
    iconposition: {
      control: { type: "select" },
      options: ["left", "right", "top"],
    },
    iconurl: {control: "text"},
    iconwidth: { control: "text" },
    iconheight: { control: "text" },
    iconmargin: { control: "text" },
    badgevalue: { control: "text" },
    "data-design-token-target": { table: { disable: true } },
    listener:{ table: { disable: true } },
    name:{ table: { disable: true } },
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: anchorTokensData, 
      componentKey: "anchor",
      extractCSSVariablesAtRuntime: true,
    },
    layout: 'fullscreen',
  },
};

// export const Basic1: Story = {
//   tags: ['show-panel'],
//   render: Template,
//   args: {
//     name: "basicAnchor",
//     listener: mockListener,
//     caption: "Click Me",
//     hyperlink: "https://www.wavemaker.com",
//     target: "_blank",
//   },
//   argTypes: {
//     caption: { control: "text" },
//     hyperlink: { control: "text" },
//     target: {
//       control: { type: "select" },
//       options: ["_self", "_blank", "_parent", "_top"],
//     },
//     iconclass:{ control:{ type:"select"}, options: iconClassNames },
//     iconposition: {
//       control: { type: "select" },
//       options: ["left", "right", "top"],
//     },
//     iconurl: {control: "text"},
//     iconwidth: { control: "text" },
//     iconheight: { control: "text" },
//     iconmargin: { control: "text" },
//     badgevalue: { control: "text" },
//   }
// };

// export const Standard1: Story = {
//   tags: ['show-panel'],
//   render: (args) => {
//       const { className} = args;
//       // const variant = className.split(' ')[1]?.replace('btn-', '') || 'primary';
//       // const variantLabel = variant.charAt(0).toUpperCase() + variant.slice(1);
  
//       return (
//         <Box sx={{ p: 4 }}>
//           <Stack spacing={4}>
//             <Typography variant="h6" fontWeight={600}>
//               Anchor {/* Anchors - {variantLabel} */}
//             </Typography>
  
//             <Stack direction="row" spacing={2} alignItems="center" sx={{ gap: 2 }}>
//               <AnchorDefaultExport
//                   name="basic"
//                   caption="Anchor"
//                   hyperlink=""
//                   target="_self"
//                   listener={mockListener}
//                   className={className}
//                   data-design-token-target="true"
//                 />
//               <AnchorDefaultExport
//                   name="withIcon"
//                   caption="Icon Anchor"
//                   hyperlink=""
//                   target="_self"
//                   listener={mockListener}
//                   className={className}
//                   iconclass="fa fa-github"
//                   iconposition="left"
//                   iconwidth="16px"
//                   iconheight="16px"
//                   iconmargin="0 8px 0 0"
//                   data-design-token-target="true"
//                 />
//               <AnchorDefaultExport
//                   name="withBadge"
//                   caption="Image Anchor"
//                   hyperlink=""
//                   target="_self"
//                   listener={mockListener}
//                   className={className}
//                   iconposition="left"
//                   iconurl="https://picsum.photos/200"
//                   iconwidth="16px"
//                   iconheight="16px"
//                   iconmargin="0 8px 0 0"
//                   data-design-token-target="true"
//                 />
//             </Stack>
//           </Stack>
//         </Box>
//       );
//     },
//   args: {
//     name: "standardAnchor",
//     listener: mockListener,
//     // caption: "Click Me",
//     // className:"link-primary",
//     // "data-design-token-target":"true"
//   },
//   argTypes: {
//     // caption: { control: "text" },
//     "data-design-token-target": { control: false }
//   },
//   parameters: {
//     designTokens: {
//       enabled: true,
//       tokenData: anchorTokensData,  // Pass raw JSON data instead of pre-parsed config
//       componentKey: "anchor",  // Component identifier for parsing
//       extractCSSVariablesAtRuntime: true,  // Enable runtime CSS variable extraction
//     },
//     layout: 'fullscreen',
//   }, 
// };
