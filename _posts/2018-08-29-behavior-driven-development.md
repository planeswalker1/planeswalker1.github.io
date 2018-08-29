---
imgSrc: hintersee.jpg
imgAlt: Hintersee Bergsee Mountains
layout: post
meta: behavior-driven devoplement (or BDD) is a process of taking a problem we want to solve or a concept we want to understand and turn it into a set of specific programming tasks.
main-class: main--blog
title:  Behavior-Driven Development · Daniel Munoz
header:  Behavior-Driven Development
---

behavior-driven devoplement (or BDD) is a process of taking a problem we want to solve or a concept we want to understand and turn it into a set of specific programming tasks.

Rather than thinking about the code first, the focus begins on the behaviors that we want to see in an application. We identify what the program should do before determining how to make it do it.

To practice this, let's imagine that we have been hired by a person to make an addition calculator. He would like to determine the sum of any 2 given numbers. Here's a mockup example of what he'd like:

![Photo of an addition calculator website]({{ site.baseurl}}/images/example.png "Addition calculator website")

Before we think about the programmatic elements, what should an addition calculator program do? At its most basic, it will need to be able to take two numbers from the user and return the sum. Our program will only be able to provide an answer once it successfully evaluates what the user provides are numbers. Let's think of all of the possibilities we might get from a user and what the correct response should be for them.

## Specifications
There are 2 criteria that must be considered to determine if we can add 2 inputs:

* Input a is a number;
* Input b is a number;

Therefore, each time a user offers 2 numbers to add, we will need to test the value against each of the addition calculator rules.

In BDD, our next step is to generate examples of these rules one-by-one. These examples are also known as specifications or specs. We can create a table that helps us sort out the details of the specifications for each rule using the following pieces of information:
* The behavior that we'll need to write code to handle
* a sample of input that would demonstrate behavior
* the exprected output we'd get when the code is working correctly

<table>
  <thead>
    <tr>
      <th>Behavior <br> our program should handle: </th>
      <th>Input <br> Example When it receives: </th>
      <th>Output <br> Example It should return: </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2 numbers</td>
      <td>2, 3</td>
      <td>return 5</td>
    </tr>
    <tr>
      <td>1 number 1 string</td>
      <td>2, 'banana'</td>
      <td>return an error</td>
    </tr>
    <tr>
      <td>2 strings</td>
      <td>'banana', 'orange'</td>
      <td>return an error</td>
    </tr>
    <tr>
      <td>0 inputs</td>
      <td></td>
      <td>return an error</td>
    </tr>
  </tbody>
</table>

Although there are many other considerations for our final application (display, user interaction, form building, etc), we will not worry about those until we have the core functionality in place. If we think of any additional functionality we need, we can add behaviors to our specification list as we go.

When you code using BDD, it is good to get into the habit of making a note of all behaviors as you think of them, but staying focused on one task at a time.