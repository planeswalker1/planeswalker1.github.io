---
imgSrc: ocean-horizon.jpg
imgAlt: the ocean horizon
layout: post
meta: Numbers, strings, booleans, undefined, null are 5 out of the 6 primitives, or basic data types. The other one is symbol, which represents an identifier for object properties.
main-class: main--blog
title: JavaScript Primitives · Daniel Munoz
header: JavaScript Primitives
---

<span class="code">Numbers</span>, <span class="code">strings</span>, <span class="code">booleans</span>, <span class="code">undefined</span>, and <span class="code">null</span> are 5 out of the 6 primitives, or basic data types. The other one is <span class="code">symbol</span>, which represents an identifier for object properties. Don't worry about <span class="code">symbol</span> for now. A primitive data value is a single simple data value with no additional properties and methods.

<!-- ========================= -->
<!-- The Concept of Data Types -->
<!-- ========================= -->

## The Concept of Data Types
In programming, data types is an important concept. To be able to operate on variables, it is important to know something about the type. Without primitives, a computer can not safely solve this:

<p class="title--file">js</p>
```js
  let y = 22 + ' Daniel';
  console.log(y);
  // would log '22 Daniel'
```

### JavaScript Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```js
  let x;           // x is undefined
  x = 5;           // x is now a number
  x = 'Dan';      // x is now a string
```

<!-- ========== -->
<!-- Data Types -->
<!-- ========== -->

## Data Types

<!-- ====== -->
<!-- Number -->
<!-- ====== -->

### Number

the <span class="code">number</span> type represents numbers.

* <span class="code code--blue">21</span>
* <span class="code code--blue">4.25</span>
* <span class="code code--blue">0</span>
* <span class="code code--blue">-100</span>
* <span class="code code--blue">NaN</span> (means 'not a number', but is considered a number.)
* <span class="code code--blue">Infinity</span>
* <span class="code code--blue">-Infinity</span>
* <span class="code code--blue">let favoriteNumber = 9;</span>

You can use certain methods on numbers. A method is a function which is a property of an object.

<p class="title--file">js</p>
```js
  console.log(3.14159265359.toFixed(2));
  // would log 3.14
```

<!-- ====== -->
<!-- String -->
<!-- ====== -->

### String

the <span class="code">string</span> type represents text. It is contained in 'single' or "double" quotes. You can use quotes inside a string, as long as they don't match the quotes surrounding the string.

* <span class="code code--red">'Hello, world!'</span>
* <span class="code code--red">'Lanky said, "Hello There!"'</span>
* <span class="code code--red">"42"</span>
* <span class="code code--red">let greeting = 'How are you doing?';</span>

You can use certain methods on strings.

<p class="title--file">js</p>
```js
  console.log('Daniel'.toUpperCase());
  // would log 'DANIEL'

  console.log('Daniel'.charAt(2));
  // would log 'n'

  console.log('Daniel'.toUpperCase().charAt(2));
  // would log 'N'
```

<!-- ======= -->
<!-- Boolean -->
<!-- ======= -->

### Boolean

The <span class="code">Boolean</span> datatype can only hold 2 possible values:

* <span class="code code--red">true</span>
* <span class="code code--red">false</span>

<p class="title--file">js</p>
```js
  console.log(10 > 1);
  // would log true

  console.log(1 > 10);
  // would log false

  console.log('Daniel'.charAt(2) === 'a');
  // would log false

  let isNiceDay = true;
  console.log(isNiceDay);
  // would log true
```

<!-- ========= -->
<!-- Undefined -->
<!-- ========= -->

### Undefined
When declaring a variable without giving it a value (<span class="code code--blue">let number;</span>), JavaScript creates the variable without a value, hence <span class="code">undefined</span>. Even when declaring a variable and assigning it a value at the same time (<span class="code code--blue">let favoriteNumber = 9;</span>), JavaScript actually creates the variable initially without a value, temporarily giving it a value of <span class="code">undefined</span>, before then assigning it the value to the right of the equals sign. This is kind of a subtle point, so don't worry too much about it at the moment.

Additionally, there are some functions and methods that do not return any value, in which case the return value is actually <span class="code">undefined</span>.

<!-- ==== -->
<!-- Null -->
<!-- ==== -->

### Null

The <span class="code">Null</span> datatype is 'nothing'. It is supposed to be something that doesn't exist. It's data type is an object. You can consider it a bug. It should be null.

You can empty a variable by setting it to null:

<p class="title--file">js</p>
```js
  let number = 22;

  number = null
  // Now number is null, but type is still an object

  console.log(number);
  // would log null

  let Daniel = {
    firstName: 'Daniel',
    age: 22,
    eyeColor: 'black'
    };

  person = null;
  // Now person is null, but type is still an object
