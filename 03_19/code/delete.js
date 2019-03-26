var fs = require('fs')
fs.unlink('C:/node/node/03_19/code/del.txt', (err) => {
if(err) throw err;
console.log("deleted successfully");
} );