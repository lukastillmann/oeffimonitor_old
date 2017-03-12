var path = require('path');

/* plugin that automatically injects the bundled file into the index.html *//* don't need it for now */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    javascript: path.join(__dirname + '/app/index.js'),
    },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, '/node_modules/')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css?$/,
        exclude: [
          path.resolve(__dirname, '/node_modules/')
        ],
        loader: ['style-loader', 'css-loader'] 
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: []
}
