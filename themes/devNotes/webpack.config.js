const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: ["./src/js/theme-toggle.js", "./src/scss/screen.scss"],
  output: {
    path: path.resolve(__dirname, "static"),
    publicPath: "/static",
    filename: devMode ? "js/index.js" : "js/index.min.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: devMode
                ? () => [require("autoprefixer")({ grid: true })]
                : () => [
                    require("autoprefixer")({ grid: true }),
                    require("cssnano")()
                  ]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "css/screen.css" : "css/screen.min.css"
    })
  ]
};
