var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var casosTeste = parseInt(lines.shift());
var valores = [];
var count = 1;

for (let i=0; i<casosTeste; i++) {
    let numero = parseInt(lines.shift());
    valores.push(numero);
}
valores.sort(function(a, b){return a-b});

for (let j=0; j<casosTeste; j++) {
    if (valores[j] == valores[j+1]) {
        count++;
    }
    else {
        console.log(`${valores[j]} aparece ${count} vez(es)`);
        count = 1;
    }
}