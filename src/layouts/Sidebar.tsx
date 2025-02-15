import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import useTranslator from "./hooks/useTranslator";
export type SidebarMenu = {
  href: string;
  label: string;
};

interface SidebarProps {
  menus?: SidebarMenu[];
}

const sidebarCls = "app-sidebar";
const sidebarTranslateButtonsWrapperCls =
  "app-sidebar-translate-buttons-wrapper";

const sidebarMenuCls = "app-sidebar-menu";
const Sidebar: FC<SidebarProps> = (props) => {
  const pathname = useLocation().pathname;
  const { menus } = props;
  const { changeLanguage } = useTranslator();
  return (
    <aside className={sidebarCls}>
      <div className={sidebarTranslateButtonsWrapperCls}>
        <button onClick={() => changeLanguage("ko-KR")}>🇰🇷</button>
        <button onClick={() => changeLanguage("en-US")}>🇺🇸</button>
      </div>
      {menus?.map((menu, index) => (
        <Link
          key={`sidebar-menu-key-${index}`}
          className={sidebarMenuCls}
          data-active={pathname === menu.href}
          to={menu.href}
        >
          {menu.label}
        </Link>
      ))}
    </aside>
  );
};
export default Sidebar;
