import { FC, PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import { routeMenus } from "@hw-rui-core/utils/getGuideFiles";
import Content from "./Main";

interface LayoutProps extends PropsWithChildren {}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar menus={routeMenus} />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
