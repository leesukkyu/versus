// 웹팩 설정 파일 - 배포용

const path = require('path');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: ['./src/entry'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: /(src|node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve('babel.config.js'),
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        include: /(src)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve('babel.config.js'),
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: /(src|public)/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new AsyncChunkNames(), // 스플릿 네임 관리
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
});
