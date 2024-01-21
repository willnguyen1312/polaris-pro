import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["**/*.test.{ts,tsx}"],
    setupFiles: ["./setupTest.ts"],
    environment: "jsdom",
    restoreMocks: true,
  },
});
