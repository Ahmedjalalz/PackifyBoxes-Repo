import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  noExternals: true,
  externals: {
    inline: ["tslib"],
  },
});
