import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./src/utils"),
      },
      {
        find: "@types",
        replacement: path.resolve(__dirname, "./src/types"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/components/pages"),
      },
      {
        find: "@atoms",
        replacement: path.resolve(__dirname, "./src/atoms"),
      },
      {
        find: "@API",
        replacement: path.resolve(__dirname, "./src/API"),
      },
    ],
  },
});
