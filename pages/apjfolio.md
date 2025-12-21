--- 
layout: page
title : Apjfolio 
permalink: /apjfolio/
subtitle: "<span style='background-color:#ffcb2e;'>Projects  being worked on</span>" 
feature-img: "assets/img/pexels/computer.jpeg"
position: 5
tags: [Page]
---
## Test apj Portfolio forked by name apjfolio
Can it be renamed/replicated to something else, say questions/cbcs policies etc. to group all Semester wise questions?
Can we have another stuff like this with other name say study materials, and have it's own folios. with that name grouped in that folder _studyMaterials like existing example _portfolio. 

It works indeed. (by example, apjfolio)
1. Define the apjfolio `collection` variable in `_config.yml` like the one _portfolio_.
1. Create `_apjfolio`, this page itself.
1. Put project files in `_apjfolio` folder. Notice that, individual project files' layout are _post_, not _pages_. 
1. Create _apjfolio.html_ in `_includes`. Only change in _portfolio.html_ is _site.portfolio_ to _site.apjfolio_. Other heading, sectioning mechanisms of _portfolio_ remained utilized as it should be.
1. Include _apjfolio.html_ in _apjfolio.md_  file by _liquid_ as is done in this file.

{% include apjfolio.html %}
