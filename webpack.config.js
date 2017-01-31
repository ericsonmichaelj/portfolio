var webpack = require('webpack')
var configs = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader/webpack!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
}

if (process.env.NODE_ENV === 'production') {
  configs.plugins = [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
module.exports = configs
