import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    api: {
      port: 3001, // Set your desired port here
      // host: '0.0.0.0', // Optional: specify host, e.g., to listen on all addresses
      // strictPort: true, // Optional: fail if port is in use
    },
  },
});
