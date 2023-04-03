import { Box } from "@mui/material";
import { commonSX } from "../common/styles";
import Menu from "./menu/menu";
const Main = () => {
  return (
    <Box sx={commonSX} component="div" className="app-container">
      <Box sx={commonSX} component="div" className="menu">
        <Menu />
      </Box>
      <Box sx={commonSX} component="div" className="content-container">
        contents
      </Box>
    </Box>
  );
};
export default Main;
