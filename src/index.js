import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

const root = createRoot(document.getElementById('root'));

const darkTheme= createTheme({
  // https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=9ab1d1&secondary.color=a8d1d8
  palette: {
    mode: "dark",
    primary: {
      main: "#9ab1d1",
      light: "#cce3ff",
      dark: "#6b82a0",
      contrastText: "#000000"
    },
    secondary: {
      main: "#a8d1d8",
      light: "#daffff",
      dark: "#78a0a7",
      contrastText: "#000000"
    }
  }
});

root.render(
  <ThemeProvider theme={darkTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
);