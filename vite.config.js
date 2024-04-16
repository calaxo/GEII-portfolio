import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/",
  plugins: [
    react({ jsxRuntime: "classic" }),
    Pages({
      dirs: "src/pages",
    }),
  ],
  resolve: {
    alias: {

      "@assets": path.resolve(__dirname, "./src/assets"),


    },
  },
  build: {
    sourcemap: false,

    rollupOptions: {
      output: {
        dir: "builded/",
        entryFileNames: "plugin.js",

        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `[name][extname]`;
        },
        chunkFileNames: "chunk.js",
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
        },
      },
    },
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari12"],
  },
});
