// / <reference types="@vitest/browser-playwright" />
import path from 'path';
import babel from 'vite-plugin-babel';
import htmlPurge from 'vite-plugin-purgecss';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

export default defineConfig({
    build: {
        outDir: path.resolve(__dirname, "./docs"),
        rolldownOptions: {
            input: "index.js",
            external: ['react', 'react-dom', 'lodash-es', 'accounting', 'prop-types']
        }
    },
    optimizeDeps: {
        rolldownOptions: {
            resolve: {
                extensions: ['.js', '.jsx']
            },
            plugins: [htmlPurge(), babel()]
        }
    },
    plugins: [htmlPurge(), babel()],
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
