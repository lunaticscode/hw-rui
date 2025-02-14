import { routes } from "@hw-rui-core/utils/getGuideFiles";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {routes?.map(({ path, Element }, index) => (
        <Route
          key={`route-element-key-${index}`}
          path={path}
          element={<Element />}
        />
      ))}
      <Route path={"*"} element={<h2>404PAge</h2>} />
    </Routes>
  );
};
export default Router;
