import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import tailwindcss from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import eslint from "vite-plugin-eslint";
import { resolve } from "path";

import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), eslint()],
  build: {
    outDir: "public_html",
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
