const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    'whatwg-fetch',
    '@babel/polyfill',
    '@webcomponents/webcomponentsjs/webcomponents-bundle.js',
    './js/app.js',
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /web-components\//,
        use: {
          loader: 'web-components-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(bmp|gif|jpe?g|png|eot|woff|ttf|svg|woff2|ico)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100,
            name: 'img/[name].[hash:8].[ext]',
          },
        }],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'News',
      template: 'index.html',
      favicon: 'favicon.ico',
    }),
  ],
};
