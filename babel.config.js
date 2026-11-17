const presets = [
    "@babel/preset-react",
    [
        "@babel/preset-env",
    ]
];

const plugins = [
    [
        "module-resolver",
        {
            root: ["src/js"]
        }
    ],
    "@babel/plugin-transform-runtime"
];

export default {
    presets,
    plugins
};
