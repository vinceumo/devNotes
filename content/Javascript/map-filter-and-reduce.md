+++
canonical = ""
category = "Javascript"
date = "2019-06-18T23:00:00+00:00"
post_type = "note"
showtableofcontents = true
title = "Map, Filter and Reduce"
type = "post"

+++
## Map

> The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```js
const numbers = [2, 3, 4, 5];

const numbersTimeTwo = numbers.map(x => x / 2);

console.log(numbersTimeTwo); // [ 1, 1.5, 2, 2.5 ]
```

## Reduce

> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```js
const numbers = [2, 3, 4, 5];
const sum = numbers.reduce((acc, x) => acc + x);
console.log(sum); // 14
```

The reduce methods can take an initial value parameter.

```js
const numbers = [2, 3, 4, 5];
const initialValue = 10;
const sumFromInitialValue = numbers.reduce((acc, x) => acc + x, initialValue);
console.log(sumFromInitialValue); // 24
```

## Filter

> The filter() method creates a new array with all elements that pass the test implemented by the provided function. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```js
const numbers = [2, 3, 4, 5];

const oddNumbers = numbers.filter(x => x % 2);

console.log(oddNumbers); // [ 3, 5 ]
```

## Chain `map`, `filter` and `reduce`

In the following example with have a list of candidates with their score out of 100, The passing score is 50. We want to return the sum of the passing score with bonus.

```js
const candidates = [
  {
    name: "Adrian",
    score: 30,
    bonus: 2
  },
  {
    name: "Claude",
    score: 60,
    bonus: 8
  },
  {
    name: "Fred",
    score: 53,
    bonus: 2
  },
  {
    name: "Mark",
    score: 79,
    bonus: 5
  }
];

const totalPassingScore = candidates
  .filter(candidate => candidate.score >= 50) // Exclude Adrian
  .map(candidate => candidate.score + candidate.bonus) // [ 68, 55, 84 ]
  .reduce((acc, total) => acc + total);

console.log(totalPassingScore); // 207
```