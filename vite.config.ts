import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import ReactInspector from "vite-plugin-react-inspector";
import { inspectReact } from "@namnode/vite-plugin-inspect-react";
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect(),
    inspectReact({
      formatDataInspectId(id) {
        return id.substring(__dirname.length + 1);
      },
    }),
    // ReactInspector(),
    react(),
  ],
  server: {
    open: true,
  },
});
