// / <reference types="@vitest/browser-playwright" />
import path from 'path';
import react from '@vitejs/plugin-react';
import htmlPurge from 'vite-plugin-purgecss';
import { defineConfig, esmExternalRequirePlugin } from 'vite';
import { fileURLToPath } from 'url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

export default defineConfig({
    build: {
        commonjsOptions: { transformMixedEsModules: true },
        outDir: path.resolve(__dirname, "./dist"),
        rolldownOptions: {
            input: "index.js",
            plugins: [
                esmExternalRequirePlugin({
                    external: [/^react(-dom)?(\/.+)?$/]
                }),
                esmExternalRequirePlugin({
                    external: [/^lodash(-es)?(\/.+)?$/]
                }),
                esmExternalRequirePlugin({
                    external: ["accounting"]
                }),
                esmExternalRequirePlugin({
                    external: ["prop-types"]
                })
            ],
            external: ['react', 'react-dom', 'lodash-es', 'accounting', 'prop-types'],
            output: {
                globals: {
                    react: 'React',
                    'lodash-es': 'lodash-es',
                    'react-dom': 'ReactDOM',
                    lodash: '_'
                }
            }
        },
        lib: {
            entry: './index.js',
            name: 'data-transparency-ui',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'umd', 'cjs'] // Set your required formats
        }
    },
    optimizeDeps: {
        rolldownOptions: {
            resolve: {
                extensions: ['.js', '.jsx']
            },
            plugins: [
                react({
                    babel: {
                        // Add your custom Babel plugins here
                        plugins: [
                            'babel-plugin-react-compiler', // Example: For React 19 optimization,
                            "@babel/plugin-syntax-jsx",
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-transform-object-rest-spread",
                            "@babel/plugin-transform-class-properties",
                            "@babel/plugin-transform-optional-chaining",
                            ["@babel/plugin-transform-react-jsx", { pragmaFrag: "React.Fragment" }]
                        ],
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        // Set to true if you want Vite to read your root .babelrc file
                        babelrc: false,
                        configFile: false
                    }
                }),
                htmlPurge()]
        }
    },
    plugins: [
        react({
            babel: {
                // Add your custom Babel plugins here
                plugins: [
                    'babel-plugin-react-compiler', // Example: For React 19 optimization,
                    "@babel/plugin-syntax-jsx",
                    "@babel/plugin-transform-runtime",
                    "@babel/plugin-transform-object-rest-spread",
                    "@babel/plugin-transform-class-properties",
                    "@babel/plugin-transform-optional-chaining",
                    ["@babel/plugin-transform-react-jsx", { pragmaFrag: "React.Fragment" }]
                ],
                presets: ["@babel/preset-react", "@babel/preset-env"],
                // Set to true if you want Vite to read your root .babelrc file
                babelrc: false,
                configFile: false
            }
        }),
        htmlPurge()
    ],
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
