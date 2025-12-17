import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Link,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";

import LoginDefaultExport from "../../../../components/advanced/login/index";

const meta: Meta<typeof LoginDefaultExport> = {
  title: "Advanced/Login",
  component: LoginDefaultExport,
  argTypes: {
    show: { control: "boolean" },
    errormessage: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock listener object for the component
const mockListener = {
  appLocale: {
    LABEL_ICON: "Icon",
    MESSAGE_ERROR_TITLE: "Error",
    MESSAGE_LOGIN_FAILED: "Login failed. Please check your credentials.",
  },
  Widgets: {},
  onChange: () => {},
};

// Mock event source for login action
const mockEventSource = {
  invoke: (data: any, onSuccess: () => void, onError: (error?: any) => void) => {
    // Simulate API call
    setTimeout(() => {
      if (data.formData.username === "demo" && data.formData.password === "demo") {
        onSuccess();
      } else {
        onError({ message: "Invalid username or password" });
      }
    }, 1000);
  },
};

const Template = (args: any) => (
  <Box
    style={{
      padding: 16,
      minHeight: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
    }}
  >
    <LoginDefaultExport {...args} listener={mockListener}>
      {args.children}
    </LoginDefaultExport>
  </Box>
);

export const Default: Story = {
  render: Template,
  args: {
    name: "login1",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Card sx={{ maxWidth: 400, width: "100%" }}>
        <CardContent>
          <Typography variant="h5" mb={3} textAlign="center">
            Login
          </Typography>
          <form role="form">
            <Stack spacing={2}>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
              <Button
                type="submit"
                name="loginButton"
                variant="contained"
                fullWidth
                className="app-login-button"
              >
                Login
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    ),
  },
};

export const SimpleLogin: Story = {
  render: Template,
  args: {
    name: "simpleLogin",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Box bgcolor="#ffffff" p={4} borderRadius={2} boxShadow={3} maxWidth={350}>
        <Typography variant="h6" mb={3} textAlign="center">
          Sign In
        </Typography>
        <form role="form">
          <Stack spacing={2}>
            <TextField name="username" label="Username" size="small" fullWidth required />
            <TextField
              name="password"
              label="Password"
              type="password"
              size="small"
              fullWidth
              required
            />
            <Button name="loginButton" variant="contained" fullWidth className="app-login-button">
              Sign In
            </Button>
          </Stack>
        </form>
      </Box>
    ),
  },
};

export const LoginWithRememberMe: Story = {
  render: Template,
  args: {
    name: "loginRememberMe",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Card sx={{ maxWidth: 400, width: "100%" }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" mb={3} textAlign="center" fontWeight="600">
            Welcome Back
          </Typography>
          <form role="form">
            <Stack spacing={2.5}>
              <TextField name="username" label="Email or Username" fullWidth required />
              <TextField name="password" label="Password" type="password" fullWidth required />
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />
                <Link href="#" variant="body2" underline="hover">
                  Forgot password?
                </Link>
              </Box>
              <Button
                name="loginButton"
                variant="contained"
                size="large"
                fullWidth
                className="app-login-button"
              >
                Login
              </Button>
            </Stack>
          </form>
          <Typography variant="body2" textAlign="center" mt={2} color="text.secondary">
            Don't have an account?{" "}
            <Link href="#" underline="hover">
              Sign up
            </Link>
          </Typography>
        </CardContent>
      </Card>
    ),
  },
};

export const LoginWithSocialMedia: Story = {
  render: Template,
  args: {
    name: "loginSocial",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Card sx={{ maxWidth: 400, width: "100%" }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" mb={3} textAlign="center" fontWeight="600">
            Sign In
          </Typography>
          <Stack spacing={2} mb={3}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<i className="fa fa-google" />}
              sx={{ textTransform: "none" }}
            >
              Continue with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<i className="fa fa-facebook" />}
              sx={{ textTransform: "none" }}
            >
              Continue with Facebook
            </Button>
          </Stack>
          <Divider sx={{ my: 2 }}>
            <Typography variant="body2" color="text.secondary">
              OR
            </Typography>
          </Divider>
          <form role="form">
            <Stack spacing={2} mt={3}>
              <TextField name="username" label="Email" fullWidth required />
              <TextField name="password" label="Password" type="password" fullWidth required />
              <Button
                name="loginButton"
                variant="contained"
                fullWidth
                className="app-login-button"
              >
                Sign In
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    ),
  },
};

