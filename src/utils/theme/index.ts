import { createTheme } from "@mui/material";
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
    primary: { main: "rgb(102, 157, 246)" },
    background: { paper: "rgb(5, 30, 52)" },
  },
});
