## [HTML Essential training](https://www.linkedin.com/learning/html-essential-training-4)

HTML gives a way to markup content on the web. It's one of the basic ingredients of web developkment, alongside CSS for style and JavaScript for interactivity.

### Syntax

HTML is a declarative language, based on tags.

Generally, there opening `<p>` and closing `</p>` tags. Opening and closing tags together create html elements `<p></p>`.

```html
<p>This is the text for a paragraph</p>
```

Not all html elements have a closing tag, consider self closing tags like <br/>. For these elements, it doesn't make a difference whether the element includes a backslash. The browser will accommodate for both.

### DOM

Elements together are part of the Document Object Model — the DOM.

```html
<p><em>These words are emphasized</em>, but these are not</p>
```

In structure, they are part of the DOM Tree. Consider for instance how the emphasis element is nested in the paragraph.

This is most important as the structure of the HTML is used by browsers to provide meaning. Having a series of paragraphs wrapped in an article element, for instance, works to let the browser know that the paragraphs are part of the same area.

```html
<article>
  <p>HTML gives meaning.</p>
  <p>
    Be sure to close the elements to give the DOM tree its valuable structure.
  </p>
</article>
```

Content which is marked after the article is then understood as separate.

### block, inline

There is an important difference between block and inline elements. The first type starts a new block on the page, while the latter is included as part of the bigger block. An element has a block or inline behavior, but you can change this default with CSS.

### Attributes

Some attributes work on specific elements, but there are also global attributes, which work for every element.

- `class` and `id` to target elements in the stylesheet and in the script

- `contentEditable` to provide the functionality to change the content of an element

- `lang` to specify the language

- `dir` to specify the direction of the text

### Aria roles

From the HTML a browser builds the DOM Tree, and then the Accessibility Tree. This describes the structure of the page for assistive technologies.

By using semantic HTML, you are already equipped to cover much of the accessibility of a website, but it's sometimes necessary to add more information. This is where aria roles come into play.

Consider for instance:

- `aria-hidden`, to hide an element from the accessibility tree

- `aria-label`, to add more information regarding the element

Use them only as needed, and to supplement an already semantic tree.

### Comments

```html
<!-- -->
```

### HTML entities

Special sequences to show characters that would otherwise be meaningful in the DOM tree.

- &gt; to show `>`

- &lt; to show `<`

- &amp; to show `&`

- &nbsp; to show a non-breaking space

### Formatting text

#### Paragraphs (1)

Use `p` for paragraphs of text.

#### Headings (6)

Use `h*` for headlines, where `* = [1, 6]`. Pick the level on the basis of _semantics_, of the meaning of the headline.

#### Emphasis

Use `em` or `i` to italicize. Use `strong` or `b` to bolden. There are two elements because there are two different uses: the first is used to provide meaning, it has semantic importance, while the second is used purely to style the text differently.

#### Lists (3)

Use `li` for list items, within `ol` for ordered and `ul` for unordered lists. Use `dt` and `dd` for key value pairs (definition term and definition description respectively), wrapped in a `dl` (definition list).

#### Quotes (3)

Use `blockquote` and `q` for quotes. The former creates a new block while the latter is included inline in other block level elements. To cite the author or source, use the `cite` element.

#### Dates (1)

Use `time` to mark up dates and time. Use the `datetime` attribute to describe a machine-readable format for the date/time/range displayed in between the tags.

#### Code (1)

Use `code` to mark up code inline.

See HTML entities to see how HTML is shown, and not included on a page.

#### Spacing (2)

Use `br` to include line breaks. Self-closing tag.

Use `pre` to have the browser respect the spacing included in between the tags.

#### Other

Use `sub` and `sup` to mark up text below and above the baseline. See MATHML to see how to markup more complex equations.

Use `small` to mark up text as fine print.

### Navigation

#### Links

To mark up links use the `a` element. With the `href` attribute describes where the link leads.

```html
<a href=""></a>
<a href="">
  <img src="" alt="" width="" height="" />
</a>
```

An absolute URL points to a specific place. Always include the http, https prefix to specify the protocol.

A relative URL points to a place in the same domain.

#### Navigation

There are different patterns.

For a main menu, for instance, you can wrap an unordered list in a nav element, and each anchor link in list items.

Aria roles allow to provide more detail for assistive technologies.

