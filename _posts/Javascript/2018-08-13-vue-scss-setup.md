---
layout: post
title: Vue - SCSS set up with Vue CLI 3
date: 2018-08-13T08:50:00.000+00:00
category: Javascript
post_type: snippet
canonical: ""
---

## Setup Vue CLI 3

When creating a new project with `vue create my-vue-project`, pick `Manually select features` and check `CSS Pre-processors`.

If you already have created your project without the previous steps, manually install sass-loader:

```bash
npm install -D sass-loader node-sass
```

You will probably want, to import your SCSS functions, mixins and variables into your components as well. Add [style-resources-loader](https://github.com/yenshih/style-resources-loader) to your project.

```bash
npm i style-resources-loader -D
```

## SCSS project structure

In most of my projects, I use the [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) methodology from [Brad Frost](http://bradfrost.com/). My SCSS project structure follow this structure:

```
my-vue-project/src/:
| \---styles
|     +---atoms
|     |   +---forms
|     |   +---modifiers
|     |   \---typography
|     +---functions // 🚩 Shared with vue components
|     +---layouts
|     +---mixins // 🚩 Shared with vue components
|     +---molecules
|     +---organisms
|     +---settings // 🚩 Shared with vue components
|     +---templates
|     +---variables // 🚩 Shared with vue components
|     \---vendors
|         +---a11y
|         \---normalize
```

All your SCSS get imported into `global.scss`.

## Make variables functions and mixins accessible to component

If you don't already have a `vue.config.js` file at the root of your project, create it.

Add your shared SCSS files to this one so your components can use variables, mixins, functions etc.

```js
const path = require("path");

module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/styles/settings/*.scss"),
        path.resolve(__dirname, "./src/styles/functions/*.scss"),
        path.resolve(__dirname, "./src/styles/mixins/*.scss"),
        path.resolve(__dirname, "./src/styles/variables/*.scss")
      ]
    });
}
```

## Add your `global.scss` style to your app

in `main.js` we want to have our `global.scss`, to do so add:

```js
import "./styles/global.scss";
```