```

<!-- =================== -->
<!-- Data Type Detection -->
<!-- =================== -->

## Data Type Detection

It's important to understand the difference between the number <span class="code code--blue">5</span> and the string <span class="code code--red">"5"</span>. To the computer, they are two entirely different things, as shown in this example:

<p class="title--file">js</p>
```js
  let number = 56;
  let otherNumber = 2;

  let string = '56';
  let otherString = '2';

  console.log(number + otherNumber);
  // would log 58

  console.log(string + otherString);
  // would log '562'
```

When we added <span class="code code--blue">56</span> to <span class="code code--blue">2</span> we got <span class="code code--blue">58</span>, but when we added <span class="code code--red">'56'</span> to <span class="code code--red">'2'</span> it concatenated, link (things) together in a chain or series, the two strings together.

Likewise, the boolean <span class="code code--blue">true</span> is not the same as the string <span class="code code--red">'true'</span>.

In the example above, the <span class="code code--blue">+</span> operator works on both <span class="code">numbers</span> and <span class="code">strings</span> - just differently. Usually methods will only work on a specific data type. For example, <span class="code code--blue">3.14159.toFixed(2);</span> works just fine, but trying to do <span class="code code--blue">'3.14159'.toFixed(2);</span> results in an <span class="code code--red">error</span> because the <span class="code code--blue">toFixed</span> method doesn't work on a <span class="code">string</span>. Likewise, <span class="code code--blue">'Hello'.charAt(2);</span> works, but <span class="code code--blue">314159.charAt(2);</span> does not.

We can check the data type of a variable or value using <span class="code code--blue">typeof</span> as follows:

<p class="title--file">js</p>
```js
  console.log(typeof 5);
  // would log 'number'

  console.log(typeof '5');
  // would log 'string'

  console.log(typeof true);
  // would log 'boolean'

  console.log(typeof 'true');
  // would log 'string'

  let greeting = 'How are you doing?';
  console.log(typeof greeting);
  // would log 'string'
```

<!-- ==================== -->
<!-- Data Type Conversion -->
<!-- ==================== -->

## Data Type Conversion

Often input from a web browser will come in as a <span class="code">string</span> and we will need to convert it to a <span class="code">number</span> before working with it.

We can convert a <span class="code">string</span> to a <span class="code">number</span> by passing a <span class="code">string</span> to the <span class="code code--blue">Number()</span> function:

<p class="title--file">js</p>
```js
  let inputAge = '22';
  console.log(inputAge);
  // would log '22'
  console.log(typeof inputAge);
  // would log 'string'

  let myAge = Number(inputAge);
  console.log(myAge);
  // would log 22
  console.log(typeof myAge);
  // would log 'number'
```

Note that if you try to use <span class="code code--blue">Number()</span> to convert a <span class="code">string</span> not actually containing a <span class="code code--blue">number</span>, the result is the <span class="code">number</span> <span class="code code--blue">NaN</span>.

<p class="title--file">js</p>
```js
  let name = 'Daniel';
  let nameNumber = Number(name);

  console.log(nameNumber);
  // would log NaN
```

If you need to go the other way around, you can convert a <span class="code">number</span> to a <span class="code">string</span> by calling the <span class="code code--blue">String</span> function on the <span class="code">number</span>:

<p class="title--file">js</p>
```js
  let number = 22;
  console.log(number);
  // would log 22
  console.log(typeof number);
  // would log 'number'

  let stringNumber = String(number);
  console.log(stringNumber);
  // would log '22'
  console.log(typeof stringNumber);
  // would log 'string'
```

<!-- ========== -->
<!-- Conclusion -->
<!-- ========== -->

## Conclusion

<span class="code">Numbers</span>, <span class="code">strings</span>, <span class="code">booleans</span>, <span class="code">undefined</span>, <span class="code">null</span>, and <span class="code">symbol</span> are the primitives, or basic data types. Without primitives, a computer can not safely solve problems.