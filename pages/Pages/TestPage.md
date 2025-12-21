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
* `site.portfolio` is identified as a liquid variable by jekyll when _config.yml defines a collections by that name.
* Posts in _posts folder without file name convention, even if, it has layout defined by yaml, is not jekylled.

# And then,
* ipynb parsing and possibilities in academician theme.
* a1 theme to be looked. Not suitably required to be used.

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
