import { SidebarMenu } from "../../layouts/Sidebar";
type CustomElementType = () => JSX.Element;
type CustomRouteModule = {
  default: CustomElementType;
};
export type CustomRoutes = {
  path: string;
  Element: CustomElementType;
};

const guideFileRegex = /.*\/guide\/index\.tsx$/;

class GuideFiles {
  readonly routes: CustomRoutes[];
  readonly routeMenus: SidebarMenu[];
  constructor() {
    const guideFiles = import.meta.glob(
      "../../components/**/guide/**/index.tsx",
      {
        eager: true,
      }
    );

    const tempRoutes: CustomRoutes[] = [];
    const sidebarMenus: SidebarMenu[] = [];
    for (const filePath of Object.keys(guideFiles)) {
      try {
        const fileName = filePath.match(guideFileRegex)?.[0] || "";
        if (!fileName) continue;

        const componentName = fileName
          .split("./components/")[1]
          .split("/guide")[0];

        tempRoutes.push({
          path: `${componentName.toLowerCase()}`,
          Element: (guideFiles[filePath] as CustomRouteModule).default,
        });
        sidebarMenus.push({
          label: componentName,
          href: componentName.toLowerCase(),
        });
      } catch (err) {
        console.error(err);
        continue;
      }
    }
    this.routes = tempRoutes;
    this.routeMenus = sidebarMenus;
  }
  getRoutes() {
    return this.routes;
  }
  getRouteMenus() {
    return this.routeMenus;
  }
}

const guideFiles = new GuideFiles();
export const routes = guideFiles.getRoutes();
export const routeMenus = guideFiles.getRouteMenus();
