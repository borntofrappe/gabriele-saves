_Please note:_ the demo analysed in the project, 'Finance Logger', is recreated with Svelte [in this REPL](https://svelte.dev/repl/55aafcf3c39f455a8cb91ecf667ed27f?version=3.38.2). In the `public` folder you find the markup and the stylesheet from this environment.

# [TypeScript Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)

TypeScript works as a superset of JavaScript, extending the language with additional features.

```bash
npm install -g typescript
```

## Compiling

A web browser understands JavaScript. It is therefore necessary to compile `.ts` files to JavaScript syntax.

With `tsc`:

- convert a specific `.ts` file to a specific `.js` file

  ```bash
  tsc script.ts script.js
  ```

  As a convenience, calling the compiler only with the input file creates a `.js` file with the same name

  ```bash
  tsc script.ts # script.js
  ```

- convert and watch for changes

  ```bash
  tsc script.ts -w
  ```
