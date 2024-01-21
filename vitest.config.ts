import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

// console.log(process.env.NODE_ENV === "test");

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      include: ["**/*.test.{ts,tsx}"],
      setupFiles: ["./setupTest.ts"],
      environment: "happy-dom",
      restoreMocks: true,
    },
  })
);