export const MinimalLogin: Story = {
  render: Template,
  args: {
    name: "minimalLogin",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Box bgcolor="#ffffff" p={3} borderRadius={1} maxWidth={320}>
        <form role="form">
          <Stack spacing={2}>
            <TextField name="username" placeholder="Username" size="small" fullWidth required />
            <TextField
              name="password"
              placeholder="Password"
              type="password"
              size="small"
              fullWidth
              required
            />
            <Button
              name="loginButton"
              variant="contained"
              size="small"
              fullWidth
              className="app-login-button"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    ),
  },
};

export const DarkLogin: Story = {
  render: Template,
  args: {
    name: "darkLogin",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Box bgcolor="#212121" color="#ffffff" p={4} borderRadius={2} boxShadow={3} maxWidth={400}>
        <Typography variant="h5" mb={3} textAlign="center" color="#ffffff">
          Sign In
        </Typography>
        <form role="form">
          <Stack spacing={2.5}>
            <TextField
              name="username"
              label="Username"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#ffffff",
                  "& fieldset": { borderColor: "#ffffff50" },
                  "&:hover fieldset": { borderColor: "#ffffff80" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff80" },
              }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#ffffff",
                  "& fieldset": { borderColor: "#ffffff50" },
                  "&:hover fieldset": { borderColor: "#ffffff80" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff80" },
              }}
            />
            <Link href="#" color="inherit" variant="body2" textAlign="right">
              Forgot password?
            </Link>
            <Button
              name="loginButton"
              variant="contained"
              fullWidth
              className="app-login-button"
              sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    ),
  },
};

export const ColoredLogin: Story = {
  render: Template,
  args: {
    name: "coloredLogin",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#ffffff",
          p: 4,
          borderRadius: 3,
          boxShadow: 5,
          maxWidth: 400,
        }}
      >
        <Typography variant="h4" mb={1} textAlign="center" fontWeight="700">
          Welcome
        </Typography>
        <Typography variant="body2" mb={4} textAlign="center" sx={{ opacity: 0.9 }}>
          Sign in to continue
        </Typography>
        <form role="form">
          <Stack spacing={2}>
            <TextField
              name="username"
              placeholder="Username"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "rgba(255,255,255,0.9)",
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              name="password"
              placeholder="Password"
              type="password"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "rgba(255,255,255,0.9)",
                  borderRadius: 2,
                },
              }}
            />
            <Button
              name="loginButton"
              variant="contained"
              fullWidth
              className="app-login-button"
              sx={{
                bgcolor: "#ffffff",
                color: "#764ba2",
                mt: 2,
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              Sign In
            </Button>
          </Stack>
        </form>
      </Box>
    ),
  },
};

export const SplitScreenLogin: Story = {
  render: (args: any) => (
    <Box
      style={{
        padding: 0,
        height: "600px",
        display: "flex",
        backgroundColor: "#f5f5f5",
      }}
    >
      <LoginDefaultExport {...args} listener={mockListener}>
        <Box display="flex" width="100%" height="100%">
          <Box
            flex={1}
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              p: 4,
            }}
          >
            <Box textAlign="center">
              <Typography variant="h3" fontWeight="700" mb={2}>
                Welcome Back
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Sign in to access your account
              </Typography>
            </Box>
          </Box>
          <Box
            flex={1}
            bgcolor="#ffffff"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={4}
          >
            <Box maxWidth={400} width="100%">
              <Typography variant="h5" mb={4} fontWeight="600">
                Sign In
              </Typography>
              <form role="form">
                <Stack spacing={2.5}>
                  <TextField name="username" label="Email Address" fullWidth required />
                  <TextField name="password" label="Password" type="password" fullWidth required />
                  <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />
                  <Button
                    name="loginButton"
                    variant="contained"
                    size="large"
                    fullWidth
                    className="app-login-button"
                  >
                    Login
                  </Button>
                  <Link href="#" variant="body2" textAlign="center" display="block">
                    Forgot your password?
                  </Link>
                </Stack>
              </form>
            </Box>
          </Box>
        </Box>
      </LoginDefaultExport>
    </Box>
  ),
  args: {
    name: "splitLogin",
    eventSource: mockEventSource,
  },
};

