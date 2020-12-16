var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [horaI, minI, horaF, minF] = lines.shift().split(" ").map(item => parseInt(item));

var horaTotal = (horaF - horaI);
var minTotal = (minF - minI);

if(minTotal < 0) {
    minTotal += 60;
    horaTotal -= 1;
    if(horaTotal < 0) {
        horaTotal += 24;
    }
}

if(minTotal === 0 && horaTotal===0) {
    horaTotal = 24;
    minTotal = 0;
    console.log(`O JOGO DUROU ${horaTotal} HORA(S) E ${minTotal} MINUTO(S)`);
}
else {
    console.log(`O JOGO DUROU ${horaTotal} HORA(S) E ${minTotal} MINUTO(S)`);
}