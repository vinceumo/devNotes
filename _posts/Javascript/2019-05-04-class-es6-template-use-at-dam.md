---
layout: post
title: Class (ES6) template use at DAM
date: 2019-05-04T23:00:00.000+00:00
category: Javascript
canonical: ""
post_type: snippet
---

Javascript (Class based) project structure use at Dam Digital for SSR (server-side rendering) applications. You can use [webpack](https://webpack.js.org/) or [parcel](https://parceljs.org/) to bundle your js project.

This project structure helps, developers, to write more modular/reusable code.

## Project structure

    js:
    | \---modules
    |     +---MyModule.js
    | +---vendors
    | +---index.js
    | +---global.js

## `index.js`

```js
import MyModule from ".modules/MyModule"

const modules = {
  MyModule: new MyModule(), // Use default settings
  MyModule2: new MyModule({
    // Or use optional settings to overwrite default settings
  })
};

document.addEventListener("DOMContentLoaded", function () {
    modules.MyModule.init();
    modules.MyModule2.init();
)}
```

## `MyModule.js`

```js
export default class MyModule {
  constructor(options) {
    this.options = MyModule.updateSettings(options);
    this.selector = this.options.selector =
      typeof this.options.selector === "string"
        ? document.querySelector(this.options.selector)
        : this.options.selector;
    this.ctas = this.selector.querySelectorAll(`.${this.options.ctaClassName}`);
  }

  static updateSettings(userSettings) {
    const defaultSettings = {
      selector: ".my-selector", // Dom El or string
      ctaClassName: "cta", // String
      otherOption: true, // Bool
      onInit: () => {} // Call back example
    };

    for (const attrName in userSettings) {
      defaultSettings[attrName] = userSettings[attrName];
    }

    return defaultSettings;
  }

  init() {
    //Do things
    this.options.onInit.call(this);
  }
}
```

## Resources

- [Classes - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [An introduction to ES6 classes](https://javascriptplayground.com/introduction-to-es6-classes-tutorial/)
- [A guide to prototype-based class inheritance in JavaScript](https://medium.freecodecamp.org/a-guide-to-prototype-based-class-inheritance-in-javascript-84953db26df0)
- [6.2: Classes in JavaScript with ES6 - p5.js Tutorial 📺](https://www.youtube.com/watch?v=T-HGdc8L-7w)
- [Object-oriented Java​Script for beginners - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [import - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
