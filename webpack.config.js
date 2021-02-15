const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// .BundleAnalyzerPlugin;
const config = {
  entry: { app: path.resolve(__dirname, './src/index.js') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    //PublicPath indicamos a webpack la ruta donde vamos a buscar archivos nuevos
    // publicPath: 'dist/',
    //ChuckFileName es usado para personalizar el nombre de los chunks
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(png|gif|jpg|svg|webp|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
          // {
          // 	loader: 'url-loader',
          // 	options: {
          // 		mimetype: 'image/png',
          // 		limit: 1000,
          // 		name: '[contenthash].[ext]',
          // 		outputPath: 'assets',
          // 	},
          // },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      //Asi agregamos el favicon
      favicon: path.resolve(__dirname, 'src/statics/favicon.png'),
    }),
    // Agrega atributos a la etiqueta script de cada entry
    new ScriptExtHtmlWebpackPlugin({
      async: ['app'],
    }),
    // Agrega cualquier asset al index html
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'js/',
    }),
    // Agrega los archivos .css al index.html
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[chunkhash].css',
    }),
    // Determina el css critico para la carga inicial de nuestra web
    new HtmlCriticalPlugin({
      base: path.join(path.resolve(__dirname), 'dist/'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      },
    }),
    // Trae las referencias de los modulos core de nuestra app
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
      // context: path.resolve(__dirname, '.src/'),
    }),
    // Elimina las ouput repetidas en cada build de la carpeta dist
    //Limpia los build anteriores antes de hacer build
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
};
module.exports = config;
