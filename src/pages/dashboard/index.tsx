import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { getComponentLayoutSample } from "./constants/dashboard.constants";

const Dashboard = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [layouts, setLayout] = useState(
    getComponentLayoutSample("lg", "test", 6)
  );

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      //테스트용으로 상수로 바꿀예정
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {layouts.lg.map((layout) => {
        return (
          <div className="component" key={layout.i}>
            {layout.i}
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};
export default Dashboard;
