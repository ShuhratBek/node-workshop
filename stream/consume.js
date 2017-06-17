process.stdin.on('readable', () => {
  const buf = process.stdin.read(3);
  console.dir(buf);
  process.stdin.read(0);
});
