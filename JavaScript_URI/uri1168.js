var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var casosTeste = lines.shift();

for(var i=0; i<casosTeste; i++) {
    var soma = 0;
    var numeroLed = lines[i].split("").filter(item => {
        if(item !== "\r") {
            return item;
        }
    });
    for(var j=0; j<numeroLed.length; j++) {
        if(numeroLed[j] === '1') soma += 2;
        else if(numeroLed[j] === '2' || numeroLed[j] === '3' || numeroLed[j] === '5') soma += 5;
        else if(numeroLed[j] === '4') soma += 4;
        else if(numeroLed[j] === '6') soma += 6;
        else if(numeroLed[j] === '7') soma += 3;
        else if(numeroLed[j] === '8') soma += 7;
        else if(numeroLed[j] === '9' || numeroLed[j] === '0') soma += 6;
    }
    console.log(`${soma} leds`)
}