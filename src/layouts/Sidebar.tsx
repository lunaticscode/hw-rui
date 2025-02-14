import { FC } from "react";
import { Link } from "react-router-dom";
export type SidebarMenu = {
  href: string;
  label: string;
};

interface SidebarProps {
  menus?: SidebarMenu[];
}

const sidebarCls = "app-sidebar";
const sidebarMenuCls = "app-sidebar-menu";
const Sidebar: FC<SidebarProps> = (props) => {
  const { menus } = props;
  return (
    <div className={sidebarCls}>
      {menus?.map((menu, index) => (
        <Link
          key={`sidebar-menu-key-${index}`}
          className={sidebarMenuCls}
          to={menu.href}
        >
          {menu.label}
        </Link>
      ))}
    </div>
  );
};
export default Sidebar;
