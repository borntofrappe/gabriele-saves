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

### index Page

https://youtu.be/j8mJrhhdHWc?t=1750

---

## TO

### DO

- watch this: [Let’s Learn Eleventy! (with Zach Leatherman) — Learn With Jason](https://youtu.be/j8mJrhhdHWc)

- learn how to use data with the [data cascade](https://www.11ty.dev/docs/data-cascade/)

- give a read to the templating language [liquid](https://shopify.dev/docs/liquid)

#### NE

- go through the [Getting Started Guide](https://www.11ty.dev/docs/getting-started/). Doesn't go too much into the ins and out of the static site generator. Completed 15-02-2020.

## Links

- [Let’s Learn Eleventy! (with Zach Leatherman) — Learn With Jason](https://youtu.be/j8mJrhhdHWc)
- [11ty](https://www.11ty.dev/)
