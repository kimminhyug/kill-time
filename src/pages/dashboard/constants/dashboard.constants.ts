/**
 * Component: 위젯 템플릿(기본 견본)
 * Widget: 사용자가 추가한 Component
 **/

import { maxHeight, maxWidth, minHeight } from "@mui/system";
import { Layout } from "react-grid-layout";
import { IDashboardBreakPoints } from "../types/dashboard.types";
interface ILayout extends Layout {
  componentId: string;
}
export const DASHBOARD_BREAK_POINTS: IDashboardBreakPoints = {
  lg: { size: 1200, columns: 12 },
  md: { size: 996, columns: 10 },
  sm: { size: 768, columns: 6 },
  xs: { size: 480, columns: 4 },
  xxs: { size: 0, columns: 2 },
};

const defaultSize = { w: 3, h: 2 };

export const getComponentLayoutSample = (
  breakPoint: string,
  prefixId: string,
  count: number
) => {
  const result = [];
  const columns = DASHBOARD_BREAK_POINTS[breakPoint].columns;
  let y = 0;
  const sampleComponent = ["cpu", "memory"];
  let xIndex = 0;
  for (let i = 0; i < count; i++) {
    let x = xIndex;
    const isOverFlow = { x: columns <= xIndex };
    if (isOverFlow.x) {
      xIndex = 0;
      y = y + defaultSize.h;
    } else {
      xIndex = xIndex + defaultSize.w;
      if (y > 0) {
        x = xIndex;
      }
    }
    const componentSample: ILayout = {
      i: `${prefixId}_${i.toString()}`,
      componentId: i === 0 ? "cpu" : "memory",
      x: isOverFlow.x ? 0 : x,
      y: y,
      w: defaultSize.w,
      h: defaultSize.h,
      minW: defaultSize.w,
      maxW: Infinity,
      minH: defaultSize.h,
      maxH: Infinity,
      static: false,
      isDraggable: true,
      isResizable: true,
      resizeHandles: ["se"],
      isBounded: false,
    };

    result.push(componentSample);
  }

  return { [breakPoint]: result };
};

export const DASHBOARD_COMPONENTS = [
  {
    id: "CPU",
    name: "CPU",
    w: 3,
    h: 3,
    minW: 3,
    maxW: 3,
    minH: 3,
    maxH: 3,
  },
  {
    id: "Memory",
    name: "Memory",
    w: 3,
    h: 3,
    minW: 3,
    maxW: 3,
    minH: 3,
    maxH: 3,
  },
];
