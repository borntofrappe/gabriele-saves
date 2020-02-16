---
title: Syntax Highlighting with Shiki
date: 2020-01-16
---

Here a code snippet or two to try out syntax highlighting.

## A-sync-ed

{{code}}

## JS

```js
function fibonacci(n) {
  const sequence = [1, 1];
  while (sequence.length < n) {
    const [a, b] = sequence.slice(-2);
    sequence.push(a + b);
  }

  return sequence[n - 1];
}
```

## CSS

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```
