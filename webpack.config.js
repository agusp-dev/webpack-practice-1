const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
  output: {
    filename: 'app.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My beautiful app',
      template: 'src/index.html'
    })
  ]
}
