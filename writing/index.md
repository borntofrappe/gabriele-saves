---
title: Gabriele Saves
permalink: /
tags: false
---

Where I take a moment to save my journey as an aspiring web developer.

{% for article in collections.writing %}

- [{{article.data.title}}]({{article.url}})

{% endfor %}

## Code Snippet

{{code}}