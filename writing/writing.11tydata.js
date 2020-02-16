const shiki = require('shiki');

module.exports = async () => {
  const code = await shiki
    .getHighlighter({
      theme: "zeit"
    })
    .then(highlighter => highlighter.codeToHtml(`console.log('Hello world');`, "js"));


  return ({
    layout: "layout.liquid",
    tags: "writing",
    code
  });
};
