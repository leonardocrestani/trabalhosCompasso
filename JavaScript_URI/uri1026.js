var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var soma;
var count = 0;

while(lines[count] !== ""){
    var [x, y] = lines[count].split(" ").map(item => parseInt(item));
    var p1 = ~x & y;
    var p2 = x & ~y;
    soma = p1 | p2;
    soma = soma >>> 0;
    console.log(soma);
    count++;
} 