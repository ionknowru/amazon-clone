const CopyWebpackPlugin = require('copy-webpack-plugin');

module: {
  loaders: [{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }];
}
