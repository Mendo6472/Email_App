import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });
const DEV_API = process.env.DEV_PROXY_URL;
const PROD_API = process.env.PROD_PROXY_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 9000,
    proxy: {
      '/api': {
        target: DEV_API,
        changeOrigin: true,
        secure: false,
      },
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: PROD_API,
        changeOrigin: true,
        secure: false,
      },
    }
  },
});