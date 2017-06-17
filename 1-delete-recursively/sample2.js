const exec = require('child_process').exec;

const child = exec('rm -rf files', (err, out) => {
  console.log(out);
  err && console.log(err);
});
