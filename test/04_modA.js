module.exports.test = 'A';

const modB = require('./04_modB.js');
console.log('modA:',modB.test);

module.exports.test = 'AA';