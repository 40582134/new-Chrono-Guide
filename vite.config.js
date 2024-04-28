import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Chrono-Guide-Vercel-Patch-P/",
  build: {
    outDir: "docs",
  },
});
