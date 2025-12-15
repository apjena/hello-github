---
layout: home
title: Wave of Thoughts 
nav: true
---

<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>
 {% comment %} 
      <div class="entry">
        {{ post.excerpt }} 
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
   {% endcomment %}
  {% endfor %}
</div>

### Compare the local database return 

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
