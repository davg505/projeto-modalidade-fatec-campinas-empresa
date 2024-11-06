import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/projeto-modalidade-fatec-campinas-empresa/',  // Certifique-se de usar o nome correto do repositório.
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
