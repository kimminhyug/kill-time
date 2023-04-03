import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { getComponentLayoutSample } from "./constants/dashboard.constants";
import { Box } from "@mui/material";
// widget 들은 lazy를 사용하여 동적으로 불러오도록 구현 해야 함
import CPU from "./components/cpu";
import { commonSX } from "../common/styles";

const Dashboard = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [layouts, setLayout] = useState(
    getComponentLayoutSample("lg", "test", 6)
  );
  const theme = "dark";
  return (
    <Box sx={commonSX} className={`dashboard ${theme}`}>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        //테스트용으로 상수로 바꿀예정
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {layouts.lg.map((layout, layoutIndex) => {
          return (
            <div className="component" key={layout.i}>
              {layoutIndex === 0 ? <CPU /> : layout.i}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </Box>
  );
};
export default Dashboard;
