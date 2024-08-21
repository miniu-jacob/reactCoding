export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
}

export type MenuItemWidthSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
}