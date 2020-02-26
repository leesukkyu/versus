const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.ts',
  output: {
    path: `${__dirname}/build`,
    filename: `bundle.js`,
    publicPath: '../',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    __dirname: true,
  },
  externals: [nodeExternals()],
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: ['.jsx', '.ts', '.tsx', '.js'],
    alias: {
      '@Types': path.resolve(__dirname, '../@types/'),
    },
  },
};
