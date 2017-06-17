const http = require('http');

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.once('data', (err, data) => {
    if (err) return console.error(err);

    response.end(data);
  });
  response.on('error', console.error);
}).on('error', console.error);
