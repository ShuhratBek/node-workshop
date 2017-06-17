const fs = require('fs');
const ws = fs.createWriteStream('message.txt');

ws.write('beep ');

setTimeout(() => {
  ws.end('boop\n');
}, 1000);
