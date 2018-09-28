const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const isPROD = process.env.NODE_ENV === 'production';

const plugins = [
  new ExtractTextPlugin('react-draft-wysiwyg.css'),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [autoprefixer, precss],
    },
  })
];

if (isPROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }));
}

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: isPROD ? 'react-draft-wysiwyg.min.js' : 'react-draft-wysiwyg.js',
    library: 'reactDraftWysiwyg',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    immutable: 'immutable',
    'react-dom': 'react-dom',
    'draft-js': 'draft-js',
  },
  plugins: plugins,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /immutable\.js$|draftjs-utils\.js$/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader',
        }),
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
};
