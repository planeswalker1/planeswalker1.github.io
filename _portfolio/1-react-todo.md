---
layout: project
title: React To-do List · Daniel Munoz
slug: react to-do list
imgSrc: to-do-list-app.PNG
imgAlt: website about a to-do list app
heading: React To Do List
meta: To-do list app
src: https://planeswalker1.github.io/react-todo/
srcCode: https://github.com/planeswalker1/react-todo
tech: React, Materialize
sources: 
  - React
  - Materialize
time: March 2019
---

There where 2 main problems that I had when making this website.

They where:

* How to Manage State
* How to use materialize form validation

To solve the problem of managing state, I learned that I can pass functions as props to a nested component. With this, I can update the container component state from the nested component.

Another problem I was having was, how to use materialize and its features. I read the materialize docs for forms and learned that I have to have some custom JavaScript form validation that either adds a 'valid' css class if the form is valid or 'invalid' if it is not.