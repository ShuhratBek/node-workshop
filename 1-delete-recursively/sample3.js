const rimraf = require('rimraf');

rimraf('files', () => {
  console.log('Done');
});
