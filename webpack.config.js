const path = require('path');
const webpack = require('webpack');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: {
    smolcart: './src/index.ts',
  },
  output: {
    libraryTarget: 'umd',
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  optimization: {
    splitChunks: {},
  },
  devServer: {
    contentBase: './dist/',
  },
  module: {
    rules: [
      {
        test: /\.ts?/i,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ForkTSCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
  ],
};
