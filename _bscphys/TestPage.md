---
layout: post
title: Incubator 
author: apjena
toc: true
entries_layout: grid
author_profile: true
hide: true
header:
  overlay_image: assets/img/header/headerbanner.jpg
bootstrap: true
group: semester1
---

# TOC⬇️🟠 not working by default!!!
  {:toc} 

# Observations so far
* pagination works with `layout: home` only in `index.html` not in `index.md` or any other file.
* $$katex$$ support in kramdown only supports `$$ math $$` not single dollar as in case of many md based note takers! Inline and display modes are detected automatically. 
* `site.portfolio` is identified as a liquid variable by jekyll when _config.yml defines a collections by that name. See [apjfolio]({{site.baseurl}}/apjfolio/) for steps.
* Posts in _posts folder without file name convention, even if, it has layout defined by yaml, is not jekylled.
* `bootstrap: true` is to be enabled on the used page, not in config.

# And then,
* ipynb parsing and possibilities in academician theme.
* a1 theme to be looked. Not suitably required to be used.
* To see: Linking in markdown note taking apps to work in theme pages folder: seems not possible randomly, The whole folder perhaps has to be uploaded so that jekyll creates all the links!!!
* Bootstrap including JQuerry and Popper js, still dropdown menu not working! So much overloading for nothing.
    * Gemini: Correct Order for these three libraries: jQuery, Popper.js, Bootstrap JS.
    * Loading in `_includes/default/head.liquid` ... And Works..

# Typical Jekyll Dir str:
* `_includes/`: Contains reusable snippets of code or content (e.g., a site's navigation bar or a footer) that can be embedded into layouts or pages using Liquid's include tag.
* `_layouts/`: Houses the HTML "shells" or templates that define the look and feel of your pages and posts. Content is injected into these layouts using the `content` within double braces `\{\{` Liquid tag.
* `_posts/`: This is where your blog posts live. Files must follow the strict YYYY-MM-DD-title.md naming convention to be processed correctly.
* `_sass/`: Contains your Sass/SCSS files, which are compiled into a single main CSS file for styling your site.
* `_data/`: Allows you to store extra site data in YAML, JSON, or CSV formats. This is useful for structured content like navigation links or lists of projects.
* `_site/`: This directory is where Jekyll outputs the final, generated static HTML files. This folder is generated automatically and should not be edited manually.
* `assets/`: A standard location for static assets such as images, compiled CSS, JavaScript files, and fonts. Subfolders (css/, images/) help keep things organized.
* `index.md (or index.html)`: The main homepage for your site, located at the root directory.
* `_config.yml`: The main configuration file for your entire Jekyll site, where you can define site-wide variables, plugins, and settings.
* `Gemfile and Gemfile.lock`: These files manage the Ruby gems (including the jekyll gem and any plugins) required to build your site.
* Excepting the system files and folders listed above, Jekyll ignores any other file or folder starting with an underscore. Jekyll works by treating everything else as static content or pages to be rendered into the _site directory.

# Test waves
<hl class="load"> 
<span>P</span><span>U</span><span>L</span><span>S</span><span>E</span><span>-</span>
<span>W</span><span>A</span><span>V</span><span>E</span><span>S</span> 
</hl>

# expand collapse
* <details>
  <summary>Energy Stored in an Inductor</summary>
  The energy \(U\) stored in an inductor is given by $$U=\frac{1}{2}LI^{2}$$. $$U=\frac{1}{2}\times 0.5\times (2)^{2}=\mathbf{1.0}\text{\ J}$$
</details>

* <details>
  <summary>Lorentz Force Laws</summary>
  The Lorentz Force is the total force \(\mathbf{F}\) exerted on a charge \(q\) moving with velocity \(\mathbf{v}\) in the presence of an electric field \(\mathbf{E}\) and a magnetic field \(\mathbf{B}\):\(\mathbf{F}=q(\mathbf{E}+\mathbf{v}\times \mathbf{B})\) 
   * Electric Component (\(q\mathbf{E}\)): The force acts in the direction of the electric field.
   * Magnetic Component (\(q\mathbf{v}\times \mathbf{B}\)): The force is perpendicular to both the velocity and the magnetic field. 
</details>


# SVG INKSCAPE EXPORTED IMAGE

<svg
   width="646"
   height="220"
   viewBox="0 0 646 220"
   version="1.1"
   id="svg1"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <linearGradient
       id="linearGradient6">
      <stop
         style="stop-color:#8ee971;stop-opacity:1;"
         offset="0.26029661"
         id="stop7" />
      <stop
         style="stop-color:#3cb7c7;stop-opacity:0;"
         offset="0.86558992"
         id="stop8" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient6"
       id="linearGradient8"
       x1="342.24005"
       y1="-56.361618"
       x2="228.38586"
       y2="211.86205"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-40.087245,1.7317835)" />
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter27"
       x="-0.066152453"
       y="-0.29851014"
       width="1.1323049"
       height="1.5970203">
      <feGaussianBlur
         result="result1"
         in="SourceAlpha"
         stdDeviation="2.2"
         id="feGaussianBlur25" />
      <feSpecularLighting
         result="result0"
         specularExponent="18.10000038"
         specularConstant="2"
         surfaceScale="5"
         id="feSpecularLighting25">
        <feDistantLight
           azimuth="225"
           elevation="24"
           id="feDistantLight25" />
      </feSpecularLighting>
      <feComposite
         result="result6"
         operator="in"
         in2="SourceAlpha"
         id="feComposite25" />
      <feMorphology
         radius="5.7"
         operator="dilate"
         id="feMorphology25" />
      <feGaussianBlur
         result="result11"
         stdDeviation="5.7"
         id="feGaussianBlur26" />
      <feDiffuseLighting
         surfaceScale="5"
         result="result3"
         diffuseConstant="2"
         in="result1"
         id="feDiffuseLighting26">
        <feDistantLight
           elevation="25"
           azimuth="225"
           id="feDistantLight26" />
      </feDiffuseLighting>
      <feBlend
         result="result7"
         mode="multiply"
         in="result3"
         in2="SourceGraphic"
         id="feBlend26" />
      <feComposite
         in="result7"
         operator="in"
         in2="SourceAlpha"
         result="result91"
         id="feComposite26" />
      <feBlend
         result="result9"
         mode="lighten"
         in="result6"
         in2="result91"
         id="feBlend27" />
      <feComposite
         in="result11"
         in2="result9"
         id="feComposite27" />
    </filter>
  </defs>
  <g
     id="layer1">
    <ellipse
       style="fill:#800000;stroke-width:7.30268"
       id="path1"
       cx="203.35175"
       cy="97.528412"
       rx="144.53308"
       ry="71.889496" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:110.737px;line-height:1.25;font-family:MnSymbol;-inkscape-font-specification:'MnSymbol, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;letter-spacing:0px;word-spacing:0px;fill:url(#linearGradient8);stroke-width:1.48309;filter:url(#filter27)"
       x="95.20623"
       y="116.62867"
       id="text3"
       transform="scale(0.87785183,1.1391444)"><tspan
         id="tspan3"
         x="95.20623"
         y="116.62867"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:110.737px;font-family:MnSymbol;-inkscape-font-specification:'MnSymbol, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:url(#linearGradient8);fill-opacity:1;stroke-width:1.48309">Sem 1</tspan></text>
  </g>
