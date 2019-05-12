const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        modernizr$: path.resolve(__dirname, ".modernizrrc")
      }
    }
  },

  chainWebpack(config) {
    config.module
      .rule("modernizr")
      .test(/\.modernizrrc$/)
      .use("webpack-modernizr-loader")
      .loader("webpack-modernizr-loader");
  },

  publicPath: "/playground",
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  lintOnSave: undefined
};