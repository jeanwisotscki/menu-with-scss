import MenuMobile from "./modules/menuMobile.js";
import DropdownMenu from "./modules/dropdownMenu.js";

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();