</svg>

# Bootstrap testing.
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
  </ul>
</div>
### test2 

<div class="container">
  <div class="row">
    <!-- This column spans half (6/12) of the row width on medium screens and up -->
    <div class="col-md-6">
      Content goes here.  
    </div>
    <!-- This column also spans half (6/12) of the row width on medium screens and up -->
    <div class="col-md-6">
      More content
    </div>
  </div>
</div>

### test3
<div class="btn-group open">
  <a class="btn btn-primary" href="#"><i class="icon-user"></i> User</a>
  <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
    <span class="icon-caret-down"></span></a>
  <ul class="dropdown-menu">
    <li><a href="#"><i class="icon-fixed-width icon-pencil"></i> Edit</a></li>
    <li><a href="#"><i class="icon-fixed-width icon-trash"></i> Delete</a></li>
    <li><a href="#"><i class="icon-fixed-width icon-ban-circle"></i> Ban</a></li>
    <li class="divider"></li>
    <li><a href="#"><i class="i"></i> Make admin</a></li>
  </ul>
</div>

<a class="btn" href="#">
  <i class="icon-repeat"></i> Reload</a>
<a class="btn btn-success" href="#">
  <i class="icon-shopping-cart icon-large"></i> Checkout</a>
<a class="btn btn-large btn-primary" href="#">
  <i class="icon-comment"></i> Comment</a>
<a class="btn btn-small btn-info" href="#">
  <i class="icon-info-sign"></i> Info</a>
<a class="btn btn-danger" href="#">
  <i class="icon-trash icon-large"></i> Delete</a>
<a class="btn btn-small" href="#">
  <i class="icon-cog"></i> Settings</a>
<a class="btn btn-large btn-danger" href="#">
  <i class="icon-flag icon-2x pull-left"></i> Font Awesome<br>Version 3.2.1</a>
<a class="btn btn-primary" href="#">
  <i class="icon-refresh icon-spin"></i> Synchronizing Content...</a>


<nav class="main-nav">
  <ul>
    <li><a href="#">Home</a></li>
    <li class="dropdown">
      <a href="#" class="dropbtn">Class Subjects ▼</a>
      <div class="dropdown-content">
        <!-- Add your columns and subject links here -->
        <div class="menu-col">
          <h3>Category Title</h3>
          <a href="#">Subject Link</a>
          </div>
        </div>
    </li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

## SEE
<div class="bootstrap-iso">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#">Home</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Settings</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Profile</a>
        <a class="dropdown-item" href="#">Security</a>
      </div>
    </li>
  </ul>
</div>

#SEE 2
<div class="bootstrap-iso"> <!-- If using isolation CSS -->
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button 1
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <a class="dropdown-item" href="#">Action11</a>
      <a class="dropdown-item" href="#">Action12</a>
      <a class="dropdown-item" href="#">Action13</a>
      <a class="dropdown-item" href="#">Action14</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
      Dropdown button 2
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action21</a>
      <a class="dropdown-item" href="#">Action22</a>
      <a class="dropdown-item" href="#">Action23</a>
      <a class="dropdown-item" href="#">Action24</a>
    </div>
  </div>
</div>
