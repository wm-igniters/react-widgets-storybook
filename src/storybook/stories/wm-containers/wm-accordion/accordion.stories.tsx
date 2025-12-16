import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import WmAccordion from "../../../../components/container/accordion";
import WmAccordionPane from "../../../../components/container/accordion/accordion-pane";

const mockListener = {
  appLocale: {},
  Widgets: {},
  onChange: () => {},
};

const meta = {
  title: "Containers/Accordion",
  component: WmAccordion,
  argTypes: {
    closeothers: { control: "boolean" },
    defaultpaneindex: { control: "number" },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof WmAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "defaultAccordion",
    type: "static",
    closeothers: true,
    defaultpaneindex: 0,
    listener: mockListener,
    children: (
      <>
        <WmAccordionPane
          name="pane1"
          title="Section 1"
          iconclass="wi wi-file"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Content for section 1. This is the first accordion pane.
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="pane2"
          title="Section 2"
          iconclass="wi wi-folder"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Content for section 2. This pane contains different information.
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="pane3"
          title="Section 3"
          iconclass="wi wi-cog"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Content for section 3. Each pane can have unique content.
            </Typography>
          </Box>
        </WmAccordionPane>
      </>
    ),
  },
};

export const MultipleOpen: Story = {
  args: {
    name: "multipleOpenAccordion",
    type: "static",
    closeothers: false,
    defaultpaneindex: 0,
    listener: mockListener,
    children: (
      <>
        <WmAccordionPane
          name="pane1"
          title="Features"
          iconclass="wi wi-star"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              • Feature 1: Advanced analytics
              <br />
              • Feature 2: Real-time updates
              <br />
              • Feature 3: Cloud integration
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="pane2"
          title="Benefits"
          iconclass="wi wi-check-circle"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Multiple panes can be open at the same time when closeothers is false.
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="pane3"
          title="Pricing"
          iconclass="wi wi-dollar"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Contact us for pricing details and custom plans.
            </Typography>
          </Box>
        </WmAccordionPane>
      </>
    ),
  },
};

export const WithBadges: Story = {
  args: {
    name: "badgesAccordion",
    type: "static",
    closeothers: true,
    defaultpaneindex: 0,
    listener: mockListener,
    children: (
      <>
        <WmAccordionPane
          name="pane1"
          title="Inbox"
          iconclass="wi wi-envelope"
          badgevalue="12"
          badgetype="primary"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">You have 12 unread messages.</Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="pane2"
          title="Tasks"
          iconclass="wi wi-check-square"
          badgevalue="5"
          badgetype="warning"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">5 tasks are pending completion.</Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="pane3"
          title="Alerts"
          iconclass="wi wi-bell"
          badgevalue="3"
          badgetype="danger"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">3 important alerts require your attention.</Typography>
          </Box>
        </WmAccordionPane>
      </>
    ),
  },
};

export const WithSubheadings: Story = {
  args: {
    name: "subheadingsAccordion",
    type: "static",
    closeothers: true,
    defaultpaneindex: 0,
    listener: mockListener,
    children: (
      <>
        <WmAccordionPane
          name="pane1"
          title="Personal Information"
          subheading="Basic details about yourself"
          iconclass="wi wi-user"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Name: John Doe
              <br />
              Email: john@example.com
              <br />
              Phone: (555) 123-4567
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="pane2"
          title="Address"
          subheading="Your current residence"
          iconclass="wi wi-map-marker"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              123 Main Street
              <br />
              Apt 4B
              <br />
              New York, NY 10001
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="pane3"
          title="Preferences"
          subheading="Customize your experience"
          iconclass="wi wi-sliders"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Language: English
              <br />
              Theme: Light
              <br />
              Notifications: Enabled
            </Typography>
          </Box>
        </WmAccordionPane>
      </>
    ),
  },
};

export const FAQ: Story = {
  args: {
    name: "faqAccordion",
    type: "static",
    closeothers: true,
    defaultpaneindex: -1,
    listener: mockListener,
    children: (
      <>
        <WmAccordionPane
          name="faq1"
          title="What is this product?"
          iconclass="wi wi-question-circle"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              This is a comprehensive solution designed to help businesses streamline their
              operations and improve efficiency.
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="faq2"
          title="How do I get started?"
          iconclass="wi wi-question-circle"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Getting started is easy! Simply sign up for an account, complete the onboarding
              process, and you'll be ready to use all features.
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="faq3"
          title="What payment methods do you accept?"
          iconclass="wi wi-question-circle"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
            </Typography>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="faq4"
          title="Is there a free trial?"
          iconclass="wi wi-question-circle"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              Yes! We offer a 14-day free trial with full access to all features. No credit card
              required.
            </Typography>
          </Box>
        </WmAccordionPane>
      </>
    ),
  },
};

