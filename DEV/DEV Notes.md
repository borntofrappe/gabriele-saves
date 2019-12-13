# Notes

-   [Routes](#routes)

-   [Icon System](#icon-system)

-   [Landing Page](#landing-page)

-   [Toggle](#toggle)

## Routes

The tutorial in [gatsby's own documentation](https://www.gatsbyjs.org/docs/) does a mighty good job in explaining how to set up a blog-like website, but before diving into the blog section, I decided to create my own landing page with a loading screen and a spiffy navigation.

To get up and running, the website is meant to describe two routes.

| Route   | Page         |
| ------- | ------------ |
| ./      | Landing Page |
| ./blog/ | Blog         |

Inevitably, it'll grow in complexity, contemplating the pages generated through Gatsby on the basis of markdown files, but also additional routes. With this regard I'd like to add a route describing a missing page (404), and one making up an about section. To avoid having too much on the plate however, these will be developed at a later stage, once I muster the courage to ship the website and a few articles.

## Icon System

> ! These guidelines are subject to change as I find better ways to manage an icon system.

In creating the SVG icons for the project I tried to be consistent in following a few guidelines:

-   use a fixed viewBox of `0 0 100 100`.

-   use `currentColor` instead of hard-coded values.

-   use `mask`, `clip-path` and other non-drawing elements instead of overlapping shapes. For the `id` attribute include the name of the icon followed by the type of non-drawing element (as in `css--mask`).

-   prefer repeating drawing elements instead of defining a shape and adding a `<use>` element. While `<use>` elements make the code more concise, I believe they also confuse the structure of the SVG syntax. Since they rely on an identifier (read: unique value), there is also risk of having conflicting `id`s when a graphic is repeated throughout the page. Non-drawing elements suffer from the same risk, but they are fewer in number and easier to manage.

## Landing Page

The flow of the landing page, from loading screen to navigation, is complicated enough to warrant a series of smaller-size projects:

-   **Loading** describes the basic idea behind the loading component, with a series of CSS animations, a lot of _magic numbers_ and hard-coded values. This is however more of a proof-of-concept to describe how the animation is supposed to look more than the final result. Ultimately, I plan to manage and streamline the flow of the animation using React Spring.

-   **Navigation** details how the navigation would ultimately look like. In the **Navigation States** folder you find also an idea as to how the SVG graphics should be updated following a `:hover` or `:focus` interaction. The vector graphic has been modified to better handle CSS transition, and this is ultimately the syntax meant for every icon in the navigation component.

## Toggle

This is a component meant to change the appearance of the entire application, by changing the color and background properties on the `body` element and have the change ripple through the project with the CSS's cascade.