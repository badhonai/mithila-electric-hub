import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Force-on nitro with the Vercel preset so `npm run build` produces a
  // `.vercel/output` bundle that Vercel auto-detects and deploys.
  nitro: {
    preset: "vercel",
  },
});
