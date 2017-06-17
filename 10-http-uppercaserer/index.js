const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') return res.end('send me a POST');

  req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(8080);
