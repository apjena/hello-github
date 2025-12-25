--- 
layout: page
title: BSc Physics at Utkal University 
bootstrap: true
permalink: /bscphys/
subtitle: "<span style='background-color:rgba(0, 0, 0, 0.5);'>Course details and Questions</span>" 
feature-img: "assets/img/pexels/computer.jpeg"
position: 6
tags: [Page, phy, utkal]
---

# Physics @ Utkal

Select a class below:

<ol class="fa-ul">
{% for class in site.bscphys %}
<li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
<a href="{{ class.url | relative_url }}">{{ class.title }}</a> - {{ class.subtitle }} </li>
{% endfor %}
</ol>

<div class="list-group">
{% for class in site.bscphys %}
<a class="list-group-item" href="{{ class.url | relative_url }}"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; {{ class.title }} - {{ class.subtitle }} </a>
{% endfor %}
</div>

## TEST
<!-- Page Content -->
<div class="container">

   
   <div class="row"> 
   <div class="col-lg-4 mb-4"> <div class="card h-100">
   <a href="#"><img class="card-img-top" src="/assets/img/apjfolio/sem1.jpg" alt="SEM1"></a>
   <div class="card-body">
   <h4 class="card-title"> <a href="#">SEMESTER One</a> </h4>
   <p class="card-text">  
        <div class="list-group">
        {% for class in site.bscphys %}
        <a class="list-group-item" href="{{ class.url | relative_url }}"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; {{ class.title }} - {{ class.subtitle }} </a>
        {% endfor %}
        </div>
    </p>
    </div>
    </div>
    </div>
    <div class="col-lg-3 mb-4"> <div class="card h-100">
    <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a>
    <div class="card-body">
         <h4 class="card-title">
             <a href="#">Project Two</a>
         </h4>
         <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam
           nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non
           magni, voluptates quae, necessitatibus unde temporibus.</p>
     </div>
     </div>
     </div>
        <div class="col-lg-3 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">Project Three</a>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
                        odio, gravida pellentesque urna varius vitae.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">Project Four</a>
                    </h4>
                    <p class="card-text">necessitatibus unde temporibus.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">Project Five</a>
                    </h4>
                    <p class="card-text">Lorem  pellentesque urna varius vitae.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">Project Six</a>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, temporibus.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->

</div>
<!-- /.container -->

{% assign cards = site.bscphys | where: 'group', 'cards' %}
{% for card in cards %}
  <a href="{{ card.url }}">{{ card.title }}</a>
{% endfor %}

