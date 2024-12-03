interface Sidebar {
  icon: string;
  name: string;
  route?: string;
  children?: Sidebar[];
}

export interface SidebarMenu {
  mainView: Sidebar[];
  advanceView: Sidebar[];
}
