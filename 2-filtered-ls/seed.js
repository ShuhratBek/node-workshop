const fs = require('fs');
const path = require('path');
const files = require('./file-list');

const testDir = path.join(__dirname, 'files');

fs.mkdir(testDir, (err) => {
  if (err) {
    return console.log(err);
  }

  files.forEach((f) => {
    fs.writeFile(
      path.join(testDir, f),
      'nothing to see here',
      'utf8',
      (err) => {
        if(err) throw err;
        console.log(`Writing ${f} is done!`);
      }
    );
  });
});
