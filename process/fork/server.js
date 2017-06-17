const http = require('http');

const longComputation = () => {
  let sum = 0;
  for(let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

const server = http.createServer();

server.on('request', (req, res) => {
  if(req.url === '/compute') {
    const sum = longComputation();
    return res.end(sum.toString());
  } else {
    res.end('OK');
  }
});

server.listen(8005);
