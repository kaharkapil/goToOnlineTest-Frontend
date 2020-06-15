export interface SBRouteData {
    title?: string;
    activeTopNav?: string;
    breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
    text: string;
    link?: string;
    active?: boolean;
}

export interface SideNavItems {
    [index: string]: SideNavItem;
}

export interface SideNavItem {
    icon?: string;
    text: string;
    link?: string;
    submenu?: SideNavItem[];
}

export interface SideNavSection {
    text?: string;
    items: string[];
}



/* user side nav*/
export interface UserSideNavItems {
    [index: string]: UserSideNavItem;
}

export interface UserSideNavItem {
    icon?: string;
    text: string;
    link?: string;
    submenu?: UserSideNavItem[];
}

export interface userSideNavSection {
    text?: string;
    items: string[];
}
