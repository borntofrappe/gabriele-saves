const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.', 'utf-8');
const notes = files.filter(file => path.extname(file) === '.md' && file !== 'README.md');

notes.forEach(note => {
  const content = fs.readFileSync(`./${note}`, { encoding: 'utf-8' });
  if(!/# Index/.test(content)) {
    const regExp = /(#{2,6}) (.+)/g;

    let match;
    const matches = [];
    while((match = regExp.exec(content)) !== null) {
      const [, spaces, title] = match;
      matches.push([spaces, title]);
    }
    const tableOfContents = [...matches].map(([spaces, title]) => `${'  '.repeat(spaces.length - 2)}- [${title}](#${title.replace(' ', '-')})`).join('\n\n');
    fs.writeFileSync(note, `# Index\n\n${tableOfContents}\n\n${content}`);
  }
});
