--- 
layout: page
title : BSc Physics at Utkal University 
permalink: /bscphys/
subtitle: "<span style='background-color:gray;'>Course details and Questions</span>" 
feature-img: "assets/img/pexels/computer.jpeg"
position: 6
tags: [Page, phy, utkal]
---
# Physics @ Utkal

{% include apjfolio.html %}

Select a class below:

<ol class="fa-ul">
{% for class in site.bscphys %}
<li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
<a href="{{ class.url | relative_url }}">{{ class.title }}</a> - {{ class.subtitle }} </li>
{% endfor %}
</ol>

<div class="list-group">
{% for class in site.bscphys %}
<a class="list-group-item" href="{{ class.url | relative_url }}"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; {{ class.title }}</a> - {{ class.subtitle }}
{% endfor %}
</div>