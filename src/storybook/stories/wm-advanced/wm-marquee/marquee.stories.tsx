import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography, Chip } from "@mui/material";

import MarqueeDefaultExport from "../../../../components/advanced/marquee/index";

import { ComponentDocumentation } from "../../../../../.storybook/components/DocumentRenderer";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const meta: Meta<typeof MarqueeDefaultExport> = {
  title: "Advanced/Marquee",
  component: MarqueeDefaultExport,
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["left", "right", "up", "down"]
    },
    scrollamount: { control: "number" },
    scrolldelay: { control: "number" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Box style={{ padding: 16, border: "1px solid #ddd", borderRadius: 4 }}>
    <MarqueeDefaultExport {...args} />
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
  parameters: {
    layout: 'fullscreen',
  },
};

// Basic Examples
export const Basic: Story = {
  render: Template,
  args: {
    name: "basicMarquee",
    direction: "left",
    children: "This is a basic marquee scrolling",
    scrollamount: 6,
    scrolldelay: 85,
  },
};

// export const ScrollingUp: Story = {
//   render: () => (
//     <Box style={{ padding: 16, border: "1px solid #ddd", borderRadius: 4, height: 200 }}>
//       <MarqueeDefaultExport name="upMarquee" direction="up">
//         <Box>
//           <Typography>↑ Scrolling from bottom to top</Typography>
//           <Typography mt={1}>Line 2</Typography>
//           <Typography mt={1}>Line 3</Typography>
//         </Box>
//       </MarqueeDefaultExport>
//     </Box>
//   ),
// };

// export const ScrollingLeft: Story = {
//   render: Template,
//   args: {
//     name: "leftMarquee",
//     direction: "left",
//     children: "← Scrolling from right to left (default direction)",
//   },
// };

// export const ScrollingRight: Story = {
//   render: Template,
//   args: {
//     name: "rightMarquee",
//     direction: "right",
//     children: "→ Scrolling from left to right",
//   },
// };

// export const ScrollingDown: Story = {
//   render: () => (
//     <Box style={{ padding: 16, border: "1px solid #ddd", borderRadius: 4, height: 200 }}>
//       <MarqueeDefaultExport name="downMarquee" direction="down">
//         <Box>
//           <Typography>↓ Scrolling from top to bottom</Typography>
//           <Typography mt={1}>Line 2</Typography>
//           <Typography mt={1}>Line 3</Typography>
//         </Box>
//       </MarqueeDefaultExport>
//     </Box>
//   ),
// };

// // Speed Variations (scrollamount)
// export const SlowSpeed: Story = {
//   render: Template,
//   args: {
//     name: "slowMarquee",
//     direction: "left",
//     scrollamount: 2,
//     children: "🐢 Slow scrolling speed (scrollamount: 2)",
//   },
// };

// export const MediumSpeed: Story = {
//   render: Template,
//   args: {
//     name: "mediumMarquee",
//     direction: "left",
//     scrollamount: 6,
//     children: "🚶 Medium scrolling speed (scrollamount: 6 - default)",
//   },
// };

// export const FastSpeed: Story = {
//   render: Template,
//   args: {
//     name: "fastMarquee",
//     direction: "left",
//     scrollamount: 12,
//     children: "🚀 Fast scrolling speed (scrollamount: 12)",
//   },
// };

// export const VeryFastSpeed: Story = {
//   render: Template,
//   args: {
//     name: "veryFastMarquee",
//     direction: "left",
//     scrollamount: 20,
//     children: "⚡ Very fast scrolling speed (scrollamount: 20)",
//   },
// };

// // Scroll Delay Variations
// export const NoDelay: Story = {
//   render: Template,
//   args: {
//     name: "noDelayMarquee",
//     direction: "left",
//     scrollamount: 6,
//     scrolldelay: 0,
//     children: "No delay - continuous smooth animation (scrolldelay: 0)",
//   },
// };

// export const ShortDelay: Story = {
//   render: Template,
//   args: {
//     name: "shortDelayMarquee",
//     direction: "left",
//     scrollamount: 6,
//     scrolldelay: 50,
//     children: "Short delay between movements (scrolldelay: 50)",
//   },
// };

// export const MediumDelay: Story = {
//   render: Template,
//   args: {
//     name: "mediumDelayMarquee",
//     direction: "left",
//     scrollamount: 6,
//     scrolldelay: 85,
//     children: "Medium delay between movements (scrolldelay: 85 - default)",
//   },
// };

