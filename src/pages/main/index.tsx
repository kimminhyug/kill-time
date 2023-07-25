import { Box } from "@mui/material";
import { commonSX } from "../common/styles";
import Menu from "./menu/menu";
import { useRouter } from "next/router";
import Content from "./menu/content/content";
const Main = () => {
  const router = useRouter();

  return (
    <Box sx={commonSX} component="div" className="app-container">
      <Box sx={commonSX} component="div" className="menu">
        <Menu />
      </Box>
      <Box sx={commonSX} component="div" className="content-container">
        <Content />
      </Box>
    </Box>
  );
};
export default Main;
