import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme({
  palette: {
    primary: { main: "rgba(39,76,113,1)" },
    background: {
      paper: "rgba(255,255,255,0.99)",
      default: "rgba(255,255,255,0.99)",
    },
    mode: "light",
    info: { main: "rgba(5,115,174,1)" },
    secondary: { dark: "rgba(109,26,145,1)", main: "rgba(103,54,112,1)" },
  },
});

const container = document.getElementById("root");
const root = createRoot(container!);
                        //ok//

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