// export const LongDelay: Story = {
//   render: Template,
//   args: {
//     name: "longDelayMarquee",
//     direction: "left",
//     scrollamount: 6,
//     scrolldelay: 150,
//     children: "Long delay between movements (scrolldelay: 150)",
//   },
// };

// // Direction Comparison
// export const DirectionComparison: Story = {
//   render: () => (
//     <Stack spacing={2} padding={2}>
//       <Box>
//         <Typography variant="caption" color="text.secondary" mb={1}>
//           Left Direction (Default)
//         </Typography>
//         <Box border="1px solid #ddd" borderRadius={1} p={1}>
//           <MarqueeDefaultExport name="compLeft" direction="left">
//             ← Scrolling Left
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//       <Box>
//         <Typography variant="caption" color="text.secondary" mb={1}>
//           Right Direction
//         </Typography>
//         <Box border="1px solid #ddd" borderRadius={1} p={1}>
//           <MarqueeDefaultExport name="compRight" direction="right">
//             → Scrolling Right
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//       <Box>
//         <Typography variant="caption" color="text.secondary" mb={1}>
//           Up Direction
//         </Typography>
//         <Box border="1px solid #ddd" borderRadius={1} p={1} height={150}>
//           <MarqueeDefaultExport name="compUp" direction="up">
//             <Box>
//               <Typography>↑ Scrolling Up</Typography>
//               <Typography mt={1}>Line 2</Typography>
//               <Typography mt={1}>Line 3</Typography>
//             </Box>
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//       <Box>
//         <Typography variant="caption" color="text.secondary" mb={1}>
//           Down Direction
//         </Typography>
//         <Box border="1px solid #ddd" borderRadius={1} p={1} height={150}>
//           <MarqueeDefaultExport name="compDown" direction="down">
//             <Box>
//               <Typography>↓ Scrolling Down</Typography>
//               <Typography mt={1}>Line 2</Typography>
//               <Typography mt={1}>Line 3</Typography>
//             </Box>
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//     </Stack>
//   ),
// };

// // Speed Comparison
// export const SpeedComparison: Story = {
//   render: () => (
//     <Stack spacing={2} padding={2}>
//       <Box>
//         <Typography variant="caption" color="text.secondary" mb={1}>
//           Slow (scrollamount: 2)
//         </Typography>
//         <Box border="1px solid #ddd" borderRadius={1} p={1}>
//           <MarqueeDefaultExport name="speedSlow" direction="left" scrollamount={2}>
//             🐢 Slow scrolling speed
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//       <Box>
//         <Typography variant="caption" color="text.secondary" mb={1}>
//           Medium (scrollamount: 6)
//         </Typography>
//         <Box border="1px solid #ddd" borderRadius={1} p={1}>
//           <MarqueeDefaultExport name="speedMedium" direction="left" scrollamount={6}>
//             🚶 Medium scrolling speed
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//       <Box>
//         <Typography variant="caption" color="text.secondary" mb={1}>
//           Fast (scrollamount: 12)
//         </Typography>
//         <Box border="1px solid #ddd" borderRadius={1} p={1}>
//           <MarqueeDefaultExport name="speedFast" direction="left" scrollamount={12}>
//             🚀 Fast scrolling speed
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//       <Box>
//         <Typography variant="caption" color="text.secondary" mb={1}>
//           Very Fast (scrollamount: 20)
//         </Typography>
//         <Box border="1px solid #ddd" borderRadius={1} p={1}>
//           <MarqueeDefaultExport name="speedVeryFast" direction="left" scrollamount={20}>
//             ⚡ Very fast scrolling speed
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//     </Stack>
//   ),
// };

// // Content Variations
// export const TextContent: Story = {
//   render: Template,
//   args: {
//     name: "textMarquee",
//     direction: "left",
//     children: "Breaking News: This is a simple text marquee scrolling continuously across the screen!",
//   },
// };

// export const HTMLContent: Story = {
//   render: () => (
//     <Box style={{ padding: 16, border: "1px solid #ddd", borderRadius: 4 }}>
//       <MarqueeDefaultExport name="htmlMarquee" direction="left">
//         <Box display="inline-flex" alignItems="center" gap={2}>
//           <Typography variant="h6" color="primary">
//             Special Announcement
//           </Typography>
//           <Typography>•</Typography>
//           <Typography variant="body1">
//             Check out our new features!
//           </Typography>
//         </Box>
//       </MarqueeDefaultExport>
//     </Box>
//   ),
// };

