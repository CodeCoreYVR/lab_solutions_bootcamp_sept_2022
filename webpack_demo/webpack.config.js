// webpack.config.js
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // You can specify a path to an "entry" file in multiple ways.
  // An "entry" is the file where webpack begins
  // bundling all of you modules.
  // For a single entry, write:
  // entry: "./src/client.js"
  // For multiple entry files bundle into a single file, use an array:
  // entry: ["./src/client.js", "./src/defaults.js"]
  // To create multiple bundles from separate entry files, use an object:
  entry: {
    // Create a bundle "./dist/client.js" (named after the key)
    client: "./src/client.js",
    // Create a bundle "./dist/defaults.js" (named after the key)
    defaults: "./src/defaults.js",
    server: "./src/defaults.js"
  },
  output: {
    // The "path" property is used to specify the location where
    // our bundled files are created. By default, it is
    // path.join(__dirname, "build"),
    path: path.join(__dirname, "build"),
    // The "filename" property is used to change
    // the names of the bundled files.
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        // npm i -D file-loader
        loader: "file-loader",
        options: {
          outputPath: "images/"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // There is no sense in having babel transform JS files
        // from the node_modules/ directory
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack Demo", // <title>of the web page
      chunks: ["client"]
      // "chunks" tells webpack which bundles to include
      // in the html file.
    })
  ]
};