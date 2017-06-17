const concat = require('concat-stream');
process.stdin.pipe(concat((body) => {
  console.dir(JSON.parse(body));
})).pipe(process.stdout);
