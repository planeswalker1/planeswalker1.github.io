---
imgSrc: iceland-mountains-kirkjufell.jpg
imgAlt: Iceland Mountains Kirkjufell
layout: post
meta: Let's briefly note the difference between assigning a class to an HTML tag and assigning an id to an HTML tag.
main-class: main--blog
title:  Class vs Id · Daniel Munoz
header:  Class vs Id
---

Both classes and ids can be targeted by CSS rules (classes with a . and id's with a # symbol). For example, both paragraph tags below are styled the same, though one is referenced by class and the other by id.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Some Exciting Blue Text</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <p class="blue">This text will appear blue.</p>
  <p id="line2">This text will also be blue. </p>
</body>
</html>
```

``` css
/* main.css */
.blue {
  color: blue;
}

#line2 {
  color: blue;
}
```

This will output:

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Some Exciting Blue Text</title>
  <style>
    .intro {
      color: blue;
    }

    #line2 {
      color: blue;
    }
  </style>
</head>
<body>
  <p class="intro">This text will appear blue.</p>
  <p id="line2">This text will also be blue. </p>
</body>
</html>

The important difference is that <strong>ids are unique</strong>, while <strong>classes are not unique</strong>. We can use the same class on multiple elements, while id's must be unique to a single element on the page. Id's may appear to work even when duplicated on the same page, but duplicate id's will lead to inconsistent behavior and difficult-to-find bugs.

If in doubt, use a class.