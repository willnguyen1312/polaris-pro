import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import ReactInspector from "vite-plugin-react-inspector";
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect(),
    // inspectReact({
    //   base: __dirname,
    // }),
    // ReactInspector(),
    react({
      babel: {
        plugins: [["module:@preact/signals-react-transform"]],
      },
    }),
  ],
  server: {
    open: true,
  },
});
