---
templateKey: blog-post
title: 'Create custom page template in Roots'
date: 2013-04-10T15:04:10.000Z
description: >-
  I was trying to create custom page template in Roots  
  theme (now called Sage) for WordPress theme
  development.
hero: '/img/tsuwave@3x.png'
tags:
  - wordpress
  - javascript
---
First create a file inside `wp-content/themes/roots` with this convention `page-filename.php`. So in my case, I named it `page-ajmalafif.php`.

Inside the file, you can customize what to include in it, by default (taken from `page-custom.php`) it'll be;

```php
<?php
/*
Template Name: Ajmal Afif's
*/
?>

<?php get_template_part('templates/page', 'header'); ?>
<?php get_template_part('templates/content', 'page'); ?>
```

For the sake of simplicity, let's settle with that for now and we tweak it later.