import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true,
    proxy: {
      "/graphql": {
        target: `http://localhost:3000`,
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
