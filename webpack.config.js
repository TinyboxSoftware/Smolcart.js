const path = require('path');
const webpack = require('webpack');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    libraryTarget: 'umd',
    library: 'smolcart',
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
