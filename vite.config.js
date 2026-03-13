import path from 'path';
import babel from 'vite-plugin-babel';
import htmlPurge from 'vite-plugin-purgecss';
import { defineConfig } from 'vite'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root:path.resolve(__dirname, "index.js"),
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    rolldownOptions: {
        external: ['react', 'react-dom', 'lodash-es', 'accounting', 'prop-types', 'react-test-renderer', 'typescript']
    }
  },
  optimizeDeps: {
    rolldownOptions: {
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      plugins: [babel()]
    }
  },
  plugins: [htmlPurge(), babel()]
});