import {defineConfig} from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": path.join(__dirname, "./src/ui"),
      "@mixins": path.join(__dirname, "./src/assets/mixins.scss"),
      "@variables": path.join(__dirname, "./src/assets/variables.scss"),
      "@helpers": path.join(__dirname, "./src/helpers"),
    },
  },
})
