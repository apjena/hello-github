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

## TEST
<!-- Page Content -->
<div class="container">

<!-- Page Heading -->
    <h1 class="my-4">Page Heading <small>Secondary Text</small> </h1>

   <div class="row">
        <div class="col-lg-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="assets/img/apjfolio/sem1.jpg" alt="SEM1"></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">SEMESTER One</a>
                    </h4>
                    <p class="card-text"> Card one text </p>
                </div>
            </div>
        </div>
        <div class="col-lg-6 mb-4">
            <div class="card h-100">
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
        <div class="col-lg-6 mb-4">
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
        <div class="col-lg-6 mb-4">
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
        <div class="col-lg-6 mb-4">
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
        <div class="col-lg-6 mb-4">
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

   <!-- Pagination -->
    <ul class="pagination justify-content-center">
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
        </li>
    </ul>

</div>
<!-- /.container -->
