import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Nitro Vercel preset — emits a Vercel Build Output API v3 bundle
  // (.vercel/output) that Vercel auto-detects and deploys.
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      publicDir: "static",
      serverDir: "functions/__server.func",
    },
  },
});
