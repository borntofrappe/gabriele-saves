---
title: Frontmatter and Liquid
layout: layout.liquid
---

<!-- https://youtu.be/j8mJrhhdHWc?t=1319 -->

# {{ title }}

This is quite meta, but data can be picked up automatically within the double curly brackets.

```md
---
title: Frontmatter
---
```

And later: **\{\{ title }}**

By default uses [liquid](https://shopify.dev/docs/liquid), a templating language from [Shopify](https://www.shopify.com/), but you can use other templates using a config file.

I heard good things from [Chris Coyier](https://twitter.com/chriscoyier) regarding [Nunjucks](https://mozilla.github.io/nunjucks/), so I'll give that one a trial. In a `.eleventy.js` file in the root folder:

```js
module.exports = {
  markdownTemplateEngine: "njk"
};
```

Testing things out with a [quick `if` statement](https://mozilla.github.io/nunjucks/templating.html#if).

```njk
{% if title %}
There is a title
{% endif %}
```

For a template: add a `_includes` folder at the root of the website. In here, a `layout.njk` file describes the following template.

```njk
<!doctype html>

<html lang="en">
<head>
  <title>{{title}}</title>
</head>

<body>
  {{content}}
</body>

</hml>
```

Refer to the layout file within the front matter.

```
layout: layout.njk
```

Small hitch. It's not `content` in njk, although that would work if you were to use liquid.

```
layout: layout.liquid
```

With `njk`, `content` the markup is pasted a string....It seems it's not enough to import nunjuck. Youneed to actually install it and consider [more options](https://www.11ty.dev/docs/languages/nunjucks/). To make due without the pain, I'll roll back to liquid for the time being.

Interesting.
