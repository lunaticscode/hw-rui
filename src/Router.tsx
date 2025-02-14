import { routes } from "@hw-rui-core/utils/getGuideFiles";
import { Route, Routes } from "react-router-dom";
import NotPoundPage from "./layouts/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<h2>Main</h2>} />
      {routes?.map(({ path, Element }, index) => (
        <Route
          key={`route-element-key-${index}`}
          path={path}
          element={<Element />}
        />
      ))}
      <Route path={"*"} element={<NotPoundPage />} />
    </Routes>
  );
};
export default Router;