export const LoginWithLogo: Story = {
  render: Template,
  args: {
    name: "loginLogo",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Card sx={{ maxWidth: 400, width: "100%" }}>
        <CardContent sx={{ p: 4 }}>
          <Box display="flex" justifyContent="center" mb={3}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: "#1976d2",
                fontSize: "2rem",
              }}
            >
              L
            </Avatar>
          </Box>
          <Typography variant="h5" mb={1} textAlign="center" fontWeight="600">
            Company Name
          </Typography>
          <Typography variant="body2" mb={4} textAlign="center" color="text.secondary">
            Sign in to your account
          </Typography>
          <form role="form">
            <Stack spacing={2}>
              <TextField name="username" label="Username or Email" fullWidth required />
              <TextField name="password" label="Password" type="password" fullWidth required />
              <Button
                name="loginButton"
                variant="contained"
                fullWidth
                size="large"
                className="app-login-button"
              >
                Sign In
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    ),
  },
};

export const CompactLogin: Story = {
  render: Template,
  args: {
    name: "compactLogin",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Box bgcolor="#ffffff" p={2.5} borderRadius={1} boxShadow={2} maxWidth={280}>
        <Typography variant="subtitle1" mb={2} textAlign="center" fontWeight="600">
          Login
        </Typography>
        <form role="form">
          <Stack spacing={1.5}>
            <TextField name="username" placeholder="Username" size="small" fullWidth required />
            <TextField
              name="password"
              placeholder="Password"
              type="password"
              size="small"
              fullWidth
              required
            />
            <Button
              name="loginButton"
              variant="contained"
              size="small"
              fullWidth
              className="app-login-button"
            >
              Login
            </Button>
            <Link href="#" variant="caption" textAlign="center" display="block">
              Forgot password?
            </Link>
          </Stack>
        </form>
      </Box>
    ),
  },
};

export const LoginWithIcons: Story = {
  render: Template,
  args: {
    name: "loginIcons",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Card sx={{ maxWidth: 400, width: "100%" }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" mb={4} textAlign="center">
            Sign In
          </Typography>
          <form role="form">
            <Stack spacing={2.5}>
              <Box display="flex" alignItems="center" gap={1.5}>
                <i className="fa fa-user" style={{ color: "#757575" }} />
                <TextField name="username" placeholder="Username" fullWidth required />
              </Box>
              <Box display="flex" alignItems="center" gap={1.5}>
                <i className="fa fa-lock" style={{ color: "#757575" }} />
                <TextField name="password" placeholder="Password" type="password" fullWidth required />
              </Box>
              <Button
                name="loginButton"
                variant="contained"
                fullWidth
                size="large"
                className="app-login-button"
              >
                Login
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    ),
  },
};

export const RoundedLogin: Story = {
  render: Template,
  args: {
    name: "roundedLogin",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Box bgcolor="#ffffff" p={4} borderRadius={4} boxShadow={3} maxWidth={380}>
        <Typography variant="h5" mb={4} textAlign="center" fontWeight="600">
          Welcome
        </Typography>
        <form role="form">
          <Stack spacing={2.5}>
            <TextField
              name="username"
              label="Email"
              fullWidth
              required
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              required
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            />
            <Button
              name="loginButton"
              variant="contained"
              fullWidth
              className="app-login-button"
              sx={{ borderRadius: 3, py: 1.5 }}
            >
              Sign In
            </Button>
          </Stack>
        </form>
        <Box textAlign="center" mt={3}>
          <Link href="#" variant="body2">
            Need an account? Sign up
          </Link>
        </Box>
      </Box>
    ),
  },
};

