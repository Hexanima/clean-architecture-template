import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            exclude: ["**/index.ts", "src/errors/generic-errors/**/*"],
        },
        passWithNoTests: true,
    },
});
