import "../styles/app.scss";

import type { AppProps } from "next/app";

import { ThemeProvider, Box, createTheme } from "@mui/material";
import { theme } from "../utils/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools></ReactQueryDevtools>
        <ThemeProvider theme={theme}>
          <Box className="app-container">
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
