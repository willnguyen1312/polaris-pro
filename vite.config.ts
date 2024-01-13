import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ReactInspector from "vite-plugin-react-inspector";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // inspectReact({
    //   formatDataInspectId(id) {
    //     return id.substring(__dirname.length + 1);
    //   },
    // }),
    ReactInspector(),
    react(),
  ],
  server: {
    open: true,
  },
});
