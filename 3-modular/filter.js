const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }

    list = list.filter((file) => {
      return path.extname(file) === '.' + ext;
    });

    callback(null, list);
  });
};
