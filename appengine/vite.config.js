import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  server: {
    host: true,
    port: 8080,

    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true,
    },
  },
});
