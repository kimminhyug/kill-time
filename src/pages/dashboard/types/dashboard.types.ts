export interface IBreakPoint {
  size: number;
  columns: number;
}

export interface IDashboardBreakPoints {
  [index: string]: IBreakPoint;
}
