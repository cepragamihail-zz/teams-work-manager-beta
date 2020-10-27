import { MenuItem } from "../_models";

export const MENU_ITEMS: MenuItem[] = [
  {
    label: "logout",
    icon: "login",
    showOnMobile: true,
    showOnTablet: true,
    showOnDesktop: true
  },
  {
    label: "About",
    icon: "help",
    showOnMobile: false,
    showOnTablet: true,
    showOnDesktop: true
  },
  {
    label: "Settings",
    icon: "settings",
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false
  }

  
];
