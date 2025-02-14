import { FC, PropsWithChildren } from "react";

import Sidebar from "./Sidebar";
import { routeMenus } from "@hw-rui-core/utils/getGuideFiles";

interface LayoutProps extends PropsWithChildren {}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar menus={routeMenus} />
      {children}
    </>
  );
};

export default Layout;
