import { createTheme, PaletteMode } from "@mui/material";
import { useMemo } from "react";
export const theme = createTheme({
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "rgb(37, 39, 44)",
      contrastText: "#fff",
    },

    text: {
      primary: "rgba(255, 255, 255, 0.9)",
    },
  },
});

const getTheme = (mode: PaletteMode) => {
  return mode === "dark" ? {} : {};
};