// export const ChipContent: Story = {
//   render: () => (
//     <Box style={{ padding: 16, border: "1px solid #ddd", borderRadius: 4 }}>
//       <MarqueeDefaultExport name="chipMarquee" direction="left" scrollamount={4}>
//         <Stack direction="row" spacing={2} alignItems="center">
//           <Chip label="React" color="primary" />
//           <Chip label="TypeScript" color="secondary" />
//           <Chip label="Material-UI" color="success" />
//           <Chip label="Storybook" color="info" />
//           <Chip label="WaveMaker" color="warning" />
//         </Stack>
//       </MarqueeDefaultExport>
//     </Box>
//   ),
// };

// export const StyledContent: Story = {
//   render: () => (
//     <Box
//       style={{
//         padding: 16,
//         border: "2px solid #1976d2",
//         borderRadius: 8,
//         background: "linear-gradient(90deg, #e3f2fd 0%, #fff 100%)"
//       }}
//     >
//       <MarqueeDefaultExport name="styledMarquee" direction="left" scrollamount={5}>
//         <Box display="inline-flex" alignItems="center" gap={2}>
//           <Typography variant="h5" color="primary" fontWeight="bold">
//             🎉 Big Sale!
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Up to 50% off on all items
//           </Typography>
//           <Typography variant="h6" color="error">
//             Limited Time Only!
//           </Typography>
//         </Box>
//       </MarqueeDefaultExport>
//     </Box>
//   ),
// };

// export const LongContent: Story = {
//   render: Template,
//   args: {
//     name: "longMarquee",
//     direction: "left",
//     scrollamount: 8,
//     children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
//   },
// };

// // Interactive Examples
// export const PauseOnHover: Story = {
//   render: () => {
//     const [isPaused, setIsPaused] = useState(false);

//     return (
//       <Box style={{ padding: 16 }}>
//         <Typography variant="h6" mb={2}>
//           Hover to Pause
//         </Typography>
//         <Box
//           border="1px solid #ddd"
//           borderRadius={1}
//           p={1}
//           bgcolor={isPaused ? "#fff3e0" : "transparent"}
//           sx={{ transition: "background-color 0.3s" }}
//         >
//           <MarqueeDefaultExport
//             name="pauseMarquee"
//             direction="left"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             Hover over this marquee to pause the animation
//           </MarqueeDefaultExport>
//         </Box>
//         <Typography variant="caption" color="text.secondary" mt={1}>
//           Status: {isPaused ? "Paused" : "Running"}
//         </Typography>
//       </Box>
//     );
//   },
// };

// export const InteractiveMarquee: Story = {
//   render: () => {
//     const [clicked, setClicked] = useState(false);

//     return (
//       <Box style={{ padding: 16 }}>
//         <Typography variant="h6" mb={2}>
//           Click to Interact
//         </Typography>
//         <Box
//           border="1px solid #ddd"
//           borderRadius={1}
//           p={1}
//           sx={{ cursor: "pointer" }}
//         >
//           <MarqueeDefaultExport
//             name="interactiveMarquee"
//             direction="left"
//             onClick={() => setClicked(!clicked)}
//           >
//             {clicked ? "🎉 Thanks for clicking!" : "👆 Click me to see a message"}
//           </MarqueeDefaultExport>
//         </Box>
//       </Box>
//     );
//   },
// };

// // Real-world Examples
// export const NewsTicker: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         News Ticker
//       </Typography>
//       <Box
//         bgcolor="#1976d2"
//         color="white"
//         p={1}
//         borderRadius={1}
//       >
//         <MarqueeDefaultExport name="newsTicker" direction="left" scrollamount={6}>
//           <Box display="inline-flex" alignItems="center" gap={3}>
//             <Typography fontWeight="bold">BREAKING:</Typography>
//             <Typography>New product launch announced</Typography>
//             <Typography>•</Typography>
//             <Typography>Stock market reaches new high</Typography>
//             <Typography>•</Typography>
//             <Typography>Weather forecast: Sunny skies ahead</Typography>
//             <Typography>•</Typography>
//             <Typography>Sports: Local team wins championship</Typography>
//           </Box>
//         </MarqueeDefaultExport>
//       </Box>
//     </Box>
//   ),
// };

