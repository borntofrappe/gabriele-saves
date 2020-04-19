// create a table of contents for every markdown file in the ./saves folder
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('./saves', 'utf-8');
const saves = files.filter(file => path.extname(file) === '.md');

saves.forEach(save => {
  const content = fs.readFileSync(`./saves/${save}`, { encoding: 'utf-8' });
    const regExp = /(#{2,6}) (.+)/g;

  let match;
  const matches = [];
  while((match = regExp.exec(content)) !== null) {
    const [, spaces, title] = match;
    const {index} = match;
    matches.push([spaces, title, index]);
  }
  const tableOfContents = matches.map(([spaces, title]) => `${'  '.repeat(spaces.length - 2)}- [${title}](#${title.replace(/ /g, '-')})`).join('\n\n');
  fs.writeFileSync(`./saves/${save}`, `# Table of Contents\n\n${tableOfContents}\n\n${content.slice(matches[0][2])}`);
});
