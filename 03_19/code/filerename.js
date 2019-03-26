const fs = require('fs');
fs.rename('C:/node/hello.js', 'C:/node/world.js', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('C:/node/hello.js', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});