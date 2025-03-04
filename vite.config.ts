import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
  resolve: {
    alias: [
      {
        find: "@hw-rui",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@hw-rui-layouts",
        replacement: path.resolve(__dirname, "src/layouts"),
      },
      {
        find: "@hw-rui-guides",
        replacement: path.resolve(__dirname, "src/guides"),
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
