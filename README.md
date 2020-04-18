# gabriele-saves

## 2020-04-18

After much considerations, I've decided to repurpose this repository as a public journal; a place where I jot down a line or two as I write software and grow as a result.

### borntofrappe

I've been occupied building this website with Svelte, and the static site generator Sapper. I've learnt a lot about both technologies, but ultimately decided to nuke the existing structure to use Eleventy instead.

There are a few driving factors, but the most prominent one is that the website is, and will remain for a considerable time, a blog. To this end, I really don't need much beyond markdown and the ability to parse said markdown to HTML. 11ty is a prime candidate to solve this issue.

#### Getting Started

From the [11ty.dev](https://www.11ty.dev/) webpage, I followed the [getting started](https://www.11ty.dev/docs/getting-started/) guide to set up the skeleton of the website.

I actually installed eleventy globally as well, but the docs assume _local project installation_.

```bash
npm init -y
npm install --save-dev @11ty/eleventy
```

This sets up a `package.json` and a `node_modules` folder with the necessary node modules. Be sure to add a `.gitignore` to avoid tracking the folder with git.

```.gitignore
# ignore folder
node_modules
```

Once installed `npx @11ty/eleventy` and `npx @11ty/eleventy --serve` process the necessary files to create a `_site` folder. The latter of the two commands also sets up a page on `localhost/8080` where the site is live and ready for viewing.

#### Files

Eleventy directly processes markup and markdown files. I've created one of each to test the output of the previous two bash commands.

Markup: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>borntofrappe</title>
  </head>
  <body>
    <nav>
      <a href="/">borntofrappe</a>
    </nav>

    <header>
      <h1>Hello there</h1>
      <p>Welcome to my own website</p>
    </header>
  </body>
</html>
```

Markdown: `up-and-running.md`

```md
# Up and Running

I woke up and decided to repurpose three repositories from my Github profile.
```

On `localhost/8080`, 11ty serves the document with the `<nav>` and `<header>` elements. On `localhost/8080/up-and-running`, 11ty shows instead the contents of the markdown file with a `<h1>` and `<p>` element.

#### Command Line

This is something to keep in mind: the command introduced in the previous section:

```bash
npx @11ty/eleventy
```

Can specify a particular input and output folder.

```bash
npx @11ty/eleventy --input=. --output=_site
```

Refer [to the docs](https://www.11ty.dev/docs/usage/) for other helpful options, like `--formats`

### borntofrappe.github.io

The last update I made to this website removed a banner I had included at the top of the page, announcing a big rewrite. I plan to shift my focus to the 11ty powered website, but I have a thought or two for this page as well. Ultimately, I'd like to use it as a hub, a place where I introduce myself or where I spent most of my waking hours (codepen, github, twitter). I'd be neat to also show a timeline, a map of sorts, charting my progress as a developer.
