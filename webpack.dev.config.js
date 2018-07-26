const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    // 根目录
    contentBase: path.join(__dirname, './release'),
    // 自动打开浏览器
    open: true,
    port: 9000
  }
}