var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var raio = parseFloat(lines);

var area = (pi * (Math.pow(raio, 2)));

console.log(`A=${area.toFixed(4)}`);