```html
<nav role="navigation" aria-label="main menu">
  <ul>
    <li>
      <a href="">Home</a>
    </li>
    <li>
      <a href="">Prices</a>
    </li>
    <li>
      <a href="">Contact</a>
    </li>
  </ul>
</nav>
```

For a breadcrum trail, you might prefer an ordered list.

```html
<nav aria-label="breadcrumb">
  <ol>
    <li>
      <a href="">Blog</a>
    </li>
    <li>
      <a href="">Article</a>
    </li>
  </ol>
</nav>
```

For a footer finally, you might decide to skip a list altogether.

```html
<footer>
  <a href="">Privacy</a>
  <a href="">Terms of Service</a>
</footer>
```

### Graphics

#### img

Use the image element, always specifying four attributes:

- src, the URL describing the location of the image
- alt, the text used by assistive technologies. The text should describe the image, or its purpose. You can leave the attribute blank, for instance if the image is accompanied by text repeating the same content, but always include one.
- width and height. By specifying these the broswer has a chance to know the size before it moves on to download it, and it can accommodate for its presence immediately.

#### Formats

Quality and file size leads to different file formats.

- gif, poor quality images and short videos
- svg, logos, icons
- jpg, images that need to be compressed to smaller sizes
- png, images including transparency
- more

#### Responsive

To deliver the right resolution according to the screen, list images with different resolutions in the `srcset` attribute, and the browser will serve the appropriate by looking at the device specs.

```html
<img
  src=""
  alt=""
  width="480"
  height="360"
  srcset="https://img-960 2x, https://img-1440 3x, https://img-1920 4x"
/>
```

To deliver different images depending on the width of the screen instead, specifying the width with a `w` unit.

```html
<img
  src=""
  alt=""
  width="480"
  height="360"
  srcset="
    https://img-480   480w,
    https://img-960   960w,
    https://img-1440 1440w,
    https://img-1920 1920w
  "
/>
```

Device density and width will be taken into account. The assumption is however that the image will be 100% wide.

If you know in advance that the image covers a smaller size, you can specify so with the `sizes` attribute.

```html
<img
  src=""
  alt=""
  width="480"
  height="360"
  srcset="
    https://img-480   480w,
    https://img-960   960w,
    https://img-1440 1440w,
    https://img-1920 1920w
  "
  sizes="
    (max-width: 480px) 240px,
    (max-width: 960px) 480px,
    (max-width: 1440px) 960px,
    1920px
  "
/>
```

Which image to use at which media query.

#### Picture

Specify different images, or different parts of an image depending on the size with the picture element.

Include an img element as a fallback, so that browser that don't support picture will still render content.

```html
<picture>
  <img src="" alt="" width="480" height="360" />
</picture>
```

Specify the optioons in the `source` attribute

```html
<picture>
  <source media="(min-width:600px)" srcset="720" />
  <source srcset="320" />
  <img src="" alt="" width="480" height="360" />
</picture>
```

The latter source will be used if no previous source matches.

#### Figures

To pair caption use the figure and figcaption element. The information provided in this manner is inherently connected.

```html
<figure>
  <img src="" alt="" width="480" height="360" />
  <figcaption>Description</figcaption>
</figure>
```

This is handy for images, but also illustrations, or again graphics.

### Media

Audio, video.

#### Audio

```html
<audio src=""></audio>
```

Without the `controls` attribute, there is no interface to reproduce the file. You can provide one with JavaScript and the HTML media element API, or use the one provided by the website.

```html
<audio src="" controls></audio>
```

Additional attributes: `loop`, `autoplay`

In between the opening and closing tag you can provide multiple sources, multiple file formats.

```html
<audio controls>
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.mp3" type="audio/mpeg" />
</audio>
```

These are used in order, so that browsers use the first supported option.

```html
<audio controls>
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.mp3" type="audio/mpeg" />
  Element not supported
</audio>
```

#### Video

Repeats much of the logic introduced for the audio element.

```html
<video src="" controls></video>
```

It gets more complicated in terms of encoding. h.264 is a widely used codec, webm and av1 are two alternatives.

```html
<video controls>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
  Element not supported
</video>
```

There is no way to provide different resolutions directly with HTML. This is because the quality of a video is subject to time, and is not enough to provide a type based on a single decision. (consider adaptive bit-rate streaming and how applications like netflix continuously change the quality of a video depending on changing circumstances)

#### Captions and subtitles

There is a specific element and file format to provide captions. On the web, use web vtt: video text tracks.

