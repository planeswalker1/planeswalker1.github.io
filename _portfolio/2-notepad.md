---
layout: project
title: Notepad · Daniel Munoz
slug: notepad
imgSrc: notepad-app.PNG
imgAlt: website about a notepad app
heading: Notepad
meta: Notepad app to create and save notes
src: http://notepad-frontend.herokuapp.com/
srcCode: https://github.com/planeswalker1/notepad 
tech: Express, Pug, Stylus, MongoDB
sources: 
  - Express
  - Pug
  - Stylus
  - Grunt
  - MongoDB
time: February 2019
---

There where 4 main problems that I had when making this website.

They where:

* How to organize my code
* How to create a rest api
* How to send requests to a server
* How to authenticate users

Before I attempted to make this app, I made a plan on what I wanted the api and website to to look like. I learned how I should break up my JavaScript files and the importance of a configuration file to store all information that could change.

I learned to answer these questions before making any api: what are the basic objects, how do I organize the endpoints using REST design pattern, what data should I store with each object, what functionality am I looking for, and what are some potential difficulties. For my api I wanted to use MongoDB since it was easier for me to learn and the data that I wanted to store where all contained in one document and no two documents had to share data. 

Another problem I was having was, how to send requests to servers. I learned about fetch to make requests to my front end server. I also learned how to use request, that is like fetch, to make requests between a server to my api since I couldnt use fetch.

The main problem I had was how to authenticate users. I used Jwts which stand for jsonwebtokens. With jwts, I learned how when a user attempts to login, I had to have some functionality that checks their inputted login information with the one stored on a server. If it is correct, I create and store a token (jwt) that contains some information like their id on the server so that every time they request a page, the server can authenticate them with that token and authorize them to access their content. Else, I display a error message that says the inputted information is incorrect.

This project is by far one of my best works since I had to use both front-end and back-end techonologies to create a fully functional website that tries to solve a problem I was having. I wanted to make notes and not worry about losing them if I lose access to the device that had it.