// 웹팩 설정 파일 - 개발용
const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: ['./src/entry'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'source-map',
});
