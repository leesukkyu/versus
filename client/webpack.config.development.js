/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 9000,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'source-map',
});
