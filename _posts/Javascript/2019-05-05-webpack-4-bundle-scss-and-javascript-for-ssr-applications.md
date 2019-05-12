---
layout: post
title: Webpack 4 - Bundle SCSS and JavaScript for SSR applications
date: 2019-05-05T23:00:00.000+00:00
category: Javascript
canonical: ""
post_type: snippet
---

## Project structure

    Proj:
    | \---Content
    |     +---js
    |     |   +---index.js
    |     +---scss
    |     |   +---screen.scss
    | \---Dist
    |     +---css
    |     |   +---screen.css
    |     +---js
    |     |   +---index.js

## `package.json`

```json
{
  "version": "1.0.0",
  "name": "my-app",
  "private": true,
  "devDependencies": {
    "@babel/core": "^7.4.4",
    "@fullhuman/postcss-purgecss": "^1.2.0",
    "@babel/preset-env": "^7.4.3",
    "babel-loader": "^8.0.5",
    "cssnano": "^4.1.10",
    "css-loader": "^1.0.1",
    "cross-env": "^5.2.0",
    "file-loader": "^3.0.1",
    "mini-css-extract-plugin": "^0.6.0",
    "node-sass": "^4.12.0",
    "postcss-loader": "^3.0.0",
    "postcss-preset-env": "^6.6.0",
    "sass-loader": "^7.1.0",
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.2"
  },
  "scripts": {
    "serve": "webpack --watch",
    "build": "cross-env NODE_ENV=production webpack"
  }
}
```

## `webpack.config.js`

```js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  mode: devMode ? "development" : "production",
  entry: ["./Content/js/index.js", "./Content/scss/screen.scss"],
  output: {
    path: path.resolve(__dirname, "Dist"),
    publicPath: "/Dist",
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
                    require("cssnano")(),
                    purgecss({
                      content: [
                        "./Views/**/*.cshtml",
                        "./Content/js/**/*.js",
                        ,
                        "./Content/apps/**/*.vue"
                      ]
                    })
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
```

## `.browserslistrc`

    > 1%
    last 2 versions
    ie 11

## `.babelrc`

    {
      "presets": ["@babel/preset-env"]
    }
