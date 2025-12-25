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

<div class="btn-group open">
  <a class="btn btn-primary" href="#"><i class="fa fa-user fa-fw"></i> User</a>
    <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"> <span class="fa fa-caret-down" title="Toggle dropdown menu"></span></a>
    <ul class="dropdown-menu">
        <li><a href="#"><i class="fa fa-pencil fa-fw"></i> Edit</a></li>
        <li><a href="#"><i class="fa fa-trash-o fa-fw"></i> Delete</a></li>
        <li><a href="#"><i class="fa fa-ban fa-fw"></i> Ban</a></li>
        <li class="divider"></li>
        <li><a href="#"><i class="fa fa-unlock"></i> Make admin</a></li>
    </ul>
</div>

<div class="list-group">
  <a class="list-group-item" href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
    <a class="list-group-item" href="#"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; Library</a>
      <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Applications</a>
        <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp; Settings</a>
        </div>