export const LoginWithTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <Box
        style={{
          padding: 16,
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <LoginDefaultExport name="loginTabs" listener={mockListener} eventSource={mockEventSource}>
          <Card sx={{ maxWidth: 400, width: "100%" }}>
            <CardContent sx={{ p: 4 }}>
              <Box display="flex" mb={3} gap={1}>
                {["Login", "Sign Up"].map((tab, index) => (
                  <Button
                    key={index}
                    variant={activeTab === index ? "contained" : "outlined"}
                    onClick={() => setActiveTab(index)}
                    fullWidth
                  >
                    {tab}
                  </Button>
                ))}
              </Box>
              {activeTab === 0 ? (
                <form role="form">
                  <Stack spacing={2}>
                    <TextField name="username" label="Username" fullWidth required />
                    <TextField name="password" label="Password" type="password" fullWidth required />
                    <Button
                      name="loginButton"
                      variant="contained"
                      fullWidth
                      className="app-login-button"
                    >
                      Login
                    </Button>
                  </Stack>
                </form>
              ) : (
                <Stack spacing={2}>
                  <TextField label="Email" fullWidth />
                  <TextField label="Username" fullWidth />
                  <TextField label="Password" type="password" fullWidth />
                  <Button variant="contained" fullWidth>
                    Create Account
                  </Button>
                </Stack>
              )}
            </CardContent>
          </Card>
        </LoginDefaultExport>
      </Box>
    );
  },
  args: {
    name: "loginTabs",
  },
};

export const ModernLogin: Story = {
  render: Template,
  args: {
    name: "modernLogin",
    listener: mockListener,
    eventSource: mockEventSource,
    children: (
      <Box
        bgcolor="#ffffff"
        p={5}
        borderRadius={3}
        boxShadow="0 10px 40px rgba(0,0,0,0.1)"
        maxWidth={450}
      >
        <Typography variant="h4" mb={1} fontWeight="700">
          Sign in
        </Typography>
        <Typography variant="body2" mb={4} color="text.secondary">
          Enter your credentials to access your account
        </Typography>
        <form role="form">
          <Stack spacing={3}>
            <Box>
              <Typography variant="caption" fontWeight="600" mb={0.5} display="block">
                EMAIL ADDRESS
              </Typography>
              <TextField name="username" placeholder="you@example.com" fullWidth required />
            </Box>
            <Box>
              <Box display="flex" justifyContent="space-between" mb={0.5}>
                <Typography variant="caption" fontWeight="600">
                  PASSWORD
                </Typography>
                <Link href="#" variant="caption">
                  Forgot?
                </Link>
              </Box>
              <TextField name="password" placeholder="••••••••" type="password" fullWidth required />
            </Box>
            <Button
              name="loginButton"
              variant="contained"
              size="large"
              fullWidth
              className="app-login-button"
              sx={{ mt: 2 }}
            >
              Sign in
            </Button>
          </Stack>
        </form>
        <Typography variant="body2" textAlign="center" mt={3} color="text.secondary">
          Don't have an account?{" "}
          <Link href="#" fontWeight="600">
            Sign up for free
          </Link>
        </Typography>
      </Box>
    ),
  },
};

export const CustomStyledLogin: Story = {
  render: Template,
  args: {
    name: "customLogin",
    listener: mockListener,
    eventSource: mockEventSource,
    styles: {
      backgroundColor: "#ff5722",
      padding: "32px",
      borderRadius: "12px",
      maxWidth: "380px",
      color: "#ffffff",
    },
    children: (
      <Box>
        <Typography variant="h5" mb={3} textAlign="center" color="#ffffff" fontWeight="600">
          Custom Login
        </Typography>
        <form role="form">
          <Stack spacing={2}>
            <TextField
              name="username"
              placeholder="Username"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#ffffff",
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              name="password"
              placeholder="Password"
              type="password"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#ffffff",
                  borderRadius: 2,
                },
              }}
            />
            <Button
              name="loginButton"
              variant="contained"
              fullWidth
              className="app-login-button"
              sx={{
                bgcolor: "#ffffff",
                color: "#ff5722",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    ),
  },
};
