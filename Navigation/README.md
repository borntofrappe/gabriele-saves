# Navigation

Proof of concept to describe the anchor link element(s) included in the navigation component.

## Notes

In **Navigation - States** I described the hover and focus state for the individual anchor links. Notice that the SVG syntax is slightly different, since I decided to change the way text is introduced.

At first I used JavaScript and `anime.js` to animate the text through the `startOffset` attribute. Experimenting with this value however, I found a few inconsistencies across browsers, and specifically with the value described by `element.textLength.baseVal.value`. In Chrome, this value accurately depicted the length of the text, but on FireFox and Edge, this value was set to 0.

By experimenting further with the syntax around the `textPath` element, I found that percentage values accurately move the text around the center, and this lead me to the current solution. Text is introduced from the center of the icon, and is scaled up to pop with a CSS transition.

One thing worth spelling out: you might notice two `textPath` elements,

```html
<text text-anchor="middle" font-size="14" dy="-7">
    <textPath href="#icon-circle" startOffset="0%">blog</textPath>
    <textPath href="#icon-circle" startOffset="100%">blog</textPath>
</text>
```

This is because the text is actually cut when it stretches past the `path` element it uses. In this instance the first half is cut from the text with `0%` offset, while the second half is cut from the element with `100%` offset.

**Update**: instead of two `textPath` element, I ended up with two `text` element. It seems there are inconsistencies as to how the `dy` attribute affects multiple `textPath` elements in the same scope.

```html
<text text-anchor="middle" font-size="14" dy="-7">
    <textPath href="#icon-circle" startOffset="0%">blog</textPath>
</text>
<text text-anchor="middle" font-size="14" dy="-7">
    <textPath href="#icon-circle" startOffset="100%">blog</textPath>
</text>
```

## Be Careful

When extending this logic to multiple icons, be sure to have the `id` attributes to be unique in value. This makes the code slightly more verbose, but it is essential to avoid conflict across different `<svg>` elements.

## Transition Color

At least on Chrome, adding a transition for the change in color causes the icon to rapidly switch between blue and the chosen hue. This is because the icon has at first the default color of the anchor link. This is less of an issue for the final application, where the icons are introduced themselves with an animation. By the time the icons are scaled up, the switch in color should have already happened.

## textPath Update

While I found the position of the text to be rather satisfactory, I wanted to display the text at the bottom of the circle as well. This is achieved not through a rotation greater than 90 degrees, as it would have the text upside down, but through another path element, describing a rotation in the opposite direction.

```html
<path id="icon-circle-top" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" stroke="currentColor" stroke-width="6" fill="none" />

<path id="icon-circle-bottom" d="M 0 32 a 32 32 0 0 0 0 -64 32 32 0 0 0 0 64" stroke="currentColor" stroke-width="6" fill="none" />
```

Two adjustment when you switch from one path to the other:

-   the `dy` attribute for one value hides the text in the other. Switch between a negative value for the top section and a positive value for the bottom one (lifting the text up and pushing it down respectively).

-   the rotation applied on the wrapping group "flips" positioning the elements in a seemingly counter-intuitive way (if you think of the actual circle and how it draws counter-clockwise it actually makes sense). Positive values push the text to the left, in the bottom left corner, and negative values toward the bottom right. Something to be aware as you plot the icons around the center.

**Update's update**: the rotation can be actually better managed to rely a continuous value in the [0-360] range. To do this, modify the second path as follows:

```diff
-<path d="M 0 32 a 32 32 0 0 0 0 -64 32 32 0 0 0 0 64" />
+<path d="M 0 -32 a 32 32 0 0 0 0 64 32 32 0 0 0 0 -64" />
```

In this manner you can avoid "toggling" the rotation value and you can focus on using the second variant when the rotation is in the [90-270] degrees range.
