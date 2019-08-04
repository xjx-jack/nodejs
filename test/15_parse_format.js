const {parse,format} = require('path');

const filePath = '/Users/jack/NodeJS/15_join.js';

const ret = parse(filePath);

console.log(ret);
console.log(format(ret));