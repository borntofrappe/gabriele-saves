---
title: Gabriele Saves
pagination:
  data: collections.writing
  size: 2
  alias: articles
---

Where I take a moment to save my journey as an aspiring web developer.

{% for article in articles %}

- [{{article.data.title}}]({{article.url}})

{% endfor %}

{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">previous</a>
{% endif %}

{% if pagination.href.next %}
<a href="{{pagination.href.next}}">next</a>
{% endif %}
