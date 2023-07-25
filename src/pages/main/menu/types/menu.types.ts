export interface IMenu {
  id: string;
  name: string;
  order: number;
  path: string;
  subMenu?: IMenu[];
  icon?: string;
}
