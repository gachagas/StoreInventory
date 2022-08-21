/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = withAntdLess({
  // optional: you can modify antd less variables directly here
  modifyVars: { "@primary-color": "#13c2c2" },
  // Or better still you can specify a path to a file
  lessVarsFilePath: "./styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
