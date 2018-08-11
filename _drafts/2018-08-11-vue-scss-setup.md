---
layout: post
title:  "0 Vue - SCSS set up with Vue CLI 3"
date:   2018-08-09 09:45:00 +0100
categories: Javascript
---

## Setup Vue CLI 3

When creating a new project with `vue create hello-world`, pick `Manually select features` and check `CCS Pre-processors`.

If you already have created your project with out the previous steps, manually install sass-loader:

```bash
npm install -D sass-loader node-sass
```

We will want to import our SCSS functions, mixins and variables to our components as well. We are going to add [style-resources-loader](https://github.com/yenshih/style-resources-loader) to our project.

```bash
npm i style-resources-loader -D
```

## SCSS project structure

TODO
variables: shared
atoms: not shared
etc..

## Make variables functions and mixins accessible to component

If you don't already have a `vue.config.js` file at the root of your project create it.

```js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variables/*.scss'),
      ],
    })
}
```

## Add your `global.scss` style to your app

in `main.js` add

```js
import './styles/global.scss'
```