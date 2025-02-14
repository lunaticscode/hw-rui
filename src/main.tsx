import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";
import Layout from "./layouts/Layout.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
);
