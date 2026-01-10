---
layout: default
header: Blog
title: Collections
summary: Where the magic happens - this is the blog!
link: /blog/
---

{% for post in site.posts %}
  <p><a href="https://kevquirk.com/{{ post.url }}">{{ post.title }}</a><br>
  {{ post.description }}<br>
  {{ post.date | date_to_string }}</p>
{% endfor %}

