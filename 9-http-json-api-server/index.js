const http = require('http');
const url = require('url');

const parsetime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
};

const unixtime = (time) => {
  return {
    unixtime: time.getTime()
  }
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.dir(parsedUrl);
  const time = new Date(parsedUrl.query.iso);
  let result;

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time);
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, { 'content-type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8080);
