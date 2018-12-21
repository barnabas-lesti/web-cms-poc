var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var browserConfig = {
  entry: [ './src/client/index.js', './src/client/main.scss' ],
  output: {
    path: path.resolve(__dirname, 'build/public'),
    filename: 'client.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'client.css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-url',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      eodrinGlobals: {
        IS_BROWSER: true,
      },
    }),
  ],
};

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      eodrinGlobals: {
        IS_BROWSER: false,
      },
    }),
  ],
};

module.exports = [ browserConfig, serverConfig ];
