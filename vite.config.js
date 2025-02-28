import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin
import tailwindcss from '@tailwindcss/postcss'; // Import Tailwind CSS PostCSS plugin
import autoprefixer from 'autoprefixer'; // Import Autoprefixer

export default defineConfig({
  plugins: [react()], // Use the React plugin
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Use Tailwind CSS PostCSS plugin
        autoprefixer(), // Use Autoprefixer
      ],
    },
  },
});