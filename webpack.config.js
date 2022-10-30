const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),

    filename: "index.bundle.js",
  },

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        exclude: /node_modules/,

        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
    ],
  },
};