export const ProductFeatures: Story = {
  args: {
    name: "featuresAccordion",
    type: "static",
    closeothers: false,
    defaultpaneindex: 0,
    listener: mockListener,
    children: (
      <>
        <WmAccordionPane
          name="feature1"
          title="Analytics Dashboard"
          subheading="Visualize your data"
          iconclass="wi wi-bar-chart"
          badgevalue="New"
          badgetype="success"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1" gutterBottom>
              Our advanced analytics dashboard provides real-time insights into your business
              metrics:
            </Typography>
            <ul>
              <li>Customizable charts and graphs</li>
              <li>Export data to CSV/PDF</li>
              <li>Automated reporting</li>
              <li>Multi-user collaboration</li>
            </ul>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="feature2"
          title="Team Collaboration"
          subheading="Work together seamlessly"
          iconclass="wi wi-users"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1" gutterBottom>
              Collaborate with your team in real-time:
            </Typography>
            <ul>
              <li>Shared workspaces</li>
              <li>Real-time chat</li>
              <li>File sharing</li>
              <li>Task assignments</li>
            </ul>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="feature3"
          title="Security & Privacy"
          subheading="Your data is protected"
          iconclass="wi wi-shield"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1" gutterBottom>
              Enterprise-grade security features:
            </Typography>
            <ul>
              <li>End-to-end encryption</li>
              <li>Two-factor authentication</li>
              <li>Regular security audits</li>
              <li>GDPR compliant</li>
            </ul>
          </Box>
        </WmAccordionPane>
      </>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [eventLog, setEventLog] = useState<string[]>([]);

    const addLog = (message: string) => {
      const timestamp = new Date().toLocaleTimeString();
      setEventLog((prev) => [...prev.slice(-4), `[${timestamp}] ${message}`]);
    };

    const handleExpand = (event: Event, props: any) => {
      addLog(`Expanded: ${props.title}`);
    };

    const handleCollapse = (event: Event, props: any) => {
      addLog(`Collapsed: ${props.title}`);
    };

    return (
      <Box sx={{ padding: 2 }}>
        <Stack spacing={3}>
          <WmAccordion
            name="interactiveAccordion"
            type="static"
            closeothers={true}
            defaultpaneindex={0}
            listener={mockListener}
          >
            <WmAccordionPane
              name="pane1"
              title="Section 1"
              iconclass="wi wi-file"
              onExpand={handleExpand}
              onCollapse={handleCollapse}
              listener={mockListener}
            >
              <Box sx={{ padding: 2 }}>
                <Typography variant="body1">Content for section 1</Typography>
              </Box>
            </WmAccordionPane>
            <WmAccordionPane
              name="pane2"
              title="Section 2"
              iconclass="wi wi-folder"
              onExpand={handleExpand}
              onCollapse={handleCollapse}
              listener={mockListener}
            >
              <Box sx={{ padding: 2 }}>
                <Typography variant="body1">Content for section 2</Typography>
              </Box>
            </WmAccordionPane>
            <WmAccordionPane
              name="pane3"
              title="Section 3"
              iconclass="wi wi-cog"
              onExpand={handleExpand}
              onCollapse={handleCollapse}
              listener={mockListener}
            >
              <Box sx={{ padding: 2 }}>
                <Typography variant="body1">Content for section 3</Typography>
              </Box>
            </WmAccordionPane>
          </WmAccordion>

          <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}>
            <Typography variant="subtitle2" gutterBottom>
              Event Log:
            </Typography>
            {eventLog.length === 0 ? (
              <Typography variant="body2">Expand/collapse panes to see events</Typography>
            ) : (
              <Stack spacing={0.5}>
                {eventLog.map((log, index) => (
                  <Typography key={index} variant="body2" sx={{ fontFamily: "monospace" }}>
                    {log}
                  </Typography>
                ))}
              </Stack>
            )}
          </Box>
        </Stack>
      </Box>
    );
  },
};

export const SettingsPanel: Story = {
  args: {
    name: "settingsAccordion",
    type: "static",
    closeothers: true,
    defaultpaneindex: 0,
    listener: mockListener,
    children: (
      <>
        <WmAccordionPane
          name="general"
          title="General Settings"
          subheading="Basic configuration"
          iconclass="wi wi-cog"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2">Language</Typography>
                <select style={{ width: "100%", padding: "8px", marginTop: "4px" }}>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </Box>
              <Box>
                <Typography variant="body2">Time Zone</Typography>
                <select style={{ width: "100%", padding: "8px", marginTop: "4px" }}>
                  <option>UTC-5 (EST)</option>
                  <option>UTC-8 (PST)</option>
                  <option>UTC+0 (GMT)</option>
                </select>
              </Box>
            </Stack>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="notifications"
          title="Notifications"
          subheading="Manage alerts"
          iconclass="wi wi-bell"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Stack spacing={1}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" defaultChecked />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Email notifications
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" defaultChecked />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Push notifications
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  SMS notifications
                </Typography>
              </Box>
            </Stack>
          </Box>
        </WmAccordionPane>
        <WmAccordionPane
          name="privacy"
          title="Privacy & Security"
          subheading="Control your data"
          iconclass="wi wi-lock"
          listener={mockListener}
        >
          <Box sx={{ padding: 2 }}>
            <Stack spacing={1}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" defaultChecked />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Two-factor authentication
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Share analytics data
                </Typography>
              </Box>
            </Stack>
          </Box>
        </WmAccordionPane>
      </>
    ),
  },
};
