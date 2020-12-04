const path = require('path');
const { ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const webpackConfig = {
  entry: [
    '@babel/polyfill', 
    'classlist-polyfill',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    chunkFilename: '[name].bundle.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
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