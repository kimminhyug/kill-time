import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { getComponentLayoutSample } from "./constants/dashboard.constants";
import { Box } from "@mui/material";
// widget 들은 lazy를 사용하여 동적으로 불러오도록 구현 해야 함
import CPU from "./components/cpu";
import { commonSX } from "../common/styles";
import Widget from "./components/component";
/**
 * next js에서만 해당 방식으로 css를 입력 합니다.
 */
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const Dashboard = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [layouts, setLayout] = useState(
    getComponentLayoutSample("lg", "test", 1)
  );
  const handleLayoutChange = () => {};
  const theme = "dark";
  return (
    <Box sx={commonSX} className={`dashboard ${theme}`}>
      <ResponsiveGridLayout
        className="layout"
        isDraggable={true}
        layouts={layouts}
        onLayoutChange={handleLayoutChange}
        //테스트용으로 상수로 바꿀예정
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {layouts.lg.map((layout, layoutIndex) => {
          console.log(layout);
          return (
            <div className="component " data-grid={layout.i} key={layout.i}>
              <Widget componentId={layout.componentId} id={layout.i} />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </Box>
  );
};
export default Dashboard;
