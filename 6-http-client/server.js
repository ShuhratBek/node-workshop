const http = require('http');
const words = require('boganipsum/clean_words')
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

const server = http.createServer((req, res) => {
  let i = 0;
  setInterval(() => {
    if (i === words.length) {
      return res.end();
    }
    res.write(words[i].trim());
    i++;
  }, 150);
});

server.listen(8080);
