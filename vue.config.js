const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack")
module.exports = defineConfig({
  devServer: {
    client: {
      overlay: false
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
        "windows.$": "jquery",
        Popper: ["popper.js", "default"]
      })
    ]
  }
})
