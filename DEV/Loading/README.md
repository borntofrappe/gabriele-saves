# Loading Animation

Proof of concept to describe the loading screen introducing the navigation.

## Notes

The animation described in this project is incredibly hack-y. Furthermore, the markup, stylesheet and script are meshed in a very brittle and unsustainable way (consider what happens if you want to change the duration of the animation).

Again, this is just meant as a proof of concept to showcase the idea behind the animation ultimately built with React Spring. Using the animation library will undoubtedly streamline the flow from animation to animation, as well as reduce cross browser-inconsistencies. It will also allow to include and animate a mask to effectively hide the content behind the pencil, instead of using the cheeky custom property `--background`.
