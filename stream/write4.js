const Stream = require('stream');
const s = new Stream;
s.writable = true;

let bytes = 0;

s.write = (buf) => {
  if (buf) {
    bytes += buf.length;
  }
};

s.end = (buf) => {
  if (arguments.length) s.write(buf);

  s.writable = false;
  console.log(bytes + ' bytes written');
};

s.destroy = () => {
  s.writable = false;
};

const fs = require('fs');
fs.createReadStream('message.txt').pipe(s);
