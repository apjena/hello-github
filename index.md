---
layout: default
title: Wave of Thoughts 
---
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

---
layout: default
title: All Pages
permalink: /pages/
---
<h1>Latest Posts</h1>
<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.date | date_to_string }}</p>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>



---
layout: default
title: All Pages
permalink: /pages/
---

# Site Pages

<ul>
{% assign pages_list = site.html_pages | sort: "title" %}
{% for page in pages_list %}
  {% if page.title %}
  <li>
    <a href="{{ page.url | relative_url }}">{{ page.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

# <span style='text-shadow: 0px 0px 2px #0000FF; color: white'>Random Thoughts</span> 

{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}

- **bold** 
- _italicks_

<details markdown='1'><summary>Expand / Collapse</summary>
This is a detail folded.  A line space needed to render table or math. How long can it run? As long as the aragraph is not broken... 

$$\alpha + t = 5$$

------
R  | T
------
No, as long as the details tag is not broken!!!

</details>

$$\alpha + t = 5$$
------
R  | T | S
------




###Text color

<span style='background-color:#ffcb2e;'>Text with background color / highlight</span>

<span style='color:#3333ff;'>Text foreground color</span>

<span style='text-shadow: 0px 0px 6px #FF0000;'>Text with colored outline</span> / <span style='text-shadow: 0px 0px 2px #0000FF; color: white'>Text with colored outline</span>

$$
U = \langle H(q, p) \rangle = \int H(q, p) \rho(q, p) d^{\otimes N}q d^{\otimes N}p
$$

[testlinkmarkor](CppCBCSPhysics1.ipynb)

<style>
mark{
    color:red;
}
</style>

<mark>what is DataBase</mark>


### Compare the local database markdown based best free apps.

|   Feature | Markor   | Obsidian   |  Zettle  |
|----|----|----|----|
|   Synchronization |  No inbuilt  |  Subscription only  |  Has it: Dropbox/gdrive  |
|  Math  |  enable katex in view mode  |    | Single dollar inline mode has to enabled   |
| Math display breaks | Flexible | no space close to \$ | bracket inside \$ |
|  Image  |  slash infront of filename don't work  |    | introduces a slash infront of filename   |
| Export   | Does all!   |  Subscription only |  Does all!  |
| Viewer look   |  better  |  best  |  good  |
| Editor look | normal text | best, math edit with result | slight markdown |
| css scripts | infile scripts work perfectly in display |  | Dont work with display, but works right in exported output |
| Other | It has a clipping shortcut for web clipping. | | |

#### Synchronization:
Zettel repository set to Documents/markor folder.
Synchronization set to dropbox/zettle folder. Complete.
Now opening dropbox and editing the file in dropbox to add the markdown supported content below to test on Zettle. 
$$\frac{\sqrt{2}}{2}$$
is it showing the dropbox edit?

Yes, in zetel. Wonderful. Just exit and open zetel to see the synchronised version. **that's great!**

Now in markor (the local folder already set to the Documents/markor folder), the changes In dropbox as well as Zettle are reflected here, that's fantastic! So Zettle repository set to the "markor" folder on mobile actually synchronises well with the Dropbox.
So, after properly closing one application, another application can be opened to edit the file for a permanent change. However, zettle settings synchronises with Dropbox. Marker and Obsidian are local only.

Zetel has no math inline display, css not recognised. But does most of the tasks, most important is inbuilt synchronization with dropbox! The same markor folder is set as repository in zetel, and in turn it synchronises with dropbox. No need to use drivesync that has a risk of accessing the whole googledrive. In this way Obsidian can be used, but it can't export to pdf in mobile!

$$x'=\dfrac{x+vt}{\sqrt{1-\dfrac{v^{2}}{c^{2}}}}$$
This is a equation copied from nebo notebook math equation. 

#### Exporting
* Markor pdf good as displayed.
Pdf export: Infile css scripts work properly, math equations display right.
html: css to be seen. Html android system katex enabled html not display equations.
* Obsidian has template based export but not free!
* Zettle shares all formats. Unable to save directly to local folder. Pdf has to be system printed or opened with pdf viewer. Html has two mode, both temporary files has to be viewed by some browser. Or open with markor or colornote to see, edit, copy source.

```c
#indude <stdio.h> 
#include <string.h> 
union employee {
int id; 
char name[50];
}el;   //declaring el variable for union
int main()
{
//store first employee information el.id=101; 
strcpy(el.name, "Trilochan Tarai");
//copying string into char array 
//printing first employee information printf("employee 1 id : %d\n", el.id); printf("employee 1 name : %s\n", el.name); 
return 0; 
}
```

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
Your browser does not support the HTML canvas element.
</canvas>

<script>
const canvas = document.getElementById("myCanvas"); // Step 1: Find the canvas element
const ctx = canvas.getContext("2d");              // Step 2: Create a 2D drawing object
ctx.fillStyle = "#FF0000";                        // Step 3: Set drawing style
ctx.fillRect(10, 10, 150, 75);                    // Step 3: Draw a filled rectangle
</script>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
  Sorry, your browser does not support inline SVG.
</svg>

<marquee behavior="scroll" direction="left" scrollamount="3" onmouseover="this.stop()" onmouseout="this.start()">
  Your rolling text message goes here! <a href="#">Link</a> | More Text Here...
</marquee>
