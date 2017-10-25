var webpack = require("webpack");

module.exports = {

  cache: true,

  entry: "./app/assets/javascripts/client/tagtool.js",
  output: {
    path: __dirname + '/app/assets/javascripts/dist/client/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ["react", "es2015"]
      }
    },{ 
     test: /\.css$/, 
     loader: "style-loader!css-loader" 
    },{
      test: /\.json$/,
      loader: "json-loader" 
    }]
  },

  resolve: {
    extensions: ["", ".js", ".jsx"],
    root:[__dirname + "/node_modules"],
   },
  node: {
    fs: "empty"
  }
};