// export const StockTicker: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         Stock Ticker
//       </Typography>
//       <Box
//         bgcolor="#000"
//         color="#0f0"
//         p={1}
//         borderRadius={1}
//         fontFamily="monospace"
//       >
//         <MarqueeDefaultExport name="stockTicker" direction="left" scrollamount={5}>
//           <Box display="inline-flex" alignItems="center" gap={3}>
//             <Typography>AAPL: $175.50 ▲ +2.3%</Typography>
//             <Typography>•</Typography>
//             <Typography>GOOGL: $140.20 ▼ -0.8%</Typography>
//             <Typography>•</Typography>
//             <Typography>MSFT: $380.75 ▲ +1.5%</Typography>
//             <Typography>•</Typography>
//             <Typography>TSLA: $245.60 ▲ +3.2%</Typography>
//             <Typography>•</Typography>
//             <Typography>AMZN: $155.30 ▼ -0.5%</Typography>
//           </Box>
//         </MarqueeDefaultExport>
//       </Box>
//     </Box>
//   ),
// };

// export const Announcement: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         Announcement Banner
//       </Typography>
//       <Box
//         bgcolor="#ff9800"
//         color="white"
//         p={2}
//         borderRadius={1}
//       >
//         <MarqueeDefaultExport name="announcement" direction="left" scrollamount={7}>
//           <Typography variant="h6">
//             🎊 FLASH SALE: 50% OFF ALL ITEMS - USE CODE: SAVE50 - LIMITED TIME ONLY! 🎊
//           </Typography>
//         </MarqueeDefaultExport>
//       </Box>
//     </Box>
//   ),
// };

// export const EventSchedule: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         Event Schedule
//       </Typography>
//       <Box
//         bgcolor="#4caf50"
//         color="white"
//         p={1.5}
//         borderRadius={1}
//       >
//         <MarqueeDefaultExport name="eventSchedule" direction="left" scrollamount={5}>
//           <Box display="inline-flex" alignItems="center" gap={4}>
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">10:00 AM</Typography>
//               <Typography>Opening Ceremony</Typography>
//             </Box>
//             <Typography>|</Typography>
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">11:30 AM</Typography>
//               <Typography>Keynote Speech</Typography>
//             </Box>
//             <Typography>|</Typography>
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">1:00 PM</Typography>
//               <Typography>Lunch Break</Typography>
//             </Box>
//             <Typography>|</Typography>
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">2:30 PM</Typography>
//               <Typography>Workshop Sessions</Typography>
//             </Box>
//             <Typography>|</Typography>
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">5:00 PM</Typography>
//               <Typography>Closing Remarks</Typography>
//             </Box>
//           </Box>
//         </MarqueeDefaultExport>
//       </Box>
//     </Box>
//   ),
// };

// export const CryptoTicker: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         Cryptocurrency Ticker
//       </Typography>
//       <Box
//         bgcolor="#1a1a2e"
//         color="#fff"
//         p={1.5}
//         borderRadius={1}
//       >
//         <MarqueeDefaultExport name="cryptoTicker" direction="left" scrollamount={6}>
//           <Stack direction="row" spacing={3} alignItems="center">
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">BTC</Typography>
//               <Typography color="#f39c12">$45,230</Typography>
//               <Typography color="#2ecc71">▲ 5.2%</Typography>
//             </Box>
//             <Typography>•</Typography>
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">ETH</Typography>
//               <Typography color="#3498db">$2,850</Typography>
//               <Typography color="#2ecc71">▲ 3.8%</Typography>
//             </Box>
//             <Typography>•</Typography>
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">BNB</Typography>
//               <Typography color="#f39c12">$315</Typography>
//               <Typography color="#e74c3c">▼ 1.2%</Typography>
//             </Box>
//             <Typography>•</Typography>
//             <Box display="inline-flex" alignItems="center" gap={1}>
//               <Typography fontWeight="bold">ADA</Typography>
//               <Typography color="#3498db">$0.65</Typography>
//               <Typography color="#2ecc71">▲ 2.5%</Typography>
//             </Box>
//           </Stack>
//         </MarqueeDefaultExport>
//       </Box>
//     </Box>
//   ),
// };

