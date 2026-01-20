import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import IconDefaultExport from "../../../../components/basic/icon/index";
import { fontAwesomeIcons } from "../../constants/fontAwesomeIconConstants";
import { waveIcons } from "../../constants/wavIconConstants";
import { iconClassNames } from "../../constants/iconClassConstants";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import style from "./docs/style.md?raw";
import token from "./docs/token.md?raw";

import iconTokensData from "../../../../designTokens/components/icon/icon.json";
import { table } from "console";

const meta: Meta<typeof IconDefaultExport> = {
  title: "Basic/Icon",
  component: IconDefaultExport,
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
  //component can't spread data-design-token-target, so we apply it to a wrapper
    const { "data-design-token-target": dataAttr, ...componentArgs } = args;

    return (
      <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
        <IconDefaultExport {...componentArgs} listener={mockListener} />
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
      // styling={styling}
      style={style}
      token={token}
      externalLink={{
        href: "https://www.figma.com/design/F6S1sF5vM38mn6aLNnGGon/WaveMaker-UI-Kit--Community-?node-id=55594-2483&p=f&t=2swT7qVNlhCONKHK-0",
        label: "",
      }}
    />
  ),
  args:{
    name:"docsIcon",
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
      <Box sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Typography variant="h6" fontWeight={600}>
            Icon Showcase
          </Typography>

          {/* Row: Basic, With Caption, With Image URL */}
          <Stack direction="row" spacing={6} sx={{ flexWrap: "wrap", gap: 3 }}>

            {/* Basic Icon */}
            <Stack spacing={1} alignItems="center">
              <Typography variant="caption" color="text.secondary">
                Basic Icon
              </Typography>
              <IconDefaultExport
                name="basicIcon"
                listener={mockListener}
              >
                <IconDefaultExport
                  name="basicIcon"
                  iconclass="fa fa-adjust"
                  iconsize="24px"
                  listener={mockListener}
                />
              </IconDefaultExport>
            </Stack>

            {/* Icon with Caption */}
            <Stack spacing={1} alignItems="center">
              <Typography variant="caption" color="text.secondary">
                With Caption
              </Typography>
              <IconDefaultExport
                name="iconWithCaption"
                caption="User Profile"
                iconclass="fa fa-user"
                iconsize="24px"
                iconposition="left"
                listener={mockListener}
                styles={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              />
            </Stack>

            {/* Icon with Image URL */}
            <Stack spacing={1} alignItems="center">
              <Typography variant="caption" color="text.secondary">
                With Image URL
              </Typography>
              <IconDefaultExport
                name="imageIcon"
                caption="Custom Image"
                iconurl="https://picsum.photos/200"
                iconsize="32px"
                iconposition="left"
                listener={mockListener}
                styles={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
              />
            </Stack>

          </Stack>
        </Stack>
      </Box>
    );
  },
  args: {
    name: "iconShowcase",
    listener: mockListener,
  },
  argTypes:{
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
};

// WaveIcon Library Story
export const WaviconLibrary: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const icons = waveIcons.map((icon) => ({
      name: `wi-${icon}`,
      iconclass: `wi wi-${icon}`,
      iconsize: "24px",
    }));

    return (
      <IconLibrary
        title="Wavicon Library"
        icons={icons}
        iconClassPrefix="wi wi-"
      />
    );
  },
  args:{
    name:"waveiconLibrary",
    listener:mockListener
  },
  argTypes:{
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
};

// Font Awesome Library Story
export const FontAwesomeLibrary: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const icons = fontAwesomeIcons.map((icon) => ({
      name: `fa-${icon}`,
      iconclass: `fa fa-${icon}`,
      iconsize: "24px",
    }));

    return (
      <IconLibrary
        title="Font Awesome Library"
        icons={icons}
        iconClassPrefix="fa fa-"
      />
    );
  },
  args:{
    name:"fontAwesomeIconLibrary",
    listener:mockListener
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
    name: "standardIcon",
    listener: mockListener,
    iconclass: "fa fa-bar-chart",
    "data-design-token-target":"true",
  },
  argTypes: {
    caption: { control: "text" },
    iconclass:{ control:{ type:"select"}, options: iconClassNames },
    iconurl: { control: "text" },
    iconposition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    iconsize: { control: "text" },
    "data-design-token-target": {table: { disable: true } },
    name: { table: { disable: true } },
    listener: { table: { disable: true } },
  },
   parameters: {
    designTokens: {
      enabled: true,
      tokenData: iconTokensData,
      componentKey: "icon",
      extractCSSVariablesAtRuntime: true,
    },
    layout: 'fullscreen',
  },
};

// Icon Library Component for displaying icon collections
interface IconLibraryProps {
  title: string;
  icons: Array<{ name: string; iconclass: string; iconsize: string }>;
  iconClassPrefix: string;
}

const IconLibrary: React.FC<IconLibraryProps> = ({ title, icons, iconClassPrefix }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = icons.filter((icon) =>
    icon.iconclass
      .replace(iconClassPrefix, "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleIconClick = async (iconClass: string) => {
    try {
      await navigator.clipboard.writeText(iconClass);
      setCopiedIcon(iconClass);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#fff", minHeight: "100vh" }}>
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          bgcolor: "#fff",
          zIndex: 10,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
          {title}
        </Typography>
        <TextField
          fullWidth
          placeholder="Search icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#666" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#f5f5f5",
              borderRadius: 2,
            },
          }}
        />
      </Box>

      <Box sx={{ p: 2 }}>
        {filteredIcons.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: 2,
            }}
          >
            {filteredIcons.map((icon, index) => (
              <Box
                key={index}
                onClick={() => handleIconClick(icon.iconclass)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 1,
                  borderRadius: 1,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  bgcolor: copiedIcon === icon.iconclass ? "#e3f2fd" : "transparent",
                  "&:hover": {
                    bgcolor: "#f0f0f0",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 0.5,
                  }}
                >
                  <IconDefaultExport {...icon} listener={mockListener} />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "10px",
                    textAlign: "center",
                    color: "#666",
                    wordBreak: "break-word",
                  }}
                >
                  {icon.iconclass.replace(iconClassPrefix, "")}
                </Typography>
                {copiedIcon === icon.iconclass && (
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "9px",
                      color: "#1976d2",
                      mt: 0.5,
                    }}
                  >
                    Copied!
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <Typography sx={{ p: 2, textAlign: "center", color: "#666" }}>
            No icons found matching "{searchQuery}"
          </Typography>
        )}
      </Box>
    </Box>
  );
};