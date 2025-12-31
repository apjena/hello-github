---
layout: page
title: "Waves of Thoughts" #About
permalink: /about/
feature-img: "assets/img/pexels/travel.jpeg"
tags: [core]
---
<marquee behavior="scroll" direction="left" scrollamount="3" onmouseover="this.stop()" onmouseout="this.start()">
  The page is maintained by A. P. Jena, serving to needs that include *some* educational needs of *some* students! | Go <a href="#">here</a> for more details...
</marquee>

This webpage is designed to deliver curated content in a controlled, streamlined, and user-friendly manner for a select audience, prioritizing minimal effort and convenience over mere technical possibility.

# All the Pages.

<ul class="fa-ul" >
{% for item in site.html_pages %}
  <li>
    <span><i class="fa-solid fa-feather"></i></span><a href="{{ site.baseurl }}{{ item.url }}"> {{ item.title }}</a> {% if item.author %}by {{ item.author }} {% endif %}
  </li>
{% endfor %}
</ul>


# All the Posts... Available in home, though.
{% for item in site.posts %}
* [{{ item.title }}]({{ site.baseurl }}{{ item.url }})
 {% if item.author %} by {{ item.author }}{% endif %}{% endfor %}

---

##### Technical Details:

** After trying one of the free and most popular platforms for blogging, realised that different methods are suitable for different needs for convenience. Mere possibility is not always the absolute requirement.

** This site utilizes the efforts of [Type on Strap](https://github.com/sylhare/Type-on-Strap) theme on GitHub platform.
** Type on Strap is based on Type Theme, a free and open-source theme for 
[Jekyll](http://jekyllrb.com/), licensed under the MIT License.

 
