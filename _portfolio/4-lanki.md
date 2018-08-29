---
layout: project
title: Lanki · Daniel Munoz
imgSrc: lanki.jpg
imgAlt: a website about an eccomerce business.
heading: Lanki
meta: A website about an eccomerce business.
src: https://planeswalker1.github.io/lanki/
tech: HTML, CSS, javaScript, jQuery
jekyll: true
javaScript: true
library: jQuery
time: May 2018
---

There where 3 main problems that I had when making this website.

They where:

* How to resize a fixed navbar
* How to implement a hamburger menu
* How to implement animated link scrolling

I added a media query to set a max width to the navbar, and the site to prevent it from overflowing on large screens.

I read a blog and learned how to make a hamburger menu navigation. I made it by adding a media query to hide the normal nav and show a responsive nav. I also added functionality to the responsive nav by adding an event listener on the hamburger menu to show a hidden layout with the links when you click on it.

I searched for ways to implement animation scrolling and I decided to use jQuery.

How it works:
* Select all links with hashes
* Check and remove links that don't have an href
* Check which element to scroll to
* Prevent default link behavior if there is a scroll animation
* Animate scroll by using offset
* Change focus after animation
