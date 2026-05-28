import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When building on Vercel (VERCEL=1 is injected by their build runner) we emit
// the Vercel Build Output API v3 layout to `.vercel/output`. Locally and inside
// the Lovable sandbox we keep the default `dist/` layout so build checks pass.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: isVercel
    ? {
        preset: "vercel",
        output: {
          dir: ".vercel/output",
          publicDir: ".vercel/output/static",
          serverDir: ".vercel/output/functions/__server.func",
        },
      }
    : true,
});
