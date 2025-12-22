import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography, Button } from "@mui/material";

import TextDefaultExport from "../../../../components/input/text/index";

const meta: Meta<typeof TextDefaultExport> = {
  title: "Input/Text",
  component: TextDefaultExport,
  argTypes: {
    datavalue: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "number", "password", "tel", "url"]
    },
    // floatinglabel: { control: "boolean" },
    // autocomplete: { control: "text" },
    autofocus: { control: "boolean" },
    autotrim: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    required: { control: "boolean" },
    maxchars: { control: "number" },
    minvalue: { control: "number" },
    maxvalue: { control: "number" },
    step: { control: "number" },
    displayformat: { control: "text" },
    showdisplayformaton: {
      control: { type: "select" },
      options: ["keypress", "blur"]
    },
    // updateon: {
    //   control: { type: "select" },
    //   options: ["keypress", "blur"]
    // },
    // updatedelay: { control: "text" },
    regexp: { control: "text" },
    // arialabel: { control: "text" },
    // tabindex: { control: "number" },
    // shortcutkey: { control: "text" },
    autocapitalize: {
      control: { type: "select" },
      options: ["none", "sentence", "words"]
    },
    // hint: { control: "text" },
    // width: { control: "text" },
    // height: { control: "text" },
    // className: { control: "text" },
  },
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

const Template = (args: any) => (
  <Box style={{ padding: 16 }}>
    <TextDefaultExport {...args} listener={mockListener} />
  </Box>
);

// Basic Examples
export const Basic: Story = {
  render: Template,
  args: {
    name: "basicText",
    placeholder: "Enter text",
    listener: mockListener,
    disabled: false,
    readonly: false,
    type: "text",
    autocapitalize: "none",
    autotrim: true,
    autofocus: false,
    required: false,
  },
};

export const RegExp: Story = {
  render: Template,
  args: {
    name: "regexpText",
    placeholder: "Enter alphanumeric only",
    regexp: "^[a-zA-Z0-9]+$",
    listener: mockListener,
    autocapitalize: "none",
    autotrim: true,
    autofocus: false,
    required: false,
  },
};

export const MaxChars: Story = {
  render: Template,
  args: {
    name: "maxCharsText",
    placeholder: "Maximum 20 characters",
    maxchars: 20,
    listener: mockListener,
    autocapitalize: "none",
    autotrim: true,
    autofocus: false,
    required: false,
  },
};

// Type Variations
export const TextType: Story = {
  render: Template,
  args: {
    name: "textType",
    placeholder: "Select type and see behavior",
    type: "text",
    listener: mockListener,
    disabled: false,
    readonly: false,
    autocapitalize: "none",
    autotrim: true,
    autofocus: false,
    required: false,
  },
};

// Display Format Examples
export const displayFormat: Story = {
  render: Template,
  args: {
    name: "displayFormatText",
    placeholder: "Enter SSN",
    displayformat: "999-99-9999",
    showdisplayformaton: "keypress",
    maxchars: 9,
    listener: mockListener,
    disabled: false,
    readonly: false,
    type: "text",
    autocapitalize: "none",
    autotrim: true,
    autofocus: false,
    required: false,
  },
};

export const Autocapitalize: Story = {
  render: Template,
  args: {
    name: "autocapText",
    placeholder: "First Letter Of Each Word Capitalized",
    autocapitalize: "words",
    listener: mockListener,
    disabled: false,
    readonly: false,
    type: "text",
    autotrim: true,
    autofocus: false,
    required: false,
  },
};

// export const EmailType: Story = {
//   render: Template,
//   args: {
//     name: "emailType",
//     placeholder: "Enter email address",
//     type: "email",
//     listener: mockListener,
//   },
// };

// export const NumberType: Story = {
//   render: Template,
//   args: {
//     name: "numberType",
//     placeholder: "Enter number",
//     type: "number",
//     listener: mockListener,
//   },
// };

// export const PasswordType: Story = {
//   render: Template,
//   args: {
//     name: "passwordType",
//     placeholder: "Enter password",
//     type: "password",
//     listener: mockListener,
//   },
// };

// export const TelType: Story = {
//   render: Template,
//   args: {
//     name: "telType",
//     placeholder: "Enter phone number",
//     type: "tel",
//     listener: mockListener,
//   },
// };

// export const UrlType: Story = {
//   render: Template,
//   args: {
//     name: "urlType",
//     placeholder: "Enter URL",
//     type: "url",
//     listener: mockListener,
//   },
// };
