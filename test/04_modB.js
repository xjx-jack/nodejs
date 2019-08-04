module.exports.test = 'B';

const modA = require('./04_modA.js');
console.log('modB:',modA.test);

module.exports.test = 'BB';