// export const AlertBanner: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         Alert Banner
//       </Typography>
//       <Box
//         bgcolor="#f44336"
//         color="white"
//         p={1.5}
//         borderRadius={1}
//       >
//         <MarqueeDefaultExport name="alertBanner" direction="left" scrollamount={5}>
//           <Box display="inline-flex" alignItems="center" gap={2}>
//             <Typography fontSize="1.2rem">⚠️</Typography>
//             <Typography fontWeight="bold">
//               SYSTEM MAINTENANCE SCHEDULED FOR TONIGHT 11PM - 2AM
//             </Typography>
//             <Typography fontSize="1.2rem">⚠️</Typography>
//           </Box>
//         </MarqueeDefaultExport>
//       </Box>
//     </Box>
//   ),
// };

// export const PromotionalBanner: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         Promotional Banner
//       </Typography>
//       <Box
//         sx={{
//           background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
//           color: "white",
//           p: 2,
//           borderRadius: 1,
//         }}
//       >
//         <MarqueeDefaultExport name="promoMarquee" direction="left" scrollamount={6}>
//           <Box display="inline-flex" alignItems="center" gap={3}>
//             <Typography variant="h6" fontWeight="bold">
//               ✨ NEW ARRIVALS
//             </Typography>
//             <Typography>•</Typography>
//             <Typography variant="body1">
//               Free Shipping on Orders Over $50
//             </Typography>
//             <Typography>•</Typography>
//             <Typography variant="h6" fontWeight="bold">
//               🎁 BUY 2 GET 1 FREE
//             </Typography>
//             <Typography>•</Typography>
//             <Typography variant="body1">
//               Sign Up Today & Get 10% OFF
//             </Typography>
//           </Box>
//         </MarqueeDefaultExport>
//       </Box>
//     </Box>
//   ),
// };

// export const VerticalNews: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         Vertical News Feed
//       </Typography>
//       <Box
//         bgcolor="#f5f5f5"
//         p={2}
//         borderRadius={1}
//         height={250}
//         overflow="hidden"
//       >
//         <MarqueeDefaultExport name="verticalNews" direction="up" scrollamount={3}>
//           <Stack spacing={2}>
//             <Box bgcolor="white" p={2} borderRadius={1}>
//               <Typography variant="subtitle2" color="primary">
//                 Technology
//               </Typography>
//               <Typography variant="body2">
//                 New AI breakthrough announced by researchers
//               </Typography>
//             </Box>
//             <Box bgcolor="white" p={2} borderRadius={1}>
//               <Typography variant="subtitle2" color="success.main">
//                 Business
//               </Typography>
//               <Typography variant="body2">
//                 Tech stocks surge to record highs
//               </Typography>
//             </Box>
//             <Box bgcolor="white" p={2} borderRadius={1}>
//               <Typography variant="subtitle2" color="warning.main">
//                 Sports
//               </Typography>
//               <Typography variant="body2">
//                 Championship finals scheduled for next week
//               </Typography>
//             </Box>
//             <Box bgcolor="white" p={2} borderRadius={1}>
//               <Typography variant="subtitle2" color="error">
//                 Breaking
//               </Typography>
//               <Typography variant="body2">
//                 Major weather event expected this weekend
//               </Typography>
//             </Box>
//           </Stack>
//         </MarqueeDefaultExport>
//       </Box>
//     </Box>
//   ),
// };

// export const MultipleMarquees: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Typography variant="h6" mb={2}>
//         Multiple Marquees
//       </Typography>
//       <Stack spacing={2}>
//         <Box bgcolor="#e3f2fd" p={1} borderRadius={1}>
//           <MarqueeDefaultExport name="multi1" direction="left" scrollamount={5}>
//             📢 First marquee scrolling left
//           </MarqueeDefaultExport>
//         </Box>
//         <Box bgcolor="#f3e5f5" p={1} borderRadius={1}>
//           <MarqueeDefaultExport name="multi2" direction="right" scrollamount={6}>
//             📢 Second marquee scrolling right
//           </MarqueeDefaultExport>
//         </Box>
//         <Box bgcolor="#e8f5e9" p={1} borderRadius={1}>
//           <MarqueeDefaultExport name="multi3" direction="left" scrollamount={8}>
//             📢 Third marquee scrolling left (faster)
//           </MarqueeDefaultExport>
//         </Box>
//       </Stack>
//     </Box>
//   ),
// };
