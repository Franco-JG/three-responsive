import { defineConfig } from "vite";
import type { UserConfig } from "vite";

export default defineConfig({
    server: {
      host: "192.168.1.38",
    },
    base: '/three-responsive/',
    build: {
        outDir: 'docs',
    }
}) satisfies UserConfig