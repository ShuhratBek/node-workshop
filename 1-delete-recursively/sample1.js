const fs = require('fs');

const deleteFolder = (path) => {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach((file, index) => {
      let curPath = path + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolder(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

deleteFolder('files');
