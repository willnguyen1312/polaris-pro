import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import { generateScopedName } from "./config/rollup/namespaced-classname.mjs";

export default defineConfig({
  plugins: [Inspect(), react()],
  server: {
    open: true,
  },
  css: {
    modules: {
      generateScopedName: generateScopedName({ includeHash: false }),
      globalModulePaths: [/global\.css$/],
    },
  },
});
