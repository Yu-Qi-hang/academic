
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/academic/', // 必须与 GitHub 仓库名一致
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});
