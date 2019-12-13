# Toggle

Proof of concept to describe toggle component to alternate between a light and dark theme.

## Notes

-   `sun.svg` and `moon.svg` describe the two variants for the toggle. In `index.html` I managed to include a single SVG to animate between the two, and specifically by re-sizing the mask hiding parts of the circle and scaling the group responsible for the details around the sun icon.

-   I used `anime.js` as the JavaScript library allows to animate the contents of the mask across browsers without inconsistencies.

-   the colors are chosen arbitrarily, and might be subject to change as I discover an accessible, pleasing color palette for a website.

-   there is a delay in the transition described on the body selector, and this is on purpose. The idea is to move the focus from the toggle to the change it introduces.
