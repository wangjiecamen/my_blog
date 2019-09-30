const {
  override,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer
} = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true
    }),
    addWebpackAlias({
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      pages: path.resolve(__dirname, 'src/pages'),
      services: path.resolve(__dirname, 'src/services'),
      styles: path.resolve(__dirname, 'src/styles'),
      utils: path.resolve(__dirname, 'src/utils')
    })
  ),
  devServer: overrideDevServer(config => {
    config.proxy = {
      '/api': {
        target: process.env.REACT_APP_PROXY_TARGET,
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
    return config
  })
}
