# [TypeScript Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)

TypeScript works as a superset of JavaScript, extending the language to provide additional features.

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
  tsc script.ts
  ```

- convert and watch for changes

  ```bash
  tsc script.ts -w
  ```
