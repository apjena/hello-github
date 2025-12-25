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

<div class="list-group">
{% for class in site.bscphys %}
<a class="list-group-item" href="{{ class.url | relative_url }}"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; {{ class.title }}</a> - {{ class.subtitle }}
{% endfor %}
</div>

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