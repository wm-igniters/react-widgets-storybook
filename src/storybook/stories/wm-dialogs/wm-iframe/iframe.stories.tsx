import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import IframeDialogDefaultExport from "../../../../components/dialogs/iframe-dialog/index";
import { WmButton } from "@wavemaker/react-runtime/components/form/button";

import { iconClassNames } from "../../constants/iconClassConstants";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
// import styling from "./docs/styling.md?raw";
import style from "./docs/style.md?raw";
import token from "./docs/token.md?raw";

import modalDialogTokensData from "../../../../designTokens/components/modal-dialog/modal-dialog.json";

const mockListener = {
  appLocale: {},
  Widgets: {},
};

const meta = {
  title: "Dialogs/Iframe Dialog",
  component: IframeDialogDefaultExport,
} satisfies Meta<typeof IframeDialogDefaultExport>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box style={{ padding: 16 }}>
      <WmButton
        name="openIframeBtn"
        caption="Open Iframe Dialog"
        onClick={() => setIsOpen(true)}
        listener={mockListener}
        styles={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
        }}
      />
      <IframeDialogDefaultExport
        {...args}
        isopen={isOpen}
        onClose={() => setIsOpen(false)}
        close={() => setIsOpen(false)}
        onOk={() => setIsOpen(false)}
        listener={mockListener}
      />
    </Box>
  );
};

