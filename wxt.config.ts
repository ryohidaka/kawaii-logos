import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "POP Logos",
    web_accessible_resources: [
      {
        matches: [],
        resources: ["/logos/*"],
      },
    ],
  },
  vite: () => ({
    plugins: [react()],
  }),
});
