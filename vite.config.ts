import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  envPrefix: ["VITE_", "SUPABASE_"],
  plugins: [
    tanstackStart(),
    nitro({
      preset: "vercel"
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths()
  ],
  resolve: {
    alias: {
      // Force Rollup to resolve tslib to its ESM source file so it gets
      // fully inlined into every chunk instead of left as a bare import.
      tslib: resolve(__dirname, "node_modules/tslib/tslib.es6.mjs"),
    },
  },
  ssr: {
    noExternal: true,
  },
});

