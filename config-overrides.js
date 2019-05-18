const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const envConf = require('./config/env.js')

const zgipConfig = () => config => {
  config.plugins.push(
    new CompressionPlugin({
      // asset: "[path].gz[query]",
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css|jsx)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  )
  return config
}

const argvConfig = () => config => {
  config.plugins.push(
    new webpack.DefinePlugin({
      ...envConf
    })
  )
  return config
}

const AnalyzConfig = () => config => {
  console.log('process.env.ANALYZE', process.env.ANALYZE)
  if (process.env.ANALYZE) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }
  return config
}

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  argvConfig(),
  zgipConfig(),
  AnalyzConfig()
)