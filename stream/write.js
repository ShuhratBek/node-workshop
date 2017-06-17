const Writable = require('stream').Writable;
const ws = Writable({objectMode: true});
ws._write = (chunk, enc, next) => {
  console.dir(chunk);
  next();
};

process.stdin.pipe(ws);
