const path = require('path');
const { ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfig = {
  entry: {
    app:  path.resolve(__dirname, 'src'),
    polyfill: ['babel-polyfill', 'classlist-polyfill'],
    vendor: [
      'react', 
      'history', 
      'react-dom', 
      'redux-saga',
      'react-router-dom', 
      'prop-types', 'redux', 
      'react-redux', 'immutable', 
      'connected-react-router', 
      'redux-immutable'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'  
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {loader:'css-loader', options: {url: false}}] 
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, {loader:'css-loader', options: {url: false}}, 'sass-loader'] 
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components')
    },
    extensions: ['js', 'jsx', 'css', 'scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index-template.html')
    }),
    new ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      PropTypes: 'prop-types'
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  mode: 'production'
};

module.exports = webpackConfig;