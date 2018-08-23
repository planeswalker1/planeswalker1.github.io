---
imgSrc: dry.jpg
imgAlt: an aurora
layout: post
meta: There's a principle in software development called DRY, or Don't Repeat Yourself.
main-class: main--blog
title: The Importance of DRY Code · Daniel Munoz
header: The Importance of DRY Code
---

There's a principle in software development called DRY, or Don't Repeat Yourself. DRY code is easy to change, because you only have to make any change in one place. One way you can DRY up your code is by taking something you do several times and turning it into a loop.

```js
let chips = ['corn', 'pita', 'potato', 'tortilla'];

// non DRY code
console.log(chips[0]);
console.log(chips[1]);
console.log(chips[2]);

// DRY code
for (let i = 0; i < chips.length; i++) {
  console.log(chips[i]);
}
```

Another way is by taking repetitive bits of code and extracting them into a function. 

```js
let drinks = ['lemonade', 'soda', 'tea', 'water'];
let food = ['beans', 'chicken', 'rice'];
//non DRY code
console.log(drinks[0]);
console.log(drinks[1]);
console.log(drinks[2]);
console.log(drinks[3]);

console.log(food[0]);
console.log(food[1]);
console.log(food[2]);

// DRY code
function logItems (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logItems(drinks);
logItems(food);
```

"Easy to change" doesn't just mean clean code - if you can't figure out what a variable is for or what a function does based on its name, then it's harder to change it down the road, when you might not remember exactly how your code works (or when somebody else is trying to change your code).

```js
// non DRY code
let f = ['bananas', 'dates', 'dried figs', 'oranges'];

function hi (banana) {
  for (let i = 0; i < banana.length; i++) {
    console.log(banana[i]);
  }
}

hi(f);

// DRY code
let fruits = ['bananas', 'dates', 'dried figs', 'oranges'];

function logItems (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logItems(fruits);
```

Whenever you finish writing some code, you should always look back to see if there is any way you can DRY it up.