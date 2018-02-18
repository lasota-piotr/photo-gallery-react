const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const fs = require('fs');
const data = fs.existsSync(path.resolve('./data.js')) && require('./data.js');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'PhotoFlix',
      template: 'index.html',
    }),
    extractSass,
    new webpack.DefinePlugin({
      'process.env': {
        FACEBOOK_APP_ID: JSON.stringify(
          process.env.FACEBOOK_APP_ID || (data && data.facebookAppId) || ''
        ),
        UNSPLASH_APP_ID: JSON.stringify(
          process.env.UNSPLASH_APP_ID ||
            (data && data.unsplashData.applicationId) ||
            ''
        ),
        UNSPLASH_SECRET: JSON.stringify(
          process.env.UNSPLASH_SECRET ||
            (data && data.unsplashData.secret) ||
            ''
        ),
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
