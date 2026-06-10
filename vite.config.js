// / <reference types="@vitest/browser-playwright" />
import path from 'path';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import htmlPurge from 'vite-plugin-purgecss';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

export default defineConfig({
    mode: "production",
    build: {
        commonjsOptions: { transformMixedEsModules: true, include: [/node_modules/] },
        outDir: path.resolve(__dirname, "./dist"),
        rolldownOptions: {
            input: "index.js",
            external: ['react', 'react/jsx-runtime', 'react-dom', 'lodash-es', 'accounting', 'prop-types'],
            output: {
                globals: {
                    react: 'React',
                    'lodash-es': 'lodash-es',
                    'react/jsx-runtime': 'react/jsx-runtime',
                    'react-dom': 'ReactDOM',
                    accounting: 'accounting',
                    'prop-types': 'prop-types'

                }
            }
        },
        lib: {
            // Defines the entry point file
            entry: path.resolve(__dirname, 'index.js'),
            name: 'data-transparency-ui',
            outDir: 'dist',
            plugins: [react(), babel({ presets: [reactCompilerPreset()] }), htmlPurge(), nodePolyfills(), viteTsconfigPaths()],
            // Outputs both ES modules (.js/.mjs) and CommonJS (.cjs)
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format}.js`
        }
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx'
            }
        },
        rolldownOptions: {
            resolve: {
                extensions: ['.js', '.jsx']
            },
            plugins: [react({
                jsxRuntime: 'preserve'
            }), babel({ presets: [reactCompilerPreset()] }), htmlPurge(), nodePolyfills(), viteTsconfigPaths()]
        }
    },
    test: {
        projects: [{
            extends: true,
            plugins: [
                // The plugin will run tests for the stories defined in your Storybook config
                // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                storybookTest({
                    configDir: path.join(__dirname, '.storybook')
                })],
            test: {
                name: 'storybook',
                browser: {
                    enabled: true,
                    headless: true,
                    provider: playwright({}),
                    instances: [{
                        browser: 'chromium'
                    }]
                },
                setupFiles: ['.storybook/vitest.setup.ts']
            }
        }]
    }
});
