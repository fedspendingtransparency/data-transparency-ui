const presets = [
    "@babel/preset-react",
    [
        "@babel/preset-env",
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
