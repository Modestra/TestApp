import { fileURLToPath, URL } from 'url';
import { defineConfig, type Alias } from 'vite';
import vue from '@vitejs/plugin-vue';

const getAliasObject = (findName: string, path: string): Alias => {
    return {
        find: findName,
        replacement: fileURLToPath(new URL(path, import.meta.url)),
    };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    proxy: {
        "/api": {
          //changeOrigin: true,
          target: "http://127.0.0.1:8000",
          changeOrigin: true,
          secure: false,
        }
      }
  },
  resolve:{
    alias:[
      getAliasObject('@', './src/'),
      getAliasObject('@styles', './src/assets/styles/')
    ]
  }
})
