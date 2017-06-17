const through = require('through');
process.stdin.pipe(through((buf) => {
  console.log(buf.toString());
}, () => {
  console.log('end');
}));
