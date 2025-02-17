import { SidebarMenu } from "@hw-rui-layouts/Sidebar";

type CustomElementType = () => JSX.Element;
type CustomRouteModule = {
  default: CustomElementType;
};
export type CustomRoutes = {
  path: string;
  Element: CustomElementType;
};

type GuideTypes = "foundations" | "components";
const GUIDE_FOUNDATIONS_DIR = "/guides/foundations/";
const GUIDE_COMPONENTS_DIR = "/guides/components/";

const mapGuideTypeToDir: { [key in GuideTypes]: string } = {
  foundations: GUIDE_FOUNDATIONS_DIR,
  components: GUIDE_COMPONENTS_DIR,
};

const getGuideType = (fileName: string): GuideTypes => {
  if (fileName.includes(GUIDE_COMPONENTS_DIR)) {
    return "components";
  }
  if (fileName.includes(GUIDE_FOUNDATIONS_DIR)) {
    return "foundations";
  }
  return "components";
};
const guideFileRegex = /.*\/guides\/([^/]+)\/([^/]+)\/index\.tsx$/;

class GuideFiles {
  readonly routes: { foundations: CustomRoutes[]; components: CustomRoutes[] };
  readonly routeMenus: {
    foundations: SidebarMenu[];
    components: SidebarMenu[];
  };
  constructor() {
    const guideFoundationFiles = import.meta.glob(
      "../../guides/foundations/**/index.tsx",
      { eager: true }
    );
    const guideComponentsFiles = import.meta.glob(
      "../../guides/components/**/index.tsx",
      {
        eager: true,
      }
    );

    const tempRoutes: CustomRoutes[] = [];
    const sidebarMenus: SidebarMenu[] = [];
    const guideAllFiles = { ...guideFoundationFiles, ...guideComponentsFiles };
    for (const filePath of Object.keys(guideAllFiles)) {
      try {
        const fileName = filePath.match(guideFileRegex)?.[0] || "";
        if (!fileName) continue;
        const guideType = getGuideType(fileName);
        const guideFilesDir = mapGuideTypeToDir[guideType];
        const componentName = fileName
          .split(guideFilesDir)[1]
          .split("/index.tsx")[0];

        tempRoutes.push({
          path: `/${guideType}/${componentName.toLowerCase()}`,
          Element: (guideAllFiles[filePath] as CustomRouteModule).default,
        });
        sidebarMenus.push({
          label: componentName,
          href: `/${guideType}/${componentName.toLowerCase()}`,
        });
      } catch (err) {
        console.error(err);
        continue;
      }
    }
    this.routes = {
      foundations: tempRoutes.filter(({ path }) =>
        path.includes("/foundations")
      ),
      components: tempRoutes.filter(({ path }) => path.includes("/components")),
    };
    this.routeMenus = {
      foundations: sidebarMenus.filter(({ href }) =>
        href.includes("/foundations")
      ),
      components: sidebarMenus.filter(({ href }) =>
        href.includes("/components")
      ),
    };
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
