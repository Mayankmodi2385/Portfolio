import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          "three-stdlib": ["three-stdlib"],
          gsap: ["gsap"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});