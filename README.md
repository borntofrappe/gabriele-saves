# 11ty Notes

Here I try my best to document my journey discovering 11ty.

## Notes

### Getting Started

Looking at the [homepage for 11ty](https://www.11ty.dev/), it is surprisingly easy to get up and running.

```code
npm install -g @11ty/eleventy
```

I already had a `README.md` file in the root folder, so I didn't even need to run `echo '# Page header' > README.md`. Although, I didn't know you could create _and_ populate a file with that syntax.

```code
eleventy
eleventy --serve
```

That's it. Visit `localhost:8080/README`, and the markdown is made available in the familiar DOM tree.

### Frontmatter

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

### npm

I hadn't set up a package.json, but [11ty suggests installing the static site generator locally](https://www.11ty.dev/docs/getting-started/#create-a-package.json)

This should also allow me to install nunjuck, if I were to change my mind.

```code
npm init -y
```

Surpringly,the JSON object picks up from the README and the name of the repo.

```code
npm install --save-dev @11ty/eleventy
```

### .eleventyignore

This file allows to ignore instructed files and folders. For instance, this very README.md

```js
README.md;
```

This certainly saves me from worrying about the syntax I use in these notes.

## TO

### DO

- watch this: [Let’s Learn Eleventy! (with Zach Leatherman) — Learn With Jason](https://youtu.be/j8mJrhhdHWc)

- review [Official Docs](https://www.11ty.dev/docs/)

#### NE

- go through the [Getting Started Guide](https://www.11ty.dev/docs/getting-started/). Doesn't go too much into the ins and out of the static site generator. Completed 15-02-2020.

## Links

- [Let’s Learn Eleventy! (with Zach Leatherman) — Learn With Jason](https://youtu.be/j8mJrhhdHWc)
- [Official Docs](https://www.11ty.dev/docs/)
- [Getting Started Guide](https://www.11ty.dev/docs/getting-started/)
