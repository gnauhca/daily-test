const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    entry1: './entry1.js',
    entry2: './entry2.js',
    entry3: './entry3.js'
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'entry1',
      filename: 'vender.js'
    }),
  ]
};