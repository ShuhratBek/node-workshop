const { exec } = require('child_process');

exec('find .', (err, stdout, stderr) => {
  if(err) {
    return console.log(`err: ${err}`);
  }
  console.log(`result: ${stdout}`);
});
