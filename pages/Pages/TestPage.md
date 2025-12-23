---
layout: page
title: Incubator 
author: apjena
entries_layout: grid
author_profile: true
hide: true
permalink: /:pages/
header:
  overlay_image: assets/img/header/headerbanner.jpg
---
# Observations so far
* pagination works with `layout: home` only in `index.html` not in `index.md` or any other file.
* $$katex$$ support in kramdown only supports `$$ math $$` not single dollar as in case of many md based note takers! Inline and display modes are detected automatically. 
* `site.portfolio` is identified as a liquid variable by jekyll when _config.yml defines a collections by that name. See [apjfolio]({{site.baseurl}}/apjfolio/) for steps.
* Posts in _posts folder without file name convention, even if, it has layout defined by yaml, is not jekylled.

# And then,
* ipynb parsing and possibilities in academician theme.
* a1 theme to be looked. Not suitably required to be used.
* To see: Linking in markdown note taking apps to work in theme pages folder: seems not possible randomly, The whole folder perhaps has to be uploaded so that jekyll creates all the links!!!

# image 
<svg width="800" height="600" xmlns="http:                       
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="5" dy="5" stdDeviation="3" flood-opacity="0.5"/>
    </filter>
  </defs>
  <rect x="0" y="0" width="800" height="600" fill="#1a1a1a"/>
  <text x="400" y="100" font-size="64" font-family="monospace" fill="                                                                
  <g font-size="24" font-family="monospace" fill="#0f0">
    <text x="100" y="200" transform="rotate(20 100 200)">if (code == 'run') {</text>
    <text x="150" y="250" transform="rotate(-10 150 250)">console.log('Hello World');</text>
    <text x="200" y="300" transform="rotate(5 200 300)">}</text>
    <text x="250" y="350" transform="rotate(-15 250 350)">function build() {</text>
    <text x="300" y="400" transform="rotate(10 300 400)">return 'success';</text>
    <text x="350" y="450" transform="rotate(-5 350 450)">}</text>
  </g>
  <g transform="scale(1, -1) translate(0, -600)">
    <text x="400" y="-500" font-size="64" font-family="monospace" fill="                                          
    <g font-size="24" font-family="monospace" fill="#060">
      <text x="100" y="-400" transform="rotate(20 100 -400)">if (code == 'run') {</text>
      <text x="150" y="-350" transform="rotate(-10 150 -350)">console.log('Hello World');</text>
      <text x="200" y="-300" transform="rotate(5 200 -300)">}</text>
      <text x="250" y="-250" transform="rotate(-15 250 -250)">function build() {</text>
      <text x="300" y="-200" transform="rotate(10 300 -200)">return 'success';</text>
      <text x="350" y="-150" transform="rotate(-5 350 -150)">}</text>
    </g>
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
