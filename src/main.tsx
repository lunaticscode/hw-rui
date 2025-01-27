import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "@hw-rui/Toast/index.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
