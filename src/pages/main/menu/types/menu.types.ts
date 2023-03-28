export interface IMenu {
  id: string;
  name: string;
  order: number;
  subMenu?: IMenu[];
  icon?: string;
}
