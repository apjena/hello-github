---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
author: apjena
entries_layout: grid
author_profile: true
header:
  overlay_image: assets/img/header/headerbanner.jpg
---

<ul>
  <li {% if page.url contains '/getting-started' %}class="active"{% endif %}><a href="/getting-started/">Getting started</a></li>
  <li {% if page.url contains '/without-plugin' %}class="active"{% endif %}><a href="/without-plugins/">Without plugins</a></li>
  <li {% if page.url contains '/about' %}class="active"{% endif %}><a href="/about/">About</a></li>
  <li {% if page.url contains '/blog' %}class="active"{% endif %}><a href="/blog/">Blog</a></li>
</ul>


