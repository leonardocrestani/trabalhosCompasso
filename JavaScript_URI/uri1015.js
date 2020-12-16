var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [p1x, p1y] =  lines[0].split(" ").map(item => parseFloat(item));
var [p2x, p2y] =  lines[1].split(" ").map(item => parseFloat(item));

var distancia = Math.sqrt(Math.pow((p2x - p1x), 2) + Math.pow((p2y - p1y), 2));

console.log(distancia.toFixed(4));