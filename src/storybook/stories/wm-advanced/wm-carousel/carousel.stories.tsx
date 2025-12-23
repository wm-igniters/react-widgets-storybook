import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";

import CarouselDefaultExport from "../../../../components/advanced/carousel/index";

const meta: Meta<typeof CarouselDefaultExport> = {
  title: "Advanced/Carousel",
  component: CarouselDefaultExport,
  argTypes: {
    animation: {
      control: { type: "select" },
      options: ["auto", "none"],
      description: "Animation type for carousel transitions"
    },
    animationinterval: {
      control: { type: "number", min: 1, max: 10, step: 0.5 },
      description: "Interval in seconds for auto-play (when animation is 'auto')"
    },
    controls: {
      control: { type: "select" },
      options: ["navs", "indicators", "both", "none"],
      description: "Type of navigation controls to display"
    },
    height: {
      control: "text",
      description: "Height of the carousel"
    },
    width: {
      control: "text",
      description: "Width of the carousel"
    },
    nodatamessage: {
      control: "text",
      description: "Message to display when there is no data"
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Basic: Story = {
  render: (args) => (
    <Box style={{ padding: 16 }}>
      <CarouselDefaultExport {...args}>
        <Box sx={{ width: "100%", height: "100%", bgcolor: "#1976d2", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h3">Slide 1</Typography>
        </Box>
        <Box sx={{ width: "100%", height: "100%", bgcolor: "#2e7d32", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h3">Slide 2</Typography>
        </Box>
        <Box sx={{ width: "100%", height: "100%", bgcolor: "#ed6c02", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h3">Slide 3</Typography>
        </Box>
      </CarouselDefaultExport>
    </Box>
  ),
  args: {
    name: "basicCarousel",
    animation: "auto",
    animationinterval: 3,
    controls: "both",
    height: "400px",
    width: "100%",
  },
};

// export const WithTextContent: Story = {
//   render: Template,
//   args: {
//     name: "textCarousel",
//     animation: "auto",
//     animationinterval: 4,
//     controls: "both",
//     height: "400px",
//     children: [
//       <Box key="slide1" sx={{ textAlign: "center", px: 4 }}>
//         <Typography variant="h4" gutterBottom>Welcome to Our Platform</Typography>
//         <Typography variant="body1">Discover amazing features and capabilities</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ textAlign: "center", px: 4 }}>
//         <Typography variant="h4" gutterBottom>Build Faster</Typography>
//         <Typography variant="body1">Accelerate your development workflow</Typography>
//       </Box>,
//       <Box key="slide3" sx={{ textAlign: "center", px: 4 }}>
//         <Typography variant="h4" gutterBottom>Deploy Anywhere</Typography>
//         <Typography variant="body1">Run on any platform, any cloud</Typography>
//       </Box>,
//     ],
//   },
// };

// export const WithImages: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <CarouselDefaultExport
//         name="imageCarousel"
//         animation="auto"
//         animationinterval={3}
//         controls="both"
//         height="500px"
//       >
//         <Box sx={{ width: "100%", height: "100%", bgcolor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2 }}>
//           <Box sx={{ width: 200, height: 200, bgcolor: "#1976d2", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6" color="white">Image 1</Typography>
//           </Box>
//           <Typography variant="h5">Product Feature 1</Typography>
//           <Typography variant="body2" color="text.secondary">Description of feature 1</Typography>
//         </Box>
//         <Box sx={{ width: "100%", height: "100%", bgcolor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2 }}>
//           <Box sx={{ width: 200, height: 200, bgcolor: "#2e7d32", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6" color="white">Image 2</Typography>
//           </Box>
//           <Typography variant="h5">Product Feature 2</Typography>
//           <Typography variant="body2" color="text.secondary">Description of feature 2</Typography>
//         </Box>
//         <Box sx={{ width: "100%", height: "100%", bgcolor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2 }}>
//           <Box sx={{ width: 200, height: 200, bgcolor: "#ed6c02", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6" color="white">Image 3</Typography>
//           </Box>
//           <Typography variant="h5">Product Feature 3</Typography>
//           <Typography variant="body2" color="text.secondary">Description of feature 3</Typography>
//         </Box>
//       </CarouselDefaultExport>
//     </Box>
//   ),
// };

// // Control Variations
// export const OnlyNavigationControls: Story = {
//   render: Template,
//   args: {
//     name: "navsOnlyCarousel",
//     animation: "none",
//     controls: "navs",
//     height: "400px",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#1976d2", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Use Arrow Controls</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#2e7d32", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Slide 2</Typography>
//       </Box>,
//       <Box key="slide3" sx={{ width: "100%", height: "100%", bgcolor: "#ed6c02", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Slide 3</Typography>
//       </Box>,
//     ],
//   },
// };

// export const OnlyIndicators: Story = {
//   render: Template,
//   args: {
//     name: "indicatorsOnlyCarousel",
//     animation: "none",
//     controls: "indicators",
//     height: "400px",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#9c27b0", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Use Dots Below</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#d32f2f", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Slide 2</Typography>
//       </Box>,
//       <Box key="slide3" sx={{ width: "100%", height: "100%", bgcolor: "#0288d1", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Slide 3</Typography>
//       </Box>,
//     ],
//   },
// };

// export const BothControls: Story = {
//   render: Template,
//   args: {
//     name: "bothControlsCarousel",
//     animation: "auto",
//     animationinterval: 4,
//     controls: "both",
//     height: "400px",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#00695c", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Arrows & Dots</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#5d4037", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Slide 2</Typography>
//       </Box>,
//       <Box key="slide3" sx={{ width: "100%", height: "100%", bgcolor: "#c62828", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Slide 3</Typography>
//       </Box>,
//     ],
//   },
// };

// export const NoControls: Story = {
//   render: Template,
//   args: {
//     name: "noControlsCarousel",
//     animation: "auto",
//     animationinterval: 2,
//     controls: "none",
//     height: "400px",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#455a64", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Auto-play Only</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#6a1b9a", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">No Controls</Typography>
//       </Box>,
//       <Box key="slide3" sx={{ width: "100%", height: "100%", bgcolor: "#1565c0", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4">Slide 3</Typography>
//       </Box>,
//     ],
//   },
// };

// // Animation Variations
// export const AutoPlayFast: Story = {
//   render: Template,
//   args: {
//     name: "fastCarousel",
//     animation: "auto",
//     animationinterval: 1.5,
//     controls: "both",
//     height: "350px",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#f57c00", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Fast Auto-play (1.5s)</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#f50057", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Slide 2</Typography>
//       </Box>,
//       <Box key="slide3" sx={{ width: "100%", height: "100%", bgcolor: "#00bfa5", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Slide 3</Typography>
//       </Box>,
//     ],
//   },
// };

// export const AutoPlaySlow: Story = {
//   render: Template,
//   args: {
//     name: "slowCarousel",
//     animation: "auto",
//     animationinterval: 5,
//     controls: "both",
//     height: "350px",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#388e3c", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Slow Auto-play (5s)</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#7b1fa2", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Slide 2</Typography>
//       </Box>,
//       <Box key="slide3" sx={{ width: "100%", height: "100%", bgcolor: "#d84315", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Slide 3</Typography>
//       </Box>,
//     ],
//   },
// };

// export const ManualOnly: Story = {
//   render: Template,
//   args: {
//     name: "manualCarousel",
//     animation: "none",
//     controls: "both",
//     height: "350px",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#303f9f", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Manual Navigation</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#0097a7", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Use Controls to Navigate</Typography>
//       </Box>,
//       <Box key="slide3" sx={{ width: "100%", height: "100%", bgcolor: "#00796b", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Slide 3</Typography>
//       </Box>,
//     ],
//   },
// };

// // Dynamic Data Examples
// export const WithDataset: Story = {
//   render: () => {
//     const products = [
//       { id: 1, name: "Product A", price: "$99", color: "#1976d2" },
//       { id: 2, name: "Product B", price: "$149", color: "#2e7d32" },
//       { id: 3, name: "Product C", price: "$199", color: "#ed6c02" },
//       { id: 4, name: "Product D", price: "$249", color: "#9c27b0" },
//     ];

//     return (
//       <Box style={{ padding: 16 }}>
//         <CarouselDefaultExport
//           name="datasetCarousel"
//           animation="auto"
//           animationinterval={3}
//           controls="both"
//           height="400px"
//           dataset={products}
//           render={(item, index) => (
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 bgcolor: item.color,
//                 color: "white",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 gap: 2,
//               }}
//             >
//               <Typography variant="h3">{item.name}</Typography>
//               <Typography variant="h5">{item.price}</Typography>
//               <Typography variant="body2">Item {index + 1} of {products.length}</Typography>
//             </Box>
//           )}
//         />
//       </Box>
//     );
//   },
// };

// export const WithCardDataset: Story = {
//   render: () => {
//     const testimonials = [
//       {
//         id: 1,
//         name: "John Doe",
//         role: "CEO, Tech Corp",
//         quote: "This product transformed our business operations completely!",
//         avatar: "#1976d2"
//       },
//       {
//         id: 2,
//         name: "Jane Smith",
//         role: "CTO, Innovation Inc",
//         quote: "Amazing features and excellent customer support. Highly recommended!",
//         avatar: "#2e7d32"
//       },
//       {
//         id: 3,
//         name: "Mike Johnson",
//         role: "Designer, Creative Studio",
//         quote: "The best tool we've used for our design workflow. Simply outstanding!",
//         avatar: "#ed6c02"
//       },
//     ];

//     return (
//       <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
//         <Typography variant="h4" gutterBottom textAlign="center" mb={3}>
//           Customer Testimonials
//         </Typography>
//         <CarouselDefaultExport
//           name="testimonialsCarousel"
//           animation="auto"
//           animationinterval={4}
//           controls="both"
//           height="300px"
//           dataset={testimonials}
//           render={(item) => (
//             <Card sx={{ maxWidth: 600, mx: "auto", textAlign: "center", p: 3 }}>
//               <CardContent>
//                 <Box
//                   sx={{
//                     width: 80,
//                     height: 80,
//                     borderRadius: "50%",
//                     bgcolor: item.avatar,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     mx: "auto",
//                     mb: 2,
//                   }}
//                 >
//                   <Typography variant="h4" color="white">
//                     {item.name.charAt(0)}
//                   </Typography>
//                 </Box>
//                 <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
//                   &quot;{item.quote}&quot;
//                 </Typography>
//                 <Typography variant="h6" color="primary">
//                   {item.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {item.role}
//                 </Typography>
//               </CardContent>
//             </Card>
//           )}
//         />
//       </Box>
//     );
//   },
// };

// export const EmptyCarousel: Story = {
//   render: Template,
//   args: {
//     name: "emptyCarousel",
//     animation: "none",
//     controls: "both",
//     height: "400px",
//     dataset: [],
//     nodatamessage: "No slides available. Please add some content.",
//   },
// };

// // Size Variations
// export const CompactCarousel: Story = {
//   render: Template,
//   args: {
//     name: "compactCarousel",
//     animation: "auto",
//     animationinterval: 3,
//     controls: "both",
//     height: "250px",
//     width: "100%",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#1976d2", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">Compact Size</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#2e7d32", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h5">250px Height</Typography>
//       </Box>,
//     ],
//   },
// };

// export const LargeCarousel: Story = {
//   render: Template,
//   args: {
//     name: "largeCarousel",
//     animation: "auto",
//     animationinterval: 3,
//     controls: "both",
//     height: "600px",
//     width: "100%",
//     children: [
//       <Box key="slide1" sx={{ width: "100%", height: "100%", bgcolor: "#1976d2", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h3">Large Size</Typography>
//       </Box>,
//       <Box key="slide2" sx={{ width: "100%", height: "100%", bgcolor: "#2e7d32", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h3">600px Height</Typography>
//       </Box>,
//     ],
//   },
// };

// // Interactive Examples
// export const WithChangeCallback: Story = {
//   render: () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [previousIndex, setPreviousIndex] = useState(0);

//     return (
//       <Box style={{ padding: 16 }}>
//         <Box sx={{ mb: 2, p: 2, bgcolor: "#f5f5f5", borderRadius: 1 }}>
//           <Typography variant="body1">
//             <strong>Current Slide:</strong> {currentIndex + 1}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Previous Slide: {previousIndex + 1}
//           </Typography>
//         </Box>
//         <CarouselDefaultExport
//           name="callbackCarousel"
//           animation="auto"
//           animationinterval={3}
//           controls="both"
//           height="350px"
//           onChange={(event, widget, newIndex, oldIndex) => {
//             setCurrentIndex(newIndex || 0);
//             setPreviousIndex(oldIndex || 0);
//           }}
//         >
//           <Box sx={{ width: "100%", height: "100%", bgcolor: "#1976d2", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h4">Slide 1</Typography>
//           </Box>
//           <Box sx={{ width: "100%", height: "100%", bgcolor: "#2e7d32", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h4">Slide 2</Typography>
//           </Box>
//           <Box sx={{ width: "100%", height: "100%", bgcolor: "#ed6c02", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h4">Slide 3</Typography>
//           </Box>
//           <Box sx={{ width: "100%", height: "100%", bgcolor: "#9c27b0", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h4">Slide 4</Typography>
//           </Box>
//         </CarouselDefaultExport>
//       </Box>
//     );
//   },
// };

// export const KeyboardNavigation: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <Box sx={{ mb: 2, p: 2, bgcolor: "#e3f2fd", borderRadius: 1 }}>
//         <Typography variant="body1" gutterBottom>
//           <strong>Keyboard Controls:</strong>
//         </Typography>
//         <Typography variant="body2" component="div">
//           • Arrow Left: Previous slide
//         </Typography>
//         <Typography variant="body2" component="div">
//           • Arrow Right: Next slide
//         </Typography>
//         <Typography variant="body2" component="div">
//           • Space: Pause/Resume auto-play
//         </Typography>
//       </Box>
//       <CarouselDefaultExport
//         name="keyboardCarousel"
//         animation="auto"
//         animationinterval={3}
//         controls="both"
//         height="400px"
//       >
//         <Box sx={{ width: "100%", height: "100%", bgcolor: "#1976d2", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2 }}>
//           <Typography variant="h4">Use Keyboard to Navigate</Typography>
//           <Typography variant="body1">Try Arrow Keys or Space</Typography>
//         </Box>
//         <Box sx={{ width: "100%", height: "100%", bgcolor: "#2e7d32", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <Typography variant="h4">Slide 2</Typography>
//         </Box>
//         <Box sx={{ width: "100%", height: "100%", bgcolor: "#ed6c02", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <Typography variant="h4">Slide 3</Typography>
//         </Box>
//       </CarouselDefaultExport>
//     </Box>
//   ),
// };

// // Real-world Examples
// export const HeroCarousel: Story = {
//   render: () => (
//     <Box style={{ padding: 16 }}>
//       <CarouselDefaultExport
//         name="heroCarousel"
//         animation="auto"
//         animationinterval={4}
//         controls="both"
//         height="500px"
//       >
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             gap: 3,
//             px: 4,
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold">
//             Welcome to Our Platform
//           </Typography>
//           <Typography variant="h5">
//             Build amazing applications with ease
//           </Typography>
//           <Button variant="contained" size="large" sx={{ bgcolor: "white", color: "#667eea", "&:hover": { bgcolor: "#f5f5f5" } }}>
//             Get Started
//           </Button>
//         </Box>
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             gap: 3,
//             px: 4,
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold">
//             Powerful Features
//           </Typography>
//           <Typography variant="h5">
//             Everything you need to succeed
//           </Typography>
//           <Button variant="contained" size="large" sx={{ bgcolor: "white", color: "#f5576c", "&:hover": { bgcolor: "#f5f5f5" } }}>
//             Learn More
//           </Button>
//         </Box>
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             gap: 3,
//             px: 4,
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold">
//             Join Thousands of Users
//           </Typography>
//           <Typography variant="h5">
//             Trusted by companies worldwide
//           </Typography>
//           <Button variant="contained" size="large" sx={{ bgcolor: "white", color: "#00f2fe", "&:hover": { bgcolor: "#f5f5f5" } }}>
//             Sign Up Now
//           </Button>
//         </Box>
//       </CarouselDefaultExport>
//     </Box>
//   ),
// };

// export const ProductShowcase: Story = {
//   render: () => {
//     const products = [
//       { name: "Premium Headphones", price: "$299", features: "Noise Cancelling, 30hrs Battery", color: "#1976d2" },
//       { name: "Smart Watch Pro", price: "$399", features: "Fitness Tracking, GPS, Water Resistant", color: "#2e7d32" },
//       { name: "Wireless Earbuds", price: "$199", features: "True Wireless, 24hrs Playtime", color: "#ed6c02" },
//       { name: "Portable Speaker", price: "$149", features: "360° Sound, Waterproof, 20hrs Battery", color: "#9c27b0" },
//     ];

//     return (
//       <Box sx={{ maxWidth: 900, mx: "auto", p: 2 }}>
//         <Typography variant="h4" gutterBottom textAlign="center" mb={3}>
//           Featured Products
//         </Typography>
//         <CarouselDefaultExport
//           name="productCarousel"
//           animation="auto"
//           animationinterval={4}
//           controls="both"
//           height="450px"
//           dataset={products}
//           render={(item) => (
//             <Card sx={{ maxWidth: 600, mx: "auto", textAlign: "center" }}>
//               <Box
//                 sx={{
//                   height: 250,
//                   bgcolor: item.color,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Typography variant="h3" color="white">
//                   {item.name.split(" ")[0]}
//                 </Typography>
//               </Box>
//               <CardContent>
//                 <Typography variant="h5" gutterBottom>
//                   {item.name}
//                 </Typography>
//                 <Typography variant="h4" color="primary" gutterBottom>
//                   {item.price}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" mb={2}>
//                   {item.features}
//                 </Typography>
//                 <Button variant="contained" fullWidth>
//                   Add to Cart
//                 </Button>
//               </CardContent>
//             </Card>
//           )}
//         />
//       </Box>
//     );
//   },
// };

// export const ImageGallery: Story = {
//   render: () => {
//     const images = [
//       { id: 1, title: "Mountain Landscape", subtitle: "Beautiful mountain views", color: "#0d47a1" },
//       { id: 2, title: "Ocean Sunset", subtitle: "Stunning sunset over the ocean", color: "#c62828" },
//       { id: 3, title: "Forest Path", subtitle: "Peaceful forest walkway", color: "#2e7d32" },
//       { id: 4, title: "City Skyline", subtitle: "Modern city architecture", color: "#f57c00" },
//       { id: 5, title: "Desert Dunes", subtitle: "Endless golden sand dunes", color: "#6a1b9a" },
//     ];

//     return (
//       <Box sx={{ maxWidth: 1000, mx: "auto", p: 2 }}>
//         <Typography variant="h4" gutterBottom textAlign="center" mb={3}>
//           Photo Gallery
//         </Typography>
//         <CarouselDefaultExport
//           name="galleryCarousel"
//           animation="auto"
//           animationinterval={3}
//           controls="both"
//           height="500px"
//           dataset={images}
//           render={(item, index) => (
//             <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   bgcolor: item.color,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Typography variant="h2" color="white" fontWeight="bold">
//                   {item.title}
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   bgcolor: "rgba(0, 0, 0, 0.6)",
//                   color: "white",
//                   p: 3,
//                 }}
//               >
//                 <Typography variant="h5" gutterBottom>
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body1">
//                   {item.subtitle}
//                 </Typography>
//                 <Typography variant="caption" display="block" mt={1}>
//                   Image {index + 1} of {images.length}
//                 </Typography>
//               </Box>
//             </Box>
//           )}
//         />
//       </Box>
//     );
//   },
// };

// export const FeatureHighlight: Story = {
//   render: () => (
//     <Box sx={{ maxWidth: 1000, mx: "auto", p: 2 }}>
//       <Typography variant="h4" gutterBottom textAlign="center" mb={3}>
//         Key Features
//       </Typography>
//       <CarouselDefaultExport
//         name="featuresCarousel"
//         animation="auto"
//         animationinterval={5}
//         controls="both"
//         height="400px"
//       >
//         <Box sx={{ textAlign: "center", px: 4 }}>
//           <Box sx={{ fontSize: 80, mb: 2 }}>🚀</Box>
//           <Typography variant="h4" gutterBottom>
//             Lightning Fast
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Optimized performance ensures your applications run smoothly and efficiently, delivering exceptional user experiences every time.
//           </Typography>
//         </Box>
//         <Box sx={{ textAlign: "center", px: 4 }}>
//           <Box sx={{ fontSize: 80, mb: 2 }}>🔒</Box>
//           <Typography variant="h4" gutterBottom>
//             Secure by Default
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Built with security best practices in mind, protecting your data and users with industry-standard encryption and authentication.
//           </Typography>
//         </Box>
//         <Box sx={{ textAlign: "center", px: 4 }}>
//           <Box sx={{ fontSize: 80, mb: 2 }}>📱</Box>
//           <Typography variant="h4" gutterBottom>
//             Fully Responsive
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Works seamlessly across all devices and screen sizes, from mobile phones to large desktop displays.
//           </Typography>
//         </Box>
//         <Box sx={{ textAlign: "center", px: 4 }}>
//           <Box sx={{ fontSize: 80, mb: 2 }}>🎨</Box>
//           <Typography variant="h4" gutterBottom>
//             Customizable
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Easily customize every aspect to match your brand identity and design requirements with flexible theming options.
//           </Typography>
//         </Box>
//       </CarouselDefaultExport>
//     </Box>
//   ),
// };

// export const AnnouncementBanner: Story = {
//   render: () => (
//     <Box sx={{ maxWidth: 1200, mx: "auto", p: 2 }}>
//       <CarouselDefaultExport
//         name="announcementCarousel"
//         animation="auto"
//         animationinterval={4}
//         controls="indicators"
//         height="120px"
//       >
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             bgcolor: "#1976d2",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             px: 3,
//           }}
//         >
//           <Typography variant="h6">
//             New Feature Release: Advanced Analytics Dashboard Now Available!
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             bgcolor: "#2e7d32",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             px: 3,
//           }}
//         >
//           <Typography variant="h6">
//             Pro Tip: Use keyboard shortcuts to navigate faster through the application
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             bgcolor: "#ed6c02",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             px: 3,
//           }}
//         >
//           <Typography variant="h6">
//             Reminder: System maintenance scheduled for this weekend
//           </Typography>
//         </Box>
//       </CarouselDefaultExport>
//     </Box>
//   ),
// };

// // Control Comparison
// export const ControlsComparison: Story = {
//   render: () => (
//     <Stack spacing={3} padding={2}>
//       <Box>
//         <Typography variant="h6" gutterBottom>
//           Both Controls
//         </Typography>
//         <CarouselDefaultExport
//           name="compBoth"
//           animation="none"
//           controls="both"
//           height="250px"
//         >
//           <Box sx={{ bgcolor: "#1976d2", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6">Arrows & Dots</Typography>
//           </Box>
//           <Box sx={{ bgcolor: "#2e7d32", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6">Slide 2</Typography>
//           </Box>
//         </CarouselDefaultExport>
//       </Box>

//       <Box>
//         <Typography variant="h6" gutterBottom>
//           Navigation Only
//         </Typography>
//         <CarouselDefaultExport
//           name="compNavs"
//           animation="none"
//           controls="navs"
//           height="250px"
//         >
//           <Box sx={{ bgcolor: "#9c27b0", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6">Arrows Only</Typography>
//           </Box>
//           <Box sx={{ bgcolor: "#d32f2f", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6">Slide 2</Typography>
//           </Box>
//         </CarouselDefaultExport>
//       </Box>

//       <Box>
//         <Typography variant="h6" gutterBottom>
//           Indicators Only
//         </Typography>
//         <CarouselDefaultExport
//           name="compIndicators"
//           animation="none"
//           controls="indicators"
//           height="250px"
//         >
//           <Box sx={{ bgcolor: "#0288d1", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6">Dots Only</Typography>
//           </Box>
//           <Box sx={{ bgcolor: "#00796b", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <Typography variant="h6">Slide 2</Typography>
//           </Box>
//         </CarouselDefaultExport>
//       </Box>
//     </Stack>
//   ),
// };
