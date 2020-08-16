const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const NODE_ENV = process.env.NODE_ENV;

// Реализация пока без прод сборки, просто чтобы ускорить процесс разработки.
const isProd = function() {
  return NODE_ENV === 'production' ? true : false;
};

module.exports = {
  entry: './src/main.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: ['vue-style-loader', 'css-loader'],
          },
        },
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: isProd ? 'vue/dist/vue.runtime.min.js' : 'vue/dist/vue.runtime.js',
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [new VueLoaderPlugin()],

  devServer: {
    port: 8080,
    historyApiFallback: true,
    overlay: true,
  },
};
