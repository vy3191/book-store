const path = require('path');

const webpackConfig = {
  entry: {
    app:  path.resolve(__dirname, 'src'),
    dev: ['webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server'],
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
    {
      test:/ /,
    }
  }
};

module.exports = webpackConfig;