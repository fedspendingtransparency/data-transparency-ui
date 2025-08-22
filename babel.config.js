const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                ie: "10",
                node: "10"
            },
            useBuiltIns: "entry",
            corejs: { version: 3, proposals: true }
        }
    ],
    "@babel/preset-react"
];

const plugins = [
    [
        "module-resolver",
        {
            root: ["src/js"]
        }
    ],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-object-rest-spread",
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-optional-chaining",
    ["@babel/plugin-transform-react-jsx", {
        pragmaFrag: "React.Fragment"
    }]
];

module.exports = {
    presets,
    plugins
};
