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

<ul>
{% for class in site.bscphys %}
  <li>
    <a href="{{ class.url | relative_url }}">{{ class.title }}</a> - {{ class.subtitle }}
    </li>
{% endfor %}
</ul>
