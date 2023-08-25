const { DefinePlugin } = require('webpack');
const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const { iifeReturnMinify, IIFEReturnPlugin } = require('./lib/webpack');
const version = require('./package.json').version;

const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === 'production';

const pluginName = 'dd-custom-plugin';
const frameworkSrcPath = resolve(__dirname, '..', 'dd-framework', 'src');

const srcPath = resolve(__dirname, 'src');
const distPath = resolve(__dirname, 'dist');

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: false,
  entry: {
    [`${pluginName}-${version}`]: `${srcPath}/entry.js`
  },
  output: {
    iife: true,
    filename: `[name]${isProd ? '.min' : ''}.js`,
    path: distPath,
    environment: {
      arrowFunction: false
    }
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@dd/common': `${frameworkSrcPath}/common`
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            parserOpts: {
              allowReturnOutsideFunction: true
            }
          }
        },
        include: srcPath,
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: function comments(node, comment) {
              // leave for minifier
              return /IIFEReturnPlugin/.test(comment.value);
            },
            max_line_len: 255
          }
        },
        minify: iifeReturnMinify
      })
    ]
  },
  plugins: [
    new DefinePlugin({
      VERSION: JSON.stringify(version)
    }),
    new IIFEReturnPlugin()
  ]
};