```html
<video>
  <source />
  <track src="file.vtt" kind="captions" label="english" srclang="en" default />
  <track src="file-es.vtt" kind="captions" label="Espanol" srclang="es" />
</video>
```

`kind` specifies different options, like `captions`, or again `descriptions` to describe the content of the video, or again `chapters` to list the chapters of the video.

#### Embedding

Here you place content from a different site. Think of embedding a map from google, a pen from codepen. Generally, the service provides the markup for this content.

```html
<iframe />
```

### Identify content

#### Language

Describe the language of the content with the `lang` attribute.

```html
<html lang="en-US"></html>
```

Be specific.

#### Direction

How the content is read with the `dir` attribute

```html
<html lang="en-US" dir="ltr"></html>
```

#### Alphabet

Encoding standard specify and support different character sets

```html
<meta charset="UTF-8" />
```

#### Generic elements

`div` and `span` elements are used as elements without semantic meaning. Generic containers to wrap content.

### All together

#### Page

The HTML file is what's returned after the first request, and is read by the browser top to bottom.

- doctype, describing the era of the website

- html, all HTML

- head, metadata; things the browser needs to know, but not to show

- body, what is actually displayed

```html
<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body></body>
</html>
```

#### head

Information for the browser

- charset

- title

- responsive website (without, the browser assumes the page is a desktop layout and shrinks the layout for smaller devices)

- other meta tags; description, tile image, background color

- link, to link to other assets; using the `rel` attribute to specify the type of asset and the `href` attribute to specify the location

- script, to load a javascript file; can be included at the bottom of the page

```html
<head>
  <meta charset="UTF-8" />
  <title>Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <link href="main.css" rel="stylesheet" />
  <link href="icon.ico" rel="icon" />
</head>
```

#### Structure

- main; one per page. Main content

- header; site header. Logo, navigation

- footer; footer. Links, copyright information. Don't have to be at the bottom, but describe footer-type information.

- article; article; instance, independent unit of content

- section; sections; segments, zones. Start a new thing

- aside; sidebar, not the main attraction

### Forms

Built-in elements to accept input.

- form
- label
- input, a replacement element
- button

```html
<form>
  <label>Name</label>
  <input />
  <button></button>
</form>
```

You need to set up a structure in the back-end to accept data, but in terms of HTML:

- `name` attribute on the input allows to have an identifier for the inputted data

- `for` attribute on the label allows to connect a label to an input with an `id` attribute and a matching value. Alternatively, you can wrap the input in the label element.

```html
<label for="name">Name</label> <input name="name" id="name" />
```

#### More attributes

The `type` attribute allows to specify the type of input:

- `text`, default

- `email`, with client-side validation

- `submit`, for the button submitting the form

The `required` attribute allows to require the input on the client

The `placeholder` attribute allows to give a hint

The `value` attribute provides a default value. Useful to prepopulate with data you already have, but otherwise annoying

#### More types

- `password`

- `search`

- `tel` (phone)

- `date`

- `color`

- `file`, with additional atributes describing which file to accept, `accept`, or how many files to accept, `multiple`

Some browser provides different support and UI for different types.

#### More elements

To accept more text, use the `textarea` element.

To give an option among alternatives, use input elements with type of `checkbox` or `radio`.

```html
<input type="checkbox" value="apples" name="ingredient" id="apples" checked />
<input type="checkbox" value="oranges" name="ingredient" id="oranges" />
```

Always add a value, even on the checkbox, so that the text is passed to the back-end. Checkboxes, radio with the same name are connected.

With a dropdown list use a select and option elements.

Additional elements allow to garnish the form: `fieldset` to wrap the input, `legend` to introduce the specific input.

```html
<fieldset>
  <legend>Favorite color</legend>
  <select>
    <option>Blue</option>
    <option>Orange</option>
    <option>Red</option>
  </select>
</fieldset>
```

### Tables

Use `<table>` for tabular data.

There are plenty of elements connected to how to mark up data, and mirror the structure of the HTML page: just like there is a head and a body for the page, there is a thead and tbody for the table.

```html
<table>
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <thead></thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>27</td>
      </tr>
      <tr>
        <td>Eliza</td>
        <td>32</td>
      </tr>
    </tbody>
  </table>
</table>
```

`tr` for rows, `th` for header and `td` for data.

There are also `tfooter` and `caption`.

### Resources

- [MDN docs](https://developer.mozilla.org/en-US/)

- [HTML Standard](https://html.spec.whatwg.org/dev/introduction.html)
- [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/)
