import { fileURLToPath, URL } from 'url';
import { defineConfig, type Alias } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8080,
        proxy: {
            '/api': {
                //changeOrigin: true,
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/', import.meta.url)),
            '@styles': fileURLToPath(
                new URL('./src/assets/styles/', import.meta.url),
            ),
            '@components': fileURLToPath(
                new URL('./src/components/', import.meta.url),
            ),
        },
    },
});
