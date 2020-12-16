var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(input);

if(valor >= 0 && valor <= 100.0) {
    if(valor >= 0 && valor <= 25.0) {
        console.log(`Intervalo [0,25]`);
    }
    else if (valor > 25.0 && valor <= 50.0) {
        console.log(`Intervalo (25,50]`)
    }
    else if (valor > 50.0 && valor <= 70.0) {
        console.log(`Intervalo (50,75]`)
    }
    else {
        console.log(`Intervalo (75,100]`)
    }
}
else {
    console.log(`Fora de intervalo`);
}