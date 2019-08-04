const { basename, dirname, extname} = require('path');

const filepath = '/Users/jack/NodeJS/15_join.js';

console.log(basename(filepath));
console.log(dirname(filepath));
console.log(extname(filepath));