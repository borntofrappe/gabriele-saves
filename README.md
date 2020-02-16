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

Any markdown file will create an `html` file with a URL matching the document's name.

### npm install

I installed eleventy globally, but [11ty suggests installing the static site generator locally](https://www.11ty.dev/docs/getting-started/#create-a-package.json).

A `package.json` is also useful in the moment I decide to pick up other dependencies (hello [shiki](https://github.com/octref/shiki))

```code
npm init -y
npm install --save-dev @11ty/eleventy
```

### Frontmatter

A markdown file is able to already include data in the form of property value pairs specified at the top of the file

```md
---
title: Up and Running
---

# {{ title }}
```

By default uses [liquid](https://shopify.dev/docs/liquid), a templating language from [Shopify](https://www.shopify.com/), but you can use other templates using a config file.

### Layout

On top of, or instead of, templating the file directly in the markdown document, you can add a template in a `layout` file.

Add a `_includes` folder at the root of the website. 11ty is instructed to look at the particular label.

Add a `layout.liquid` file.

```liquid
<!doctype html>

<html lang="en">
<head>
  <title>{{title}}</title>
</head>

<body>
  <h1>{{title}}</h1>
  {{content}}
</body>

</html>
```

Refer to the layout file within the front matter.

```
layout: layout.liquid
```

This also sets up hot reloading.

### .eleventyignore

This file allows to ignore instructed files and folders. For instance, this very README.md

```
README.md
```

This certainly saves me from worrying about the syntax I use in these notes.

### 11tydata

[Template data files](https://www.11ty.dev/docs/data-template-dir/). Applied on a file, or a directory. This allows to have the layout applied on every article in the writing section for instance.

`writing.11tydata.json`

```json
{
  "layout": "layout.liquid"
}
```

`json` or `js` should both work. Use the latter if you need to do something before setting up the necessary layout.

The entire section on [data cascade](https://www.11ty.dev/docs/data-cascade/) warrants a read or two.

### Collections

To set up an index page use a collection.

Again, [the docs have more](https://www.11ty.dev/docs/collections/), but here's the gist: refer to the directory in a `tags` field.

For instance and in `writing.11ty.json`.

```json
{
  "layout": "layout.liquid",
  "tags": "writing"
}
```

Then, pick up the collection where needed, using `collections.name`. For instance and in the root file `index.md`

And then pick up the collection in the markdown or templates which need to use the data. Similarly to `{{title}}`

```md
{% for post in collections.writing %}

- [{{post.data.title}}]({{post.url}})

{% endfor %}
```

Handily enough, the collection provides the path toward the markdown files in the `url` property.

### permalink

With a permalink you can modify the path where the markdown files are rendered. The output essentially.

For instance you can move `index.md` in the writing folder, next to the actual articles, and have it rendered on the root path as follows.

```md
---
title: Gabriele Saves
permalink: /
---
```

In the root `index` will reference itself, and you can remove it from the collection modifying the `tags` for the individual article.

```md
---
title: Gabriele Saves
permalink: /
tags: false
---
```

`false`, or an empty stirng, or`no`, as cheekily done by Jason in the screencast.

### Data Files

Instead of `data.json`, we can use `data.js` and export the data instead

```js
module.exports = {
  layout: "layout.liquid",
  tags: "writing"
};
```

This can actually be a function.

```js
module.exports = () => ({
  layout: "layout.liquid",
  tags: "writing"
};);
```

And an async function at that.

```js
module.exports = async () => ({
  layout: "layout.liquid",
  tags: "writing"
};);
```

Trying things out with `shiki`.

```code
npm i shiki
```

```js
const shiki = require("shiki");
```

```js
module.exports = async () => {
  shiki
    .getHighlighter({
      theme: "nord"
    })
    .then(highlighter => {
      console.log(highlighter.codeToHtml(`console.log('shiki');`, "js"));
    });

  // do something
  return {
    layout: "layout.liquid",
    tags: "writing"
  };
};
```

Logging several times something like the following:

```
<pre class="shiki" style="background-color: #2e3440"><code><span style="color: #8FBCBB">console</span><span style="color: #ECEFF4">.</span><span style="color: #88C0D0">log</span><span style="color: #D8DEE9FF">(</span><span style="color: #ECEFF4">'</span><span style="color: #A3BE8C">Hello world</span><span style="color: #ECEFF4">'</span><span style="color: #D8DEE9FF">)</span><span style="color: #81A1C1">;</span></code></pre>
```

To include it in the actual document you need an `await` call.

Something similar to:

```js
const shiki = require("shiki");

module.exports = async () => {
  const code = await shiki
    .getHighlighter({
      theme: "zeit"
    })
    .then(highlighter => highlighter.codeToHtml(`console.log('Hello world');`, "js"));

  return {
    layout: "layout.liquid",
    tags: "writing",
    code
  };
};
```

In `index.md` then, and for instance, you can include the desired output by referencing the variable.

```md
## Code Snippet

{{code}}
```

The issue comes then, how to pick up the code in the markdown files... regular expressions?

### \_data

In a `_data` folder you can apparently specify data that is available everywhere else.

For instance, if I were to create a `social.js` file in the `_data` folder.

```js
module.exports = () => ["CodePen", "Twitter", "Github", "freeCodeCamp"];
```

I could then pick up the array anywhere, including the `layout.liquid` file.

```liquid
<ul>
{%- for link in social  %}
  <li>{{link}}</li>
{% endfor %}
</ul>
```

### Pagination

https://youtu.be/j8mJrhhdHWc?t=3267

## TO

### DO

- complete this: [Let’s Learn Eleventy! (with Zach Leatherman) — Learn With Jason](https://youtu.be/j8mJrhhdHWc)

- learn how to use data with the [data cascade](https://www.11ty.dev/docs/data-cascade/)

- give a read to the templating language [liquid](https://shopify.dev/docs/liquid)

#### NE

- go through the [Getting Started Guide](https://www.11ty.dev/docs/getting-started/). Doesn't go too much into the ins and out of the static site generator. Completed 15-02-2020.

## Links

- [Let’s Learn Eleventy! (with Zach Leatherman) — Learn With Jason](https://youtu.be/j8mJrhhdHWc)
- [11ty](https://www.11ty.dev/)
