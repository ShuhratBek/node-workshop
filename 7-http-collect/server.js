const http = require('http');
const words = require('boganipsum')({
  paragraphs: 2,
  sentenceMax: 1
}).split(' ');

const server = http.createServer((req, res) => {
  let i = 0;
  setInterval(() => {
    if (i === words.length) {
      return res.end();
    }
    res.write(words[i].trim());
    i++;
  }, 50);
});

server.listen(8080);
