---
title: "Understanding Big O Time Complexity"
description: "Big O notation is a way to describe the performance of an algorithm. It's a way to compare the efficiency of different algorithms."
pubDate: "Oct 27 2022"
---

Big O notation is a way to describe the performance of an algorithm. It's a way to compare the efficiency of different algorithms.

## What is Big O?

Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. It's a way to compare the efficiency of different algorithms.

Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk).

## Why is it useful?

Big O is useful for comparing different solutions to a problem. It allows us to talk about how efficient an algorithm is.

For example, say we were comparing two algorithms for finding the largest number in a list. One algorithm might look at every item in the list. The other might only look at half the items, then half of the remaining items, then half of those, and so on.

The first algorithm has to look at every item in the list, so it's complexity is O(n). The second algorithm only has to look at half the items, then half of the remaining items, then half of those, and so on. It's complexity is O(log n).

The second algorithm is more efficient, because no matter how large the list is, it will always be less steps than the first algorithm.

## What are the complexities?

Generate a markdown table of the Big O complexities and their descriptions.

| Complexity | Description |
| ---------- | ----------- |
| O(1)       | Constant    |
| O(log n)   | Logarithmic |
| O(n)       | Linear      |
| O(n log n) | Log Linear  |
| O(n^2)     | Quadratic   |
| O(2^n)     | Exponential |
| O(n!)      | Factorial   |

![Big O Complexity Chart](https://he-s3.s3.amazonaws.com/media/uploads/ece920b.png)
_Source: [Hackerearth.com](https://www.hackerearth.com/practice/notes/big-o-cheatsheet-series-data-structures-and-algorithms-with-thier-complexities-1/)_

## Examples

### O(1)

This function will always return the first item in the array:

```js
function logFirstItem(items) {
  console.log(items[0]);
}
```

This function will always return the first item in the array, no matter how many items are in the array. It's complexity is O(1).

### O(n)

This function will return the last item in the array:

```js
function logLastItem(items) {
  console.log(items[items.length - 1]);
}
```

This function will return the last item in the array, but it has to look at every item in the array to do so. It's complexity is O(n).

### O(n^2)

This function prints all pairs of array items:

```js
function logAllPairsOfItems(items) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      console.log(items[i], items[j]);
    }
  }
}
```

This function prints all pairs of array items. It has to look at every item in the array, and every item in the array again. It's complexity is O(n^2).

## Resources

- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [Big O Notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
