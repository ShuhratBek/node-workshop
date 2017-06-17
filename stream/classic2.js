process.stdin.on('data', (buf) => {
  console.log(buf);
});

process.stdin.on('end', () => {
  console.log('__END__');
});
