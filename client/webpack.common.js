/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { version } = require('./package.json');

module.exports = {
  entry: './src/entry',
  output: {
    path: `${__dirname}/build`,
    filename: `bundle.${version}.js`,
    chunkFilename: `chunks/[name].${version}.chunks.js`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve('babel.config.json'),
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        loader: 'url-loader',
        options: {
          outputPath: 'images/',
          name: '[hash]-[name].[ext]',
          limit: 3000,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@Store': path.resolve(__dirname, 'src/store/'),
      '@Stores': path.resolve(__dirname, 'src/store/stores/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Lib': path.resolve(__dirname, 'src/lib/'),
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Images': path.resolve(__dirname, 'src/public/images'),
      '@Styles': path.resolve(__dirname, 'src/public/styles'),
      '@Types': path.resolve(__dirname, 'src/@types/'),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/public/index.html' })],
};
