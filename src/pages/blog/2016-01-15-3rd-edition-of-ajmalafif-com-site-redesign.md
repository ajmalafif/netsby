---
templateKey: blog-post
title: '3rd edition of ajmalafif.com — site redesign'
date: 2015-08-12T15:04:10.000Z
description: >-
  3rd revision of my personal website redesign I did back in 2015
hero:
    - alt: Tsuwave Logo
      image: '/img/tsuwave@3x.png' 
tags:
  - wordpress
  - javascript
---

It took me few weeks staying up late at night to finish up the 3rd edition of my personal site. After tinkering with few static generators (assemble.io, Harp, Ghost), I finally settled down with Jekyll. Also, this is the first time I mocked up my site before I started with coding it. I uploaded all the screenshots on [Dribbble](https://dribbble.com/shots/2439831-Personal-website).

## Why redesign?

My previous site (now moved to [www.ajmalafif.my](http://www.ajmalafif.my)) has a video autoplayed in the background and that doesn't work on mobile devices. That bothers me a lot so I thought maybe it's a good reason to redesign my site.

I found that I'm more motivated if I have set of goals to achieve, especially the ones that I haven't done before. So I came up with these constraints and work within them:

1. Focus on the content, work and readability.
2. 100 out of 100 score on Google Page Insights.
3. 100% free setup with Github Pages (and CloudFlare).
4. Automated deployment without having to compile blog locally and push it manually.

> _I am going to have separate posts specifically focus on point number 2 (get a score of 100 on Page Insights) and number 3 (100% free setup with Github Pages & CloudFlare). I'll also explain why there's CloudFlare in the mix for my setup._

## Process

At first, I started out using this [template by shakyShane](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync) from github, and then ended up changing and adding some stuffs for both development (check out the gulpfile.js) and production (blog directly from Prose.io without havin to compile locally and push to Github). And then from there, I list down all the features and todos in my [README](https://github.com/ajmalafif/ajmalafif.com/blob/master/README.md) file.

Every night I will try to tackle one by one till I get them all checked. I started out by setting up the `gulpfile.js` and make sure my setup always honor the constraints I've set for myself (100 out of 100 for Google Page Insights). I recalled it was very tedious process but in the end, very rewarding. I've learned a lot just by redesign my own site, can you imagine!

## Result

The site is now live at [www.ajmalafif.com](http://www.ajmalafif.com). I've also decided to make the [source code public](https://github.com/ajmalafif/ajmalafif.com), so do what you will; clone it, star it or help extend anything you find fit (like `babelify` for example :p).

Let me know what you think of it, any feedback or comment is greatly appreciated.
