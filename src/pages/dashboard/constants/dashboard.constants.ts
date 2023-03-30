import { Layout } from "react-grid-layout";
import { IDashboardBreakPoints } from "../types/dashboard.types";

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
    const componentSample: Layout = {
      i: `${prefixId}_${i.toString()}`,
      x: isOverFlow.x ? 0 : x,
      y: y,
      w: defaultSize.w,
      h: defaultSize.h,
      minW: defaultSize.w * 2,
      maxW: Infinity,
      minH: defaultSize.w * 2,
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
