import { inspectReact } from "@namnode/vite-plugin-inspect-react";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inspectReact({
      formatDataInspectId(id) {
        return id.substring(__dirname.length + 1);
      },
    }),
    react(),
  ],
});
