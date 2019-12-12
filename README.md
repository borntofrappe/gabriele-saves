# Gabriele's Save File

> _where I take a moment to save my journey as an aspiring web developer_
>
> ---
>
> also, the perfect excuse to practice with the following:
>
> -   SVG Syntax
>
> -   React
>
> -   Gatsby
>
> -   GraphQL

## Routes

The tutorial in [gatsby's own documentation](https://www.gatsbyjs.org/docs/) does a mighty good job in explaining how to set up a blog-like website, but before diving into the blog section, I decided to create my own landing page with a loading screen and a spiffy navigation.

To get up and running, the website is meant to describe two routes.

| Route   | Page         |
| ------- | ------------ |
| ./      | Landing Page |
| ./blog/ | Blog         |

Inevitably, it'll grow in complexity, contemplating the pages generated through Gatsby on the basis of markdown files, but also additional routes. With this regard I'd like to add a route describing a missing page (404), and one making up an about section. To avoid having too much on the plate however, these will be developed at a later stage, once I muster the courage to ship the website and a few articles.

## TODO

<!-- I'll probably add this at the top as a bit of a map for upcoming features -->

-   [ ] 404 Route

-   [ ] "About me" Route

## Icon System

> ! These guidelines are subject to change as I find better ways to manage an icon system.

In creating the SVG icons for the project I tried to be consistent in following a few guidelines:

-   use a fixed viewBox of `0 0 100 100`;

-   use `currentColor` instead of hard-coded values;

-   use `mask`, `clip-path` and other non-drawing elements instead of overlapping shapes. For the `id` attribute include the name of the icon followed by the type of non-drawing element (as in `css--mask`);

-   prefer repeating drawing elements instead of defining a shape and adding a `<use>` element. While `<use>` elements make the code more concise, I believe they also confuse the structure of the SVG syntax. Since they rely on an identifier (read: unique value), there is also risk of having conflicting `id`s when a graphic is repeated throughout the page. Non-drawing elements suffer from the same risk, but they are fewer in number and easier to manage.
