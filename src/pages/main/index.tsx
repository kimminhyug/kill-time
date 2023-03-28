import { Box } from "@mui/material";
import Menu from "./menu/menu";
const Main = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        color: "primary.main",
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
      component="div"
      className="app-container"
    >
      <Box component="div" className="menu">
        <Menu />
      </Box>
      <Box component="div" className="content-container">
        contents
      </Box>
    </Box>
  );
};
export default Main;
