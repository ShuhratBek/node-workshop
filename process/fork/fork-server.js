const http = require('http');
const server = http.createServer();
const {fork} = require('child_process');

server.on('request', (req, res) => {
  if(req.url === '/compute') {
    const compute = fork('compute.js');
    compute.send('start');
    compute.on('message', sum => {
      res.end(`sum: ${sum}`);
    });
  } else {
    res.end('OK');
  }
});

server.listen(8005);
