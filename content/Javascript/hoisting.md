---
type: post
title: Hoisting
date: 2018-07-31T00:00:00.000+00:00
category: Javascript
post_type: snippet
canonical: ""
---

In Javascript, hoisting refers to all functions and variable declarations treated as if they were declared at the top of a functional scope, or global scope, without taking into account when and where in the code these ones have been declared.

Example: If we call our function before declaring this one, we do not get an error.

```js
myFavoriteColor(green); // Output: My favorite color is green

function myFavoriteColor(color) {
  console.log("My favorite color is " + color);
}
```

The above code works the same way as bellow:

```js
function myFavoriteColor(color) {
  console.log("My favorite color is " + color);
}

myFavoriteColor(red); // Output: My favorite color is red
```

Now let's have a look at the variables.

If we call a variable without defining this one we get an error:

```js
console.log(color); // Output: ReferenceError: color is not defined
```

But now if we define this one after our console.log we get an `undefined`:

```js
console.log(color); //Output: undefined
var color = "Yellow";
console.log(color); //Output: Yellow
```

In the above case Javascript **hoists** all our variable to the beginning of our code but the initialization stays at the same place.

Inside a function our variable will be hoist at the beginning of our function:

```js
console.log(color); //Output: ReferenceError: color is not defined
function returnColor(condition) {
  console.log(color); //Output: undefined
  if (condition) {
    var color = "Pink";
    console.log(color); //Output: Pink
    return color;
  } else {
    console.log(color); //Output: undefined
    return false;
  }
}
// returnColor(true/false);
```

In ES6 we cannot access variables declared with `let` and `const` before they are declared.

```js
console.log(varColor); //Output: undefined
var varColor = "Yellow";
console.log(varColor); //Output: Yellow

console.log(letColor); //Output: ReferenceError: can't access lexical declaration `letColor' before initialization
let letColor = "Yellow";
console.log(letColor); //Output: Yellow

console.log(constColor); //Output: ReferenceError: can't access lexical declaration `constColor' before initialization
const constColor = "Yellow";
console.log(constColor); //Output: Yellow
```

## References:

- [Hoisting - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [A guide to JavaScript variable hoisting 🚩 with let and const](https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d)
- [Hoisting - charliegerard/dev-notes](https://github.com/charliegerard/dev-notes/blob/master/javascript/hoisting.md)
- [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)
