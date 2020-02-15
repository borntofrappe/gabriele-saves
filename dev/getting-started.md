# Getting Started

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
