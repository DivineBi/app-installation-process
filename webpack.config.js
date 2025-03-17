const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development', // Utiliser 'production' pour le mode production
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
        test: /\.js$/, // Traite les fichiers JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i, // Traite les fichiers SASS/SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrait le CSS dans des fichiers séparés
          'css-loader', // Gère l'importation des fichiers CSS
          'sass-loader', // Compile le SASS en CSS
        ],
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
  ],
  resolve: {
    extensions: ['.js'], // Résout les extensions par défaut
  },
};
