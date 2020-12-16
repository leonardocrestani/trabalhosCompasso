var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var valores = [];
var esquerda = 0;
var direita = 0;

for(var i=0; i<lines.length; i++) {
    valores[i] = lines[i].split("\n");
}

