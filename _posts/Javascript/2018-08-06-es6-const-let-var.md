---
layout: post
title: ES6/ const - let - var
date: 2018-08-06 22:13:00 +0000
categories: Javascript

---
ES6 introduced two new kinds of variables in Javascript, `const` and `let`. They are block scoped variables, meaning they are scope inside `{}`, where `var` is [hoisted](/devNotes/javascript/2018/07/31/hoisting.html) to the global or functional scope.

## `const` vs `let` vs `var`

Let's compare some small code snippets and their outputs:

### Snippet 1 - for loop

```js
// var
// console.log(i); // undefined
for (var i = 0; i < 3; i++){
  console.log(i); // 0; 1; 2
}
console.log(i); // 3

//-----------------

// let
// console.log(i); // ReferenceError: i is not defined
for (let i = 0; i < 3; i++){
  console.log(i); // 0; 1; 2
}
console.log(i); // ReferenceError: i is not defined

//-----------------

// const
// console.log(i); // ReferenceError: i is not defined
for (const i = 0; i < 3; i++){
  console.log(i); // 0; ReferenceError: i is not defined
}
console.log(i);
```

This first code snippet shows us that `const` and `let` are scoped at a block level, where var is scoped and hoisted, here in the global scope.

We can see as well that the value of `const` cannot change in our for loop.

### Snippet 2 - Reassign values

```js
// var
var test = 1;
console.log(test); // 1
test = 2;
console.log(test); // 2

//-----------------

// let
let test = 1;
console.log(test); // 1
test = 2;
console.log(test); // 2

//-----------------

// const
const test = 1;
console.log(test); // 1
test = 2;
console.log(test); // TypeError: invalid assignment to const `test'
```

This example shows us that the value of `const` can't be reassigned.

### Snippet 3 - Redeclare variable

```js
// var
var test = 1;
console.log(test); // 1
var test = 2;
console.log(test); // 2

//-----------------

// let
let test = 1;
console.log(test); // SyntaxError: redeclaration of let test
let test = 2;
console.log(test);

//-----------------

// const
const test = 1;
console.log(test); // SyntaxError: redeclaration of const test
const test = 2;
console.log(test);
```

Both `let` and `const` can't be redeclare

### Snippet 4 - Scope

```js
// var
var test = 1;
function testFunction() {
  var test = 2;
  console.log(test); // 2
}
console.log(test); // 1

//-----------------

// let
let test = 1;
if(test > 0) {
  let test = 2;
  console.log(test); // 2
}
console.log(test); // 1

//-----------------

// const
const test = 1;
if(test > 0) {
  const test = 2;
  console.log(test); // 2
}
console.log(test); // 1
```

The above examples, show us that using `let` and `const` can reuse in another scope.

### Snippet 5 - Object

```js
// var
var obj = {
  test1: 1,
  test2: 2
};
// obj = {test: 0};
// console.log(obj); // { test: 0 }
obj.test1 = 10;
console.log(obj); // { test1: 10, test2: 2 }

//-----------------

// let
let obj = {
  test1: 1,
  test2: 2
};
// obj = {test: 0};
// console.log(obj); // { test: 0 }
obj.test1 = 10;
console.log(obj); // { test1: 10, test2: 2 }

//-----------------

// const
const obj = {
  test1: 1,
  test2: 2
};
// obj = {test: 0};
// console.log(obj); // invalid assignment to const `obj'
obj.test1 = 10;
console.log(obj); // { test1: 10, test2: 2 }
```

This last example shows us that with `const` we can mutate properties in our variable.

## `const` & `let` support

### `const`

> Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared. [_MDN - const_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

#### Support

<p class="ciu_embed" data-feature="const" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<a href="http://caniuse.com/#feat=const">Can I Use const?</a> Data on support for the const feature across the major browsers from caniuse.com.
</p>

### `let`

> The let statement declares a block scope local variable, optionally initializing it to a value. [_MDN - let_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

#### Support

<p class="ciu_embed" data-feature="let" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<a href="http://caniuse.com/#feat=let">Can I Use let?</a> Data on support for the let feature across the major browsers from caniuse.com.
</p>

## Resources

* [Variable declaration: var, const, let - Modern JS Cheatsheet](https://mbeaudru.github.io/modern-js-cheatsheet/#variable-declaration-var-const-let)
* [var, let, or const?](https://hackernoon.com/js-var-let-or-const-67e51dbb716f)
* [Var, let and const- what's the difference?](https://duckduckgo.com/?q=const+let+var+es6&t=ffab&atb=v123-1&ia=web)
* [const - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
* [let - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [var - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)