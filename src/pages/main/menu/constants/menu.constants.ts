import { IMenu } from "../types/menu.types";

const MENU_DASHBOARD: IMenu = {
  id: "dashboard",
  name: "Dashboard",
  icon: "Dashboard",
  path: "src/pages/dashboard",
  order: 1,
};

export const DEFAULT_MENU: IMenu[] = [MENU_DASHBOARD];
