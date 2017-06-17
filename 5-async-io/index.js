const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, contents) => {
  if (err) return console.error(err);

  const lines = contents.split('\n').length - 1;
  console.log(lines);
});
