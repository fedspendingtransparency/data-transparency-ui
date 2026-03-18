const presets = [
    "@babel/preset-react",
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
    ]
];

const plugins = [
    "@babel/plugin-syntax-jsx",
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

export default {
    presets,
    plugins
};
