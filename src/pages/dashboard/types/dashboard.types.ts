import { Layout } from "react-grid-layout";

export interface IBreakPoint {
  size: number;
  columns: number;
}

export interface IDashboardBreakPoints {
  [index: string]: IBreakPoint;
}

export interface ILayout extends Layout {
  componentId: string;
}
