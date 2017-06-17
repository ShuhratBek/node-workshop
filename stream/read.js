const Readable = require('stream').Readable;

const rs = Readable();
let c = 96;
rs._read = () => {
  if (c >= 'z'.charCodeAt(0)) return rs.push(null);
  setTimeout(() => {
    rs.push(String.fromCharCode(++c));
  }, 100);
};

rs.pipe(process.stdout);
