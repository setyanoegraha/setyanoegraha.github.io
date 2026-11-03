import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://setyanoegraha.github.io",
  base: "/",
  server: { host: true },
  preview: { host: true },
});
