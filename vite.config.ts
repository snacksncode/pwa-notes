import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "*.png", "*.svg"],
      manifest: {
        name: "Notes PWA",
        short_name: "NotesPWA",
        description: "My Awesome Notes App description",
        theme_color: "#6200EE",
        icons: [
          {
            src: "logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      manifestFilename: "manifest.json",
    }),
  ],
});
