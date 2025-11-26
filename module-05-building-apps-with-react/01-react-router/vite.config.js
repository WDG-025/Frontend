import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable HTML5 history fallback for client-side routing
    // This makes the dev server return index.html for all routes
    // so React Router can handle the navigation
    historyApiFallback: true,
  },
});
