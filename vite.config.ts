import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import removeConsole from "vite-remove-console";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), removeConsole()],
  resolve: {
    alias: [
      {
        find: "@hw-rui",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@hw-rui-core",
        replacement: path.resolve(__dirname, "src/core"),
      },
      {
        find: "@hw-rui-theme",
        replacement: path.resolve(__dirname, "src/theme"),
      },
    ],
  },
});
