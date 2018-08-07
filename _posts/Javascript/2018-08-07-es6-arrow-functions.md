---
layout: post
title:  "ES6/ Arrow functions"
date:   2018-08-07 19:08:00 +0100
categories: Javascript
---

> An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.
> 
> *[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)*

## Syntax

Arrow functions basic syntax:

```js
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression // Same as: => { return expression; } 
```

If we only have one parameter, we do not need to use parentheses around the parameter. If we do not have any parameter we have to use empty parentheses, `()`.

```js
param => { statements } // Single parameter

() => { statements } // No parameter
```

## Examples `ES5` vs `ES6`

### Example 1:

```js
// ES5
var wordToArrayEs5 = function(word){
  return word.split('');
};
console.log(wordToArrayEs5('test ES5')); // [ "t", "e", "s", "t", " ", "E", "S", "5" ]

// -----

// ES6
const wordToArrayEs6 = word => word.split('');
console.log(wordToArrayEs6('test ES6')); // [ "t", "e", "s", "t", " ", "E", "S", "6" ]
```

### Example 2:

```js
const order = [
  {product1: 10},
  {product2: 15.33},
  {product3: 22.99},
  {product4: 33.22}
];

const vatTax = 20;

// -----
// -----
    
// ES5
var orderTotalEs5 = function(){
  var total = 0;
  order.forEach(function(currentValue) {
    Object.keys(currentValue).map(function(key) {
      total += currentValue[key];
    });
  });
  total = total + (total * (vatTax / 100));
  return total.toFixed(2);
}

console.log(orderTotalEs5()); // 97.85

// -----

// ES6
const orderTotalEs6 = () => {
  let total = 0;
  order.forEach(currentValue => 
    Object.keys(currentValue).map(key => 
      total += currentValue[key]));
  total = total + (total * (vatTax / 100))
  return total.toFixed(2);
}

console.log(orderTotalEs6()); // 97.85
```

## Support

<p class="ciu_embed" data-feature="arrow-functions" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
  <a href="http://caniuse.com/#feat=arrow-functions">Can I Use arrow-functions?</a> Data on support for the arrow-functions feature across the major browsers from caniuse.com.
</p>

## Resources 

- [Arrow functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ES6 Arrow Functions: Fat and Concise Syntax in JavaScript - Sitepoint](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)
- [ES6 In Depth: Arrow functions - mozilla hacks](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)