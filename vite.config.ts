import { defineConfig } from "vite";
import type { UserConfig } from "vite";

export default defineConfig({
    server: {
      host: true,
    },
    base: '/three-responsive/',
    build: {
        outDir: 'docs',
    }
}) satisfies UserConfig