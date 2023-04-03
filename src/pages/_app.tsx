import "../styles/app.scss";

import type { AppProps } from "next/app";

import { ThemeProvider, Box, createTheme } from "@mui/material";
import { theme } from "../utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="app-container">
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  );
}
