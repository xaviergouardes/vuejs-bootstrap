const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.vue$/, exclude: /node_modules/, use: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { 
        test: /\.css$/, 
        // exclude: /node_modules/, 
        use: ['style-loader','css-loader'] 
      },
      { test: /\.(png|svg|jpg|gif)$/, exclude: /node_modules/, use: ['file-loader']}
    ],

  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {exclude:  ['index.html']}),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "./asset/"), to: path.join(__dirname, "./dist/asset") }
    ])
  ],
  optimization: {
    usedExports: true
  }

};
