---
imgSrc: git-logo.png
imgAlt: the git text logo
layout: post
meta: Git is a tool that we can use to save all changes and additions to our code on the computer we're working on.
main-class: main--blog
title: Initializing Git · Daniel Munoz
header: Initializing Git
---

Git is a tool that we can use to save all changes and additions to our code on the computer we're working on.

## Goal

Follow along to see how changes are tracked using Git. In this blog we will initialize our <em>friends</em> project directory. In the next blog, we wil practice tracking changes with Git by creating a one-page website that will list our friends. The steps we follow will reflect the daily workflow you might see when using Git.

## Installation

Before continuing, you should make sure you have Git installed. If you don't have it installed, you can download it from the <a href="https://git-scm.com/downloads">Git website</a>.

## Git Name and Email

In order to save code using the Git version control system, Git must have a name and email to stamp every time we take a snapshot of our work.

## Setup

When working on a project, we set a <strong>global</strong> configuration in the terminal:

<p class="title--file">command prompt</p>
```bash
$ git config --global user.name "Full Name"
$ git config --global user.email youremail@email.com
```

This sets the name and email for every save that is made in any directory <em>anywhere</em> on the device. A <strong>directory</strong> is another word for folder. If you are setting this on your personal device you will only have to set this once for it to be set on every project. You can always change the name or email later using the commands above.

## Starting a New Project

If we enter <code class="code">ls</code> in the command prompt, we can see the list of what other files and directories are in our home directory. We need to decide if this is where we want our new project to be stored. Whenever you start a new project, you should create a new project directory.

## Creating a Project Directory

I like to create project directories inside a directory in the Desktop for easy access. Let's change directories from our home directory into our Desktop using the cd command:

<p class="title--file">command prompt</p>
```bash
$ cd Desktop
```

Now, we can add our <em>git-projects</em> directory:

<p class="title--file">command prompt</p>
```bash
$ mkdir git-projects
```

Then, we can add our <em>friends</em> project directory:

<p class="title--file">command prompt</p>
```bash
$ mkdir git-projects/friends
```

Another <code class="code">ls</code> shows that our <em>git-projects</em> directory was created. This is also mirrored by the new folder on the Desktop of our device.

Let's change directories again so that we are now in the <em>friends</em> directory:

<p class="title--file">command prompt</p>
```bash
$ cd git-projects/friends
```

To confirm that we are where we think we are, we can always show our location with a <code class="code">pwd</code>:

<p class="title--file">command prompt</p>
```bash
$ pwd
/home/pc/Desktop/git-projects/friends
```

## Initializing Git

The next step before we create a single file for our <em>friends</em> website is to create a Git directory within our project directory that will track everything we add, modify and delete.

We do this by initializing a new Git repository:

<p class="title--file">command prompt</p>
```bash
$ git init
Initialized empty Git repository in /home/pc/Desktop/git-projects/friends/.git/
```

Now if we do an <code class="code">ls</code>, we might expect to see the new directory. But where is it? Directories beginning with a <code class="code">.</code> are called <strong>hidden</strong> files and do not appear when you list the files with an <code class="code">ls</code>. To see hidden files, we have to add a modifier to our <code class="code">ls</code> command, <code class="code">-a</code> which tells our terminal to list all:

<p class="title--file">command prompt</p>
```bash
$ ls -a
.git
```

On Windows you can use

<p class="title--file">command prompt</p>
```bash
> ls -force
```

The .git directory is a directory like any other. Let's <code class="code">cd</code> into it and <code class="code">ls</code> it's contents.

<p class="title--file">command prompt</p>
```bash
$ cd .git
$ ls
branches  config  description  HEAD  hooks  info  objects  refs
```

We aren't going to spend ANY time in this directory. The work done here to track our files is going to happen automatically. The reason the directory is hidden is to help ensure that we stay out of it to avoid making any changes to the very important work that Git will be doing for us. Now, as we add, update and delete files, Git will be in the background, keeping track of every change in our project directory.

So, let's return to the top level of our project directory by changing directories again, moving up one level:

<p class="title--file">command prompt</p>
```bash
$ cd ..
```

## Conclusion

Now, we are ready to track changes with Git. In the next blog, we will add the HTML page that will list our friends.