// 웹팩 설정 파일 - 공통

const path = require('path');
const webpack = require('webpack');
const I18nPlugin = require('i18n-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { version } = require('./package.json');

// 다국어 처리
const languages = {
  ja: require('./src/language/en.json'),
  ko: require('./src/language/ko.json'),
};

// 컴파일 선택 언어
const COMPILE_LANGUAGE = 'ko';
const COMPILE_LANGUAGE_FILE = languages.ko;

// 외부 리소스 서버
const ASSET_PATH = './';

// 웹팩 설정
module.exports = {
  output: {
    path: `${__dirname}/build`,
    filename: `bundle.${version}.js`,
    chunkFilename: `chunks/[name].${version}.chunks.js`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 폴더 클린
    // 기본 확장 템플릿
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // 다국어 설정
    new I18nPlugin(COMPILE_LANGUAGE_FILE, {
      nested: true,
    }),
    new webpack.EnvironmentPlugin({
      COMPILE_LANGUAGE,
      originPath: ASSET_PATH,
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Route': path.resolve(__dirname, 'src/route/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Style': path.resolve(__dirname, 'public/scss/'),
      '@Public': path.resolve(__dirname, 'public/'),
      '@Config': path.resolve(__dirname, 'src/config/'),
      '@Stores': path.resolve(__dirname, 'src/store/stores/'),
    },
  },
};
