module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/"
  },
  devServer: {
    contentBase: __dirname + '/public/',
    port: 7777,
    host: '0.0.0.0'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exculde: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
