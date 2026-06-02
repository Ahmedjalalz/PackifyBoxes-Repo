import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  envPrefix: ["VITE_", "SUPABASE_"],
  plugins: [
    tanstackStart(),
    nitro({ preset: "vercel" }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths()
  ],});
