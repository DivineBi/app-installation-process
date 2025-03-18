const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
var JsDocPlugin = require('jsdoc-webpack-plugin');

module.exports = {
  mode: 'development', // Use'production' for production mode
  entry: './src/index.js', // Point d'entrée principal de votre application
  output: {
    path: path.resolve(__dirname, 'dist'), // Répertoire de sortie
    filename: 'bundle.js', // Nom du fichier généré
    clean: true, // Nettoie le dossier dist à chaque build
  },
  devtool: 'source-map', // Facilite le débogage
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true, // Activer le hot reload
    port: 3000, // Port de développement
    open: true, // Ouvrir automatiquement le navigateur
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // match .js or .mjs files
        include: path.resolve(__dirname, 'src'), //only process files in the src folder
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/, // for SASS/SCSS styles
        include: path.resolve(__dirname, 'src'), // restrict to src folder
        use: [
          'style-loader', 'css-loader', 'sass-loader'], // Use loaders
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Gère les fichiers d'images
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Fichier HTML de base
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Fichiers CSS générés
    }),
    new ESLintPlugin({
      extensions: ['js'], // Vérifie les fichiers JavaScript
    }),
    new Dotenv(),
    new JsDocPlugin({
      conf: 'jsdoc.conf.js',
      cwd: '.',
      preserveTmpFile: false,
      recursive: false
  })
  ],
  resolve: {
    extensions: ['.js'], // Résout les extensions par défaut
  }
};
