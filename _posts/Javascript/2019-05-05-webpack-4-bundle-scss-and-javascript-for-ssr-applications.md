---
layout: post
title: Webpack 4 - Bundle SCSS and JavaScript for SSR applications
date: 2019-05-05 23:00:00 +0000
categories:
- Javascript
canonical: ''

---
## Project structure

```
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
```

## `package.json`

```json
{
  "version": "1.0.0",
  "name": "my-app",
  "private": true,
  "devDependencies": {
    "@babel/core": "^7.4.4",
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
    "dev": "webpack --watch",
    "build": "cross-env NODE_ENV=production webpack"
  }
}
```

## `webpack.config.js`

```js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

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
              plugins: devMode ? () => [] : () => [require("cssnano")()]
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

## `postcss.config.js`

```js
module.exports = {
  modules: false,
  plugins: {
    autoprefixer: {
      grid: true
    }
  }
};
```

## `.browserslistrc`

```
> 1%
last 2 versions
ie 11
```

## `.babelrc`

```
{
  "presets": ["@babel/preset-env"]
}
```
