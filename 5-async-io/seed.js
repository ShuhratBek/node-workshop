const fs = require('fs');
const path = require('path');
const boganipsum = require('boganipsum');

const testFile = path.join(__dirname, 'test.txt');
const lines = Math.ceil(Math.random() * 50);
const txt = boganipsum({ paragraphs: lines });

fs.writeFile(testFile, txt, 'utf8', (err) => {
  if (err) throw err;

  console.log('Done!');
});
