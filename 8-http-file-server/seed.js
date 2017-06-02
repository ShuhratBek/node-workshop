const rndtxt = require('boganipsum')({ paragraphs: 1, sentenceMax: 1 }) + '\n';
const fs = require('fs');
// const path = require('path');
// const testFile = path.join(__dirname, 'test.txt');
const testFile = 'test.txt';
fs.writeFile(testFile, rndtxt, 'utf8', (err) => {
  if(err) throw err;
});
