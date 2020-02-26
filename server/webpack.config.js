const path = require('path');

module.exports = {
  entry: './server.ts',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.tsx', '.js'],
    alias: {
      '@Types': path.resolve(__dirname, '../@types/'),
    },
  },
};