const DesignTokenTemplate = (args:any) => {
      //component can't spread data-design-token-target, so we apply it to a wrapper
      const { "data-design-token-target": dataAttr, ...componentArgs } = args as any;
      const [isOpen, setIsOpen] = useState(false);
  
      return (
        <Box style={{ padding: 16 }} data-design-token-target={dataAttr}>
          <Box style={{ padding: 16 }}>
      <WmButton
        name="openIframeBtn"
        caption="Open Iframe Dialog"
        onClick={() => setIsOpen(true)}
        listener={mockListener}
        styles={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
        }}
      />
      <IframeDialogDefaultExport
        {...componentArgs}
        isopen={isOpen}
        onClose={() => setIsOpen(false)}
        close={() => setIsOpen(false)}
        onOk={() => setIsOpen(false)}
        listener={mockListener}
      />
    </Box>
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
    />
  ),
  args:{
    name:"docsIframeDialog",
    listener:mockListener
  },
  argTypes:{
    name: {table: {disable: true}},
    listener:{table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Showcase: Story = {
  render: () => {
    const [openDialogs, setOpenDialogs] = useState<{
      docs: boolean;
      video: boolean;
      map: boolean;
    }>({
      docs: false,
      video: false,
      map: false,
    });

    const handleOpen = (type: "docs" | "video" | "map") => {
      setOpenDialogs((prev) => ({ ...prev, [type]: true }));
    };

    const handleClose = (type: "docs" | "video" | "map") => {
      setOpenDialogs((prev) => ({ ...prev, [type]: false }));
    };

    return (
      <Box style={{ padding: 16 }}>
        <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", gap: 2 }}>
          <WmButton
            name="openDocsBtn"
            caption="Open Docs"
            onClick={() => handleOpen("docs")}
            listener={mockListener}
            styles={{
              backgroundColor: "#00c8ff",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          />
          <WmButton
            name="openVideoBtn"
            caption="Open Video"
            onClick={() => handleOpen("video")}
            listener={mockListener}
            styles={{
              backgroundColor: "#f44336",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          />
          <WmButton
            name="openMapBtn"
            caption="Open Map"
            onClick={() => handleOpen("map")}
            listener={mockListener}
            styles={{
              backgroundColor: "#5AC588",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          />
        </Stack>

        <IframeDialogDefaultExport
          name="docsDialog"
          title="Documentation"
          url="https://docs.wavemaker.com"
          iconclass="wi wi-book"
          oktext="Close"
          showheader={true}
          showactions={true}
          closable={true}
          isopen={openDialogs.docs}
          onClose={() => handleClose("docs")}
          close={() => handleClose("docs")}
          onOk={() => handleClose("docs")}
          listener={mockListener}
          headinglevel="h4"
        />
        <IframeDialogDefaultExport
          name="videoDialog"
          title="Video Player"
          url="https://www.youtube.com/embed/dQw4w9WgXcQ"
          iconclass="wi wi-play-circle"
          oktext="Close"
          showheader={true}
          showactions={true}
          closable={true}
          isopen={openDialogs.video}
          onClose={() => handleClose("video")}
          close={() => handleClose("video")}
          onOk={() => handleClose("video")}
          listener={mockListener}
          headinglevel="h4"
        />
        <IframeDialogDefaultExport
          name="mapDialog"
          title="Location Map"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1287387330084!2d-74.00601668459455!3d40.71277597933026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e5e98bb%3A0xf0b5d9df9e1e8e8e!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          iconclass="wi wi-map-marker"
          oktext="Got it"
          showheader={true}
          showactions={true}
          closable={true}
          isopen={openDialogs.map}
          onClose={() => handleClose("map")}
          close={() => handleClose("map")}
          onOk={() => handleClose("map")}
          listener={mockListener}
          headinglevel="h4"
        />
      </Box>
    );
  },
  args:{
    name: "showcaseIframeDialog",
    listener:mockListener
  },
  argTypes:{
    name: {table: {disable: true}},
    listener:{table: {disable: true}},
  }
};


export const Standard: Story = {
  tags: ['show-panel'],
  render: DesignTokenTemplate,
  args: {
    name: "standardIframe",
    title: "External Content",
    url: "https://www.wavemaker.com",
    iconclass: "wi wi-globe",
    oktext: "OK",
    showheader: true,
    showactions: true,
    closable: true,
    listener: mockListener,
    headinglevel:"h4",
    "data-design-token-target":"true",
    className: "modal-sm",
    sheetposition: 'default',
    // sheetposition:undefined,
  },
  argTypes: {
    title: { control: "text" },
    url: { control: "text" },
    iconclass:{ control:{ type:"select"}, options: iconClassNames },
    oktext: { control: "text" },
    showheader: { control: "boolean" },
    showactions: { control: "boolean" },
    closable: { control: "boolean" },
    // encodeurl: { control: "boolean" },
    width: { control: "text" },
    height: { control: "text" },
    headinglevel: {control: "select", options:["h1", "h2", "h4"]},
    iconurl: { control: "text" },
    iconwidth: { control: "text" },
    iconheight: { control: "text" },
    iconmargin: { control: "text" },
    name: {table: {disable: true}},
    listener:{table: {disable: true}},
     "data-design-token-target": { table: {disable : true} },
    className: {control: "select", options: ["modal-xs", "modal-sm", "modal-md", "modal-lg", "modal-xl", "modal-full-screen"]},
    sheetposition:{control:{ type:"select"}, options: ['default', 'top', 'bottom']},
  },
  parameters: {
    designTokens: {
      enabled: true,
      tokenData: modalDialogTokensData,  // Pass raw JSON data instead of pre-parsed config
      componentKey: "modal",  // Component identifier for parsing
      extractCSSVariablesAtRuntime: true,  // Enable runtime CSS variable extraction
      enablePortals: true,          // Enable portal token application  
    },
    layout: 'fullscreen',
  },
};


// export const Standard: Story = {
//   tags: ['show-panel'],
//   render: Template,
//   args: {
//     name: "standardIframe",
//     title: "External Content",
//     url: "https://www.wavemaker.com",
//     iconclass: "wi wi-globe",
//     oktext: "OK",
//     showheader: true,
//     showactions: true,
//     closable: true,
//     listener: mockListener,
//     headinglevel:"h4",
//     // sheetposition:undefined,
//   },
//   argTypes: {
//     title: { control: "text" },
//     url: { control: "text" },
//     iconclass:{ control:{ type:"select"}, options: iconClassNames },
//     oktext: { control: "text" },
//     showheader: { control: "boolean" },
//     showactions: { control: "boolean" },
//     closable: { control: "boolean" },
//     // encodeurl: { control: "boolean" },
//     width: { control: "text" },
//     height: { control: "text" },
//     headinglevel: {control: "select", options:["h1", "h2", "h4"]},
//     iconurl: { control: "text" },
//     iconwidth: { control: "text" },
//     iconheight: { control: "text" },
//     iconmargin: { control: "text" },
//     sheetposition:{control:{ type:"select"}, options: ['top', 'bottom', 'left', 'right']},
//     name: {table: {disable: true}},
//     listener:{table: {disable: true}},
//   },
// };
