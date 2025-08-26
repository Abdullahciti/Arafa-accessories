import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Add the React plugin
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // Include the React plugin
    tailwindcss(),
  ],
});