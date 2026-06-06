import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => ({
  envPrefix: ["VITE_", "SUPABASE_"],
  plugins: [
    tanstackStart(),
    nitro({ preset: command === "build" ? "vercel" : undefined }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths()
  ],
  // noExternal: true bundles ALL deps into the SSR function (required on Vercel).
  // In dev, the Vite module runner crashes on CJS packages when noExternal is set,
  // so we only apply it during `vite build`.
  ...(command === "build" && {
    ssr: {
      noExternal: true,
    },
  }),
  environments: {
    ssr: {
      build: {
        rollupOptions: {
          output: {
            inlineDynamicImports: true
          }
        }
      }
    }
  }
}));
