---
layout: page
title: Waves of Thoughts 
nav: false
hide: false
author: apjena
entries_layout: grid
author_profile: true
header:
  overlay_image: assets/img/header/headerbanner.jpg
---

<ul class="fa-ul">
  <li {% if page.url contains '/getting-started' %}class="active"{% endif %}><a href="/getting-started/">Getting started</a></li>
  <li {% if page.url contains '/without-plugin' %}class="active"{% endif %}><a href="/without-plugins/">Without plugins</a></li>
  <li {% if page.url contains '/about' %}class="active"{% endif %}><a href="/about/">About</a></li>
  <li {% if page.url contains '/blog' %}class="active"{% endif %}><a href="/blog/">Blog</a></li>
</ul>
---

# Hello World!!!
To start publishing, please see [the manual]({{ site.baseurl }}/manual/).

---
## All the Pages.

<ul class="fa-ul" >
{% for item in site.pages %}
  <li>
    <span><i class="fa-solid fa-check-square"></i></span><a href="{{ site.baseurl }}{{ item.url }}"> {{ item.title }}</a>
    {% if item.author %}
      by {{ item.author }}
    {% endif %}
  </li>
{% endfor %}
</ul>



{% for item in site.pages %}
* [{{ item.title }}]({{ site.baseurl }}{{ item.url }})
 {% if item.author %} by {{ item.author }}{% endif %} 
  {% endfor %}
~      
  
---
## List of Posts.
{% for item in site.posts %}
* [{{ item.title }}]({{ site.baseurl }}{{ item.url }})
 {% if item.author %} by {{ item.author }}{% endif %}{% endfor %}
---
---

## HTML canvas drawings:
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
Your browser does not support the HTML canvas element.
</canvas>

<script>
const canvas = document.getElementById("myCanvas"); // Step 1: Find the canvas element
const ctx = canvas.getContext("2d");              // Step 2: Create a 2D drawing object
ctx.fillStyle = "#FF0000";                        // Step 3: Set drawing style
ctx.fillRect(10, 10, 150, 75);                    // Step 3: Draw a filled rectangle
</script>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
  Sorry, your browser does not support inline SVG.
</svg>

<marquee behavior="scroll" direction="left" scrollamount="3" onmouseover="this.stop()" onmouseout="this.start()">
  Your rolling text message goes here! <a href="#">Link</a> | More Text Here...
</marquee>
